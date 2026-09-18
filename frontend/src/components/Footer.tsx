import React from 'react';
import { Phone, MapPin, Facebook, Instagram, Youtube, ArrowUp, ShieldCheck, Scale, Zap, Award, MessageCircle } from 'lucide-react';
import { AthishtaLogo } from './AthishtaLogo';
import { getWhatsAppUrl } from '../services/whatsappService';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenQuoteModal?: (service?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = getWhatsAppUrl({
    flow: 'general',
    name: 'Customer',
    mobile: '',
    service: 'General Enquiry',
  });

  const trustBadges = [
    { icon: Award, title: '916 BIS Hallmark', subtitle: 'Certified Standards' },
    { icon: Scale, title: 'German XRF Testing', subtitle: '100% Non-Destructive' },
    { icon: Zap, title: 'Instant IMPS Settlement', subtitle: 'Within 5 Minutes' },
    { icon: ShieldCheck, title: 'Zero Melting Deductions', subtitle: 'Transparent Weighing' },
  ];

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Athishta', id: 'about' },
    { label: 'Our Services', id: 'services' },
    { label: "Today's Gold Rate", id: 'gold-rate' },
    { label: 'Branch Directory', id: 'branches' },
    { label: 'Customer Testimonials', id: 'testimonials' },
  ];

  const branchLocations = [
    { name: 'Lakshmangudi (Head Office)', district: 'Thiruvarur' },
    { name: 'Ambattur Branch', district: 'Chennai' },
    { name: 'Avadi Branch', district: 'Chennai' },
    { name: 'Kumbakonam Branch', district: 'Thanjavur' },
    { name: 'Nagapattinam Branch', district: 'Nagapattinam' },
    { name: 'Pattukkottai Branch', district: 'Thanjavur' },
  ];

  return (
    <footer className="bg-[#0E0A07] text-[#FFFDF8] border-t-2 border-[#C9A227]/40 relative overflow-hidden">
      
      {/* Subtle ambient luxury gold glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#C9A227]/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-[#C9A227]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Top Pre-Footer: 4 Trust Badges in Golden Bar */}
      <div className="border-b border-[#C9A227]/25 bg-[#15110D]/90 py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div key={idx} className="flex items-center gap-3.5 group">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#C9A227]/20 to-[#C9A227]/5 border border-[#C9A227]/40 flex items-center justify-center text-[#C9A227] shrink-0 group-hover:scale-105 group-hover:bg-[#C9A227] group-hover:text-[#15110D] transition-all shadow-inner">
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-white tracking-wide">
                    {badge.title}
                  </h4>
                  <p className="text-xs text-[#9E978C] mt-0.5">
                    {badge.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#C9A227]/20">
          
          {/* Col 1: Brand & Logo (4.5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center">
              <AthishtaLogo variant="circle-red" size="md" showSubtitle={false} />
              <div className="ml-3.5 flex flex-col text-left">
                <span className="font-serif text-2xl font-bold tracking-tight text-white leading-none">
                  Athishta
                </span>
                <span className="font-serif text-sm font-semibold text-[#C9A227] tracking-wide mt-1">
                  Gold Company
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#9E978C] font-bold mt-0.5">
                  TRUSTED VALUE ALWAYS
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#B8B1A5] leading-relaxed max-w-md font-normal">
              South India's premier gold valuation company. Trusted by over 10,000+ families across Tamil Nadu for transparent certified gold buying, selling, and pledged gold redemption with instant spot settlement.
            </p>

            {/* Helpline Card */}
            <div className="p-4 rounded-2xl bg-white/5 border border-[#C9A227]/30 flex items-center justify-between gap-4 max-w-md backdrop-blur-xs">
              <div>
                <span className="text-[10px] font-bold text-[#C9A227] uppercase tracking-widest block">
                  Toll-Free Customer Helpline
                </span>
                <a
                  href="tel:+919363639955"
                  className="text-lg sm:text-xl font-serif font-extrabold text-white hover:text-[#C9A227] transition-colors mt-0.5 block"
                >
                  +91 93636 39955
                </a>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#C9A227] hover:bg-[#b8911e] text-[#15110D] flex items-center justify-center transition-all shadow-md active:scale-95 shrink-0"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              <span className="text-xs text-[#9E978C] font-medium mr-1">Follow Us:</span>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] hover:bg-[#C9A227] hover:text-[#15110D] transition-all"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] hover:bg-[#C9A227] hover:text-[#15110D] transition-all"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] hover:bg-[#C9A227] hover:text-[#15110D] transition-all"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Col 2: Quick Links (3.5 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif font-bold text-sm text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
              <span>Quick Navigation</span>
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#B8B1A5]">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigateSection(link.id)}
                    className="hover:text-[#C9A227] transition-colors cursor-pointer text-left flex items-center gap-2 hover:translate-x-1 duration-200"
                  >
                    <span className="text-[#C9A227] text-xs">›</span>
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Branch Directory & Head Office (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-serif font-bold text-sm text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
              <span>Tamil Nadu Branches</span>
            </h3>

            {/* Head Office Highlight */}
            <div className="p-3.5 rounded-xl bg-[#C9A227]/10 border border-[#C9A227]/30">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-[#C9A227] uppercase tracking-wider block">
                    Central Head Office
                  </span>
                  <p className="text-xs text-white mt-0.5 leading-snug">
                    TVR Main Road, Opp. Indian Overseas Bank, Lakshmangudi, Thiruvarur – 614102
                  </p>
                </div>
              </div>
            </div>

            {/* Other Branches Grid */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              {branchLocations.slice(1).map((loc, idx) => (
                <button
                  key={idx}
                  onClick={() => onNavigateSection('branches')}
                  className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-left transition-all group cursor-pointer"
                >
                  <span className="font-semibold text-xs text-white group-hover:text-[#C9A227] transition-colors block truncate">
                    {loc.name.replace(' Branch', '')}
                  </span>
                  <span className="text-[10px] text-[#9E978C] block">
                    {loc.district}
                  </span>
                </button>
              ))}
            </div>

          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E978C]">
          <div>
            © 2026 Athishta Gold Company. All rights reserved. • ISO 9001:2015 Standards
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#C9A227] font-semibold">Gold Today. A Better Tomorrow.</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-xl bg-[#C9A227] hover:bg-[#b8911e] text-[#15110D] flex items-center justify-center transition-all cursor-pointer shadow-md active:scale-95"
              aria-label="Scroll to top"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};


