import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Sparkles, MessageSquare, Clock } from 'lucide-react';
import { ESTIMATOR_OPTIONS } from '../data/portfolioData';

interface ProjectEstimatorProps {
  onApplyEstimateToForm: (serviceName: string, estimatedBudget: string, messageNote: string) => void;
  whatsAppNumber: string;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onApplyEstimateToForm, whatsAppNumber }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(ESTIMATOR_OPTIONS.services[0].id);
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>(['source-files']);

  const currentService = ESTIMATOR_OPTIONS.services.find((s) => s.id === selectedServiceId) || ESTIMATOR_OPTIONS.services[0];

  const toggleAddon = (id: string) => {
    setSelectedAddonIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const addonsTotal = selectedAddonIds.reduce((sum, id) => {
    const addon = ESTIMATOR_OPTIONS.additions.find((a) => a.id === id);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const totalPrice = currentService.basePrice + addonsTotal;
  const isExpress = selectedAddonIds.includes('express');
  const estimatedDays = isExpress ? Math.max(2, Math.floor(currentService.timeDays / 2)) : currentService.timeDays;

  const handleTransfer = () => {
    const addonNames = selectedAddonIds
      .map((id) => ESTIMATOR_OPTIONS.additions.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const note = `I calculated an estimate using your site calculator: ${currentService.name} with add-ons: [${addonNames || 'None'}]. Estimated total: $${totalPrice} (approx. ${estimatedDays} business days).`;
    onApplyEstimateToForm(currentService.name, `$${totalPrice}`, note);

    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cleanWaNumber = whatsAppNumber.replace(/[^0-9]/g, '');
  const waQuoteText = encodeURIComponent(
    `Hello Faiza! I used your portfolio price calculator:\n- Service: ${currentService.name}\n- Add-ons: ${
      selectedAddonIds.length ? selectedAddonIds.join(', ') : 'None'
    }\n- Total Estimate: $${totalPrice}\n- Timeline: ~${estimatedDays} days\nCan we discuss my project?`
  );
  const waUrl = `https://wa.me/${cleanWaNumber}?text=${waQuoteText}`;

  return (
    <section id="estimator" className="relative border-t border-white/10 bg-[#070E1A] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#D4AF37]">
            <Calculator className="h-4 w-4" />
            <span>Interactive Project Estimator</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Transparent Pricing</span>
          </div>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-4xl">
            Calculate Your Project Scope & Investment
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Select your required service and preferred add-ons to obtain an instant transparent estimate. You can transfer this brief directly into the contact form or send it via WhatsApp.
          </p>
        </div>

        {/* 2-Column Calculator Box */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          
          {/* Options Column */}
          <div className="space-y-6 lg:col-span-7">
            
            {/* Step 1: Base Service Selection */}
            <div className="rounded-2xl border border-white/10 bg-[#0D1C33]/60 p-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-3">
                1. Select Core Service
              </label>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {ESTIMATOR_OPTIONS.services.map((service) => {
                  const isSelected = selectedServiceId === service.id;
                  return (
                    <button
                      key={service.id}
                      onClick={() => setSelectedServiceId(service.id)}
                      className={`flex flex-col justify-between rounded-xl border p-4 text-left transition-all ${
                        isSelected
                          ? 'border-[#D4AF37] bg-[#D4AF37]/10 shadow-lg'
                          : 'border-white/10 bg-[#070E1A]/60 hover:border-white/20'
                      }`}
                    >
                      <span className="text-xs font-bold text-white leading-tight">
                        {service.name}
                      </span>
                      <div className="mt-3 flex items-center justify-between text-xs">
                        <span className="text-[#D4AF37] font-semibold">${service.basePrice}</span>
                        <span className="text-[11px] text-slate-400">~{service.timeDays} days</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Add-ons */}
            <div className="rounded-2xl border border-white/10 bg-[#0D1C33]/60 p-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-3">
                2. Optional Add-ons & Deliverables
              </label>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {ESTIMATOR_OPTIONS.additions.map((addon) => {
                  const isChecked = selectedAddonIds.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`flex items-center justify-between rounded-xl border p-3.5 text-left text-xs transition-all ${
                        isChecked
                          ? 'border-[#D4AF37]/80 bg-[#D4AF37]/10 text-white font-medium'
                          : 'border-white/10 bg-[#070E1A]/60 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                            isChecked
                              ? 'border-[#D4AF37] bg-[#D4AF37] text-slate-950'
                              : 'border-white/20 bg-transparent'
                          }`}
                        >
                          {isChecked && <Check className="h-3 w-3 stroke-[3]" />}
                        </div>
                        <span className="leading-snug">{addon.name}</span>
                      </div>
                      <span className="ml-2 font-bold text-[#D4AF37] shrink-0">
                        +${addon.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Investment Summary Column */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 rounded-2xl border border-[#D4AF37]/40 bg-[#0D1C33] p-6 shadow-2xl">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                  Estimated Investment
                </span>
                <span className="rounded bg-[#D4AF37]/15 px-2 py-0.5 text-[11px] font-semibold text-[#D4AF37]">
                  Fixed-Price Quote
                </span>
              </div>

              {/* Price Display */}
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-4xl font-extrabold text-white tabular-nums sm:text-5xl">
                  ${totalPrice}
                </span>
                <span className="text-xs text-slate-400">USD (Estimated)</span>
              </div>

              {/* Delivery Speed */}
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-white/5 p-3 text-xs text-slate-300">
                <Clock className="h-4 w-4 text-[#D4AF37] shrink-0" />
                <span>
                  Estimated Delivery: <strong className="text-white">{estimatedDays} Business Days</strong>
                  {isExpress && ' (Express Priority Activated)'}
                </span>
              </div>

              {/* Selected Breakdown */}
              <div className="mt-6 space-y-2 border-t border-white/10 pt-4 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span className="truncate max-w-[200px]">{currentService.name}</span>
                  <span className="font-semibold text-white">${currentService.basePrice}</span>
                </div>
                {selectedAddonIds.map((id) => {
                  const addon = ESTIMATOR_OPTIONS.additions.find((a) => a.id === id);
                  if (!addon) return null;
                  return (
                    <div key={id} className="flex justify-between text-slate-400">
                      <span className="truncate max-w-[200px]">+ {addon.name}</span>
                      <span>${addon.price}</span>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3">
                <button
                  onClick={handleTransfer}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B38F24] py-3 text-xs font-bold text-slate-950 shadow-lg shadow-[#D4AF37]/20 transition-all hover:brightness-110 active:scale-95"
                >
                  <span>Apply Estimate to Contact Form</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 py-3 text-xs font-semibold text-white transition-all hover:border-[#D4AF37]/40 hover:bg-white/10"
                >
                  <MessageSquare className="h-4 w-4 text-[#D4AF37]" />
                  <span>Send Estimate via WhatsApp</span>
                </a>
              </div>

              <p className="mt-4 text-center text-[11px] text-slate-400">
                Includes full revisions, commercial usage rights & master deliverables handoff.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
