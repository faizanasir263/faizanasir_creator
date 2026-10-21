import React, { useState } from 'react';
import { X, Check, Phone, MessageSquare, Info } from 'lucide-react';

interface WhatsAppConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentNumber: string;
  onSaveNumber: (newNumber: string) => void;
}

export const WhatsAppConfigModal: React.FC<WhatsAppConfigModalProps> = ({
  isOpen,
  onClose,
  currentNumber,
  onSaveNumber,
}) => {
  const [inputVal, setInputVal] = useState(currentNumber);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    onSaveNumber(inputVal.trim());
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleReset = () => {
    setInputVal('+923001234567');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl border border-[#D4AF37]/50 bg-[#0A1424] p-6 shadow-2xl">
        
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-[#D4AF37]" />
            <h3 className="font-display text-lg font-bold text-white">
              Configure WhatsApp Contact
            </h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg border border-white/10 p-1.5 text-slate-400 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <form onSubmit={handleSave} className="mt-5 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              WhatsApp Phone Number (with Country Code)
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="+923001234567 or +1234567890"
                className="w-full rounded-xl border border-white/15 bg-[#070E1A] pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                required
              />
            </div>
            <p className="mt-1.5 text-[11px] text-slate-400">
              Format: Include the international country code (e.g. <code>+92</code> for Pakistan, <code>+1</code> for US, <code>+44</code> for UK).
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#070E1A]/60 p-3.5 text-xs text-slate-300">
            <div className="flex items-center gap-1.5 text-[#D4AF37] font-semibold mb-1">
              <Info className="h-3.5 w-3.5" />
              <span>Live Test Link Preview:</span>
            </div>
            <div className="truncate text-slate-400 font-mono text-[11px]">
              https://wa.me/{inputVal.replace(/[^0-9]/g, '')}
            </div>
          </div>

          {savedSuccess && (
            <div className="flex items-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-3 text-xs text-emerald-300">
              <Check className="h-4 w-4 text-emerald-400" />
              <span>WhatsApp contact number updated successfully!</span>
            </div>
          )}

          <div className="flex items-center justify-between border-t border-white/10 pt-4">
            <button
              type="button"
              onClick={handleReset}
              className="text-xs text-slate-400 hover:text-white underline"
            >
              Reset to Default
            </button>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-3 py-2 text-xs font-semibold text-slate-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-lg bg-[#D4AF37] px-4 py-2 text-xs font-bold text-slate-950 hover:brightness-110"
              >
                Save Number
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
};
