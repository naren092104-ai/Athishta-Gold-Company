import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppUrl } from '../services/whatsappService';

export const FAQ: React.FC = () => {
  const { isTamil } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: isTamil
        ? 'மதிப்பீடு செய்த பிறகு நான் விற்க விரும்பவில்லை என்றால் என்ன நடக்கும்?'
        : 'What happens if I decide not to sell after getting an appraisal?',
      a: isTamil
        ? 'எவ்வித கட்டணமும் கிடையாது! எங்கள் கிளைகளில் தங்க மதிப்பீடு 100% இலவசம். நீங்கள் எங்கள் மதிப்பீட்டைக் கேட்டுவிட்டு முடிவெடுக்க உங்கள் குடும்பத்தினருடன் ஆலோசிக்கலாம். விற்க வேண்டும் என்ற எந்த கட்டாயமும் இல்லை.'
        : 'Zero fee and zero pressure! Our appraisal is 100% complimentary. You are free to take our evaluation details home to discuss with your elders. Selling is strictly your voluntary decision.'
    },
    {
      q: isTamil
        ? 'நகைகளை உருக்கி அல்லது அமிலத்தால் உரசி பரிசோதிப்பீர்களா?'
        : 'Will you melt, scratch, or use acid on my gold jewellery?',
      a: isTamil
        ? 'ஒருபோதும் இல்லை! அதிஷ்டா கோல்ட் கம்பெனி நவீன ஜெர்மன் XRF ஸ்பெக்ட்ரோமீட்டர் தொழில்நுட்பத்தைப் பயன்படுத்துகிறது. உங்கள் நகையை உருக்கவோ, சேதப்படுத்தவோ மாட்டோம். கண்முன்னே 60 வினாடிகளில் காரட் துல்லியமாக திரையில் காட்டப்படும்.'
        : 'Never! We use state-of-the-art non-destructive German XRF spectrometry. Your precious ornaments are never melted, scratched, or damaged. Exact karat purity is displayed on a customer-facing screen in 60 seconds.'
    },
    {
      q: isTamil
        ? 'அடகு வைத்த நகைகளை மீட்க அதிஷ்டா எவ்வாறு உதவுகிறது?'
        : 'How does Athishta help in releasing pledged jewellery from banks or pawn shops?',
      a: isTamil
        ? 'உங்கள் அடகு ரசீதை ஆய்வு செய்து, எங்கள் மூத்த அதிகாரி உங்களுடன் வங்கி அல்லது அடகுக் கடைக்கு நேரில் வருகிறார். முழு நிலுவைக் கடனையும் நாங்களே அடைத்து, நகையை மீட்டு, மீதமுள்ள பெருந்தொகையை உங்களிடம் உடனடியாக வழங்குகிறோம்.'
        : 'We review your pledge slip, accompany you safely to the lending institution or bank, settle the entire outstanding principal and interest, release your gold, and hand over the surplus cash directly to you on the spot.'
    },
    {
      q: isTamil
        ? 'பணம் ரொக்கமாகக் கிடைக்குமா அல்லது வங்கி கணக்கில் வருமா?'
        : 'How is payment made — Cash or Bank Transfer?',
      a: isTamil
        ? 'உங்கள் விருப்பப்படி உடனடி IMPS, RTGS, UPI அல்லது ரொக்கமாக (Cash) பெற்றுக்கொள்ளலாம். நீங்கள் எங்கள் இருக்கையை விட்டு எழும் முன் 10 நிமிடங்களில் உங்கள் வங்கிக் கணக்கில் பணம் வந்து சேரும்.'
        : 'Immediate payment via direct IMPS bank transfer, RTGS, UPI, or spot cash as per your preference and RBI guidelines. Transfers reflect within 10 minutes with computerized receipt.'
    },
    {
      q: isTamil
        ? 'தங்கத்தை விற்க என்ன ஆவணங்கள் கொண்டுவர வேண்டும்?'
        : 'What documents are required to sell gold at your branches?',
      a: isTamil
        ? 'அரசு அடையாள அட்டை (ஆதார் அட்டை, வாக்காளர் அட்டை அல்லது ஓட்டுநர் உரிமம்) மற்றும் வங்கி பாஸ்புக் / காசோலை போதுமானது. ரூ. 2 லட்சத்திற்கு மேல் விற்பனை என்றால் பான் அட்டை தேவைப்படும்.'
        : 'Any government photo ID (Aadhaar, Voter ID, Driving License, or Passport) and bank account details for digital credit. PAN Card is required only for transactions exceeding ₹2,00,000 as per Income Tax laws.'
    },
    {
      q: isTamil
        ? 'உடைந்த, பழைய அல்லது கற்கள் பதித்த நகைகளை விற்க முடியுமா?'
        : 'Can I sell broken, damaged, single earrings, or stone-studded ornaments?',
      a: isTamil
        ? 'ஆம், நிச்சயமாக! உடைந்த சங்கிலிகள், ஒற்றைத் தோடுகள், பழைய நாணயங்கள் மற்றும் கற்கள் பதித்த நகைகள் அனைத்தையும் வாங்குகிறோம். கற்கள் மற்றும் மெழுகின் எடையை வெளிப்படையாக கழித்து, தூய தங்கத்திற்கு உரிய முழு சந்தை மதிப்பைத் தருகிறோம்.'
        : 'Yes, absolutely! We purchase broken chains, single earrings, damaged bangles, coins, and studded jewellery. Stone/wax weight is deducted transparently, and full market value is paid for the net pure gold.'
    }
  ];

  const whatsappUrl = getWhatsAppUrl({
    flow: 'general',
    name: 'Customer',
    mobile: '',
    service: isTamil ? 'பொது சந்தேகங்கள்' : 'General Enquiry'
  });

  return (
    <section id="faq" className="py-14 sm:py-20 bg-[#F4EFE6] border-b border-[#C89B3C]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8D49E]/60 border border-[#C89B3C]/40 text-xs font-bold text-[#9A711F] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{isTamil ? 'அடிக்கடி கேட்கப்படும் கேள்விகள்' : 'FREQUENTLY ASKED QUESTIONS'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#171411]">
            {isTamil ? 'வாடிக்கையாளர்களின் சந்தேகங்களும் தெளிவான பதில்களும்' : 'Everything You Need to Know'}
          </h2>
          <p className="text-sm sm:text-base text-[#241B13]/70 mt-2">
            {isTamil
              ? 'தங்க மதிப்பீடு, உருக்கு கழிவு உத்தரவாதம், அடகு நகை மீட்பு மற்றும் ஆவணங்கள் பற்றிய உங்கள் தயக்கங்களை நீக்கும் வெளிப்படையான பதில்கள்.'
              : 'Clear, transparent answers addressing common customer questions regarding gold testing, zero melting guarantee, pawn release, and KYC.'}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-3xl bg-[#FAF7F0] border border-[#C89B3C]/35 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#E8D49E]/20 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-sm sm:text-base text-[#171411] leading-snug">
                    {item.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#E8D49E]/50 text-[#9A711F] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#C89B3C] text-[#171411]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-700 leading-relaxed border-t border-[#C89B3C]/15 animate-fadeIn">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? WhatsApp Desk */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-[#C89B3C]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <h4 className="font-serif font-bold text-sm text-[#140E0A]">
              {isTamil ? 'வேறு ஏதேனும் சந்தேகங்கள் உள்ளதா?' : 'Still Have Questions?'}
            </h4>
            <p className="text-xs text-zinc-500 mt-0.5">
              {isTamil ? 'எங்கள் கிளை அதிகாரிகளுடன் வாட்ஸ்அப்பில் உடனே பேசலாம்.' : 'Chat directly with our senior appraisers on WhatsApp.'}
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#198754] hover:bg-[#157347] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{isTamil ? 'வாட்ஸ்அப்பில் கேளுங்கள்' : 'Ask on WhatsApp'}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
