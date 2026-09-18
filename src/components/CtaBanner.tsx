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
    <section className="relative bg-[#140E0A] text-white overflow-hidden py-10 sm:py-14 border-y border-[#A77B28]/30">
      {/* Background Gold Jewelry Texture */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1600&q=80"
          alt="Gold jewellery texture"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#140E0A] via-[#140E0A]/90 to-[#140E0A]/70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Text matching Image 2 */}
        <div className="space-y-1 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#E5B54F]">
            Turn Your Gold into Opportunities
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300">
            Trusted by thousands. Experience the Athishta difference today.
          </p>
        </div>

        {/* Right CTA Action Buttons matching Image 2 */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-[#140E0A] bg-[#A77B28] hover:bg-[#C29235] transition-all flex items-center gap-2 shadow-md cursor-pointer active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Get Quote on WhatsApp</span>
          </a>

          <a
            href={`tel:${COMPANY_PHONE.replace(/\s+/g, '')}`}
            className="px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-black/60 hover:bg-black/80 border border-white/20 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </a>
        </div>

      </div>
    </section>
  );
};
