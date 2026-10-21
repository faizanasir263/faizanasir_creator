import React, { useState } from 'react';
import { 
  Palette, 
  Share2, 
  PenTool, 
  Video, 
  Globe, 
  Search, 
  Layout, 
  Check, 
  ArrowRight,
  Clock,
  Sparkles
} from 'lucide-react';
import { SERVICES_LIST } from '../data/portfolioData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [selectedModalService, setSelectedModalService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'graphic-design':
        return <Palette className="h-6 w-6 text-[#D4AF37]" />;
      case 'social-media':
        return <Share2 className="h-6 w-6 text-[#D4AF37]" />;
      case 'illustrator-design':
        return <PenTool className="h-6 w-6 text-[#D4AF37]" />;
      case 'video-editing':
        return <Video className="h-6 w-6 text-[#D4AF37]" />;
      case 'wordpress-design':
        return <Globe className="h-6 w-6 text-[#D4AF37]" />;
      case 'landing-page-design':
        return <Layout className="h-6 w-6 text-[#D4AF37]" />;
      case 'seo-marketing':
        return <Search className="h-6 w-6 text-[#D4AF37]" />;
      default:
        return <Sparkles className="h-6 w-6 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="services" className="relative border-t border-white/10 bg-[#070E1A] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#D4AF37]">
              <span>Core Capabilities</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Services & Solutions</span>
            </div>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Specialized Design & Digital Marketing Services
            </h2>
            <p className="mt-3 text-sm text-slate-300 sm:text-base">
              From bespoke vector branding and high-retention video reels to responsive WordPress sites and SEO foundations.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] hover:text-[#FFF1C5]"
          >
            <span>Request custom combination</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Services Grid (7 items) */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES_LIST.map((service, idx) => (
            <div
              key={service.id}
              className={`group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0D1C33]/70 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#D4AF37]/50 hover:bg-[#0D1C33] hover:shadow-xl ${
                idx === 0 ? 'lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Header of card: Icon + Price Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#070E1A] shadow-inner transition-colors group-hover:border-[#D4AF37]/40">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="text-xs font-semibold text-[#D4AF37]">
                    {service.priceEstimate}
                  </span>
                </div>

                {/* Service Title & Tagline */}
                <h3 className="mt-5 font-display text-lg font-bold text-white transition-colors group-hover:text-[#FFF1C5]">
                  {service.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-[#D4AF37]/90">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="mt-3 text-xs leading-relaxed text-slate-300">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="mt-5 space-y-2 border-t border-white/5 pt-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    What You Receive:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {service.deliverables.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-3.5 w-3.5 shrink-0 text-[#D4AF37] mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Meta & Action */}
              <div className="mt-6 border-t border-white/5 pt-4">
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3 text-slate-500" />
                    <span>{service.turnaround}</span>
                  </span>
                  <span className="truncate max-w-[140px] text-right text-slate-400">
                    {service.software.slice(0, 2).join(', ')}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="flex-1 rounded-lg bg-white/5 py-2.5 px-3 text-center text-xs font-semibold text-white transition-colors hover:bg-[#D4AF37] hover:text-slate-950"
                  >
                    Inquire for Service
                  </button>
                  <button
                    onClick={() => setSelectedModalService(service)}
                    className="rounded-lg border border-white/10 p-2 text-slate-400 hover:border-[#D4AF37]/50 hover:text-white"
                    title="View Full Deliverables"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-lg rounded-2xl border border-[#D4AF37]/40 bg-[#0A1424] p-6 shadow-2xl">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#D4AF37]">
                  Service Overview
                </span>
                <h3 className="mt-1 font-display text-xl font-bold text-white">
                  {selectedModalService.title}
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  {selectedModalService.tagline}
                </p>
              </div>
              <button
                onClick={() => setSelectedModalService(null)}
                className="rounded-lg border border-white/10 p-1.5 text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="mt-5 space-y-4 text-xs text-slate-300">
              <p className="leading-relaxed">
                {selectedModalService.description}
              </p>

              <div>
                <h4 className="font-semibold text-white uppercase text-[11px] tracking-wider mb-2">
                  Complete Deliverables:
                </h4>
                <ul className="space-y-2">
                  {selectedModalService.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
                <div>
                  <span className="text-slate-400">Software Used:</span>
                  <p className="font-medium text-white mt-0.5">
                    {selectedModalService.software.join(', ')}
                  </p>
                </div>
                <div>
                  <span className="text-slate-400">Standard Delivery:</span>
                  <p className="font-medium text-white mt-0.5">
                    {selectedModalService.turnaround}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-3 border-t border-white/10 pt-4">
              <button
                onClick={() => setSelectedModalService(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const title = selectedModalService.title;
                  setSelectedModalService(null);
                  onSelectService(title);
                }}
                className="rounded-lg bg-[#D4AF37] px-4 py-2 text-xs font-bold text-slate-950 transition-all hover:brightness-110"
              >
                Book This Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
