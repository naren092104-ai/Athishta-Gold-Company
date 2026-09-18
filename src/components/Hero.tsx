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
    { icon: Shield, label: '100% Transparent Evaluation', target: 'services' },
    { icon: Scale, label: 'German XRF Purity Testing', target: 'gold-rate' },
    { icon: Zap, label: 'Instant Cash & IMPS Transfer', target: 'gold-calculator' },
    { icon: Users, label: 'Certified Bullion Experts', target: 'testimonials' },
  ];

  const sideFeatures = [
    { icon: MapPin, text: '6 Luxury Showrooms in Tamil Nadu', target: 'branches' },
    { icon: Users, text: '10,000+ Delighted Families Served', target: 'testimonials' },
    { icon: Shield, text: '100% Transparent Non-Destructive Testing', target: 'services' },
    { icon: Zap, text: 'Instant On-the-Spot Bank Settlement', target: 'gold-calculator' },
    { icon: Award, text: 'Certified BIS Hallmark Standards', target: 'gold-rate' },
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-[#0D0907] text-white">
      {/* Background Banner with Luxury Gold Jewelry Suite */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1920&q=85"
          alt="Athishta Gold luxury fine gold jewelry collection"
          className="w-full h-full object-cover object-center opacity-40 lg:opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0907] via-[#0D0907]/90 to-[#0D0907]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0907] via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-14 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (8 cols): Main Heading & Action CTA */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Prestige Heritage Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5B54F]/10 border border-[#E5B54F]/30 text-[#E5B54F] text-[11px] sm:text-xs font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5B54F] animate-pulse" />
              <span>Estd. in Tamil Nadu • South India's Premier Gold Valuation House</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-white tracking-tight leading-[1.1]">
              Your Gold <br />
              Deserves Its <br />
              <span className="luxury-gold-text drop-shadow-sm">True Value.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-zinc-300 max-w-xl leading-relaxed font-normal">
              Sell your gold with absolute confidence. Certified non-destructive evaluation, guaranteed top market payout, and immediate bank transfer only at Athishta Gold Company.
            </p>

            {/* 4 Trust Badges in row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              {trustBadges.map((badge, idx) => (
                <button
                  key={idx}
                  onClick={() => handleBadgeClick(badge.target)}
                  className="flex items-center gap-2 text-xs font-semibold text-zinc-200 hover:text-white bg-white/5 hover:bg-white/10 p-2.5 rounded-xl border border-white/10 hover:border-[#E5B54F]/40 transition-all text-left cursor-pointer active:scale-95 group backdrop-blur-xs"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#A77B28]/25 border border-[#A77B28]/50 flex items-center justify-center text-[#E5B54F] shrink-0 group-hover:scale-110 transition-transform">
                    <badge.icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="leading-tight text-[11px] sm:text-xs">{badge.label}</span>
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              {/* 1. Get Gold Quote Button */}
              <button
                id="hero-get-gold-quote-btn"
                type="button"
                onClick={handleQuoteClick}
                className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-[#140E0A] bg-gradient-to-r from-[#E5B54F] via-[#F3C34F] to-[#C89B3C] hover:brightness-105 transition-all flex items-center gap-2 shadow-lg shadow-[#A77B28]/25 cursor-pointer active:scale-95 z-20 border border-[#FFF3D1]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Get Instant Valuation</span>
              </button>

              {/* 2. Find Nearest Showroom Button */}
              <button
                id="hero-find-branch-btn"
                type="button"
                onClick={handleBranchClick}
                className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 border border-white/25 transition-all flex items-center gap-2 shadow-md cursor-pointer active:scale-95 z-20 backdrop-blur-xs"
              >
                <MapPin className="w-4 h-4 text-[#E5B54F]" />
                <span>Find Nearest Showroom</span>
              </button>
            </div>

            {/* Script Slogan: Gold Today. A Better Tomorrow. */}
            <div className="pt-2">
              <span className="font-serif italic text-lg sm:text-2xl text-[#E5B54F] tracking-wide block" style={{ fontFamily: "'Playfair Display', Georgia, cursive, serif" }}>
                Gold Today. <br className="sm:hidden" /> A Better Tomorrow.
              </span>
            </div>

          </div>

          {/* Right Column (4 cols): Floating Luxury Credential Card */}
          <div className="lg:col-span-4">
            <div className="luxury-glass-dark rounded-3xl p-6 sm:p-7 space-y-4 shadow-2xl border border-[#A77B28]/40 relative overflow-hidden">
              {/* Subtle gold ambient glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#A77B28]/20 rounded-full blur-3xl pointer-events-none" />
              
              <div className="border-b border-white/10 pb-3.5">
                <span className="text-[10px] font-bold text-[#E5B54F] uppercase tracking-widest block mb-1">
                  Accredited Excellence
                </span>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-white leading-snug">
                  Trusted by Thousands <br />
                  Across Tamil Nadu
                </h3>
              </div>

              <div className="space-y-3 pt-1">
                {sideFeatures.map((feat, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleBadgeClick(feat.target)}
                    className="w-full flex items-center gap-3 text-xs sm:text-sm text-zinc-200 hover:text-white hover:bg-white/5 p-2 rounded-xl transition-all text-left cursor-pointer group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-[#A77B28]/25 border border-[#A77B28]/50 flex items-center justify-center text-[#E5B54F] shrink-0 group-hover:scale-105 transition-transform">
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
