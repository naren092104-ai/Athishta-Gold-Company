import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'gold-jewellery-buying',
    title: 'Gold Jewellery Buying',
    tagline: 'Sell old, damaged, or family gold with 100% dignity & highest spot value',
    description: 'We purchase all types of gold jewellery, broken ornaments, coins, and bullion with complete transparency. Our modern German XRF spectrometer evaluates the exact purity right before your eyes with zero melting loss and certified precision.',
    iconName: 'Coins',
    benefits: [
      'Accepts old, broken, antique, and scrap jewellery',
      'German XRF non-destructive purity testing in 60 seconds',
      'Certified Class-II digital precision weighing scales',
      'Instant payout via Cash, IMPS, RTGS, NEFT, or UPI',
      'Transparent market-linked valuation without hidden deductions'
    ],
    processSteps: [
      'Bring your gold ornaments or coins to any of our 6 branches',
      'Ultrasonic cleaning to remove dust, stones, or enamel accurately',
      'Live XRF spectrometer purity analysis displayed on customer screen',
      'Immediate spot payment calculation based on live gold market rate'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    badge: 'Highest Value in Tamil Nadu',
    whatsappFlow: 'selling'
  },
  {
    id: 'gold-jewellery-selling',
    title: 'Gold Jewellery Selling',
    tagline: 'Buy certified 916 Hallmarked & 999 Fine Gold at fair market rates',
    description: 'Discover curated collection of traditional and modern South Indian gold jewellery, 916 hallmarked ornaments, chains, bangles, rings, and certified 999 24K gold investment coins with clear making charges and hallmark certification.',
    iconName: 'Sparkles',
    benefits: [
      '100% BIS Hallmarked 916 and 999 Purity Gold',
      'Traditional South Indian designs, bridal sets & lightweight daily wear',
      'Transparent making charges with zero hidden fees',
      'Tamper-proof certified 24K bullion bars and coins',
      'Exchange facilities with lifetime buyback guarantee'
    ],
    processSteps: [
      'Browse our exclusive certified collections in-branch or via catalogue',
      'Verify BIS Hallmark laser engraving and purity certification',
      'Transparent billing detailing gold weight, purity & GST breakdown',
      'Take home genuine gold jewellery with complete purity warranty'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80',
    badge: '100% BIS Hallmarked',
    whatsappFlow: 'buying'
  },
  {
    id: 'pawn-redemption',
    title: 'Pawn Redemption Assistance',
    tagline: 'Release your pledged gold from banks, NBFCs, or pawn shops with ease',
    description: 'Are your precious family jewels pledged in banks, finance companies, or local pawn brokers at high interest rates? Athishta Gold Company provides hassle-free financial assistance to release your pledged gold and purchase the balance or return the remaining cash immediately.',
    iconName: 'ShieldCheck',
    benefits: [
      'Complete settlement assistance for pledged gold loans',
      'Accompanied executive to release jewels directly from the lender',
      'Avoid high compounding interest penalties and auction risks',
      'Instant settlement of the net positive balance after loan closure',
      'Confidential, secure, and stress-free process'
    ],
    processSteps: [
      'Share your pawn slip or loan receipt details with our team',
      'We calculate the net value based on weight, purity & outstanding loan',
      'Our authorised officer accompanies you to the financial institution',
      'We clear the loan, retrieve the gold, and pay you the balance difference on the spot'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    badge: 'Pledged Gold Release',
    whatsappFlow: 'pawn_redemption'
  },
  {
    id: 'instant-quotes',
    title: 'Instant Gold Price Quotes',
    tagline: 'Real-time transparent market quotes with zero commitment',
    description: 'Get transparent, indicative valuations for your gold ornaments based on live market pricing and purity grades (24K, 22K, 18K). Use our interactive online calculator or connect with our specialists via WhatsApp for a personalized valuation quote.',
    iconName: 'Calculator',
    benefits: [
      'Real-time market rate synchronization',
      'Instant purity-wise valuation calculation (24K, 22K, 18K)',
      'Free consultation with zero selling obligation',
      'Personalized WhatsApp quote card ready in 1 click',
      'Transparent rate comparison with daily market trends'
    ],
    processSteps: [
      'Input approximate gross weight and gold purity into our calculator',
      'Receive instant calculated indicative market valuation in ₹ INR',
      'Generate a personalized WhatsApp quote directly to our evaluation desk',
      'Lock in your valuation and visit your nearest Athishta branch'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80',
    badge: 'Free & Non-Binding',
    whatsappFlow: 'general'
  },
  {
    id: 'doorstep-service',
    title: 'Doorstep Gold Evaluation',
    tagline: 'Safe, confidential gold evaluation & instant payout at your home',
    description: 'Enjoy the convenience and privacy of selling gold from your home. Our certified gold evaluation specialists visit your doorstep in Tamil Nadu equipped with portable German XRF testing devices and precision digital weighing scales.',
    iconName: 'Home',
    benefits: [
      'Available across Chennai, Thiruvarur, Nagapattinam & Delta districts',
      'Certified background-verified evaluation officers',
      'Portable German XRF testing done securely right in your living room',
      'Spot bank transfer (IMPS/RTGS/UPI) before handing over jewels',
      'Zero travel hassle, complete privacy and family safety'
    ],
    processSteps: [
      'Submit your doorstep evaluation request with date, time and location',
      'Our branch manager verifies appointment and assigns an officer',
      'Officer arrives with portable testing equipment and ID verification',
      'Purity tested & weighed in front of you; funds transferred immediately'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    badge: 'We Come To You',
    whatsappFlow: 'doorstep'
  }
];
