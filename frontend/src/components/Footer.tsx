import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, ArrowUp, ExternalLink } from 'lucide-react';
import { COMPANY_PHONE, COMPANY_EMAIL } from '../data/branches';
import { AthishtaLogo } from './AthishtaLogo';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenQuoteModal: (service?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateSection,
  onOpenQuoteModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const col1Links = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Gold Rate', id: 'gold-rate' },
    { label: 'Branches', id: 'branches' },
  ];

  const col2Links = [
    { label: 'Gallery', id: 'gallery' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-[#FAF7F0] border-t border-zinc-200 text-[#140E0A] pt-10 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-Column Grid matching Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-zinc-200">
          
          {/* Column 1: Brand & Logo (3.5 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <AthishtaLogo variant="circle-red" size="md" showSubtitle={true} />
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-serif font-bold text-xs sm:text-sm text-[#140E0A] mb-3">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs text-zinc-600">
              <div className="space-y-1.5">
                {col1Links.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => onNavigateSection(link.id)}
                    className="block text-left hover:text-[#A77B28] transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
              <div className="space-y-1.5">
                {col2Links.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => onNavigateSection(link.id)}
                    className="block text-left hover:text-[#A77B28] transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Connect With Us (2.5 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif font-bold text-xs sm:text-sm text-[#140E0A]">
              Connect With Us
            </h3>

            {/* Social Media Icons */}
            <div className="flex items-center gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-6 h-6 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-85 transition-opacity"
                title="Facebook"
              >
                <Facebook className="w-3 h-3 fill-current" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-6 h-6 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-600 text-white flex items-center justify-center hover:opacity-85 transition-opacity"
                title="Instagram"
              >
                <Instagram className="w-3 h-3" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center hover:opacity-85 transition-opacity"
                title="YouTube"
              >
                <Youtube className="w-3 h-3" />
              </a>
            </div>

            {/* Contact Details */}
            <div className="space-y-1.5 text-xs text-zinc-700">
              <a
                href={`tel:${COMPANY_PHONE.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 hover:text-[#A77B28] font-medium transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#140E0A]" />
                <span>{COMPANY_PHONE}</span>
              </a>

              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="flex items-center gap-1.5 hover:text-[#A77B28] text-zinc-600 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#140E0A]" />
                <span>{COMPANY_EMAIL}</span>
              </a>
            </div>
          </div>

          {/* Column 4: Our Location (2.5 cols) */}
          <div className="lg:col-span-2 space-y-2">
            <h3 className="font-serif font-bold text-xs sm:text-sm text-[#140E0A]">
              Our Location
            </h3>

            {/* Stylized Location Map Box matching Image */}
            <a
              href="https://maps.google.com/?q=Athishta+Gold+Company+Lakshmangudi"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg overflow-hidden border border-zinc-200 relative group shadow-2xs hover:shadow-xs transition-all"
            >
              <div className="h-20 bg-[#E8ECE9] relative flex items-center justify-center">
                {/* Subtle map roads texture */}
                <div className="w-full h-full opacity-60 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:6px_6px]" />
                <div className="absolute w-4 h-4 rounded-full bg-red-500/20 flex items-center justify-center animate-ping" />
                <div className="absolute w-4 h-4 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xs">
                  <MapPin className="w-2.5 h-2.5" />
                </div>
              </div>

              <div className="p-1.5 bg-white text-[10px] font-bold text-[#A77B28] flex items-center justify-between group-hover:underline">
                <span>View on Google Maps</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </div>
            </a>
          </div>

        </div>

        {/* Bottom Bar matching Image */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-500">
          <div>
            © 2026 Athishta Gold Company. All rights reserved.
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigateSection('contact')}
              className="hover:text-zinc-800 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>|</span>
            <button
              onClick={() => onNavigateSection('faq')}
              className="hover:text-zinc-800 transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span>Designed with ❤️ for a brighter tomorrow.</span>
            <button
              onClick={scrollToTop}
              className="w-7 h-7 rounded-full bg-[#A77B28] hover:bg-[#8F671E] text-white flex items-center justify-center shadow-xs transition-all cursor-pointer active:scale-95"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
