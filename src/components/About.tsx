import React from 'react';
import { Palette, Video, Globe, Award, Sparkles, Check, ArrowRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const skillsList = [
    { name: 'Adobe Illustrator', category: 'Vector Logos, Monograms & Icons', level: 'Advanced Precision' },
    { name: 'Adobe Premiere Pro', category: 'Reels, Promo Cuts & Color Grading', level: 'High-Retention Video' },
    { name: 'Adobe Photoshop', category: 'Photo Retouching & Social Graphics', level: 'Pixel-Perfect' },
    { name: 'WordPress & Elementor', category: 'Responsive Web Design & CMS', level: 'Mobile-Optimized' },
    { name: 'SEO & Content Strategy', category: 'Meta Tags, Alt Text & Search Console', level: 'Search Foundations' },
    { name: 'Landing Page UX', category: 'Conversion Layouts & Lead Forms', level: 'High-Converting' },
  ];

  const workflowSteps = [
    {
      num: '01',
      title: 'Discovery & Brief',
      desc: 'We define your target audience, core objectives, brand tone, and exact file specifications before touching software.',
    },
    {
      num: '02',
      title: 'Concept & Exploration',
      desc: 'I draft moodboards, initial vector pencil sketches, and structural wireframes for early alignment.',
    },
    {
      num: '03',
      title: 'Precision Crafting',
      desc: 'Executing with mathematical vector precision in Illustrator or frame-by-frame pacing in Premiere Pro.',
    },
    {
      num: '04',
      title: 'Refinement & Polish',
      desc: 'Your direct feedback guides rapid revisions until typography, contrast, and layout are flawless.',
    },
    {
      num: '05',
      title: 'Master Delivery',
      desc: 'Organized production delivery with vector master files (.AI, .EPS, .SVG), 4K exports, and clear usage guides.',
    },
  ];

  return (
    <section id="about" className="relative border-t border-white/10 bg-[#0A1424] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#D4AF37]">
            <span>About The Studio</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Founder & Designer</span>
          </div>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-4xl">
            Passionate Craftsmanship, Fresh Perspective & Uncompromising Attention to Detail
          </h2>
        </div>

        {/* 2-Column Content Split */}
        <div className="mt-12 grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          
          {/* Left Column: Personal Narrative & Philosophy */}
          <div className="space-y-6 text-slate-300 lg:col-span-7">
            <p className="text-base leading-relaxed sm:text-lg">
              Welcome to <span className="text-white font-semibold">{STUDIO_INFO.brandName}</span>. I am{' '}
              <span className="text-white font-semibold">{STUDIO_INFO.founderName}</span>, an independent creative designer and digital marketer driven by a profound love for clean aesthetics, visual storytelling, and functional design.
            </p>

            <p className="text-sm leading-relaxed sm:text-base text-slate-300">
              As a dedicated freelance creative embarking on my professional practice, I offer clients what large agencies frequently lose: <strong className="text-white font-medium">100% direct founder attention</strong>, obsessive care for every bezier curve, rapid communication, and an authentic hunger to see your project excel.
            </p>

            <p className="text-sm leading-relaxed sm:text-base text-slate-300">
              My technical foundation centers around industry standards: crafting razor-sharp vector identities in <strong className="text-white font-medium">Adobe Illustrator</strong>, editing dynamic video cuts and reels in <strong className="text-white font-medium">Adobe Premiere Pro</strong>, building responsive, easily managed websites on <strong className="text-white font-medium">WordPress</strong>, and configuring on-page <strong className="text-white font-medium">SEO foundations</strong> that ensure your digital presence is discoverable.
            </p>

            {/* Core Values Grid */}
            <div className="mt-8 grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-[#0D1C33]/80 p-4">
                <div className="flex items-center gap-2 font-display text-sm font-semibold text-white">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#D4AF37]/20 text-xs text-[#D4AF37]">
                    ✓
                  </span>
                  <span>Pure Scalable Vectors</span>
                </div>
                <p className="mt-2 text-xs text-slate-400">
                  Every brand logo and illustration is drawn with clean mathematical paths that scale infinitely from business cards to billboards.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#0D1C33]/80 p-4">
                <div className="flex items-center gap-2 font-display text-sm font-semibold text-white">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#D4AF37]/20 text-xs text-[#D4AF37]">
                    ✓
                  </span>
                  <span>Honest & Transparent</span>
                </div>
                <p className="mt-2 text-xs text-slate-400">
                  No invented credentials or inflated claims. You receive transparent pricing, clear milestone updates, and prompt replies.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#0D1C33]/80 p-4">
                <div className="flex items-center gap-2 font-display text-sm font-semibold text-white">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#D4AF37]/20 text-xs text-[#D4AF37]">
                    ✓
                  </span>
                  <span>Mobile-First Standards</span>
                </div>
                <p className="mt-2 text-xs text-slate-400">
                  Websites and social posts are rigorously tested on Android smartphones, iPads, and desktop displays for zero visual flaws.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#0D1C33]/80 p-4">
                <div className="flex items-center gap-2 font-display text-sm font-semibold text-white">
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#D4AF37]/20 text-xs text-[#D4AF37]">
                    ✓
                  </span>
                  <span>Complete Ownership</span>
                </div>
                <p className="mt-2 text-xs text-slate-400">
                  Upon completion, full copyright and editable master source files (.AI, .EPS, .PRPROJ, etc.) belong 100% to you.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4AF37] hover:text-[#FFF1C5] transition-colors"
              >
                <span>Discuss how we can collaborate on your next release</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Toolkit & Technical Skills */}
          <div className="space-y-6 lg:col-span-5">
            
            <div className="rounded-2xl border border-white/10 bg-[#0D1C33] p-6 shadow-xl">
              <h3 className="font-display text-lg font-bold text-white flex items-center justify-between">
                <span>Core Software & Toolkit</span>
                <span className="text-xs font-normal text-[#D4AF37]">Industry Standards</span>
              </h3>

              <div className="mt-6 space-y-4">
                {skillsList.map((skill, index) => (
                  <div key={index} className="border-b border-white/5 pb-3 last:border-b-0 last:pb-0">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-white">{skill.name}</span>
                      <span className="text-xs text-[#D4AF37]">{skill.level}</span>
                    </div>
                    <p className="mt-0.5 text-xs text-slate-400">{skill.category}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick contact summary box */}
            <div className="rounded-2xl border border-[#D4AF37]/30 bg-[#070E1A]/80 p-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                <Sparkles className="h-4 w-4" />
                <span>Freelance Availability</span>
              </div>
              <p className="mt-2 text-sm text-slate-200">
                Currently accepting freelance design commissions, video editing projects, and WordPress builds for local & international clients.
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-slate-400">
                <span>Direct Contact:</span>
                <a href={`mailto:${STUDIO_INFO.email}`} className="text-white hover:text-[#D4AF37] underline">
                  {STUDIO_INFO.email}
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* 5-Step Process Workflow Section */}
        <div className="mt-20 border-t border-white/10 pt-16">
          <div className="max-w-2xl">
            <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
              How We Work: The 5-Step Creative Workflow
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              A structured, transparent creative methodology designed to avoid surprises and ensure on-time delivery.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {workflowSteps.map((step) => (
              <div
                key={step.num}
                className="relative rounded-xl border border-white/10 bg-[#0D1C33]/50 p-5 transition-all hover:border-[#D4AF37]/40 hover:bg-[#0D1C33]"
              >
                <div className="font-display text-2xl font-extrabold text-[#D4AF37]/80">
                  {step.num}
                </div>
                <h4 className="mt-2 font-display text-sm font-bold text-white">
                  {step.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
