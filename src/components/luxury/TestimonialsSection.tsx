'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { testimonials } from '@/data/testimonials';
import { useTestimonialsModal } from '@/components/luxury/TestimonialsModalContext';

const AUTO_MS = 4500;

export default function TestimonialsSection() {
  const { openTestimonials } = useTestimonialsModal();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const count = testimonials.length;
  const go = useCallback(
    (dir: 1 | -1) => {
      setIndex((i) => (i + dir + count) % count);
    },
    [count]
  );

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => go(1), AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused, go]);

  const visible = [0, 1, 2].map((offset) => testimonials[(index + offset) % count]);

  const openAt = (id: string) => {
    const i = testimonials.findIndex((t) => t.id === id);
    openTestimonials(i >= 0 ? i : 0);
  };

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
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0B1F3A]">Our Testimonials</h2>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            Real words from patients and fellow doctors. Open the full showcase to read every story in a large
            sliding view.
          </p>
          <button
            type="button"
            onClick={() => openTestimonials(index)}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#0B1F3A] px-6 py-3 text-sm font-bold text-white hover:bg-[#123A5C] transition-colors cursor-pointer"
          >
            View all testimonials
            <span aria-hidden>→</span>
          </button>
        </div>

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
                  onClick={() => openAt(t.id)}
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
            <div className="flex items-center gap-2 max-w-[60vw] overflow-x-auto">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  aria-label={`Show ${t.name}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all cursor-pointer shrink-0 ${
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
    </section>
  );
}
