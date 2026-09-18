import React from 'react';
import { FileCheck, ShieldCheck, CreditCard, Building2, HelpCircle, Phone, CheckCircle2, Lock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_PHONE } from '../data/branches';

export const KycGuide: React.FC = () => {
  const { isTamil } = useLanguage();

  const documents = [
    {
      icon: FileCheck,
      title: isTamil ? '1. அரசு அடையாள அட்டை (ஏதேனும் ஒன்று)' : '1. Government Photo ID (Any One)',
      items: [
        isTamil ? 'ஆதார் அட்டை (Aadhaar Card)' : 'Aadhaar Card (Original or DigiLocker)',
        isTamil ? 'வாக்காளர் அடையாள அட்டை (Voter ID)' : 'Voter Identity Card',
        isTamil ? 'ஓட்டுநர் உரிமம் (Driving License)' : 'Driving License',
        isTamil ? 'பாஸ்போர்ட் (Passport)' : 'Indian Passport'
      ],
      note: isTamil ? 'அசல் அட்டை கொண்டுவரவும் (நகல் நாங்களே எடுத்துக்கொள்வோம்).' : 'Please carry original ID; branch takes a photocopied copy.'
    },
    {
      icon: CreditCard,
      title: isTamil ? '2. பான் கார்டு (PAN Card)' : '2. PAN Card (If Above ₹2 Lakhs)',
      items: [
        isTamil ? 'ரூ. 2 லட்சத்திற்கு மேற்பட்ட பரிவர்த்தனைகளுக்கு வருமான வரித்துறை விதிகளின்படி பான் அட்டை கட்டாயம்' : 'Mandatory under Income Tax rules for sales exceeding ₹2,00,000',
        isTamil ? 'ரூ. 2 லட்சத்திற்கு உட்பட்ட விற்பனைக்கு பான் அட்டை தேவையில்லை' : 'Not mandatory for gold value below ₹2,00,000',
        isTamil ? 'பான் நகல் அல்லது மின்-பான் (e-PAN) போதுமானது' : 'Physical or digital e-PAN copy is acceptable'
      ],
      note: isTamil ? '100% அரசு வழிகாட்டுதலின்படி பாதுகாப்பானது.' : '100% compliant with RBI & Govt regulations.'
    },
    {
      icon: Building2,
      title: isTamil ? '3. வங்கி கணக்கு விவரங்கள் (உடனடி வரவுக்கு)' : '3. Bank Account Details (For Instant Credit)',
      items: [
        isTamil ? 'வங்கி பாஸ்புக் முதல் பக்கம் அல்லது ரத்து செய்யப்பட்ட காசோலை (Cancelled Cheque)' : 'Bank Passbook front page or Cancelled Cheque',
        isTamil ? 'உங்கள் பெயரில் உள்ள வங்கி கணக்கிற்கு மட்டுமே தொகை வரவு வைக்கப்படும்' : 'Payout is sent only to the gold owner’s registered bank account',
        isTamil ? 'கூகுள் பே / ஃபோன்பே / UPI அல்லது உடனடி IMPS/RTGS பரிவர்த்தனை' : 'Direct IMPS / RTGS / NEFT or verified UPI transfer'
      ],
      note: isTamil ? '10 நிமிடங்களில் பணம் உங்கள் கணக்கில் வந்து சேரும்.' : 'Takes under 10 minutes to reflect in your account.'
    }
  ];

  return (
    <section id="kyc" className="py-14 sm:py-20 bg-white border-b border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF5EB] border border-[#C89B3C]/40 text-xs font-bold text-[#9A711F] mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{isTamil ? 'சட்டப்பூர்வ பாதுகாப்பு & ஆவணங்கள்' : 'TRANSPARENT & LEGAL KYC PROCESS'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-[#140E0A] tracking-tight leading-tight">
            {isTamil ? (
              <>
                நீங்கள் வரும்போது கொண்டுவர வேண்டிய <br />
                <span className="text-[#9A711F]">எளிய ஆவணங்கள் வழிகாட்டி</span>
              </>
            ) : (
              <>
                Simple & Transparent <br />
                <span className="text-[#9A711F]">Customer Document (KYC) Guide</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 mt-2.5 leading-relaxed">
            {isTamil
              ? 'திருட்டு அல்லது போலி தங்க பரிவர்த்தனைகளைத் தடுக்கவும், உங்கள் குடும்பத்தின் பாதுகாப்பை 100% உறுதிப்படுத்தவும் அரசு வழிகாட்டுதலின்படி எளிய சரிபார்ப்பு மட்டுமே செய்யப்படுகிறது. எவ்வித கடினமான நடைமுறைகளும் இல்லை.'
              : 'Our simple 2-minute digital verification protects genuine families and ensures complete compliance with RBI and Government bullion transaction laws.'}
          </p>
        </div>

        {/* 3 Document Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {documents.map((doc, idx) => {
            const Icon = doc.icon;
            return (
              <div
                key={idx}
                className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-7 border border-[#C89B3C]/30 shadow-xs hover:shadow-md hover:border-[#C89B3C] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF5EB] text-[#9A711F] border border-[#C89B3C]/30 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif font-bold text-base sm:text-lg text-[#140E0A] mb-3">
                    {doc.title}
                  </h3>

                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-600">
                    {doc.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 mt-5 border-t border-zinc-100 text-[11px] font-semibold text-[#9A711F]">
                  {doc.note}
                </div>
              </div>
            );
          })}
        </div>

        {/* Friendly Reassurance Note & Helpline */}
        <div className="bg-[#FAF7F0] rounded-2xl p-5 sm:p-6 border border-[#C89B3C]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#140E0A]">
                {isTamil ? 'உங்கள் ஆவணங்கள் 100% பாதுகாப்பாக வைக்கப்படும்' : 'Your Privacy is 100% Guaranteed'}
              </h4>
              <p className="text-xs text-zinc-600 mt-0.5">
                {isTamil
                  ? 'உங்கள் அடையாள ஆவணங்கள் எந்த மூன்றாம் நபருக்கும் பகிரப்படாது. முற்றிலும் அதிகாரப்பூர்வ ஜிஎஸ்டி ரசீது தயாரிப்பிற்கு மட்டுமே பயன்படுத்தப்படும்.'
                  : 'Document records are encrypted and stored solely for official billing under Government KYC norms. Never shared with third parties.'}
              </p>
            </div>
          </div>

          <a
            href={`tel:${COMPANY_PHONE.replace(/\s+/g, '')}`}
            className="px-5 py-2.5 rounded-xl bg-white hover:bg-zinc-50 border border-zinc-300 text-xs font-bold text-[#140E0A] flex items-center gap-2 whitespace-nowrap shadow-2xs hover:shadow-xs transition-all shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-[#9A711F]" />
            <span>{isTamil ? 'ஆவணங்கள் பற்றி கேட்க: ' : 'Document Enquiry: '}{COMPANY_PHONE}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
