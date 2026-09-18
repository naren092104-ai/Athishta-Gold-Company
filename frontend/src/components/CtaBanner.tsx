import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../services/whatsappService';

interface CtaBannerProps {
  onOpenQuoteModal?: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenQuoteModal }) => {
  const whatsappUrl = getWhatsAppUrl({
    flow: 'general',
    name: 'Customer',
    mobile: '',
    service: 'Gold Valuation & Final Quote',
  });

  const handleQuoteClick = () => {
    const el = document.getElementById('gold-calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenQuoteModal) {
      onOpenQuoteModal();
    }
  };

  return (
    <section className="relative bg-[#15110D] text-[#FFFDF8] py-16 sm:py-20 lg:py-24 border-t border-[#C9A227]/30 overflow-hidden">
      {/* Subtle gold ambient glow in corners */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#C9A227]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#C9A227]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white">
          Ready to Know Your <span className="gold-gradient-text">Gold's Value?</span>
        </h2>

        {/* One Short Sentence */}
        <p className="text-base sm:text-lg text-zinc-300 max-w-xl mx-auto leading-relaxed">
          Experience transparent evaluation, fair pricing, and instant payment today.
        </p>

        {/* Two Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            type="button"
            onClick={handleQuoteClick}
            className="px-7 py-3.5 rounded-xl font-bold text-sm text-[#15110D] bg-gradient-to-r from-[#C9A227] via-[#DFB83D] to-[#C9A227] hover:brightness-105 transition-all flex items-center gap-2 shadow-lg shadow-[#C9A227]/25 cursor-pointer active:scale-98"
          >
            <span>Get Gold Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-xl font-bold text-sm text-[#FFFDF8] bg-white/10 hover:bg-white/15 border border-white/20 hover:border-[#C9A227]/50 transition-all flex items-center gap-2 cursor-pointer active:scale-98"
          >
            <MessageCircle className="w-4 h-4 text-[#C9A227] fill-[#C9A227]/20" />
            <span>WhatsApp Us</span>
          </a>
        </div>

      </div>
    </section>
  );
};

