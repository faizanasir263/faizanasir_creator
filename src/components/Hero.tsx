import React from 'react';
import { ArrowRight, Sparkles, Send, ShieldCheck, Clock, CheckCircle } from 'lucide-react';
import { STUDIO_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenEstimator: () => void;
  onExplorePortfolio: () => void;
  whatsAppNumber: string;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimator, onExplorePortfolio, whatsAppNumber }) => {
  const cleanWaNumber = whatsAppNumber.replace(/[^0-9]/g, '');
  const waUrl = `https://wa.me/${cleanWaNumber}?text=${encodeURIComponent(
    'Hello Faiza! I am interested in hiring Faiza Creative Studio for graphic design and digital marketing.'
  )}`;

  return (
    <section id="home" className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Ambient background glow accents */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-radial from-[#D4AF37]/10 via-[#0B192C]/40 to-transparent blur-3xl" 
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Split-Screen Hero Grid */}
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="flex flex-col justify-center lg:col-span-7">
            
            {/* Editorial kicker (Clean unboxed text, no pill box) */}
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#D4AF37]">
              <span>Faiza Creative Studio</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">Freelance Visual Design & Marketing</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl" style={{ textWrap: 'balance' }}>
              Distinctive Visual Identities, Engaging Videos &{' '}
              <span className="text-gold-gradient">High-Converting Web Experiences</span>
            </h1>

            {/* Lead Copy */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Empowering startups, small business founders, and content creators with precision{' '}
              <strong className="text-white font-medium">Adobe Illustrator</strong> vector branding, cinematic{' '}
              <strong className="text-white font-medium">Premiere Pro</strong> video editing, custom{' '}
              <strong className="text-white font-medium">WordPress websites</strong>, and foundational SEO strategies.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5B842] to-[#B38F24] px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-[#D4AF37]/25 transition-all hover:brightness-110 active:scale-95"
              >
                <span>Start a Project</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <button
                onClick={onExplorePortfolio}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-[#0D1C33]/80 px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all hover:border-[#D4AF37]/50 hover:bg-[#122543] hover:text-white"
              >
                <span>View Portfolio</span>
              </button>

              <button
                onClick={onOpenEstimator}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#D4AF37]/30 bg-transparent px-5 py-3.5 text-xs font-semibold text-[#D4AF37] transition-all hover:bg-[#D4AF37]/10"
              >
                <Sparkles className="h-4 w-4 text-[#D4AF37]" />
                <span>Estimate Project Cost</span>
              </button>
            </div>

            {/* Editorial reassurance note */}
            <div className="mt-8 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-[#D4AF37]" />
                <span>100% Original Vector Artwork</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-[#D4AF37]" />
                <span>Fast & Reliable Turnarounds</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[#D4AF37]" />
                <span>Direct 1-on-1 Communication</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Container (High-Resolution Studio Workspace) */}
          <div className="flex lg:col-span-5">
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0D1C33] shadow-2xl transition-all hover:border-[#D4AF37]/40">
              <img
                src="/src/assets/images/hero_creative_workspace_1792589647007.jpg"
                alt="Faiza Creative Studio professional workstation showcasing Adobe Illustrator vector branding and Premiere Pro timeline on wide display"
                className="h-full w-full object-cover object-center min-h-[340px] max-h-[500px] lg:max-h-none"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070E1A] via-transparent to-transparent opacity-60" />
              
              {/* Floating caption overlay */}
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-[#070E1A]/85 p-3.5 backdrop-blur-md">
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <p className="font-semibold text-white">Faiza Creative Studio</p>
                    <p className="text-[11px] text-slate-400">Crafting brand assets with modern design tools</p>
                  </div>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[11px] font-semibold text-[#D4AF37] hover:underline"
                  >
                    <span>Instant Chat</span>
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Full-width Focal Points Strip below Hero (Frontend Design spec) */}
        <div className="mt-16 grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-[#0D1C33]/60 p-6 backdrop-blur-md sm:grid-cols-4 lg:gap-8">
          <div>
            <div className="text-2xl font-bold text-white tabular-nums sm:text-3xl font-display text-gold-gradient">
              7 Core
            </div>
            <div className="mt-1 text-xs text-slate-400">
              Design & Marketing Specialties
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white tabular-nums sm:text-3xl font-display">
              100%
            </div>
            <div className="mt-1 text-xs text-slate-400">
              Bespoke Scalable Vectors
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white tabular-nums sm:text-3xl font-display">
              24-48h
            </div>
            <div className="mt-1 text-xs text-slate-400">
              Initial Concept Delivery Option
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white tabular-nums sm:text-3xl font-display">
              Direct
            </div>
            <div className="mt-1 text-xs text-slate-400">
              Founder-Led Collaboration
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
