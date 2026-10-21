import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Settings, 
  Clock, 
  MapPin,
  ExternalLink 
} from 'lucide-react';
import { STUDIO_INFO, SERVICES_LIST } from '../data/portfolioData';
import { ContactFormData } from '../types';

interface ContactProps {
  initialService?: string;
  initialMessage?: string;
  initialBudget?: string;
  whatsAppNumber: string;
  onOpenWhatsAppConfig: () => void;
}

export const Contact: React.FC<ContactProps> = ({
  initialService,
  initialMessage,
  initialBudget,
  whatsAppNumber,
  onOpenWhatsAppConfig,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    service: initialService || SERVICES_LIST[0].title,
    budget: initialBudget || 'Under $100',
    timeline: 'Within 1-2 Weeks',
    message: initialMessage || '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  // Sync props if changed from estimator or service click
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialMessage) {
      setFormData((prev) => ({ ...prev, message: initialMessage }));
    }
  }, [initialMessage]);

  useEffect(() => {
    if (initialBudget) {
      setFormData((prev) => ({ ...prev, budget: initialBudget }));
    }
  }, [initialBudget]);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your name or company.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.service) {
      newErrors.service = 'Please choose a service.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide at least a brief 10-character description of your project.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate direct client dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 600);
  };

  const cleanWaNumber = whatsAppNumber.replace(/[^0-9]/g, '');
  const waContactUrl = `https://wa.me/${cleanWaNumber}?text=${encodeURIComponent(
    `Hello Faiza! My name is ${formData.fullName || 'a client'}.\nI'm interested in: ${formData.service}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\nBrief: ${formData.message || 'Looking to discuss a new creative project.'}`
  )}`;

  const mailtoUrl = `mailto:${STUDIO_INFO.email}?subject=${encodeURIComponent(
    `Project Inquiry: ${formData.service} - ${formData.fullName}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.fullName}\nEmail: ${formData.email}\nService: ${formData.service}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\n\nProject Details:\n${formData.message}`
  )}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(STUDIO_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyMessage = () => {
    const text = `Name: ${formData.fullName}\nEmail: ${formData.email}\nService: ${formData.service}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\nDetails: ${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2000);
  };

  return (
    <section id="contact" className="relative border-t border-white/10 bg-[#070E1A] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#D4AF37]">
            <Mail className="h-4 w-4" />
            <span>Get In Touch</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">Direct Inquiries</span>
          </div>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-4xl">
            Let's Bring Your Brand Vision to Life
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Have a project in mind, need vector art, video editing, or a responsive website? Send a message below or start an instant chat on WhatsApp.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Left Column: Direct Info & WhatsApp Cards */}
          <div className="space-y-6 lg:col-span-5">
            
            {/* WhatsApp Card (Requested feature with configurable number) */}
            <div className="rounded-2xl border border-[#D4AF37]/40 bg-[#0D1C33] p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                  <MessageSquare className="h-4 w-4" />
                  <span>Instant WhatsApp Chat</span>
                </div>
                <button
                  onClick={onOpenWhatsAppConfig}
                  className="flex items-center gap-1 text-[11px] font-semibold text-slate-400 hover:text-white"
                  title="Configure WhatsApp Phone Number"
                >
                  <Settings className="h-3 w-3" />
                  <span>Edit Number</span>
                </button>
              </div>

              <h3 className="mt-3 font-display text-xl font-bold text-white">
                Chat Directly on WhatsApp
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Prefer fast, mobile messaging? Click below to start a chat with Faiza Creative Studio. Ideal for quick quotes, sharing design references, or initial inquiries.
              </p>

              <div className="mt-4 rounded-xl border border-white/10 bg-[#070E1A] p-3 text-xs flex items-center justify-between">
                <div>
                  <span className="text-slate-400 text-[11px] block">Current WhatsApp:</span>
                  <span className="font-mono font-medium text-white">{whatsAppNumber}</span>
                </div>
                <button
                  onClick={onOpenWhatsAppConfig}
                  className="rounded bg-white/10 px-2 py-1 text-[11px] text-[#D4AF37] hover:bg-white/20"
                >
                  Change
                </button>
              </div>

              <a
                href={waContactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B38F24] py-3 text-xs font-bold text-slate-950 shadow-lg shadow-[#D4AF37]/20 transition-all hover:brightness-110 active:scale-95"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Launch WhatsApp Discussion</span>
              </a>
            </div>

            {/* Direct Studio Details */}
            <div className="rounded-2xl border border-white/10 bg-[#0D1C33]/60 p-6 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                Studio Coordinates
              </h4>

              <div className="flex items-start gap-3 text-xs">
                <Mail className="h-4 w-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="flex-1">
                  <span className="text-slate-400 block text-[11px]">Primary Email:</span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="font-medium text-white">{STUDIO_INFO.email}</span>
                    <button
                      onClick={handleCopyEmail}
                      className="text-slate-400 hover:text-[#D4AF37]"
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs">
                <Clock className="h-4 w-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[11px]">Working Hours:</span>
                  <span className="text-white font-medium">{STUDIO_INFO.hours}</span>
                  <span className="text-slate-400 block text-[11px] mt-0.5">Typical response within 2–4 hours</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs">
                <MapPin className="h-4 w-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 block text-[11px]">Availability:</span>
                  <span className="text-white font-medium">{STUDIO_INFO.location}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-[#0D1C33] p-6 shadow-xl sm:p-8">
              
              {submitSuccess ? (
                <div className="space-y-6 py-6 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">
                      Message Prepared Successfully!
                    </h3>
                    <p className="mt-2 text-sm text-slate-300 max-w-md mx-auto">
                      Thank you, <strong className="text-white">{formData.fullName}</strong>. Your project brief has been recorded. To guarantee instant delivery, choose an action below:
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-[#070E1A] p-4 text-left text-xs text-slate-300 space-y-1 font-mono">
                    <div><span className="text-slate-400">Service:</span> {formData.service}</div>
                    <div><span className="text-slate-400">Budget:</span> {formData.budget}</div>
                    <div><span className="text-slate-400">Timeline:</span> {formData.timeline}</div>
                    <div className="truncate"><span className="text-slate-400">Brief:</span> {formData.message}</div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={mailtoUrl}
                      className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#D4AF37] px-5 py-3 text-xs font-bold text-slate-950 hover:brightness-110"
                    >
                      <Mail className="h-4 w-4" />
                      <span>Send via Default Email App</span>
                    </a>

                    <a
                      href={waContactUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-xs font-semibold text-white hover:border-[#D4AF37]/40"
                    >
                      <MessageSquare className="h-4 w-4 text-[#D4AF37]" />
                      <span>Forward to WhatsApp</span>
                    </a>

                    <button
                      onClick={handleCopyMessage}
                      className="flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-xl border border-white/10 px-4 py-3 text-xs text-slate-400 hover:text-white"
                    >
                      <Copy className="h-4 w-4" />
                      <span>{copiedMessage ? 'Copied!' : 'Copy Brief'}</span>
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitSuccess(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        service: SERVICES_LIST[0].title,
                        budget: 'Under $100',
                        timeline: 'Within 1-2 Weeks',
                        message: '',
                      });
                    }}
                    className="text-xs text-slate-400 hover:text-white underline pt-4"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: '' });
                        }}
                        placeholder="e.g. Sarah Jenkins"
                        className={`w-full rounded-xl border bg-[#070E1A] px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
                          errors.fullName
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-white/15 focus:border-[#D4AF37] focus:ring-[#D4AF37]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="e.g. sarah@example.com"
                        className={`w-full rounded-xl border bg-[#070E1A] px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-white/15 focus:border-[#D4AF37] focus:ring-[#D4AF37]'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                  </div>

                  {/* Service Required Dropdown */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Service Required *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full rounded-xl border border-white/15 bg-[#070E1A] px-4 py-3 text-sm text-white focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                    >
                      {SERVICES_LIST.map((s) => (
                        <option key={s.id} value={s.title} className="bg-[#070E1A] text-white">
                          {s.title} ({s.priceEstimate})
                        </option>
                      ))}
                      <option value="Custom Multi-Service Package" className="bg-[#070E1A] text-white">
                        Custom Multi-Service Package
                      </option>
                    </select>
                  </div>

                  {/* Budget & Timeline Grid */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Approximate Budget (USD)
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-[#070E1A] px-4 py-3 text-sm text-white focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                      >
                        <option value="Under $100">Under $100 (Starter Asset)</option>
                        <option value="$100 – $250">$100 – $250 (Identity or Video)</option>
                        <option value="$250 – $500">$250 – $500 (Landing Page / Multi-Post)</option>
                        <option value="$500+">$500+ (Full Suite & Website)</option>
                        <option value="To Be Discussed">To Be Discussed</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Desired Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full rounded-xl border border-white/15 bg-[#070E1A] px-4 py-3 text-sm text-white focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                      >
                        <option value="Urgent (24-48 Hours)">Urgent (24–48 Hours)</option>
                        <option value="Within 1-2 Weeks">Within 1–2 Weeks</option>
                        <option value="Flexible / Next Month">Flexible / Next Month</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details Message */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Project Details & Goals *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Tell me about your business, target audience, style preferences, and any specific deadlines..."
                      className={`w-full rounded-xl border bg-[#070E1A] px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 ${
                        errors.message
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-white/15 focus:border-[#D4AF37] focus:ring-[#D4AF37]'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5B842] to-[#B38F24] py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-[#D4AF37]/25 transition-all hover:brightness-110 active:scale-95 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Validating Brief...</span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Submit Project Brief</span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-slate-400">
                    Strict privacy guaranteed. Your email and ideas will never be shared.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
