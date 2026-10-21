import React, { useState } from 'react';
import { 
  X, 
  Globe, 
  Server, 
  ShieldCheck, 
  DollarSign, 
  ExternalLink, 
  Check, 
  Copy, 
  CheckCircle2, 
  AlertCircle,
  Terminal,
  HelpCircle
} from 'lucide-react';

interface PublishGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PublishGuideModal: React.FC<PublishGuideModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'deployment' | 'domain' | 'costs'>('deployment');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/85 p-4 backdrop-blur-md">
      <div 
        className="relative my-8 w-full max-w-3xl rounded-2xl border border-[#D4AF37]/50 bg-[#0A1424] shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#0A1424]/95 px-6 py-4 backdrop-blur-md rounded-t-2xl">
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-[#D4AF37]" />
            <div>
              <h3 className="font-display text-lg font-bold text-white">
                Website Deployment & Custom Domain Guide
              </h3>
              <p className="text-[11px] text-slate-400">
                Step-by-step launch instructions and transparent cost breakdown
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg border border-white/10 p-1.5 text-slate-400 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-white/10 bg-[#070E1A] px-6">
          <button
            onClick={() => setActiveTab('deployment')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 transition-all ${
              activeTab === 'deployment'
                ? 'border-[#D4AF37] text-[#D4AF37]'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            1. Hosting & Deployment
          </button>
          <button
            onClick={() => setActiveTab('domain')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 transition-all ${
              activeTab === 'domain'
                ? 'border-[#D4AF37] text-[#D4AF37]'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            2. Connect Custom Domain (DNS)
          </button>
          <button
            onClick={() => setActiveTab('costs')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 transition-all ${
              activeTab === 'costs'
                ? 'border-[#D4AF37] text-[#D4AF37]'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            3. Account Connections & Costs
          </button>
        </div>

        {/* Tab Content */}
        <div className="max-h-[75vh] overflow-y-auto px-6 py-6 sm:px-8 space-y-6 text-xs text-slate-300">
          
          {/* TAB 1: DEPLOYMENT */}
          {activeTab === 'deployment' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-display text-base font-bold text-white mb-1">
                  How to Publish Your Portfolio for Free
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  Your portfolio is built on standard Vite + React + Tailwind CSS. You can host it at zero recurring cost on world-class global Content Delivery Networks (CDNs) like <strong className="text-white">Vercel</strong> or <strong className="text-white">Netlify</strong>.
                </p>
              </div>

              {/* Step A: Build Command */}
              <div className="rounded-xl border border-white/10 bg-[#070E1A] p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-white uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                    <Terminal className="h-3.5 w-3.5 text-[#D4AF37]" />
                    <span>Step 1: Test & Build the Static Assets</span>
                  </span>
                  <button
                    onClick={() => copyToClipboard('npm run build', 'cmd-build')}
                    className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-[#D4AF37]"
                  >
                    {copiedCode === 'cmd-build' ? <CheckCircle2 className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                    <span>{copiedCode === 'cmd-build' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <div className="rounded-lg bg-black/60 p-2.5 font-mono text-[11px] text-amber-300">
                  npm run build
                </div>
                <p className="mt-2 text-[11px] text-slate-400">
                  This compiles your TypeScript and generates an optimized, lightning-fast static folder in <code>/dist</code>.
                </p>
              </div>

              {/* Step B: 1-Click Hosting on Vercel */}
              <div className="rounded-xl border border-white/10 bg-[#0D1C33] p-5 space-y-3">
                <div className="font-semibold text-white text-sm flex items-center gap-2">
                  <Server className="h-4 w-4 text-[#D4AF37]" />
                  <span>Recommended Option: Deploy via Vercel (Free)</span>
                </div>
                <ol className="list-decimal list-inside space-y-2 leading-relaxed text-slate-300">
                  <li>Push your portfolio repository to a free <strong className="text-white">GitHub</strong> account.</li>
                  <li>Go to <strong className="text-white">vercel.com</strong>, sign up with GitHub, and click <strong className="text-white">"Add New Project"</strong>.</li>
                  <li>Import your portfolio repository. Vercel automatically detects Vite and sets the build command to <code>npm run build</code> and output folder to <code>dist</code>.</li>
                  <li>Click <strong className="text-white">"Deploy"</strong>. Within ~30 seconds, your website goes live with a free SSL certificate on a URL like <code>faiza-studio.vercel.app</code>.</li>
                </ol>
              </div>

              {/* Alternative: Netlify */}
              <div className="rounded-xl border border-white/10 bg-[#070E1A]/80 p-4">
                <span className="font-semibold text-white block mb-1">
                  Alternative Option: Netlify Drop (Zero Setup)
                </span>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  Run <code>npm run build</code>, go to <strong className="text-slate-200">app.netlify.com/drop</strong>, and drag-and-drop the generated <code>dist</code> folder. Your site is online instantly.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: DOMAIN */}
          {activeTab === 'domain' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-display text-base font-bold text-white mb-1">
                  Connecting a Custom Domain (e.g., faizacreative.com)
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  A custom domain gives your studio instant credibility. Follow these simple steps to hook up your own domain to your hosting:
                </p>
              </div>

              {/* Step 1: Purchasing */}
              <div className="rounded-xl border border-white/10 bg-[#0D1C33] p-4">
                <span className="font-semibold text-white block mb-1 text-sm">
                  1. Purchase your Domain Name
                </span>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Recommended registrars: <strong className="text-white">Namecheap</strong>, <strong className="text-white">Cloudflare Registrar</strong>, or <strong className="text-white">GoDaddy</strong>. Search for names like <code>faizacreativestudio.com</code> or <code>faizadesign.com</code>.
                </p>
              </div>

              {/* Step 2: DNS Table */}
              <div className="rounded-xl border border-white/10 bg-[#070E1A] p-4">
                <span className="font-semibold text-white block mb-2 text-sm">
                  2. Add these DNS Records at your Registrar
                </span>
                <p className="text-slate-400 text-[11px] mb-3">
                  Log in to your registrar's DNS Management dashboard and add two standard DNS records:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left font-mono text-[11px] border border-white/10 rounded-lg">
                    <thead className="bg-white/5 text-[#D4AF37]">
                      <tr>
                        <th className="p-2 border-b border-white/10">Type</th>
                        <th className="p-2 border-b border-white/10">Host / Name</th>
                        <th className="p-2 border-b border-white/10">Points To / Target</th>
                        <th className="p-2 border-b border-white/10">TTL</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-slate-200">
                      <tr>
                        <td className="p-2 font-bold text-[#D4AF37]">A</td>
                        <td className="p-2">@ (root)</td>
                        <td className="p-2">76.76.21.21</td>
                        <td className="p-2 text-slate-400">Automatic / 3600</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold text-[#D4AF37]">CNAME</td>
                        <td className="p-2">www</td>
                        <td className="p-2">cname.vercel-dns.com</td>
                        <td className="p-2 text-slate-400">Automatic / 3600</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-3 text-[11px] text-slate-400">
                  (Note: If you choose Netlify instead of Vercel, point the A record to <code>75.2.60.5</code> and CNAME to your <code>[app-name].netlify.app</code>).
                </p>
              </div>

              {/* Step 3: Free SSL */}
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4">
                <div className="flex items-center gap-2 font-bold text-emerald-300 mb-1">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Automatic Free SSL (HTTPS Lock Icon)</span>
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  Both Vercel and Netlify provision free Let's Encrypt SSL certificates automatically within minutes after DNS propagates. You never have to pay extra for HTTPS security.
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: COSTS */}
          {activeTab === 'costs' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-display text-base font-bold text-white mb-1">
                  Transparent Cost & Account Breakdown
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  As an independent creative, keeping initial overhead low is critical. Here is an honest breakdown of every required and optional expense:
                </p>
              </div>

              {/* Cost Matrix Table */}
              <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#070E1A]">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#0D1C33] text-[#D4AF37]">
                    <tr>
                      <th className="p-3">Service</th>
                      <th className="p-3">Recommended Provider</th>
                      <th className="p-3">Estimated Cost</th>
                      <th className="p-3">Required?</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-slate-300">
                    <tr>
                      <td className="p-3 font-semibold text-white">Custom Domain</td>
                      <td className="p-3">Namecheap / Cloudflare</td>
                      <td className="p-3 font-mono font-bold text-emerald-400">~$10–$14 / year</td>
                      <td className="p-3 text-amber-300">Recommended for branding</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-white">Web Hosting & CDN</td>
                      <td className="p-3">Vercel or Netlify</td>
                      <td className="p-3 font-mono font-bold text-emerald-400">$0 / month (Free Tier)</td>
                      <td className="p-3 text-emerald-400">Required (Free)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-white">SSL (HTTPS Security)</td>
                      <td className="p-3">Let's Encrypt (Built-in)</td>
                      <td className="p-3 font-mono font-bold text-emerald-400">$0 (Free Forever)</td>
                      <td className="p-3 text-emerald-400">Required (Included)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-white">Custom Business Email</td>
                      <td className="p-3">Cloudflare Email Routing</td>
                      <td className="p-3 font-mono font-bold text-emerald-400">$0 (Forwards to Gmail)</td>
                      <td className="p-3 text-slate-400">Optional (Free)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-white">Form & WhatsApp Leads</td>
                      <td className="p-3">Direct WhatsApp & Mailto</td>
                      <td className="p-3 font-mono font-bold text-emerald-400">$0 (Zero 3rd party fee)</td>
                      <td className="p-3 text-emerald-400">Active (Free)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Total Summary Callout */}
              <div className="rounded-xl border border-[#D4AF37]/40 bg-[#0D1C33] p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-slate-400">
                    Total Estimated Annual Cost to Run:
                  </span>
                  <span className="font-display text-xl font-bold text-[#D4AF37]">
                    ~$10.00 – $14.00 Total / Year
                  </span>
                </div>
                <p className="mt-2 text-[11px] text-slate-400">
                  Because this application is lightweight and doesn't require paid backend databases, your total operating cost is solely your annual domain registration fee!
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between border-t border-white/10 bg-[#070E1A]/95 px-6 py-4 rounded-b-2xl">
          <div className="text-[11px] text-slate-400">
            Need hands-on help? The site code is ready for immediate export.
          </div>
          <button
            onClick={onClose}
            className="rounded-lg bg-[#D4AF37] px-4 py-2 text-xs font-bold text-slate-950 hover:brightness-110"
          >
            Got It, Close Guide
          </button>
        </div>

      </div>
    </div>
  );
};
