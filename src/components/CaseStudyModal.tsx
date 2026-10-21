import React, { useEffect } from 'react';
import { X, Check, PenTool, ExternalLink, Sparkles, Layers, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../types';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, onInquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/85 p-4 backdrop-blur-md">
      <div 
        className="relative my-8 w-full max-w-4xl rounded-2xl border border-[#D4AF37]/40 bg-[#0A1424] shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with close button */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#0A1424]/95 px-6 py-4 backdrop-blur-md rounded-t-2xl">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-semibold uppercase tracking-wider text-[#D4AF37]">
              Case Study
            </span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-amber-300 font-medium bg-[#D4AF37]/15 px-2 py-0.5 rounded text-[11px]">
              Concept Project / Spec Work
            </span>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg border border-white/10 p-1.5 text-slate-400 transition-colors hover:border-white/30 hover:text-white"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="max-h-[80vh] overflow-y-auto px-6 py-6 sm:px-8">
          
          {/* Main Title & Kicker */}
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            {project.title}
          </h2>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <span>{project.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>Tools: {caseStudy.softwareUsed.join(', ')}</span>
          </div>

          {/* Featured Image */}
          <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-[#070E1A]">
            <img
              src={project.image}
              alt={`${project.title} design showcase`}
              className="w-full max-h-[420px] object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Transparent Spec Work Notice */}
          <div className="mt-6 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 text-xs text-amber-200">
            <strong className="font-semibold text-[#D4AF37]">Portfolio Authenticity Note: </strong>
            This is an original concept portfolio project designed from scratch by Faiza Creative Studio to demonstrate design methodology, typography choices, vector precision, and technical tool proficiency.
          </div>

          {/* Case Study 3 Core Pillars */}
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            
            {/* Pillar 1: Objective */}
            <div className="rounded-xl border border-white/10 bg-[#0D1C33]/60 p-5">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#D4AF37]">
                01. Objective & Challenge
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-200 font-medium">
                {caseStudy.objective}
              </p>
              <div className="mt-3 border-t border-white/5 pt-3">
                <span className="text-xs font-semibold text-slate-400">Design Challenge:</span>
                <p className="mt-1 text-xs text-slate-300">
                  {caseStudy.challenge}
                </p>
              </div>
            </div>

            {/* Pillar 3: Final Result & Deliverables */}
            <div className="rounded-xl border border-white/10 bg-[#0D1C33]/60 p-5">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#D4AF37]">
                03. Final Result & Impact
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-200 font-medium">
                {caseStudy.finalResult}
              </p>
              <div className="mt-3 border-t border-white/5 pt-3">
                <span className="text-xs font-semibold text-slate-400">Outcome Standard:</span>
                <p className="mt-1 text-xs text-[#D4AF37]">
                  {caseStudy.metricsOrOutcome}
                </p>
              </div>
            </div>

          </div>

          {/* Pillar 2: Design Process (Full Width) */}
          <div className="mt-8 rounded-xl border border-white/10 bg-[#0D1C33]/60 p-6">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#D4AF37]">
              02. Step-by-Step Design & Technical Process
            </h3>
            <div className="mt-4 space-y-3">
              {caseStudy.process.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/20 text-[11px] font-bold text-[#D4AF37]">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables Handoff Breakdown */}
          <div className="mt-8 border-t border-white/10 pt-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
              Included Deliverables & Master Files
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              {caseStudy.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 rounded-lg bg-white/5 p-2.5">
                  <Check className="h-4 w-4 text-[#D4AF37] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 bg-[#070E1A]/95 px-6 py-4 rounded-b-2xl">
          <div className="text-xs text-slate-400">
            Inspired by this project? Let's discuss your requirements.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
            >
              Close
            </button>
            <button
              onClick={() => {
                const name = project.title;
                onClose();
                onInquire(name);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#D4AF37] px-4 py-2 text-xs font-bold text-slate-950 hover:brightness-110"
            >
              <span>Inquire for Similar Work</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
