import React from 'react';
import { MapPin, Phone, MessageCircle, Navigation, Clock, CheckCircle, ExternalLink } from 'lucide-react';
import { Branch } from '../types';
import { getWhatsAppUrl } from '../services/whatsappService';

interface BranchCardProps {
  branch: Branch;
  distanceKm?: number;
  onViewDetails?: (branch: Branch) => void;
}

export const BranchCard: React.FC<BranchCardProps> = ({
  branch,
  distanceKm,
  onViewDetails
}) => {
  const branchWhatsAppUrl = getWhatsAppUrl({
    flow: 'branch_enquiry',
    name: 'Customer',
    mobile: '',
    branch: branch.name,
    notes: `Enquiry for ${branch.name} branch.`
  }, branch.whatsapp);

  return (
    <div
      className={`rounded-3xl bg-[#FCF9F2] border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${
        branch.isHeadOffice
          ? 'border-[#C89B3C] ring-2 ring-[#C89B3C]/40'
          : 'border-[#C89B3C]/30 hover:border-[#C89B3C]'
      }`}
    >
      <div>
        {/* Branch Image Banner */}
        <div className="relative h-48 w-full overflow-hidden bg-zinc-900">
          <img
            src={branch.imageUrl}
            alt={branch.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            {branch.isHeadOffice && (
              <span className="bg-[#1A130C] text-[#E8D49E] text-[11px] font-extrabold px-3 py-1 rounded-full border border-[#C89B3C] shadow">
                ★ Central Head Office
              </span>
            )}
            {distanceKm !== undefined && (
              <span className="bg-emerald-800 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow flex items-center gap-1">
                <Navigation className="w-3 h-3" />
                <span>{distanceKm} km away</span>
              </span>
            )}
          </div>

          <div className="absolute bottom-3 left-4 right-4 text-white">
            <h3 className="text-lg font-serif font-bold text-white drop-shadow">
              {branch.name}
            </h3>
            <p className="text-xs text-zinc-200 mt-0.5 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#C89B3C] shrink-0" />
              <span>{branch.address.district}, Tamil Nadu</span>
            </p>
          </div>
        </div>

        {/* Card Content Body */}
        <div className="p-5 sm:p-6 space-y-4">
          
          {/* Address Box */}
          <div className="text-xs text-[#140E0A]/90 space-y-1 bg-white p-3.5 rounded-2xl border border-zinc-200">
            <div className="font-bold text-[#140E0A]">Branch Address:</div>
            <p className="leading-relaxed">{branch.address.fullFormatted}</p>
            {branch.address.landmark && (
              <div className="text-[11px] text-[#9A711F] font-semibold pt-1">
                Landmark: {branch.address.landmark}
              </div>
            )}
          </div>

          {/* Timings & Phone */}
          <div className="space-y-2 text-xs text-[#140E0A]/80">
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#9A711F] shrink-0" />
              <span>
                <strong>Hours:</strong> {branch.hours} ({branch.days})
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#9A711F] shrink-0" />
              <span>
                <strong>Direct Helpline:</strong> {branch.phone}
              </span>
            </div>
          </div>

          {/* Key Features List */}
          <div className="space-y-1.5 pt-1">
            {branch.features.slice(0, 3).map((feat, fIdx) => (
              <div key={fIdx} className="text-[11px] text-zinc-700 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Card Action Buttons (Call, WhatsApp, Get Directions) */}
      <div className="p-5 sm:p-6 pt-0 space-y-2">
        <div className="grid grid-cols-2 gap-2">
          <a
            href={`tel:${branch.phone.replace(/\s+/g, '')}`}
            className="py-2.5 px-3 rounded-xl text-xs font-bold text-[#140E0A] bg-[#FAF4EA] hover:bg-[#E8D49E] border border-[#C89B3C]/40 text-center transition-colors flex items-center justify-center gap-1.5 active:scale-95"
          >
            <Phone className="w-3.5 h-3.5 text-[#9A711F]" />
            <span>Call Branch</span>
          </a>

          <a
            href={branchWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-[#198754] hover:bg-[#157347] text-center transition-colors flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Google Maps Directions Button */}
        <a
          href={branch.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#120D08] bg-gradient-to-r from-[#C89B3C] via-[#E2B755] to-[#B58428] hover:from-[#B58428] hover:to-[#9A711F] hover:text-white text-center transition-all shadow-sm flex items-center justify-center gap-2 group/dir active:scale-95"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>Get Google Maps Directions</span>
          <ExternalLink className="w-3 h-3 opacity-70 group-hover/dir:opacity-100" />
        </a>
      </div>
    </div>
  );
};
