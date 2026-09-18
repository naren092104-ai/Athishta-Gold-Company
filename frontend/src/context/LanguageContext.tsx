import React, { createContext, useContext, useState } from 'react';

export type Language = 'en' | 'ta';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isTamil: boolean;
  t: (key: string) => string;
}

const translations: Record<string, { en: string; ta: string }> = {
  // Navigation
  'nav.home': { en: 'Home', ta: 'முகப்பு' },
  'nav.about': { en: 'About Us', ta: 'எங்களை பற்றி' },
  'nav.services': { en: 'Services', ta: 'சேவைகள்' },
  'nav.goldRate': { en: 'Live Gold Rate', ta: 'இன்றைய தங்கம் விலை' },
  'nav.branches': { en: 'Our Branches', ta: 'கிளைகள்' },
  'nav.hospitality': { en: 'Hospitality', ta: 'விருந்தோம்பல்' },
  'nav.pawnRedemption': { en: 'Pawn Redemption', ta: 'அடகு நகை மீட்பு' },
  'nav.gallery': { en: 'Gallery', ta: 'புகைப்படங்கள்' },
  'nav.testimonials': { en: 'Customer Stories', ta: 'வாடிக்கையாளர் கருத்து' },
  'nav.kyc': { en: 'KYC Guide', ta: 'தேவையான ஆவணங்கள்' },
  'nav.faq': { en: 'FAQ', ta: 'கேள்வி & பதில்' },
  'nav.contact': { en: 'Contact', ta: 'தொடர்புக்கு' },

  // Top Bar & Announcement
  'topbar.tagline': {
    en: 'Gold Buying | Non-Destructive Purity Testing | Instant Bank Settlement | 6 Branches Across Tamil Nadu',
    ta: 'தங்கம் கொள்முதல் | நவீன சேதமில்லா பரிசோதனை | உடனடி வங்கி பரிவர்த்தனை | தமிழகம் முழுவதும் 6 கிளைகள்'
  },
  'topbar.announcement': {
    en: '✨ Live Gold Rates Active • 0% Melting Loss Guarantee • Private AC Family Cabins • Free South Indian Coffee / Tea',
    ta: '✨ இன்றைய நேரடி தங்கம் விலை • 0% உருக்கும் கழிவு உத்தரவாதம் • தனிநபர் ஏசி அறைகள் • பாரம்பரிய காபி/தேநீர் உபசரிப்பு'
  },
  'topbar.whatsappQuote': { en: 'Get Quote on WhatsApp', ta: 'வாட்ஸ்அப்பில் விலை அறிய' },

  // Hero Section
  'hero.badge': { en: 'TAMIL NADU’S MOST TRUSTED GOLD ENTERPRISE', ta: 'தமிழகத்தின் நம்பகமான தங்க கொள்முதல் நிறுவனம்' },
  'hero.titleLine1': { en: 'Your Family Gold', ta: 'உங்கள் குடும்பத்தின்' },
  'hero.titleLine2': { en: 'Deserves Honest Value.', ta: 'தங்கத்திற்கு உண்மையான மதிப்பு.' },
  'hero.subtitle': {
    en: 'Sell old gold or release pledged jewellery with total peace of mind. Non-destructive German XRF testing, Class-II digital precision scales, and 100% instant settlement right in front of your eyes.',
    ta: 'பழைய தங்கம் விற்க அல்லது அடகு வைத்த நகைகளை மீட்க முழு நம்பிக்கையுடன் அணுகுங்கள். கண்முன்னே நடக்கும் ஜெர்மன் எக்ஸ்ஆர்எஃப் பரிசோதனை, துல்லிய டிஜிட்டல் எடை மற்றும் 10 நிமிட உடனடி வங்கி பரிமாற்றம்.'
  },
  'hero.taglineTamil': {
    en: 'Gold Today. A Brighter Tomorrow.',
    ta: 'இன்றைய தங்கம் • நாளைய ஒளிமயமான எதிர்காலம்.'
  },
  'hero.ctaQuote': { en: 'Calculate Gold Value', ta: 'தங்க மதிப்பீடு கணக்கிடுங்கள்' },
  'hero.ctaBranch': { en: 'Find Nearest Branch', ta: 'அருகிலுள்ள கிளை அறிய' },
  'hero.ctaPawn': { en: 'Release Pledged Gold', ta: 'அடகு நகை மீட்க' },

  // Trust Badges
  'trust.spectrometer': { en: 'German XRF Testing (0% Melting)', ta: 'ஜெர்மன் XRF சோதனை (0% உருக்கு கழிவு)' },
  'trust.instantPay': { en: 'Instant IMPS/RTGS/Cash in 10 Mins', ta: '10 நிமிடத்தில் உடனடி வங்கி பரிமாற்றம்' },
  'trust.privateCabins': { en: 'Private AC Family Cabins', ta: 'தனிநபர் குடும்ப ஏசி அறைகள்' },
  'trust.certified': { en: 'Govt Certified 0.001g Precision', ta: 'அரசு அங்கீகாரம் பெற்ற 0.001g துல்லிய எடை' },

  // Dashboard & Rate
  'dash.liveRate': { en: "Today's Live Gold Rate", ta: 'இன்றைய நேரடி தங்கம் விலை' },
  'dash.liveFeed': { en: 'Live Market Benchmark', ta: 'நேரடி சந்தை விலை' },
  'dash.calculatorTitle': { en: 'Calculate Your Honest Gold Payout', ta: 'உங்கள் தங்கத்தின் உண்மையான மதிப்பு' },
  'dash.calculatorSubtitle': { en: 'Transparent Net Weight Calculation with 0% Melting Loss', ta: 'கற்கள் கழிவு மற்றும் 0% உருக்கு கழிவு உத்தரவாதத்துடன்' },
  'dash.grossWeight': { en: 'Gross Weight (Grams)', ta: 'மொத்த எடை (கிராம்)' },
  'dash.stoneWeight': { en: 'Stone / Wax Weight (Grams)', ta: 'கற்கள் / மெழுகு கழிவு (கிராம்)' },
  'dash.netWeight': { en: 'Net Pure Gold Weight', ta: 'நிகர தங்க எடை' },
  'dash.meltingCharge': { en: 'Melting / Wastage Deductions', ta: 'உருக்கும் கழிவு & சேதாரம்' },
  'dash.zeroMelting': { en: '₹0 (Guaranteed Zero Melting Loss)', ta: '₹0 (பூஜ்ஜிய கழிவு உத்தரவாதம்)' },
  'dash.estimatedPayout': { en: 'Your Estimated Direct Payout', ta: 'நீங்கள் பெறும் இறுதி தொகை' },

  // Pawn Redemption
  'pawn.badge': { en: 'PLEDGED JEWELLERY REDEMPTION ASSISTANCE', ta: 'அடகு நகைகள் மீட்பு உதவி' },
  'pawn.title': { en: 'Trapped in High Monthly Pawn Interest?', ta: 'கந்துவட்டி மற்றும் அடகு கடனில் தவிக்கிறீர்களா?' },
  'pawn.subtitle': {
    en: 'Do not let private pawn brokers or banks auction your family gold. We accompany you with complete dignity, settle the entire outstanding loan, and hand over the surplus cash to you on the spot.',
    ta: 'உங்கள் பாரம்பரிய நகைகள் ஏலத்திற்கு செல்ல விடாதீர்கள். நாங்களே உங்களுடன் நேரில் வந்து வங்கிக் கடனை முழுமையாக அடைத்து, மீதமுள்ள பெருந்தொகையை உங்களிடம் உடனடியாக வழங்குகிறோம்.'
  },
  'pawn.calcTitle': { en: 'Pledged Gold Surplus Calculator', ta: 'அடகு நகை உபரி கால்குலேட்டர்' },
  'pawn.loanAmount': { en: 'Current Loan Due Amount (₹)', ta: 'வங்கியில் செலுத்த வேண்டிய தொகை (₹)' },
  'pawn.marketVal': { en: 'Current Market Gold Value', ta: 'இன்றைய சந்தை மதிப்பு' },
  'pawn.loanCleared': { en: 'Loan Cleared by Athishta', ta: 'அதிஷ்டா செலுத்தும் கடன்' },
  'pawn.surplusCash': { en: 'Surplus Cash in Your Hand Today', ta: 'இன்று உங்கள் கையில் கிடைக்கும் உபரி தொகை' },

  // Hospitality
  'hosp.title': { en: 'The Athishta Hospitality & Dignity Promise', ta: 'அதிஷ்டாவின் அன்பான விருந்தோம்பல் உறுதிமொழி' },
  'hosp.subtitle': {
    en: 'We know that parting with family gold is a sensitive and emotional moment. Here is how we treat every mother, father, and family who walks through our doors.',
    ta: 'தங்கம் என்பது வெறும் உலோகமல்ல; அது குடும்பத்தின் கௌரவம். எங்கள் கிளைக்கு வரும் ஒவ்வொரு குடும்பத்தினரையும் நாங்கள் எவ்வாறு அரவணைத்து உபசரிக்கிறோம் பாருங்கள்.'
  },

  // KYC
  'kyc.title': { en: 'Simple & Transparent KYC Guide', ta: 'எளிய & பாதுகாப்பான ஆவண வழிகாட்டி' },
  'kyc.subtitle': {
    en: 'Why we ask for simple ID verification and how it protects your family against fraud or illegal gold trade.',
    ta: 'எங்கள் பரிவர்த்தனைகள் 100% சட்டப்பூர்வமானவை. உங்கள் பாதுகாப்பிற்காக தேவைப்படும் எளிய ஆவணங்கள்.'
  },

  // Branches
  'branch.title': { en: 'Our 6 Branches Across Tamil Nadu', ta: 'தமிழகம் எங்கும் எங்களின் 6 கிளைகள்' },
  'branch.subtitle': { en: 'Visit our friendly branch managers in your neighborhood', ta: 'உங்கள் அருகிலுள்ள கிளை மேலாளர்களை நேரில் சந்தியுங்கள்' },
  'branch.headOffice': { en: 'Head Office: Lakshmangudi', ta: 'தலைமை அலுவலகம்: லட்சுமண்குடி' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('athishta_lang');
      return (saved === 'ta' || saved === 'en') ? saved : 'en';
    } catch {
      return 'en';
    }
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('athishta_lang', lang);
    } catch {
      // ignore storage error
    }
  };

  const isTamil = language === 'ta';

  const t = (key: string): string => {
    const entry = translations[key];
    if (!entry) return key;
    return isTamil ? entry.ta : entry.en;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isTamil, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
