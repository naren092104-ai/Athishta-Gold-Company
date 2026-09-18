import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 'rev-1',
      name: 'Revathi S.',
      city: 'Chennai',
      branch: 'Ambattur Showroom',
      rating: 5,
      comment: 'The German XRF testing was completely transparent right in front of me. I received immediate IMPS transfer with zero hidden cuts. Exceptional service.',
      avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 'rev-2',
      name: 'Karthik M.',
      city: 'Thanjavur',
      branch: 'Kumbakonam Showroom',
      rating: 5,
      comment: 'Athishta helped release our pledged gold ornaments from the bank seamlessly and handed over the surplus cash on the same afternoon. Very trustworthy.',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 'rev-3',
      name: 'Priya L.',
      city: 'Coimbatore',
      branch: 'Lakshmangudi Head Office',
      rating: 5,
      comment: 'Highest payout rate in Tamil Nadu without a doubt. The executive was polite, verified weight with digital scales, and credited our account in under 10 minutes.',
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-16 bg-white border-b border-zinc-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching luxury aesthetic */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[11px] font-bold text-[#A77B28] uppercase tracking-widest">
                Client Experiences
              </span>
              <span className="text-zinc-300">•</span>
              <div className="flex items-center gap-0.5 text-[#F5B800]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#140E0A]">
              What Our Clients Say
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 mt-1">
              Over 10,000+ satisfied families have entrusted their gold with Athishta Gold Company.
            </p>
          </div>

          <a
            href="#testimonials"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#A77B28] hover:text-[#8F671E] transition-colors group cursor-pointer shrink-0"
          >
            <span>View All Client Stories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow Button */}
          <button
            type="button"
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-[#C89B3C]/30 shadow-md flex items-center justify-center text-[#140E0A] hover:bg-[#FAF5EC] cursor-pointer transition-colors"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-4 h-4 text-[#A77B28]" />
          </button>

          {/* 3 Review Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-2">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-gradient-to-b from-[#FFFDF9] to-[#FAF6EE] border border-[#C89B3C]/25 hover:border-[#C89B3C]/55 rounded-3xl p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* User Profile */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <img
                      src={rev.avatarUrl}
                      alt={rev.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#C89B3C]/40 shadow-xs"
                      loading="lazy"
                    />
                    <div>
                      <h3 className="font-serif font-bold text-sm text-[#140E0A] leading-tight">
                        {rev.name}
                      </h3>
                      <p className="text-[11px] text-zinc-500">{rev.city} • <span className="text-[#A77B28] font-medium">{rev.branch}</span></p>
                      <div className="flex items-center gap-0.5 text-[#F5B800] mt-1">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Comment */}
                  <p className="text-xs sm:text-[13px] text-zinc-700 italic leading-relaxed font-normal">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-[#C89B3C]/15 flex items-center justify-between text-[10px] text-zinc-400">
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Verified Transaction
                  </span>
                  <span>Instant Settlement</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-[#C89B3C]/30 shadow-md flex items-center justify-center text-[#140E0A] hover:bg-[#FAF5EC] cursor-pointer transition-colors"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-4 h-4 text-[#A77B28]" />
          </button>
        </div>

      </div>
    </section>
  );
};
