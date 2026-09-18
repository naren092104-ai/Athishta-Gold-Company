import React, { useState } from 'react';
import { Home, Calendar, Clock, MapPin, User, Phone, Scale, MessageCircle, CheckCircle2, Shield, Sparkles } from 'lucide-react';
import { openWhatsAppEnquiry, getWhatsAppUrl } from '../services/whatsappService';
import { validateIndianMobile, validateName, validateWeight } from '../utils/validation';

interface DoorstepServiceProps {
  onQuoteConfirmed?: (details: any) => void;
}

export const DoorstepService: React.FC<DoorstepServiceProps> = ({ onQuoteConfirmed }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    location: '',
    date: '',
    time: '11:00 AM',
    weight: 25,
    purity: '22K / 916'
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    const nameCheck = validateName(formData.name);
    if (!nameCheck.isValid) newErrors.name = nameCheck.message || 'Name is required';

    const mobCheck = validateIndianMobile(formData.mobile);
    if (!mobCheck.isValid) newErrors.mobile = mobCheck.message || 'Valid 10-digit mobile required';

    if (!formData.location.trim()) {
      newErrors.location = 'Please specify your area/district (e.g., Chennai, Thiruvarur)';
    }

    const wtCheck = validateWeight(formData.weight);
    if (!wtCheck.isValid) newErrors.weight = wtCheck.message || 'Valid weight required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);

    const payload = {
      flow: 'doorstep' as const,
      name: formData.name,
      mobile: formData.mobile,
      service: 'Doorstep Gold Evaluation',
      purity: formData.purity,
      weight: formData.weight,
      doorstepLocation: formData.location,
      doorstepDate: formData.date || 'Earliest Available',
      doorstepTime: formData.time,
      notes: 'Customer requested home visit for gold evaluation.'
    };

    const url = openWhatsAppEnquiry(payload);

    if (onQuoteConfirmed) {
      onQuoteConfirmed({
        isOpen: true,
        title: 'Doorstep Evaluation Requested',
        subtitle: `Our team will visit your location in ${formData.location}`,
        name: formData.name,
        service: 'Doorstep Gold Evaluation',
        branch: 'Nearest Tamil Nadu Branch',
        purity: formData.purity,
        weight: formData.weight,
        whatsappUrl: url,
        referenceId: `DS-${Math.floor(100000 + Math.random() * 900000)}`
      });
    }

    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <section id="doorstep-service" className="py-14 sm:py-20 bg-gradient-to-b from-[#FAF7F0] via-[#F6EFE2] to-[#FAF7F0] border-b border-[#C89B3C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4EA] border border-[#C89B3C]/40 text-xs font-bold text-[#9A711F] mb-3">
            <Home className="w-3.5 h-3.5" />
            <span>WE COME TO YOU IN TAMIL NADU</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-[#140E0A] tracking-tight">
            Sell Gold from the Comfort of Your Home
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-2">
            No need to carry valuable gold through busy streets. Our verified valuation officers bring portable German XRF testing devices and precision scales directly to your doorstep.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Key Features & Trust (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-[#C89B3C]/30 shadow-sm space-y-5">
              <h3 className="text-lg font-serif font-bold text-[#140E0A] flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#9A711F]" />
                <span>Safe, Private & Fully Insured</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-zinc-700">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FAF4EA] text-[#9A711F] border border-[#C89B3C]/30 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <strong className="text-[#140E0A] block">Verified Official Representatives:</strong>
                    Officers carry company photo ID cards and official authorization credentials.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FAF4EA] text-[#9A711F] border border-[#C89B3C]/30 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <strong className="text-[#140E0A] block">Living-Room Spectrometry:</strong>
                    Portable German XRF machine scans your gold in front of your family with 0% damage.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#FAF4EA] text-[#9A711F] border border-[#C89B3C]/30 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <strong className="text-[#140E0A] block">Instant Bank Credit Before Handover:</strong>
                    Funds are transferred via IMPS/RTGS/UPI before jewellery leaves your custody.
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF4EA] border border-[#C89B3C]/30 text-xs text-[#9A711F] font-semibold flex items-center gap-2">
                <Sparkles className="w-4 h-4 shrink-0" />
                <span>Available in Chennai, Thiruvarur, Nagapattinam, Thanjavur & Delta districts.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#C89B3C]/30 shadow-md">
            <h3 className="text-xl font-serif font-bold text-[#140E0A] mb-1">
              Book a Doorstep Gold Evaluation
            </h3>
            <p className="text-xs text-zinc-500 mb-6">
              Fill in your details to book a private home visit with our valuation team.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-[#140E0A] mb-1">Your Full Name *</label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. S. Murugan"
                      className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl border border-zinc-300 focus:border-[#C89B3C] bg-[#FCF9F2]"
                    />
                  </div>
                  {errors.name && <p className="text-[10px] text-rose-600 mt-1">{errors.name}</p>}
                </div>

                {/* Mobile */}
                <div>
                  <label className="block text-xs font-bold text-[#140E0A] mb-1">Mobile Number *</label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      placeholder="10-digit mobile number"
                      maxLength={10}
                      className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl border border-zinc-300 focus:border-[#C89B3C] bg-[#FCF9F2]"
                    />
                  </div>
                  {errors.mobile && <p className="text-[10px] text-rose-600 mt-1">{errors.mobile}</p>}
                </div>
              </div>

              {/* Location Address */}
              <div>
                <label className="block text-xs font-bold text-[#140E0A] mb-1">
                  Location / Address in Tamil Nadu *
                </label>
                <div className="relative">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Lakshmangudi, Mannargudi, Ambattur Chennai, Nagapattinam..."
                    className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl border border-zinc-300 focus:border-[#C89B3C] bg-[#FCF9F2]"
                  />
                </div>
                {errors.location && <p className="text-[10px] text-rose-600 mt-1">{errors.location}</p>}
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#140E0A] mb-1">Preferred Date</label>
                  <div className="relative">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl border border-zinc-300 focus:border-[#C89B3C] bg-[#FCF9F2]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#140E0A] mb-1">Preferred Time</label>
                  <div className="relative">
                    <Clock className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full pl-9 pr-8 py-2.5 text-xs rounded-xl border border-zinc-300 focus:border-[#C89B3C] bg-[#FCF9F2]"
                    >
                      <option value="10:00 AM - 12:00 PM">Morning (10:00 AM – 12:00 PM)</option>
                      <option value="12:00 PM - 03:00 PM">Afternoon (12:00 PM – 03:00 PM)</option>
                      <option value="03:00 PM - 06:00 PM">Evening (03:00 PM – 06:00 PM)</option>
                      <option value="06:00 PM - 08:00 PM">Night (06:00 PM – 08:00 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Gold Weight & Purity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#140E0A] mb-1">Approximate Weight (Grams)</label>
                  <div className="relative">
                    <Scale className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="number"
                      min="1"
                      value={formData.weight}
                      onChange={(e) => setFormData({ ...formData, weight: parseFloat(e.target.value) || 0 })}
                      className="w-full pl-9 pr-3 py-2.5 text-xs rounded-xl border border-zinc-300 focus:border-[#C89B3C] bg-[#FCF9F2]"
                    />
                  </div>
                  {errors.weight && <p className="text-[10px] text-rose-600 mt-1">{errors.weight}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#140E0A] mb-1">Expected Purity</label>
                  <select
                    value={formData.purity}
                    onChange={(e) => setFormData({ ...formData, purity: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs rounded-xl border border-zinc-300 focus:border-[#C89B3C] bg-[#FCF9F2]"
                  >
                    <option value="22K / 916 Standard">22K / 916 Hallmark Jewellery</option>
                    <option value="24K / 999 Bullion">24K / 999 Coins & Bars</option>
                    <option value="18K / 750 Jewellery">18K / 750 Jewellery</option>
                    <option value="Mixed / Unsure">Mixed / Unsure (Purity test at home)</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-[#120D08] bg-gradient-to-r from-[#C89B3C] via-[#E2B755] to-[#B58428] hover:from-[#B58428] hover:to-[#9A711F] hover:text-white transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Request Doorstep Service on WhatsApp</span>
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
