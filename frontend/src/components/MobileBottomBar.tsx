import React from 'react';
import { Phone, MessageCircle, Navigation, Sparkles } from 'lucide-react';
import { COMPANY_PHONE } from '../data/branches';
import { openWhatsAppEnquiry } from '../services/whatsappService';

interface MobileBottomBarProps {
  onOpenQuoteModal: () => void;
  onScrollToBranches: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  onOpenQuoteModal,
  onScrollToBranches
}) => {
  const handleWhatsApp = () => {
    openWhatsAppEnquiry({
      flow: 'general',
      name: 'Customer',
      mobile: '',
      service: 'Mobile Quick Enquiry'
    });
  };

  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#140E0A]/95 border-t border-[#C89B3C]/40 shadow-2xl py-2 px-3 lg:hidden backdrop-blur-md"
    >
      <div className="max-w-md mx-auto grid grid-cols-4 gap-2">
        
        {/* 1. Call */}
        <a
          href={`tel:${COMPANY_PHONE.replace(/\s+/g, '')}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 transition-colors"
        >
          <Phone className="w-4 h-4 text-[#E5B54F]" />
          <span className="text-[10px] font-bold mt-0.5">Call</span>
        </a>

        {/* 2. WhatsApp */}
        <button
          onClick={handleWhatsApp}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#198754] hover:bg-[#157347] text-white transition-colors cursor-pointer shadow-xs"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="text-[10px] font-bold mt-0.5">WhatsApp</span>
        </button>

        {/* 3. Showrooms */}
        <button
          onClick={onScrollToBranches}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 transition-colors cursor-pointer"
        >
          <Navigation className="w-4 h-4 text-[#E5B54F]" />
          <span className="text-[10px] font-bold mt-0.5">Showrooms</span>
        </button>

        {/* 4. Instant Quote */}
        <button
          onClick={onOpenQuoteModal}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-gradient-to-r from-[#E5B54F] to-[#C89B3C] text-[#140E0A] font-bold shadow-xs transition-all cursor-pointer"
        >
          <Sparkles className="w-4 h-4" />
          <span className="text-[10px] font-bold mt-0.5">Quote</span>
        </button>

      </div>
    </aside>
  );
};
