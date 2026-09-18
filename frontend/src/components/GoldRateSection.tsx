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
            <div className="flex flex-wrap items-center gap-2.5 text-xs"><span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 font-bold text-emerald-700"><span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />LIVE MARKET RATE · TAMIL NADU</span><span className="font-semibold text-[#554F47]">Last Updated: <span className="text-[#15110D]">{formattedUpdated}</span></span></div>
            <h2 className="mt-3 font-serif text-4xl font-bold leading-tight text-[#15110D] sm:text-5xl lg:text-6xl">Today's <span className="gold-gradient-text">Gold</span> Rate</h2>
            <p className="mt-2 text-sm text-[#665D50] sm:text-base">Live indicative market rate for Tamil Nadu domestic gold jewellery transactions.</p>
            <p className="mt-1 font-serif text-base italic text-[#B17B16]">“Gold Today · A Brighter Tomorrow”</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex rounded-full border border-[#D7B04A] bg-[#FFFDF8] p-1 shadow-sm"><button type="button" onClick={() => setUnitMode('gram')} className={`rounded-full px-5 py-2.5 text-xs font-bold transition ${unitMode === 'gram' ? 'bg-[#D7A92F] text-[#201508] shadow-sm' : 'text-[#665D50]'}`}>1 Gram</button><button type="button" onClick={() => setUnitMode('pavan')} className={`rounded-full px-5 py-2.5 text-xs font-bold transition ${unitMode === 'pavan' ? 'bg-[#D7A92F] text-[#201508] shadow-sm' : 'text-[#665D50]'}`}>8g (1 Pavan)</button></div>
            <button type="button" onClick={onRefresh} disabled={isRefreshing} className="inline-flex items-center gap-2 rounded-full border border-[#D7B04A] bg-[#FFFDF8] px-5 py-3 text-xs font-bold text-[#382313] shadow-sm transition hover:-translate-y-0.5 disabled:opacity-60"><RefreshCw className={`h-4 w-4 text-[#B17B16] ${isRefreshing ? 'animate-spin' : ''}`} />{isRefreshing ? 'Syncing...' : 'Refresh Rate'}</button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6">
          {rateItems.map((item) => {
            const Icon = item.icon;
            const displayRate = item.rate * multiplier;
            const displayChange = rateChange * multiplier;
            const yesterday = item.rate - (changeDirection === 'down' ? -rateChange : rateChange);
            return <article key={item.purity} className={`gold-rate-card group relative overflow-hidden rounded-2xl p-5 sm:p-6 ${item.featured ? 'gold-rate-card-featured' : ''}`}>
              <div className="flex items-center justify-between gap-2"><span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide ${item.featured ? 'bg-[#D7A92F] text-[#201508]' : 'border border-[#D7B04A]/50 bg-[#FFF9E9] text-[#B17B16]'}`}>{item.tag}</span><span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-700"><TrendingUp className="h-3 w-3" />{displayChange > 0 ? `+₹${displayChange.toLocaleString('en-IN')}` : '--'}</span></div>
              <div className="mt-5 flex items-center gap-3"><div className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl ${item.featured ? 'bg-gradient-to-br from-[#D7A92F] to-[#9B6A12] text-white' : 'border border-[#D7B04A]/40 bg-[#FFF9E9] text-[#C18A18]'}`}><Icon className="h-7 w-7" /></div><div><h3 className="font-serif text-2xl font-bold leading-tight text-[#17110D]">{item.title}</h3><p className="mt-0.5 text-xs text-[#665D50]">{item.fineness}</p></div></div>
              <div className="my-5 border-y border-[#C9A227]/20 py-4"><p className="text-[10px] font-bold uppercase tracking-wider text-[#756A5A]">Today's Market Rate ({unitMode === 'pavan' ? '8g Pavan' : 'Per Gram'})</p><p className="mt-1 font-serif text-4xl font-bold text-[#15110D]">₹ {displayRate.toLocaleString('en-IN')} <span className="font-sans text-xs font-semibold text-[#756A5A]">/ {unitMode === 'pavan' ? '8g' : 'g'}</span></p><div className="mt-3 flex justify-between text-xs text-[#756A5A]"><span>Yesterday's Rate:</span><strong className="text-[#21180F]">₹ {Math.max(0, yesterday * multiplier).toLocaleString('en-IN')} / {unitMode === 'pavan' ? '8g' : 'g'}</strong></div></div>
            </article>;
          })}
        </div>

        <div className="mx-auto mt-8 flex max-w-6xl flex-col items-center justify-between gap-4 border-y border-[#C9A227]/35 py-4 sm:flex-row"><div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-0">{[{ icon: ShieldCheck, title: 'Transparent', subtitle: 'Evaluation' }, { icon: TrendingUp, title: 'Fair', subtitle: 'Pricing' }, { icon: IndianRupee, title: 'Instant', subtitle: 'Payment' }, { icon: Home, title: 'Doorstep', subtitle: 'Service' }].map(({ icon: Icon, title, subtitle }, index) => <div key={title} className={`flex items-center justify-center gap-2 px-2 ${index < 3 ? 'sm:border-r sm:border-[#C9A227]/35' : ''}`}><Icon className="h-8 w-8 text-[#C18A18]" /><span><strong className="block text-sm text-[#17110D]">{title}</strong><span className="text-xs text-[#665D50]">{subtitle}</span></span></div>)}</div><a href="tel:+919363639955" className="shrink-0 rounded-full bg-[#382313] px-5 py-3 text-xs text-[#FFF8E8]"><span className="text-[#F4C64C]">Need Help?</span> <strong>+91 93636 39955</strong></a></div>
        <div className="mt-7 flex items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#9A711F]"><span className="h-px w-14 bg-[#C9A227]/60" />More Than Gold · It's Trust<span className="h-px w-14 bg-[#C9A227]/60" /></div>
      </div>
    </section>
  );
};