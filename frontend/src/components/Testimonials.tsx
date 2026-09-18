import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Revathi S.',
      location: 'Chennai',
      quote: 'Very transparent and professional service. Got genuine value for my family jewellery with instant bank transfer.',
    },
    {
      name: 'Karthik M.',
      location: 'Thanjavur',
      quote: 'Instant payment and friendly staff. The non-destructive XRF test was completely visible on the screen.',
    },
    {
      name: 'Priya L.',
      location: 'Coimbatore',
      quote: 'Easy process and genuine valuation. Zero hidden deductions. Thank you Athishta Gold Company!',
    },
    {
      name: 'Prakash R.',
      location: 'Thiruvarur',
      quote: 'Accurate digital weighing and immediate payment within 5 minutes at the Lakshmangudi head office.',
    },
    {
      name: 'Senthil K.',
      location: 'Kumbakonam',
      quote: 'Extremely polite staff and fair market pricing. The most trustworthy gold valuation experience in Tamil Nadu.',
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? testimonials.length - 3 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 3 >= testimonials.length ? 0 : prev + 1));
  };

  const visibleTestimonials = [
    testimonials[startIndex % testimonials.length],
    testimonials[(startIndex + 1) % testimonials.length],
    testimonials[(startIndex + 2) % testimonials.length],
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-[#FFFDF8] border-b border-[#C9A227]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#171717]">
              What Our Customers Say
            </h2>
            <p className="text-sm sm:text-base text-[#6F6A60] mt-2">
              Real feedback from valued customers across Tamil Nadu.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 self-start sm:self-end">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-xl bg-[#F8F3E8] hover:bg-[#ebd9a8]/50 border border-[#C9A227]/30 flex items-center justify-center text-[#171717] transition-colors cursor-pointer"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5 text-[#C9A227]" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-xl bg-[#F8F3E8] hover:bg-[#ebd9a8]/50 border border-[#C9A227]/30 flex items-center justify-center text-[#171717] transition-colors cursor-pointer"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5 text-[#C9A227]" />
            </button>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#FFFDF8] rounded-2xl p-6 sm:p-7 border border-[#C9A227]/25 shadow-xs flex flex-col justify-between hover:border-[#C9A227]/60 hover:shadow-md transition-all"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-[#C9A227] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C9A227]" />
                  ))}
                </div>

                {/* Short Review */}
                <p className="text-sm sm:text-base text-[#171717] leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Customer Name & Location */}
              <div className="pt-4 border-t border-[#C9A227]/15">
                <h4 className="font-serif font-bold text-base text-[#171717]">
                  {t.name}
                </h4>
                <p className="text-xs text-[#6F6A60] mt-0.5">
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

