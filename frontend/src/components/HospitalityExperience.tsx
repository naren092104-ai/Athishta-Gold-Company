import React from 'react';
import { Coffee, ShieldCheck, Monitor, Receipt, Banknote, Heart, Sparkles, CheckCircle2, Lock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const HospitalityExperience: React.FC = () => {
  const { isTamil, t } = useLanguage();

  const experiences = [
    {
      icon: Coffee,
      badge: isTamil ? 'பாரம்பரிய உபசரிப்பு' : 'Warm Welcome',
      title: isTamil ? 'சுடச்சுட வடிகட்டி காபி & தண்ணீர்' : 'South Indian Filter Coffee & Refreshments',
      desc: isTamil
        ? 'எங்கள் கிளைக்கு வருகை தரும் ஒவ்வொரு வாடிக்கையாளரையும் குடும்ப உறுப்பினரைப் போல இன்முகத்துடன் வரவேற்று, குளிர்ந்த நீர் மற்றும் சுவையான வடிகட்டி காபி/தேநீர் வழங்கி உபசரிக்கிறோம்.'
        : 'You and your family are greeted like honored guests. Enjoy pure mineral water, hot authentic filter coffee, or tea while you relax in comfort.',
      highlight: isTamil ? 'மதிப்பீடு இலவசம் • முடிவெடுக்க எந்த அவசரமும் இல்லை' : '100% Free Appraisal • Zero Pressure'
    },
    {
      icon: Lock,
      badge: isTamil ? 'குடும்ப பாதுகாப்பு' : 'Family Privacy',
      title: isTamil ? 'பெண்களுக்கு பாதுகாப்பான தனிநபர் ஏசி அறைகள்' : 'Private Air-Conditioned Family Cabins',
      desc: isTamil
        ? 'கூட்டம் நெரிசலான பொது அரங்கில் அல்லாமல், உங்கள் குடும்பத்தினர் மற்றும் பெண்கள் அமைதியாக அமர்ந்து பேச பிரத்தியேக குளிரூட்டப்பட்ட தனி அறைகள் (Private Appraisal Cabins) ஒதுக்கப்பட்டுள்ளன.'
        : 'No crowded counters or public prying eyes. Appraisals take place in soundproof, comfortable AC cabins designed especially with women and families in mind.',
      highlight: isTamil ? 'முழு ரகசியத்தன்மை & மரியாதை' : '100% Confidential & Secure'
    },
    {
      icon: Monitor,
      badge: isTamil ? 'நேரடி ஒளிவுமறைவற்ற பார்வை' : 'Dual-Screen Transparency',
      title: isTamil ? 'உங்கள் கண்முன்னே 2 திரைகளில் பரிசோதனை' : 'Customer-Facing Live Spectrometer Screens',
      desc: isTamil
        ? 'உங்கள் நகைகள் ரகசிய அறைக்கு எடுத்துச் செல்லப்படாது. மேசையின் மீதே அதிநவீன ஜெர்மன் எக்ஸ்ஆர்எஃப் கருவி மற்றும் வாடிக்கையாளர் பார்க்கும் டிஜிட்டல் திரையில் தங்கத்தின் துல்லிய காரட் வினாடிகளில் காட்டப்படுகிறது.'
        : 'Jewellery never leaves your sight. Our non-destructive German XRF Karatmeter displays the exact gold percentage directly on a dedicated high-definition screen facing you.',
      highlight: isTamil ? '0% உருக்கு சேதாரம் • நகை பழுதாகாது' : '0% Melting • Zero Physical Damage'
    },
    {
      icon: Receipt,
      badge: isTamil ? 'கணினி மயமாக்கப்பட்ட ரசீது' : 'Computerized Bill',
      title: isTamil ? 'வெளிப்படையான கணினி ரசீது & அரசு ஜிஎஸ்டி' : 'Clear Printed Assessment Voucher with Zero Hidden Cuts',
      desc: isTamil
        ? 'கற்களின் கழிவு, நிகர எடை, அன்றைய நேரடி சந்தை விலை ஆகியவை துல்லியமாக கணினி ரசீதில் அச்சிடப்பட்டு உங்கள் கைகளில் தரப்படுகிறது. எந்த மறைமுக பிடித்தங்களும் கிடையாது.'
        : 'Every milligram is accounted for. Stone weight deductions, gross vs net weight, and live market rates are itemized on a transparent computerized voucher for your sign-off.',
      highlight: isTamil ? 'எந்தவித மறைமுக கட்டணமும் இல்லை' : 'Zero Hidden Deductions Guarantee'
    },
    {
      icon: Banknote,
      badge: isTamil ? 'உடனடி வரவு' : 'Instant Payout',
      title: isTamil ? 'நீங்கள் இருக்கையை விட்டு எழும் முன் வங்கி வரவு' : 'Bank Transfer via IMPS/RTGS/UPI in 10 Minutes',
      desc: isTamil
        ? 'மதிப்பீடு உங்களுக்கு திருப்தி அளித்தவுடன், 10 நிமிடங்களில் உங்கள் வங்கிக் கணக்கிற்கு IMPS அல்லது RTGS மூலமாக நேரடியாக பணம் வந்து சேரும். ரொக்கப் பணமும் பெற்றுக்கொள்ளலாம்.'
        : 'The moment you accept the valuation, funds are transferred straight into your bank account before you leave the appraisal cabin, with immediate SMS confirmation.',
      highlight: isTamil ? 'நேரடி வங்கி பரிமாற்றம் / ரொக்கம்' : 'Direct Instant Account Credit / Cash'
    }
  ];

  return (
    <section id="hospitality" className="py-16 sm:py-24 bg-[#FAF5EB] border-b border-[#C89B3C]/25 relative overflow-hidden">
      {/* Decorative Warm Ambient Circles */}
      <div className="absolute top-1/4 -right-32 w-80 h-80 bg-[#E8D49E]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-72 h-72 bg-[#C89B3C]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#C89B3C]/40 text-xs font-bold text-[#9A711F] mb-3 shadow-xs">
            <Heart className="w-4 h-4 text-rose-600 fill-rose-600" />
            <span>{isTamil ? 'அன்பான தமிழ் விருந்தோம்பல்' : 'OUR HUMAN TOUCH & HOSPITALITY'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold text-[#140E0A] tracking-tight leading-snug">
            {isTamil ? (
              <>
                வெறும் வியாபாரம் அல்ல; <br />
                <span className="text-[#9A711F]">உங்கள் குடும்பத்தின் கௌரவத்திற்கு உரிய மரியாதை!</span>
              </>
            ) : (
              <>
                Not Just a Transaction. <br />
                <span className="text-[#9A711F]">A Dignified & Respectful Experience for Your Family.</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-zinc-700 mt-3 leading-relaxed">
            {isTamil
              ? 'குடும்பத் தங்கத்தை விற்கவோ அல்லது அடகு நகைகளை மீட்கவோ வரும் வாடிக்கையாளர்கள் தயக்கமோ, அச்சமோ இன்றி அமைதியுடன் செயல்பட நாங்கள் வழங்கும் 5 நட்சத்திர பாதுகாப்பு மற்றும் உபசரிப்பு அம்சங்கள்.'
              : 'We recognize that parting with heirloom ornaments is an emotional moment. Here is the 5-star comfort, security, and respectful transparency you experience when you visit our branches.'}
          </p>
        </div>

        {/* Feature Cards Carousel / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#C89B3C]/35 shadow-sm hover:shadow-xl hover:border-[#C89B3C] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-extrabold text-[#9A711F] bg-[#FAF5EB] px-3 py-1 rounded-full border border-[#C89B3C]/30">
                      {exp.badge}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF5EB] group-hover:bg-[#1A130C] group-hover:text-[#E2B755] text-[#9A711F] border border-[#C89B3C]/30 flex items-center justify-center transition-colors shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-serif font-bold text-[#140E0A] mb-2.5 group-hover:text-[#9A711F] transition-colors leading-snug">
                    {exp.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {exp.desc}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-zinc-100 flex items-center gap-2 text-xs font-bold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>{exp.highlight}</span>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Customer Guarantee Summary */}
          <div className="bg-gradient-to-br from-[#1C150E] via-[#2A1F15] to-[#140E0A] text-white rounded-3xl p-6 sm:p-7 border-2 border-[#C89B3C]/60 shadow-xl flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#E2B755] text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>{isTamil ? 'அதிஷ்டா முழு உத்தரவாதம்' : 'THE ATHISHTA PLEDGE'}</span>
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white leading-tight">
                {isTamil ? 'உங்கள் விருப்பமே இறுதி முடிவு!' : 'Your Decision is Always 100% Respected.'}
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {isTamil
                  ? 'எங்கள் மதிப்பீட்டைக் கேட்டுவிட்டு நீங்கள் விற்காமல் திரும்பிச் சென்றாலும், எவ்வித கட்டணமும் கிடையாது. புன்னகையுடன் விடைகொடுக்கிறோம்.'
                  : 'Take our free appraisal report home to discuss with your elders. Selling is strictly your voluntary choice. Zero fees, zero awkwardness.'}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-white/15 flex items-center justify-between text-xs text-[#E8D49E]">
              <span>6 Branches in TN</span>
              <span className="font-bold">• Open Mon-Sun 9:30 AM - 8:30 PM</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
