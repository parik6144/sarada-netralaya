'use client';

import BookAppointmentButton from '@/components/luxury/BookAppointmentButton';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const pillars = [
  {
    title: 'Listen first, then treat',
    body: 'We listen carefully, explain in simple words, and only then start treatment — so every family feels respected.',
    image: '/images/hero-eye-care.png',
    tag: 'Compassion',
  },
  {
    title: 'Clear words, clear plans',
    body: 'We show your scans, name the eye part in everyday words, and share options honestly — no fear, no confusing medical talk.',
    image: '/images/tech-oct.png',
    tag: 'Education',
  },
  {
    title: 'Careful, modern treatment',
    body: 'Latest machines for cataract, retina, glaucoma and more — used gently, explained clearly, followed with care.',
    image: '/images/tech-surgery.png',
    tag: 'Excellence',
  },
];

const journey = [
  { n: '01', title: 'Welcome & listen', body: 'Symptoms, history, worries — we start with your story.' },
  { n: '02', title: 'See the problem', body: 'Tests and scans, then a simple explanation of findings.' },
  { n: '03', title: 'Choose together', body: 'Medicines, laser, or surgery — matched to your life.' },
  { n: '04', title: 'Heal with guidance', body: 'Drops, reviews, and warning signs written clearly.' },
];

export default function WhyChooseSection({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="why-us" className="relative overflow-hidden">
      {/* Full-bleed atmosphere */}
      <div className="absolute inset-0 bg-[#0B1F3A]" />
      <div className="absolute inset-0 opacity-40">
        <Image src="/images/hospital-building.png" alt="" fill className="object-cover" sizes="100vw" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A]/85 via-[#0B1F3A]/92 to-[#0B1F3A]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,213,101,0.18),_transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 py-16 sm:py-20">
        {!hideHeader && (
          <div className="max-w-3xl">
            <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#F5D565]">
              Why Families Choose Us
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              We treat your vision as{' '}
              <span className="text-[#F5D565]">our responsibility</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-white/75 leading-relaxed max-w-2xl">
              Not only appointments and operations — a promise to protect sight with honesty, modern skill, and
              human warmth. Passion for Excellence. Committed to Care.
            </p>
          </div>
        )}

        <div className="mt-12 grid lg:grid-cols-3 gap-4 sm:gap-5">
          {pillars.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative overflow-hidden rounded-3xl min-h-[340px] sm:min-h-[380px] border border-white/10"
            >
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width:1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/55 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <span className="inline-flex rounded-full border border-[#F5D565]/40 bg-[#F5D565]/15 px-3 py-1 text-[10px] tracking-[0.14em] uppercase font-bold text-[#F5D565]">
                  {p.tag}
                </span>
                <h3 className="mt-3 text-xl font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-white/75 leading-relaxed">{p.body}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 sm:mt-14">
          <h3 className="text-xl sm:text-2xl font-bold text-white text-center">Your care journey</h3>
          <p className="mt-2 text-sm text-white/60 text-center max-w-xl mx-auto">
            Four calm steps — so you never feel lost from first visit to recovery.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {journey.map((j, i) => (
              <motion.div
                key={j.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm p-5"
              >
                <div className="text-2xl font-bold text-[#F5D565]/40">{j.n}</div>
                <h4 className="mt-2 text-base font-semibold text-white">{j.title}</h4>
                <p className="mt-1.5 text-sm text-white/65 leading-relaxed">{j.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-5 rounded-3xl border border-[#F5D565]/25 bg-gradient-to-r from-white/5 to-[#F5D565]/10 px-6 py-7 sm:px-10">
          <div>
            <p className="text-lg sm:text-xl font-semibold text-white italic">
              Your Vision is Our Mission. Your Trust is Our Strength.
            </p>
            <p className="mt-2 text-sm text-white/65">
              High-end cataract surgery · Modern diagnostics · Cashless support
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <BookAppointmentButton className="inline-flex justify-center px-7 py-3 rounded-full bg-[#F5D565] text-[#0B1F3A] text-sm font-bold hover:bg-yellow-300 transition-colors">Book Appointment</BookAppointmentButton>
            <a
              href="tel:+917091090014"
              className="inline-flex justify-center px-7 py-3 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Call 70910 90014
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
