import React, { useState, useMemo } from 'react';
import { ShieldCheck, MessageCircle, AlertCircle, CheckCircle2, ArrowRight, Heart, Calculator, Landmark, Banknote, Sparkles } from 'lucide-react';
import { openWhatsAppEnquiry } from '../services/whatsappService';
import { formatINR } from '../utils/formatCurrency';
import { useLanguage } from '../context/LanguageContext';

export const PawnRedemption: React.FC = () => {
  const { isTamil, t } = useLanguage();

  // Pledged Gold Surplus Calculator State
  const [pledgedWeight, setPledgedWeight] = useState<number>(32); // e.g. 4 sovereigns
  const [pledgedPurity, setPledgedPurity] = useState<'22K' | '24K' | '18K'>('22K');
  const [loanDueAmount, setLoanDueAmount] = useState<number>(150000);

  // Baseline 22K rate
  const ratePerGram = pledgedPurity === '24K' ? 7520 : pledgedPurity === '18K' ? 5640 : 6890;

  const totalMarketValue = useMemo(() => {
    return Math.round(pledgedWeight * ratePerGram);
  }, [pledgedWeight, ratePerGram]);

  const surplusCash = useMemo(() => {
    return Math.max(0, totalMarketValue - loanDueAmount);
  }, [totalMarketValue, loanDueAmount]);

  const handlePawnWhatsApp = () => {
    openWhatsAppEnquiry({
      flow: 'pawn_redemption',
      name: 'Customer',
      mobile: '',
      service: isTamil ? 'அடகு நகைகள் மீட்பு & உபரி ரொக்கம்' : 'Pawn Redemption Assistance',
      weight: pledgedWeight,
      purity: pledgedPurity,
      notes: isTamil
        ? `அடகு நகை எடை: ${pledgedWeight}g (${pledgedWeight / 8} சவரன்). வங்கியில் கடன் பாக்கி: ₹${loanDueAmount.toLocaleString('en-IN')}. எதிர்பார்க்கும் சந்தை மதிப்பு: ₹${totalMarketValue.toLocaleString('en-IN')}. எதிர்பார்க்கும் உபரி ரொக்கம்: ₹${surplusCash.toLocaleString('en-IN')}.`
        : `Pledged Weight: ${pledgedWeight}g. Loan Due: ₹${loanDueAmount.toLocaleString('en-IN')}. Market Value: ₹${totalMarketValue.toLocaleString('en-IN')}. Est Surplus Cash: ₹${surplusCash.toLocaleString('en-IN')}.`
    });
  };

  const steps = [
    {
      num: '1',
      title: isTamil ? 'அடகு ரசீது சரிபார்ப்பு' : 'Free Pawn Receipt Review',
      desc: isTamil
        ? 'உங்கள் வங்கி அல்லது அடகுக் கடை ரசீதை எங்கள் கிளைக்கு கொண்டுவாருங்கள் அல்லது வாட்ஸ்அப்பில் பகிருங்கள். உடனடி இலவச மதிப்பீடு செய்வோம்.'
        : 'Bring your pledge slip or share via WhatsApp. We evaluate the current market surplus for free without any obligation.'
    },
    {
      num: '2',
      title: isTamil ? 'அதிகாரியுடன் நேரில் செல்லுதல்' : 'Safe Accompaniment to Bank',
      desc: isTamil
        ? 'எங்கள் மூத்த அதிகாரி உங்களுடன் வங்கி அல்லது அடகுக் கடைக்கு நேரில் வந்து, நீங்கள் எவ்வித மன உளைச்சலும் இன்றி கண்ணியத்துடன் நகையை மீட்க உதவுவார்.'
        : 'Our senior officer accompanies you safely to the lending institution or bank with complete confidentiality and dignity.'
    },
    {
      num: '3',
      title: isTamil ? 'கடன் முழுவதையும் அதிஷ்டா செலுத்தும்' : 'Athishta Clears Outstanding Debt',
      desc: isTamil
        ? 'அசலும் வட்டியும் முழுமையாக அதிஷ்டா கோல்ட் கம்பெனி சார்பாக உடனே செலுத்தப்பட்டு உங்கள் நகைகள் மீட்கப்படும்.'
        : 'We settle the full principal and interest dues directly on the spot to release your gold from auction risk.'
    },
    {
      num: '4',
      title: isTamil ? 'மீதமுள்ள உபரி ரொக்கம் உங்கள் கையில்' : 'Instant Surplus Cash Handover',
      desc: isTamil
        ? 'நகையின் இன்றைய முழு சந்தை மதிப்பில், அடைத்த கடன் தொகையைக் கழித்து மீதமுள்ள பெருந்தொகை ரொக்கமாக அல்லது உங்கள் வங்கிக் கணக்கில் உடனே வழங்கப்படும்.'
        : 'After clearing the loan, the remaining surplus cash balance is handed over to you immediately via Cash or IMPS.'
    }
  ];

  return (
    <section id="pawn-redemption" className="py-14 sm:py-20 bg-[#FAF7F0] border-b border-[#C89B3C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Card */}
        <div className="bg-[#19120B] rounded-3xl overflow-hidden border-2 border-[#C89B3C]/40 shadow-2xl text-[#FAF4EA]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C89B3C]/20 border border-[#C89B3C]/40 text-xs font-bold text-[#E8D49E]">
                <ShieldCheck className="w-4 h-4 text-[#E5B54F]" />
                <span>{t('pawn.badge')}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-white leading-tight">
                {t('pawn.title')}
              </h2>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {t('pawn.subtitle')}
              </p>

              {/* 4 Steps Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {steps.map((st, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-3.5 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-[#E5B54F] text-[#140E0A] flex items-center justify-center font-bold text-[11px] shrink-0">
                        {st.num}
                      </span>
                      <h4 className="font-bold text-xs sm:text-sm text-white">
                        {st.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-zinc-300 leading-relaxed pl-7">
                      {st.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Dignity & Privacy Notice */}
              <div className="p-3.5 rounded-2xl bg-[#140E0A] border border-[#C89B3C]/30 text-xs text-zinc-300 flex items-start gap-2.5">
                <Heart className="w-4 h-4 text-rose-500 fill-rose-500 shrink-0 mt-0.5" />
                <p>
                  <strong>{isTamil ? '100% கண்ணியம் & ரகசியத்தன்மை:' : 'Dignified & 100% Confidential:'}</strong>{' '}
                  {isTamil
                    ? 'குடும்பப் பிரச்சனைகள் அல்லது கந்துவட்டி நெருக்கடிகளை நாங்கள் மனிதநேயத்துடன் கையாள்கிறோம். எந்த மூன்றாம் நபருக்கும் தகவல் தெரியாது.'
                    : 'We understand family hardships with empathy. Every pawn redemption is handled with maximum privacy, zero judgment, and full legal transparency.'}
                </p>
              </div>

            </div>

            {/* Right: Interactive Surplus Calculator (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-[#241A10] rounded-3xl p-6 sm:p-7 border-2 border-[#C89B3C]/50 shadow-xl space-y-5">
                
                <div className="border-b border-white/10 pb-3 flex items-center justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-base sm:text-lg text-white">
                      {t('pawn.calcTitle')}
                    </h3>
                    <p className="text-[11px] text-[#E5B54F]">
                      {isTamil ? 'கடன் போக கையில் கிடைக்கும் உபரி பணம்' : 'See surplus cash you take home today'}
                    </p>
                  </div>
                  <Calculator className="w-5 h-5 text-[#E5B54F]" />
                </div>

                {/* Calculator Inputs */}
                <div className="space-y-3.5">
                  
                  {/* Pledged Weight */}
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1 text-zinc-300">
                      <span>{isTamil ? 'அடகு வைத்த நகை எடை (கிராம்)' : 'Pledged Gold Weight (grams)'}</span>
                      <span className="text-[#E5B54F] font-bold">
                        {pledgedWeight}g ({Math.round((pledgedWeight / 8) * 10) / 10} {isTamil ? 'சவரன்' : 'pavan'})
                      </span>
                    </div>
                    <input
                      type="number"
                      min="1"
                      step="1"
                      value={pledgedWeight === 0 ? '' : pledgedWeight}
                      onChange={(e) => {
                        const val = e.target.value === '' ? 0 : parseFloat(e.target.value);
                        setPledgedWeight(isNaN(val) ? 0 : val);
                      }}
                      className="w-full bg-[#160E07] border border-[#C89B3C]/40 rounded-xl px-3 py-2 text-xs font-bold text-white focus:outline-none focus:border-[#E5B54F]"
                      placeholder="e.g. 32"
                    />
                  </div>

                  {/* Quick Sovereigns */}
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {[8, 16, 24, 32, 48, 64].map((wt) => (
                      <button
                        key={wt}
                        type="button"
                        onClick={() => setPledgedWeight(wt)}
                        className={`px-2 py-0.5 rounded text-[10px] font-bold cursor-pointer transition-colors ${
                          pledgedWeight === wt ? 'bg-[#E5B54F] text-[#140E0A]' : 'bg-white/10 text-zinc-300 hover:bg-white/20'
                        }`}
                      >
                        {wt / 8} {isTamil ? 'சவரன்' : 'pavan'} ({wt}g)
                      </button>
                    ))}
                  </div>

                  {/* Loan Due Amount */}
                  <div>
                    <label className="block text-xs text-zinc-300 mb-1">
                      {t('pawn.loanAmount')}
                    </label>
                    <input
                      type="number"
                      min="0"
                      step="5000"
                      value={loanDueAmount === 0 ? '' : loanDueAmount}
                      onChange={(e) => {
                        const val = e.target.value === '' ? 0 : parseFloat(e.target.value);
                        setLoanDueAmount(isNaN(val) ? 0 : val);
                      }}
                      className="w-full bg-[#160E07] border border-[#C89B3C]/40 rounded-xl px-3 py-2 text-xs font-bold text-white focus:outline-none focus:border-[#E5B54F]"
                      placeholder="e.g. 150000"
                    />
                  </div>

                </div>

                {/* Calculation Output Card */}
                <div className="p-4 rounded-2xl bg-[#160E07] border border-[#C89B3C]/40 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-zinc-300">
                    <span>{t('pawn.marketVal')}:</span>
                    <span className="font-bold text-white">{formatINR(totalMarketValue)}</span>
                  </div>
                  <div className="flex items-center justify-between text-zinc-300">
                    <span>{t('pawn.loanCleared')}:</span>
                    <span className="font-bold text-rose-400">- {formatINR(loanDueAmount)}</span>
                  </div>
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-[#E5B54F] block">
                        {t('pawn.surplusCash')}
                      </span>
                      <span className="text-[10px] text-zinc-400">{isTamil ? 'உடனடி ரொக்கம் / வங்கி வரவு' : 'Instant Cash / Bank Settlement'}</span>
                    </div>
                    <span className="text-2xl font-serif font-extrabold text-emerald-400">
                      {formatINR(surplusCash)}
                    </span>
                  </div>
                </div>

                {/* Action CTA */}
                <button
                  type="button"
                  onClick={handlePawnWhatsApp}
                  className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-[#140E0A] bg-gradient-to-r from-[#E5B54F] via-[#F3C34F] to-[#C99427] hover:brightness-105 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>{isTamil ? 'இந்த நகை மீட்பு உதவி பெற வாட்ஸ்அப்' : 'WhatsApp Pawn Redemption Enquiry'}</span>
                </button>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
