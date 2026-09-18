import React, { useState } from 'react';
import { Image as ImageIcon, X, ZoomIn } from 'lucide-react';
import { GALLERY_DATA } from '../data/gallery';
import { GalleryItem } from '../types';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = [
    'All',
    'Branches',
    'Gold Testing',
    'Gold Jewellery',
    'Customer Service',
    'Doorstep Service',
    'Team'
  ];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-14 sm:py-20 bg-[#FAF7F0] border-b border-[#C89B3C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8D49E]/40 border border-[#C89B3C]/30 text-xs font-bold text-[#9A711F] mb-3">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>VISUAL CREDIBILITY & WORKSPACES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#171411]">
            Inside Athishta Gold Company
          </h2>
          <p className="text-sm sm:text-base text-[#241B13]/70 mt-2">
            A glimpse into our modern branch environments, scientific testing equipment, precision digital weighing and genuine customer interactions.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#241B13] text-[#FAF4EA] shadow-md'
                  : 'bg-[#FFFFFF] text-[#241B13] border border-zinc-200 hover:border-[#C89B3C] hover:bg-[#E8D49E]/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-[#C89B3C]/30 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer aspect-4/3"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 brightness-95"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

              {/* View zoom icon on hover */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#E8D49E] bg-[#241B13]/80 px-2 py-0.5 rounded border border-[#C89B3C]/30">
                  {item.category.toUpperCase()}
                </span>
                <h3 className="text-sm sm:text-base font-serif font-bold text-white mt-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-300 line-clamp-2 mt-0.5">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#241B13] rounded-3xl overflow-hidden border border-[#C89B3C]/50 shadow-2xl text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-[#C89B3C] hover:text-[#171411] flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image */}
            <div className="max-h-[65vh] w-full overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                className="max-h-[65vh] w-full object-contain"
              />
            </div>

            {/* Details */}
            <div className="p-5 sm:p-6 bg-[#241B13]">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#E8D49E] bg-[#171411] px-2 py-0.5 rounded border border-[#C89B3C]/30">
                {selectedItem.category.toUpperCase()}
              </span>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-white mt-2">
                {selectedItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 mt-1 leading-relaxed">
                {selectedItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
