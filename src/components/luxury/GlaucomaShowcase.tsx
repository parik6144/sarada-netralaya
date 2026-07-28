'use client';

import BookAppointmentButton from '@/components/luxury/BookAppointmentButton';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { site } from '@/data/site';

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.45 },
};

export default function GlaucomaShowcase() {
  return (
    <>
      {/* Vision comparison — school-level visual */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-[#FFF8F0] to-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
            <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-amber-700">
              See the difference
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">
              Why side vision matters
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Glaucoma often steals the edges of your sight first — quietly.
              Imagine a photo with the borders slowly fading. That is why early checks save vision.
            </p>
          </motion.div>

          <div className="mt-10 grid md:grid-cols-2 gap-5 lg:gap-8">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="relative overflow-hidden rounded-3xl border border-emerald-200/80 bg-white shadow-sm"
            >
              <div className="relative h-52 sm:h-64">
                <Image
                  src="/images/glaucoma-lifestyle.png"
                  alt="Normal wide vision lifestyle"
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 50vw"
                />
              </div>
              <div className="p-5 sm:p-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                  Healthy vision
                </div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">Full, clear view</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  You see the centre and the sides — walking, driving, and reading feel safe and natural.
                </p>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="relative overflow-hidden rounded-3xl border border-amber-200 bg-white shadow-sm"
            >
              <div className="relative h-52 sm:h-64 bg-slate-900">
                <Image
                  src="/images/glaucoma-lifestyle.png"
                  alt="Tunnel vision simulation"
                  fill
                  className="object-cover opacity-90"
                  sizes="(max-width:768px) 100vw, 50vw"
                />
                {/* Tunnel vision vignette */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle at center, transparent 22%, rgba(2,6,23,0.55) 48%, rgba(2,6,23,0.97) 72%)',
                  }}
                />
                <div className="absolute inset-x-0 bottom-3 text-center">
                  <span className="inline-block rounded-full bg-black/55 px-3 py-1 text-[10px] tracking-wide uppercase text-amber-200 border border-amber-400/40">
                    Advanced glaucoma feel
                  </span>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-800">
                  Untreated risk
                </div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">Tunnel vision</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Side vision shrinks. The centre may still look okay — until it is too late.
                  Lost optic-nerve fibres cannot grow back.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Simple pressure story */}
      <section className="py-12 sm:py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-center">
            <motion.div {...fadeUp}>
              <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-amber-700">
                Easy science
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">
                Think of your eye like a soft ball
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                Inside the eye, fluid comes in and drains out — like a sink with a tap and a drain.
                If the drain is slow, pressure rises. That pressure can hurt the optic nerve
                (the cable that sends pictures to the brain).
              </p>

              <div className="mt-7 space-y-4">
                {[
                  {
                    step: '01',
                    title: 'We measure pressure',
                    body: 'A quick, gentle test — usually done with soft air or a light touch tip.',
                  },
                  {
                    step: '02',
                    title: 'We scan the nerve',
                    body: 'OCT shows if nerve fibres are thinning — even before you notice blur.',
                  },
                  {
                    step: '03',
                    title: 'We map side vision',
                    body: 'A field test draws a map of what you can see at the edges.',
                  },
                  {
                    step: '04',
                    title: 'We protect what remains',
                    body: 'Drops, laser, or surgery — chosen for your stage — to keep pressure safe.',
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-sm font-bold text-white shadow-md shadow-amber-500/25">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                      <p className="mt-1 text-sm text-slate-600 leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <div className="relative min-h-[320px] sm:min-h-[420px] overflow-hidden rounded-[2rem] border border-amber-200/70 shadow-xl shadow-amber-900/10">
                <Image
                  src="/images/treatment-glaucoma.png"
                  alt="Gentle glaucoma eye pressure check"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1208]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                  <p className="text-amber-200 text-[11px] tracking-[0.16em] uppercase font-semibold">
                    Silent thief of sight
                  </p>
                  <p className="mt-2 text-lg sm:text-xl font-semibold text-white leading-snug">
                    No pain in early stages — regular checks are your best shield.
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { k: '40+', v: 'Age to start checks' },
                  { k: 'Painless', v: 'Most tests & drops' },
                  { k: 'Lifelong', v: 'Protect & monitor' },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="rounded-2xl border border-amber-100 bg-gradient-to-b from-white to-amber-50/60 px-3 py-4 text-center"
                  >
                    <div className="text-sm font-bold text-amber-800">{s.k}</div>
                    <div className="mt-1 text-[11px] text-slate-500 leading-snug">{s.v}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who should get checked */}
      <section className="py-12 sm:py-14 bg-[#0B1F3A] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top_right,_rgba(245,213,101,0.25),_transparent_55%)]" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
          <motion.div {...fadeUp} className="max-w-2xl">
            <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-[#F5D565]">
              Who needs a glaucoma check?
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold">
              If any of these sound like you — book today
            </h2>
          </motion.div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Age 40+', desc: 'Risk rises with age — even if your eyes feel fine.' },
              { title: 'Family history', desc: 'Parent or sibling with glaucoma? Check sooner.' },
              { title: 'Diabetes / steroids', desc: 'These can raise eye pressure over time.' },
              { title: 'Sudden pain + nausea', desc: 'This can be an emergency — call us at once.' },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm p-5"
              >
                <div className="h-1.5 w-10 rounded-full bg-[#F5D565] mb-4" />
                <h3 className="text-base font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="mt-10 flex flex-col sm:flex-row gap-3">
            <BookAppointmentButton className="inline-flex justify-center px-8 py-3.5 rounded-full bg-[#F5D565] text-[#0B1F3A] text-sm font-bold hover:bg-yellow-300 transition-colors">Book Glaucoma Check-up</BookAppointmentButton>
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
