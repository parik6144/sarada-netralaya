'use client';

import BookAppointmentButton from '@/components/luxury/BookAppointmentButton';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { TreatmentExtras } from '@/data/treatmentExtras';
import { site } from '@/data/site';

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' } as const,
  transition: { duration: 0.45 },
};

export default function TreatmentSmartStory({
  extras,
  accent,
  name,
}: {
  extras: TreatmentExtras;
  accent: string;
  name: string;
}) {
  const lifestyle = extras.lifestyleImage ?? extras.image;

  return (
    <>
      {/* Compare cards */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-[#F0F7FC] to-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
            <p className="text-[11px] tracking-[0.18em] uppercase font-semibold" style={{ color: accent }}>
              See the difference
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">
              Easy visual understanding
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Clear pictures and simple words — so the whole family can understand {name.toLowerCase()}.
            </p>
          </motion.div>

          <div className="mt-10 grid md:grid-cols-2 gap-5 lg:gap-8">
            <motion.div
              {...fadeUp}
              className="relative overflow-hidden rounded-3xl border border-emerald-200/80 bg-white shadow-sm"
            >
              <div className="relative h-52 sm:h-64">
                <Image src={lifestyle} alt={extras.compareGood.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 50vw" />
              </div>
              <div className="p-5 sm:p-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                  {extras.compareGood.label}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{extras.compareGood.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{extras.compareGood.body}</p>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="relative overflow-hidden rounded-3xl border bg-white shadow-sm"
              style={{ borderColor: `${accent}55` }}
            >
              <div className="relative h-52 sm:h-64 bg-slate-900">
                <Image src={extras.image} alt={extras.compareBad.title} fill className="object-cover opacity-85" sizes="(max-width:768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
              </div>
              <div className="p-5 sm:p-6">
                <div
                  className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wider"
                  style={{ background: `${accent}14`, borderColor: `${accent}44`, color: accent }}
                >
                  {extras.compareBad.label}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">{extras.compareBad.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{extras.compareBad.body}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metaphor + steps */}
      <section className="py-12 sm:py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-center">
            <motion.div {...fadeUp}>
              <p className="text-[11px] tracking-[0.18em] uppercase font-semibold" style={{ color: accent }}>
                Easy science
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">
                {extras.metaphorTitle}
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                {extras.metaphorBody}
              </p>

              <div className="mt-7 space-y-4">
                {extras.storySteps.map((item, i) => (
                  <div key={item.title} className="flex gap-4">
                    <div
                      className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl text-sm font-bold text-white shadow-md"
                      style={{ background: `linear-gradient(135deg, ${accent}, ${accent}cc)` }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                      <p className="mt-1 text-sm text-slate-600 leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.08 }} className="relative">
              <div className="relative min-h-[320px] sm:min-h-[420px] overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl">
                <Image
                  src={extras.image}
                  alt={name}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                  <p className="text-[#F5D565] text-[11px] tracking-[0.16em] uppercase font-semibold">
                    {extras.promise}
                  </p>
                  <p className="mt-2 text-lg sm:text-xl font-semibold text-white leading-snug">
                    {extras.headline}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who should check */}
      <section className="py-12 sm:py-14 bg-[#0B1F3A] text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(ellipse at top right, ${accent}55, transparent 55%)`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
          <motion.div {...fadeUp} className="max-w-2xl">
            <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-[#F5D565]">
              Who should book a check?
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold">
              If this sounds like you — come early
            </h2>
          </motion.div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {extras.whoShould.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm p-5"
              >
                <div className="h-1.5 w-10 rounded-full mb-4" style={{ background: accent }} />
                <h3 className="text-base font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{card.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-10 flex flex-col sm:flex-row gap-3">
            <BookAppointmentButton className="inline-flex justify-center px-8 py-3.5 rounded-full bg-[#F5D565] text-[#0B1F3A] text-sm font-bold hover:bg-yellow-300 transition-colors">Book Your Eye Check-up</BookAppointmentButton>
            <a
              href={`tel:${site.phones[0].replace(/\s/g, '')}`}
              className="inline-flex justify-center px-8 py-3.5 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              Call {site.phones[0]}
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
