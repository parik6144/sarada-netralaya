'use client';

import { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

const COUNT_KEY = 'snm-browser-visit-count';
const SEEN_KEY = 'snm-browser-visit-seen-at';
const VISIT_GAP_MS = 30 * 60 * 1000;

function recordBrowserVisit(now = Date.now()) {
  const previousCount = Number(localStorage.getItem(COUNT_KEY) || '0');
  const lastSeen = Number(localStorage.getItem(SEEN_KEY) || '0');
  const safeCount = Number.isFinite(previousCount) && previousCount > 0 ? Math.floor(previousCount) : 0;
  const isNewVisit = !Number.isFinite(lastSeen) || lastSeen <= 0 || now - lastSeen >= VISIT_GAP_MS;
  const count = isNewVisit ? safeCount + 1 : safeCount;

  if (isNewVisit) localStorage.setItem(COUNT_KEY, String(count));
  localStorage.setItem(SEEN_KEY, String(now));
  return count;
}

function clearLegacyCounter() {
  if (!('serviceWorker' in navigator)) return;
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    registrations.forEach((registration) => {
      const script =
        registration.active?.scriptURL ||
        registration.waiting?.scriptURL ||
        registration.installing?.scriptURL ||
        '';
      if (script.includes('visitor-counter-sw')) registration.unregister();
    });
  });
  if ('caches' in window) caches.delete('snm-visitor-counter-v1').catch(() => undefined);
}

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    setCount(recordBrowserVisit());
    clearLegacyCounter();
  }, []);

  const label = count === null ? '—' : count.toLocaleString('en-US');

  return (
    <p
      className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs text-slate-400"
      title="Visits recorded on this browser"
      aria-label={count === null ? 'Visitor count on this browser' : `Visitor count on this browser: ${label}`}
    >
      <Eye className="h-3.5 w-3.5 shrink-0 text-brand-red" aria-hidden />
      <span className="whitespace-nowrap">
        Visitor Count
        <span className="text-slate-500"> · this browser</span>
      </span>
      <span className="font-semibold tabular-nums text-white">{label}</span>
    </p>
  );
}
