import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, ChevronLeft, ChevronRight, Coins, Clock } from 'lucide-react';
import { GoldRates, GoldRateData } from '../types';
import { getWhatsAppUrl } from '../services/whatsappService';

interface HeroProps {
  rates: GoldRates;
  rateData?: GoldRateData | null;
  rateStatus?: string;
  onOpenQuoteModal: (service?: string) => void;
  onScrollToSection?: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  rates,
  rateData,
  onOpenQuoteModal,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      eyebrow: 'TRUSTED GOLD SERVICES • TAMIL NADU',
      titleLine1: 'Your Gold Deserves',
      titleLine2: 'Its True Value.',
      desc: 'Sell your gold with complete confidence. Transparent evaluation, fair market pricing, and instant bank payment only at Athishta Gold Company.',
      image: '/hero_bangle_model.jpg',
      imageAlt: 'South Indian woman examining traditional gold bangle at Athishta Gold Company',
      callout: 'Gold Builds a Brighter Tomorrow',
    },
    {
      eyebrow: '100% NON-DESTRUCTIVE TESTING • GERMAN LAB',
      titleLine1: 'Transparent Value.',
      titleLine2: 'Trusted Service.',
      desc: 'Certified German XRF laser testing right before your eyes. 100% non-destructive evaluation with guaranteed zero melting deductions.',
      image: '/step2_purity_xrf.jpg',
      imageAlt: 'German XRF laser gold purity testing at Athishta Gold Company',
      callout: 'German XRF Certified Technology',
    },
    {
      eyebrow: 'OVER 10,000+ HAPPY FAMILIES',
      titleLine1: 'More Than Gold.',
      titleLine2: "It's Trust.",
      desc: 'Direct spot payment into your bank account within 3 minutes. Backed by generations of honesty and transparent service across Tamil Nadu.',
      image: '/step4_instant_payout.jpg',
      imageAlt: 'Happy customer receiving instant bank gold settlement at Athishta Gold Company',
      callout: 'Instant IMPS Settlement',
    },
  ];

  // Auto-play carousel every 7 seconds when not paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleQuoteClick = () => {
    const el = document.getElementById('gold-calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenQuoteModal('Instant Gold Quote');
    }
  };

  const whatsappUrl = getWhatsAppUrl({
    flow: 'selling',
    name: 'Customer',
    mobile: '',
    service: 'Gold Valuation & Instant Quote',
    purity: '22K / 916',
    indicativeRate: rates['22K'] || 14179,
  });

  const lastUpdatedText = rateData?.updatedAt
    ? new Date(rateData.updatedAt).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }) + ', ' + new Date(rateData.updatedAt).toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
      })
    : '18 Sep 2026, 10:45 AM';

  const activeSlide = slides[currentSlide];

  return (
    <section
      id="home"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative min-h-[590px] overflow-hidden border-b border-[#C9A227]/25 bg-[#6A431F] bg-cover bg-center pt-8 pb-16 sm:pt-12 sm:pb-20 lg:min-h-[540px] lg:pt-8 lg:pb-10"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(255, 252, 244, 0.98) 0%, rgba(255, 252, 244, 0.91) 39%, rgba(255, 252, 244, 0.22) 67%, rgba(39, 20, 8, 0.28) 100%), url("${activeSlide.image}")`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#5B3213]/45 via-transparent to-transparent pointer-events-none" />

      {/* Very faint temple gopuram watermark in background */}
      <div
        className="absolute inset-0 opacity-[0.055] pointer-events-none bg-repeat-x bg-bottom mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 10 L70 30 L80 30 L75 50 L85 50 L80 75 L95 75 L90 105 L30 105 L25 75 L40 75 L35 50 L45 50 L40 30 L50 30 Z' fill='%23C9A227' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '180px 180px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="grid min-h-[500px] grid-cols-1 items-center gap-10 lg:min-h-[450px] lg:grid-cols-12 lg:gap-8">
          
          {/* LEFT: Cinematic Content Column (Col 7) */}
          <div className="space-y-6 text-left lg:col-span-7 lg:max-w-[700px]">
            
            {/* Small Gold Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 border-b border-[#C9A227]/55 pb-2 text-xs font-bold tracking-wider text-[#A97916] uppercase">
              <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
              <span>{activeSlide.eyebrow}</span>
            </div>

            {/* Main Heading with Staggered Transition */}
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-serif font-extrabold text-[#15110D] tracking-tight leading-[1.12]">
              {activeSlide.titleLine1} <br />
              <span className="gold-gradient-text drop-shadow-xs">{activeSlide.titleLine2}</span>
            </h1>

            {/* Supporting Sentence */}
            <p className="max-w-xl text-base font-normal leading-relaxed text-[#554F47] sm:text-lg">
              {activeSlide.desc}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                type="button"
                onClick={handleQuoteClick}
                className="px-7 py-3.5 rounded-xl font-bold text-sm text-[#15110D] bg-gradient-to-r from-[#C9A227] via-[#E2BE4B] to-[#C9A227] hover:brightness-105 transition-all flex items-center gap-2 shadow-lg shadow-[#C9A227]/25 cursor-pointer active:scale-98 hover:-translate-y-0.5"
              >
                <span>Get Gold Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl font-bold text-sm text-[#15110D] bg-[#FFFDF8] hover:bg-[#FAF5EC] border border-[#C9A227]/45 transition-all flex items-center gap-2.5 cursor-pointer active:scale-98 shadow-xs hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 text-[#C9A227] fill-[#C9A227]/20" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Customer Trust Strip with Real Overlapping Avatars */}
            <div className="flex items-center gap-3.5 pt-2">
              <div className="flex -space-x-2.5 overflow-hidden">
                <img
                  src="/avatar1.jpg"
                  alt="Customer"
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-[#FFFDF8] object-cover shadow-2xs"
                />
                <img
                  src="/avatar2.jpg"
                  alt="Customer"
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-[#FFFDF8] object-cover shadow-2xs"
                />
                <img
                  src="/avatar3.jpg"
                  alt="Customer"
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-[#FFFDF8] object-cover shadow-2xs"
                />
                <img
                  src="/avatar4.jpg"
                  alt="Customer"
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-[#FFFDF8] object-cover shadow-2xs"
                />
              </div>
              <span className="text-xs font-semibold text-[#554F47]">
                Trusted by thousands of customers across Tamil Nadu
              </span>
            </div>

            {/* Handwritten Luxury Script */}
            <div className="hidden pt-2">
              <span className="font-serif italic text-[#C9A227] text-2xl sm:text-3xl tracking-wide block drop-shadow-2xs">
                “More Than Gold It's Trust”
              </span>
            </div>

            {/* Carousel Navigation Arrows + Pagination Indicators */}
            <div className="flex items-center gap-4 pt-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-9 h-9 rounded-full bg-[#FFFDF8] border border-[#C9A227]/40 hover:bg-[#FAF5EC] flex items-center justify-center text-[#15110D] shadow-xs transition-all cursor-pointer hover:scale-105 active:scale-95"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4 text-[#C9A227]" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-9 h-9 rounded-full bg-[#FFFDF8] border border-[#C9A227]/40 hover:bg-[#FAF5EC] flex items-center justify-center text-[#15110D] shadow-xs transition-all cursor-pointer hover:scale-105 active:scale-95"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4 text-[#C9A227]" />
                </button>
              </div>

              {/* Dots / Pills */}
              <div className="flex items-center gap-1.5">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentSlide === idx
                        ? 'w-8 bg-gradient-to-r from-[#C9A227] to-[#E2BE4B]'
                        : 'w-2 bg-[#C9A227]/30 hover:bg-[#C9A227]/60'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT: Cinematic Photograph + Floating Live Gold Rate Card (Col 5) */}
          <div className="relative flex items-center justify-start lg:col-span-5 lg:justify-end">
            
            {/* Main Image Frame */}
            <div className="pointer-events-none absolute inset-0 hidden overflow-hidden opacity-0 lg:block">
              <img
                src={activeSlide.image}
                alt={activeSlide.imageAlt}
                className="w-full h-auto object-cover object-center sm:max-h-[560px] group-hover:scale-103 transition-transform duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15110D]/60 via-transparent to-transparent pointer-events-none" />

              {/* Decorative script overlay on top right */}
              <div className="absolute top-4 right-4 text-right pointer-events-none">
                <span className="font-serif italic text-amber-200/90 text-sm sm:text-base drop-shadow-md block">
                  {activeSlide.callout}
                </span>
              </div>
            </div>

            {/* Floating Gold Rate Card (Matching media_1789750060908.jpg) */}
            <div className="relative mt-8 w-full max-w-[350px] rounded-2xl border-2 border-[#C9A227]/55 bg-[#FFFDF8]/95 px-5 py-4 text-left shadow-2xl backdrop-blur-md transition-all hover:border-[#C9A227] sm:mt-0">
              
              {/* Card Header with Green Pulse LIVE Badge */}
              <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-[#C9A227]/20">
                <div>
                  <h4 className="font-serif font-extrabold text-base text-[#15110D] flex items-center gap-1.5 leading-none">
                    <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                    <span>Today's Gold Rate</span>
                  </h4>
                  <p className="text-[10px] text-[#6F6A60] mt-0.5">
                    Live indicative market rate
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-700 text-[10px] font-extrabold shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>LIVE</span>
                </div>
              </div>

              {/* 3 Price Rows */}
              <div className="space-y-1.5 py-1">
                
                {/* 24K */}
                <div className="flex items-center justify-between text-xs py-1 px-2 rounded-lg bg-[#FAF5EC]/70">
                  <span className="font-medium text-[#554F47] flex items-center gap-1.5">
                    <Coins className="w-3.5 h-3.5 text-[#C9A227]" />
                    <span>24K (999)</span>
                  </span>
                  <span className="font-serif font-extrabold text-[#15110D]">
                    ₹ {(rates['24K'] || 15436).toLocaleString('en-IN')} <span className="text-[10px] font-sans font-normal text-[#6F6A60]">/ g</span>
                  </span>
                </div>

                {/* 22K (Highlighted) */}
                <div className="flex items-center justify-between text-xs py-1 px-2 rounded-lg bg-[#C9A227]/15 border border-[#C9A227]/40 shadow-2xs">
                  <span className="font-bold text-[#15110D] flex items-center gap-1.5">
                    <Coins className="w-3.5 h-3.5 text-[#C9A227]" />
                    <span>22K (916)</span>
                  </span>
                  <span className="font-serif font-extrabold text-[#15110D] text-sm">
                    ₹ {(rates['22K'] || 14179).toLocaleString('en-IN')} <span className="text-[10px] font-sans font-normal text-[#6F6A60]">/ g</span>
                  </span>
                </div>

                {/* 18K */}
                <div className="flex items-center justify-between text-xs py-1 px-2 rounded-lg bg-[#FAF5EC]/70">
                  <span className="font-medium text-[#554F47] flex items-center gap-1.5">
                    <Coins className="w-3.5 h-3.5 text-[#C9A227]" />
                    <span>18K (750)</span>
                  </span>
                  <span className="font-serif font-extrabold text-[#15110D]">
                    ₹ {(rates['18K'] || 11577).toLocaleString('en-IN')} <span className="text-[10px] font-sans font-normal text-[#6F6A60]">/ g</span>
                  </span>
                </div>

              </div>

              {/* Timestamp footer */}
              <div className="mt-2 pt-1.5 border-t border-[#C9A227]/20 flex items-center justify-between text-[10px] text-[#6F6A60]">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#C9A227]" />
                  <span>Updated: {lastUpdatedText}</span>
                </span>
                <span className="font-semibold text-[#8C6D1F]">
                  Source: MCX / Live
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>

      <div className="pointer-events-none absolute right-8 top-8 z-10 hidden max-w-[150px] text-right lg:block">
        <span className="font-serif text-2xl italic leading-tight text-[#F8D986] drop-shadow-md">{activeSlide.callout}</span>
      </div>

      {/* Liquid Gold Flowing Ribbon Effect along the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-10 overflow-hidden pointer-events-none z-10">
        <svg
          className="w-[200%] h-full animate-gold-flow opacity-65"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="liquidGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C9A227" stopOpacity="0.2" />
              <stop offset="25%" stopColor="#FAF3E0" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#E2BE4B" stopOpacity="0.8" />
              <stop offset="75%" stopColor="#C9A227" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#FAF3E0" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path
            d="M0,0 C150,90 350,-40 500,40 C650,120 900,-20 1200,30 L1200,120 L0,120 Z"
            fill="url(#liquidGoldGrad)"
          />
        </svg>
      </div>

    </section>
  );
};


