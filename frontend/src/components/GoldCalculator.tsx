import React, { useState } from 'react';
import { Calculator, Sparkles, MessageCircle, Scale, Info, ArrowRight, ShieldCheck, Phone, Check } from 'lucide-react';
import { GoldRates } from '../types';
import { calculateGoldValue } from '../utils/goldCalculator';
import { formatINR } from '../utils/formatCurrency';
import { BRANCHES_DATA, COMPANY_PHONE } from '../data/branches';
import { openWhatsAppEnquiry, getWhatsAppUrl } from '../services/whatsappService';

interface GoldCalculatorProps {
  rates: GoldRates;
  selectedPurity?: '24K' | '22K' | '18K';
  onQuoteConfirmed?: (details: any) => void;
}

export const GoldCalculator: React.FC<GoldCalculatorProps> = ({
  rates,
  selectedPurity = '22K',
  onQuoteConfirmed
}) => {
  const [purity, setPurity] = useState<'24K' | '22K' | '18K'>(selectedPurity);
  const [weight, setWeight] = useState<number>(16); // 2 sovereigns by default
  const [stoneDeduction, setStoneDeduction] = useState<number>(0);
  const [branch, setBranch] = useState<string>(BRANCHES_DATA[0].name);
  const [customerName, setCustomerName] = useState<string>('');

  const netWeight = Math.max(0.1, weight - stoneDeduction);
  const calc = calculateGoldValue(netWeight, purity, rates);

  const quickPavanButtons = [
    { label: '½ Pavan (4g)', grams: 4 },
    { label: '1 Pavan (8g)', grams: 8 },
    { label: '2 Pavans (16g)', grams: 16 },
    { label: '3 Pavans (24g)', grams: 24 },
    { label: '5 Pavans (40g)', grams: 40 },
    { label: '10 Pavans (80g)', grams: 80 },
    { label: '100g Bar', grams: 100 },
  ];

  const handleWhatsAppQuote = () => {
    const payload = {
      flow: 'quote' as const,
      name: customerName.trim() || 'Website Customer',
      mobile: 'Direct WhatsApp',
      service: 'Gold Valuation & Quote',
      purity: `${purity} (${calc.indicativePurityPercent})`,
      weight: `${weight}g (Net: ${netWeight.toFixed(2)}g)`,
      branch: branch,
      indicativeRate: calc.applicableRate,
      estimatedValue: calc.estimatedValue
    };

    const url = openWhatsAppEnquiry(payload);

    if (onQuoteConfirmed) {
      onQuoteConfirmed({
        isOpen: true,
        title: 'Gold Valuation Quote Generated',
        subtitle: 'Connecting you directly with Athishta Gold valuation desk.',
        name: customerName.trim() || 'Website Customer',
        service: 'Gold Valuation & Quote',
        branch: branch,
        purity: purity,
        weight: netWeight,
        rate: calc.applicableRate,
        estimatedValue: calc.estimatedValue,
        whatsappUrl: url,
        referenceId: `AGC-${Math.floor(100000 + Math.random() * 900000)}`
      });
    }
  };

  const whatsappDirectUrl = getWhatsAppUrl({
    flow: 'quote',
    name: customerName.trim() || 'Website Customer',
    mobile: 'Direct WhatsApp',
    service: 'Gold Valuation & Quote',
    purity: `${purity} (${calc.indicativePurityPercent})`,
    weight: `${weight}g (Net: ${netWeight.toFixed(2)}g)`,
    branch: branch,
    indicativeRate: calc.applicableRate,
    estimatedValue: calc.estimatedValue
  });

  return (
    <section id="gold-calculator" className="py-14 sm:py-20 bg-[#F6EFE2] border-b border-[#C89B3C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4EA] border border-[#C89B3C]/40 text-xs font-bold text-[#9A711F] mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>INSTANT GOLD VALUE CALCULATOR</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-[#140E0A] tracking-tight">
            Calculate Your Gold Value in Seconds
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-2">
            Enter your jewellery weight or select sovereign count to check today’s estimated valuation at live Tamil Nadu bullion rates.
          </p>
        </div>

        {/* 2-Column Luxury Calculator Box */}
        <div className="bg-[#FCF9F2] rounded-3xl border-2 border-[#C89B3C]/40 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Input Controls (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-6">
            
            {/* 1. Karat Selection */}
            <div>
              <label className="block text-xs font-extrabold text-[#140E0A] uppercase tracking-wider mb-2">
                1. Select Gold Purity (Karat)
              </label>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  { k: '22K' as const, title: '22K (916 BIS)', desc: 'Standard Jewellery' },
                  { k: '24K' as const, title: '24K (999 Pure)', desc: 'Coins & Bullion' },
                  { k: '18K' as const, title: '18K (750)', desc: 'Stone Jewellery' },
                ].map((item) => (
                  <button
                    key={item.k}
                    type="button"
                    onClick={() => setPurity(item.k)}
                    className={`p-3 sm:p-4 rounded-2xl border text-center transition-all cursor-pointer ${
                      purity === item.k
                        ? 'bg-[#1A130C] text-white border-[#C89B3C] shadow-md ring-2 ring-[#C89B3C]/30'
                        : 'bg-white text-[#140E0A] border-zinc-200 hover:border-[#C89B3C] hover:bg-[#FAF4EA]'
                    }`}
                  >
                    <div className="font-serif font-bold text-sm sm:text-base">{item.title}</div>
                    <div className={`text-[10px] mt-0.5 ${purity === item.k ? 'text-[#E8D49E]' : 'text-zinc-500'}`}>
                      {item.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Weight Inputs */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-extrabold text-[#140E0A] uppercase tracking-wider">
                  2. Gross Gold Weight
                </label>
                <span className="text-xs font-semibold text-[#9A711F]">
                  ≈ {(weight / 8).toFixed(2)} Pavans (Sovereigns)
                </span>
              </div>

              {/* Number input and slider */}
              <div className="flex items-center gap-3">
                <div className="relative flex-1">
                  <input
                    type="number"
                    min="0.1"
                    max="2000"
                    step="0.1"
                    value={weight || ''}
                    onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
                    className="w-full px-4 py-3.5 rounded-2xl border-2 border-[#C89B3C]/40 bg-white font-serif font-bold text-lg sm:text-xl text-[#140E0A] focus:outline-hidden focus:border-[#9A711F] shadow-inner"
                    placeholder="Enter weight in grams"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-zinc-400">
                    Grams (g)
                  </span>
                </div>
              </div>

              {/* Slider */}
              <div className="mt-3">
                <input
                  type="range"
                  min="1"
                  max="120"
                  step="0.5"
                  value={weight || 1}
                  onChange={(e) => setWeight(parseFloat(e.target.value))}
                  className="w-full accent-[#9A711F] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-zinc-400 mt-1">
                  <span>1g</span>
                  <span>40g (5 Pavans)</span>
                  <span>80g (10 Pavans)</span>
                  <span>120g</span>
                </div>
              </div>

              {/* Quick Select Buttons */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {quickPavanButtons.map((btn, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setWeight(btn.grams)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      weight === btn.grams
                        ? 'bg-[#C89B3C] text-[#120D08] shadow-xs'
                        : 'bg-white text-zinc-700 border border-zinc-200 hover:border-[#C89B3C] hover:bg-[#FAF4EA]'
                    }`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Stone & Enamel Deduction (Optional) */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-extrabold text-[#140E0A] uppercase tracking-wider">
                  3. Approximate Stone / Wax Weight (Optional)
                </label>
                <span className="text-xs text-zinc-500">
                  Net Gold: <strong className="text-[#140E0A]">{netWeight.toFixed(2)}g</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                {[0, 0.5, 1, 2, 5].map((st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => setStoneDeduction(st)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                      stoneDeduction === st
                        ? 'bg-[#1A130C] text-white border-[#1A130C]'
                        : 'bg-white text-zinc-600 border-zinc-200 hover:border-[#C89B3C]'
                    }`}
                  >
                    {st === 0 ? 'Pure Plain Gold (0g)' : `-${st}g`}
                  </button>
                ))}
              </div>
            </div>

            {/* Branch and Customer Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-[#C89B3C]/20">
              <div>
                <label className="block text-xs font-semibold text-zinc-600 mb-1">Your Name (Optional)</label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-xs bg-white focus:outline-hidden focus:border-[#C89B3C]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-600 mb-1">Preferred Branch</label>
                <select
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-300 text-xs bg-white focus:outline-hidden focus:border-[#C89B3C]"
                >
                  {BRANCHES_DATA.map((b) => (
                    <option key={b.id} value={b.name}>
                      {b.name} ({b.address.district})
                    </option>
                  ))}
                </select>
              </div>
            </div>

          </div>

          {/* Right Column: Output & Action Receipt (5 cols) */}
          <div className="lg:col-span-5 bg-[#1A130C] text-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#C89B3C]/30">
            
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs uppercase tracking-wider text-[#E8D49E] font-bold">
                  Indicative Valuation Summary
                </span>
                <span className="text-xs text-zinc-400">
                  {purity} @ {formatINR(calc.applicableRate)}/g
                </span>
              </div>

              {/* Big Grand Total Display */}
              <div className="bg-[#120D08] p-5 sm:p-6 rounded-2xl border border-[#C89B3C]/40 text-center shadow-inner">
                <div className="text-xs text-zinc-400 font-medium">
                  Estimated Total Payout
                </div>
                <div className="text-3xl sm:text-4xl xl:text-5xl font-serif font-extrabold text-[#FAF4EA] mt-1 tracking-tight">
                  {formatINR(calc.estimatedValue)}
                </div>
                <div className="text-xs text-[#E8D49E] mt-2 flex items-center justify-center gap-2">
                  <span>Net Gold: {netWeight.toFixed(2)} Grams</span>
                  <span>•</span>
                  <span>≈ {(netWeight / 8).toFixed(2)} Pavans</span>
                </div>
              </div>

              {/* Breakdown List */}
              <div className="space-y-2 text-xs text-zinc-300">
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-zinc-400">Applicable Live Rate:</span>
                  <span className="font-bold text-white">{formatINR(calc.applicableRate)} / gram</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-zinc-400">Purity Standard:</span>
                  <span className="font-semibold text-[#E8D49E]">{calc.indicativePurityPercent}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-zinc-400">Testing Method:</span>
                  <span className="text-emerald-400 font-semibold">German XRF Spectrometer (0% Damage)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-zinc-400">Settlement Mode:</span>
                  <span className="font-semibold text-white">Instant Cash / IMPS / RTGS / UPI</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-6">
              <button
                type="button"
                onClick={handleWhatsAppQuote}
                className="w-full py-4 px-4 rounded-xl font-extrabold text-sm text-[#120D08] bg-gradient-to-r from-[#C89B3C] via-[#E2B755] to-[#B58428] hover:from-[#B58428] hover:to-[#9A711F] hover:text-white transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-[#120D08]" />
                <span>Get Official Quote on WhatsApp</span>
              </button>

              <div className="flex items-center justify-between gap-2 text-xs">
                <a
                  href={`tel:${COMPANY_PHONE.replace(/\s+/g, '')}`}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-center border border-white/10 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C89B3C]" />
                  <span>Call {COMPANY_PHONE}</span>
                </a>

                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-[#198754] hover:bg-[#157347] text-white font-semibold text-center flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Direct Chat</span>
                </a>
              </div>

              <p className="text-[11px] text-zinc-400 text-center leading-relaxed">
                *Final settlement value is verified on digital Class-II precision scale & XRF spectrometer in branch or during doorstep evaluation.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
