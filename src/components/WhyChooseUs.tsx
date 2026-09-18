import React from 'react';
import { Shield, Sparkles, Scale, Zap, HeartHandshake, MapPin, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Shield,
      title: 'Transparent Evaluation',
      desc: 'Zero hidden melting charges or mystery deductions. Every calculation is broken down openly before your approval.'
    },
    {
      icon: Sparkles,
      title: 'German XRF Purity Testing',
      desc: 'Scientific, non-destructive spectrometer analysis tests exact gold karat percentage in 60 seconds without harming ornaments.'
    },
    {
      icon: Scale,
      title: 'Accurate Digital Weighing',
      desc: 'Class-II government calibrated electronic scales measure weight up to 0.001g precision in direct view of customer screens.'
    },
    {
      icon: Zap,
      title: 'Instant Spot Settlement',
      desc: 'Immediate payment in full through Spot Cash, Instant IMPS Bank Transfer, RTGS or UPI as soon as valuation is accepted.'
    },
    {
      icon: HeartHandshake,
      title: 'Real Customer Trust',
      desc: 'Proudly serving thousands of families, farmers, teachers and business owners across Tamil Nadu with dignity and empathy.'
    },
    {
      icon: MapPin,
      title: '6 Branches & Doorstep Reach',
      desc: 'Convenient physical presence in Lakshmangudi, Ambattur, Avadi, Kumbakonam, Nagapattinam, Pattukkottai and mobile home service.'
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#FAF7F0] border-b border-[#C89B3C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8D49E]/40 border border-[#C89B3C]/30 text-xs font-bold text-[#9A711F] mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>THE ATHISHTA ADVANTAGE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#171411]">
            Why Customers Across Tamil Nadu Choose Us
          </h2>
          <p className="text-sm sm:text-base text-[#241B13]/70 mt-2">
            Built on core principles of uncompromising transparency, scientific testing accuracy, and deep respect for every customer.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-7 border border-[#C89B3C]/25 shadow-sm hover:shadow-xl hover:border-[#C89B3C]/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E8D49E]/30 text-[#9A711F] group-hover:bg-[#241B13] group-hover:text-[#E2B755] flex items-center justify-center mb-5 transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#171411] mb-2 group-hover:text-[#9A711F] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#241B13]/75 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-zinc-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified Athishta Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
