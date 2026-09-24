import React from 'react';
import { ArrowRight, ArrowRightLeft, Coins, FileText, Home, ShieldCheck, Sparkles } from 'lucide-react';

interface ServicesProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenQuoteModal }) => {
  const services = [
    {
      id: 'gold-buying',
      name: 'Gold Buying',
      description: 'Bring in jewellery you no longer wear. We test it with you and settle the value immediately.',
      icon: Coins,
    },
    {
      id: 'gold-selling',
      name: 'Gold Selling',
      description: 'Get a fair return for family gold, with the purity, weight, and price clearly explained.',
      icon: Sparkles,
    },
    {
      id: 'gold-exchange',
      name: 'Gold Exchange',
      description: 'Give old jewellery a new beginning and move its value into a design you will love wearing.',
      icon: ArrowRightLeft,
    },
    {
      id: 'instant-gold-quote',
      name: 'Instant Gold Quote',
      description: 'Know what your gold is worth in minutes, with a straightforward valuation and no guesswork.',
      icon: FileText,
    },
    {
      id: 'pawn-redemption',
      name: 'Pawn Redemption',
      description: 'We help you understand the redemption process and get your pledged gold back with less stress.',
      icon: ShieldCheck,
    },
    {
      id: 'doorstep-service',
      name: 'Doorstep Service',
      description: 'Prefer to stay home? Our team can visit for a private evaluation and secure payment.',
      icon: Home,
    },
  ];

  return (
    <section id="services" className="bg-[#F8F3E8] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#C9A227]/60" />
            <span className="inline-flex h-3 w-3 items-center justify-center rounded-full border border-[#C9A227]/70 bg-[#F8F3E8]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C9A227]" />
            </span>
            <span className="h-px w-12 bg-[#C9A227]/60" />
          </div>

          <h2 className="font-serif text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl lg:text-[3rem]">
            Our <span className="text-[#C99622]">Services</span>
          </h2>
          <p className="mt-4 text-sm text-[#6F6A60] sm:text-base">
            Whatever brings you in, our people take the time to listen, explain, and help you choose what feels right.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => onOpenQuoteModal(service.name)}
                className="group flex min-h-[200px] cursor-pointer flex-col justify-between rounded-xl border border-[#C9A227]/30 bg-[#FFFDF8] p-6 shadow-[0_6px_18px_rgba(76,51,15,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A227]/60 hover:shadow-[0_12px_24px_rgba(76,51,15,0.07)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#C9A227]/40 bg-[#F9F0DB] text-[#C99622]">
                    <Icon className="h-6 w-6 stroke-[1.7]" />
                  </div>

                  <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A227]/45 bg-transparent text-[#C99622] transition-colors group-hover:bg-[#F5E7B7] group-hover:border-[#C9A227]"
                    aria-label={`Open ${service.name}`}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-7">
                  <h3 className="font-serif text-[1.7rem] font-bold leading-tight text-[#171717]">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#655E53]">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

