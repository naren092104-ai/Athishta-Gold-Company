import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Search } from 'lucide-react';
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

      const sections = ['home', 'about', 'services', 'gold-rate', 'branches', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
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
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Gold Rate', id: 'gold-rate' },
    { label: 'Branches', id: 'branches' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigateSection(sectionId);
  };

  const handleGetQuoteClick = () => {
    const calc = document.getElementById('gold-calculator');
    if (calc) {
      calc.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenQuoteModal('Instant Gold Quote');
    }
  };

  const whatsappUrl = getWhatsAppUrl({
    flow: 'general',
    name: 'Customer',
    mobile: '',
    service: 'Gold Valuation & Quote'
  });

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 bg-[#FFFDF8]/95 backdrop-blur-md ${
        isScrolled
          ? 'shadow-sm border-b border-[#C9A227]/25 py-3'
          : 'border-b border-[#C9A227]/15 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* LEFT: Athishta Gold Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="cursor-pointer text-left focus:outline-none flex items-center"
        >
          <AthishtaLogo variant="circle-red" size="md" showSubtitle={true} />
        </button>

        {/* CENTER: Clean 6 Nav Links with Luxury Active Pill */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-1.5 text-[14px] rounded-full transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#FAF3E0] text-[#8C6D1F] font-bold shadow-2xs border border-[#C9A227]/35'
                    : 'text-[#171717] hover:text-[#C9A227] hover:bg-[#FAF5EC] font-medium'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* RIGHT: Search + Get Quote + WhatsApp */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById('gold-calculator');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-9 h-9 rounded-full bg-[#FAF5EC] hover:bg-[#F8F3E8] border border-[#C9A227]/30 flex items-center justify-center text-[#15110D] hover:text-[#C9A227] transition-all cursor-pointer"
            title="Search Valuation or Branches"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>

          <button
            onClick={handleGetQuoteClick}
            className="px-5 py-2 text-xs font-bold text-[#15110D] bg-[#FFFDF8] hover:bg-[#FAF3E0] border border-[#C9A227]/50 rounded-full transition-all cursor-pointer shadow-2xs hover:-translate-y-0.5"
          >
            Get Quote
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-[#15110D] bg-gradient-to-r from-[#C9A227] via-[#DFB83D] to-[#C9A227] hover:brightness-105 rounded-full transition-all shadow-sm cursor-pointer hover:-translate-y-0.5"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 text-xs font-bold text-[#15110D] bg-[#C9A227] rounded-full shadow-xs"
          >
            WhatsApp
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#171717] hover:bg-[#F8F3E8] rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-50 lg:hidden bg-[#15110D]/50 backdrop-blur-xs flex flex-col">
          <div className="bg-[#FFFDF8] border-b border-[#C9A227]/20 p-5 shadow-xl space-y-4">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="px-3 py-2.5 text-left text-sm font-medium text-[#171717] hover:text-[#C9A227] hover:bg-[#F8F3E8] rounded-md transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="pt-3 border-t border-[#F8F3E8] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleGetQuoteClick();
                }}
                className="w-full py-2.5 text-xs font-semibold text-[#15110D] bg-[#F8F3E8] border border-[#C9A227]/40 rounded-lg text-center"
              >
                Get Quote
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-white bg-[#C9A227] rounded-lg"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

