import React from 'react';
import { Heart, Sparkles, Shield, Users, Coffee, CheckCircle2, MessageCircle, Phone } from 'lucide-react';
import { COMPANY_PHONE } from '../data/branches';
import { getWhatsAppUrl } from '../services/whatsappService';

interface HumanStoryProps {
  onOpenQuoteModal: (service?: string) => void;
  onScrollToBranches: () => void;
}

export const HumanStory: React.FC<HumanStoryProps> = ({ onOpenQuoteModal, onScrollToBranches }) => {
  const whatsappUrl = getWhatsAppUrl({
    flow: 'general',
    name: 'Customer',
    mobile: '',
    service: 'Personal Gold Consultation'
  });

  const humanPromises = [
    {
      title: 'We Understand the Emotion Behind Every Gram',
      desc: 'Gold in Tamil Nadu is not just an asset; it represents years of family hard work, weddings, heritage, and agricultural sweat. We treat every customer with utmost dignity and respect.',
      tamil: 'தங்கம் உங்கள் குடும்பத்தின் உழைப்பு — அதை நாங்கள் முழு மரியாதையுடன் மதிக்கிறோம்.'
    },
    {
      title: 'Tested Right Before Your Eyes — No Closed Doors',
      desc: 'We never take your jewellery into backrooms. The entire spectroscopic test happens on a customer-facing screen in 60 seconds with 0% melting and 0% damage.',
      tamil: 'உங்கள் கண் முன்னரே பரிசோதனை — எவ்வித ரகசிய கழிவுகளும் இல்லை.'
    },
    {
      title: 'Zero Pressure, 100% Free Consultation',
      desc: 'Walk into any of our 6 branches, have a cup of traditional South Indian tea, get your gold evaluated for free, and take your time. The choice to sell is always 100% yours.',
      tamil: 'விற்பது உங்கள் விருப்பம் — இலவச மதிப்பீடு மற்றும் ஆலோசனை மட்டுமே.'
    },
    {
      title: 'Dignified Pledged Gold Redemption',
      desc: 'If your family jewels are stuck in high-interest pawn broker shops or banks, we accompany you with complete confidentiality, clear the debt, and give you your rightful surplus.',
      tamil: 'அடகு வைத்த நகைகளை நம்பிக்கையுடன் மீட்க உடனடி உதவி.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF5EB] border-b border-[#C89B3C]/25 relative overflow-hidden">
      {/* Subtle warm glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8D49E]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C89B3C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FCF9F2] border border-[#C89B3C]/40 text-xs font-bold text-[#9A711F] mb-3 shadow-xs">
            <Heart className="w-4 h-4 text-rose-600 fill-rose-600" />
            <span>எங்கள் மனிதநேய உறுதிமொழி • OUR HUMAN PROMISE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold text-[#140E0A] tracking-tight leading-tight">
            More Than Just a Gold Company. <br className="hidden sm:inline" />
            <span className="text-[#9A711F]">A Trusted Family Partner in Tamil Nadu.</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-700 mt-3 leading-relaxed">
            We started Athishta Gold Company with a simple mission: to eliminate unfair deductions, eliminate the fear of selling gold, and provide every family in Tamil Nadu with honest, dignified, and transparent evaluation.
          </p>
        </div>

        {/* 2-Column Human Story Card */}
        <div className="bg-[#FCF9F2] rounded-3xl border-2 border-[#C89B3C]/35 shadow-xl overflow-hidden mb-12 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* Left: Warm Photo Story (5 cols) */}
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full bg-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
                alt="Athishta Gold Company staff and warm customer consultation in Tamil Nadu"
                className="w-full h-full object-cover brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140E0A] via-[#140E0A]/40 to-transparent" />
              
              {/* Overlay Note */}
              <div className="absolute bottom-6 left-6 right-6 text-white bg-[#1A130C]/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-[#C89B3C]/40">
                <div className="flex items-center gap-2 text-[#E8D49E] text-xs font-bold uppercase tracking-wider mb-1">
                  <Coffee className="w-4 h-4 text-[#C89B3C]" />
                  <span>Tamil Hospitality at Every Branch</span>
                </div>
                <p className="text-xs text-zinc-200 leading-relaxed">
                  "Whenever a customer walks in with their parents or children, our first step is to offer water, tea, and listen patiently. Trust is built on human warmth, not machines alone."
                </p>
                <div className="text-[11px] text-[#E8D49E] font-semibold mt-2">
                  — Athishta Branch Staff Team (Lakshmangudi, Thiruvarur)
                </div>
              </div>
            </div>

            {/* Right: The 4 Human Pillars (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-6 flex flex-col justify-between">
              
              <div className="space-y-6">
                <div className="border-b border-[#C89B3C]/20 pb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#9A711F]">
                    OUR COMMITMENT TO YOU
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#140E0A] mt-1">
                    How We Treat You When You Visit Us
                  </h3>
                </div>

                <div className="space-y-5">
                  {humanPromises.map((p, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 group">
                      <div className="w-8 h-8 rounded-full bg-[#FAF5EB] group-hover:bg-[#1A130C] group-hover:text-[#E2B755] text-[#9A711F] border border-[#C89B3C]/40 flex items-center justify-center font-bold text-xs shrink-0 transition-colors shadow-xs mt-0.5">
                        {idx + 1}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-[#140E0A] group-hover:text-[#9A711F] transition-colors">
                          {p.title}
                        </h4>
                        <p className="text-xs text-zinc-600 leading-relaxed">
                          {p.desc}
                        </p>
                        <p className="text-[11px] font-semibold text-[#9A711F] bg-[#FAF5EB] px-2.5 py-0.5 rounded-md inline-block">
                          {p.tamil}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Human Action Bar */}
              <div className="pt-6 border-t border-[#C89B3C]/20 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#198754] hover:bg-[#157347] transition-all shadow-md flex items-center justify-center gap-2 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Talk with a Branch Appraiser on WhatsApp</span>
                </a>

                <button
                  onClick={onScrollToBranches}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[#140E0A] bg-white hover:bg-[#FAF5EB] border border-[#C89B3C]/40 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Users className="w-4 h-4 text-[#9A711F]" />
                  <span>Meet Our Local Branch Teams</span>
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Real Life Scenarios - Empathy Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: 'Agricultural & Harvest Season',
              location: 'Thiruvarur & Delta Villages',
              text: 'Immediate spot cash for crop seeds, machinery, or post-harvest settlements with zero wait time.',
              badge: 'விவசாயிகள் ஆதரவு'
            },
            {
              title: 'Daughter / Son Higher Education',
              location: 'Kumbakonam & Nagapattinam',
              text: 'Transparent bullion rates to pay college admission and tuition fees on the very same afternoon.',
              badge: 'கல்வி கட்டணம்'
            },
            {
              title: 'Hospital & Medical Emergencies',
              location: 'Ambattur & Avadi Chennai',
              text: 'Urgent doorstep evaluation at home or hospital within 2 hours with instant IMPS digital bank transfer.',
              badge: 'அவசர உதவி'
            },
            {
              title: 'Pawn Debt Closure & Relief',
              location: 'Pattukkottai & Mannargudi',
              text: 'Friendly accompaniment to release mortgaged gold and stop heavy monthly interest deductions.',
              badge: 'அடகு மீட்பு'
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-2xl border border-[#C89B3C]/30 shadow-xs hover:shadow-md hover:border-[#C89B3C] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-[#9A711F] bg-[#FAF5EB] px-2 py-0.5 rounded border border-[#C89B3C]/30">
                    {item.badge}
                  </span>
                  <span className="text-[10px] text-zinc-400 font-medium">
                    {item.location}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#140E0A] mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
              <div className="pt-3 mt-3 border-t border-zinc-100 text-[11px] text-[#9A711F] font-semibold flex items-center gap-1">
                <span>Free appraisal anytime</span>
                <span>•</span>
                <span>No obligation</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
