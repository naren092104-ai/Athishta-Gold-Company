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
        
        {/* Section Header matching Image */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6">
          <div className="flex flex-wrap items-baseline gap-2">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#140E0A]">
              Our Branches
            </h2>
            <span className="text-xs sm:text-sm text-zinc-500">
              Find your nearest Athishta Gold Company branch.
            </span>
          </div>

          <a
            href="https://maps.google.com/?q=Athishta+Gold+Company"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-[#A77B28] hover:text-[#8F671E] transition-colors group cursor-pointer"
          >
            <span>View All Branches</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* 6 Branch Cards Grid matching Image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3.5">
          {branches.map((b) => (
            <div
              key={b.id}
              className="bg-white rounded-xl border border-zinc-200/80 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              {/* Storefront Photo matching user reference image */}
              <div className="relative h-36 bg-[#160E08] overflow-hidden flex flex-col">
                
                {/* Physical Storefront Fascia Signboard matching user image */}
                <div className="relative z-10 bg-[#160E08]/95 border-b-2 border-[#C89B3C] px-2 py-1.5 shadow-md flex items-center justify-center gap-1.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#C8102E] border border-[#F6D155] flex items-center justify-center shrink-0">
                    <span className="text-[6px] text-[#F6D155] font-bold">A</span>
                  </div>
                  <span className="font-serif font-bold text-[9px] text-[#F3C34F] tracking-wider uppercase truncate">
                    Athishta Gold Company
                  </span>
                </div>

                {/* Showroom Facade / Glass Entrance View */}
                <div className="relative flex-1 overflow-hidden">
                  <img
                    src={b.image}
                    alt={`${b.name} Branch Storefront - Athishta Gold Company`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Subtle glass reflection & warm lighting gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>

              </div>

              {/* Branch Info matching Image */}
              <div className="p-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-xs sm:text-sm text-[#140E0A] leading-tight mb-0.5">
                    {b.name} {b.sub && <span className="font-normal text-zinc-500 block text-[11px]">{b.sub}</span>}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-zinc-500 line-clamp-2 leading-tight mt-1">
                    {b.address}
                  </p>
                </div>

                {/* Actions: Call & Directions buttons matching Image */}
                <div className="grid grid-cols-2 gap-1.5 mt-3 pt-2 border-t border-zinc-100">
                  <a
                    href={`tel:${b.phone}`}
                    className="py-1 px-2 rounded text-[10px] font-bold text-white bg-[#A77B28] hover:bg-[#8F671E] flex items-center justify-center gap-1 transition-colors"
                  >
                    <Phone className="w-2.5 h-2.5" />
                    <span>Call</span>
                  </a>

                  <a
                    href={b.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1 px-2 rounded text-[10px] font-bold text-[#140E0A] bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 flex items-center justify-center gap-1 transition-colors"
                  >
                    <Navigation className="w-2.5 h-2.5 text-[#A77B28]" />
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
