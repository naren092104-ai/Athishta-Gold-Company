import React from 'react';
import { ShieldCheck, TrendingUp, IndianRupee, Home } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const items = [
    {
      icon: ShieldCheck,
      word1: 'Transparent',
      word2: 'Evaluation',
    },
    {
      icon: TrendingUp,
      word1: 'Fair',
      word2: 'Pricing',
    },
    {
      icon: IndianRupee,
      word1: 'Instant',
      word2: 'Payment',
    },
    {
      icon: Home,
      word1: 'Doorstep',
      word2: 'Service',
    },
  ];

  return (
    <section className="bg-[#FFFDF8] border-b border-[#C9A227]/25 py-6 sm:py-7 relative z-20 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* 4 Pillars with Thin Gold Dividers */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 w-full lg:w-3/4 items-center">
            {items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-3.5 px-3 sm:px-6 ${
                    idx !== items.length - 1 ? 'md:border-r border-[#C9A227]/30' : ''
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FAF5EC] to-[#FFFDF8] border border-[#C9A227]/40 flex items-center justify-center text-[#C9A227] shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <div className="text-left">
                    <span className="font-serif font-bold text-sm sm:text-base text-[#15110D] block leading-tight">
                      {item.word1}
                    </span>
                    <span className="text-xs text-[#6F6A60] font-medium block leading-tight mt-0.5">
                      {item.word2}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Far Right: Handwritten Script + Horizontal Line */}
          <div className="hidden lg:flex items-center gap-3 pl-6 border-l border-[#C9A227]/30 shrink-0">
            <div className="text-right">
              <span className="font-serif italic text-[#C9A227] text-xl xl:text-2xl tracking-wide block drop-shadow-2xs">
                More Than Gold
              </span>
              <div className="flex items-center gap-2 justify-end">
                <span className="font-serif italic text-[#8C6D1F] text-sm">
                  It's Trust
                </span>
                <span className="w-8 h-px bg-[#C9A227]/60 inline-block" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
