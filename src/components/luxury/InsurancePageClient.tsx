'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SiteLayout from '@/components/luxury/SiteLayout';
import ExploreMore from '@/components/luxury/ExploreMore';
import InsurancePartnerCard from '@/components/luxury/InsurancePartnerCard';
import CashlessFacilityBadge from '@/components/luxury/CashlessFacilityBadge';
import BookAppointmentButton from '@/components/luxury/BookAppointmentButton';
import {
  cashlessChecklist,
  corporatePartners,
  empanelledSchemes,
  governmentInsurers,
} from '@/data/insurance';
import { site } from '@/data/site';

const fade = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' } as const,
  transition: { duration: 0.45 },
};

export default function InsurancePageClient() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-[#0B1F3A] text-white pt-[10.5rem] sm:pt-[11.5rem] lg:pt-[12.5rem]">
        <div className="absolute inset-0 opacity-25">
          <Image src="/images/hospital-building.png" alt="" fill className="object-cover" sizes="100vw" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/94 to-[#0B1F3A]/70" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 py-12 sm:py-16 grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-7">
            <nav className="flex flex-wrap items-center gap-2 text-xs text-white/60 mb-6">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span>/</span>
              <span className="text-white/90">Insurance</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] tracking-[0.14em] uppercase font-semibold text-[#F5D565] mb-4">
                Cashless Facility Available
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                Insurance Made <span className="text-[#F5D565]">Simple</span>
              </h1>
              <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed">
                All major mediclaim &amp; insurance accepted. Corporate partners, government insurers, Ayushman Bharat
                (PM-JAY), Rajyakarmi Swasthya Bima Yojana, and NML — verified at our front desk before treatment.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <BookAppointmentButton className="inline-flex justify-center px-7 py-3.5 rounded-full bg-[#F5D565] text-[#0B1F3A] text-sm font-bold">
                Book Appointment
              </BookAppointmentButton>
              <a
                href={`tel:${site.phones[0].replace(/\s/g, '')}`}
                className="inline-flex justify-center px-7 py-3.5 rounded-full border border-white/30 text-white text-sm font-medium"
              >
                Call {site.phones[0]}
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <CashlessFacilityBadge href={null} className="shadow-[0_20px_60px_rgba(0,0,0,0.35)]" />
          </div>
        </div>
      </section>

      {/* Ayushman featured — large logo showcase */}
      <section className="py-12 sm:py-16 bg-[#F4F8FB]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <motion.div
            {...fade}
            className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center rounded-[2rem] border border-emerald-200/80 bg-white p-7 sm:p-10 lg:p-12 shadow-sm"
          >
            <div className="lg:col-span-6">
              <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-emerald-700">
                Empanelled government scheme
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">Ayushman Bharat (PM-JAY)</h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                Eligible families can use cashless benefits for covered eye procedures after verification. Bring your
                Ayushman / PM-JAY card and photo ID — we guide the paperwork.
              </p>
              <ul className="mt-6 grid sm:grid-cols-3 gap-3">
                {['Card + photo ID', 'Front-desk verification', 'Also Rajyakarmi & NML'].map((t) => (
                  <li
                    key={t}
                    className="rounded-xl border border-emerald-100 bg-emerald-50/60 px-3 py-2.5 text-xs font-semibold text-emerald-800 text-center"
                  >
                    ✓ {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-6 flex flex-col items-center justify-center rounded-[1.5rem] border border-emerald-100 bg-white overflow-hidden min-h-[280px] sm:min-h-[320px]">
              <div className="relative h-56 sm:h-64 w-full px-4 pt-4">
                <Image
                  src="/images/insurance/Ayushman.png"
                  alt="Ayushman Bharat PM-JAY"
                  fill
                  unoptimized
                  className="object-contain object-center p-1"
                  sizes="520px"
                  priority
                />
              </div>
              <p className="w-full border-t border-emerald-100 px-4 py-3 text-center text-sm sm:text-base font-semibold text-slate-800">
                Ayushman Bharat (PM-JAY)
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partner logo grids — large & clear */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 space-y-16">
          <motion.div {...fade}>
            <div className="mb-8 text-center sm:text-left">
              <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-brand-red">Corporate &amp; TPA</p>
              <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900">Private partners</h2>
              <p className="mt-2 text-sm text-slate-500 max-w-2xl">
                Tata Power · Tata Motors · LIC · MediAssist · MD India · Health India
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {corporatePartners.map((p) => (
                <InsurancePartnerCard
                  key={p.name}
                  name={p.name}
                  logo={p.logo}
                  className="hover:shadow-lg hover:border-sky-200 transition-all duration-300"
                />
              ))}
            </div>
          </motion.div>

          <motion.div {...fade}>
            <div className="mb-8 text-center sm:text-left">
              <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-brand-blue">
                Government insurers
              </p>
              <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900">PSU health insurance</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {governmentInsurers.map((p) => (
                <InsurancePartnerCard
                  key={p.name}
                  name={p.name}
                  logo={p.logo}
                  className="hover:shadow-lg hover:border-sky-200 transition-all duration-300"
                />
              ))}
            </div>
          </motion.div>

          <motion.div {...fade}>
            <div className="mb-8 text-center sm:text-left">
              <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-amber-700">Empanelled with</p>
              <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900">Schemes &amp; special cover</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
              {empanelledSchemes.map((s) => (
                <div
                  key={s.name}
                  className="rounded-[1.5rem] border border-slate-200 bg-white shadow-sm hover:shadow-lg hover:border-amber-200 transition-all flex flex-col overflow-hidden"
                >
                  <div className="relative h-[180px] sm:h-[200px] w-full bg-white px-4 pt-4">
                    <Image
                      src={s.logo}
                      alt={s.name}
                      fill
                      unoptimized
                      className="object-contain object-center p-1"
                      sizes="420px"
                    />
                  </div>
                  <div className="border-t border-slate-100 p-5 sm:p-6">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 text-center sm:text-left">{s.name}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.blurb}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Checklist + CTA */}
      <section className="pb-16 bg-[#F4F8FB]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-12 sm:py-14">
          <div className="grid lg:grid-cols-2 gap-5 lg:gap-6 items-stretch">
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:p-8 shadow-sm h-full">
              <h2 className="text-xl font-bold text-slate-900">What to bring for cashless</h2>
              <ul className="mt-5 space-y-3">
                {cashlessChecklist.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-slate-700 leading-relaxed">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-red text-white text-[10px] font-bold">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.75rem] bg-gradient-to-br from-[#0B1F3A] to-[#123A5C] p-6 sm:p-8 text-white flex flex-col justify-center h-full">
              <p className="text-[#F5D565] text-xs tracking-[0.16em] uppercase font-semibold">Cashless desk</p>
              <h2 className="mt-2 text-2xl font-bold">Need help with insurance?</h2>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">{site.address}</p>
              <p className="mt-4 text-sm text-white/55 italic">
                Your Vision is Our Mission. Your Trust is Our Strength.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${site.phones[0].replace(/\s/g, '')}`}
                  className="inline-flex justify-center px-6 py-3 rounded-full bg-[#F5D565] text-[#0B1F3A] text-sm font-bold"
                >
                  {site.phones[0]}
                </a>
                <a
                  href={`tel:${site.phones[1].replace(/\s/g, '')}`}
                  className="inline-flex justify-center px-6 py-3 rounded-full border border-white/30 text-white text-sm font-semibold"
                >
                  {site.phones[1]}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ExploreMore
        links={[
          { label: 'Book Appointment', href: '/appointment', desc: 'Schedule your consultation online.' },
          { label: 'FAQ', href: '/faq', desc: 'Answers about cashless and recovery.' },
          { label: 'Contact', href: '/contact', desc: 'Address, map, and message form.' },
        ]}
      />
    </SiteLayout>
  );
}
