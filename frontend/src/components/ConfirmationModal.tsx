import React, { useState } from 'react';
import { X, CheckCircle2, MessageCircle, Phone, Copy, Check, Sparkles, MapPin, Scale } from 'lucide-react';
import { COMPANY_PHONE } from '../data/branches';
import { formatINR } from '../utils/formatCurrency';

export interface ConfirmationDetails {
  isOpen: boolean;
  title: string;
  subtitle: string;
  name: string;
  service: string;
  branch?: string;
  purity?: string;
  weight?: number | string;
  rate?: number;
  estimatedValue?: number;
  whatsappUrl: string;
  referenceId: string;
}

interface ConfirmationModalProps {
  details: ConfirmationDetails | null;
  onClose: () => void;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ details, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!details || !details.isOpen) return null;

  const handleCopy = () => {
    const text = `Athishta Gold Company Quotation\nRef: ${details.referenceId}\nService: ${details.service}\nPurity: ${details.purity || '22K'}\nWeight: ${details.weight || 0}g\nEstimated Value: ${details.estimatedValue ? formatINR(details.estimatedValue) : 'Calculated on spot'}\nBranch: ${details.branch || 'Lakshmangudi'}\nHelpline: ${COMPANY_PHONE}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-[#FAF7F0] rounded-3xl overflow-hidden border-2 border-[#C89B3C] shadow-2xl my-8 text-[#171411]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1A130C] text-[#FAF4EA] p-6 text-center relative border-b border-[#C89B3C]/30">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#C89B3C] to-[#E2B755] text-[#171411] flex items-center justify-center mx-auto mb-3 shadow-lg">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="text-xs font-bold text-[#E8D49E] tracking-widest uppercase mb-1">
            Ref #{details.referenceId}
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
            {details.title}
          </h3>
          <p className="text-xs text-zinc-300 mt-1">
            {details.subtitle}
          </p>
        </div>

        {/* Content Body / Valuation Receipt */}
        <div className="p-6 space-y-4">
          
          {/* Main Calculated Value Box if available */}
          {details.estimatedValue && details.estimatedValue > 0 ? (
            <div className="bg-gradient-to-br from-[#241B13] to-[#171411] text-white p-4 sm:p-5 rounded-2xl border border-[#C89B3C]/50 shadow-inner text-center">
              <div className="text-[11px] uppercase tracking-wider text-[#E8D49E]">
                Indicative Valuation Amount
              </div>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#FAF4EA] mt-1">
                {formatINR(details.estimatedValue)}
              </div>
              <div className="text-xs text-zinc-300 mt-1 flex items-center justify-center gap-2">
                <span>{details.weight}g</span>
                <span>•</span>
                <span>{details.purity}</span>
                {details.rate ? (
                  <>
                    <span>•</span>
                    <span className="text-[#E8D49E]">@{formatINR(details.rate)}/g</span>
                  </>
                ) : null}
              </div>
            </div>
          ) : null}

          {/* Details Summary Grid */}
          <div className="bg-white rounded-2xl p-4 border border-zinc-200 text-xs space-y-2.5">
            <div className="flex justify-between pb-2 border-b border-zinc-100">
              <span className="text-zinc-500">Customer Name:</span>
              <span className="font-bold text-[#171411]">{details.name || 'Valued Customer'}</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-zinc-100">
              <span className="text-zinc-500">Service:</span>
              <span className="font-semibold text-[#9A711F]">{details.service}</span>
            </div>
            {details.branch && (
              <div className="flex justify-between pb-2 border-b border-zinc-100">
                <span className="text-zinc-500">Branch:</span>
                <span className="font-semibold text-[#171411]">{details.branch}</span>
              </div>
            )}
            <div className="flex justify-between text-zinc-500">
              <span>Support Helpline:</span>
              <span className="font-bold text-[#171411]">{COMPANY_PHONE}</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2.5 pt-2">
            <a
              href={details.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-[#198754] hover:bg-[#157347] transition-all shadow-md flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Open WhatsApp Chat Directly</span>
            </a>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${COMPANY_PHONE.replace(/\s+/g, '')}`}
                className="py-2.5 px-3 rounded-xl text-xs font-bold text-[#241B13] bg-[#E8D49E]/50 hover:bg-[#E8D49E] border border-[#C89B3C]/40 text-center transition-colors flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#9A711F]" />
                <span>Call Helpline</span>
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="py-2.5 px-3 rounded-xl text-xs font-bold text-[#241B13] bg-white hover:bg-zinc-50 border border-zinc-300 text-center transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy Summary'}</span>
              </button>
            </div>
          </div>

          <p className="text-[11px] text-zinc-400 text-center pt-1">
            Our valuation team operates all 7 days (9:30 AM – 8:00 PM) across all 6 Tamil Nadu branches.
          </p>

        </div>
      </div>
    </div>
  );
};
