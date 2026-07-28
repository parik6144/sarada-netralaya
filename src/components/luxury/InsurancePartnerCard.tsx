'use client';

import Image from 'next/image';

/** Shared insurance partner card — same look on landing marquee + /insurance page */
export default function InsurancePartnerCard({
  name,
  logo,
  className = '',
}: {
  name: string;
  logo: string;
  className?: string;
}) {
  return (
    <div
      className={`group flex flex-col overflow-hidden rounded-[1.35rem] border border-slate-200/90 bg-white shadow-sm ${className}`}
    >
      <div className="relative h-[180px] sm:h-[200px] w-full bg-white px-4 pt-4">
        {/* unoptimized = original PNG, no resize blur */}
        <Image
          src={logo}
          alt={name}
          fill
          unoptimized
          className="object-contain object-center p-1"
          sizes="400px"
        />
      </div>
      <p className="border-t border-slate-100 px-4 py-3 text-sm sm:text-base font-semibold text-slate-800 text-center leading-snug">
        {name}
      </p>
    </div>
  );
}
