import React from 'react';
import { MessageCircle, MapPin, Shield, Scale, Zap, Users, Award } from 'lucide-react';
import { GoldRates } from '../types';
import { getWhatsAppUrl } from '../services/whatsappService';

interface HeroProps {
  rates: GoldRates;
  rateStatus: string;
  onOpenQuoteModal: (service?: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  rates,
  rateStatus,
  onOpenQuoteModal,
  onScrollToSection,
}) => {
  const whatsappUrl = getWhatsAppUrl({
    flow: 'selling',
    name: 'Customer',
    mobile: '',
    service: 'Gold Selling Service',
    purity: '22K / 916',
    indicativeRate: rates['22K'] || 14150
  });

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('gold-calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenQuoteModal) {
      onOpenQuoteModal('Instant Gold Quote');
    }
  };

  const handleBranchClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const branchEl = document.getElementById('branches');
    if (branchEl) {
      branchEl.scrollIntoView({ behavior: 'smooth' });
    } else if (onScrollToSection) {
      onScrollToSection('branches');
    }
  };

  const handleBadgeClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onScrollToSection) {
      onScrollToSection(sectionId);
    }
  };

  const trustBadges = [
    { icon: Shield, label: 'Transparent Evaluation', target: 'services' },
    { icon: Scale, label: 'Purity Testing', target: 'gold-rate' },
    { icon: Zap, label: 'Instant Payment', target: 'gold-calculator' },
    { icon: Users, label: 'Trusted Experts', target: 'testimonials' },
  ];

  const sideFeatures = [
    { icon: MapPin, text: 'Multiple Branches', target: 'branches' },
    { icon: Users, text: '10,000+ Happy Customers', target: 'testimonials' },
    { icon: Shield, text: '100% Transparent Process', target: 'services' },
    { icon: Zap, text: 'Instant Payment', target: 'gold-calculator' },
    { icon: Award, text: 'Professional Purity Testing', target: 'gold-rate' },
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-[#120E0B] text-white">
      {/* Background Banner with Woman admiring Gold Ornaments */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1600&q=80"
          alt="Athishta Gold customer admiring gold ornaments in Tamil Nadu"
          className="w-full h-full object-cover object-center opacity-45 lg:opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#120E0B] via-[#120E0B]/85 to-[#120E0B]/50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column (8 cols): Main Heading & Action CTA matching Image exactly */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Headline matching user's image */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-tight leading-[1.1]">
              Your Gold <br />
              Deserves Its <br />
              <span className="text-white">True Value.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm md:text-base text-zinc-300 max-w-xl leading-relaxed font-normal">
              Sell your gold with confidence. Transparent evaluation, competitive value and instant payment only at Athishta Gold Company.
            </p>

            {/* 4 Trust Badges in row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              {trustBadges.map((badge, idx) => (
                <button
                  key={idx}
                  onClick={() => handleBadgeClick(badge.target)}
                  className="flex items-center gap-2 text-xs font-semibold text-zinc-200 hover:text-white bg-white/5 hover:bg-white/10 p-2.5 rounded-xl border border-white/10 transition-all text-left cursor-pointer active:scale-95 group"
                >
                  <div className="w-6 h-6 rounded-md bg-[#A77B28]/30 border border-[#A77B28]/50 flex items-center justify-center text-[#E5B54F] shrink-0 group-hover:scale-110 transition-transform">
                    <badge.icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="leading-tight text-[11px] sm:text-xs">{badge.label}</span>
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              {/* 1. Get Gold Quote Button */}
              <button
                id="hero-get-gold-quote-btn"
                type="button"
                onClick={handleQuoteClick}
                className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-[#140E0A] bg-[#A77B28] hover:bg-[#C29235] transition-all flex items-center gap-2 shadow-lg hover:shadow-xl cursor-pointer active:scale-95 z-20"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Get Gold Quote</span>
              </button>

              {/* 2. Find Nearest Branch Button */}
              <button
                id="hero-find-branch-btn"
                type="button"
                onClick={handleBranchClick}
                className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-zinc-900 bg-white hover:bg-zinc-100 transition-all flex items-center gap-2 shadow-md cursor-pointer active:scale-95 z-20"
              >
                <MapPin className="w-4 h-4 text-[#A77B28]" />
                <span>Find Nearest Branch</span>
              </button>
            </div>

            {/* Script Text matching user's image: Gold Today. A Better Tomorrow. */}
            <div className="pt-2">
              <span className="font-serif italic text-lg sm:text-xl text-[#E5B54F] tracking-wide block" style={{ fontFamily: "'Playfair Display', Georgia, cursive, serif" }}>
                Gold Today. <br className="sm:hidden" /> A Better Tomorrow.
              </span>
            </div>

          </div>

          {/* Right Column (4 cols): Floating Trust Badge Card matching Image */}
          <div className="lg:col-span-4">
            <div className="bg-[#1C1612]/90 backdrop-blur-md rounded-2xl border border-[#A77B28]/30 p-6 space-y-4 shadow-2xl">
              <h3 className="font-serif font-bold text-base sm:text-lg text-white leading-snug border-b border-white/10 pb-3">
                Trusted <br />
                by Thousands <br />
                Across Tamil Nadu
              </h3>

              <div className="space-y-2.5 pt-1">
                {sideFeatures.map((feat, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleBadgeClick(feat.target)}
                    className="w-full flex items-center gap-3 text-xs sm:text-sm text-zinc-200 hover:text-white hover:bg-white/5 p-1.5 rounded-xl transition-all text-left cursor-pointer group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#A77B28]/25 border border-[#A77B28]/40 flex items-center justify-center text-[#E5B54F] shrink-0 group-hover:scale-105 transition-transform">
                      <feat.icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-medium group-hover:text-[#E5B54F] transition-colors text-xs sm:text-sm">{feat.text}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
