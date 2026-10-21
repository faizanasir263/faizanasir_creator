import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { ProjectEstimator } from './components/ProjectEstimator';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PublishGuideModal } from './components/PublishGuideModal';
import { WhatsAppConfigModal } from './components/WhatsAppConfigModal';
import { STUDIO_INFO } from './data/portfolioData';
import { MessageSquare, ArrowUpRight, BookOpen } from 'lucide-react';

export default function App() {
  const [whatsAppNumber, setWhatsAppNumber] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('faiza_studio_whatsapp') || STUDIO_INFO.defaultWhatsApp;
    }
    return STUDIO_INFO.defaultWhatsApp;
  });

  const [isPublishGuideOpen, setIsPublishGuideOpen] = useState(false);
  const [isWhatsAppConfigOpen, setIsWhatsAppConfigOpen] = useState(false);

  // States passed from Services or ProjectEstimator to Contact form
  const [contactInitialService, setContactInitialService] = useState<string | undefined>(undefined);
  const [contactInitialMessage, setContactInitialMessage] = useState<string | undefined>(undefined);
  const [contactInitialBudget, setContactInitialBudget] = useState<string | undefined>(undefined);

  const handleSaveWhatsAppNumber = (newNumber: string) => {
    setWhatsAppNumber(newNumber);
    if (typeof window !== 'undefined') {
      localStorage.setItem('faiza_studio_whatsapp', newNumber);
    }
  };

  const handleSelectServiceFromServices = (serviceTitle: string) => {
    setContactInitialService(serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyEstimateToForm = (serviceName: string, estimatedBudget: string, messageNote: string) => {
    setContactInitialService(serviceName);
    setContactInitialBudget(estimatedBudget);
    setContactInitialMessage(messageNote);
  };

  const handleExplorePortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenEstimator = () => {
    const estimatorSection = document.getElementById('estimator');
    if (estimatorSection) {
      estimatorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cleanWaNumber = whatsAppNumber.replace(/[^0-9]/g, '');
  const floatingWaUrl = `https://wa.me/${cleanWaNumber}?text=${encodeURIComponent(
    'Hello Faiza! I am visiting your portfolio and would like to talk about a design or marketing project.'
  )}`;

  return (
    <div className="min-h-screen bg-[#070E1A] text-slate-100 flex flex-col font-sans selection:bg-[#D4AF37]/30 selection:text-white">
      
      {/* 3-Zone Navigation Bar */}
      <Navbar
        onOpenPublishGuide={() => setIsPublishGuideOpen(true)}
        whatsAppNumber={whatsAppNumber}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenEstimator={handleOpenEstimator}
          onExplorePortfolio={handleExplorePortfolio}
          whatsAppNumber={whatsAppNumber}
        />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Services Section */}
        <Services onSelectService={handleSelectServiceFromServices} />

        {/* 4 & 5. Portfolio Gallery & Case Studies */}
        <Portfolio
          onInquireProject={(projectName) => {
            handleSelectServiceFromServices(`Inquiry for project style: ${projectName}`);
          }}
        />

        {/* Interactive Quote & Project Estimator */}
        <ProjectEstimator
          onApplyEstimateToForm={handleApplyEstimateToForm}
          whatsAppNumber={whatsAppNumber}
        />

        {/* 6. Testimonials Section (Clearly labeled sample placeholders) */}
        <Testimonials />

        {/* 7 & 8. Contact Form & WhatsApp Contact */}
        <Contact
          initialService={contactInitialService}
          initialMessage={contactInitialMessage}
          initialBudget={contactInitialBudget}
          whatsAppNumber={whatsAppNumber}
          onOpenWhatsAppConfig={() => setIsWhatsAppConfigOpen(true)}
        />
      </main>

      {/* 9. Footer */}
      <Footer
        onOpenPublishGuide={() => setIsPublishGuideOpen(true)}
        onOpenWhatsAppConfig={() => setIsWhatsAppConfigOpen(true)}
        whatsAppNumber={whatsAppNumber}
      />

      {/* Floating Action Button: WhatsApp Quick Chat */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-2">
        <a
          href={floatingWaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B38F24] p-3 sm:px-4 sm:py-3 text-slate-950 shadow-2xl shadow-[#D4AF37]/30 transition-all hover:scale-105 active:scale-95"
          aria-label="Direct WhatsApp Chat"
        >
          <MessageSquare className="h-5 w-5 fill-slate-950" />
          <span className="hidden sm:inline text-xs font-extrabold tracking-wide">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Deployment & Custom Domain Guide Modal */}
      <PublishGuideModal
        isOpen={isPublishGuideOpen}
        onClose={() => setIsPublishGuideOpen(false)}
      />

      {/* WhatsApp Configuration Modal */}
      <WhatsAppConfigModal
        isOpen={isWhatsAppConfigOpen}
        onClose={() => setIsWhatsAppConfigOpen(false)}
        currentNumber={whatsAppNumber}
        onSaveNumber={handleSaveWhatsAppNumber}
      />

    </div>
  );
}
