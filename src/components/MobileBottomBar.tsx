import React from 'react';
import { Phone, MessageCircle, Navigation, Sparkles } from 'lucide-react';
import { COMPANY_PHONE } from '../data/branches';
import { openWhatsAppEnquiry } from '../services/whatsappService';
import { useLanguage } from '../context/LanguageContext';

interface MobileBottomBarProps {
  onOpenQuoteModal: () => void;
  onScrollToBranches: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  onOpenQuoteModal,
  onScrollToBranches
}) => {
  const { isTamil } = useLanguage();

  const handleWhatsApp = () => {
    openWhatsAppEnquiry({
      flow: 'general',
      name: 'Customer',
      mobile: '',
      service: isTamil ? 'மொபைல் நேரடி வாட்ஸ்அப்' : 'Mobile Quick Enquiry'
    });
  };

  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F0] border-t border-[#C89B3C]/30 shadow-2xl py-2 px-3 lg:hidden backdrop-blur-md bg-opacity-95"
    >
      <div className="max-w-md mx-auto grid grid-cols-4 gap-1.5">
        
        {/* 1. Call */}
        <a
          href={`tel:${COMPANY_PHONE.replace(/\s+/g, '')}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#E8D49E]/40 hover:bg-[#E8D49E]/70 text-[#241B13] border border-[#C89B3C]/30 transition-colors"
        >
          <Phone className="w-4 h-4 text-[#9A711F]" />
          <span className="text-[10px] font-bold mt-0.5">{isTamil ? 'அழைக்க' : 'Call'}</span>
        </a>

        {/* 2. WhatsApp */}
        <button
          onClick={handleWhatsApp}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#198754] text-white transition-colors cursor-pointer"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="text-[10px] font-bold mt-0.5">{isTamil ? 'வாட்ஸ்அப்' : 'WhatsApp'}</span>
        </button>

        {/* 3. Directions */}
        <button
          onClick={onScrollToBranches}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#FAF7F0] hover:bg-[#E8D49E]/30 text-[#241B13] border border-[#C89B3C]/30 transition-colors cursor-pointer"
        >
          <Navigation className="w-4 h-4 text-[#9A711F]" />
          <span className="text-[10px] font-bold mt-0.5">{isTamil ? 'கிளைகள்' : 'Branches'}</span>
        </button>

        {/* 4. Get Quote */}
        <button
          onClick={onOpenQuoteModal}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-gradient-to-r from-[#C89B3C] to-[#E2B755] text-[#171411] font-bold shadow-sm transition-all cursor-pointer"
        >
          <Sparkles className="w-4 h-4" />
          <span className="text-[10px] font-bold mt-0.5">{isTamil ? 'விலை அறிய' : 'Quote'}</span>
        </button>

      </div>
    </aside>
  );
};
