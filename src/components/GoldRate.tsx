import React, { useState } from 'react';
import { RefreshCw, TrendingUp, Sparkles, Clock, AlertCircle, ShieldCheck, Check, ArrowRight } from 'lucide-react';
import { GoldRateData } from '../types';
import { formatINR } from '../utils/formatCurrency';

interface GoldRateProps {
  data: GoldRateData | null;
  isLoading: boolean;
  isRefreshing: boolean;
  error: string | null;
  onRefresh: () => void;
  onOpenCalculator: (purity?: '24K' | '22K' | '18K') => void;
}

export const GoldRate: React.FC<GoldRateProps> = ({
  data,
  isLoading,
  isRefreshing,
  error,
  onRefresh,
  onOpenCalculator
}) => {
  const [showRefreshToast, setShowRefreshToast] = useState(false);

  const handleRefreshClick = () => {
    onRefresh();
    setShowRefreshToast(true);
    setTimeout(() => setShowRefreshToast(false), 3000);
  };

  const rates = data?.rates || { '24K': 7520, '22K': 6890, '18K': 5640 };

  const purities = [
    {
      karat: '24K' as const,
      name: '24 Karat Pure Gold',
      fineness: '99.9% Purity (999)',
      rate: rates['24K'],
      bg: 'from-[#FAF4EA] via-[#FCF9F2] to-[#FAF4EA]',
      border: 'border-[#C89B3C]',
      popular: false,
      tag: 'Fine Gold / Bullion'
    },
    {
      karat: '22K' as const,
      name: '22 Karat Standard Jewellery',
      fineness: '91.6% BIS Hallmarked (916)',
      rate: rates['22K'],
      bg: 'from-[#241B13] via-[#1A130C] to-[#120D08]',
      border: 'border-[#E2B755]',
      popular: true,
      tag: 'Most Popular for Jewellery'
    },
    {
      karat: '18K' as const,
      name: '18 Karat Gold',
      fineness: '75.0% Purity (750)',
      rate: rates['18K'],
      bg: 'from-[#FAF4EA] via-[#FCF9F2] to-[#FAF4EA]',
      border: 'border-[#C89B3C]/50',
      popular: false,
      tag: 'Stone Studded Jewellery'
    }
  ];

  return (
    <section id="gold-rate" className="py-14 sm:py-20 bg-[#FCF9F2] border-b border-[#C89B3C]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF4EA] border border-[#C89B3C]/40 text-xs font-bold text-[#9A711F] mb-3">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>LIVE BULLION BENCHMARK • TAMIL NADU</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold text-[#140E0A] tracking-tight">
              Today’s Gold Rate in Tamil Nadu
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 mt-1 max-w-2xl">
              Live market pricing for 24K, 22K (916 BIS Hallmark), and 18K gold. Rates are indicative benchmarks updated from official bullion market feeds.
            </p>
          </div>

          {/* Refresh Action & Status */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={handleRefreshClick}
              disabled={isRefreshing}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-[#FAF4EA] text-[#1A130C] border border-[#C89B3C]/40 text-xs font-bold shadow-xs hover:shadow-md transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-[#9A711F] ${isRefreshing ? 'animate-spin' : ''}`} />
              <span>{isRefreshing ? 'Updating...' : 'Refresh Rate'}</span>
            </button>

            <div className="text-right text-[11px] text-zinc-500">
              <div className="flex items-center gap-1 font-medium">
                <Clock className="w-3 h-3 text-[#9A711F]" />
                <span>Updated: {data?.updatedAt ? new Date(data.updatedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Live'}</span>
              </div>
              <span className="text-[#198754] font-semibold">● Active Feed</span>
            </div>
          </div>
        </div>

        {/* Refresh Toast Notification */}
        {showRefreshToast && (
          <div className="mb-6 p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs flex items-center justify-between animate-fadeIn">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Gold rate refreshed with current market benchmark data.</span>
            </div>
            <span className="font-bold">22K: {formatINR(rates['22K'])}/g</span>
          </div>
        )}

        {/* 3 Karat Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {purities.map((item) => {
            const isDark = item.popular;
            return (
              <div
                key={item.karat}
                className={`relative rounded-3xl p-6 sm:p-7 border-2 ${item.border} bg-gradient-to-b ${item.bg} shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                  isDark ? 'text-white md:-translate-y-2 ring-4 ring-[#C89B3C]/20' : 'text-[#140E0A]'
                }`}
              >
                {/* Popular Pill */}
                {item.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#C89B3C] to-[#E2B755] text-[#120D08] text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                    ★ Most Traded 916 Gold
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-lg ${
                        isDark ? 'bg-[#120D08] text-[#E8D49E] border border-[#C89B3C]/30' : 'bg-[#FAF4EA] text-[#9A711F]'
                      }`}
                    >
                      {item.tag}
                    </span>
                    <span className={`text-xs font-semibold ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      {item.fineness}
                    </span>
                  </div>

                  <h3 className={`text-lg font-serif font-bold ${isDark ? 'text-white' : 'text-[#140E0A]'}`}>
                    {item.name}
                  </h3>

                  {/* 1 Gram Rate */}
                  <div className="mt-4 pb-4 border-b border-zinc-200/20">
                    <div className={`text-xs font-medium ${isDark ? 'text-zinc-300' : 'text-zinc-500'}`}>
                      Rate per 1 Gram (g)
                    </div>
                    <div className="text-3xl sm:text-4xl font-serif font-extrabold mt-1 tracking-tight">
                      {formatINR(item.rate)}
                    </div>
                  </div>

                  {/* 8 Grams / 1 Sovereign Rate */}
                  <div className="py-3 space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className={isDark ? 'text-zinc-300' : 'text-zinc-600'}>
                        8 Grams (1 Pavan / Sovereign):
                      </span>
                      <span className={`font-bold text-sm ${isDark ? 'text-[#E8D49E]' : 'text-[#9A711F]'}`}>
                        {formatINR(item.rate * 8)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className={isDark ? 'text-zinc-300' : 'text-zinc-600'}>
                        10 Grams:
                      </span>
                      <span className="font-semibold">
                        {formatINR(item.rate * 10)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className={isDark ? 'text-zinc-300' : 'text-zinc-600'}>
                        100 Grams (Bullion Bar):
                      </span>
                      <span className="font-semibold">
                        {formatINR(item.rate * 100)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Direct Action Button */}
                <div className="pt-4 mt-2">
                  <button
                    onClick={() => onOpenCalculator(item.karat)}
                    className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 ${
                      isDark
                        ? 'bg-gradient-to-r from-[#C89B3C] to-[#E2B755] text-[#120D08] hover:brightness-110 shadow-md'
                        : 'bg-[#1A130C] text-[#FAF4EA] hover:bg-[#241B13]'
                    }`}
                  >
                    <span>Calculate {item.karat} Value</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Informational Disclaimer */}
        <div className="mt-10 p-4 rounded-2xl bg-[#FAF4EA] border border-[#C89B3C]/30 text-xs text-zinc-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#9A711F] shrink-0" />
            <span>
              <strong>100% Transparent Testing:</strong> We test gold in front of customers using calibrated German XRF spectrometers without melting or damage.
            </span>
          </div>
          <div className="text-[11px] text-zinc-500 whitespace-nowrap">
            Rates indicative for Tamil Nadu retail bullion
          </div>
        </div>

      </div>
    </section>
  );
};
