import React, { useState } from 'react';
import { Menu, X, MessageSquare, BookOpen } from 'lucide-react';
import { STUDIO_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenPublishGuide: () => void;
  onOpenEstimator?: () => void;
  whatsAppNumber: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPublishGuide, whatsAppNumber }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cleanWaNumber = whatsAppNumber.replace(/[^0-9]/g, '');
  const waUrl = `https://wa.me/${cleanWaNumber}?text=${encodeURIComponent(
    'Hi Faiza, I reviewed your creative portfolio and would like to inquire about design and marketing services.'
  )}`;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#070E1A]/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        
        {/* Zone 1: Single text element wordmark (Display face, single line) */}
        <a 
          href="#home" 
          className="group flex items-center gap-3 whitespace-nowrap shrink-0 text-xl font-bold tracking-tight text-white transition-opacity hover:opacity-90"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#D4AF37]/40 bg-[#0D1C33] text-lg font-extrabold text-[#D4AF37] shadow-inner transition-transform group-hover:scale-105">
            F
          </span>
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold leading-tight text-white">
              Faiza <span className="text-[#D4AF37]">Creative Studio</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400">
              Design & Marketing
            </span>
          </div>
        </a>

        {/* Zone 2: Concise single-line text navigation links */}
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
          <a href="#about" className="whitespace-nowrap shrink-0 transition-colors hover:text-[#D4AF37]">
            About
          </a>
          <a href="#services" className="whitespace-nowrap shrink-0 transition-colors hover:text-[#D4AF37]">
            Services
          </a>
          <a href="#portfolio" className="whitespace-nowrap shrink-0 transition-colors hover:text-[#D4AF37]">
            Portfolio
          </a>
          <a href="#case-studies" className="whitespace-nowrap shrink-0 transition-colors hover:text-[#D4AF37]">
            Case Studies
          </a>
          <a href="#estimator" className="whitespace-nowrap shrink-0 transition-colors hover:text-[#D4AF37]">
            Pricing Calculator
          </a>
          <a href="#contact" className="whitespace-nowrap shrink-0 transition-colors hover:text-[#D4AF37]">
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 Primary action + Guide trigger */}
        <div className="hidden items-center gap-3 shrink-0 md:flex">
          <button
            onClick={onOpenPublishGuide}
            className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#0D1C33] px-3 py-2 text-xs font-medium text-slate-300 transition-colors hover:border-[#D4AF37]/40 hover:text-white"
            title="Read Deployment & Custom Domain Guide"
          >
            <BookOpen className="h-3.5 w-3.5 text-[#D4AF37]" />
            <span className="whitespace-nowrap">Domain Guide</span>
          </button>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#B38F24] px-4 py-2 text-xs font-semibold text-slate-950 shadow-md shadow-[#D4AF37]/20 transition-all hover:brightness-110 active:scale-95 whitespace-nowrap"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenPublishGuide}
            className="rounded-lg border border-white/10 bg-[#0D1C33] p-2 text-xs text-[#D4AF37]"
            title="Domain Guide"
          >
            <BookOpen className="h-4 w-4" />
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg border border-white/10 bg-[#0D1C33] p-2 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-white/10 bg-[#070E1A]/98 px-6 py-6 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-4 text-sm font-medium text-slate-200">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 transition-colors hover:text-[#D4AF37]"
            >
              About Faiza
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 transition-colors hover:text-[#D4AF37]"
            >
              Services & Capabilities
            </a>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 transition-colors hover:text-[#D4AF37]"
            >
              Portfolio Gallery
            </a>
            <a
              href="#case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 transition-colors hover:text-[#D4AF37]"
            >
              Project Case Studies
            </a>
            <a
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 transition-colors hover:text-[#D4AF37]"
            >
              Quote Estimator
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 transition-colors hover:text-[#D4AF37]"
            >
              Contact & Inquiries
            </a>
            
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPublishGuide();
                }}
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-[#0D1C33] py-2.5 text-xs font-semibold text-slate-200"
              >
                <BookOpen className="h-4 w-4 text-[#D4AF37]" />
                <span>Domain & Deployment Instructions</span>
              </button>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#D4AF37] py-2.5 text-xs font-bold text-slate-950"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Quick WhatsApp Message</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
