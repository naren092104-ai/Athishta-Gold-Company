import React from 'react';
import { MapPin, Phone, Instagram, Facebook, Youtube } from 'lucide-react';

export const TopAnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#17130E] text-[#EAE4D9] text-xs border-b border-[#C9A227]/25 py-2 px-4 sm:px-6 lg:px-8 relative z-30 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left: Location branding */}
        <div className="flex items-center gap-2 text-xs font-medium text-[#C9A227]">
          <MapPin className="w-3.5 h-3.5 text-[#C9A227] shrink-0" />
          <span className="text-white/90">Trusted Gold Services Across Tamil Nadu</span>
        </div>

        {/* Center: 3 Core Pillars (hidden on smaller screens) */}
        <div className="hidden md:flex items-center gap-3 text-[11px] font-semibold tracking-wider text-white/75 uppercase">
          <span>Transparent</span>
          <span className="text-[#C9A227]/60">|</span>
          <span>Fair Pricing</span>
          <span className="text-[#C9A227]/60">|</span>
          <span>Instant Payment</span>
        </div>

        {/* Right: Phone & Socials */}
        <div className="flex items-center gap-4 text-xs">
          <a
            href="tel:+919363639955"
            className="flex items-center gap-1.5 font-semibold text-white hover:text-[#C9A227] transition-colors"
          >
            <Phone className="w-3 h-3 text-[#C9A227]" />
            <span>+91 93636 39955</span>
          </a>

          <div className="hidden sm:flex items-center gap-2.5 text-[#C9A227] border-l border-white/20 pl-3.5">
            <a
              href="https://www.instagram.com/athishtagoldcompany?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              title="Instagram"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.facebook.com/people/Athishta-Gold-Company/61585687775557/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              title="Facebook"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.youtube.com/@athishtagoldbuyingcompany"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              title="YouTube"
            >
              <Youtube className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
