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
      gsap.set(kids, { y: 20 });
      gsap.to(kids, {
        y: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.12,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative flex min-h-[46svh] items-start overflow-hidden sm:min-h-[86svh] lg:min-h-[100svh]"
    >
      <Image
        src="/images/hero-eye-care.png"
        alt="Eye care consultation at SARADA Netralaya, Jamshedpur"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_30%]"
      />

      {/* Card is dropped on phones — the banner stays a clean photo there */}
      <div className="hidden sm:block nav-offset-hero relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 lg:pb-20">
        <div
          ref={contentRef}
          className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left rounded-3xl bg-white px-9 py-10 shadow-[0_16px_48px_rgba(15,23,42,0.14)] ring-1 ring-slate-200"
        >
          <p className="text-xs tracking-[0.16em] uppercase text-slate-500 font-semibold">
            Advanced Eye Care Center · Baradwari, Sakchi, Jamshedpur
          </p>

          <h1 className="mt-4 text-4xl lg:text-5xl font-bold tracking-tight leading-[1.12] text-[#0B1F3A]">
            <span className="block">Restoring Vision.</span>
            <span className="block text-brand-red mt-1">Transforming Lives.</span>
          </h1>

          <p className="mt-5 text-base text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            High-end cataract surgery and complete eye care — explained clearly from first symptoms
            to advanced treatment with modern technology and premium lenses.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3">
            <BookAppointmentButton className="w-full sm:w-auto inline-flex justify-center px-7 py-3.5 rounded-full bg-brand-red text-white text-sm font-bold tracking-wide hover:bg-brand-red-dark transition-colors shadow-[0_8px_24px_rgba(200,16,46,0.28)]">
              Book Appointment
            </BookAppointmentButton>
            <a
              href="/about"
              className="w-full sm:w-auto inline-flex justify-center px-7 py-3.5 rounded-full border border-slate-300 bg-white text-[#0B1F3A] text-sm font-semibold tracking-wide hover:bg-slate-50 transition-colors"
            >
              Why Choose Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
