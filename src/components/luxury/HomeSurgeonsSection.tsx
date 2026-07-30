'use client';

import BookAppointmentButton from '@/components/luxury/BookAppointmentButton';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { doctors } from '@/data/doctors';

/** Homepage specialists — photo flush to card top, contained inside borders */
export default function HomeSurgeonsSection() {
  return (
    <section id="doctors" className="relative py-16 sm:py-20 bg-white overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Our <span className="text-brand-red">Specialists</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Eye doctors, a gynaecologist, and an anaesthesiologist — here to check your eyes, guide women’s health,
            and keep surgery safe. We explain everything in clear, simple words.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {doctors.map((doc, index) => {
            const reverse = index % 2 === 1;
            return (
              <motion.article
                key={doc.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5 }}
                className={`overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_8px_28px_rgba(15,23,42,0.05)] ${
                  reverse ? 'bg-[#F8FBFD]' : ''
                }`}
              >
                <div
                  className={`flex flex-col lg:flex-row items-start ${
                    reverse ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Fixed 3:4 frame flush with the card's top edge — never stretched */}
                  <div
                    className={`relative w-[170px] sm:w-[190px] lg:w-[210px] xl:w-[220px] flex-shrink-0 self-start aspect-[3/4] overflow-hidden bg-slate-100 mx-auto lg:mx-0 ${
                      reverse ? 'lg:rounded-tr-2xl' : 'lg:rounded-tl-2xl'
                    }`}
                  >
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width:640px) 170px, (max-width:1024px) 190px, 220px"
                      priority={index === 0}
                    />
                  </div>

                  <div className="flex-1 w-full min-w-0 text-center lg:text-left p-5 sm:p-7 lg:p-10">
                    <p
                      className="text-[11px] tracking-[0.16em] uppercase font-bold"
                      style={{ color: doc.accent }}
                    >
                      {doc.speciality}
                    </p>
                    <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">
                      {doc.name}
                      {doc.credentials ? (
                        <span className="block sm:inline text-lg sm:text-xl font-semibold text-slate-600 sm:ml-2">
                          {doc.credentials}
                        </span>
                      ) : null}
                    </h3>
                    {doc.title && doc.title !== doc.speciality ? (
                      <p className="mt-1.5 text-sm font-medium text-slate-700">{doc.title}</p>
                    ) : null}

                    <div className="mt-4 flex flex-wrap gap-2.5 justify-center lg:justify-start">
                      <div className="rounded-lg border border-slate-200 bg-white px-3.5 py-2 shadow-sm">
                        <span className="text-base font-bold text-slate-900">{doc.experience}</span>
                        <span className="block text-[10px] uppercase tracking-wide text-slate-500 mt-0.5">
                          Experience
                        </span>
                      </div>
                      <div className="rounded-lg border border-slate-200 bg-white px-3.5 py-2 shadow-sm">
                        <span className="text-base font-bold text-slate-900">{doc.surgeries}</span>
                        <span className="block text-[10px] uppercase tracking-wide text-slate-500 mt-0.5">
                          Surgeries
                        </span>
                      </div>
                    </div>

                    <p className="mt-5 text-sm sm:text-[15px] text-slate-600 leading-relaxed line-clamp-5 lg:line-clamp-6">
                      {doc.bio.split('\n\n')[0]}
                    </p>

                    <ul className="mt-5 grid sm:grid-cols-2 gap-2 text-left max-w-xl mx-auto lg:mx-0">
                      {doc.focus.slice(0, 4).map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                          <span className="mt-0.5 font-bold" style={{ color: doc.accent }}>
                            ✓
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 flex flex-wrap gap-3 justify-center lg:justify-start">
                      <BookAppointmentButton
                        className="inline-flex px-6 py-2.5 rounded-full text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
                        style={{ backgroundColor: doc.accent }}
                      >
                        Book Consultation
                      </BookAppointmentButton>
                      <Link
                        href={`/doctors#doctor-${doc.id}`}
                        className="inline-flex px-6 py-2.5 rounded-full border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                      >
                        Full profile →
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
