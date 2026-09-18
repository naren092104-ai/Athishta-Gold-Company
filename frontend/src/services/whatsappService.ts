import { COMPANY_WHATSAPP } from '../data/branches';
import { formatINR } from '../utils/formatCurrency';

export interface WhatsAppPayload {
  flow: 'selling' | 'buying' | 'pawn_redemption' | 'doorstep' | 'branch_enquiry' | 'general' | 'quote';
  name: string;
  mobile: string;
  location?: string;
  service?: string;
  purity?: string;
  weight?: number | string;
  branch?: string;
  indicativeRate?: number;
  estimatedValue?: number;
  doorstepLocation?: string;
  doorstepDate?: string;
  doorstepTime?: string;
  notes?: string;
}

export function generateWhatsAppMessage(payload: WhatsAppPayload): string {
  const {
    flow,
    name,
    mobile,
    location,
    service = 'Gold Buying Service',
    purity = '22K / 916',
    weight,
    branch = 'Lakshmangudi (Head Office)',
    indicativeRate,
    estimatedValue,
    doorstepLocation,
    doorstepDate,
    doorstepTime,
    notes
  } = payload;

  let headerIntro = 'I would like to enquire about selling my gold.';
  if (flow === 'buying') {
    headerIntro = 'I would like to enquire about purchasing certified 916/999 gold jewellery.';
  } else if (flow === 'pawn_redemption') {
    headerIntro = 'I would like assistance with releasing my pledged gold from a bank/pawn broker.';
  } else if (flow === 'doorstep') {
    headerIntro = 'I would like to book a Doorstep Gold Evaluation at my home in Tamil Nadu.';
  } else if (flow === 'branch_enquiry') {
    headerIntro = `I would like to enquire about visiting your ${branch} branch.`;
  } else if (flow === 'quote') {
    headerIntro = 'I calculated my gold valuation on your website and would like an official quote.';
  }

  const lines: string[] = [
    'Hello Athishta Gold Company,',
    '',
    headerIntro,
    '',
    `*Customer Name:* ${name?.trim() || 'Customer'}`,
    `*Mobile Number:* ${mobile?.trim() || 'Provided on chat'}`,
    ...(location?.trim() ? [`*Location:* ${location.trim()}`] : []),
    `*Service Requested:* ${service}`
  ];

  if (purity) {
    lines.push(`*Gold Purity:* ${purity}`);
  }

  if (weight && Number(weight) > 0) {
    lines.push(`*Approximate Weight:* ${weight} grams (${(Number(weight) / 8).toFixed(2)} Pavans)`);
  }

  if (branch) {
    lines.push(`*Preferred Branch:* ${branch}`);
  }

  if (indicativeRate && indicativeRate > 0) {
    lines.push(`*Today's Market Rate:* ${formatINR(indicativeRate)}/gram`);
  }

  if (estimatedValue && estimatedValue > 0) {
    lines.push(`*Calculated Valuation:* ${formatINR(estimatedValue)}`);
  }

  if (flow === 'doorstep') {
    if (doorstepLocation) lines.push(`*Doorstep Address:* ${doorstepLocation}`);
    if (doorstepDate) lines.push(`*Preferred Date:* ${doorstepDate}`);
    if (doorstepTime) lines.push(`*Preferred Time:* ${doorstepTime}`);
  }

  if (notes && notes.trim()) {
    lines.push(`*Notes / Details:* ${notes.trim()}`);
  }

  lines.push('');
  lines.push('Please connect with me regarding next steps.');
  lines.push('');
  lines.push('Thank you,');
  lines.push('Athishta Gold Company Customer');

  return lines.join('\n');
}

export function getWhatsAppUrl(payload: WhatsAppPayload, targetNumber: string = COMPANY_WHATSAPP): string {
  const message = generateWhatsAppMessage(payload);
  const encodedText = encodeURIComponent(message);
  const cleanNumber = targetNumber.replace(/\D/g, '');
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

export function openWhatsAppEnquiry(payload: WhatsAppPayload, targetNumber: string = COMPANY_WHATSAPP): string {
  const url = getWhatsAppUrl(payload, targetNumber);
  try {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      // Fallback if popup is blocked by iframe
      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  } catch (e) {
    console.warn('Direct window.open blocked, using fallback link click', e);
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return url;
}
