'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from './SectionHeader';

gsap.registerPlugin(ScrollTrigger);

const corporates = [
  'Tata Power',
  'Tata Motors',
  'LIC',
  'MediAssist',
  'MD India',
  'Health India',
];

const government = [
  'New India Assurance',
  'National Insurance',
  'Oriental Insurance',
  'United India Insurance',
];

const schemes = [
  {
    name: 'Ayushman Bharat (PM-JAY)',
    desc: 'Government health cover for eligible families — we help verify entitlement before surgery.',
  },
  {
    name: 'Rajyakarmi Swasthya Bima Yojana',
    desc: 'State employee health scheme support with documentation guidance at the hospital.',
  },
  {
    name: 'NML Empanelment',
    desc: 'Corporate / public-sector empanelment support for eligible beneficiaries.',
  },
];

export default function InsuranceWall() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(headingRef.current, { y: 28 });
      gsap.to(headingRef.current, {
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="insurance" className="luxury-section relative section-surface">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div ref={headingRef}>
          <SectionHeader
            eyebrow="Cashless Facility"
            titleWhite="Insurance Made"
            titleAccent="Simple"
            description="All major mediclaim and insurance accepted. Bring your card and ID — we guide you through cashless approval before treatment wherever eligible."
            align="center"
          />
        </div>

        <div className="mt-10 rounded-2xl border border-brand-blue/25 bg-white px-6 py-7 sm:px-8 sm:py-8 text-center shadow-sm">
          <p className="text-lg sm:text-xl font-semibold text-slate-900">
            Cashless facility available
          </p>
          <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">
            From corporate partners to government insurers and Ayushman Bharat — we help patients
            understand coverage so money worries do not delay sight-saving care.
          </p>
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-5">
          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-red mb-4">
              Corporate partners
            </h3>
            <div className="flex flex-wrap gap-2">
              {corporates.map((name) => (
                <span
                  key={name}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-blue mb-4">
              Government insurers
            </h3>
            <div className="flex flex-wrap gap-2">
              {government.map((name) => (
                <span
                  key={name}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
              Empanelled schemes
            </h3>
            <div className="space-y-4">
              {schemes.map((s) => (
                <div key={s.name}>
                  <p className="text-sm font-semibold text-slate-900">{s.name}</p>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
