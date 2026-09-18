/**
 * Validates Indian 10-digit mobile number starting with 6, 7, 8, or 9
 */
export function validateIndianMobile(mobile: string): { isValid: boolean; message?: string } {
  const cleaned = mobile.replace(/[\s\-+]/g, '');
  
  // Handle with +91 or 91 prefix
  let standardDigits = cleaned;
  if (cleaned.startsWith('91') && cleaned.length === 12) {
    standardDigits = cleaned.slice(2);
  } else if (cleaned.startsWith('0') && cleaned.length === 11) {
    standardDigits = cleaned.slice(1);
  }

  if (!standardDigits) {
    return { isValid: false, message: 'Mobile number is required' };
  }

  const indianMobileRegex = /^[6-9]\d{9}$/;
  if (!indianMobileRegex.test(standardDigits)) {
    return { isValid: false, message: 'Please enter a valid 10-digit Indian mobile number (starts with 6-9)' };
  }

  return { isValid: true };
}

/**
 * Validates customer name
 */
export function validateName(name: string): { isValid: boolean; message?: string } {
  const trimmed = name.trim();
  if (!trimmed) {
    return { isValid: false, message: 'Name is required' };
  }
  if (trimmed.length < 2) {
    return { isValid: false, message: 'Name must be at least 2 characters' };
  }
  return { isValid: true };
}

/**
 * Validates gold weight
 */
export function validateWeight(weight: number | string | ''): { isValid: boolean; message?: string } {
  const num = typeof weight === 'string' ? parseFloat(weight) : weight;
  if (!num || isNaN(num) || num <= 0) {
    return { isValid: false, message: 'Please enter a valid gold weight (grams)' };
  }
  if (num > 50000) {
    return { isValid: false, message: 'For bulk gold evaluation over 50kg, please contact our head office directly' };
  }
  return { isValid: true };
}
