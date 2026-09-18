import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Send, CheckCircle2, Building, Sparkles } from 'lucide-react';
import { COMPANY_PHONE, COMPANY_WHATSAPP, HEAD_OFFICE, BRANCHES_DATA } from '../data/branches';
import { openWhatsAppEnquiry, getWhatsAppUrl } from '../services/whatsappService';
import { validateIndianMobile, validateName } from '../utils/validation';

interface ContactProps {
  onQuoteConfirmed?: (details: any) => void;
}

export const Contact: React.FC<ContactProps> = ({ onQuoteConfirmed }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    branch: HEAD_OFFICE.name,
    service: 'Gold Selling Service',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    const nameCheck = validateName(formData.name);
    if (!nameCheck.isValid) newErrors.name = nameCheck.message || 'Name is required';

    const mobCheck = validateIndianMobile(formData.mobile);
    if (!mobCheck.isValid) newErrors.mobile = mobCheck.message || 'Valid 10-digit mobile required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSuccess(true);

    const payload = {
      flow: 'general' as const,
      name: formData.name,
      mobile: formData.mobile,
      service: formData.service,
      branch: formData.branch,
      notes: formData.message || 'Customer submitted website contact enquiry form.'
    };

    const url = openWhatsAppEnquiry(payload);

    if (onQuoteConfirmed) {
      onQuoteConfirmed({
        isOpen: true,
        title: 'Enquiry Received',
        subtitle: `Thank you, ${formData.name}. Connecting with ${formData.branch} branch.`,
        name: formData.name,
        service: formData.service,
        branch: formData.branch,
        whatsappUrl: url,
        referenceId: `ENQ-${Math.floor(100000 + Math.random() * 900000)}`
      });
    }

    setTimeout(() => {
      setIsSuccess(false);
    }, 4000);
  };

  const directWhatsAppUrl = getWhatsAppUrl({
    flow: 'general',
    name: 'Customer',
    mobile: '',
    service: 'General WhatsApp Enquiry'
  });

  return (
    <section id="contact" className="py-14 sm:py-20 bg-[#FCF9F2] border-b border-[#C89B3C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4EA] border border-[#C89B3C]/40 text-xs font-bold text-[#9A711F] mb-3">
            <Phone className="w-3.5 h-3.5" />
            <span>DIRECT CONNECT & ENQUIRIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-[#140E0A] tracking-tight">
            Contact Athishta Gold Company
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-2">
            Reach out directly to our central helpline or connect with our branch managers across Tamil Nadu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official Head Office & Helpline Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Head Office Card */}
            <div className="bg-[#1A130C] text-white p-6 sm:p-7 rounded-3xl border-2 border-[#C89B3C]/40 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C89B3C] to-[#E2B755] text-[#120D08] flex items-center justify-center font-bold shadow-md">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#E8D49E] font-bold">Central Head Office</div>
                  <h3 className="text-lg font-serif font-bold text-white">Lakshmangudi</h3>
                </div>
              </div>

              <div className="text-xs text-zinc-300 space-y-2 border-t border-white/10 pt-3">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#C89B3C] shrink-0 mt-0.5" />
                  <span>{HEAD_OFFICE.address.fullFormatted}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#C89B3C] shrink-0" />
                  <span>{HEAD_OFFICE.hours} ({HEAD_OFFICE.days})</span>
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <a
                  href={`tel:${COMPANY_PHONE.replace(/\s+/g, '')}`}
                  className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold text-[#120D08] bg-gradient-to-r from-[#C89B3C] to-[#E2B755] hover:brightness-110 text-center transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5 text-[#120D08]" />
                  <span>Call {COMPANY_PHONE}</span>
                </a>
                <a
                  href={HEAD_OFFICE.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-white/10 hover:bg-white/20 text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#C89B3C]" />
                  <span>Google Maps</span>
                </a>
              </div>
            </div>

            {/* Quick Action Support Card */}
            <div className="bg-white p-6 rounded-3xl border border-[#C89B3C]/30 shadow-sm space-y-4">
              <h4 className="text-sm font-bold text-[#140E0A] flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#198754]" />
                <span>Instant WhatsApp Desk</span>
              </h4>
              <p className="text-xs text-zinc-600">
                Connect instantly with our customer valuation executives for quick appraisals, rate inquiries or branch directions.
              </p>
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#198754] hover:bg-[#157347] transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Start Direct WhatsApp Chat</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#C89B3C]/30 shadow-md">
            <h3 className="text-xl font-serif font-bold text-[#140E0A] mb-1">
              Send an Enquiry
            </h3>
            <p className="text-xs text-zinc-500 mb-6">
              Our support team will promptly review your request and connect with you on WhatsApp / Phone.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#140E0A] mb-1">Your Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Anbarasan"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-zinc-300 focus:border-[#C89B3C] bg-[#FCF9F2]"
                  />
                  {errors.name && <p className="text-[10px] text-rose-600 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#140E0A] mb-1">Mobile Number *</label>
                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-zinc-300 focus:border-[#C89B3C] bg-[#FCF9F2]"
                  />
                  {errors.mobile && <p className="text-[10px] text-rose-600 mt-1">{errors.mobile}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#140E0A] mb-1">Select Service</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-zinc-300 focus:border-[#C89B3C] bg-[#FCF9F2]"
                  >
                    <option value="Gold Selling Service">Gold Jewellery Selling</option>
                    <option value="Gold Jewellery Buying">Buying Hallmarked Gold</option>
                    <option value="Pawn Redemption Assistance">Pawn Redemption Assistance</option>
                    <option value="Doorstep Gold Evaluation">Doorstep Home Evaluation</option>
                    <option value="Instant Gold Quote">Instant Gold Quote</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#140E0A] mb-1">Preferred Branch</label>
                  <select
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-zinc-300 focus:border-[#C89B3C] bg-[#FCF9F2]"
                  >
                    {BRANCHES_DATA.map((b) => (
                      <option key={b.id} value={b.name}>
                        {b.name} ({b.address.district})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#140E0A] mb-1">
                  Gold Details / Enquiry Message (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. I have 30 grams of 22K bangles and would like to understand the valuation process..."
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-zinc-300 focus:border-[#C89B3C] bg-[#FCF9F2]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-[#120D08] bg-gradient-to-r from-[#C89B3C] via-[#E2B755] to-[#B58428] hover:from-[#B58428] hover:to-[#9A711F] hover:text-white transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>Submit & Chat on WhatsApp</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
