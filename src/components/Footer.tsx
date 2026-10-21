import React from 'react';
import { 
  ArrowUp, 
  MessageSquare, 
  Mail, 
  BookOpen, 
  Sparkles,
  ExternalLink 
} from 'lucide-react';
import { STUDIO_INFO, SERVICES_LIST } from '../data/portfolioData';

interface FooterProps {
  onOpenPublishGuide: () => void;
  onOpenWhatsAppConfig: () => void;
  whatsAppNumber: string;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPublishGuide,
  onOpenWhatsAppConfig,
  whatsAppNumber,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cleanWaNumber = whatsAppNumber.replace(/[^0-9]/g, '');
  const waUrl = `https://wa.me/${cleanWaNumber}?text=${encodeURIComponent(
    'Hi Faiza! I am reaching out from your portfolio website footer.'
  )}`;

  return (
    <footer className="border-t border-white/10 bg-[#050A14] pt-16 pb-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          
          {/* Column 1 & 2: Brand Lockup & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#D4AF37]/40 bg-[#0D1C33] text-base font-extrabold text-[#D4AF37]">
                F
              </span>
              <div className="flex flex-col">
                <span className="font-display text-base font-bold text-white">
                  Faiza <span className="text-[#D4AF37]">Creative Studio</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500">
                  Visual Design & Marketing
                </span>
              </div>
            </a>

            <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
              Independent creative practice delivering precision vector logos in Adobe Illustrator, dynamic video edits in Premiere Pro, responsive WordPress websites, and foundational digital marketing.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-slate-300 hover:border-[#D4AF37]/50 hover:text-white"
              >
                <MessageSquare className="h-3.5 w-3.5 text-[#D4AF37]" />
                <span>WhatsApp: {whatsAppNumber}</span>
              </a>

              <button
                onClick={onOpenWhatsAppConfig}
                className="text-[11px] text-[#D4AF37] hover:underline"
              >
                Edit
              </button>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#home" className="hover:text-[#D4AF37] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#D4AF37] transition-colors">
                  About Faiza
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  All 7 Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#D4AF37] transition-colors">
                  Portfolio Showcase
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-[#D4AF37] transition-colors">
                  Pricing Estimator
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D4AF37] transition-colors">
                  Contact Studio
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {SERVICES_LIST.map((s) => (
                <li key={s.id} className="truncate">
                  <a href="#services" className="hover:text-white transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Deployment Guide & Socials */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Webmaster & Connect
            </h4>
            
            <button
              onClick={onOpenPublishGuide}
              className="flex w-full items-center justify-between rounded-xl border border-[#D4AF37]/30 bg-[#0D1C33] p-3 text-left text-xs text-white hover:border-[#D4AF37] transition-colors"
            >
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-[#D4AF37] shrink-0" />
                <span className="font-semibold">Publish & Domain Guide</span>
              </div>
              <span className="text-[10px] text-[#D4AF37]">Docs</span>
            </button>

            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 block mb-2">
                Social Profiles:
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                <a
                  href={STUDIO_INFO.socialLinks.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-white/5 px-2.5 py-1 text-slate-300 hover:text-white hover:bg-white/10"
                >
                  Behance
                </a>
                <a
                  href={STUDIO_INFO.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-white/5 px-2.5 py-1 text-slate-300 hover:text-white hover:bg-white/10"
                >
                  LinkedIn
                </a>
                <a
                  href={STUDIO_INFO.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-white/5 px-2.5 py-1 text-slate-300 hover:text-white hover:bg-white/10"
                >
                  Instagram
                </a>
                <a
                  href={STUDIO_INFO.socialLinks.dribbble}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-white/5 px-2.5 py-1 text-slate-300 hover:text-white hover:bg-white/10"
                >
                  Dribbble
                </a>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 pt-1">
              Direct: <a href={`mailto:${STUDIO_INFO.email}`} className="text-white hover:underline">{STUDIO_INFO.email}</a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {STUDIO_INFO.brandName}. Designed by {STUDIO_INFO.founderName}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400 text-[11px]">
              Built with React, Vite & Tailwind CSS
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-slate-300 hover:border-[#D4AF37]/50 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
