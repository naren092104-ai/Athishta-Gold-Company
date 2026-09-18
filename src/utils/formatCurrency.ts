/**
 * Formats numbers into Indian Rupee format (e.g. ₹1,57,000 or ₹7,850)
 */
export function formatINR(amount: number | undefined | null, includeSymbol: boolean = true): string {
  if (amount === undefined || amount === null || isNaN(amount)) {
    return includeSymbol ? '₹0' : '0';
  }

  const rounded = Math.round(amount);
  const formatted = new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: 0,
    style: 'decimal'
  }).format(rounded);

  return includeSymbol ? `₹${formatted}` : formatted;
}

/**
 * Formats rate per gram with rupee symbol
 */
export function formatRatePerGram(rate: number | undefined | null): string {
  if (!rate || isNaN(rate)) return '₹--/g';
  return `${formatINR(rate)}/g`;
}

/**
 * Formats percentage with sign
 */
export function formatPercentage(percent: number): string {
  if (isNaN(percent)) return '0%';
  const sign = percent > 0 ? '+' : '';
  return `${sign}${percent.toFixed(1)}%`;
}
