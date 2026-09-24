import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const WhyAthishta: React.FC = () => {
  const points = [
    'Transparent process',
    'Professional evaluation',
    'Fair market-based pricing',
    'Convenient doorstep service',
  ];

  return (
    <section id="about" className="py-14 sm:py-20 bg-[#FFFDF8] border-b border-[#C9A227]/20 relative overflow-hidden">
      
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#C9A227]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT: Authentic Certified Gold Valuation Photograph (Col 6) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C9A227]/30 aspect-[4/3] bg-[#15110D] group">
              <img
                src="/gold_evaluation.jpg"
                alt="Certified German XRF Gold Purity Testing and Digital Scale Valuation at Athishta Gold Company"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15110D]/50 via-transparent to-transparent pointer-events-none" />
              
              {/* Badge on image */}
              <div className="absolute bottom-4 left-4 bg-[#15110D]/85 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#C9A227]/40 shadow-md flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-[#FFFDF8]">Certified German XRF Valuation Lab</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Why Athishta & 4 Bullet Checkmarks (Col 6) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div>
              <span className="text-xs font-bold text-[#C9A227] uppercase tracking-widest block mb-2">
                The Athishta Standard
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-[#15110D] tracking-tight">
                Why Athishta?
              </h2>
              <p className="text-sm sm:text-base text-[#554F47] mt-3 leading-relaxed">
                We are committed to delivering unmatched honesty, dignity, and certified market value for your precious gold.
              </p>
            </div>

            {/* 4 Bullet Checkmarks with Rich Styling */}
            <div className="space-y-4 pt-2">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-center gap-4 p-3 rounded-xl bg-[#FAF5EC]/70 border border-[#C9A227]/20 hover:border-[#C9A227]/60 hover:bg-[#FAF5EC] transition-all hover:translate-x-1">
                  <div className="w-8 h-8 rounded-full bg-[#FFFDF8] border border-[#C9A227]/50 flex items-center justify-center text-[#C9A227] shrink-0 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A227]" />
                  </div>
                  <span className="font-serif font-bold text-base sm:text-lg text-[#15110D]">
                    {point}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
