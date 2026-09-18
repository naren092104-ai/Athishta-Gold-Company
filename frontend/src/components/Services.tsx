import React from 'react';
import { Coins, Sparkles, ShieldAlert, FileText, Home } from 'lucide-react';

interface ServicesProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenQuoteModal }) => {
  const services = [
    {
      id: 'gold-buying',
      name: 'Gold Buying',
      sentence: 'Immediate settlement for your gold jewellery at fair market rates.',
      icon: Coins,
    },
    {
      id: 'gold-selling',
      name: 'Gold Selling',
      sentence: 'Highest return value for family gold with certified purity appraisal.',
      icon: Sparkles,
    },
    {
      id: 'pawn-redemption',
      name: 'Pawn Redemption',
      sentence: 'Hassle-free release assistance to redeem pledged gold from pawnshops or banks.',
      icon: ShieldAlert,
    },
    {
      id: 'instant-gold-quote',
      name: 'Instant Gold Quote',
      sentence: 'Transparent valuation in minutes using certified German XRF testing.',
      icon: FileText,
    },
    {
      id: 'doorstep-service',
      name: 'Doorstep Service',
      sentence: 'Secure, confidential gold evaluation and payment at your home.',
      icon: Home,
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-[#FFFDF8] border-b border-[#C9A227]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#171717]">
            Our Services
          </h2>
          <p className="text-sm sm:text-base text-[#6F6A60] mt-2">
            Professional and transparent gold valuation services across Tamil Nadu.
          </p>
        </div>

        {/* 5 Large Elegant Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => onOpenQuoteModal(service.name)}
                className="bg-[#FFFDF8] hover:bg-[#F8F3E8]/60 border border-[#C9A227]/25 hover:border-[#C9A227]/60 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F8F3E8] border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#171717] group-hover:text-[#C9A227] transition-colors mb-2">
                    {service.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6F6A60] leading-relaxed">
                    {service.sentence}
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

