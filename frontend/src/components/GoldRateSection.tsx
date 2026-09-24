import React, { useMemo, useState } from 'react';
import { Award, Coins, Home, IndianRupee, RefreshCw, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';
import { GoldRateData, GoldRates } from '../types';

interface GoldRateSectionProps {
  rates: GoldRates;
  rateData: GoldRateData | null;
  isRefreshing: boolean;
  onRefresh: () => void;
}

export const GoldRateSection: React.FC<GoldRateSectionProps> = ({ rates, rateData, isRefreshing, onRefresh }) => {
  const [unitMode, setUnitMode] = useState<'gram' | 'pavan'>('gram');
  const liveRates = rateData?.rates ?? rates;
  const multiplier = unitMode === 'pavan' ? 8 : 1;
  const rateChange = rateData?.change24h?.amount ?? 0;
  const changeDirection = rateData?.change24h?.direction ?? 'flat';
  const updatedText = rateData?.updatedAt || 'Today, Live';

  const rateItems = useMemo(() => [
    { purity: '24K', title: '24K Pure Gold', fineness: '99.9% Pure (999)', rate: liveRates['24K'], icon: Coins, tag: 'Pure Bullion Standard' },
    { purity: '22K', title: '22K Standard Hallmark', fineness: '91.6% BIS Hallmark (916)', rate: liveRates['22K'], icon: Award, tag: 'Most Traded · 916 Standard', featured: true },
    { purity: '18K', title: '18K Fine Gold', fineness: '75.0% Fine (750)', rate: liveRates['18K'], icon: Sparkles, tag: 'Diamond / Studded Jewellery' },
  ], [liveRates]);

  const formattedUpdated = (() => {
    if (!rateData?.updatedAt) return updatedText;
    const date = new Date(rateData.updatedAt);
    return Number.isNaN(date.getTime()) ? updatedText : date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) + ', ' + date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
  })();

  return (
    <section id="gold-rate" className="gold-rate-showcase relative overflow-hidden border-b border-[#C9A227]/25 py-16 sm:py-20 lg:py-24">
      <div className="gold-rate-temple absolute inset-0 pointer-events-none" />
      <div className="gold-rate-ribbon absolute inset-x-0 bottom-0 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="font-serif text-4xl font-bold leading-tight text-[#15110D] sm:text-5xl lg:text-6xl">Today's <span className="gold-gradient-text">Gold</span> Rate</h2>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
          {rateItems.map((item) => {
            const Icon = item.icon;
            const displayRate = item.rate * multiplier;
            const displayChange = rateChange * multiplier;
            const yesterday = item.rate - (changeDirection === 'down' ? -rateChange : rateChange);
            return <article key={item.purity} className={`gold-rate-card group relative overflow-hidden rounded-2xl p-5 sm:p-6 ${item.featured ? 'gold-rate-card-featured' : ''}`}>
              <div className="mt-5 flex items-center gap-3"><div className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl ${item.featured ? 'bg-gradient-to-br from-[#D7A92F] to-[#9B6A12] text-white' : 'border border-[#D7B04A]/40 bg-[#FFF9E9] text-[#C18A18]'}`}><Icon className="h-7 w-7" /></div><div><h3 className="font-serif text-2xl font-bold leading-tight text-[#17110D]">{item.title}</h3><p className="mt-0.5 text-xs text-[#665D50]">{item.fineness}</p></div></div>
              <div className="my-5 border-y border-[#C9A227]/20 py-4"><p className="text-[10px] font-bold uppercase tracking-wider text-[#756A5A]">Today's Market Rate ({unitMode === 'pavan' ? '8g Pavan' : 'Per Gram'})</p><p className="mt-1 font-serif text-4xl font-bold text-[#15110D]">₹ {displayRate.toLocaleString('en-IN')} <span className="font-sans text-xs font-semibold text-[#756A5A]">/ {unitMode === 'pavan' ? '8g' : 'g'}</span></p><div className="mt-3 flex justify-between text-xs text-[#756A5A]"><span>Yesterday's Rate:</span><strong className="text-[#21180F]">₹ {Math.max(0, yesterday * multiplier).toLocaleString('en-IN')} / {unitMode === 'pavan' ? '8g' : 'g'}</strong></div></div>
            </article>;
          })}
        </div>
      </div>
    </section>
  );
};