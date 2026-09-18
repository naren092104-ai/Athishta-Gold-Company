import React from 'react';
import { CheckCircle2, Home, IndianRupee, ShieldCheck, TrendingUp } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    { number: '01', title: 'Bring Your Gold', eyebrow: 'Convenient & Hassle-Free', image: '/step1_bring_gold.jpg', alt: 'Customer presenting gold jewellery at Athishta Gold Company', summary: 'Visit our branch or enquire about our doorstep service.', details: ['Visit a branch near you', 'Doorstep enquiry available', 'Simple and quick process'], badge: 'Step 1 · Get Started' },
    { number: '02', title: 'Check Your Gold', eyebrow: 'Professional Evaluation', image: '/step2_purity_xrf.jpg', alt: 'A gold bar being tested with XRF purity equipment', summary: 'Your gold is checked for purity and weight using advanced equipment.', details: ['Accurate purity verification', 'Precise weight check', 'Transparent process'], badge: 'Step 2 · Purity Check' },
    { number: '03', title: 'Know Your Gold Value', eyebrow: 'Live Market Pricing', image: '/step3_valuation_slip.jpg', alt: 'A gold valuation being explained to a customer', summary: 'Get an indicative value based on the current gold rate and verified details.', details: ['Current live gold rate', 'Clear and fair valuation', 'No hidden charges'], badge: 'Step 3 · Get Your Value' },
    { number: '04', title: 'Get Paid Instantly', eyebrow: 'Fast & Secure', image: '/step4_instant_payout.jpg', alt: 'Customer receiving a gold settlement at Athishta Gold Company', summary: 'Complete the process and receive your payment through the available settlement method.', details: ['Quick settlement', 'Secure payment', 'Multiple payment options'], badge: 'Step 4 · Settlement' },
  ];

  const trustItems = [
    { icon: ShieldCheck, title: 'Transparent', subtitle: 'Evaluation' },
    { icon: TrendingUp, title: 'Fair', subtitle: 'Pricing' },
    { icon: IndianRupee, title: 'Instant', subtitle: 'Payment' },
    { icon: Home, title: 'Doorstep', subtitle: 'Service' },
  ];

  return (
    <section id="how-it-works" className="how-works-section relative overflow-hidden border-b border-[#C9A227]/25 py-16 sm:py-20 lg:py-24">
      <div className="how-works-temple absolute inset-0 pointer-events-none" />
      <div className="how-works-ribbon absolute inset-x-0 bottom-0 pointer-events-none" />
      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-[#AF7A18]"><span className="h-px w-16 bg-[#C9A227]" />How It Works<span className="h-px w-16 bg-[#C9A227]" /></p>
          <h2 className="font-serif text-4xl font-bold leading-tight text-[#15110D] sm:text-5xl lg:text-6xl">Simple. Transparent. <span className="gold-gradient-text">Trusted.</span></h2>
          <p className="mt-3 text-sm text-[#554F47] sm:text-base">From gold evaluation to payment, every step is clear.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {steps.map((step) => (
            <article key={step.number} className="how-works-card group overflow-hidden rounded-2xl border border-[#D9AD37] bg-[#FFFDF8] shadow-[0_14px_35px_rgba(84,54,16,0.16)] transition-transform duration-300 hover:-translate-y-2">
              <div className="relative aspect-[1.25/1] overflow-hidden bg-[#2B1A0D]
">
                <img src={step.image} alt={step.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17100A]/65 via-transparent to-transparent" />
                <div className="absolute left-3 top-3 rounded-full border border-[#E5B940] bg-[#17100A]/90 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm"><span className="mr-1 text-[#F5C84B]">{step.number}</span> STEP</div>
                <span className="absolute bottom-3 left-3 right-3 rounded-md bg-[#E7B92F] px-2 py-1.5 text-center text-[10px] font-extrabold uppercase tracking-wide text-[#251708] shadow-md">{step.badge}</span>
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#C08A17]">{step.eyebrow}</p>
                <h3 className="mt-1 font-serif text-2xl font-bold leading-tight text-[#17110D]">{step.title}</h3>
                <p className="mt-3 min-h-[48px] text-sm leading-relaxed text-[#665D50]">{step.summary}</p>
                <div className="mt-4 space-y-2 border-t border-[#C9A227]/25 pt-4">{step.details.map((detail) => <p key={detail} className="flex items-start gap-2 text-xs font-medium text-[#31271D]"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#D99F12]" />{detail}</p>)}</div>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-8 flex max-w-6xl flex-col items-center justify-between gap-5 border-y border-[#C9A227]/35 py-4 sm:flex-row">
          <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-0">{trustItems.map((item, index) => { const Icon = item.icon; return <div key={item.title} className={`flex items-center justify-center gap-2.5 px-2 text-left ${index < trustItems.length - 1 ? 'sm:border-r sm:border-[#C9A227]/35' : ''}`}><Icon className="h-8 w-8 shrink-0 text-[#C99618]" /><span><strong className="block text-sm text-[#17110D]">{item.title}</strong><span className="block text-xs text-[#665D50]">{item.subtitle}</span></span></div>; })}</div>
          <a href="tel:+919363639955" className="flex shrink-0 items-center gap-3 rounded-full bg-[#382313] px-5 py-2.5 text-xs text-[#FFF8E8] shadow-md"><span className="text-[#F4C64C]">Need Help?</span><strong>+91 93636 39955</strong></a>
        </div>
        <div className="mt-6 flex items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#9A711F]"><span className="h-px w-14 bg-[#C9A227]/60" />More Than Gold · It's Trust<span className="h-px w-14 bg-[#C9A227]/60" /></div>
      </div>
    </section>
  );
};