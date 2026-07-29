'use client';

import BookAppointmentButton from '@/components/luxury/BookAppointmentButton';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SiteLayout from '@/components/luxury/SiteLayout';
import GlaucomaShowcase from '@/components/luxury/GlaucomaShowcase';
import TreatmentSmartStory from '@/components/luxury/TreatmentSmartStory';
import { treatmentsData } from '@/data/treatments';
import { treatmentExtras } from '@/data/treatmentExtras';
import { site } from '@/data/site';

export default function TreatmentDetailPage() {
  const { slug } = useParams();
  const key = slug as string;
  const data = treatmentsData[key];
  const extras = treatmentExtras[key];

  if (!data) {
    return (
      <SiteLayout>
        <div className="min-h-screen flex items-center justify-center bg-[#F7FBFE] pt-[12.5rem]">
          <div className="text-center px-5">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Treatment Not Found</h1>
            <Link href="/treatments" className="text-brand-red font-semibold hover:underline">
              View All Treatments →
            </Link>
          </div>
        </div>
      </SiteLayout>
    );
  }

  const color = data.color;
  const image = extras?.image;
  const lifestyle = extras?.lifestyleImage ?? extras?.image;
  const isGlaucoma = key === 'glaucoma';

  return (
    <SiteLayout>
      <div className="min-h-screen pt-[12.5rem] sm:pt-[14rem] lg:pt-[15.5rem] bg-[#F8FAFC]">
        {/* Flyer-style hero banner */}
        <section
          className={`relative overflow-hidden text-white ${
            isGlaucoma ? 'bg-[#1A1208]' : 'bg-[#0B1F3A]'
          }`}
        >
          <div className={`absolute inset-0 ${isGlaucoma ? 'opacity-40' : 'opacity-30'}`}>
            {image && (
              <Image src={image} alt="" fill className="object-cover" sizes="100vw" priority />
            )}
          </div>
          <div
            className={`absolute inset-0 ${
              isGlaucoma
                ? 'bg-gradient-to-r from-[#1A1208] via-[#1A1208]/90 to-[#7C2D12]/35'
                : 'bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/92 to-[#0B1F3A]/55'
            }`}
          />
          {isGlaucoma && (
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(245,158,11,0.22),_transparent_55%)]" />
          )}

          <div className="relative max-w-7xl mx-auto px-5 sm:px-6 py-12 sm:py-16">
            <nav className="flex flex-wrap items-center gap-2 text-xs text-white/60 mb-6">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/treatments" className="hover:text-white">Treatments</Link>
              <span>/</span>
              <span className="text-white/90">{data.name}</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] tracking-[0.14em] uppercase font-semibold text-[#F5D565] mb-4">
                  {extras?.promise ?? 'ADVANCED EYE CARE'}
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                  {data.name}
                </h1>
                <p className="mt-3 text-lg sm:text-xl text-[#F5D565] font-semibold max-w-xl">
                  {extras?.headline ?? data.subtitle}
                </p>
                <p className="mt-4 text-sm sm:text-base text-white/80 max-w-xl leading-relaxed">
                  {extras?.simpleWhat ?? data.overview.split('\n')[0]}
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

              {image && (
                <div className="relative hidden sm:block min-h-[240px] lg:min-h-[320px] rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
                  <Image
                    src={image}
                    alt={data.name}
                    fill
                    sizes="(max-width: 1024px) 90vw, 42vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/50 to-transparent" />
                  <div
                    className={`absolute bottom-4 left-4 right-4 rounded-xl border px-4 py-3 backdrop-blur-sm ${
                      isGlaucoma
                        ? 'bg-[#1A1208]/80 border-amber-400/45'
                        : 'bg-[#0B1F3A]/75 border-[#F5D565]/40'
                    }`}
                  >
                    <p className="text-[10px] tracking-[0.16em] uppercase text-[#F5D565] font-semibold">
                      {isGlaucoma ? 'Silent thief of sight' : 'Clear explanation · Easy English'}
                    </p>
                    <p className="mt-1 text-sm text-white font-medium">
                      {isGlaucoma
                        ? 'No early pain — regular checks protect the vision you still have.'
                        : 'School-level simple — so the whole family understands.'}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {isGlaucoma ? (
          <GlaucomaShowcase />
        ) : extras ? (
          <TreatmentSmartStory extras={extras} accent={color} name={data.name} />
        ) : null}

        {/* Simple 3-step school-level explanation */}
        <section className="py-12 sm:py-14">
          <div className="max-w-7xl mx-auto px-5 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">
              Understand in 3 easy steps
            </h2>
            <p className="mt-2 text-sm text-slate-500 text-center max-w-2xl mx-auto">
              Written in simple English — so anyone in the family can understand.
            </p>

            <div className="mt-8 grid md:grid-cols-3 gap-4 sm:gap-5">
              {[
                { n: '01', title: 'What is it?', body: extras?.simpleWhat ?? data.overview },
                { n: '02', title: 'How does it feel?', body: extras?.simpleFeel ?? data.symptoms[0] },
                { n: '03', title: 'How do we fix it?', body: extras?.simpleFix ?? data.treatments[0]?.desc },
              ].map((card) => (
                <div
                  key={card.n}
                  className={`rounded-2xl border p-6 shadow-sm ${
                    isGlaucoma
                      ? 'border-amber-200/80 bg-gradient-to-b from-white to-amber-50/40'
                      : 'border-slate-200 bg-white'
                  }`}
                >
                  <div className="text-3xl font-bold" style={{ color: `${color}55` }}>{card.n}</div>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">{card.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visual + highlights (flyer creativity) */}
        <section className="py-4 sm:py-8 section-surface">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 py-10">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
              <div className="relative min-h-[260px] sm:min-h-[360px] rounded-2xl overflow-hidden border border-slate-200">
                {lifestyle && (
                  <Image
                    src={lifestyle}
                    alt={extras?.lifestyleCaption ?? data.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 to-transparent p-5">
                  <p className="text-white text-sm font-medium">
                    {extras?.lifestyleCaption ?? data.subtitle}
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900">Why patients choose this care</h2>
                <ul className="mt-5 space-y-3">
                  {(extras?.highlights ?? data.symptoms.slice(0, 5)).map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                      <span
                        className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-white text-xs font-bold"
                        style={{ background: color }}
                      >
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                {extras?.features && (
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    {extras.features.map((f) => (
                      <div key={f.label} className="flex flex-col items-center text-center gap-2">
                        <div
                          className="flex h-16 w-16 items-center justify-center rounded-full border-2 bg-white text-xs font-bold leading-tight px-2"
                          style={{ borderColor: color, color }}
                        >
                          {f.label}
                        </div>
                        <div className="text-xs text-slate-500 max-w-[9rem]">{f.hint}</div>
                      </div>
                    ))}
                  </div>
                )}
                {key === 'cataract' && (
                  <p className="mt-3 text-[11px] text-slate-400">
                    *Numbing drops are commonly used. Your surgeon will confirm the safest plan for you.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Symptoms */}
        <section className="py-12 sm:py-14">
          <div className="max-w-7xl mx-auto px-5 sm:px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Warning signs to watch</h2>
            <p className="text-sm text-slate-500 mb-6 max-w-2xl">
              If you notice these, book a check-up. Catching problems early makes treatment easier.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {data.symptoms.map((s) => (
                <div key={s} className="rounded-xl border border-slate-200 bg-white p-4 flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full flex-shrink-0" style={{ background: color }} />
                  <span className="text-sm text-slate-700">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diagnosis steps */}
        <section className="py-12 sm:py-14 section-surface">
          <div className="max-w-7xl mx-auto px-5 sm:px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">How we check your eyes</h2>
            <p className="text-sm text-slate-500 mb-6">
              Simple tests — explained before we start — so you always know what we are looking for.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.diagnosis.map((d, i) => (
                <div key={d} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="text-xs font-bold uppercase tracking-wider" style={{ color }}>
                    Step {i + 1}
                  </div>
                  <p className="mt-2 text-sm text-slate-700 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment options */}
        <section className="py-12 sm:py-14">
          <div className="max-w-7xl mx-auto px-5 sm:px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Treatment options (easy to compare)</h2>
            <p className="text-sm text-slate-500 mb-6 max-w-2xl">
              We match care to your stage — from medicines to advanced surgery.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {data.treatments.map((t, i) => (
                <div key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color }}>
                    Option {i + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{t.name}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recovery */}
        <section className="py-12 sm:py-14 section-surface">
          <div className="max-w-7xl mx-auto px-5 sm:px-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Recovery — what to expect</h2>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{data.recovery}</p>
              </div>
              {image && (
                <div className="relative min-h-[200px] rounded-xl overflow-hidden">
                  <Image src={image} alt="" fill className="object-cover" sizes="(max-width:1024px) 100vw, 40vw" />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 sm:py-14">
          <div className="max-w-4xl mx-auto px-5 sm:px-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Common questions (simple answers)</h2>
            <div className="space-y-3">
              {data.faq.map((f) => (
                <FaqItem key={f.q} question={f.q} answer={f.a} color={color} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA strip like flyer */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-5 sm:px-6">
            <div
              className={`rounded-2xl px-6 py-8 sm:px-10 sm:py-10 text-center ${
                isGlaucoma
                  ? 'bg-gradient-to-br from-[#1A1208] via-[#3B1F0B] to-[#7C2D12]'
                  : 'bg-[#0B1F3A]'
              }`}
            >
              <p className="text-[#F5D565] text-xs tracking-[0.16em] uppercase font-semibold">
                {isGlaucoma ? 'Protect your remaining vision' : 'Book your eye check-up today'}
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">{data.cta}</h2>
              <p className="mt-3 text-sm text-white/70">
                {site.address} · {site.phones.join(' / ')}
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <BookAppointmentButton className="inline-flex justify-center px-8 py-3.5 rounded-full bg-[#F5D565] text-[#0B1F3A] text-sm font-bold hover:bg-yellow-300 transition-colors">{isGlaucoma ? 'Book Glaucoma Assessment' : 'Book Online'}</BookAppointmentButton>
                <a
                  href={`tel:${site.phones[0].replace(/\s/g, '')}`}
                  className="inline-flex justify-center px-8 py-3.5 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  Call Now
                </a>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-4 text-[11px] uppercase tracking-wider text-white/55">
                <span>Experienced Doctors</span>
                <span>·</span>
                <span>Advanced Technology</span>
                <span>·</span>
                <span>Patient Care First</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}

function FaqItem({ question, answer, color }: { question: string; answer: string; color: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer"
      >
        <span className="text-sm font-medium text-slate-800 pr-4">{question}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} className="text-xl flex-shrink-0" style={{ color }}>
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="px-5 pb-4">
              <p className="text-sm text-slate-600 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
