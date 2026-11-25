'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'page_view';

let countedThisPageLoad = false;

function currentVisitCount() {
  const stored = Number(localStorage.getItem(STORAGE_KEY) || '0');
  const safe = Number.isFinite(stored) && stored > 0 ? Math.floor(stored) : 0;
  if (countedThisPageLoad) return safe;

  const next = safe + 1;
  localStorage.setItem(STORAGE_KEY, String(next));
  localStorage.removeItem('snm-browser-visit-count');
  localStorage.removeItem('snm-browser-visit-seen-at');
  countedThisPageLoad = true;
  return next;
}

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    try {
      setCount(currentVisitCount());
    } catch {
      setCount(null);
    }
  }, []);

  return (
    <div className="flex flex-col items-center">
      <p className="text-xs text-slate-400">Website visit count</p>
      <div
        className="website-counter mt-2.5 flex h-[50px] w-20 items-center justify-center rounded-[30px] bg-[#ff4957] text-[25px] font-bold leading-none text-white"
        aria-live="polite"
      >
        {count ?? '–'}
      </div>
    </div>
  );
}
