'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const treatments = [
  {
    name: 'Cataract',
    slug: 'cataract',
    tag: 'SAFE · PAINLESS · PRECISE',
    line: 'Foggy lens out. Clear premium lens in. Life looks bright again.',
    image: '/images/treatment-cataract.png',
    color: '#0096D6',
  },
  {
    name: 'LASIK',
    slug: 'lasik',
    tag: 'FREEDOM FROM GLASSES',
    line: 'Reshape the cornea so light focuses clearly — after full safety tests.',
    image: '/images/treatment-lasik.png',
    color: '#0284C7',
  },
  {
    name: 'Retina',
    slug: 'retina',
    tag: 'PROTECT THE CAMERA',
    line: 'Floaters, flashes, diabetes — early scans can save sight.',
    image: '/images/treatment-retina.png',
    color: '#DC2626',
  },
  {
    name: 'Glaucoma',
    slug: 'glaucoma',
    tag: 'SILENT THIEF OF SIGHT',
    line: 'Pressure and nerve checks protect the vision you still have.',
    image: '/images/treatment-glaucoma.png',
    color: '#D97706',
  },
  {
    name: 'Cornea',
    slug: 'cornea',
    tag: 'CLEAR FRONT WINDOW',
    line: 'Infection, keratoconus, scarring — map, treat, restore.',
    image: '/images/treatment-cornea.png',
    color: '#0EA5E9',
  },
  {
    name: 'Pediatric',
    slug: 'pediatric',
    tag: 'GROWING EYES',
    line: 'Gentle checks so children learn and play with confidence.',
    image: '/images/treatment-pediatric.png',
    color: '#059669',
  },
];

export default function TreatmentsSection({ hideHeader = false, limit }: { hideHeader?: boolean; limit?: number }) {
  const list = limit ? treatments.slice(0, limit) : treatments;

  return (
    <section id="treatments" className="relative py-16 sm:py-20 bg-[#F4F8FB]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        {!hideHeader && (
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-10">
            <div className="max-w-2xl">
              <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-brand-red">
                Conditions &amp; Care
              </p>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Understand the problem.{' '}
                <span className="text-brand-red">Know the solution.</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Not old brochure cards — living guides with visuals. Tap any condition to see how we care for it as our
                dharma: clear words, modern tools, honest plans.
              </p>
            </div>
            <Link
              href="/treatments"
              className="inline-flex self-start lg:self-auto px-6 py-3 rounded-full bg-[#0B1F3A] text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
            >
              Open full library →
            </Link>
          </div>
        )}

        {/* Featured first row - large cinematic cards */}
        <div className="grid lg:grid-cols-12 gap-4 sm:gap-5">
          {list.map((t, i) => {
            const featured = i === 0;
            const wide = i === 1 || i === 2;
            const span = featured
              ? 'lg:col-span-7'
              : wide && i < 3
                ? 'lg:col-span-5'
                : 'lg:col-span-4';

            return (
              <motion.div
                key={t.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.06, duration: 0.45 }}
                className={span}
              >
                <Link href={`/treatments/${t.slug}`} className="group block h-full">
                  <article
                    className={`relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-slate-900 shadow-lg h-full min-h-[280px] ${
                      featured ? 'sm:min-h-[360px]' : 'sm:min-h-[260px]'
                    }`}
                  >
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                      sizes="(max-width:1024px) 100vw, 50vw"
                      priority={i === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                      <span
                        className="inline-flex rounded-full px-3 py-1 text-[10px] font-bold tracking-[0.12em] uppercase text-white border border-white/20"
                        style={{ background: `${t.color}cc` }}
                      >
                        {t.tag}
                      </span>
                      <h3
                        className={`mt-3 font-bold text-white ${
                          featured ? 'text-3xl sm:text-4xl' : 'text-2xl'
                        }`}
                      >
                        {t.name}
                      </h3>
                      <p className="mt-2 text-sm text-white/80 leading-relaxed max-w-md">{t.line}</p>
                      <p
                        className="mt-4 text-sm font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                        style={{ color: '#F5D565' }}
                      >
                        Open visual guide →
                      </p>
                    </div>
                  </article>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
