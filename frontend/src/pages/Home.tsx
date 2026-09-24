import React, { useState } from 'react';
import { TopAnnouncementBar } from '../components/TopAnnouncementBar';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { GoldCalculatorSection } from '../components/GoldCalculatorSection';
import { Services } from '../components/Services';
import { HowItWorks } from '../components/HowItWorks';
import { WhyAthishta } from '../components/WhyAthishta';
import { BranchLocator } from '../components/BranchLocator';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { GoldRateSection } from '../components/GoldRateSection';
import { Contact } from '../components/Contact';
import { CtaBanner } from '../components/CtaBanner';
import { Footer } from '../components/Footer';
import { MobileBottomBar } from '../components/MobileBottomBar';
import { QuoteModal } from '../components/QuoteModal';
import { ConfirmationModal, ConfirmationDetails } from '../components/ConfirmationModal';
import { useGoldRate } from '../hooks/useGoldRate';

export const Home: React.FC = () => {
  const { data: rateData, isRefreshing, refreshRate, rates } = useGoldRate();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedQuoteService, setSelectedQuoteService] = useState<string>('Instant Gold Quote');
  const [confirmationDetails, setConfirmationDetails] = useState<ConfirmationDetails | null>(null);

  const handleOpenQuoteModal = (serviceName?: string) => {
    const el = document.getElementById('gold-calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setSelectedQuoteService(serviceName || 'Instant Gold Quote');
      return;
    }

    setSelectedQuoteService(serviceName || 'Instant Gold Quote');
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShowConfirmation = (details: ConfirmationDetails) => {
    setConfirmationDetails(details);
  };

  return (
    <div className="min-h-screen bg-[#F8F3E8] text-[#171717] font-sans selection:bg-[#C9A227]/20 selection:text-[#171717] pb-16 sm:pb-0">
      
      {/* 1. Header / Sticky Navbar */}
      <Navbar
        onOpenQuoteModal={handleOpenQuoteModal}
        onNavigateSection={handleScrollToSection}
      />

      <main>
        {/* 2. Hero Section: Cinematic composition + floating live rate card */}
        <Hero
          rates={rates}
          rateData={rateData}
          onOpenQuoteModal={handleOpenQuoteModal}
          onScrollToSection={handleScrollToSection}
        />

        {/* 5. About Athishta: Split layout with 4 bullets */}
        <WhyAthishta />

        {/* 6. Our Services: Exactly 5 services */}
        <Services onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 7. How It Works: 4-Step horizontal timeline */}
        <HowItWorks />

        {/* 9. Gold Rate: dedicated rate showcase */}
        <GoldRateSection
          rates={rates}
          rateData={rateData}
          isRefreshing={isRefreshing}
          onRefresh={refreshRate}
        />

        {/* 10. Branches: 3-col desktop / 2-col tablet / 1-col mobile */}
        <BranchLocator />

        {/* 11. Testimonials: 3 real customer reviews */}
        <Testimonials />

        {/* 12. FAQ */}
        <FAQ />

        {/* 13. Final premium conversion section: one combined gold quote experience */}
        <GoldCalculatorSection rates={rates} rateData={rateData} />

        {/* 14. Final CTA */}
        <CtaBanner onOpenQuoteModal={() => handleOpenQuoteModal('Instant Gold Quote')} />

        {/* 15. Contact */}
        <Contact />
      </main>

      {/* 16. Simple Footer */}
      <Footer onNavigateSection={handleScrollToSection} />

      {/* 13. Mobile Bottom Sticky Bar */}
      <MobileBottomBar onOpenQuoteModal={() => handleOpenQuoteModal('Instant Gold Quote')} />

      {/* Universal Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        rates={rates}
        initialService={selectedQuoteService}
        onQuoteConfirmed={handleShowConfirmation}
      />

      {/* Confirmation Receipt Modal */}
      <ConfirmationModal
        details={confirmationDetails}
        onClose={() => setConfirmationDetails(null)}
      />

    </div>
  );
};

