'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

type Props = {
  href?: string | null;
  className?: string;
};

/** Catchy cashless trust badge — flyer-inspired, crisp HTML/CSS */
export default function CashlessFacilityBadge({ href = '/insurance', className = '' }: Props) {
  const inner = (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45 }}
      className={`relative mx-auto w-full max-w-[340px] rounded-[1.35rem] border border-slate-200/90 bg-white px-6 pt-7 pb-6 text-center shadow-[0_16px_50px_rgba(11,31,58,0.14)] ${className}`}
    >
      <p className="text-[1.35rem] sm:text-[1.5rem] font-extrabold tracking-[0.04em] text-[#0B1F3A] uppercase leading-none">
        Cashless Facility
      </p>

      {/* Red ribbon */}
      <div className="relative mx-auto mt-4 flex h-9 w-[88%] items-center justify-center">
        <div
          className="absolute inset-y-0 left-0 right-0 bg-brand-red"
          style={{
            clipPath: 'polygon(8px 0, calc(100% - 8px) 0, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0 50%)',
          }}
        />
        <span className="relative z-10 text-[13px] sm:text-sm font-extrabold tracking-[0.18em] text-white uppercase">
          Available
        </span>
      </div>

      {/* Shield + copy */}
      <div className="mt-6 flex items-center gap-4 text-left">
        <div className="relative flex h-[72px] w-[64px] flex-shrink-0 items-center justify-center">
          <svg viewBox="0 0 64 76" className="h-full w-full drop-shadow-sm" aria-hidden>
            <path
              d="M32 2L58 12v22c0 18.5-14.2 33.8-26 40C20.2 67.8 6 52.5 6 34V12L32 2z"
              fill="#0B1F3A"
            />
            <path
              d="M22 36.5l7.2 7.2L44 28.5"
              fill="none"
              stroke="#fff"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="text-[15px] sm:text-base font-extrabold uppercase leading-[1.2] tracking-tight text-[#0B1F3A]">
          All Major Mediclaim &amp; Insurance Accepted
        </p>
      </div>

      <p className="mt-5 text-[12px] sm:text-[13px] leading-relaxed text-slate-600">
        We are empanelled with leading insurance companies to make your treatment hassle-free.
      </p>
    </motion.div>
  );

  if (!href) return inner;

  return (
    <Link href={href} className="block group" aria-label="View insurance and cashless schemes">
      <div className="transition-transform duration-300 group-hover:-translate-y-1">{inner}</div>
    </Link>
  );
}
