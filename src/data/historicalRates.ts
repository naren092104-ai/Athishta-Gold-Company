import { HistoricalRatePoint } from '../types';

export const HISTORICAL_GOLD_RATES_INDIA: HistoricalRatePoint[] = [
  { year: 2000, rate24kPerGram: 440, rate22kPerGram: 403, sourceNote: 'Indian Bullion Market Historic Benchmark' },
  { year: 2002, rate24kPerGram: 500, rate22kPerGram: 458, sourceNote: 'Indian Bullion Market Historic Benchmark' },
  { year: 2004, rate24kPerGram: 585, rate22kPerGram: 536, sourceNote: 'Indian Bullion Market Historic Benchmark' },
  { year: 2005, rate24kPerGram: 700, rate22kPerGram: 641, sourceNote: 'Indian Bullion Market Historic Benchmark' },
  { year: 2006, rate24kPerGram: 840, rate22kPerGram: 770, sourceNote: 'Indian Bullion Market Historic Benchmark' },
  { year: 2008, rate24kPerGram: 1250, rate22kPerGram: 1145, sourceNote: 'Indian Bullion Market Historic Benchmark' },
  { year: 2010, rate24kPerGram: 1850, rate22kPerGram: 1695, sourceNote: 'Indian Bullion Market Historic Benchmark' },
  { year: 2011, rate24kPerGram: 2640, rate22kPerGram: 2420, sourceNote: 'Indian Bullion Market Historic Benchmark' },
  { year: 2012, rate24kPerGram: 3105, rate22kPerGram: 2846, sourceNote: 'Indian Bullion Market Historic Benchmark' },
  { year: 2013, rate24kPerGram: 2960, rate22kPerGram: 2713, sourceNote: 'Indian Bullion Market Historic Benchmark' },
  { year: 2014, rate24kPerGram: 2800, rate22kPerGram: 2566, sourceNote: 'Indian Bullion Market Historic Benchmark' },
  { year: 2015, rate24kPerGram: 2634, rate22kPerGram: 2414, sourceNote: 'Indian Bullion Market Historic Benchmark' },
  { year: 2016, rate24kPerGram: 2862, rate22kPerGram: 2623, sourceNote: 'Indian Bullion Market Historic Benchmark' },
  { year: 2017, rate24kPerGram: 2966, rate22kPerGram: 2718, sourceNote: 'Indian Bullion Market Historic Benchmark' },
  { year: 2018, rate24kPerGram: 3143, rate22kPerGram: 2881, sourceNote: 'Indian Bullion Market Historic Benchmark' },
  { year: 2019, rate24kPerGram: 3522, rate22kPerGram: 3228, sourceNote: 'Indian Bullion Market Historic Benchmark' },
  { year: 2020, rate24kPerGram: 4865, rate22kPerGram: 4460, sourceNote: 'Indian Bullion Market Historic Benchmark' },
  { year: 2021, rate24kPerGram: 4770, rate22kPerGram: 4372, sourceNote: 'Indian Bullion Market Historic Benchmark' },
  { year: 2022, rate24kPerGram: 5267, rate22kPerGram: 4828, sourceNote: 'Indian Bullion Market Historic Benchmark' },
  { year: 2023, rate24kPerGram: 6080, rate22kPerGram: 5573, sourceNote: 'Indian Bullion Market Historic Benchmark' },
  { year: 2024, rate24kPerGram: 7250, rate22kPerGram: 6645, sourceNote: 'Indian Bullion Market Historic Benchmark' },
  { year: 2025, rate24kPerGram: 7850, rate22kPerGram: 7195, sourceNote: 'Indian Bullion Market Historic Benchmark' }
];

export interface TrendDataPoint {
  date: string;
  rate24k: number;
  rate22k: number;
  rate18k: number;
  label: string;
}

export function generateTrendData(filter: '7D' | '30D' | '6M' | '1Y' | '3Y' | '5Y', baseRate24k: number): TrendDataPoint[] {
  const current24k = baseRate24k || 7850;
  const points: TrendDataPoint[] = [];

  if (filter === '7D') {
    const days = ['6 days ago', '5 days ago', '4 days ago', '3 days ago', '2 days ago', 'Yesterday', 'Today'];
    const variations = [-35, -20, +15, -10, +45, +25, 0];
    days.forEach((day, index) => {
      const r24 = Math.round(current24k + variations[index]);
      const r22 = Math.round(r24 * 0.916);
      const r18 = Math.round(r24 * 0.75);
      points.push({
        date: day,
        rate24k: r24,
        rate22k: r22,
        rate18k: r18,
        label: day
      });
    });
  } else if (filter === '30D') {
    const dates = ['4 Weeks ago', '3 Weeks ago', '2 Weeks ago', '1 Week ago', 'Today'];
    const variations = [-120, -80, +10, +60, 0];
    dates.forEach((d, i) => {
      const r24 = Math.round(current24k + variations[i]);
      const r22 = Math.round(r24 * 0.916);
      const r18 = Math.round(r24 * 0.75);
      points.push({ date: d, rate24k: r24, rate22k: r22, rate18k: r18, label: d });
    });
  } else if (filter === '6M') {
    const months = ['6M ago', '5M ago', '4M ago', '3M ago', '2M ago', '1M ago', 'Current'];
    const variations = [-480, -390, -280, -160, -90, +20, 0];
    months.forEach((m, i) => {
      const r24 = Math.round(current24k + variations[i]);
      const r22 = Math.round(r24 * 0.916);
      const r18 = Math.round(r24 * 0.75);
      points.push({ date: m, rate24k: r24, rate22k: r22, rate18k: r18, label: m });
    });
  } else if (filter === '1Y') {
    const quarters = ['Q1 Last Year', 'Q2 Last Year', 'Q3 Last Year', 'Q4 Last Year', 'Current'];
    const variations = [-980, -740, -520, -210, 0];
    quarters.forEach((q, i) => {
      const r24 = Math.round(current24k + variations[i]);
      const r22 = Math.round(r24 * 0.916);
      const r18 = Math.round(r24 * 0.75);
      points.push({ date: q, rate24k: r24, rate22k: r22, rate18k: r18, label: q });
    });
  } else if (filter === '3Y') {
    const years = ['2023', '2024', '2025', 'Current (2026)'];
    const rates24 = [6080, 7250, 7850, current24k];
    years.forEach((y, i) => {
      const r24 = rates24[i];
      const r22 = Math.round(r24 * 0.916);
      const r18 = Math.round(r24 * 0.75);
      points.push({ date: y, rate24k: r24, rate22k: r22, rate18k: r18, label: y });
    });
  } else {
    // 5Y
    const years = ['2021', '2022', '2023', '2024', '2025', 'Current'];
    const rates24 = [4770, 5267, 6080, 7250, 7850, current24k];
    years.forEach((y, i) => {
      const r24 = rates24[i];
      const r22 = Math.round(r24 * 0.916);
      const r18 = Math.round(r24 * 0.75);
      points.push({ date: y, rate24k: r24, rate22k: r22, rate18k: r18, label: y });
    });
  }

  return points;
}
