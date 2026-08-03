'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { testimonials } from '@/data/testimonials';
import { useTestimonialsModal } from '@/components/luxury/TestimonialsModalContext';

const AUTO_MS = 6000;

export default function TestimonialsShowcaseModal() {
  const { isOpen, startIndex, closeTestimonials } = useTestimonialsModal();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  useEffect(() => {
    if (isOpen) setIndex(startIndex % count);
  }, [isOpen, startIndex, count]);

  const go = useCallback(
    (dir: 1 | -1) => {
      setIndex((i) => (i + dir + count) % count);
    },
    [count]
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeTestimonials();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, closeTestimonials, go]);

  useEffect(() => {
    if (!isOpen || paused) return;
    const id = window.setInterval(() => go(1), AUTO_MS);
    return () => window.clearInterval(id);
  }, [isOpen, paused, go, index]);

  const current = testimonials[index];

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          className="fixed inset-0 z-[130] flex items-center justify-center p-3 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            aria-label="Close testimonials"
            className="absolute inset-0 bg-[#0B1F3A]/70 backdrop-blur-sm cursor-pointer"
            onClick={closeTestimonials}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="testimonials-showcase-title"
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex w-full max-w-5xl max-h-[92vh] flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-slate-100 bg-gradient-to-r from-[#0B1F3A] to-[#123A5C] px-5 py-4 sm:px-8">
              <div>
                <p className="text-[10px] sm:text-[11px] tracking-[0.18em] uppercase font-semibold text-[#F5D565]">
                  Patient voices · SARADA
                </p>
                <h2
                  id="testimonials-showcase-title"
                  className="mt-1 text-base sm:text-xl font-bold text-white"
                >
                  What our patients say
                </h2>
              </div>
              <button
                type="button"
                onClick={closeTestimonials}
                className="h-10 w-10 rounded-full bg-white/10 text-white text-xl hover:bg-white/20 cursor-pointer"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <div className="relative min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-6 sm:px-10 sm:py-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="grid gap-6 sm:gap-8 md:grid-cols-[220px_1fr] items-start"
                >
                  <div className="mx-auto md:mx-0">
                    <div className="relative h-40 w-40 sm:h-52 sm:w-52 overflow-hidden rounded-full bg-slate-100 ring-4 ring-[#F0F7FC] shadow-lg">
                      <Image
                        src={current.image}
                        alt={current.name}
                        fill
                        sizes="208px"
                        className="object-cover object-top"
                        priority
                      />
                    </div>
                    <p className="mt-4 text-center md:text-left text-xs text-slate-400 font-medium">
                      {index + 1} / {count}
                    </p>
                  </div>

                  <div className="min-w-0">
                    <div className="flex gap-1" aria-hidden>
                      {Array.from({ length: 5 }).map((_, s) => (
                        <svg
                          key={s}
                          className="h-5 w-5 text-amber-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <p className="mt-4 text-sm sm:text-[15px] lg:text-base font-medium text-slate-800 leading-relaxed whitespace-pre-line">
                      &ldquo;{current.full}&rdquo;
                    </p>

                    <div className="mt-5 border-t border-slate-100 pt-4">
                      <p className="text-base sm:text-lg font-bold text-[#0B1F3A]">{current.name}</p>
                      <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed">
                        {current.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-slate-100 bg-slate-50 px-4 py-4 sm:px-8">
              <button
                type="button"
                onClick={() => go(-1)}
                className="inline-flex h-11 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 hover:bg-slate-100 cursor-pointer"
                aria-label="Previous testimonial"
              >
                ‹ Prev
              </button>

              <div className="flex max-w-[45vw] sm:max-w-none flex-wrap items-center justify-center gap-1.5">
                {testimonials.map((t, i) => (
                  <button
                    key={t.id}
                    type="button"
                    aria-label={`Show ${t.name}`}
                    onClick={() => setIndex(i)}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      i === index ? 'w-7 bg-brand-red' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => go(1)}
                className="inline-flex h-11 items-center gap-2 rounded-full bg-brand-red px-4 text-sm font-semibold text-white hover:bg-brand-red-dark cursor-pointer"
                aria-label="Next testimonial"
              >
                Next ›
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
