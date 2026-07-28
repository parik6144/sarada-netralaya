'use client';

import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      el.style.display = 'none';
      return;
    }

    const move = (e: MouseEvent) => {
      el.style.left = e.clientX + 'px';
      el.style.top = e.clientY + 'px';
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return <div ref={ref} className="cursor-glow hidden lg:block" />;
}
