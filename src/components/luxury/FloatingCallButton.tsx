'use client';

import { useState } from 'react';
import { site } from '@/data/site';

/** Fixed left-side designed call button */
export default function FloatingCallButton() {
  const [open, setOpen] = useState(false);
  const primary = site.phones[0];
  const secondary = site.phones[1];

  return (
    <div className="fixed left-4 sm:left-5 bottom-6 sm:bottom-8 z-[90] flex flex-col items-start gap-2">
      {open && (
        <div className="mb-1 w-[220px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_16px_40px_rgba(11,31,58,0.22)]">
          <div className="bg-[#0B1F3A] px-3 py-2.5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#F5D565]">Call SARADA</p>
            <p className="mt-0.5 text-xs text-white/70">Eye care desk</p>
          </div>
          <a
            href={`tel:${primary.replace(/\s/g, '')}`}
            className="flex items-center gap-3 border-b border-slate-100 px-3 py-3 hover:bg-sky-50 transition-colors"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-red text-white">
              <PhoneIcon className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-[11px] text-slate-500">Primary</span>
              <span className="block text-sm font-bold text-[#0B1F3A]">{primary}</span>
            </span>
          </a>
          <a
            href={`tel:${secondary.replace(/\s/g, '')}`}
            className="flex items-center gap-3 px-3 py-3 hover:bg-sky-50 transition-colors"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0B1F3A] text-white">
              <PhoneIcon className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-[11px] text-slate-500">Secondary</span>
              <span className="block text-sm font-bold text-[#0B1F3A]">{secondary}</span>
            </span>
          </a>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'Close call options' : 'Open call options'}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-brand-red text-white shadow-[0_12px_30px_rgba(200,16,46,0.45)] ring-4 ring-white transition hover:scale-105 hover:bg-brand-red-dark"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-brand-red/40 opacity-40" />
        {open ? (
          <span className="relative text-xl font-bold leading-none">×</span>
        ) : (
          <PhoneIcon className="relative h-6 w-6" />
        )}
      </button>
    </div>
  );
}

function PhoneIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z"
        fill="currentColor"
      />
    </svg>
  );
}
