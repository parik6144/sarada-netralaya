'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { AnimatePresence, motion } from 'framer-motion';

import BookAppointmentButton from '@/components/luxury/BookAppointmentButton';
import { useTestimonialsModal } from '@/components/luxury/TestimonialsModalContext';
import { site } from '@/data/site';
import { testimonials } from '@/data/testimonials';

const AUTO_MS = 4800;

export default function LuxuryHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const { openTestimonials } = useTestimonialsModal();

  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(2);
  const count = testimonials.length;

  useEffect(() => {
    const sync = () => setVisibleCount(window.matchMedia('(min-width: 768px)').matches ? 2 : 1);
    sync();
    window.addEventListener('resize', sync);
    return () => window.removeEventListener('resize', sync);
  }, []);

  const go = useCallback(
    (nextDir: 1 | -1) => {
      setDir(nextDir);
      setIndex((i) => (i + nextDir + count) % count);
    },
    [count]
  );

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => go(1), AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused, go]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const kids = ctaRef.current?.children ?? [];
      gsap.set(kids, { y: 12, opacity: 0.9 });
      gsap.to(kids, {
        y: 0,
        opacity: 1,
        duration: 0.55,
        stagger: 0.06,
        ease: 'power3.out',
        delay: 0.12,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const visible = Array.from({ length: visibleCount }, (_, offset) => testimonials[(index + offset) % count]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative overflow-hidden min-h-[100svh] md:h-[100svh] md:max-h-[100svh] md:min-h-[560px]"
    >
      <Image
        src="/images/hero-eye-care.png"
        alt="Eye care consultation at SARADA Netralaya, Jamshedpur"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_30%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/40 via-transparent to-[#0B1F3A]/25" />

      {/* Two-column stage: left testimonials (top) + right CTA (bottom) share viewport height */}
      <div className="relative z-10 flex min-h-[100svh] flex-col overflow-hidden px-4 pb-4 pt-[calc(var(--nav-h)+0.75rem)] sm:px-6 sm:pb-5 sm:pt-[calc(var(--nav-h)+1rem)] lg:px-8 lg:pb-6 md:absolute md:inset-0 md:min-h-0">
        <div className="mx-auto grid w-full max-w-7xl min-h-0 flex-1 grid-cols-1 gap-3 md:h-full md:grid-cols-2 md:gap-5 lg:gap-8">
          {/* LEFT — testimonials, top-aligned, clipped */}
          <div className="flex min-h-0 min-w-0 items-start md:items-start">
            <div
              className="flex w-full max-w-xl min-h-0 max-h-full flex-col overflow-hidden rounded-2xl bg-white px-3.5 py-3.5 shadow-[0_14px_40px_rgba(15,23,42,0.14)] ring-1 ring-slate-200 sm:rounded-3xl sm:px-5 sm:py-4 lg:max-w-none xl:max-w-3xl"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div className="flex shrink-0 items-center justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-[9px] tracking-[0.14em] uppercase text-brand-red font-semibold sm:text-[10px]">
                    Patient voices
                  </p>
                  <p className="mt-0.5 truncate text-sm font-bold text-[#0B1F3A]">What our patients say</p>
                </div>
                <a
                  href={site.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-right text-[11px] font-semibold text-brand-red hover:text-brand-red-dark leading-tight"
                >
                  <span className="sm:hidden">View all →</span>
                  <span className="hidden sm:inline">View all Google Reviews →</span>
                </a>
              </div>

              <div className="relative mt-2.5 min-h-0 flex-1 overflow-hidden sm:mt-3">
                <AnimatePresence mode="wait" custom={dir}>
                  <motion.div
                    key={`${index}-${visibleCount}`}
                    custom={dir}
                    initial={{ opacity: 0, x: dir > 0 ? 40 : -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: dir > 0 ? -40 : 40 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    className="grid h-full grid-cols-1 gap-2 sm:gap-2.5 md:grid-cols-2"
                  >
                    {visible.map((t) => (
                      <article
                        key={t.id}
                        className="flex min-h-0 min-w-0 flex-col rounded-xl border border-slate-100 bg-[#F8FBFD] px-2.5 py-2.5 sm:rounded-2xl sm:px-3 sm:py-3"
                      >
                        <div className="flex items-center gap-2">
                          <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-slate-100 ring-2 ring-white shadow-sm">
                            <Image
                              src={t.image}
                              alt={t.name}
                              fill
                              sizes="36px"
                              className="object-cover object-top"
                            />
                          </div>
                          <div className="min-w-0">
                            <h3 className="truncate text-xs font-bold text-slate-900 sm:text-sm">{t.name}</h3>
                            <p className="mt-0.5 line-clamp-1 text-[10px] leading-snug text-slate-500">{t.role}</p>
                          </div>
                        </div>
                        <p className="mt-2 line-clamp-2 text-[11px] leading-relaxed text-slate-600 italic sm:line-clamp-3 sm:text-xs">
                          &ldquo;{t.preview}&rdquo;
                        </p>
                        <button
                          type="button"
                          onClick={() => {
                            const i = testimonials.findIndex((x) => x.id === t.id);
                            openTestimonials(i >= 0 ? i : 0);
                          }}
                          className="mt-auto pt-1.5 text-left text-[10px] font-semibold text-brand-red hover:text-brand-red-dark cursor-pointer sm:text-[11px]"
                        >
                          Read more →
                        </button>
                      </article>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-2.5 flex shrink-0 items-center justify-between gap-2 sm:mt-3">
                <button
                  type="button"
                  aria-label="Previous testimonials"
                  onClick={() => go(-1)}
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 cursor-pointer"
                >
                  ‹
                </button>
                <div className="flex min-w-0 flex-1 items-center justify-center gap-1 overflow-hidden">
                  {testimonials.map((t, i) => (
                    <button
                      key={t.id}
                      type="button"
                      aria-label={`Show ${t.name}`}
                      onClick={() => {
                        setDir(i > index ? 1 : -1);
                        setIndex(i);
                      }}
                      className={`h-1.5 shrink-0 rounded-full transition-all cursor-pointer ${
                        i === index ? 'w-4 bg-brand-red' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                      }`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  aria-label="Next testimonials"
                  onClick={() => go(1)}
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 cursor-pointer"
                >
                  ›
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT — compact CTA, bottom-aligned */}
          <div className="flex min-h-0 min-w-0 items-end justify-stretch md:justify-end">
            <div
              ref={ctaRef}
              className="w-full max-w-md rounded-2xl bg-white/95 px-5 py-4 text-left shadow-[0_14px_40px_rgba(15,23,42,0.16)] ring-1 ring-slate-200 backdrop-blur-sm sm:rounded-3xl sm:px-6 sm:py-5 lg:max-w-[22rem]"
            >
              <p className="text-[9px] tracking-[0.14em] uppercase text-slate-500 font-semibold sm:text-[10px]">
                Advanced Eye Care · Jamshedpur
              </p>

              <h1 className="mt-1.5 text-xl font-bold tracking-tight leading-[1.15] text-[#0B1F3A] sm:text-2xl">
                <span className="block">Restoring Vision.</span>
                <span className="block text-brand-red mt-0.5">Transforming Lives.</span>
              </h1>

              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                Clear cataract care and complete eye treatment — from first check-up to recovery.
              </p>

              <div className="mt-3.5 flex flex-col gap-2 sm:flex-row sm:items-center">
                <BookAppointmentButton className="inline-flex w-full sm:w-auto justify-center px-4 py-2.5 rounded-full bg-brand-red text-white text-xs font-bold tracking-wide hover:bg-brand-red-dark transition-colors shadow-[0_8px_20px_rgba(200,16,46,0.28)] sm:text-sm sm:px-5 sm:py-3">
                  Book Appointment
                </BookAppointmentButton>
                <a
                  href="/about"
                  className="inline-flex w-full sm:w-auto justify-center px-4 py-2.5 rounded-full border border-slate-300 bg-white text-[#0B1F3A] text-xs font-semibold tracking-wide hover:bg-slate-50 transition-colors sm:text-sm sm:px-5 sm:py-3"
                >
                  Why Choose Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
