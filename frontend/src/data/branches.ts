import { Branch } from '../types';

export const BRANCHES_DATA: Branch[] = [
  {
    id: 'lakshmangudi',
    slug: 'lakshmangudi',
    name: 'Lakshmangudi (Head Office)',
    isHeadOffice: true,
    address: {
      line1: 'IOB Opposite, T V R Main Road',
      line2: 'Lakshmangudi',
      landmark: 'Opposite Indian Overseas Bank',
      city: 'Lakshmangudi',
      district: 'Thiruvarur District',
      pincode: '614102',
      state: 'Tamil Nadu',
      fullFormatted: 'IOB Opposite, T V R Main Road, Lakshmangudi, Thiruvarur District – 614102, Tamil Nadu, India'
    },
    phone: '+91 93636 39955',
    whatsapp: '919363639955',
    hours: '09:30 AM – 08:30 PM',
    days: 'Monday to Sunday (Open All 7 Days)',
    coordinates: {
      lat: 10.6385,
      lng: 79.5254
    },
    googleMapsUrl: 'https://maps.google.com/?q=Athishta+Gold+Company+Lakshmangudi+Thiruvarur',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=10.6385,79.5254',
    imageUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80',
    features: ['Central Head Office', 'German XRF Purity Lab', 'Instant Spot Cash/NEFT', 'Private Valuation Cabin', 'Pawn Release Assistance'],
    nearbyLandmarks: ['Opposite Indian Overseas Bank (IOB)', 'T V R Main Road Junction', 'Mannargudi - Thiruvarur Highway']
  },
  {
    id: 'ambattur',
    slug: 'ambattur',
    name: 'Ambattur Branch (Chennai)',
    isHeadOffice: false,
    address: {
      line1: 'No. 1/9, First Floor, Shop No. 420/6',
      line2: 'T I Cycle Road, Varadharajapuram',
      landmark: 'Near TI Cycles Road',
      city: 'Ambattur',
      district: 'Chennai',
      pincode: '600053',
      state: 'Tamil Nadu',
      fullFormatted: 'No. 1/9, First Floor, Shop No. 420/6, T I Cycle Road, Varadharajapuram, Ambattur – 600053, Chennai, Tamil Nadu'
    },
    phone: '+91 93636 39955',
    whatsapp: '919363639955',
    hours: '09:30 AM – 08:30 PM',
    days: 'Monday to Sunday',
    coordinates: {
      lat: 13.1143,
      lng: 80.1548
    },
    googleMapsUrl: 'https://maps.google.com/?q=No.+1/9+First+Floor+Shop+No.+420/6+T+I+Cycle+Road+Varadharajapuram+Ambattur+Chennai+600053',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=13.1143,80.1548',
    imageUrl: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=800&q=80',
    features: ['Chennai West Hub', 'Direct TI Cycle Road Access', 'Digital Calibration Scale', 'Instant Bank Transfer / Cash'],
    nearbyLandmarks: ['Varadharajapuram', 'T I Cycle Road', 'Ambattur Industrial Estate Vicinity']
  },
  {
    id: 'perambur',
    slug: 'perambur',
    name: 'Perambur Branch (Chennai)',
    isHeadOffice: false,
    address: {
      line1: 'No. 25, Perambur High Road',
      line2: 'Perambur',
      landmark: 'Near Perambur High Road',
      city: 'Perambur',
      district: 'Chennai',
      pincode: '600011',
      state: 'Tamil Nadu',
      fullFormatted: 'No. 25, Perambur High Road, Perambur – 600011, Chennai, Tamil Nadu'
    },
    phone: '+91 93636 39955',
    whatsapp: '919363639955',
    hours: '09:30 AM – 08:30 PM',
    days: 'Monday to Sunday',
    coordinates: {
      lat: 13.1125,
      lng: 80.2338
    },
    googleMapsUrl: 'https://maps.google.com/?q=No.+25+Perambur+High+Road+Perambur+Chennai+600011',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=13.1125,80.2338',
    imageUrl: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80',
    features: ['North Chennai Branch', 'Perambur High Road Access', 'Gold Buying & Selling', 'Same Day Bank Settlement'],
    nearbyLandmarks: ['Perambur High Road', 'Perambur Railway Area', 'Muthumariamman Temple Road']
  },
  {
    id: 'avadi',
    slug: 'avadi',
    name: 'Avadi Branch (Chennai)',
    isHeadOffice: false,
    address: {
      line1: 'No. 380 Nandhini Complex, CTH Road',
      line2: 'Avadi Gandhi Nagar',
      landmark: 'Nandhini Complex, CTH Main Road',
      city: 'Avadi',
      district: 'Chennai',
      pincode: '600054',
      state: 'Tamil Nadu',
      fullFormatted: 'Avadi Gandhi Nagar, CTH Road, No. 380 Nandhini Complex, Avadi – 600054, Chennai, Tamil Nadu'
    },
    phone: '+91 93636 39955',
    whatsapp: '919363639955',
    hours: '09:30 AM – 08:30 PM',
    days: 'Monday to Sunday',
    coordinates: {
      lat: 13.1182,
      lng: 80.1018
    },
    googleMapsUrl: 'https://maps.google.com/?q=380+Nandhini+Complex+CTH+Road+Avadi+Gandhi+Nagar+Chennai+600054',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=13.1182,80.1018',
    imageUrl: 'https://images.unsplash.com/photo-1582533561751-ef6f6ab93a2e?auto=format&fit=crop&w=800&q=80',
    features: ['CTH Main Road Frontage', 'Nandhini Complex', 'Gold Buying & Selling', 'Doorstep Service Hub'],
    nearbyLandmarks: ['Avadi Gandhi Nagar', 'CTH Road', 'Avadi Bus Terminus / Railway Area']
  },
  {
    id: 'kumbakonam',
    slug: 'kumbakonam',
    name: 'Kumbakonam Branch',
    isHeadOffice: false,
    address: {
      line1: 'Near Bus Stand, John Selvaraj Nagar',
      line2: 'Kumbakonam',
      landmark: 'Near Kumbakonam Central Bus Stand',
      city: 'Kumbakonam',
      district: 'Thanjavur District',
      pincode: '612001',
      state: 'Tamil Nadu',
      fullFormatted: 'Bus Stand, Near Kumbakonam, John Selvaraj Nagar, Kumbakonam – 612001, Tamil Nadu'
    },
    phone: '+91 93636 39955',
    whatsapp: '919363639955',
    hours: '09:30 AM – 08:30 PM',
    days: 'Monday to Sunday',
    coordinates: {
      lat: 10.9602,
      lng: 79.3845
    },
    googleMapsUrl: 'https://maps.google.com/?q=John+Selvaraj+Nagar+Bus+Stand+Kumbakonam+612001',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=10.9602,79.3845',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    features: ['Steps from Bus Stand', 'Delta Gold Valuation Specialists', 'Instant Purity Test in 60s', 'Pawn Redemption Counter'],
    nearbyLandmarks: ['Kumbakonam Central Bus Stand', 'John Selvaraj Nagar', 'Kasi Viswanathar Temple Area']
  },
  {
    id: 'nagapattinam',
    slug: 'nagapattinam',
    name: 'Nagapattinam Branch',
    isHeadOffice: false,
    address: {
      line1: '400/7, Velipalayam',
      line2: 'Opposite Natrajan Thamayanthi School',
      landmark: 'Opposite Natrajan Thamayanthi School',
      city: 'Nagapattinam',
      district: 'Nagapattinam District',
      pincode: '611001',
      state: 'Tamil Nadu',
      fullFormatted: '400/7, Velipalayam, Opposite Natrajan Thamayanthi School, Nagapattinam – 611001, Tamil Nadu'
    },
    phone: '+91 93636 39955',
    whatsapp: '919363639955',
    hours: '09:30 AM – 08:30 PM',
    days: 'Monday to Sunday',
    coordinates: {
      lat: 10.7672,
      lng: 79.8423
    },
    googleMapsUrl: 'https://maps.google.com/?q=400/7+Velipalayam+Nagapattinam+611001',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=10.7672,79.8423',
    imageUrl: 'https://images.unsplash.com/photo-1513094735237-8f2714d57c13?auto=format&fit=crop&w=800&q=80',
    features: ['Coastal Delta Hub', 'Velipalayam Main Location', 'Transparent Digital Scales', 'Same Day Cash Settlement'],
    nearbyLandmarks: ['Opposite Natrajan Thamayanthi School', 'Velipalayam Post Office', 'Nagapattinam Port Road']
  },
  {
    id: 'pattukkottai',
    slug: 'pattukkottai',
    name: 'Pattukkottai Branch',
    isHeadOffice: false,
    address: {
      line1: '115, Tgalayari Street, Manickam Colony',
      line2: 'Pattukkottai',
      landmark: 'Manickam Colony',
      city: 'Pattukkottai',
      district: 'Thanjavur District',
      pincode: '614601',
      state: 'Tamil Nadu',
      fullFormatted: '115, Tgalayari Street, Manickam Colony, Pattukkottai – 614601, Tamil Nadu'
    },
    phone: '+91 93636 39955',
    whatsapp: '919363639955',
    hours: '09:30 AM – 08:30 PM',
    days: 'Monday to Sunday',
    coordinates: {
      lat: 10.4285,
      lng: 79.3197
    },
    googleMapsUrl: 'https://maps.google.com/?q=115+Tgalayari+Street+Manickam+Colony+Pattukkottai+614601',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=10.4285,79.3197',
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    features: ['South Thanjavur Centre', 'Manickam Colony Hub', 'Highest Value Guarantee', 'Family Jewellery Valuations'],
    nearbyLandmarks: ['Manickam Colony', 'Tgalayari Street', 'Pattukkottai Town Centre']
  }
];

export const HEAD_OFFICE = BRANCHES_DATA[0];
export const COMPANY_PHONE = '+91 93636 39955';
export const COMPANY_WHATSAPP = '919363639955';
export const COMPANY_EMAIL = 'contact@athishtagold.com';
