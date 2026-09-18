import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { GoldDashboard } from '../components/GoldDashboard';
import { Services } from '../components/Services';
import { BranchLocator } from '../components/BranchLocator';
import { Testimonials } from '../components/Testimonials';
import { CtaBanner } from '../components/CtaBanner';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { QuoteModal } from '../components/QuoteModal';
import { ConfirmationModal, ConfirmationDetails } from '../components/ConfirmationModal';
import { useGoldRate } from '../hooks/useGoldRate';

export const Home: React.FC = () => {
  const { data: rateData, isRefreshing, refreshRate, rates, status } = useGoldRate();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedQuoteService, setSelectedQuoteService] = useState<string>('Gold Valuation & Quote');
  const [confirmationDetails, setConfirmationDetails] = useState<ConfirmationDetails | null>(null);

  const handleOpenQuoteModal = (serviceName?: string) => {
    setSelectedQuoteService(serviceName || 'Gold Valuation & Quote');
    setIsQuoteModalOpen(true);
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
    <div className="min-h-screen bg-[#FAF7F0] text-[#140E0A] font-sans selection:bg-[#E8D49E] selection:text-[#120D08]">
      
      {/* 1. Top Bar & Navigation Bar (Matches uploaded image exactly) */}
      <Navbar
        onOpenQuoteModal={handleOpenQuoteModal}
        onNavigateSection={handleScrollToSection}
      />

      <main>
        {/* 2. Hero Section: "Your Gold Deserves Its True Value" + Woman admiring Gold Ornaments */}
        <Hero
          rates={rates}
          rateStatus={status}
          onOpenQuoteModal={handleOpenQuoteModal}
          onScrollToSection={handleScrollToSection}
        />

        {/* 3. Gold Dashboard: Row 1 (Live Rate + Calculator) & Row 2 (Price Trend + Value Change) */}
        <GoldDashboard
          rates={rates}
          rateData={rateData}
          isRefreshing={isRefreshing}
          onRefresh={refreshRate}
          onQuoteConfirmed={handleShowConfirmation}
        />

        {/* 4. Our Services: 6 Round Icon Cards */}
        <Services onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 5. Our Branches: 6 Storefront Branch Cards with Call & Directions */}
        <BranchLocator />

        {/* 6. What Our Customers Say: Testimonials with 5 Stars & Carousel Arrows */}
        <Testimonials />

        {/* 7. Turn Your Gold into Opportunities: CTA Banner with WhatsApp & Call Buttons */}
        <CtaBanner onOpenQuoteModal={() => handleOpenQuoteModal('Gold Valuation')} />
      </main>

      {/* 8. 4-Column Footer with Golden Lotus Logo & Google Maps preview */}
      <Footer
        onNavigateSection={handleScrollToSection}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Universal Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        rates={rates}
        initialService={selectedQuoteService}
        onQuoteConfirmed={handleShowConfirmation}
      />

      {/* Instant Action Confirmation Receipt Modal */}
      <ConfirmationModal
        details={confirmationDetails}
        onClose={() => setConfirmationDetails(null)}
      />

    </div>
  );
};
