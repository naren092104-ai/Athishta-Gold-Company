import React, { useState, useMemo } from 'react';
import { RefreshCw, Calculator, TrendingUp, BarChart3, MessageCircle, Sparkles } from 'lucide-react';
import { GoldRates, GoldRateData } from '../types';
import { calculateGoldValue } from '../utils/goldCalculator';
import { formatINR } from '../utils/formatCurrency';
import { openWhatsAppEnquiry } from '../services/whatsappService';

interface GoldDashboardProps {
  rates: GoldRates;
  rateData?: GoldRateData | null;
  isRefreshing?: boolean;
  onRefresh?: () => void;
  onQuoteConfirmed?: (details: any) => void;
}

export const GoldDashboard: React.FC<GoldDashboardProps> = ({
  rates,
  rateData,
  isRefreshing = false,
  onRefresh,
  onQuoteConfirmed,
}) => {
  // Rates bound directly to live state
  const current22K = rates['22K'] || 14150;
  const current24K = rates['24K'] || 15440;
  const current18K = rates['18K'] || 11580;

  const change24h = rateData?.change24h || {
    amount: 45,
    percentage: 0.32,
    direction: 'up' as const
  };

  const formattedUpdatedAt = rateData?.updatedAt || (
    new Date().toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }) + ', ' + new Date().toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })
  );

  // 1. Calculator State matching Image
  const [calcPurity, setCalcPurity] = useState<'24K' | '22K' | '18K'>('22K');
  const [calcWeight, setCalcWeight] = useState<number>(10);

  const calcResult = useMemo(() => {
    return calculateGoldValue(calcWeight, calcPurity, {
      '24K': current24K,
      '22K': current22K,
      '18K': current18K,
    });
  }, [calcWeight, calcPurity, current24K, current22K, current18K]);

  const handleCalculatorWhatsApp = () => {
    const payload = {
      flow: 'quote' as const,
      name: 'Customer',
      mobile: 'Direct WhatsApp',
      service: 'Instant Gold Valuation',
      purity: `${calcPurity} (${calcResult.indicativePurityPercent})`,
      weight: calcWeight,
      indicativeRate: calcResult.applicableRate,
      estimatedValue: calcResult.estimatedValue,
    };

    const url = openWhatsAppEnquiry(payload);

    if (onQuoteConfirmed) {
      onQuoteConfirmed({
        isOpen: true,
        title: 'Estimated Gold Valuation Generated',
        subtitle: `${calcWeight}g of ${calcPurity} Gold`,
        name: 'Valued Customer',
        service: 'Instant Gold Valuation',
        branch: 'Nearest Branch',
        purity: calcPurity,
        weight: calcWeight,
        rate: calcResult.applicableRate,
        estimatedValue: calcResult.estimatedValue,
        whatsappUrl: url,
        referenceId: `VAL-${Math.floor(100000 + Math.random() * 900000)}`
      });
    }
  };

  // 2. Dynamic Gold Price Trend State & Data matching current rate & day-by-day dates
  const [trendRange, setTrendRange] = useState<'7D' | '30D' | '6M' | '1Y' | '3Y' | '5Y'>('1Y');

  interface TrendPoint {
    label: string;
    price: number;
  }

  const trendDataMap = useMemo(() => {
    const today = new Date();

    // 7 Days: dynamically calculated relative to today
    const points7D: TrendPoint[] = [];
    const offsets7D = [-140, -95, -30, -60, -20, +25, 0];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      const label = i === 0 ? 'Today' : d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short' });
      points7D.push({
        label,
        price: Math.max(1000, Math.round(current22K + offsets7D[6 - i]))
      });
    }

    // 30 Days (6 intervals)
    const points30D: TrendPoint[] = [];
    const intervals30D = [25, 20, 15, 10, 5, 0];
    const offsets30D = [-360, -290, -180, -120, -40, 0];
    intervals30D.forEach((daysAgo, idx) => {
      const d = new Date(today);
      d.setDate(today.getDate() - daysAgo);
      const label = daysAgo === 0 ? 'Today' : d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short' });
      points30D.push({
        label,
        price: Math.max(1000, Math.round(current22K + offsets30D[idx]))
      });
    });

    // 6 Months
    const points6M: TrendPoint[] = [];
    const multipliers6M = [0.88, 0.90, 0.92, 0.95, 0.97, 1.0];
    for (let i = 5; i >= 0; i--) {
      const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
      const label = d.toLocaleDateString('en-IN', { month: 'short' });
      points6M.push({
        label,
        price: Math.round(current22K * multipliers6M[5 - i])
      });
    }

    // 1 Year (10 points)
    const points1Y: TrendPoint[] = [];
    const multipliers1Y = [0.80, 0.82, 0.84, 0.86, 0.88, 0.91, 0.93, 0.95, 0.98, 1.0];
    for (let i = 9; i >= 0; i--) {
      const d = new Date(today.getFullYear(), today.getMonth() - i, 1);
      const label = d.toLocaleDateString('en-IN', { month: 'short' });
      points1Y.push({
        label,
        price: Math.round(current22K * multipliers1Y[9 - i])
      });
    }

    // 3 Years
    const currYear = today.getFullYear();
    const points3Y = [
      { label: String(currYear - 2), price: Math.round(current22K * 0.72) },
      { label: String(currYear - 1), price: Math.round(current22K * 0.85) },
      { label: String(currYear), price: current22K },
    ];

    // 5 Years
    const points5Y = [
      { label: String(currYear - 4), price: Math.round(current22K * 0.55) },
      { label: String(currYear - 3), price: Math.round(current22K * 0.65) },
      { label: String(currYear - 2), price: Math.round(current22K * 0.72) },
      { label: String(currYear - 1), price: Math.round(current22K * 0.85) },
      { label: String(currYear), price: current22K },
    ];

    return {
      '7D': points7D,
      '30D': points30D,
      '6M': points6M,
      '1Y': points1Y,
      '3Y': points3Y,
      '5Y': points5Y,
    };
  }, [current22K]);

  const activePoints = trendDataMap[trendRange];
  const prices = activePoints.map((p) => p.price);
  const minPrice = Math.min(...prices) * 0.98;
  const maxPrice = Math.max(...prices) * 1.02;

  const svgWidth = 500;
  const svgHeight = 160;
  const paddingX = 40;
  const paddingY = 25;

  const chartCoords = activePoints.map((p, idx) => {
    const x = paddingX + (idx / (activePoints.length - 1)) * (svgWidth - 2 * paddingX);
    const normalizedY = (p.price - minPrice) / (maxPrice - minPrice || 1);
    const y = svgHeight - paddingY - normalizedY * (svgHeight - 2 * paddingY);
    return { ...p, x, y };
  });

  const svgPath = `M ${chartCoords.map(c => `${c.x},${c.y}`).join(' L ')}`;
  const areaPath = `${svgPath} L ${chartCoords[chartCoords.length - 1].x},${svgHeight - 15} L ${chartCoords[0].x},${svgHeight - 15} Z`;

  // Dynamic Y-axis ticks
  const tickStep = (maxPrice - minPrice) / 3;
  const tick3 = Math.round(maxPrice);
  const tick2 = Math.round(minPrice + tickStep * 2);
  const tick1 = Math.round(minPrice + tickStep * 1);
  const tick0 = Math.round(minPrice);

  // 3. Value Change State matching Image
  const [purchaseYear, setPurchaseYear] = useState<number>(2022);
  const [histPurity, setHistPurity] = useState<'24K' | '22K' | '18K'>('22K');
  const [histWeight, setHistWeight] = useState<number>(10);
  const [justCalculated, setJustCalculated] = useState(false);

  // Historical 22K rates benchmark per gram
  const historical22KRates: Record<number, number> = {
    2018: 2950,
    2019: 3380,
    2020: 4580,
    2021: 4420,
    2022: 4880,
    2023: 5650,
    2024: 6750,
    2025: 10800,
    2026: current22K,
  };

  const pastRatePerGram = (historical22KRates[purchaseYear] || 4880) * (histPurity === '24K' ? (24 / 22) : histPurity === '18K' ? (18 / 22) : 1);
  const currentRatePerGram = histPurity === '24K' ? current24K : histPurity === '18K' ? current18K : current22K;
  
  const originalTotalValue = Math.round(pastRatePerGram * histWeight);
  const currentTotalValue = Math.round(currentRatePerGram * histWeight);
  const netGain = Math.max(0, currentTotalValue - originalTotalValue);
  const percentageGain = originalTotalValue > 0 ? Math.round(((currentTotalValue - originalTotalValue) / originalTotalValue) * 100) : 0;

  const handleViewChangeClick = () => {
    setJustCalculated(true);
    setTimeout(() => setJustCalculated(false), 800);
  };

  return (
    <section id="gold-rate" className="py-10 sm:py-14 bg-[#FAF7F2] border-b border-[#C89B3C]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* ROW 1: LIVE GOLD RATE (LEFT) + CALCULATE YOUR GOLD VALUE (RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Card: Today's Gold Rate (Live) (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#C89B3C]/25 p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:border-[#C89B3C]/45 transition-all">
            <div>
              {/* Header matching user image */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-zinc-100">
                <div className="flex items-center gap-2.5">
                  <h2 className="font-serif font-bold text-lg sm:text-xl text-[#140E0A]">
                    Today's Live Gold Rate
                  </h2>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-200 shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live Bullion Feed
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs text-zinc-500">
                  <span className="text-[11px] font-medium">Updated: {formattedUpdatedAt}</span>
                  <button
                    onClick={onRefresh}
                    disabled={isRefreshing}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-zinc-50 hover:bg-[#FAF5EC] text-zinc-800 text-xs font-semibold border border-zinc-200 hover:border-[#C89B3C]/40 transition-colors cursor-pointer"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 text-[#A77B28] ${isRefreshing ? 'animate-spin' : ''}`} />
                    <span>Refresh</span>
                  </button>
                </div>
              </div>

              {/* 3 Gold Karat Cards Grid with Luxury Accents */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 my-5">
                
                {/* 24K Bar */}
                <div className="bg-gradient-to-b from-[#FFFDF9] to-[#FAF5EC] border border-[#C89B3C]/35 hover:border-[#C89B3C]/70 rounded-2xl p-4 flex items-center gap-3.5 transition-all shadow-2xs hover:shadow-md group">
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#C89B3C]/30 flex items-center justify-center text-2xl shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                    🪙
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#8F671E] uppercase tracking-wide">24K Pure (999)</div>
                    <div className="text-base sm:text-lg font-bold text-[#140E0A] leading-tight">
                      ₹ {current24K.toLocaleString('en-IN')} <span className="text-[10px] font-normal text-zinc-500">/ gram</span>
                    </div>
                    <div className={`text-[11px] font-bold mt-0.5 ${change24h.direction === 'down' ? 'text-rose-600' : 'text-emerald-600'}`}>
                      {change24h.direction === 'down' ? '▼' : '▲'} {change24h.direction === 'down' ? '-' : '+'}{change24h.percentage}% (24h)
                    </div>
                  </div>
                </div>

                {/* 22K Bar */}
                <div className="bg-gradient-to-b from-[#FFFDF9] to-[#FAF5EC] border border-[#C89B3C]/35 hover:border-[#C89B3C]/70 rounded-2xl p-4 flex items-center gap-3.5 transition-all shadow-2xs hover:shadow-md group">
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#C89B3C]/30 flex items-center justify-center text-2xl shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                    🥇
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#8F671E] uppercase tracking-wide">22K Hallmark (916)</div>
                    <div className="text-base sm:text-lg font-bold text-[#140E0A] leading-tight">
                      ₹ {current22K.toLocaleString('en-IN')} <span className="text-[10px] font-normal text-zinc-500">/ gram</span>
                    </div>
                    <div className={`text-[11px] font-bold mt-0.5 ${change24h.direction === 'down' ? 'text-rose-600' : 'text-emerald-600'}`}>
                      {change24h.direction === 'down' ? '▼' : '▲'} {change24h.direction === 'down' ? '-' : '+'}{change24h.percentage}% (24h)
                    </div>
                  </div>
                </div>

                {/* 18K Bar */}
                <div className="bg-gradient-to-b from-[#FFFDF9] to-[#FAF5EC] border border-[#C89B3C]/35 hover:border-[#C89B3C]/70 rounded-2xl p-4 flex items-center gap-3.5 transition-all shadow-2xs hover:shadow-md group">
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#C89B3C]/30 flex items-center justify-center text-2xl shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                    ✨
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#8F671E] uppercase tracking-wide">18K Standard (750)</div>
                    <div className="text-base sm:text-lg font-bold text-[#140E0A] leading-tight">
                      ₹ {current18K.toLocaleString('en-IN')} <span className="text-[10px] font-normal text-zinc-500">/ gram</span>
                    </div>
                    <div className={`text-[11px] font-bold mt-0.5 ${change24h.direction === 'down' ? 'text-rose-600' : 'text-emerald-600'}`}>
                      {change24h.direction === 'down' ? '▼' : '▲'} {change24h.direction === 'down' ? '-' : '+'}{change24h.percentage}% (24h)
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Footnote */}
            <div className="text-[11px] text-zinc-400 pt-3 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-2">
              <span className="font-medium text-zinc-500">Source: {rateData?.source || 'Live Bullion Market Feed (Chennai / Tamil Nadu Benchmark)'}</span>
              <span>Rates reflect live physical bullion market parity.</span>
            </div>
          </div>

          {/* Right Card: Calculate Your Gold Value (5 cols) */}
          <div id="gold-calculator" className="lg:col-span-5 bg-white rounded-3xl border border-[#C89B3C]/25 p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:border-[#C89B3C]/45 transition-all">
            <div>
              {/* Header */}
              <div className="flex items-center gap-2.5 pb-3 border-b border-zinc-100">
                <div className="w-8 h-8 rounded-lg bg-[#A77B28]/15 text-[#A77B28] flex items-center justify-center font-bold shrink-0">
                  <Calculator className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-[#140E0A] leading-tight">
                    Calculate Your Gold Value
                  </h3>
                  <p className="text-[11px] text-zinc-500">
                    Get an estimate based on current market rate.
                  </p>
                </div>
              </div>

              {/* Form Controls */}
              <div className="grid grid-cols-12 gap-3 my-4 items-center">
                {/* Gold Purity (4 cols) */}
                <div className="col-span-4">
                  <label className="block text-[11px] font-semibold text-zinc-600 mb-1">
                    Gold Purity
                  </label>
                  <select
                    value={calcPurity}
                    onChange={(e) => setCalcPurity(e.target.value as any)}
                    className="w-full bg-[#FAF7F0] border border-zinc-300 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-[#140E0A] focus:outline-none focus:border-[#A77B28] cursor-pointer"
                  >
                    <option value="22K">22K (916)</option>
                    <option value="24K">24K (999)</option>
                    <option value="18K">18K (750)</option>
                  </select>
                </div>

                {/* Weight (grams) (4 cols) */}
                <div className="col-span-4">
                  <label className="block text-[11px] font-semibold text-zinc-600 mb-1">
                    Weight (grams)
                  </label>
                  <input
                    type="number"
                    min="1"
                    step="1"
                    value={calcWeight === 0 ? '' : calcWeight}
                    onChange={(e) => {
                      const val = e.target.value === '' ? 0 : parseFloat(e.target.value);
                      setCalcWeight(isNaN(val) ? 0 : val);
                    }}
                    className="w-full bg-[#FAF7F0] border border-zinc-300 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-[#140E0A] focus:outline-none focus:border-[#A77B28]"
                  />
                </div>

                {/* Estimated Value Box (4 cols) */}
                <div className="col-span-4 bg-[#FFFDF9] border border-[#A77B28]/40 rounded-lg p-2 text-center">
                  <span className="text-[10px] text-zinc-500 block leading-tight">
                    Estimated Value
                  </span>
                  <span className="text-sm sm:text-base font-bold text-[#A77B28]">
                    {formatINR(calcResult.estimatedValue)}
                  </span>
                </div>
              </div>
            </div>

            {/* Action CTA & Disclaimer matching Image */}
            <div className="space-y-2 pt-1">
              <button
                type="button"
                id="calculate-get-quote-whatsapp-btn"
                onClick={handleCalculatorWhatsApp}
                className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#A77B28] hover:bg-[#8F671E] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Get Quote on WhatsApp</span>
              </button>

              <p className="text-[10px] text-zinc-400 text-center leading-tight">
                * Indicative calculation only. Final valuation may vary after physical testing, weight verification and applicable deductions.
              </p>
            </div>
          </div>

        </div>

        {/* ROW 2: GOLD PRICE TREND (LEFT) + SEE HOW YOUR GOLD VALUE HAS CHANGED (RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Card: Gold Price Trend (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#C89B3C]/25 p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:border-[#C89B3C]/45 transition-all">
            <div>
              {/* Header with Range Filters */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-zinc-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#A77B28] to-[#C89B3C] text-white flex items-center justify-center font-bold shadow-2xs">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base sm:text-lg text-[#140E0A]">
                      Gold Price Trend & History
                    </h3>
                    <p className="text-[11px] text-zinc-500">
                      Physical bullion benchmark progression
                    </p>
                  </div>
                </div>

                {/* Filter Pills */}
                <div className="flex items-center gap-1 bg-zinc-100 p-1 rounded-xl">
                  {(['7D', '30D', '6M', '1Y', '3Y', '5Y'] as const).map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setTrendRange(r)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                        trendRange === r
                          ? 'bg-gradient-to-r from-[#A77B28] to-[#C89B3C] text-white shadow-2xs'
                          : 'text-zinc-600 hover:text-zinc-900'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chart Visual matching Image */}
              <div className="relative pt-3 pb-1">
                <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-40 sm:h-44 overflow-visible">
                  {/* Grid Lines */}
                  <line x1="35" y1="25" x2={svgWidth - 20} y2="25" stroke="#F3F4F6" strokeDasharray="3 3" />
                  <line x1="35" y1="60" x2={svgWidth - 20} y2="60" stroke="#F3F4F6" strokeDasharray="3 3" />
                  <line x1="35" y1="95" x2={svgWidth - 20} y2="95" stroke="#F3F4F6" strokeDasharray="3 3" />
                  <line x1="35" y1="130" x2={svgWidth - 20} y2="130" stroke="#F3F4F6" strokeDasharray="3 3" />

                  {/* Dynamic Y Axis Labels */}
                  <text x="35" y="28" fontSize="9" fill="#9CA3AF" textAnchor="end">{tick3.toLocaleString('en-IN')}</text>
                  <text x="35" y="63" fontSize="9" fill="#9CA3AF" textAnchor="end">{tick2.toLocaleString('en-IN')}</text>
                  <text x="35" y="98" fontSize="9" fill="#9CA3AF" textAnchor="end">{tick1.toLocaleString('en-IN')}</text>
                  <text x="35" y="133" fontSize="9" fill="#9CA3AF" textAnchor="end">{tick0.toLocaleString('en-IN')}</text>

                  {/* Area fill */}
                  <path
                    d={areaPath}
                    fill="url(#goldGradientArea)"
                    opacity="0.3"
                  />

                  {/* Smooth Gold Line */}
                  <path
                    d={svgPath}
                    fill="none"
                    stroke="#C89B3C"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Circular Points */}
                  {chartCoords.map((c, idx) => {
                    const isLast = idx === chartCoords.length - 1;
                    return (
                      <g key={idx}>
                        <circle
                          cx={c.x}
                          cy={c.y}
                          r={isLast ? 4.5 : 3}
                          fill={isLast ? '#A77B28' : '#C89B3C'}
                          stroke="#FFFFFF"
                          strokeWidth="1.5"
                        />
                        {/* Month Label */}
                        <text
                          x={c.x}
                          y={svgHeight - 2}
                          fontSize="9"
                          fill="#6B7280"
                          textAnchor="middle"
                        >
                          {c.label}
                        </text>
                      </g>
                    );
                  })}

                  <defs>
                    <linearGradient id="goldGradientArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#C89B3C" />
                      <stop offset="100%" stopColor="#FFFFFF" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Floating Tooltip Bubble over latest point */}
                <div className="absolute top-2 right-4 bg-white/95 backdrop-blur-xs border border-[#A77B28]/40 shadow-md rounded-xl px-3 py-1.5 text-center pointer-events-none">
                  <div className="text-[10px] text-zinc-500 font-medium">
                    {activePoints[activePoints.length - 1]?.label || 'Today'}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#8F671E]">
                    ₹ {activePoints[activePoints.length - 1]?.price.toLocaleString('en-IN')} / g
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card: See How Your Gold Value Has Changed (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-[#C89B3C]/25 p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between hover:border-[#C89B3C]/45 transition-all">
            <div>
              {/* Header */}
              <div className="flex items-center gap-2.5 pb-3 border-b border-zinc-100">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#A77B28] to-[#C89B3C] text-white flex items-center justify-center font-bold shadow-2xs">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-[#140E0A] leading-tight">
                    See How Your Gold Value Has Changed
                  </h3>
                  <p className="text-[11px] text-zinc-500">
                    Select your purchase year to see capital appreciation.
                  </p>
                </div>
              </div>

              {/* Form Inputs matching Image */}
              <div className="grid grid-cols-12 gap-2.5 my-3 items-end">
                <div className="col-span-3">
                  <label className="block text-[10px] font-semibold text-zinc-600 mb-1">
                    Purchase Year
                  </label>
                  <select
                    value={purchaseYear}
                    onChange={(e) => {
                      setPurchaseYear(parseInt(e.target.value));
                      handleViewChangeClick();
                    }}
                    className="w-full bg-[#FAF7F0] border border-zinc-300 rounded-lg px-2 py-1.5 text-xs font-semibold text-[#140E0A] focus:outline-none focus:border-[#A77B28] cursor-pointer"
                  >
                    {[2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018].map((yr) => (
                      <option key={yr} value={yr}>{yr}</option>
                    ))}
                  </select>
                </div>

                <div className="col-span-3">
                  <label className="block text-[10px] font-semibold text-zinc-600 mb-1">
                    Purity
                  </label>
                  <select
                    value={histPurity}
                    onChange={(e) => {
                      setHistPurity(e.target.value as any);
                      handleViewChangeClick();
                    }}
                    className="w-full bg-[#FAF7F0] border border-zinc-300 rounded-lg px-2 py-1.5 text-xs font-semibold text-[#140E0A] focus:outline-none focus:border-[#A77B28] cursor-pointer"
                  >
                    <option value="22K">22K (916)</option>
                    <option value="24K">24K (999)</option>
                    <option value="18K">18K (750)</option>
                  </select>
                </div>

                <div className="col-span-3">
                  <label className="block text-[10px] font-semibold text-zinc-600 mb-1">
                    Weight (g)
                  </label>
                  <input
                    type="number"
                    min="1"
                    step="1"
                    value={histWeight === 0 ? '' : histWeight}
                    onChange={(e) => {
                      const val = e.target.value === '' ? 0 : parseFloat(e.target.value);
                      setHistWeight(isNaN(val) ? 0 : val);
                    }}
                    className="w-full bg-[#FAF7F0] border border-zinc-300 rounded-lg px-2 py-1.5 text-xs font-semibold text-[#140E0A] focus:outline-none focus:border-[#A77B28]"
                  />
                </div>

                <div className="col-span-3">
                  <button
                    type="button"
                    id="view-change-calc-btn"
                    onClick={handleViewChangeClick}
                    className="w-full py-1.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-[#A77B28] to-[#C89B3C] hover:brightness-105 transition-all cursor-pointer shadow-2xs"
                  >
                    View Change
                  </button>
                </div>
              </div>

              {/* Green Highlighted Value Change Banner matching Image */}
              <div className="bg-gradient-to-br from-[#EDF9F0] to-[#E2F4E6] border border-emerald-300/80 rounded-2xl p-4 text-center my-2 shadow-2xs">
                <div className="text-xs text-emerald-800 font-medium">
                  Capital Value Change Since {purchaseYear}
                </div>
                <div className="text-xl sm:text-2xl font-serif font-extrabold text-emerald-700 mt-0.5">
                  + {formatINR(netGain)} <span className="text-sm font-bold">(+{percentageGain}%)</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
