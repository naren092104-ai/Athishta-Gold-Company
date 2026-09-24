import React from 'react';
import { ArrowRight, Gem, Home, IndianRupee, ShieldCheck, TrendingUp } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    { number: '01', title: 'Bring Your Gold', image: '/step1_bring_gold.jpg', alt: 'Customer presenting gold jewellery at Athishta Gold Company', summary: 'Visit our branch or request doorstep service.' },
    { number: '02', title: 'Check Your Gold', image: '/step2_purity_xrf.jpg', alt: 'A gold bar being tested with XRF purity equipment', summary: 'Professional purity and weight verification.' },
    { number: '03', title: 'Know Your Value', image: '/step3_valuation_slip.jpg', alt: 'A gold valuation being explained to a customer', summary: 'Get a transparent value based on today’s rate.' },
    { number: '04', title: 'Get Paid Instantly', image: '/step4_instant_payout.jpg', alt: 'Customer receiving a gold settlement at Athishta Gold Company', summary: 'Quick and secure payment after valuation.' },
  ];

  return (
    <section id="how-it-works" className="border-b border-[#C9A227]/20 bg-[#F8F3E8] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-[#AF7A18]">
            HOW IT WORKS
          </p>
          <h2 className="font-serif text-4xl font-bold leading-tight text-[#15110D] sm:text-5xl lg:text-[3.3rem]">
            Simple. Transparent.<br />
            <span className="text-[#C99622]">Trusted.</span>
          </h2>
          <p className="mt-4 text-sm text-[#554F47] sm:text-base">
            From gold evaluation to payment, every step is clear.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <article key={step.number} className="group overflow-hidden rounded-[18px] border border-[#C9A227]/30 bg-[#FFFDF8] shadow-[0_10px_28px_rgba(57,42,12,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A227]/60 hover:shadow-[0_16px_30px_rgba(57,42,12,0.08)]">
              <div className="relative overflow-hidden bg-[#2B1A0D]">
                <img src={step.image} alt={step.alt} className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17100A]/55 via-transparent to-transparent" />
                <div className="absolute left-3 top-3 rounded-full border border-[#E5B940] bg-[#17100A]/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                  <span className="mr-1 text-[#F5C84B]">{step.number}</span>STEP
                </div>
              </div>

              <div className="px-4 pb-4 pt-4">
                <div className="mb-3 flex items-center justify-center">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C9A227]/45 bg-[#F9F0DB] text-[#C99622]">
                    <Gem className="h-4 w-4" />
                  </span>
                </div>

                <h3 className="whitespace-nowrap text-center font-serif text-[1.65rem] font-bold leading-tight text-[#17110D]">
                  {step.title}
                </h3>
                <p className="mt-3 text-center text-sm leading-relaxed text-[#665D50]">
                  {step.summary}
                </p>

                <div className="mt-4 flex justify-center">
                  <button
                    type="button"
                    aria-label={step.title}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C9A227]/40 bg-[#F7F0DF] text-[#C99622] transition-colors hover:bg-[#F3E2AC]"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};