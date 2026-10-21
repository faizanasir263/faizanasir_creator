import React, { useState } from 'react';
import { Eye, ArrowUpRight, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { ServiceCategory, ProjectItem } from '../types';
import { CaseStudyModal } from './CaseStudyModal';

interface PortfolioProps {
  onInquireProject: (projectName: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onInquireProject }) => {
  const [activeFilter, setActiveFilter] = useState<ServiceCategory>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filterTabs: { id: ServiceCategory; label: string }[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'illustrator', label: 'Adobe Illustrator & Vectors' },
    { id: 'social-media', label: 'Social Media Design' },
    { id: 'video-editing', label: 'Premiere Pro Video' },
    { id: 'wordpress', label: 'WordPress & Landing Pages' },
    { id: 'graphic-design', label: 'Graphic Design' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="relative border-t border-white/10 bg-[#0A1424] py-20 lg:py-28">
      <div id="case-studies" className="scroll-mt-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#D4AF37]">
              <span>Curated Works</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Concept Showcase</span>
            </div>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Featured Portfolio & Case Studies
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Explore recent concept projects demonstrating vector craftsmanship, video editing pacing, and responsive UI engineering.
            </p>
          </div>

          {/* Transparent Spec Work disclaimer note */}
          <div className="rounded-xl border border-white/10 bg-[#070E1A]/80 px-4 py-3 text-xs text-slate-400 max-w-md">
            <span className="font-semibold text-[#D4AF37]">Transparent Portfolio: </span>
            Projects are original concept specifications illustrating design and technical capabilities until commissioned client works are added.
          </div>
        </div>

        {/* Filter Controls (Segmented clean control, single-line buttons) */}
        <div className="mt-10 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`whitespace-nowrap shrink-0 rounded-lg px-4 py-2 text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-[#D4AF37] text-slate-950 shadow-md shadow-[#D4AF37]/20 font-bold'
                    : 'border border-white/10 bg-[#0D1C33] text-slate-300 hover:border-white/30 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Project Bento Grid */}
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl border border-white/10 bg-[#0D1C33]/60 overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-[#D4AF37]/50 hover:bg-[#0D1C33] hover:shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Image Container with overlay */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#070E1A]">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.categoryLabel}`}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  
                  {/* Subtle Dark Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070E1A] via-transparent to-transparent opacity-80" />

                  {/* Top Pill / Badge strictly as unboxed indicator */}
                  <div className="absolute top-3 left-3 rounded-md bg-[#070E1A]/90 px-2.5 py-1 text-[11px] font-medium text-[#D4AF37] border border-white/10 backdrop-blur-sm">
                    Concept Project
                  </div>

                  {/* View Action Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100 bg-black/40 backdrop-blur-[2px]">
                    <span className="flex items-center gap-1.5 rounded-xl bg-[#D4AF37] px-4 py-2 text-xs font-bold text-slate-950 shadow-lg">
                      <Eye className="h-4 w-4" />
                      <span>View Case Study</span>
                    </span>
                  </div>
                </div>

                {/* Content info */}
                <div className="p-6">
                  {/* Category Kicker */}
                  <div className="text-xs font-semibold text-[#D4AF37]">
                    {project.categoryLabel}
                  </div>

                  {/* Title */}
                  <h3 className="mt-2 font-display text-lg font-bold text-white transition-colors group-hover:text-[#FFF1C5]">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    {project.shortDesc}
                  </p>

                  {/* Unboxed Tags */}
                  <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-slate-400">
                    {project.tags.map((tag, i) => (
                      <React.Fragment key={tag}>
                        <span>{tag}</span>
                        {i < project.tags.length - 1 && (
                          <span aria-hidden="true" className="text-slate-600">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="border-t border-white/5 p-6 pt-3 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-400">
                  Includes full process & tools
                </span>
                <span className="flex items-center gap-1 font-semibold text-[#D4AF37] group-hover:underline">
                  <span>Read Study</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onInquire={onInquireProject}
        />
      )}
    </section>
  );
};
