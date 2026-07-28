'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

import BookAppointmentButton from '@/components/luxury/BookAppointmentButton';

export default function LuxuryHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const kids = contentRef.current?.children ?? [];
      gsap.set(kids, { y: 28 });
      gsap.to(kids, {
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.15,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <Image
        src="/images/hero-eye-care.png"
        alt="Eye care consultation at SARADA Netralaya, Jamshedpur"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-slate-900/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-slate-900/35" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 pt-36 pb-16 lg:pt-40 lg:pb-20">
        <div ref={contentRef} className="max-w-2xl text-center lg:text-left">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white/95">
            SARADA Netralaya
          </p>
          <p className="mt-2 text-[11px] sm:text-xs tracking-[0.18em] uppercase text-white/70 font-medium">
            Advanced Eye Care Center · Baradwari, Sakchi, Jamshedpur
          </p>

          <h1 className="mt-4 text-[2.05rem] sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-white">
            <span className="block">Restoring Vision.</span>
            <span className="block text-brand-red mt-1">Transforming Lives.</span>
          </h1>

          <p className="mt-5 sm:mt-6 text-sm sm:text-base lg:text-lg text-white/85 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            High-end cataract surgery and complete eye care — explained clearly from first symptoms
            to advanced treatment with modern technology and premium lenses.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 sm:gap-4">
            <BookAppointmentButton className="w-full sm:w-auto inline-flex justify-center px-7 py-3.5 rounded-full bg-brand-red text-white text-sm font-semibold tracking-wide hover:bg-brand-red-dark transition-colors shadow-[0_8px_28px_rgba(200,16,46,0.35)]">
              Book Appointment
            </BookAppointmentButton>
            <a
              href="/about"
              className="w-full sm:w-auto inline-flex justify-center px-7 py-3.5 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm text-white text-sm font-medium tracking-wide hover:bg-white/20 transition-colors"
            >
              Why Choose Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
