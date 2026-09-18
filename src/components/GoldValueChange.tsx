import React, { useState } from 'react';
import { TrendingUp, History, Sparkles, Scale, Info, ArrowRight, MessageCircle } from 'lucide-react';
import { GoldRates } from '../types';
import { HISTORICAL_GOLD_RATES_INDIA } from '../data/historicalRates';
import { calculateGoldValueChange } from '../utils/goldCalculator';
import { formatINR, formatPercentage } from '../utils/formatCurrency';
import { openWhatsAppEnquiry } from '../services/whatsappService';

interface GoldValueChangeProps {
  rates: GoldRates;
}

export const GoldValueChange: React.FC<GoldValueChangeProps> = ({ rates }) => {
  const [purchaseYear, setPurchaseYear] = useState<number>(2015);
  const [purity, setPurity] = useState<'24K' | '22K' | '18K'>('22K');
  const [weight, setWeight] = useState<number>(24); // e.g. 3 pavans

  const availableYears = HISTORICAL_GOLD_RATES_INDIA.map((h) => h.year).sort((a, b) => b - a);

  const result = calculateGoldValueChange(purchaseYear, purity, weight, rates);

  const handleWhatsAppEnquiry = () => {
    openWhatsAppEnquiry({
      flow: 'selling',
      name: 'Customer',
      mobile: '',
      service: `Gold Value Change Consultation (${purchaseYear} purchase)`,
      purity: `${purity}`,
      weight: weight,
      indicativeRate: result.currentRate,
      estimatedValue: result.currentValue,
      notes: `Bought in ${purchaseYear} for approx ${formatINR(result.purchaseValue)}. Looking to evaluate today.`
    });
  };

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-[#FAF7F0] via-[#F4EFE6] to-[#FAF7F0] border-b border-[#C89B3C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8D49E]/40 border border-[#C89B3C]/30 text-xs font-bold text-[#9A711F] mb-3">
            <History className="w-3.5 h-3.5" />
            <span>HISTORICAL APPRECIATION COMPARISON</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#171411]">
            See How Your Gold Value Has Changed
          </h2>
          <p className="text-sm sm:text-base text-[#241B13]/70 mt-2">
            Compare what your jewellery was worth when purchased versus its current indicative market value today in Tamil Nadu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form (6 cols) */}
          <div className="lg:col-span-6 bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border border-[#C89B3C]/30 shadow-sm space-y-5">
            
            {/* 1. Purchase Year Dropdown */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#241B13] mb-2">
                1. Select Approximate Purchase Year
              </label>
              <select
                value={purchaseYear}
                onChange={(e) => setPurchaseYear(parseInt(e.target.value, 10))}
                className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:border-[#C89B3C] focus:ring-1 focus:ring-[#C89B3C] text-sm font-semibold text-[#171411] bg-[#FAF7F0]"
              >
                {availableYears.map((yr) => (
                  <option key={yr} value={yr}>
                    Year {yr} {yr === 2010 ? '— (Approx ₹1,850/g)' : yr === 2015 ? '— (Approx ₹2,634/g)' : yr === 2020 ? '— (Approx ₹4,865/g)' : ''}
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Purity Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#241B13] mb-2">
                2. Gold Purity
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {(['24K', '22K', '18K'] as const).map((k) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => setPurity(k)}
                    className={`py-2.5 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                      purity === k
                        ? 'bg-[#241B13] text-[#FAF4EA] border-[#C89B3C]'
                        : 'bg-[#FAF7F0] text-[#241B13] border-zinc-200 hover:border-[#C89B3C]'
                    }`}
                  >
                    {k} ({k === '22K' ? '916' : k === '24K' ? '999' : '750'})
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Weight in Grams */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#241B13]">
                  3. Approximate Weight in Grams
                </label>
                <span className="text-xs text-[#9A711F] font-semibold">
                  ≈ {(weight / 8).toFixed(2)} Pavans
                </span>
              </div>
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  max="5000"
                  value={weight}
                  onChange={(e) => setWeight(Math.max(1, parseFloat(e.target.value) || 1))}
                  className="w-full px-4 py-3 rounded-xl border border-zinc-300 focus:border-[#C89B3C] text-base font-bold text-[#171411] bg-[#FAF7F0]"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-zinc-500">
                  grams
                </span>
              </div>
            </div>

            {/* Historical comparison summary note */}
            <div className="p-4 rounded-xl bg-[#FAF7F0] border border-[#C89B3C]/20 text-xs text-[#241B13]/80 space-y-1.5">
              <div className="font-bold text-[#241B13] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#9A711F]" />
                <span>Historic Rate Benchmark:</span>
              </div>
              <p>
                In <strong>{purchaseYear}</strong>, {purity} gold was approximately{' '}
                <strong>{formatINR(result.purchaseRate)}/gram</strong>. Today in <strong>2026</strong>, it trades at approximately{' '}
                <strong>{formatINR(result.currentRate)}/gram</strong>.
              </p>
            </div>

          </div>

          {/* Results Card (6 cols) */}
          <div className="lg:col-span-6 bg-[#241B13] text-[#FAF4EA] rounded-3xl p-6 sm:p-8 border-2 border-[#C89B3C]/40 shadow-xl space-y-6">
            
            {result.isAvailable ? (
              <>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#E8D49E]">
                    Gold Value Change Analysis
                  </span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/40">
                    +{result.multiplier}x Growth
                  </span>
                </div>

                {/* Comparison Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#171411] p-4 rounded-2xl border border-white/10">
                    <div className="text-[11px] text-zinc-400 mb-1">Value in {purchaseYear}</div>
                    <div className="text-xl sm:text-2xl font-serif font-bold text-zinc-300">
                      {formatINR(result.purchaseValue)}
                    </div>
                    <div className="text-[10px] text-zinc-500 mt-1">
                      @ {formatINR(result.purchaseRate)}/g
                    </div>
                  </div>

                  <div className="bg-[#171411] p-4 rounded-2xl border border-[#C89B3C]/30">
                    <div className="text-[11px] text-[#E8D49E] mb-1">Current Value Today</div>
                    <div className="text-xl sm:text-2xl font-serif font-bold text-[#FAF4EA]">
                      {formatINR(result.currentValue)}
                    </div>
                    <div className="text-[10px] text-[#E8D49E] mt-1">
                      @ {formatINR(result.currentRate)}/g
                    </div>
                  </div>
                </div>

                {/* Growth Highlights */}
                <div className="bg-[#171411] rounded-2xl p-4 border border-[#C89B3C]/20 space-y-2 text-xs">
                  <div className="flex justify-between items-center text-zinc-300">
                    <span>Total Gold Price Appreciation:</span>
                    <span className="text-base font-bold text-emerald-400 font-serif">
                      +{formatINR(result.appreciationAmount)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-zinc-300">
                    <span>Percentage Change:</span>
                    <span className="text-sm font-bold text-[#E8D49E]">
                      {formatPercentage(result.percentageChange)}
                    </span>
                  </div>
                </div>

                {/* Important Notice regarding Interest vs Appreciation */}
                <div className="flex items-start gap-2.5 text-[11px] text-zinc-400 leading-relaxed bg-[#171411]/60 p-3 rounded-xl border border-white/5">
                  <Info className="w-4 h-4 text-[#C89B3C] shrink-0 mt-0.5" />
                  <p>
                    <strong>Note:</strong> This reflects <em>Gold Price Change</em> and capital commodity appreciation over time. Gold price appreciation is not financial interest or a guaranteed yield.
                  </p>
                </div>

                {/* Call To Action */}
                <button
                  onClick={handleWhatsAppEnquiry}
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-[#171411] bg-gradient-to-r from-[#C89B3C] via-[#E2B755] to-[#B58428] hover:from-[#B58428] hover:to-[#9A711F] hover:text-white transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire on WhatsApp Regarding This Value</span>
                </button>
              </>
            ) : (
              <div className="py-12 text-center text-zinc-400 text-sm">
                {result.message}
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
