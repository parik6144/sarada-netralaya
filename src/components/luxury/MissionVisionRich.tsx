'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { site } from '@/data/site';

const missionPoints = [
  {
    title: 'See clearly, decide calmly',
    body: 'We explain scans and findings in everyday English — so fear never replaces understanding.',
  },
  {
    title: 'Treat with precision',
    body: 'Modern cataract, glaucoma, retina and cornea care — matched to your stage, lifestyle and insurance.',
  },
  {
    title: 'Walk with you home',
    body: 'Drop schedules, warning signs and follow-ups are written clearly for safe, predictable recovery.',
  },
];

const visionPillars = [
  { label: 'Trusted care', detail: 'Families of Jamshedpur choose us for honesty first.' },
  { label: 'Modern skill', detail: 'Technology that protects sight — used gently, explained simply.' },
  { label: 'Human warmth', detail: 'Compassion is not extra. It is how we practice medicine.' },
  { label: 'Access for all', detail: 'Cashless support so money worries do not delay treatment.' },
];

export default function MissionVisionRich() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20">
      {/* Atmosphere */}
      <div className="absolute inset-0 bg-[#070F1C]" />
      <div className="absolute inset-0 opacity-40">
        <Image src="/images/hospital-building.png" alt="" fill className="object-cover" sizes="100vw" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#070F1C]/80 via-[#0B1F3A]/92 to-[#070F1C]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(245,213,101,0.16),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_70%,rgba(79,163,209,0.18),transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="text-[11px] tracking-[0.24em] uppercase font-semibold text-[#F5D565]">
            Mission &amp; Vision
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
            Why SARADA exists —{' '}
            <span className="text-[#F5D565]">and where we are going</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed max-w-2xl">
            {site.tagline} We protect sight with careful treatment, clear explanations, and a promise that no family
            should lose vision because care felt confusing or came too late.
          </p>
        </motion.div>

        {/* Motto quote band */}
        <motion.blockquote
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08, duration: 0.45 }}
          className="mt-10 relative overflow-hidden rounded-[1.5rem] border border-[#F5D565]/30 bg-gradient-to-r from-white/10 via-white/[0.06] to-white/10 px-6 py-7 sm:px-10 sm:py-8 backdrop-blur-md"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#F5D565]" />
          <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#F5D565]/90">Our promise</p>
          <p className="mt-2 text-xl sm:text-2xl lg:text-3xl font-semibold text-white leading-snug tracking-tight">
            “Your Vision is Our Mission.{' '}
            <span className="text-[#F5D565]">Your Trust is Our Strength.</span>”
          </p>
        </motion.blockquote>

        {/* Mission + Vision dual stage */}
        <div className="mt-8 grid lg:grid-cols-2 gap-5 lg:gap-6">
          {/* Mission — photo rich */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 min-h-[520px] sm:min-h-[560px] shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
          >
            <Image
              src="/images/about-clinic.jpg"
              alt="Our mission in patient care"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070F1C] via-[#0B1F3A]/70 to-[#0B1F3A]/20" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(200,16,46,0.4),_transparent_55%)]" />

            <div className="absolute top-6 left-6 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#F5D565]/45 bg-[#F5D565]/15 text-sm font-bold text-[#F5D565] backdrop-blur-sm">
                01
              </span>
              <div>
                <p className="text-[11px] tracking-[0.22em] uppercase font-semibold text-[#F5D565]">Our Mission</p>
                <p className="text-xs text-white/55 mt-0.5">What we do every day</p>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Your vision is <span className="text-[#F5D565]">our mission</span>
              </h3>
              <p className="mt-3 text-sm sm:text-[15px] text-white/80 leading-relaxed max-w-lg">
                We make advanced eye care accessible — combining clinical excellence with clear education so you
                understand your condition, your options, and your recovery with confidence.
              </p>

              <div className="mt-6 space-y-3">
                {missionPoints.map((p) => (
                  <div
                    key={p.title}
                    className="rounded-xl border border-white/15 bg-white/10 backdrop-blur-md px-4 py-3"
                  >
                    <p className="text-sm font-semibold text-white">{p.title}</p>
                    <p className="mt-1 text-xs text-white/70 leading-relaxed">{p.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>

          {/* Vision — light rich panel */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-[#F7FBFE] via-white to-[#EAF4FB] min-h-[520px] sm:min-h-[560px] shadow-[0_30px_80px_rgba(0,0,0,0.2)]"
          >
            <div className="absolute inset-0 opacity-[0.08]">
              <Image src="/images/hero-eye-care.png" alt="" fill className="object-cover" sizes="50vw" />
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(79,163,209,0.28),_transparent_50%)]" />
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full border border-[#4FA3D1]/25" />
            <div className="absolute right-6 top-16 h-28 w-28 rounded-full border-2 border-[#C8102E]/15" />

            <div className="relative z-10 flex h-full flex-col p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#4FA3D1]/40 bg-[#4FA3D1]/15 text-sm font-bold text-[#0B1F3A]">
                  02
                </span>
                <div>
                  <p className="text-[11px] tracking-[0.22em] uppercase font-semibold text-[#4FA3D1]">Our Vision</p>
                  <p className="text-xs text-slate-500 mt-0.5">Where we are headed</p>
                </div>
              </div>

              <h3 className="mt-8 text-2xl sm:text-3xl font-bold text-[#0B1F3A] tracking-tight">
                Your trust is <span className="text-brand-red">our strength</span>
              </h3>
              <p className="mt-3 text-sm sm:text-[15px] text-slate-600 leading-relaxed max-w-lg">
                We aim to be Jamshedpur&apos;s most trusted eye hospital — where modern facilities, specialist surgeons,
                and compassionate service work together so no one loses sight because care was unclear or delayed.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-3 flex-1 content-start">
                {visionPillars.map((v) => (
                  <div
                    key={v.label}
                    className="rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-sm backdrop-blur-sm"
                  >
                    <div className="h-1 w-8 rounded-full bg-gradient-to-r from-brand-red to-[#4FA3D1]" />
                    <p className="mt-3 text-sm font-bold text-[#0B1F3A]">{v.label}</p>
                    <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">{v.detail}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-xs italic text-slate-500 border-t border-slate-200/80 pt-4">
                Passion for Excellence. Committed to Care.
              </p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
