import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { COMPANY_PHONE } from '../data/branches';
import { getWhatsAppUrl } from '../services/whatsappService';

interface CtaBannerProps {
  onOpenQuoteModal?: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenQuoteModal }) => {
  const whatsappUrl = getWhatsAppUrl({
    flow: 'general',
    name: 'Customer',
    mobile: '',
    service: 'Gold Valuation',
  });

  return (
    <section className="relative bg-[#0E0906] text-white overflow-hidden py-12 sm:py-16 border-y border-[#A77B28]/40">
      {/* Background Gold Jewelry Texture */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury gold texture"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E0906] via-[#0E0906]/95 to-[#0E0906]/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Text */}
        <div className="space-y-1.5 text-center md:text-left">
          <span className="text-[11px] font-bold text-[#E5B54F] uppercase tracking-widest block">
            Instant Liquidity • Guaranteed Security
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white">
            Turn Your Gold into <span className="luxury-gold-text">Opportunities</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-xl">
            Trusted by thousands across Tamil Nadu. Experience the certified Athishta prestige today.
          </p>
        </div>

        {/* Right CTA Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[#140E0A] bg-gradient-to-r from-[#E5B54F] via-[#F3C34F] to-[#C89B3C] hover:brightness-105 transition-all flex items-center gap-2 shadow-lg shadow-[#A77B28]/25 cursor-pointer active:scale-95 border border-[#FFF3D1]"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Get Quote on WhatsApp</span>
          </a>

          <a
            href={`tel:${COMPANY_PHONE.replace(/\s+/g, '')}`}
            className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/25 transition-all flex items-center gap-2 cursor-pointer active:scale-95 backdrop-blur-xs"
          >
            <Phone className="w-4 h-4 text-[#E5B54F]" />
            <span>Call Our Concierge</span>
          </a>
        </div>

      </div>
    </section>
  );
};
