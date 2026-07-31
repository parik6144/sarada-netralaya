'use client';

import BookAppointmentButton from '@/components/luxury/BookAppointmentButton';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SiteLayout from '@/components/luxury/SiteLayout';
import ExploreMore from '@/components/luxury/ExploreMore';
import { treatmentsData } from '@/data/treatments';
import { treatmentExtras } from '@/data/treatmentExtras';
import { navTreatments, site } from '@/data/site';

const guideSteps = [
  {
    n: '01',
    title: 'Choose what bothers you',
    body: 'Foggy vision, glasses not working, flashes, eye pressure — pick the problem that feels closest to yours.',
  },
  {
    n: '02',
    title: 'Read the short guide',
    body: 'Each page tells you what is wrong, how it feels, and how we treat it — in plain words, with simple pictures.',
  },
  {
    n: '03',
    title: 'Book a check-up',
    body: 'When you are ready, book online or call us. Bring old glasses papers and diabetes reports if you have them.',
  },
];

export default function TreatmentsHubClient() {
  return (
    <SiteLayout>
      <section className="nav-offset relative overflow-hidden bg-[#0B1F3A] text-white">
        <div className="absolute inset-0 opacity-35">
          <Image
            src="/images/hero-eye-care.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/92 to-[#0B1F3A]/55" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(79,163,209,0.28),_transparent_55%)]" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 py-12 sm:py-16">
          <nav className="flex flex-wrap items-center gap-2 text-xs text-white/60 mb-6">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/90">Treatments</span>
          </nav>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] tracking-[0.14em] uppercase font-semibold text-[#F5D565] mb-4">
            Eye Guides · Simple Words
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl leading-tight">
            See What Is Wrong. <span className="text-[#F5D565]">Know How We Fix It.</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed">
            Short, clear guides for common eye problems — what you feel, what is happening in the eye, and how we treat
            it at SARADA. Tap a card below to open the full guide.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <BookAppointmentButton className="inline-flex justify-center px-7 py-3.5 rounded-full bg-[#F5D565] text-[#0B1F3A] text-sm font-bold hover:bg-yellow-300 transition-colors">Book Your Eye Check-up Today</BookAppointmentButton>
            <a
              href={`tel:${site.phones[0].replace(/\s/g, '')}`}
              className="inline-flex justify-center px-7 py-3.5 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Call {site.phones[0]}
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-14 bg-gradient-to-b from-[#F0F7FC] to-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-brand-blue">How to use this page</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">Three easy steps</h2>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-4 sm:gap-5">
            {guideSteps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl border border-sky-100 bg-white p-6 shadow-sm"
              >
                <div className="text-3xl font-bold text-sky-200">{s.n}</div>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-4 sm:py-8 pb-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
            <div>
              <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-brand-red">
                All eye guides
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">Pick your guide</h2>
            </div>
            <p className="text-sm text-slate-500 max-w-md">
              Each card opens a page with simple pictures, what to watch for, and treatment choices — easy for the whole
              family to read.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {navTreatments.map((t, i) => {
              const data = treatmentsData[t.slug];
              const extras = treatmentExtras[t.slug];
              const image = extras?.image;
              const color = data?.color ?? '#4FA3D1';

              return (
                <motion.div
                  key={t.slug}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
                >
                  <Link href={`/treatments/${t.slug}`} className="group block h-full">
                    <article className="h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300">
                      <div className="relative h-48 w-full overflow-hidden">
                        {image && (
                          <Image
                            src={image}
                            alt={t.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent" />
                        <div className="absolute top-3 left-3">
                          <span
                            className="inline-flex rounded-full px-3 py-1 text-[10px] font-bold tracking-[0.12em] uppercase text-white border border-white/25 backdrop-blur-sm"
                            style={{ background: `${color}cc` }}
                          >
                            {extras?.promise?.split('·')[0]?.trim() ?? 'Eye Care'}
                          </span>
                        </div>
                        <div className="absolute bottom-3 left-3 right-3">
                          <h2 className="text-xl font-bold text-white drop-shadow">{data?.name ?? t.name}</h2>
                          <p className="mt-0.5 text-xs text-[#F5D565] font-medium line-clamp-1">
                            {extras?.headline ?? t.desc}
                          </p>
                        </div>
                      </div>

                      <div className="p-5 sm:p-6">
                        <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                          {extras?.hubBlurb ?? t.desc}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {(extras?.features ?? []).slice(0, 3).map((f) => (
                            <span
                              key={f.label}
                              className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-600"
                            >
                              {f.label}
                            </span>
                          ))}
                        </div>

                        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                          <p className="text-xs text-slate-500 line-clamp-2">
                            <span className="font-semibold text-slate-700">When to see us: </span>
                            {extras?.whenToSee ?? t.desc}
                          </p>
                          <span className="flex-shrink-0 text-sm font-bold whitespace-nowrap" style={{ color }}>
                            Open guide →
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="rounded-3xl bg-gradient-to-br from-[#0B1F3A] to-[#123A5C] px-6 py-10 sm:px-10 text-center">
            <p className="text-[#F5D565] text-xs tracking-[0.16em] uppercase font-semibold">
              Not sure which guide to open?
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">Book a full eye check-up</h2>
            <p className="mt-3 text-sm text-white/70 max-w-xl mx-auto">
              Our doctors will check your eyes, tell you what they find in simple words, and help you choose the right
              treatment.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <BookAppointmentButton className="inline-flex justify-center px-8 py-3.5 rounded-full bg-[#F5D565] text-[#0B1F3A] text-sm font-bold hover:bg-yellow-300 transition-colors">Book Appointment</BookAppointmentButton>
              <Link
                href="/technology"
                className="inline-flex justify-center px-8 py-3.5 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                Our Technology
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ExploreMore
        links={[
          { label: 'Doctors', href: '/doctors', desc: 'Meet our eye doctors and care team.' },
          { label: 'Technology', href: '/technology', desc: 'Modern machines we use for eye care.' },
          { label: 'Book Appointment', href: '/appointment', desc: 'Book your visit with us.' },
        ]}
      />
    </SiteLayout>
  );
}
