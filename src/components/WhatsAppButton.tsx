import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { openWhatsAppEnquiry } from '../services/whatsappService';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    openWhatsAppEnquiry({
      flow: 'general',
      name: 'Customer',
      mobile: '',
      service: 'Instant WhatsApp Enquiry'
    });
  };

  return (
    <div className="fixed bottom-20 md:bottom-6 right-5 z-40 flex flex-col items-end gap-2">
      {/* Optional Tooltip banner */}
      {showTooltip && (
        <div className="flex items-center gap-2 bg-[#241B13] text-[#FAF4EA] text-xs py-2 px-3.5 rounded-2xl shadow-xl border border-[#C89B3C]/50">
          <span>Need instant gold rates or quotes? Chat with us!</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-zinc-400 hover:text-white p-0.5 cursor-pointer"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        id="floating-whatsapp-btn"
        type="button"
        onClick={handleClick}
        className="w-14 h-14 rounded-full bg-[#198754] hover:bg-[#157347] text-white shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 group cursor-pointer border-2 border-white"
        aria-label="Chat with Athishta Gold Company on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
};
