import React from 'react';
import { Coins, Sparkles, HandCoins, Home, RefreshCw, ShieldCheck, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenQuoteModal }) => {
  const serviceCards = [
    {
      id: 'gold-buying',
      title: 'Instant Gold Buying',
      subtitle: 'Guaranteed top market price',
      icon: Coins,
      serviceName: 'Gold Buying Service',
    },
    {
      id: 'purity-testing',
      title: 'German XRF Testing',
      subtitle: '100% Non-destructive laser',
      icon: Sparkles,
      serviceName: 'Purity Testing (German XRF)',
    },
    {
      id: 'instant-payment',
      title: 'Instant Settlement',
      subtitle: 'Immediate IMPS or Cash',
      icon: HandCoins,
      serviceName: 'Instant Cash/IMPS Settlement',
    },
    {
      id: 'doorstep-service',
      title: 'VIP Doorstep Service',
      subtitle: 'Private & insured evaluation',
      icon: Home,
      serviceName: 'Doorstep Gold Evaluation',
    },
    {
      id: 'old-gold-exchange',
      title: 'Old Gold Exchange',
      subtitle: 'Upgrade to 916 ornaments',
      icon: RefreshCw,
      serviceName: 'Old Gold Exchange',
    },
    {
      id: 'gold-loan-assistance',
      title: 'Pawned Gold Release',
      subtitle: 'Bank release & surplus cash',
      icon: ShieldCheck,
      serviceName: 'Pawn Redemption & Loan Assistance',
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 bg-white border-b border-zinc-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching luxury theme */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10">
          <div>
            <span className="text-[11px] font-bold text-[#A77B28] uppercase tracking-widest block mb-1">
              End-to-End Gold Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#140E0A]">
              Our Specialized Services
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 mt-1 max-w-xl">
              From lab-grade XRF spectrometry to pledged gold redemption and immediate bank settlements.
            </p>
          </div>

          <button
            onClick={() => onOpenQuoteModal('All Services Enquiry')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#A77B28] hover:text-[#8F671E] transition-colors cursor-pointer group shrink-0"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 6 Luxury Round Icon Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {serviceCards.map((service) => {
            const Icon = service.icon;
            return (
              <button
                key={service.id}
                onClick={() => onOpenQuoteModal(service.serviceName)}
                className="bg-gradient-to-b from-[#FFFDF9] to-[#FAF6EE] hover:from-white hover:to-[#FAF2E2] border border-[#C89B3C]/25 hover:border-[#C89B3C]/60 rounded-3xl p-5 sm:p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-[#A77B28]/10 cursor-pointer group"
              >
                {/* Round Gold Icon Container with Luxury Ring */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-[#C89B3C]/35 flex items-center justify-center text-[#A77B28] mb-4 group-hover:scale-105 group-hover:bg-gradient-to-br group-hover:from-[#A77B28] group-hover:to-[#C89B3C] group-hover:text-white group-hover:border-[#E5B54F] transition-all duration-300 shadow-2xs">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.75]" />
                </div>

                <h3 className="font-serif font-bold text-sm text-[#140E0A] leading-tight mb-1.5 group-hover:text-[#8F671E] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[11px] text-zinc-500 leading-snug">
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
