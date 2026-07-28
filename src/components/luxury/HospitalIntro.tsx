'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 2, suffix: '', label: 'Branches', sub: 'Optimal Eye Health', display: '2' },
  { value: 5, suffix: '+', label: 'Doctors', sub: 'Skilled Eye Experts', display: '5+' },
  { value: 50, suffix: 'k+', label: 'Satisfied Patients Served', sub: '', display: '50k+' },
];

const explainSteps = [
  {
    n: '01',
    title: 'Diagnose clearly',
    body: 'Everyday words for what is wrong, which eye structure is involved, why it happened, and how serious it is today.',
  },
  {
    n: '02',
    title: 'Plan the right treatment',
    body: 'Medicines, laser, or premium cataract surgery with IOLs — matched to disease stage, lifestyle, and insurance.',
  },
  {
    n: '03',
    title: 'Guide recovery',
    body: 'Drop schedules, warning signs, work limits, and follow-up dates written clearly so healing stays safe.',
  },
];

function AnimatedCounter({
  value,
  suffix,
  display,
}: {
  value: number;
  suffix: string;
  display: string;
}) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const animate = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;
      const obj = { val: 0 };
      gsap.to(obj, {
        val: value,
        duration: 1.8,
        ease: 'power2.out',
        onUpdate: () => setCount(Math.floor(obj.val)),
        onComplete: () => {
          setCount(value);
          setDone(true);
        },
      });
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);

    const t = window.setTimeout(() => {
      if (!hasAnimated.current) {
        setCount(value);
        setDone(true);
        hasAnimated.current = true;
      }
    }, 2500);

    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, [value]);

  const text =
    done || count >= value
      ? display
      : suffix === 'k+'
        ? `${count}k+`
        : `${count.toLocaleString('en-IN')}${suffix}`;

  return (
    <span ref={ref} className="counter-number">
      {text}
    </span>
  );
}

export default function HospitalIntro({
  hideHeader = false,
  hideMissionVision = false,
  hideReadMore = false,
}: {
  hideHeader?: boolean;
  hideMissionVision?: boolean;
  hideReadMore?: boolean;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const mvRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(headingRef.current, { y: 28, opacity: 0.4 });
      gsap.to(headingRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 82%' },
      });

      if (mvRef.current) {
        const panels = mvRef.current.querySelectorAll('[data-mv-panel]');
        gsap.set(panels, { y: 36, opacity: 0 });
        gsap.to(panels, {
          y: 0,
          opacity: 1,
          stagger: 0.14,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: { trigger: mvRef.current, start: 'top 78%' },
        });
      }

      const kids = Array.from(statsRef.current?.children || []);
      if (kids.length) {
        gsap.set(kids, { y: 20 });
        gsap.to(kids, {
          y: 0,
          stagger: 0.1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: { trigger: statsRef.current, start: 'top 85%' },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="luxury-section relative overflow-hidden">
      {/* Soft atmospheric wash behind About */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_at_top,_rgba(79,163,209,0.12),_transparent_55%)]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
        <div ref={headingRef}>
          {!hideHeader && (
            <SectionHeader
              eyebrow="About Us"
              titleWhite="Where Precision Meets"
              titleAccent="Compassion"
              description="SARADA Netralaya & Maternity is an Advanced Eye Care Center in Jamshedpur dedicated to restoring and preserving vision through modern technology, experienced surgeons, and clear patient education."
            />
          )}
        </div>

        {/* ── Spectacular Mission & Vision ── */}
        {!hideMissionVision && (
        <div ref={mvRef} className={`${hideHeader ? 'mt-0' : 'mt-12'} space-y-5`}>
          {/* Motto ribbon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-[#F5D565]/35 bg-gradient-to-r from-[#0B1F3A] via-[#123A5C] to-[#0B1F3A] px-5 py-4 sm:px-8 sm:py-5 text-center shadow-lg"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,213,101,0.18),transparent_45%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(79,163,209,0.15),transparent_40%)]" />
            <p className="relative text-[10px] sm:text-[11px] tracking-[0.28em] uppercase font-semibold text-[#F5D565]/90">
              Our Promise
            </p>
            <p className="relative mt-1.5 text-base sm:text-xl md:text-2xl font-semibold text-white leading-snug tracking-tight">
              Your Vision is Our Mission.{' '}
              <span className="text-[#F5D565]">Your Trust is Our Strength.</span>
            </p>
          </motion.div>

          {/* Dual cinematic panels */}
          <div className="grid lg:grid-cols-2 gap-5 lg:gap-6">
            {/* Mission */}
            <article
              data-mv-panel
              className="group relative overflow-hidden rounded-[1.75rem] min-h-[380px] sm:min-h-[420px] border border-white/10 shadow-[0_20px_60px_rgba(11,31,58,0.25)]"
            >
              <Image
                src="/images/about-clinic.png"
                alt="SARADA clinic — our mission in care"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/75 to-[#0B1F3A]/25" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(200,16,46,0.35),_transparent_55%)]" />

              <div className="absolute top-5 left-5 sm:top-6 sm:left-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#F5D565]/50 bg-[#F5D565]/15 text-sm font-bold text-[#F5D565] backdrop-blur-sm">
                  01
                </span>
                <span className="text-[11px] tracking-[0.22em] uppercase font-semibold text-[#F5D565]">
                  Our Mission
                </span>
              </div>

              {/* Soft iris ring accent */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10" />
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full border border-[#F5D565]/20" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Your vision is{' '}
                  <span className="text-[#F5D565]">our mission</span>
                </h3>
                <p className="mt-3 text-sm sm:text-[15px] text-white/80 leading-relaxed max-w-md">
                  We make advanced eye care accessible — combining clinical excellence with clear education so you
                  understand your condition, your options, and your recovery with confidence.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {['Clinical excellence', 'Clear education', 'Confident recovery'].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Vision */}
            <article
              data-mv-panel
              className="group relative overflow-hidden rounded-[1.75rem] min-h-[380px] sm:min-h-[420px] border border-slate-200/80 bg-gradient-to-br from-[#F4F8FB] via-white to-[#E8F4FB] shadow-[0_20px_60px_rgba(11,31,58,0.12)]"
            >
              <div className="absolute inset-0 opacity-[0.07]">
                <Image
                  src="/images/hospital-building.png"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(79,163,209,0.25),_transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(200,16,46,0.08),_transparent_45%)]" />

              <div className="absolute top-5 left-5 sm:top-6 sm:left-6 flex items-center gap-3 z-10">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#4FA3D1]/40 bg-[#4FA3D1]/15 text-sm font-bold text-[#0B1F3A]">
                  02
                </span>
                <span className="text-[11px] tracking-[0.22em] uppercase font-semibold text-[#4FA3D1]">
                  Our Vision
                </span>
              </div>

              <div className="pointer-events-none absolute right-6 top-24 h-28 w-28 rounded-full border-2 border-[#4FA3D1]/25" />
              <div className="pointer-events-none absolute right-10 top-28 h-20 w-20 rounded-full border border-[#C8102E]/20" />
              <div className="pointer-events-none absolute right-[3.25rem] top-[8.25rem] h-8 w-8 rounded-full bg-gradient-to-br from-[#4FA3D1]/40 to-[#C8102E]/30 blur-[1px]" />

              <div className="relative z-10 flex h-full min-h-[380px] sm:min-h-[420px] flex-col justify-end p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1F3A] tracking-tight">
                  Your trust is{' '}
                  <span className="text-brand-red">our strength</span>
                </h3>
                <p className="mt-3 text-sm sm:text-[15px] text-slate-600 leading-relaxed max-w-md">
                  We aim to be Jamshedpur&apos;s most trusted eye hospital — where modern facilities, specialist
                  surgeons, and compassionate service work together so no one loses sight because care was unclear or
                  delayed.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {['Trusted in Jamshedpur', 'Modern facilities', 'Specialist surgeons'].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
        )}

        {/* How we explain */}
        <div className={`${hideMissionVision && hideHeader ? 'mt-0' : 'mt-10 sm:mt-12'} relative overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-sm`}>
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#4FA3D1]/10 blur-2xl" />
          <div className="relative">
            <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-brand-red">Patient education</p>
            <h3 className="mt-2 text-xl sm:text-2xl font-bold text-[#0B1F3A]">How we explain your eye problem</h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-3xl">
              Many patients feel anxious because medical language is hard. We break every condition into three simple
              layers — what you feel, what is happening inside the eye, and how we fix it.
            </p>
            <div className="mt-8 grid sm:grid-cols-3 gap-5 sm:gap-6">
              {explainSteps.map((s) => (
                <div key={s.n} className="relative rounded-2xl border border-slate-100 bg-[#F8FBFD] p-5">
                  <span className="text-2xl font-bold text-[#4FA3D1]/35">{s.n}</span>
                  <p className="mt-2 font-semibold text-slate-900">{s.title}</p>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div ref={statsRef} className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-sky-50/60 p-5 sm:p-6 text-center shadow-sm"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1F3A]">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} display={stat.display} />
              </div>
              <div className="mt-2 text-xs sm:text-sm text-slate-800 tracking-wide uppercase font-semibold">
                {stat.label}
              </div>
              {stat.sub ? (
                <div className="mt-1 text-[11px] sm:text-xs text-slate-500 font-medium">{stat.sub}</div>
              ) : null}
            </div>
          ))}
        </div>

        {!hideReadMore && (
        <div className="mt-5 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand-red hover:underline"
          >
            Read more about SARADA →
          </Link>
        </div>
        )}
      </div>
    </section>
  );
}
