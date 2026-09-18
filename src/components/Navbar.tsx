import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Facebook, Instagram, Youtube } from 'lucide-react';
import { COMPANY_PHONE } from '../data/branches';
import { getWhatsAppUrl } from '../services/whatsappService';
import { AthishtaLogo } from './AthishtaLogo';

interface NavbarProps {
  onOpenQuoteModal: (service?: string) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenQuoteModal,
  onNavigateSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        'home',
        'about',
        'services',
        'gold-rate',
        'branches',
        'gallery',
        'testimonials',
        'faq',
        'contact'
      ];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Gold Rate', id: 'gold-rate' },
    { label: 'Branches', id: 'branches' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigateSection(sectionId);
  };

  const whatsappDirectUrl = getWhatsAppUrl({
    flow: 'general',
    name: 'Customer',
    mobile: '',
    service: 'Gold Quote Request'
  });

  return (
    <>
      {/* 1. Top Bar matching Image exactly */}
      <div className="bg-white border-b border-zinc-100 py-1.5 px-4 sm:px-6 lg:px-8 text-[11px] sm:text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden md:flex items-center gap-2.5 text-zinc-500 font-medium">
            <span>Gold Buyers</span>
            <span className="text-zinc-300">|</span>
            <span>Purity Testing</span>
            <span className="text-zinc-300">|</span>
            <span>Instant Payment</span>
            <span className="text-zinc-300">|</span>
            <span>Multiple Branches</span>
          </div>

          <div className="flex items-center justify-between w-full md:w-auto gap-4">
            {/* Social Media Icons */}
            <div className="flex items-center gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-5 h-5 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-85 transition-opacity"
                title="Facebook"
              >
                <Facebook className="w-3 h-3 fill-current" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-5 h-5 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-600 text-white flex items-center justify-center hover:opacity-85 transition-opacity"
                title="Instagram"
              >
                <Instagram className="w-3 h-3" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center hover:opacity-85 transition-opacity"
                title="YouTube"
              >
                <Youtube className="w-3 h-3" />
              </a>
            </div>

            {/* Direct Phone Number */}
            <a
              href={`tel:${COMPANY_PHONE.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 font-bold text-[#140E0A] hover:text-[#A77B28] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#140E0A]" />
              <span>{COMPANY_PHONE}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <header
        className={`sticky top-0 z-40 bg-white transition-all duration-300 ${
          isScrolled ? 'shadow-md py-2.5' : 'py-3.5 border-b border-zinc-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Branding: Red Circle Emblem matching official brand identity */}
          <button
            onClick={() => handleNavClick('home')}
            className="cursor-pointer text-left focus:outline-none"
          >
            <AthishtaLogo variant="circle-red" size="md" showSubtitle={true} />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id || (item.id === 'home' && activeSection === 'home');
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 text-xs xl:text-[13px] font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#EBDCB9]/70 text-[#140E0A] font-bold'
                      : 'text-[#2B231B] hover:text-[#A77B28] hover:bg-zinc-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA Button (Get Quote on WhatsApp) */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-[#A77B28] hover:bg-[#8F671E] rounded-xl transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Get Quote on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-bold text-white bg-[#A77B28] rounded-lg shadow-sm"
            >
              WhatsApp
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#140E0A] hover:bg-zinc-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#140E0A]" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/60 backdrop-blur-sm flex justify-end animate-fadeIn">
          <div className="w-4/5 max-w-sm bg-white h-full shadow-2xl flex flex-col p-5 overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
              <AthishtaLogo variant="circle-red" size="sm" showSubtitle={true} />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-zinc-600 hover:bg-zinc-100 rounded-md cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-1 py-4 flex-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="px-3.5 py-3 text-sm font-semibold text-[#140E0A] hover:bg-[#F9F5EC] rounded-xl text-left transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="pt-4 border-t border-zinc-100 space-y-2.5">
              <a
                href={whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 text-xs font-bold text-white bg-[#A77B28] hover:bg-[#8F671E] rounded-xl transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Get Quote on WhatsApp</span>
              </a>
              <a
                href={`tel:${COMPANY_PHONE.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold text-[#140E0A] bg-zinc-100 hover:bg-zinc-200 rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call {COMPANY_PHONE}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
