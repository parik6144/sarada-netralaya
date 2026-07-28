'use client';

import Link from 'next/link';
import { useBookingModal } from '@/components/luxury/BookingModalContext';

interface ExploreMoreProps {
  links: { label: string; href: string; desc?: string }[];
  title?: string;
}

export default function ExploreMore({ links, title = 'Explore more' }: ExploreMoreProps) {
  const { openBooking } = useBookingModal();

  return (
    <section className="py-12 sm:py-16 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">{title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((link) =>
            link.href === '/appointment' ? (
              <button
                key={link.href}
                type="button"
                onClick={openBooking}
                className="glass-card rounded-2xl p-5 hover:border-brand-red/30 transition-colors group text-left w-full"
              >
                <p className="text-base font-semibold text-slate-900 group-hover:text-brand-red transition-colors">
                  {link.label} →
                </p>
                {link.desc && <p className="mt-2 text-sm text-slate-600 leading-relaxed">{link.desc}</p>}
              </button>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="glass-card rounded-2xl p-5 hover:border-brand-red/30 transition-colors group"
              >
                <p className="text-base font-semibold text-slate-900 group-hover:text-brand-red transition-colors">
                  {link.label} →
                </p>
                {link.desc && <p className="mt-2 text-sm text-slate-600 leading-relaxed">{link.desc}</p>}
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}
