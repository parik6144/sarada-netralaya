'use client';

import BookAppointmentButton from '@/components/luxury/BookAppointmentButton';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { doctors } from '@/data/doctors';

/** Full-bleed homepage surgeons section (col-12 cinematic layout) */
export default function HomeSurgeonsSection() {
  return (
    <section id="doctors" className="relative py-16 sm:py-20 bg-white overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-brand-red">Our Specialists</p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Meet Your <span className="text-brand-red">Surgeons</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Two focused specialists — cataract, glaucoma, and cornea — who explain every finding in simple English
            before they treat.
          </p>
        </div>
      </div>

      <div className="mt-12 space-y-0">
        {doctors.map((doc, index) => {
          const reverse = index % 2 === 1;
          return (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55 }}
              className={`grid lg:grid-cols-12 min-h-[480px] lg:min-h-[520px] ${
                reverse ? 'bg-[#F7FAFC]' : 'bg-white'
              }`}
            >
              <div
                className={`relative lg:col-span-5 min-h-[320px] lg:min-h-full ${
                  reverse ? 'lg:order-2' : ''
                }`}
              >
                <Image
                  src={doc.image}
                  alt={doc.name}
                  fill
                  className="object-cover object-[center_18%]"
                  sizes="(max-width:1024px) 100vw, 42vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 lg:hidden">
                  <p className="text-white text-2xl font-bold">{doc.name}</p>
                  <p className="text-white/85 text-sm mt-1">{doc.speciality}</p>
                </div>
              </div>

              <div
                className={`lg:col-span-7 flex items-center px-6 sm:px-10 lg:px-14 xl:px-16 py-10 lg:py-14 ${
                  reverse ? 'lg:order-1' : ''
                }`}
              >
                <div className="w-full max-w-xl">
                  <p
                    className="text-[11px] tracking-[0.16em] uppercase font-bold"
                    style={{ color: doc.accent }}
                  >
                    {doc.speciality}
                  </p>
                  <h3 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 hidden lg:block">
                    {doc.name}
                  </h3>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <div className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-sm">
                      <span className="text-lg font-bold text-slate-900">{doc.experience}</span>
                      <span className="block text-[11px] uppercase tracking-wide text-slate-500 mt-0.5">
                        Experience
                      </span>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-sm">
                      <span className="text-lg font-bold text-slate-900">{doc.surgeries}</span>
                      <span className="block text-[11px] uppercase tracking-wide text-slate-500 mt-0.5">
                        Surgeries
                      </span>
                    </div>
                  </div>

                  <p className="mt-6 text-sm sm:text-base text-slate-600 leading-relaxed">{doc.bio}</p>

                  <ul className="mt-5 grid sm:grid-cols-2 gap-2">
                    {doc.focus.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="mt-1 font-bold" style={{ color: doc.accent }}>
                          ✓
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <BookAppointmentButton className="inline-flex px-7 py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90">Book Consultation</BookAppointmentButton>
                    <Link
                      href="/doctors"
                      className="inline-flex px-7 py-3 rounded-full border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      Full profile →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
