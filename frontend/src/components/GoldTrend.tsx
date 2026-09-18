import React, { useState } from 'react';
import { TrendingUp, BarChart3, Calendar, Sparkles } from 'lucide-react';
import { generateTrendData, TrendDataPoint } from '../data/historicalRates';
import { formatINR } from '../utils/formatCurrency';
import { GoldRates } from '../types';

interface GoldTrendProps {
  rates: GoldRates;
}

type FilterType = '7D' | '30D' | '6M' | '1Y' | '3Y' | '5Y';

export const GoldTrend: React.FC<GoldTrendProps> = ({ rates }) => {
  const [filter, setFilter] = useState<FilterType>('1Y');
  const [activeKarat, setActiveKarat] = useState<'24K' | '22K' | '18K'>('22K');
  const [hoveredPoint, setHoveredPoint] = useState<TrendDataPoint | null>(null);

  const trendPoints = generateTrendData(filter, rates['24K']);

  const getPointValue = (pt: TrendDataPoint) => {
    if (activeKarat === '24K') return pt.rate24k;
    if (activeKarat === '22K') return pt.rate22k;
    return pt.rate18k;
  };

  const values = trendPoints.map(getPointValue);
  const minVal = Math.min(...values);
  const maxVal = Math.max(...values);
  const padding = (maxVal - minVal) * 0.15 || 100;
  const yMin = Math.max(0, Math.floor((minVal - padding) / 100) * 100);
  const yMax = Math.ceil((maxVal + padding) / 100) * 100;

  // Generate SVG path coordinates
  const width = 800;
  const height = 300;
  const leftPad = 60;
  const rightPad = 30;
  const topPad = 30;
  const bottomPad = 40;

  const chartW = width - leftPad - rightPad;
  const chartH = height - topPad - bottomPad;

  const pointsCoords = trendPoints.map((pt, idx) => {
    const x = leftPad + (idx / (trendPoints.length - 1)) * chartW;
    const val = getPointValue(pt);
    const y = topPad + chartH - ((val - yMin) / (yMax - yMin)) * chartH;
    return { x, y, pt, val };
  });

  const pathD = pointsCoords.reduce((acc, curr, idx) => {
    return idx === 0 ? `M ${curr.x} ${curr.y}` : `${acc} L ${curr.x} ${curr.y}`;
  }, '');

  const areaD = `${pathD} L ${pointsCoords[pointsCoords.length - 1].x} ${topPad + chartH} L ${pointsCoords[0].x} ${topPad + chartH} Z`;

  const filters: FilterType[] = ['7D', '30D', '6M', '1Y', '3Y', '5Y'];

  return (
    <section className="py-14 sm:py-20 bg-[#FAF7F0] border-b border-[#C89B3C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8D49E]/40 border border-[#C89B3C]/30 text-xs font-bold text-[#9A711F] mb-3">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>HISTORICAL MARKET MOVEMENTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#171411]">
              Gold Price Trend Analysis
            </h2>
            <p className="text-xs sm:text-sm text-[#241B13]/70 mt-1">
              Track historical and recent gold price movements per gram in Tamil Nadu market.
            </p>
          </div>

          {/* Controls: Karat & Timeframe Filters */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Karat selector */}
            <div className="inline-flex bg-[#F4EFE6] p-1 rounded-xl border border-[#C89B3C]/30">
              {(['24K', '22K', '18K'] as const).map((k) => (
                <button
                  key={k}
                  onClick={() => setActiveKarat(k)}
                  className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    activeKarat === k
                      ? 'bg-[#241B13] text-[#FAF4EA] shadow'
                      : 'text-[#241B13] hover:text-[#9A711F]'
                  }`}
                >
                  {k}
                </button>
              ))}
            </div>

            {/* Timeframe selector */}
            <div className="inline-flex bg-[#F4EFE6] p-1 rounded-xl border border-[#C89B3C]/30">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => {
                    setFilter(f);
                    setHoveredPoint(null);
                  }}
                  className={`px-2.5 sm:px-3 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    filter === f
                      ? 'bg-[#C89B3C] text-[#171411] font-bold shadow'
                      : 'text-[#241B13]/80 hover:text-[#9A711F]'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Chart Canvas Card */}
        <div className="bg-[#FFFFFF] rounded-3xl p-5 sm:p-7 border border-[#C89B3C]/30 shadow-sm relative">
          
          {/* Hover / Current Value Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-zinc-100">
            <div>
              <div className="text-xs text-zinc-500 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#9A711F]" />
                <span>
                  {hoveredPoint ? hoveredPoint.date : `Current ${activeKarat} Rate`}
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#171411]">
                {formatINR(hoveredPoint ? getPointValue(hoveredPoint) : rates[activeKarat])}
                <span className="text-xs font-normal text-zinc-500 ml-1.5">/ gram</span>
              </div>
            </div>

            <div className="text-right text-xs">
              <span className="text-zinc-500">Range: </span>
              <span className="font-semibold text-[#171411]">
                {formatINR(minVal)} – {formatINR(maxVal)}
              </span>
              <div className="text-[11px] text-emerald-700 font-semibold mt-0.5">
                ● High Long-Term Capital Appreciation
              </div>
            </div>
          </div>

          {/* SVG Chart */}
          <div className="w-full overflow-x-auto pt-4">
            <svg
              viewBox={`0 0 ${width} ${height}`}
              className="w-full h-56 sm:h-72 select-none"
            >
              <defs>
                <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#C89B3C" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#C89B3C" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => {
                const y = topPad + chartH * (1 - ratio);
                const val = Math.round(yMin + ratio * (yMax - yMin));
                return (
                  <g key={i}>
                    <line
                      x1={leftPad}
                      y1={y}
                      x2={width - rightPad}
                      y2={y}
                      stroke="#E5E7EB"
                      strokeDasharray="3 3"
                    />
                    <text
                      x={leftPad - 8}
                      y={y + 4}
                      fontSize="10"
                      fill="#9CA3AF"
                      textAnchor="end"
                    >
                      ₹{val}
                    </text>
                  </g>
                );
              })}

              {/* Area Fill */}
              <path d={areaD} fill="url(#goldGradient)" />

              {/* Line Stroke */}
              <path
                d={pathD}
                fill="none"
                stroke="#C89B3C"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Data Points */}
              {pointsCoords.map((pt, idx) => {
                const isHovered = hoveredPoint?.date === pt.pt.date;
                return (
                  <g
                    key={idx}
                    className="cursor-pointer"
                    onMouseEnter={() => setHoveredPoint(pt.pt)}
                  >
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r={isHovered ? 6 : 4}
                      fill={isHovered ? '#241B13' : '#C89B3C'}
                      stroke="#FFFFFF"
                      strokeWidth="2"
                    />
                    <text
                      x={pt.x}
                      y={topPad + chartH + 20}
                      fontSize="10"
                      fill="#6B7280"
                      textAnchor="middle"
                    >
                      {pt.pt.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          <div className="pt-3 flex items-center justify-between text-[11px] text-zinc-400 border-t border-zinc-100">
            <span>Hover or tap data points to inspect historic rates</span>
            <span>Source: Indian Bullion Historical Feeds</span>
          </div>

        </div>

      </div>
    </section>
  );
};
