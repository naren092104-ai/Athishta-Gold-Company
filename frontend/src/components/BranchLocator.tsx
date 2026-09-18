import React from 'react';
import { Phone, Navigation, ArrowRight } from 'lucide-react';

interface BranchInfo {
  id: string;
  name: string;
  sub: string;
  address: string;
  phone: string;
  image: string;
  mapUrl: string;
}

export const BranchLocator: React.FC = () => {
  // Verified real luxury retail storefronts (NO pills/tablets, NO broken images)
  const branches: BranchInfo[] = [
    {
      id: 'lakshmangudi',
      name: 'Lakshmangudi',
      sub: '(Head Office)',
      address: 'TVR Main Road, Lakshmangudi, Thiruvarur - 614102',
      phone: '+919363639955',
      image: 'https://images.unsplash.com/photo-1772705844321-59e408e4f2d5?auto=format&fit=crop&w=600&q=80',
      mapUrl: 'https://maps.google.com/?q=Athishta+Gold+Company+Lakshmangudi'
    },
    {
      id: 'ambattur',
      name: 'Ambattur',
      sub: 'Chennai',
      address: '11 Cycle Road, Ambattur - 600053',
      phone: '+919363639955',
      image: 'https://images.unsplash.com/photo-1766573024161-864d65c6442f?auto=format&fit=crop&w=600&q=80',
      mapUrl: 'https://maps.google.com/?q=Athishta+Gold+Company+Ambattur'
    },
    {
      id: 'avadi',
      name: 'Avadi',
      sub: 'Chennai',
      address: 'Avadi Gandhi Nagar, CTH Road, Avadi - 600054',
      phone: '+919363639955',
      image: 'https://images.unsplash.com/photo-1774571953839-5e0f6f7f28bf?auto=format&fit=crop&w=600&q=80',
      mapUrl: 'https://maps.google.com/?q=Athishta+Gold+Company+Avadi'
    },
    {
      id: 'kumbakonam',
      name: 'Kumbakonam',
      sub: '',
      address: 'Near Bus Stand, Kumbakonam - 612001',
      phone: '+919363639955',
      image: 'https://images.unsplash.com/photo-1771775735322-2abfea815153?auto=format&fit=crop&w=600&q=80',
      mapUrl: 'https://maps.google.com/?q=Athishta+Gold+Company+Kumbakonam'
    },
    {
      id: 'nagapattinam',
      name: 'Nagapattinam',
      sub: '',
      address: 'Velipalayam, Nagapattinam - 611001',
      phone: '+919363639955',
      image: 'https://images.unsplash.com/photo-1595245761073-0eb3ca3f179c?auto=format&fit=crop&w=600&q=80',
      mapUrl: 'https://maps.google.com/?q=Athishta+Gold+Company+Nagapattinam'
    },
    {
      id: 'pattukkottai',
      name: 'Pattukkottai',
      sub: '',
      address: 'Main Road, Pattukkottai - 614601',
      phone: '+919363639955',
      image: 'https://images.unsplash.com/photo-1535401991746-da3d9055713e?auto=format&fit=crop&w=600&q=80',
      mapUrl: 'https://maps.google.com/?q=Athishta+Gold+Company+Pattukkottai'
    }
  ];

  return (
    <section id="branches" className="py-10 sm:py-14 bg-[#FAF7F0] border-b border-zinc-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Luxury Design */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
          <div>
            <span className="text-[11px] font-bold text-[#A77B28] uppercase tracking-widest block mb-1">
              Physical Showroom Network
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#140E0A]">
              Our Luxury Showrooms
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 mt-1 max-w-xl">
              Visit your nearest Athishta Gold Company branch for a private, certified gold valuation with immediate bank settlement.
            </p>
          </div>

          <a
            href="https://maps.google.com/?q=Athishta+Gold+Company"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#A77B28] hover:text-[#8F671E] transition-colors group cursor-pointer shrink-0"
          >
            <span>View All Showrooms</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 6 Branch Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {branches.map((b) => (
            <div
              key={b.id}
              className="bg-white rounded-2xl border border-[#C89B3C]/25 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#C89B3C]/60 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              {/* Storefront Photo */}
              <div className="relative h-40 bg-[#140E0A] overflow-hidden flex flex-col">
                
                {/* Storefront Fascia Signboard */}
                <div className="relative z-10 bg-[#140E0A] border-b border-[#C89B3C]/60 px-2.5 py-1.5 shadow-md flex items-center justify-center gap-1.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#C8102E] border border-[#F6D155] flex items-center justify-center shrink-0">
                    <span className="text-[6px] text-[#F6D155] font-bold">A</span>
                  </div>
                  <span className="font-serif font-bold text-[9px] text-[#F3C34F] tracking-widest uppercase truncate">
                    Athishta Gold Company
                  </span>
                </div>

                {/* Showroom Facade / Glass Entrance View */}
                <div className="relative flex-1 overflow-hidden">
                  <img
                    src={b.image}
                    alt={`${b.name} Showroom - Athishta Gold Company`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Branch Pill Badge */}
                  <div className="absolute bottom-2 left-2 bg-black/75 backdrop-blur-xs px-2 py-0.5 rounded-md border border-white/20">
                    <span className="text-[9px] font-bold text-[#F3C34F] uppercase tracking-wider">{b.name}</span>
                  </div>
                </div>

              </div>

              {/* Branch Info */}
              <div className="p-3.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-xs sm:text-sm text-[#140E0A] leading-tight mb-0.5">
                    {b.name} {b.sub && <span className="font-normal text-zinc-500 block text-[11px]">{b.sub}</span>}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-zinc-500 line-clamp-2 leading-snug mt-1">
                    {b.address}
                  </p>
                </div>

                {/* Actions: Call & Directions buttons */}
                <div className="grid grid-cols-2 gap-1.5 mt-3 pt-2.5 border-t border-zinc-100">
                  <a
                    href={`tel:${b.phone}`}
                    className="py-1.5 px-2 rounded-lg text-[10px] font-bold text-white bg-gradient-to-r from-[#A77B28] to-[#C89B3C] hover:brightness-105 flex items-center justify-center gap-1 transition-all shadow-2xs cursor-pointer"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call Now</span>
                  </a>

                  <a
                    href={b.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1.5 px-2 rounded-lg text-[10px] font-bold text-[#140E0A] bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 flex items-center justify-center gap-1 transition-colors cursor-pointer"
                  >
                    <Navigation className="w-3 h-3 text-[#A77B28]" />
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
