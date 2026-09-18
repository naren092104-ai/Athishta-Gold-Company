import React from 'react';
import { Coins, Sparkles, HandCoins, Home, RefreshCw, ShieldCheck, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenQuoteModal }) => {
  const serviceCards = [
    {
      id: 'gold-buying',
      title: 'Gold Buying',
      subtitle: 'Best market value',
      icon: Coins,
      serviceName: 'Gold Buying Service',
    },
    {
      id: 'purity-testing',
      title: 'Purity Testing',
      subtitle: 'Advanced testing',
      icon: Sparkles,
      serviceName: 'Purity Testing (German XRF)',
    },
    {
      id: 'instant-payment',
      title: 'Instant Payment',
      subtitle: 'Hassle-free process',
      icon: HandCoins,
      serviceName: 'Instant Cash/IMPS Settlement',
    },
    {
      id: 'doorstep-service',
      title: 'Doorstep Service',
      subtitle: 'At your convenience',
      icon: Home,
      serviceName: 'Doorstep Gold Evaluation',
    },
    {
      id: 'old-gold-exchange',
      title: 'Old Gold Exchange',
      subtitle: 'Upgrade easily',
      icon: RefreshCw,
      serviceName: 'Old Gold Exchange',
    },
    {
      id: 'gold-loan-assistance',
      title: 'Gold Loan Assistance',
      subtitle: 'Get guidance',
      icon: ShieldCheck,
      serviceName: 'Pawn Redemption & Loan Assistance',
    },
  ];

  return (
    <section id="services" className="py-10 sm:py-14 bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching Image */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#140E0A]">
            Our Services
          </h2>

          <button
            onClick={() => onOpenQuoteModal('All Services Enquiry')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#A77B28] hover:text-[#8F671E] transition-colors cursor-pointer group"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* 6 Round Icon Cards Grid matching Image */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {serviceCards.map((service) => {
            const Icon = service.icon;
            return (
              <button
                key={service.id}
                onClick={() => onOpenQuoteModal(service.serviceName)}
                className="bg-[#FFFDF9] hover:bg-[#FAF5EC] border border-zinc-200/80 hover:border-[#A77B28]/40 rounded-2xl p-5 flex flex-col items-center text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-pointer group"
              >
                {/* Round Gold Icon Container matching Image */}
                <div className="w-14 h-14 rounded-full bg-[#FAF4EA] border border-[#A77B28]/30 flex items-center justify-center text-[#A77B28] mb-3.5 group-hover:scale-105 group-hover:bg-[#A77B28] group-hover:text-white transition-all shadow-2xs">
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </div>

                <h3 className="font-serif font-bold text-sm text-[#140E0A] leading-tight mb-1">
                  {service.title}
                </h3>
                <p className="text-[11px] text-zinc-500 leading-tight">
                  {service.subtitle}
                </p>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
