import React from 'react';
import { Star, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_LIST } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  return (
    <section className="relative border-t border-white/10 bg-[#0A1424] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Transparency Banner */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#D4AF37]">
              <span>Client Feedback Standards</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Sample Placeholders</span>
            </div>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Communication Standards & Review Format
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Sample feedback formats illustrating the review benchmarks Faiza Creative Studio commits to delivering on every client project.
            </p>
          </div>

          {/* Explicit Transparency Notice as required */}
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs text-amber-200 max-w-md">
            <div className="flex items-center gap-1.5 font-bold text-[#D4AF37] mb-1">
              <ShieldAlert className="h-4 w-4 shrink-0" />
              <span>Sample Placeholders Notice</span>
            </div>
            In strict compliance with professional honesty, the reviews below are clearly marked sample placeholders. Real client testimonials will be published here as contracted engagements conclude.
          </div>
        </div>

        {/* 3-in-a-row Testimonial Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS_LIST.map((t) => (
            <div
              key={t.id}
              className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0D1C33]/60 p-6 shadow-lg transition-all duration-200 hover:border-[#D4AF37]/40 hover:bg-[#0D1C33]"
            >
              <div>
                {/* Header: Clear Sample Marker + 5 Stars */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <span className="rounded bg-white/5 px-2 py-0.5 text-[11px] font-semibold text-[#D4AF37]">
                    Sample Review Placeholder
                  </span>
                  <div className="flex items-center gap-0.5 text-[#D4AF37]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-[#D4AF37]" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="mt-5 text-sm leading-relaxed text-slate-300 italic">
                  "{t.content}"
                </p>
              </div>

              {/* Author & Service Meta */}
              <div className="mt-6 border-t border-white/5 pt-4">
                <div className="font-display text-sm font-bold text-white">
                  {t.name}
                </div>
                <div className="text-xs text-slate-400">
                  {t.role} · <span className="text-slate-300">{t.company}</span>
                </div>
                <div className="mt-2 text-[11px] font-medium text-[#D4AF37]">
                  Project: {t.serviceReceived}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Banner */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-[#070E1A]/80 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/20 text-[#D4AF37]">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                Be among our founding featured client stories
              </h4>
              <p className="text-xs text-slate-400">
                Book a project this month to receive priority founder dedication and an introductory service rate.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="whitespace-nowrap shrink-0 rounded-lg bg-white/10 px-4 py-2.5 text-xs font-semibold text-white hover:bg-[#D4AF37] hover:text-slate-950 transition-colors"
          >
            Become a Client Partner
          </a>
        </div>

      </div>
    </section>
  );
};
