import React from 'react';

interface AthishtaLogoProps {
  variant?: 'circle-red' | 'horizontal-gold' | 'horizontal-dark' | 'icon-only';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const AthishtaLogo: React.FC<AthishtaLogoProps> = ({
  variant = 'circle-red',
  size = 'md',
  showSubtitle = true,
}) => {
  // 1. Exact Circular Red Logo from User's 1st Image
  if (variant === 'circle-red') {
    const sizeDimensions = {
      sm: 'w-10 h-10',
      md: 'w-12 h-12 sm:w-14 sm:h-14',
      lg: 'w-20 h-20 sm:w-24 sm:h-24',
      xl: 'w-32 h-32 sm:w-36 sm:h-36',
    };

    return (
      <div className="flex items-center gap-3 select-none group">
        {/* Exact Red Circle Emblem */}
        <div
          className={`${sizeDimensions[size]} rounded-full bg-[#C8102E] shadow-md flex items-center justify-center relative p-2 overflow-hidden shrink-0 border border-[#A00C22] transition-transform group-hover:scale-105`}
        >
          <svg
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {/* Background Red Circle */}
            <circle cx="100" cy="100" r="98" fill="#C8102E" />

            {/* Top Golden Crescent */}
            <path
              d="M75 60 C75 46 125 46 125 60 C120 54 85 54 80 60 Z"
              fill="url(#goldGrade)"
            />
            <path
              d="M75 60 C75 44 115 44 120 60 C110 50 82 50 75 60 Z"
              fill="#F6D155"
            />
            <path
              d="M80 60 C80 48 116 48 116 60"
              stroke="url(#goldGrade)"
              strokeWidth="7"
              strokeLinecap="round"
            />

            {/* Bottom Golden Crescent (Interlocking) */}
            <path
              d="M84 76 C84 88 120 88 120 76"
              stroke="url(#goldGrade)"
              strokeWidth="7"
              strokeLinecap="round"
            />

            {/* Central Golden Star Sparkle */}
            <path
              d="M100 60 L104 68 L112 68 L106 73 L108 81 L100 76 L92 81 L94 73 L88 68 L96 68 Z"
              fill="url(#goldGrade)"
            />

            {/* "Athishta" in White Serif */}
            <text
              x="100"
              y="132"
              textAnchor="middle"
              fill="#FFFFFF"
              fontFamily="'Playfair Display', Georgia, serif"
              fontSize="34"
              fontWeight="600"
              letterSpacing="0.5"
            >
              Athishta
            </text>

            {/* "Gold Company" in White Serif */}
            <text
              x="100"
              y="156"
              textAnchor="middle"
              fill="#FFFFFF"
              fontFamily="'Playfair Display', Georgia, serif"
              fontSize="16"
              fontWeight="400"
              letterSpacing="0.2"
            >
              Gold Company
            </text>

            <defs>
              <linearGradient id="goldGrade" x1="75" y1="44" x2="125" y2="88" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFE066" />
                <stop offset="0.5" stopColor="#F5B800" />
                <stop offset="1" stopColor="#D48806" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Text next to logo for header display */}
        {showSubtitle && (
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-1.5">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#140E0A] group-hover:text-[#9A711F] transition-colors leading-none">
                Athishta
              </span>
            </div>
            <span className="font-serif text-xs sm:text-sm font-semibold text-[#8C6D23] tracking-wide mt-0.5">
              Gold Company
            </span>
            <span className="text-[9px] uppercase tracking-widest text-zinc-400 font-bold mt-0.5">
              Trusted Value Always
            </span>
          </div>
        )}
      </div>
    );
  }

  // 2. Horizontal Gold Lotus Variant (from 2nd image header/footer)
  return (
    <div className="flex items-center gap-3 select-none group">
      {/* Golden Lotus / Emblem */}
      <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 flex items-center justify-center">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Central Lotus Petal */}
          <path
            d="M50 15 C55 35 62 55 50 82 C38 55 45 35 50 15 Z"
            fill="url(#lotusGold)"
          />
          {/* Left Petal */}
          <path
            d="M50 35 C35 45 20 62 25 78 C35 78 45 68 50 55 Z"
            fill="url(#lotusGold)"
          />
          {/* Right Petal */}
          <path
            d="M50 35 C65 45 80 62 75 78 C65 78 55 68 50 55 Z"
            fill="url(#lotusGold)"
          />
          {/* Outer Left Leaf */}
          <path
            d="M30 65 C18 70 12 80 18 85 C28 85 36 78 40 70 Z"
            fill="url(#lotusGold)"
          />
          {/* Outer Right Leaf */}
          <path
            d="M70 65 C82 70 88 80 82 85 C72 85 64 78 60 70 Z"
            fill="url(#lotusGold)"
          />
          <defs>
            <linearGradient id="lotusGold" x1="12" y1="15" x2="88" y2="85" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F3C34F" />
              <stop offset="0.5" stopColor="#C99427" />
              <stop offset="1" stopColor="#9C6B16" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="flex flex-col text-left">
        <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#140E0A] leading-tight">
          Athishta
        </span>
        <span className="font-serif text-xs sm:text-sm font-semibold text-[#8C6D23] tracking-wide -mt-0.5">
          Gold Company
        </span>
        <span className="text-[8px] uppercase tracking-[0.2em] text-[#A8832C] font-bold mt-0.5">
          TRUSTED VALUE ALWAYS
        </span>
      </div>
    </div>
  );
};
