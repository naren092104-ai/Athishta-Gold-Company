import React, { useState } from 'react';
import { X, Sparkles, Scale, User, Phone, MapPin, MessageCircle, Info, CheckCircle2 } from 'lucide-react';
import { GoldRates } from '../types';
import { calculateGoldValue } from '../utils/goldCalculator';
import { formatINR } from '../utils/formatCurrency';
import { BRANCHES_DATA } from '../data/branches';
import { openWhatsAppEnquiry, getWhatsAppUrl } from '../services/whatsappService';
import { validateIndianMobile, validateName, validateWeight } from '../utils/validation';
import { AthishtaLogo } from './AthishtaLogo';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  rates: GoldRates;
  initialService?: string;
  onQuoteConfirmed?: (details: any) => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  rates,
  initialService = 'Gold Valuation & Quote',
  onQuoteConfirmed
}) => {
  if (!isOpen) return null;

  const [purity, setPurity] = useState<'24K' | '22K' | '18K'>('22K');
  const [weight, setWeight] = useState<number>(16);
  const [name, setName] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');
  const [branch, setBranch] = useState<string>(BRANCHES_DATA[0].name);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const calc = calculateGoldValue(weight, purity, rates);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    const wtVal = validateWeight(weight);
    if (!wtVal.isValid) newErrors.weight = wtVal.message || 'Invalid weight';

    if (name.trim()) {
      const nmVal = validateName(name);
      if (!nmVal.isValid) newErrors.name = nmVal.message || 'Invalid name';
    }

    if (mobile.trim()) {
      const mobVal = validateIndianMobile(mobile);
      if (!mobVal.isValid) newErrors.mobile = mobVal.message || 'Invalid mobile';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const payload = {
      flow: 'quote' as const,
      name: name.trim() || 'Valued Customer',
      mobile: mobile.trim() || 'Direct WhatsApp',
      service: initialService,
      purity: `${purity} (${calc.indicativePurityPercent})`,
      weight: weight,
      branch: branch,
      indicativeRate: calc.applicableRate,
      estimatedValue: calc.estimatedValue
    };

    const url = openWhatsAppEnquiry(payload);
    onClose();

    if (onQuoteConfirmed) {
      onQuoteConfirmed({
        isOpen: true,
        title: 'Instant Gold Quote Prepared',
        subtitle: `For ${initialService} at ${branch}`,
        name: name.trim() || 'Valued Customer',
        service: initialService,
        branch: branch,
        purity: purity,
        weight: weight,
        rate: calc.applicableRate,
        estimatedValue: calc.estimatedValue,
        whatsappUrl: url,
        referenceId: `QTE-${Math.floor(100000 + Math.random() * 900000)}`
      });
    }
  };

  const directWhatsAppUrl = getWhatsAppUrl({
    flow: 'quote',
    name: name.trim() || 'Valued Customer',
    mobile: mobile.trim() || 'Direct WhatsApp',
    service: initialService,
    purity: `${purity} (${calc.indicativePurityPercent})`,
    weight: weight,
    branch: branch,
    indicativeRate: calc.applicableRate,
    estimatedValue: calc.estimatedValue
  });

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-xl w-full bg-[#FCF9F2] rounded-3xl overflow-hidden border-2 border-[#C89B3C] shadow-2xl my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#140E0A] text-[#FAF4EA] p-5 sm:p-6 flex items-center justify-between border-b border-[#C89B3C]/30">
          <div className="flex items-center gap-3">
            <AthishtaLogo variant="circle-red" size="sm" showSubtitle={false} />
            <div className="hidden sm:block border-l border-white/20 pl-3">
              <p className="text-[11px] text-[#E8D49E] font-medium">
                {initialService}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-5">
          
          {/* Output Highlight */}
          <div className="bg-[#120D08] text-white p-4 sm:p-5 rounded-2xl border border-[#C89B3C]/40 flex items-center justify-between shadow-inner">
            <div>
              <div className="text-[11px] uppercase tracking-wider text-[#E8D49E]">
                Indicative Valuation ({purity})
              </div>
              <div className="text-2xl sm:text-3xl font-serif font-extrabold text-[#FAF4EA] mt-0.5">
                {formatINR(calc.estimatedValue)}
              </div>
            </div>
            <div className="text-right text-xs">
              <span className="text-[#E8D49E] font-bold">@ {formatINR(calc.applicableRate)}/g</span>
              <div className="text-[10px] text-zinc-400">≈ {(weight / 8).toFixed(2)} Pavans</div>
            </div>
          </div>

          {/* Purity & Weight Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#140E0A] mb-1">Purity Grade</label>
              <div className="grid grid-cols-3 gap-1.5">
                {(['24K', '22K', '18K'] as const).map((k) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => setPurity(k)}
                    className={`py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                      purity === k
                        ? 'bg-[#1A130C] text-[#FAF4EA] border-[#C89B3C] shadow-sm'
                        : 'bg-white text-[#140E0A] border-zinc-200 hover:border-[#C89B3C]'
                    }`}
                  >
                    {k}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#140E0A] mb-1">Weight in Grams</label>
              <div className="relative">
                <input
                  type="number"
                  min="0.1"
                  step="0.1"
                  value={weight || ''}
                  onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 text-xs font-bold rounded-xl border border-zinc-300 focus:border-[#C89B3C] bg-white text-[#140E0A]"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 font-bold">
                  g
                </span>
              </div>
              {errors.weight && <p className="text-[10px] text-rose-600 mt-1">{errors.weight}</p>}
            </div>
          </div>

          {/* Customer Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-zinc-200">
            <div>
              <label className="block text-xs text-zinc-600 mb-1">Your Name (Optional)</label>
              <div className="relative">
                <User className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter name"
                  className="w-full pl-8 pr-3 py-2 text-xs rounded-xl border border-zinc-300 focus:border-[#C89B3C] bg-white text-[#140E0A]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-zinc-600 mb-1">Mobile Number (Optional)</label>
              <div className="relative">
                <Phone className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="10-digit mobile"
                  maxLength={10}
                  className="w-full pl-8 pr-3 py-2 text-xs rounded-xl border border-zinc-300 focus:border-[#C89B3C] bg-white text-[#140E0A]"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs text-zinc-600 mb-1">Preferred Branch</label>
            <div className="relative">
              <MapPin className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <select
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="w-full pl-8 pr-3 py-2 text-xs rounded-xl border border-zinc-300 focus:border-[#C89B3C] bg-white text-[#140E0A]"
              >
                {BRANCHES_DATA.map((b) => (
                  <option key={b.id} value={b.name}>
                    {b.name} ({b.address.district})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2 pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl font-extrabold text-sm text-[#120D08] bg-gradient-to-r from-[#C89B3C] via-[#E2B755] to-[#B58428] hover:from-[#B58428] hover:to-[#9A711F] hover:text-white transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Get Quote on WhatsApp</span>
            </button>
          </div>

          <p className="text-[10px] text-zinc-400 text-center flex items-center justify-center gap-1">
            <Info className="w-3 h-3" />
            <span>Indicative valuation. Final rate is verified on XRF spectrometer in branch/doorstep.</span>
          </p>

        </form>
      </div>
    </div>
  );
};
