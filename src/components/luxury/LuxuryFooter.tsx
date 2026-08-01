'use client';

import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/data/site';
import { useBookingModal } from '@/components/luxury/BookingModalContext';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Doctors', href: '/doctors' },
  { label: 'Treatments', href: '/treatments' },
  { label: 'Technology', href: '/technology' },
  { label: 'IOL Guide', href: '/guides/iol' },
  { label: 'Insurance', href: '/insurance' },
  { label: 'Appointment', href: '#book' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
  { label: 'Feedback', href: '/feedback' },
];

const treatLinks = [
  { label: 'Cataract', href: '/treatments/cataract' },
  { label: 'Refractive Surgery', href: '/treatments/refractive' },
  { label: 'Medical Retina Services', href: '/treatments/retina' },
  { label: 'Glaucoma', href: '/treatments/glaucoma' },
  { label: 'Cornea', href: '/treatments/cornea' },
  { label: 'Pediatric', href: '/treatments/pediatric' },
];

export default function LuxuryFooter() {
  const { openBooking } = useBookingModal();

  return (
    <footer className="relative bg-[#1A1A1A] text-white">
      <div className="h-1 w-full bg-gradient-to-r from-brand-red via-brand-blue to-brand-red" />
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Image
              src="/sarada-logo.png"
              alt="SARADA Netralaya & Maternity"
              width={360}
              height={120}
              className="h-20 sm:h-24 w-auto object-contain mb-5 bg-white rounded-lg px-3 py-2"
            />
            <p className="text-sm text-slate-400 leading-relaxed">
              {site.tagline} Advanced eye care and maternity services in {site.location}.
            </p>
            <p className="mt-3 text-sm text-slate-300 italic">{site.motto}</p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-slate-300 font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2.5">
              {quickLinks.map((l) =>
                l.href === '#book' ? (
                  <button
                    key={l.label}
                    type="button"
                    onClick={openBooking}
                    className="block text-sm text-slate-400 hover:text-white transition-colors text-left"
                  >
                    {l.label}
                  </button>
                ) : (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="block text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                )
              )}
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-slate-300 font-semibold mb-4">Treatments</h4>
            <div className="space-y-2.5">
              {treatLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="block text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase text-slate-300 font-semibold mb-4">Our Locations</h4>
            <div className="space-y-4 text-sm text-slate-400">
              {site.branches.map((branch) => (
                <div key={branch.name}>
                  <p className="font-semibold text-slate-300">{branch.name}</p>
                  <p className="mt-1 leading-relaxed">{branch.address}</p>
                  {branch.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="mt-1 block hover:text-white transition-colors"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              ))}
              <p>{site.email}</p>
              <p>{site.hours}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">© 2026 {site.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-xs text-slate-500 hover:text-slate-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-slate-500 hover:text-slate-300">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
