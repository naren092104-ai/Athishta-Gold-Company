import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, PenLine, Send, X } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState([
    {
      name: 'Revathi S.',
      location: 'Chennai',
      rating: 4.9,
      quote: 'I was a little nervous at first, but they explained everything clearly and transferred the amount while I was there. Very comfortable experience.',
    },
    {
      name: 'Karthik M.',
      location: 'Thanjavur',
      rating: 5,
      quote: 'The staff showed me the XRF test on the screen and answered all my questions patiently. Payment was done immediately.',
    },
    {
      name: 'Priya L.',
      location: 'Coimbatore',
      rating: 4.8,
      quote: 'The process was much easier than I expected. They told me the value and deductions upfront, so there were no surprises.',
    },
    {
      name: 'Prakash R.',
      location: 'Thiruvarur',
      rating: 5,
      quote: 'My gold was weighed in front of me and the money reached my account within a few minutes. Good service at Lakshmangudi.',
    },
    {
      name: 'Senthil K.',
      location: 'Kumbakonam',
      rating: 4.9,
      quote: 'Everyone was polite and gave me time to decide. I liked that they explained the rate instead of rushing me.',
    },
  ]);

  const [startIndex, setStartIndex] = useState(0);
  const [reviewOpen, setReviewOpen] = useState(false);
  const [reviewName, setReviewName] = useState('');
  const [reviewLocation, setReviewLocation] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(5);

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? testimonials.length - 3 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 3 >= testimonials.length ? 0 : prev + 1));
  };

  const handleReviewSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!reviewName.trim() || !reviewText.trim()) return;

    setTestimonials((current) => [
      ...current,
      {
        name: reviewName.trim(),
        location: reviewLocation.trim() || 'Tamil Nadu',
        rating: reviewRating,
        quote: reviewText.trim(),
      },
    ]);
    setReviewName('');
    setReviewLocation('');
    setReviewText('');
    setReviewRating(5);
    setReviewOpen(false);
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

          {/* Review action and navigation */}
          <div className="flex items-center gap-2 self-start sm:self-end">
            <button
              type="button"
              onClick={() => setReviewOpen((current) => !current)}
              className="flex h-10 items-center gap-1.5 rounded-xl border border-[#C9A227]/35 bg-[#F8F3E8] px-3 text-xs font-bold text-[#8C6D1F] transition-colors hover:bg-[#ebd9a8]/50"
            >
              {reviewOpen ? <X className="h-4 w-4" /> : <PenLine className="h-4 w-4" />}
              <span>{reviewOpen ? 'Close' : 'Write a Review'}</span>
            </button>
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

        {reviewOpen && (
          <form onSubmit={handleReviewSubmit} className="mb-8 rounded-2xl border border-[#C9A227]/30 bg-[#FFFDF8] p-5 shadow-xs sm:p-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#171717]">Share your experience</h3>
                <p className="mt-1 text-xs text-[#6F6A60]">Tell others how your visit went.</p>
              </div>
              <div className="flex items-center gap-1" aria-label={`${reviewRating} out of 5 stars`}>
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    type="button"
                    onClick={() => setReviewRating(rating)}
                    className="p-0.5"
                    aria-label={`Give ${rating} star${rating === 1 ? '' : 's'}`}
                  >
                    <Star className={`h-5 w-5 ${rating <= reviewRating ? 'fill-[#C9A227] text-[#C9A227]' : 'text-[#D8C8A9]'}`} />
                  </button>
                ))}
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                value={reviewName}
                onChange={(event) => setReviewName(event.target.value)}
                placeholder="Your name *"
                required
                className="rounded-xl border border-[#D8C8A9] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#C9A227]"
              />
              <input
                value={reviewLocation}
                onChange={(event) => setReviewLocation(event.target.value)}
                placeholder="City"
                className="rounded-xl border border-[#D8C8A9] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#C9A227]"
              />
            </div>
            <textarea
              value={reviewText}
              onChange={(event) => setReviewText(event.target.value)}
              placeholder="Write your review *"
              required
              rows={3}
              className="mt-3 w-full resize-none rounded-xl border border-[#D8C8A9] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#C9A227]"
            />
            <button type="submit" className="mt-3 inline-flex items-center gap-2 rounded-xl bg-[#C9A227] px-4 py-2.5 text-xs font-bold text-[#17110D] transition-colors hover:bg-[#b8911e]">
              <Send className="h-4 w-4" />
              Submit Review
            </button>
          </form>
        )}

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#FFFDF8] rounded-2xl p-6 sm:p-7 border border-[#C9A227]/25 shadow-xs flex flex-col justify-between hover:border-[#C9A227]/60 hover:shadow-md transition-all"
            >
              <div>
                {/* 5 Stars */}
                <div className="mb-3 flex items-center gap-2 text-[#C9A227]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C9A227]" />
                  ))}
                  <span className="ml-1 text-xs font-bold text-[#8C6D1F]">
                    {t.rating.toFixed(1)}/5
                  </span>
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

