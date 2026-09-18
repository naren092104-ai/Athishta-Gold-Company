import React, { useState } from 'react';
import { ArrowRight, Check, ChevronRight, CircleAlert, LockKeyhole, MessageCircle, Radio } from 'lucide-react';
import { GoldRateData, GoldRates } from '../types';
import { formatINR } from '../utils/formatCurrency';
import { getWhatsAppUrl } from '../services/whatsappService';

interface GoldCalculatorSectionProps {
  rates: GoldRates;
  rateData?: GoldRateData | null;
}

export const GoldCalculatorSection: React.FC<GoldCalculatorSectionProps> = ({ rates, rateData }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [customerName, setCustomerName] = useState('');
  const [customerLocation, setCustomerLocation] = useState('');
  const [customerMobile, setCustomerMobile] = useState('');
  const [purity, setPurity] = useState<'24K' | '22K' | '18K'>('22K');
  const [weight, setWeight] = useState<number>(8);
  const currentRate = rateData?.rates[purity] ?? (rateData ? rates[purity] : undefined);
  const hasLiveRate = typeof currentRate === 'number' && currentRate > 0;
  const estimatedValue = hasLiveRate ? Math.round(weight * currentRate) : 0;

  const quickWeights = [
    { label: '4g', value: 4 },
    { label: '8g', value: 8 },
    { label: '16g', value: 16 },
    { label: '24g', value: 24 },
    { label: '50g', value: 50 },
  ];

  const whatsappUrl = getWhatsAppUrl({
    flow: 'selling',
    name: customerName.trim(),
    mobile: customerMobile.trim(),
    location: customerLocation.trim(),
    service: 'Gold Valuation & Final Quote',
    purity: `${purity} (${purity === '24K' ? '999 Pure' : purity === '22K' ? '916 Hallmark' : '750 Fine'})`,
    weight: weight,
    estimatedValue: estimatedValue,
    indicativeRate: currentRate,
    branch: 'Lakshmangudi (Head Office)',
  });

  const detailsComplete = Boolean(customerName.trim() && customerLocation.trim() && customerMobile.trim());
  const canCalculate = detailsComplete && hasLiveRate && weight > 0;

  return (
    <section id="gold-calculator" className="gold-quote-section relative overflow-hidden py-20 sm:py-24 lg:min-h-[850px]">
      <div className="gold-quote-photo absolute inset-0 pointer-events-none" />
      <div className="gold-quote-glow absolute -left-24 top-1/4 h-96 w-96 rounded-full pointer-events-none" />
      <div className="gold-quote-glow gold-quote-glow-right absolute -right-32 bottom-1/4 h-[28rem] w-[28rem] rounded-full pointer-events-none" />
      <div className="gold-ribbon gold-ribbon-one absolute pointer-events-none" />
      <div className="gold-ribbon gold-ribbon-two absolute pointer-events-none" />
      <div className="gold-particles absolute inset-0 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center text-[#FFF8E8]">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.32em] text-[#F6D77B]">Athishta Gold Company</p>
          <h2 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Get Your <span className="gold-gradient-text">Gold Quote</span></h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-[#F5E7C5] sm:text-base">Calculate your gold value and send your enquiry directly to WhatsApp.</p>
        </div>

        <div className="relative mx-auto mt-12 max-w-xl">
          <div className="mb-6 flex items-center justify-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#F4E5C0]">
            {[1, 2, 3].map((item, index) => <React.Fragment key={item}><span className={`quote-progress ${step >= item ? 'quote-progress-active' : ''}`}>0{item}</span>{index < 2 && <span className="h-px w-12 bg-[#E6C66A]/45 sm:w-20" />}</React.Fragment>)}
          </div>

          {step === 1 && <QuoteCard number="01" title="Customer Details" active>
            <p className="mb-6 text-sm text-[#665D50]">Tell us a few details.</p>
            <div className="space-y-4">
              <label className="quote-field">Name<input value={customerName} onChange={(event) => setCustomerName(event.target.value)} placeholder="Enter your name" autoComplete="name" /></label>
              <label className="quote-field">Location<input value={customerLocation} onChange={(event) => setCustomerLocation(event.target.value)} placeholder="Enter your location" autoComplete="address-level2" /></label>
              <label className="quote-field">Mobile Number<div className="flex gap-2"><span className="quote-prefix">+91</span><input className="min-w-0" type="tel" value={customerMobile} onChange={(event) => setCustomerMobile(event.target.value)} placeholder="Enter mobile number" autoComplete="tel" /></div></label>
            </div>
            <button type="button" disabled={!detailsComplete} onClick={() => setStep(2)} className="quote-primary mt-6">Continue <ArrowRight className="h-4 w-4" /></button>
            <p className="mt-5 flex items-center justify-center gap-1.5 text-[11px] text-[#756A5A]"><LockKeyhole className="h-3.5 w-3.5 text-[#B48A21]" /> Your details are safe with us.</p>
          </QuoteCard>}

          {step === 2 && <QuoteCard number="02" title="Calculate Gold Value" active>
            <p className="mb-6 text-sm text-[#665D50]">Select purity and weight.</p>
            <div><span className="quote-label">Gold Purity</span><div className="mt-2 grid grid-cols-3 gap-2">{(['24K', '22K', '18K'] as const).map((option) => <button key={option} type="button" onClick={() => setPurity(option)} className={`quote-choice ${purity === option ? 'quote-choice-active' : ''}`}>{option}</button>)}</div></div>
            <label className="quote-field mt-5">Weight<div className="relative"><input type="number" min="0.1" step="0.1" value={weight || ''} onChange={(event) => setWeight(Math.max(0, parseFloat(event.target.value) || 0))} /><span className="quote-suffix">grams</span></div></label>
            <div className="mt-3 flex flex-wrap gap-2">{quickWeights.map((option) => <button key={option.value} type="button" onClick={() => setWeight(option.value)} className={`quote-quick ${weight === option.value ? 'quote-quick-active' : ''}`}>{option.label}</button>)}</div>
            <div className="mt-6 border-t border-[#C9A227]/20 pt-4"><div className="flex items-center justify-between"><span className="quote-label">Current Gold Rate</span><span className="quote-live"><Radio className="h-3 w-3" /> LIVE</span></div><p className="mt-2 text-2xl font-bold text-[#21180F]">{hasLiveRate ? `${formatINR(currentRate)} / gram` : 'Rate unavailable'}</p></div>
            <div className="mt-5 rounded-2xl bg-[#FBF2D9] px-4 py-3"><span className="quote-label">Estimated Gold Value</span><p className="mt-1 font-serif text-3xl font-bold text-[#8D6816]">{hasLiveRate ? formatINR(estimatedValue) : 'Awaiting live rate'}</p></div>
            {!hasLiveRate && <p className="mt-3 flex items-start gap-1.5 text-xs text-[#9A5B20]"><CircleAlert className="mt-0.5 h-3.5 w-3.5 shrink-0" /> Live rate is temporarily unavailable. Please try again shortly.</p>}
            <button type="button" disabled={!canCalculate} onClick={() => setStep(3)} className="quote-primary mt-5">Continue to Quote <ArrowRight className="h-4 w-4" /></button>
          </QuoteCard>}

          {step === 3 && <QuoteCard number="03" title="Your Gold Quote is Ready" active>
            <p className="mb-5 text-sm text-[#665D50]">Review your details and send your enquiry.</p>
            <div className="space-y-4 text-sm"><ReviewGroup title="Customer Details" rows={[["Name", customerName || 'Not entered'], ["Location", customerLocation || 'Not entered'], ["Mobile", customerMobile || 'Not entered']]} /><ReviewGroup title="Gold Details" rows={[["Purity", purity], ["Weight", `${weight} grams`], ["Current Rate", hasLiveRate ? `${formatINR(currentRate)} / gram` : 'Unavailable']]} /></div>
            <div className="mt-5 flex items-end justify-between rounded-2xl border border-[#D2AA3B]/40 bg-[#FBF2D9] px-4 py-3"><span className="quote-label">Estimated Value</span><strong className="font-serif text-2xl text-[#8D6816]">{hasLiveRate ? formatINR(estimatedValue) : '--'}</strong></div>
            <a href={canCalculate ? whatsappUrl : undefined} target="_blank" rel="noopener noreferrer" aria-disabled={!canCalculate} onClick={(event) => { if (!canCalculate) event.preventDefault(); }} className={`quote-whatsapp mt-5 ${!canCalculate ? 'pointer-events-none opacity-50' : ''}`}><MessageCircle className="h-4 w-4 fill-current" /> Send Quote on WhatsApp</a>
            <button type="button" onClick={() => setStep(1)} className="mt-4 flex w-full items-center justify-center gap-1 text-xs font-bold text-[#8D6816] hover:text-[#5F4715]">Edit Details <ChevronRight className="h-3.5 w-3.5" /></button>
          </QuoteCard>}
        </div>

        <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-5 border-y border-[#E6C66A]/35 py-5 text-xs font-semibold text-[#F4E5C0] sm:flex-row sm:items-center sm:justify-between"><div className="flex flex-wrap gap-x-6 gap-y-3"><span><Check className="mr-1 inline h-3.5 w-3.5 text-[#F6D77B]" />Transparent Evaluation</span><span><Check className="mr-1 inline h-3.5 w-3.5 text-[#F6D77B]" />Fair Pricing</span><span><Check className="mr-1 inline h-3.5 w-3.5 text-[#F6D77B]" />Instant Payment</span><span><Check className="mr-1 inline h-3.5 w-3.5 text-[#F6D77B]" />Doorstep Service</span></div><a href="tel:+919363639955" className="shrink-0 text-[#FFF8E8]">Need Help? <span className="text-[#F6D77B]">+91 93636 39955</span></a></div>
        <div className="mt-8 flex items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-[0.35em] text-[#E8C873]"><span className="h-px w-12 bg-[#E8C873]/50 sm:w-24" />More Than Gold • It's Trust<span className="h-px w-12 bg-[#E8C873]/50 sm:w-24" /></div>
      </div>
    </section>
  );
};

interface QuoteCardProps { number: string; title: string; active: boolean; children: React.ReactNode; }
const QuoteCard: React.FC<QuoteCardProps> = ({ number, title, active, children }) => <article className={`gold-quote-card relative flex min-h-[550px] flex-col rounded-[22px] p-5 sm:p-6 ${active ? 'gold-quote-card-active' : ''}`}><div className="mb-3 flex items-center gap-3"><span className="quote-number">{number}</span><div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B48A21]">Step {number}</p><h3 className="font-serif text-2xl font-bold leading-tight text-[#21180F]">{title}</h3></div></div>{children}</article>;
const StepConnector: React.FC = () => <div className="quote-connector flex items-center justify-center lg:py-0"><span><ChevronRight className="h-5 w-5" /></span></div>;
const ReviewGroup: React.FC<{ title: string; rows: string[][] }> = ({ title, rows }) => <div><p className="quote-label mb-2">{title}</p><div className="space-y-1.5">{rows.map(([label, value]) => <div key={label} className="flex justify-between gap-4 border-b border-[#E5DCCB] pb-1.5"><span className="text-[#887D6D]">{label}</span><strong className="max-w-[62%] truncate text-right font-semibold text-[#32291F]">{value}</strong></div>)}</div></div>;
