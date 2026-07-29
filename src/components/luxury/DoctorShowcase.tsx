'use client';

import BookAppointmentButton from '@/components/luxury/BookAppointmentButton';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from './SectionHeader';
import { doctors } from '@/data/doctors';

gsap.registerPlugin(ScrollTrigger);

export default function DoctorShowcase({
  hideHeader = false,
  detailed = false,
}: {
  hideHeader?: boolean;
  detailed?: boolean;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(headingRef.current, { y: 28 });
      gsap.to(headingRef.current, {
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 82%' },
      });

      const cards = sectionRef.current?.querySelectorAll('.doctor-card');
      if (cards?.length) {
        const list = Array.from(cards);
        gsap.set(list, { y: 28 });
        gsap.to(list, {
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: list[0], start: 'top 85%' },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="doctors" className="luxury-section relative section-surface">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div ref={headingRef}>
          {!hideHeader && (
            <SectionHeader
              eyebrow="Our Specialists"
              titleWhite="Meet Your"
              titleAccent="Specialists"
              accent="gold"
              description="Experienced specialists who diagnose carefully, explain clearly, and treat with precision — eye surgery and safe anaesthesia care."
            />
          )}
        </div>

        <div className={`${hideHeader ? 'mt-0' : 'mt-12'} space-y-8`}>
          {doctors.map((doc, index) => (
            <article
              key={doc.id}
              className={`doctor-card overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)] ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              } flex flex-col lg:flex-row`}
            >
              {/* Business portrait panel */}
              <div className="relative lg:w-[300px] xl:w-[320px] flex-shrink-0 bg-gradient-to-b from-slate-100 to-slate-50 flex items-center justify-center py-6 lg:py-8 px-5">
                <div className="relative w-full max-w-[260px] aspect-[3/4] mx-auto overflow-hidden rounded-xl ring-1 ring-slate-200/80 shadow-sm bg-slate-100">
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    fill
                    sizes="260px"
                    className="object-cover object-[center_15%]"
                    priority={index === 0}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/35 to-transparent px-4 pb-4 pt-14">
                    <p className="text-white text-base font-semibold leading-tight">
                      {doc.name}
                      {doc.credentials ? (
                        <span className="block text-white/90 text-xs font-medium mt-0.5 normal-case tracking-normal">
                          {doc.credentials}
                        </span>
                      ) : null}
                    </p>
                    <p className="text-white/85 text-[11px] mt-1 tracking-wide uppercase">{doc.speciality}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 sm:p-8 lg:p-10">
                {doc.title ? (
                  <p className="text-sm font-semibold text-slate-800 mb-3">{doc.title}</p>
                ) : null}
                <div className="flex flex-wrap gap-3 text-sm">
                  <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                    <span className="font-semibold text-slate-900">{doc.experience}</span>
                    <span className="text-slate-500 ml-1.5">Experience</span>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                    <span className="font-semibold text-slate-900">{doc.surgeries}</span>
                    <span className="text-slate-500 ml-1.5">Surgeries</span>
                  </div>
                </div>

                <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed whitespace-pre-line">
                  {doc.bio}
                </p>

                {detailed && (
                  <>
                    <div className="mt-6 grid sm:grid-cols-2 gap-5">
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-red mb-2">
                          Clinical focus
                        </h4>
                        <ul className="space-y-1.5">
                          {doc.focus.map((item) => (
                            <li key={item} className="text-sm text-slate-600 flex items-start gap-2">
                              <span
                                className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0"
                                style={{ background: doc.accent }}
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-blue mb-2">
                          Conditions treated
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {doc.conditions.map((c) => (
                            <span
                              key={c}
                              className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-700"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50/80 p-5">
                      <h4 className="text-sm font-semibold text-slate-900">How he explains care</h4>
                      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{doc.approach}</p>
                      <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                        <span className="font-semibold text-slate-900">Training: </span>
                        {doc.education}
                      </p>
                    </div>

                    <ul className="mt-5 grid sm:grid-cols-2 gap-2">
                      {doc.highlights.map((h) => (
                        <li key={h} className="text-sm text-slate-700 flex items-start gap-2">
                          <span className="text-brand-red font-bold">✓</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {!detailed && (
                  <ul className="mt-5 space-y-1.5">
                    {doc.focus.slice(0, 3).map((item) => (
                      <li key={item} className="text-sm text-slate-600 flex items-start gap-2">
                        <span
                          className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0"
                          style={{ background: doc.accent }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                <BookAppointmentButton className="mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-colors">Book Consultation →</BookAppointmentButton>
              </div>
            </article>
          ))}
        </div>

        {!hideHeader && !detailed && (
          <div className="mt-8 text-center">
            <Link href="/doctors" className="text-sm font-semibold text-brand-red hover:underline">
              Meet our full specialist team →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
