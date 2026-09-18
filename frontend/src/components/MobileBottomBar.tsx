import React from 'react';
import { Phone, MessageCircle, Calculator } from 'lucide-react';
import { COMPANY_PHONE } from '../data/branches';
import { openWhatsAppEnquiry } from '../services/whatsappService';

interface MobileBottomBarProps {
  onOpenQuoteModal: () => void;
  onScrollToBranches?: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  onOpenQuoteModal,
}) => {
  const handleWhatsApp = () => {
    openWhatsAppEnquiry({
      flow: 'general',
      name: 'Customer',
      mobile: '',
      service: 'Mobile Quick Enquiry'
    });
  };

  const handleQuote = () => {
    const el = document.getElementById('gold-calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenQuoteModal();
    }
  };

  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#15110D]/95 border-t border-[#C9A227]/30 shadow-2xl py-2 px-4 sm:hidden backdrop-blur-md"
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2.5">
        
        {/* 1. Call */}
        <a
          href={`tel:${COMPANY_PHONE.replace(/\s+/g, '')}`}
          className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-[#C9A227]" />
          <span className="text-xs font-bold">Call</span>
        </a>

        {/* 2. WhatsApp */}
        <button
          onClick={handleWhatsApp}
          className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-[#C9A227] hover:bg-[#b8911e] text-[#15110D] font-bold text-xs transition-colors cursor-pointer shadow-xs"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-current" />
          <span>WhatsApp</span>
        </button>

        {/* 3. Quote */}
        <button
          onClick={handleQuote}
          className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 transition-colors cursor-pointer"
        >
          <Calculator className="w-3.5 h-3.5 text-[#C9A227]" />
          <span className="text-xs font-bold">Quote</span>
        </button>

      </div>
    </aside>
  );
};

