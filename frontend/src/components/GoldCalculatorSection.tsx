import React, { useState } from 'react';
import { Check, MapPin, MessageCircle, Navigation, Phone, LockKeyhole } from 'lucide-react';
import { BRANCHES_DATA, COMPANY_PHONE, COMPANY_WHATSAPP, HEAD_OFFICE } from '../data/branches';
import { GoldRateData, GoldRates } from '../types';

interface GoldCalculatorSectionProps {
  rates?: GoldRates;
  rateData?: GoldRateData | null;
}

interface FormState {
  name: string;
  mobile: string;
  requirement: string;
  goldDetails: string;
  approximateWeight: string;
  servicePreference: 'Visit Our Branch' | 'Doorstep Service' | '';
  selectedBranch: string;
  address: string;
  area: string;
  city: string;
  pincode: string;
  latitude: string;
  longitude: string;
  accuracy: string;
  preferredDate: string;
  preferredTime: string;
  additionalRequirements: string;
}

const initialFormState: FormState = {
  name: '',
  mobile: '',
  requirement: '',
  goldDetails: '',
  approximateWeight: '',
  servicePreference: '',
  selectedBranch: HEAD_OFFICE.name,
  address: '',
  area: '',
  city: '',
  pincode: '',
  latitude: '',
  longitude: '',
  accuracy: '',
  preferredDate: '',
  preferredTime: '',
  additionalRequirements: '',
};

const requirementOptions = [
  'Gold Selling',
  'Gold Buying',
  'Gold Exchange',
  'Gold Valuation',
  'Pawn Redemption',
  'Doorstep Service',
  'Other',
];

const getLocationText = (formData: FormState) =>
  [formData.address, formData.area, formData.city, formData.pincode].filter(Boolean).join(', ');

const reverseGeocode = async (lat: number, lng: number) => {
  const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`, {
    headers: { 'Accept-Language': 'en' },
  });

  if (!response.ok) {
    throw new Error('Reverse geocoding failed');
  }

  const data = await response.json();
  const address = data.address || {};

  return {
    house: address.house || address.building || address.neighbourhood || '',
    area: address.suburb || address.road || address.village || address.township || address.locality || '',
    city: address.city || address.town || address.municipality || address.county || '',
    pincode: address.postcode || '',
  };
};

export const GoldCalculatorSection: React.FC<GoldCalculatorSectionProps> = () => {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [locationMessage, setLocationMessage] = useState('');
  const [isLocationLoading, setIsLocationLoading] = useState(false);
  const [isPreparingWhatsApp, setIsPreparingWhatsApp] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const updateField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: '' }));
  };

  const handleUseMyLocation = () => {
    if (!navigator.geolocation) {
      setLocationMessage('Unable to detect your location. Please enter your address manually.');
      return;
    }

    setIsLocationLoading(true);
    setLocationMessage('');

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude, accuracy } = position.coords;

        setFormData((prev) => ({
          ...prev,
          latitude: latitude.toString(),
          longitude: longitude.toString(),
          accuracy: `${Math.round(accuracy)}m`,
        }));

        try {
          const geoData = await reverseGeocode(latitude, longitude);
          setFormData((prev) => ({
            ...prev,
            address: [geoData.house, geoData.area].filter(Boolean).join(', ') || `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`,
            area: geoData.area || prev.area,
            city: geoData.city || prev.city,
            pincode: geoData.pincode || prev.pincode,
          }));
          setLocationMessage('Location detected successfully.');
        } catch {
          setLocationMessage('Location detected successfully.');
        }

        setIsLocationLoading(false);
      },
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          setLocationMessage('Location permission was denied. Please enter your address manually.');
        } else {
          setLocationMessage('Unable to detect your location. Please try again or enter your address manually.');
        }
        setIsLocationLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0,
      }
    );
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const nextErrors: Record<string, string> = {};

    if (!formData.servicePreference) {
      nextErrors.servicePreference = 'Please select a service preference.';
    }

    if (formData.servicePreference === 'Doorstep Service' && !getLocationText(formData).trim()) {
      nextErrors.location = 'Please provide your location for doorstep service.';
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setIsPreparingWhatsApp(true);
    setSuccessMessage('');

    const locationText = getLocationText(formData).trim() || 'Not specified';
    const areaText = formData.area || 'Not specified';
    const cityText = formData.city || 'Not specified';
    const pincodeText = formData.pincode || 'Not specified';
    const latText = formData.latitude || 'Not available';
    const lngText = formData.longitude || 'Not available';
    const accuracyText = formData.accuracy || 'Not available';
    const googleMapsUrl = formData.latitude && formData.longitude
      ? `https://www.google.com/maps?q=${formData.latitude},${formData.longitude}`
      : 'Not available';

    const whatsAppText = [
      'Hello Athishta Gold Company,',
      '',
      'I would like to request a gold quotation.',
      '',
      'CUSTOMER DETAILS',
      `Name: ${formData.name.trim()}`,
      `Mobile: ${formData.mobile.trim()}`,
      `Requirement: ${formData.requirement}`,
      `Gold Details: ${formData.goldDetails.trim() || 'Not specified'}`,
      `Approximate Weight: ${formData.approximateWeight.trim() || 'Not specified'}`,
      `Service Preference: ${formData.servicePreference}`,
      '',
      'LOCATION',
      `Address: ${locationText}`,
      `Area: ${areaText}`,
      `City: ${cityText}`,
      `Pincode: ${pincodeText}`,
      `Detected Coordinates: Latitude: ${latText}, Longitude: ${lngText}`,
      `Location Accuracy: ${accuracyText}`,
      `Google Maps: ${googleMapsUrl}`,
      '',
      'PREFERRED DETAILS',
      `Preferred Date: ${formData.preferredDate || 'Not specified'}`,
      `Preferred Time: ${formData.preferredTime || 'Not specified'}`,
      `Additional Requirements: ${formData.additionalRequirements.trim() || 'Not specified'}`,
      '',
      'Please contact me regarding the quotation.',
      '',
      'Thank you.',
    ].join('\n');

    const cleanNumber = COMPANY_WHATSAPP.replace(/\D/g, '');
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(whatsAppText)}`;

    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
      setIsPreparingWhatsApp(false);
      setSuccessMessage('Your quotation request is ready on WhatsApp.');
      setTimeout(() => setSuccessMessage(''), 4000);
    }, 200);
  };

  const locationReady = formData.latitude && formData.longitude;

  return (
    <section id="gold-calculator" className="relative overflow-hidden border-t border-[#C9A227]/25 bg-[#120E0B] py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 opacity-80" style={{ backgroundImage: 'radial-gradient(circle at 15% 18%, rgba(217,169,50,0.18), transparent 18%), radial-gradient(circle at 82% 26%, rgba(217,169,50,0.12), transparent 22%), linear-gradient(120deg, rgba(18,14,11,0.97), rgba(32,22,15,0.98))' }} />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-[radial-gradient(circle_at_center,rgba(217,169,50,0.10),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1.35fr] lg:gap-14">
          <div className="text-[#F9F3E6]">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 bg-[#1A130F]/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.3em] text-[#E5C76A]">
              <Check className="h-3.5 w-3.5" />
              Trusted Gold Valuation
            </p>
            <h2 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[4rem] lg:leading-[0.95]">
              Get Your <span className="bg-gradient-to-r from-[#E6C76D] via-[#F5D986] to-[#C99A2D] bg-clip-text text-transparent">Gold Quote</span>
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-[#D9CAB4] lg:text-lg">
              Share your details and our team will contact you with a transparent quotation.
            </p>

            <div className="mt-8 space-y-3">
              {['Transparent Process', 'Expert Evaluation', 'Quick Response'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-[#F5E7C5] lg:text-base">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#C9A227]/70 bg-[#C9A227]/10 text-[#F4D77C]">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-[620px] rounded-[28px] border border-[#C9A227]/40 bg-[#F8F0DF] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.38)] ring-1 ring-[#D9B75B]/25 sm:p-6 lg:p-7">
            <form onSubmit={handleSubmit} className="rounded-[22px] border border-[#DDB64A]/55 bg-[#FDF9F1] p-5 sm:p-6">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#A17020]">Request a Gold Quotation</p>
                  <h3 className="mt-2 font-serif text-3xl font-bold text-[#1C160E]">Request a Gold Quotation</h3>
                </div>
                <div className="rounded-full border border-[#C9A227]/40 bg-[#F7E9B8] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#7F5B0F]">
                  Enquiry
                </div>
              </div>

              <p className="mb-5 text-sm text-[#5D4B2B]">Fill in your details and we’ll get back to you shortly.</p>

              <div className="space-y-4">
                <div>
                  <label className="mb-1 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#7E6A52]">GOLD DETAILS</label>
                  <textarea
                    rows={3}
                    value={formData.goldDetails}
                    onChange={(event) => updateField('goldDetails', event.target.value)}
                    placeholder="Briefly describe your gold / jewellery"
                    className="w-full rounded-xl border border-[#DABF88] bg-[#FFFDF8] px-3.5 py-3 text-base font-medium text-[#1B160D] outline-none transition focus:border-[#B88F2A] focus:ring-2 focus:ring-[#C9A227]/20"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#7E6A52]">APPROXIMATE WEIGHT</label>
                    <input
                      value={formData.approximateWeight}
                      onChange={(event) => updateField('approximateWeight', event.target.value)}
                      placeholder="Approximate weight in grams"
                      className="w-full rounded-xl border border-[#DABF88] bg-[#FFFDF8] px-3.5 py-3 text-base font-medium text-[#1B160D] outline-none transition focus:border-[#B88F2A] focus:ring-2 focus:ring-[#C9A227]/20"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#7E6A52]">SERVICE PREFERENCE *</label>
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {(['Visit Our Branch', 'Doorstep Service'] as const).map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => updateField('servicePreference', option)}
                          className={`rounded-xl border px-3 py-2.5 text-xs font-bold transition-all ${
                            formData.servicePreference === option
                              ? 'border-[#B88F2A] bg-[#C9A227] text-[#17110B] shadow-[0_8px_18px_rgba(201,162,39,0.18)]'
                              : 'border-[#D2C29D] bg-[#FFFDF8] text-[#483F2F] hover:border-[#B88F2A]'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                    {errors.servicePreference && <p className="mt-1 text-[11px] text-red-600">{errors.servicePreference}</p>}
                  </div>
                </div>

                {formData.servicePreference === 'Visit Our Branch' && (
                  <div>
                    <label className="mb-1 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#7E6A52]">BRANCH</label>
                    <select
                      value={formData.selectedBranch}
                      onChange={(event) => updateField('selectedBranch', event.target.value)}
                      className="w-full rounded-xl border border-[#DABF88] bg-[#FFFDF8] px-3.5 py-3 text-base font-medium text-[#1B160D] outline-none transition focus:border-[#B88F2A] focus:ring-2 focus:ring-[#C9A227]/20"
                    >
                      {BRANCHES_DATA.map((branch) => (
                        <option key={branch.name} value={branch.name}>{branch.name}</option>
                      ))}
                    </select>
                  </div>
                )}

                {formData.servicePreference === 'Doorstep Service' && (
                  <div className="space-y-3 rounded-2xl border border-[#DABF88] bg-[#FFFDF8] p-3">
                    <div className="flex items-center justify-between gap-3">
                      <label className="block text-[10px] font-bold uppercase tracking-[0.16em] text-[#7E6A52]">LOCATION</label>
                      <button
                        type="button"
                        onClick={handleUseMyLocation}
                        disabled={isLocationLoading}
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#C9A227]/50 bg-[#F7E9B8] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#201A15] transition hover:bg-[#E8D08B] disabled:cursor-not-allowed disabled:opacity-70"
                      >
                        <Navigation className="h-3.5 w-3.5" />
                        {isLocationLoading ? 'Detecting...' : 'Use My Location'}
                      </button>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label className="mb-1 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#7E6A52]">Address</label>
                        <input
                          value={formData.address}
                          onChange={(event) => updateField('address', event.target.value)}
                          placeholder="Building / Street"
                          className="w-full rounded-xl border border-[#DABF88] bg-[#FFFDF8] px-3.5 py-3 text-base font-medium text-[#1B160D] outline-none transition focus:border-[#B88F2A] focus:ring-2 focus:ring-[#C9A227]/20"
                        />
                      </div>

                      <div>
                        <label className="mb-1 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#7E6A52]">Area</label>
                        <input
                          value={formData.area}
                          onChange={(event) => updateField('area', event.target.value)}
                          placeholder="Area / Locality"
                          className="w-full rounded-xl border border-[#DABF88] bg-[#FFFDF8] px-3.5 py-3 text-base font-medium text-[#1B160D] outline-none transition focus:border-[#B88F2A] focus:ring-2 focus:ring-[#C9A227]/20"
                        />
                      </div>

                      <div>
                        <label className="mb-1 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#7E6A52]">City</label>
                        <input
                          value={formData.city}
                          onChange={(event) => updateField('city', event.target.value)}
                          placeholder="City"
                          className="w-full rounded-xl border border-[#DABF88] bg-[#FFFDF8] px-3.5 py-3 text-base font-medium text-[#1B160D] outline-none transition focus:border-[#B88F2A] focus:ring-2 focus:ring-[#C9A227]/20"
                        />
                      </div>

                      <div>
                        <label className="mb-1 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#7E6A52]">Pincode</label>
                        <input
                          value={formData.pincode}
                          onChange={(event) => updateField('pincode', event.target.value)}
                          placeholder="Pincode"
                          className="w-full rounded-xl border border-[#DABF88] bg-[#FFFDF8] px-3.5 py-3 text-base font-medium text-[#1B160D] outline-none transition focus:border-[#B88F2A] focus:ring-2 focus:ring-[#C9A227]/20"
                        />
                      </div>
                    </div>

                    {locationMessage && <p className="text-[11px] text-[#5D4B2B]">{locationMessage}</p>}

                    {locationReady && (
                      <div className="rounded-xl border border-[#D3B266] bg-[#F7EBD0] px-2.5 py-2 text-[11px] text-[#5D4B2B]">
                        <span className="font-bold">Location detected successfully</span>
                        {formData.accuracy && <span className="ml-2">Accuracy: {formData.accuracy}</span>}
                      </div>
                    )}

                    {errors.location && <p className="mt-1 text-[11px] text-red-600">{errors.location}</p>}
                  </div>
                )}

                {formData.servicePreference === 'Visit Our Branch' && (
                  <div className="rounded-xl border border-[#D3B266] bg-[#F7EBD0] px-2.5 py-2 text-[11px] text-[#5D4B2B]">
                    <span className="font-bold">Branch selected:</span> {formData.selectedBranch}
                  </div>
                )}

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#7E6A52]">PREFERRED DATE</label>
                    <input
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.preferredDate}
                      onChange={(event) => updateField('preferredDate', event.target.value)}
                      className="w-full rounded-xl border border-[#DABF88] bg-[#FFFDF8] px-3.5 py-3 text-base font-medium text-[#1B160D] outline-none transition focus:border-[#B88F2A] focus:ring-2 focus:ring-[#C9A227]/20"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#7E6A52]">PREFERRED TIME</label>
                    <input
                      type="time"
                      value={formData.preferredTime}
                      onChange={(event) => updateField('preferredTime', event.target.value)}
                      className="w-full rounded-xl border border-[#DABF88] bg-[#FFFDF8] px-3.5 py-3 text-base font-medium text-[#1B160D] outline-none transition focus:border-[#B88F2A] focus:ring-2 focus:ring-[#C9A227]/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-[10px] font-bold uppercase tracking-[0.16em] text-[#7E6A52]">ADDITIONAL REQUIREMENTS</label>
                  <textarea
                    rows={3}
                    value={formData.additionalRequirements}
                    onChange={(event) => updateField('additionalRequirements', event.target.value)}
                    placeholder="Tell us anything else we should know..."
                    className="w-full rounded-xl border border-[#DABF88] bg-[#FFFDF8] px-3.5 py-3 text-base font-medium text-[#1B160D] outline-none transition focus:border-[#B88F2A] focus:ring-2 focus:ring-[#C9A227]/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isPreparingWhatsApp}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#C9A227] via-[#E2B64F] to-[#B8891B] px-4 py-3.5 text-sm font-bold text-[#17110B] shadow-[0_12px_24px_rgba(201,162,39,0.22)] transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-75"
                >
                  <MessageCircle className="h-4 w-4" />
                  {isPreparingWhatsApp ? 'Preparing Your Quotation...' : 'Get Quotation on WhatsApp →'}
                </button>

                {successMessage && (
                  <div className="rounded-xl border border-[#D3B266] bg-[#F7EBD0] px-3 py-2 text-center text-[11px] font-semibold text-[#5D4B2B]">
                    {successMessage}
                  </div>
                )}

                <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-[#6B5D4A]">
                  <LockKeyhole className="h-3.5 w-3.5 text-[#A90000]" />
                  Your details are used only to process your enquiry.
                </div>

                <div className="flex items-center justify-center gap-2 pt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#7A6B4D]">
                  <Phone className="h-3.5 w-3.5" />
                  {COMPANY_PHONE}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
