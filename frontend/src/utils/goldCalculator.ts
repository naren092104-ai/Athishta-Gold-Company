import { HISTORICAL_GOLD_RATES_INDIA } from '../data/historicalRates';
import { GoldRates } from '../types';

export interface CalculationResult {
  grossWeight: number;
  purity: '24K' | '22K' | '18K';
  applicableRate: number;
  estimatedValue: number;
  indicativePurityPercent: string;
}

export function calculateGoldValue(
  weightGrams: number,
  purity: '24K' | '22K' | '18K',
  rates: GoldRates
): CalculationResult {
  const rate = rates[purity] || 0;
  const estimatedValue = Math.round(weightGrams * rate);
  const indicativePurityPercent = purity === '24K' ? '99.9%' : purity === '22K' ? '91.6%' : '75.0%';

  return {
    grossWeight: weightGrams,
    purity,
    applicableRate: rate,
    estimatedValue,
    indicativePurityPercent
  };
}

export interface ValueChangeResult {
  purchaseYear: number;
  purity: '24K' | '22K' | '18K';
  weight: number;
  purchaseRate: number;
  currentRate: number;
  purchaseValue: number;
  currentValue: number;
  appreciationAmount: number;
  percentageChange: number;
  multiplier: number;
  isAvailable: boolean;
  message?: string;
}

export function calculateGoldValueChange(
  purchaseYear: number,
  purity: '24K' | '22K' | '18K',
  weight: number,
  currentRates: GoldRates
): ValueChangeResult {
  const historical = HISTORICAL_GOLD_RATES_INDIA.find(item => item.year === purchaseYear);

  if (!historical) {
    return {
      purchaseYear,
      purity,
      weight,
      purchaseRate: 0,
      currentRate: currentRates[purity] || 0,
      purchaseValue: 0,
      currentValue: 0,
      appreciationAmount: 0,
      percentageChange: 0,
      multiplier: 0,
      isAvailable: false,
      message: 'Historical data is currently unavailable from the selected data provider for this year.'
    };
  }

  // Derive historical rate based on purity
  let histRate = historical.rate24kPerGram;
  if (purity === '22K') {
    histRate = historical.rate22kPerGram || Math.round(historical.rate24kPerGram * 0.916);
  } else if (purity === '18K') {
    histRate = Math.round(historical.rate24kPerGram * 0.75);
  }

  const currRate = currentRates[purity] || 0;
  const purchaseVal = Math.round(weight * histRate);
  const currentVal = Math.round(weight * currRate);
  const appreciation = currentVal - purchaseVal;
  const percent = histRate > 0 ? ((currRate - histRate) / histRate) * 100 : 0;
  const multiplier = histRate > 0 ? (currRate / histRate) : 1;

  return {
    purchaseYear,
    purity,
    weight,
    purchaseRate: histRate,
    currentRate: currRate,
    purchaseValue: purchaseVal,
    currentValue: currentVal,
    appreciationAmount: appreciation,
    percentageChange: percent,
    multiplier: parseFloat(multiplier.toFixed(1)),
    isAvailable: true
  };
}
