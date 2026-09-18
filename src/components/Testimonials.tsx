import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      id: 'rev-1',
      name: 'Revathi S.',
      city: 'Chennai',
      rating: 5,
      comment: 'Very transparent and professional service. Got a good value for my gold.',
      avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 'rev-2',
      name: 'Karthik M.',
      city: 'Thanjavur',
      rating: 5,
      comment: 'Instant payment and friendly staff. Highly recommended!',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    {
      id: 'rev-3',
      name: 'Priya L.',
      city: 'Coimbatore',
      rating: 5,
      comment: 'Easy process and genuine valuation. Thank you Athishta Gold Company!',
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
  ];

  return (
    <section id="testimonials" className="py-10 sm:py-14 bg-white border-b border-zinc-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching Image */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#140E0A]">
              What Our Customers Say
            </h2>
            <div className="flex items-center gap-0.5 text-[#F5B800]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
          </div>

          <a
            href="#testimonials"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#A77B28] hover:text-[#8F671E] transition-colors group cursor-pointer"
          >
            <span>View All Reviews</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Carousel Container with side arrows matching Image */}
        <div className="relative">
          {/* Left Arrow Button */}
          <button
            type="button"
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white border border-zinc-200 shadow-sm flex items-center justify-center text-zinc-600 hover:text-black hover:bg-zinc-50 cursor-pointer"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* 3 Review Cards Grid matching Image */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-2">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-[#FFFDF9] border border-zinc-200/80 rounded-2xl p-5 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  {/* User Profile */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <img
                      src={rev.avatarUrl}
                      alt={rev.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#A77B28]/30"
                      loading="lazy"
                    />
                    <div>
                      <h3 className="font-serif font-bold text-sm text-[#140E0A] leading-tight">
                        {rev.name}
                      </h3>
                      <p className="text-[11px] text-zinc-500">{rev.city}</p>
                      <div className="flex items-center gap-0.5 text-[#F5B800] mt-0.5">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Comment */}
                  <p className="text-xs sm:text-sm text-zinc-700 italic leading-relaxed">
                    "{rev.comment}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white border border-zinc-200 shadow-sm flex items-center justify-center text-zinc-600 hover:text-black hover:bg-zinc-50 cursor-pointer"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
