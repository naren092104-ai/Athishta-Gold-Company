export interface GoldRates {
  '24K': number;
  '22K': number;
  '18K': number;
}

export interface GoldRateData {
  currency: string;
  unit: string;
  updatedAt: string;
  source: string;
  rates: GoldRates;
  status: 'live' | 'cached' | 'error' | 'loading' | 'no-data';
  change24h?: {
    amount: number;
    percentage: number;
    direction: 'up' | 'down' | 'flat';
  };
  isDemo?: boolean;
}

export interface Branch {
  id: string;
  slug: string;
  name: string;
  isHeadOffice?: boolean;
  address: {
    line1: string;
    line2: string;
    landmark?: string;
    city: string;
    district: string;
    pincode: string;
    state: string;
    fullFormatted: string;
  };
  phone: string;
  whatsapp: string;
  hours: string;
  days: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  googleMapsUrl: string;
  directionsUrl: string;
  imageUrl: string;
  features: string[];
  nearbyLandmarks: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  benefits: string[];
  processSteps: string[];
  imageUrl: string;
  badge?: string;
  whatsappFlow: 'selling' | 'buying' | 'pawn_redemption' | 'doorstep' | 'general';
}

export interface TestimonialItem {
  id: string;
  author: string;
  location: string;
  branchVisited: string;
  review: string;
  serviceUsed: string;
  rating: number;
  date: string;
  verifiedCustomer: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'purity' | 'pricing' | 'doorstep' | 'pawn';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Branches' | 'Gold Testing' | 'Gold Jewellery' | 'Customer Service' | 'Doorstep Service' | 'Team';
  imageUrl: string;
  caption: string;
}

export interface QuoteFormData {
  name: string;
  mobile: string;
  service: string;
  purity: '24K' | '22K' | '18K';
  weight: number | '';
  purchaseYear?: number | '';
  branch: string;
  doorstepLocation?: string;
  doorstepDate?: string;
  doorstepTime?: string;
  additionalNotes?: string;
}

export interface HistoricalRatePoint {
  year: number;
  rate24kPerGram: number;
  rate22kPerGram: number;
  sourceNote?: string;
}
