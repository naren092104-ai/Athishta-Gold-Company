import React from 'react';
import { Phone, Navigation, Building2, MapPin } from 'lucide-react';

interface BranchInfo {
  id: string;
  name: string;
  city: string;
  shortAddress: string;
  phone: string;
  directionsUrl: string;
  isHeadOffice?: boolean;
}

export const BranchLocator: React.FC = () => {
  const branches: BranchInfo[] = [
    {
      id: 'lakshmangudi',
      name: 'Lakshmangudi',
      city: 'Thiruvarur',
      shortAddress: 'Opp. IOB, TVR Main Road, Lakshmangudi',
      phone: '+919363639955',
      directionsUrl: 'https://maps.google.com/?q=Athishta+Gold+Company+Lakshmangudi',
      isHeadOffice: true,
    },
    {
      id: 'ambattur',
      name: 'Ambattur',
      city: 'Chennai',
      shortAddress: '11 Cycle Road, Varadharajapuram, Ambattur',
      phone: '+919363639955',
      directionsUrl: 'https://maps.google.com/?q=Athishta+Gold+Company+Ambattur',
    },
    {
      id: 'avadi',
      name: 'Avadi',
      city: 'Chennai',
      shortAddress: '380 Nandhini Complex, CTH Road, Avadi',
      phone: '+919363639955',
      directionsUrl: 'https://maps.google.com/?q=Athishta+Gold+Company+Avadi',
    },
    {
      id: 'kumbakonam',
      name: 'Kumbakonam',
      city: 'Thanjavur',
      shortAddress: 'Near Central Bus Stand, John Selvaraj Nagar',
      phone: '+919363639955',
      directionsUrl: 'https://maps.google.com/?q=Athishta+Gold+Company+Kumbakonam',
    },
    {
      id: 'nagapattinam',
      name: 'Nagapattinam',
      city: 'Nagapattinam',
      shortAddress: '400/7 Velipalayam, Opp. NT School',
      phone: '+919363639955',
      directionsUrl: 'https://maps.google.com/?q=Athishta+Gold+Company+Nagapattinam',
    },
    {
      id: 'pattukkottai',
      name: 'Pattukkottai',
      city: 'Thanjavur',
      shortAddress: '115 Tgalayari Street, Manickam Colony',
      phone: '+919363639955',
      directionsUrl: 'https://maps.google.com/?q=Athishta+Gold+Company+Pattukkottai',
    },
  ];

  return (
    <section id="branches" className="py-12 sm:py-16 lg:py-20 bg-[#F8F3E8] border-b border-[#C9A227]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#171717]">
            Find a Branch Near You
          </h2>
          <p className="text-sm sm:text-base text-[#6F6A60] mt-2">
            Visit our nearest branch for certified gold evaluation and instant settlement.
          </p>
        </div>

        {/* 3 Columns Desktop | 2 Columns Tablet | 1 Column Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {branches.map((b) => (
            <div
              key={b.id}
              className="bg-[#FFFDF8] rounded-2xl border border-[#C9A227]/25 overflow-hidden shadow-xs hover:border-[#C9A227]/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Clean Image Area with 'Branch Photo Coming Soon' Fallback */}
              <div className="relative h-48 sm:h-52 bg-gradient-to-br from-[#1C1814] via-[#15110D] to-[#120D0A] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                
                {/* Subtle decorative background glow */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C9A227_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-[#C9A227]/30 flex items-center justify-center text-[#C9A227] mb-3 relative z-10 shadow-inner group-hover:scale-105 transition-transform">
                  <Building2 className="w-7 h-7 stroke-[1.5]" />
                </div>

                <div className="relative z-10">
                  <span className="font-serif font-bold text-lg text-white tracking-wide block">
                    {b.name}
                  </span>
                  <span className="inline-block mt-2 px-3 py-1 rounded-full text-[11px] font-semibold text-[#C9A227] bg-[#C9A227]/10 border border-[#C9A227]/30 tracking-wide">
                    Branch Photo Coming Soon
                  </span>
                </div>

                {b.isHeadOffice && (
                  <div className="absolute top-3 left-3 bg-[#C9A227] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs">
                    Head Office
                  </div>
                )}
              </div>

              {/* Branch Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between mb-1">
                    <h3 className="font-serif font-bold text-lg text-[#171717]">
                      {b.name}
                    </h3>
                    <span className="text-xs font-semibold text-[#C9A227]">
                      {b.city}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#6F6A60] leading-relaxed flex items-start gap-1.5 mt-2">
                    <MapPin className="w-3.5 h-3.5 text-[#C9A227] shrink-0 mt-0.5" />
                    <span>{b.shortAddress}</span>
                  </p>
                </div>

                {/* Buttons: Directions & Call */}
                <div className="grid grid-cols-2 gap-2.5 mt-6 pt-4 border-t border-[#C9A227]/15">
                  <a
                    href={`tel:${b.phone}`}
                    className="py-2.5 px-3 rounded-xl text-xs font-bold text-[#15110D] bg-[#F8F3E8] hover:bg-[#ebd9a8]/40 border border-[#C9A227]/40 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C9A227]" />
                    <span>Call</span>
                  </a>

                  <a
                    href={b.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-[#C9A227] hover:bg-[#b8911e] flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Directions</span>
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

