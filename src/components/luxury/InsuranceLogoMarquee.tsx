'use client';

import Link from 'next/link';
import {
  corporatePartners,
  empanelledSchemes,
  governmentInsurers,
} from '@/data/insurance';
import InsurancePartnerCard from '@/components/luxury/InsurancePartnerCard';

const logos = [
  ...empanelledSchemes.map(({ name, logo }) => ({ name, logo })),
  ...governmentInsurers,
  ...corporatePartners,
];

/** Infinite sliding logo strip — same cards as /insurance page */
export default function InsuranceLogoMarquee() {
  const loop = [...logos, ...logos];

  return (
    <section className="relative py-14 sm:py-16 bg-[#0B1F3A] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(79,163,209,0.15),_transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 text-center">
        <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#F5D565]">
          Cashless Facility Available
        </p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">
          We treat through trusted insurance partners
        </h2>
        <p className="mt-3 text-sm text-white/65 max-w-2xl mx-auto">
          Ayushman Bharat (PM-JAY), corporate TPAs, and major PSU insurers — so money worries do not delay
          sight-saving care.
        </p>
      </div>

      <div className="relative mt-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-14 sm:w-24 z-10 bg-gradient-to-r from-[#0B1F3A] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-14 sm:w-24 z-10 bg-gradient-to-l from-[#0B1F3A] to-transparent" />

        <div className="flex overflow-hidden py-2">
          <div className="flex shrink-0 gap-5 sm:gap-6 animate-insurance-marquee">
            {loop.map((p, i) => (
              <InsurancePartnerCard
                key={`${p.name}-${i}`}
                name={p.name}
                logo={p.logo}
                className="w-[300px] sm:w-[340px] flex-shrink-0 shadow-[0_8px_30px_rgba(0,0,0,0.18)] border-0"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative mt-10 text-center">
        <Link
          href="/insurance"
          className="inline-flex px-7 py-3 rounded-full bg-[#F5D565] text-[#0B1F3A] text-sm font-bold hover:bg-yellow-300 transition-colors"
        >
          View all insurance &amp; schemes →
        </Link>
      </div>
    </section>
  );
}
