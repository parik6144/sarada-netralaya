'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import BookAppointmentButton from '@/components/luxury/BookAppointmentButton';
import SiteLayout from '@/components/luxury/SiteLayout';
import ExploreMore from '@/components/luxury/ExploreMore';
import { site } from '@/data/site';

type Clarity = 'sharp' | 'soft' | 'blur';
type Zone = 'far' | 'mid' | 'near';

const zones: { key: Zone; label: string; hint: string; image: string }[] = [
  {
    key: 'far',
    label: 'Far',
    hint: 'Road, TV, outdoors',
    image: '/images/guides/iol-lifestyle-driving.png',
  },
  {
    key: 'mid',
    label: 'Mid',
    hint: 'Laptop, dashboard',
    image: '/images/guides/iol-lifestyle-computer.png',
  },
  {
    key: 'near',
    label: 'Near',
    hint: 'Books, phone, print',
    image: '/images/guides/iol-lifestyle-reading.png',
  },
];

const lenses = [
  {
    id: 'monofocal',
    name: 'Monofocal',
    short: 'Far only',
    color: '#0B1F3A',
    image: '/images/guides/iol-lifestyle-driving.png',
    imageAlt: 'Clear distance vision for driving and outdoor life',
    oneLine: 'One clear distance — usually far. Simple and reliable.',
    clarity: { far: 'sharp', mid: 'blur', near: 'blur' } as Record<Zone, Clarity>,
    bestIf: 'You are fine wearing reading glasses for books and computer.',
    watchOut: 'Mid and near will usually need glasses.',
    lifestyle: 'Driving · TV · outdoor walking',
  },
  {
    id: 'enhanced',
    name: 'Enhanced Monofocal',
    short: 'Far + mild mid',
    color: '#8B5E34',
    image: '/images/cataract-lifestyle.png',
    imageAlt: 'Comfortable day vision with enhanced monofocal lenses',
    oneLine: 'Clear far vision, plus a little help for computer distance.',
    clarity: { far: 'sharp', mid: 'soft', near: 'blur' } as Record<Zone, Clarity>,
    bestIf: 'You want strong night driving and contrast, with mild mid-range help.',
    watchOut: 'Reading glasses are still needed for near work. Almost no halos.',
    lifestyle: 'Night driving · strong contrast needs',
  },
  {
    id: 'edof',
    name: 'EDOF',
    short: 'Far + mid',
    color: '#0B6E4F',
    image: '/images/guides/iol-lifestyle-computer.png',
    imageAlt: 'Computer and dashboard vision with EDOF lenses',
    oneLine: 'Smooth far-to-mid range — great for laptop and dashboard.',
    clarity: { far: 'sharp', mid: 'sharp', near: 'soft' } as Record<Zone, Clarity>,
    bestIf: 'You work long hours on a computer or drive often.',
    watchOut: 'Very small print may still need reading glasses. Fewer night halos than many multifocals.',
    lifestyle: 'Office work · frequent driving',
  },
  {
    id: 'multifocal',
    name: 'Multifocal / Trifocal',
    short: 'Far + mid + near',
    color: '#C8102E',
    image: '/images/guides/iol-lifestyle-reading.png',
    imageAlt: 'Reading and near work with multifocal lens vision',
    oneLine: 'All three zones — highest chance of living without glasses.',
    clarity: { far: 'sharp', mid: 'sharp', near: 'sharp' } as Record<Zone, Clarity>,
    bestIf: 'You read a lot, use your phone often, and want maximum glasses freedom.',
    watchOut: 'Some people see glare or halos at night at first. Needs a healthy retina and cornea.',
    lifestyle: 'Reading · travel · fewer glasses',
  },
  {
    id: 'toric',
    name: 'Toric',
    short: 'Astigmatism fix',
    color: '#4FA3D1',
    image: '/images/treatment-cataract.png',
    imageAlt: 'Astigmatism correction with Toric IOL during cataract surgery',
    oneLine: 'Not a distance lens — it straightens warped blur from astigmatism.',
    clarity: { far: 'sharp', mid: 'soft', near: 'soft' } as Record<Zone, Clarity>,
    bestIf: 'Your cornea has meaningful astigmatism (often above ~0.75 D).',
    watchOut: 'Can be added to Monofocal, EDOF, or Multifocal. Needs precise alignment in surgery.',
    lifestyle: 'Clearer, less stretched vision at your chosen distances',
  },
];

const clarityCopy: Record<Clarity, { label: string; blur: string; tint: string }> = {
  sharp: { label: 'Clear', blur: 'blur-0', tint: '' },
  soft: { label: 'Soft', blur: 'blur-[2px] scale-105', tint: 'bg-white/10' },
  blur: { label: 'Blurry', blur: 'blur-[5px] scale-110', tint: 'bg-white/25' },
};

const startFrom = [
  { q: 'I drive a lot / watch TV', lensId: 'monofocal' },
  { q: 'I sit at a computer all day', lensId: 'edof' },
  { q: 'I want to read without glasses', lensId: 'multifocal' },
  { q: 'My vision feels warped / stretched', lensId: 'toric' },
];

export default function IolGuideClient() {
  const [activeId, setActiveId] = useState(lenses[0].id);
  const active = lenses.find((l) => l.id === activeId) ?? lenses[0];

  return (
    <SiteLayout>
      {/* Hero — nav-offset so banner clears fixed navbar */}
      <section className="nav-offset relative overflow-hidden bg-[#0B1F3A] text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/guides/iol-guide-hero.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_30%] opacity-45"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/88 to-[#0B1F3A]/55" />
        </div>

        <div className="relative max-w-7xl mx-auto pl-16 pr-5 sm:px-6 py-10 sm:py-14">
          <nav className="flex flex-wrap items-center gap-2 text-xs text-white/60 mb-5">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/treatments/cataract" className="hover:text-white">
              Cataract
            </Link>
            <span>/</span>
            <span className="text-white/90">IOL Guide</span>
          </nav>

          <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-[#F5D565]">
            SARADA · Clear Vision, Simplified
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-2xl leading-tight">
            Which lens fits your day?
          </h1>
          <p className="mt-4 text-sm sm:text-base text-white/80 max-w-xl leading-relaxed">
            One simple idea: your eyes need Far, Mid, and Near. Pick a lifestyle below — we show the matching
            lens in pictures.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a
              href="#choose"
              className="inline-flex justify-center px-7 py-3.5 rounded-full bg-[#F5D565] text-[#0B1F3A] text-sm font-bold hover:bg-yellow-300 transition-colors"
            >
              Choose your lens ↓
            </a>
            <BookAppointmentButton className="inline-flex justify-center px-7 py-3.5 rounded-full border border-white/35 text-white text-sm font-medium hover:bg-white/10 transition-colors">
              Book counselling
            </BookAppointmentButton>
          </div>
        </div>
      </section>

      {/* Step 1 — What is an IOL + 3 zones (once) */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
            <div>
              <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-brand-blue">Step 1</p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                First, know the three zones
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                An <strong className="font-semibold text-slate-800">IOL</strong> is the clear artificial lens
                placed in your eye during cataract surgery. Different IOLs cover different everyday distances:
              </p>
              <ul className="mt-5 space-y-3">
                {zones.map((z) => (
                  <li key={z.key} className="flex gap-3 items-start">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-red shrink-0" />
                    <span className="text-sm text-slate-700">
                      <strong className="text-slate-900">{z.label}</strong> — {z.hint}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm text-slate-500 leading-relaxed">
                Premium lenses cover more zones. Your surgeon matches the choice to your eye health — not only
                your wishlist.
              </p>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
              <Image
                src="/images/guides/iol-anatomy.png"
                alt="Natural lens replaced by an intraocular lens inside the eye"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4">
            {zones.map((z) => (
              <div key={z.key} className="relative aspect-[4/3] overflow-hidden">
                <Image src={z.image} alt={z.hint} fill sizes="33vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-3">
                  <p className="text-white font-bold text-sm sm:text-base">{z.label}</p>
                  <p className="text-white/70 text-[11px] sm:text-xs hidden sm:block">{z.hint}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step 2 — One place for each lens (interactive) */}
      <section id="choose" className="scroll-mt-28 py-12 sm:py-16 bg-[#F4F7FA]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="max-w-2xl mb-8">
            <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-brand-red">Step 2</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">
              Tap a lens — see it once, clearly
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Everything about that lens stays here: picture, Far / Mid / Near, who it suits, and what to watch
              for.
            </p>
          </div>

          {/* Quick start from lifestyle */}
          <div className="mb-6 flex flex-wrap gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 self-center mr-1">
              Start from:
            </span>
            {startFrom.map((item) => (
              <button
                key={item.q}
                type="button"
                onClick={() => setActiveId(item.lensId)}
                className={`text-xs sm:text-sm px-3.5 py-2 rounded-full border transition-colors ${
                  activeId === item.lensId
                    ? 'border-brand-red bg-brand-red text-white'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                }`}
              >
                {item.q}
              </button>
            ))}
          </div>

          {/* Lens tabs */}
          <div
            className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-thin"
            role="tablist"
            aria-label="IOL types"
          >
            {lenses.map((lens) => {
              const selected = lens.id === activeId;
              return (
                <button
                  key={lens.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveId(lens.id)}
                  className={`shrink-0 px-4 py-3 text-left min-w-[9.5rem] transition-colors ${
                    selected ? 'text-white' : 'bg-white text-slate-800 ring-1 ring-slate-200 hover:bg-slate-50'
                  }`}
                  style={selected ? { background: lens.color } : undefined}
                >
                  <span className="block text-sm font-bold">{lens.name}</span>
                  <span className={`block text-[11px] mt-0.5 ${selected ? 'text-white/75' : 'text-slate-500'}`}>
                    {lens.short}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Single lens panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
              className="mt-6 bg-white ring-1 ring-slate-200 overflow-hidden"
              role="tabpanel"
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[380px]">
                  <Image
                    src={active.image}
                    alt={active.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div
                    className="absolute top-4 left-4 px-3 py-1.5 text-[10px] font-bold tracking-[0.14em] uppercase text-white"
                    style={{ background: active.color }}
                  >
                    {active.short}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex flex-col">
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">{active.name}</h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">{active.oneLine}</p>

                  <p className="mt-6 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    How this lens sees Far · Mid · Near
                  </p>
                  <div className="mt-3 grid grid-cols-3 gap-2.5">
                    {zones.map((z) => {
                      const level = active.clarity[z.key];
                      const meta = clarityCopy[level];
                      return (
                        <div key={z.key}>
                          <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                            <Image
                              src={z.image}
                              alt={`${active.name} ${z.label}: ${meta.label}`}
                              fill
                              sizes="120px"
                              className={`object-cover ${meta.blur}`}
                            />
                            {meta.tint && <div className={`absolute inset-0 ${meta.tint}`} />}
                          </div>
                          <p className="mt-1.5 text-center text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                            {z.label}
                          </p>
                          <p
                            className="text-center text-xs font-bold"
                            style={{ color: level === 'sharp' ? active.color : undefined }}
                          >
                            <span className={level === 'sharp' ? '' : 'text-slate-400'}>{meta.label}</span>
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-6 space-y-3 text-sm">
                    <p>
                      <span className="font-semibold text-slate-900">Best if: </span>
                      <span className="text-slate-600">{active.bestIf}</span>
                    </p>
                    <p>
                      <span className="font-semibold text-slate-900">Watch out: </span>
                      <span className="text-slate-600">{active.watchOut}</span>
                    </p>
                    <p>
                      <span className="font-semibold text-slate-900">Everyday fit: </span>
                      <span className="text-slate-600">{active.lifestyle}</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Step 3 — Quick compare (compact, not repeating stories) */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="max-w-2xl mb-8">
            <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-brand-blue">Step 3</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">Side-by-side snapshot</h2>
            <p className="mt-2 text-sm text-slate-600">
              One row each — no long cards. Tap a name above to open full detail.
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-200">
            <table className="min-w-[640px] w-full text-sm text-left">
              <thead>
                <tr className="bg-[#0B1F3A] text-white">
                  <th className="px-4 py-3 font-semibold">Lens</th>
                  <th className="px-3 py-3 font-medium">Far</th>
                  <th className="px-3 py-3 font-medium">Mid</th>
                  <th className="px-3 py-3 font-medium">Near</th>
                  <th className="px-4 py-3 font-medium">In one line</th>
                </tr>
              </thead>
              <tbody>
                {lenses
                  .filter((l) => l.id !== 'toric')
                  .map((lens, i) => (
                    <tr
                      key={lens.id}
                      className={`${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'} cursor-pointer hover:bg-[#F0F7FC]`}
                      onClick={() => {
                        setActiveId(lens.id);
                        document.getElementById('choose')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        <span className="inline-flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full" style={{ background: lens.color }} />
                          {lens.name}
                        </span>
                      </td>
                      {(['far', 'mid', 'near'] as Zone[]).map((z) => (
                        <td key={z} className="px-3 py-3">
                          <span
                            className={
                              lens.clarity[z] === 'sharp'
                                ? 'font-bold text-slate-900'
                                : lens.clarity[z] === 'soft'
                                  ? 'text-slate-600'
                                  : 'text-slate-400'
                            }
                          >
                            {clarityCopy[lens.clarity[z]].label}
                          </span>
                        </td>
                      ))}
                      <td className="px-4 py-3 text-slate-600">{lens.short}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            <span className="font-semibold text-[#4FA3D1]">Toric</span> can be added to any of the above when
            you have astigmatism — it fixes warped blur, not the Far / Mid / Near pattern itself.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-16 bg-[#0B1F3A] text-white">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
          <p className="text-[#F5D565] text-xs tracking-[0.16em] uppercase font-semibold">Next step</p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold">Confirm with your eye tests</h2>
          <p className="mt-3 text-sm text-white/75 max-w-xl mx-auto leading-relaxed">
            This guide is for understanding. Your doctor will check cornea, retina, and lifestyle — then
            recommend the safest lens for you.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <BookAppointmentButton className="inline-flex justify-center px-8 py-3.5 rounded-full bg-[#F5D565] text-[#0B1F3A] text-sm font-bold hover:bg-yellow-300 transition-colors">
              Book lens counselling
            </BookAppointmentButton>
            <a
              href={`tel:${site.phones[0].replace(/\s/g, '')}`}
              className="inline-flex justify-center px-8 py-3.5 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              Call {site.phones[0]}
            </a>
          </div>
        </div>
      </section>

      <ExploreMore
        links={[
          { label: 'Cataract Surgery', href: '/treatments/cataract', desc: 'How cataract treatment works at SARADA.' },
          { label: 'Technology', href: '/technology', desc: 'Machines we use for precise lens planning.' },
          { label: 'Book Appointment', href: '/appointment', desc: 'Talk to our team about your lens options.' },
        ]}
      />
    </SiteLayout>
  );
}
