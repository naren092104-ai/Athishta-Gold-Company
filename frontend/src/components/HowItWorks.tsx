import React from 'react';
import { MapPin, Scale, Sparkles, Banknote, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onOpenQuoteModal: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenQuoteModal }) => {
  const steps = [
    {
      step: '01',
      icon: MapPin,
      title: 'Visit Branch or Request Doorstep',
      desc: 'Bring your jewellery, broken gold, or coins to any of our 6 branches (Lakshmangudi, Ambattur, Avadi, Kumbakonam, Nagapattinam, Pattukkottai) or book our verified home service.'
    },
    {
      step: '02',
      icon: Scale,
      title: 'Ultrasonic Cleaning & Weighing',
      desc: 'We gently clean ornaments to remove dust and wax. Jewels are weighed on government-calibrated Class-II digital precision scales right before your eyes.'
    },
    {
      step: '03',
      icon: Sparkles,
      title: 'German XRF Purity Testing',
      desc: 'Our non-destructive X-Ray Fluorescence Spectrometer determines exact karat purity and precious metal percentage in 60 seconds with 0% melting loss.'
    },
    {
      step: '04',
      icon: Banknote,
      title: 'Instant Spot Cash / Bank Payout',
      desc: 'Based on today’s live market rate, we compute the maximum valuation. Funds are paid immediately via Spot Cash, IMPS, RTGS, NEFT or UPI.'
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#F4EFE6] border-b border-[#C89B3C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8D49E]/60 border border-[#C89B3C]/40 text-xs font-bold text-[#9A711F] mb-3">
            <span>TRANSPARENT 4-STEP WORKFLOW</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#171411]">
            How Gold Valuation Works at Athishta
          </h2>
          <p className="text-sm sm:text-base text-[#241B13]/70 mt-2">
            No dark backrooms, no melting guesswork, no arbitrary deductions. Every step is 100% visible on customer screens.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FAF7F0] rounded-2xl p-6 border border-[#C89B3C]/30 shadow-sm relative flex flex-col justify-between hover:border-[#C89B3C] hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#241B13] text-[#E2B755] flex items-center justify-center shadow">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="font-royal text-2xl font-bold text-[#C89B3C]/60 group-hover:text-[#9A711F] transition-colors">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#171411] mb-2 group-hover:text-[#9A711F] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#241B13]/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-zinc-200/60 text-[11px] font-semibold text-[#9A711F] flex items-center gap-1">
                <span>Step {item.step} Guarantee</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#241B13] text-[#FAF4EA] flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#C89B3C]/40">
          <div>
            <h4 className="text-lg font-serif font-bold text-white">Have questions about your jewellery valuation?</h4>
            <p className="text-xs text-zinc-300 mt-0.5">Speak directly with our senior gold appraisers or calculate indicative values online.</p>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="px-6 py-3 rounded-xl text-xs font-bold text-[#171411] bg-gradient-to-r from-[#C89B3C] to-[#E2B755] hover:from-[#B58428] hover:to-[#D4A53B] transition-all whitespace-nowrap shadow cursor-pointer"
          >
            Request Valuation Quote
          </button>
        </div>

      </div>
    </section>
  );
};
