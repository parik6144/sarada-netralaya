'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { testimonials, type Testimonial } from '@/data/testimonials';

const AUTO_MS = 4500;

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [active, setActive] = useState<Testimonial | null>(null);

  const count = testimonials.length;
  const go = useCallback(
    (dir: 1 | -1) => {
      setIndex((i) => (i + dir + count) % count);
    },
    [count]
  );

  useEffect(() => {
    if (paused || active) return;
    const id = window.setInterval(() => go(1), AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused, active, go]);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [active]);

  // Show current + next two for a soft strip feel on desktop
  const visible = [0, 1, 2].map((offset) => testimonials[(index + offset) % count]);

  return (
    <section
      id="testimonials"
      className="relative py-16 sm:py-20 overflow-hidden bg-gradient-to-b from-white via-[#F4F8FB] to-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(79,163,209,0.10),_transparent_55%)]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-brand-red">
            Patient voices
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0B1F3A]">
            Our Testimonials
          </h2>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            Real words from patients and fellow doctors — short peeks below. Tap Read more for the full story.
          </p>
        </div>

        {/* Mobile: one card. Desktop: three-card strip with focus on first */}
        <div className="mt-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {visible.map((t, i) => (
              <motion.article
                key={`${t.id}-${index}-${i}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className={`rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-[0_8px_28px_rgba(15,23,42,0.06)] ${
                  i === 0 ? 'ring-1 ring-brand-red/15' : 'lg:opacity-95'
                } ${i > 0 ? 'hidden lg:block' : ''}`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="relative h-16 w-16 sm:h-[72px] sm:w-[72px] flex-shrink-0 overflow-hidden rounded-full bg-slate-100 ring-2 ring-white shadow-md">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      sizes="72px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-bold text-slate-900 leading-snug truncate">{t.name}</h3>
                    <p className="mt-0.5 text-xs text-slate-500 line-clamp-2 leading-relaxed">{t.role}</p>
                  </div>
                </div>

                <div className="mt-3 flex gap-0.5" aria-hidden>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg key={s} className="h-3.5 w-3.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3 italic">
                  &ldquo;{t.preview}&rdquo;
                </p>

                <button
                  type="button"
                  onClick={() => setActive(t)}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red hover:text-brand-red-dark transition-colors cursor-pointer"
                >
                  Read more
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </motion.article>
            ))}
          </div>

          <div className="mt-7 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => go(-1)}
              className="h-10 w-10 rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 shadow-sm cursor-pointer"
            >
              ‹
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  aria-label={`Show ${t.name}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    i === index ? 'w-6 bg-brand-red' : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => go(1)}
              className="h-10 w-10 rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 shadow-sm cursor-pointer"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      {/* Full story popup */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute inset-0 bg-[#0B1F3A]/55 backdrop-blur-[2px] cursor-pointer"
              onClick={() => setActive(null)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="testimonial-dialog-title"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-3xl bg-white shadow-2xl border border-white/40"
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                className="absolute top-3 right-3 z-10 h-9 w-9 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 cursor-pointer"
                aria-label="Close popup"
              >
                ×
              </button>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-4 pr-8">
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full bg-slate-100 ring-2 ring-slate-100 shadow-md">
                    <Image
                      src={active.image}
                      alt={active.name}
                      fill
                      sizes="80px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 id="testimonial-dialog-title" className="text-xl font-bold text-slate-900 leading-snug">
                      {active.name}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">{active.role}</p>
                  </div>
                </div>

                <div className="mt-5 flex gap-0.5" aria-hidden>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg key={s} className="h-4 w-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed whitespace-pre-line">
                  {active.full}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
