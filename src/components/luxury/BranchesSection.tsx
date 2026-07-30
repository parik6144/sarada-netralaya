'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { site } from '@/data/site';
import BookAppointmentButton from '@/components/luxury/BookAppointmentButton';

/** All three centres keep identical OPD hours, so the timing is stated once up front. */
const sharedTiming = site.branches[0];

export default function BranchesSection() {
  return (
    <section
      id="branches"
      className="relative scroll-mt-[var(--nav-h,80px)] overflow-hidden bg-[#0B1F3A] py-16 sm:py-20 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(79,163,209,0.18),_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(245,213,101,0.12),_transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#F5D565]">Our Centres</p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Three centres. <span className="text-[#F5D565]">One standard of care.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/75 leading-relaxed">
            Jamshedpur, Ghatshila and Chandil — same doctors, same care quality, and the same clear explanations,
            now closer to your home.
          </p>
        </div>

        {/* Timing applies to every centre, so it is highlighted once */}
        <div className="mt-8 flex justify-center">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 rounded-2xl border border-white/15 bg-white/10 px-6 py-4 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5D565] text-lg text-[#0B1F3A]" aria-hidden>
                🕒
              </span>
              <div className="text-center sm:text-left">
                <p className="text-[10px] tracking-[0.16em] uppercase font-semibold text-[#F5D565]">
                  All centres open
                </p>
                <p className="text-sm sm:text-base font-bold">
                  {sharedTiming.days} · {sharedTiming.timing}
                </p>
              </div>
            </div>
            <span className="hidden sm:block h-8 w-px bg-white/20" />
            <p className="text-xs sm:text-sm text-white/70">
              {sharedTiming.closed} · {site.emergency}
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {site.branches.map((branch, index) => (
            <motion.article
              key={branch.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/12 bg-white/[0.06] shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-colors hover:border-[#F5D565]/50"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-white">
                <Image
                  src={branch.image}
                  alt={`SARADA Netralaya ${branch.name} centre`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/70 to-transparent" />

                <span className="absolute left-4 top-4 rounded-full bg-brand-red px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-md">
                  {branch.badge}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="text-2xl font-bold leading-tight text-white">{branch.name}</h3>
                  <p className="mt-0.5 text-xs text-white/75">{branch.area}</p>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="text-sm leading-relaxed text-white/70">{branch.note}</p>

                <div className="mt-5 space-y-3 border-t border-white/10 pt-5 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-[#F5D565]" aria-hidden>
                      📍
                    </span>
                    <p className="leading-relaxed text-white/80">{branch.address}</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-[#F5D565]" aria-hidden>
                      🕒
                    </span>
                    <p className="text-white/80">
                      <span className="font-semibold text-white">{branch.days}</span>
                      <span className="block">
                        {branch.timing} · {branch.closed}
                      </span>
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-[#F5D565]" aria-hidden>
                      📞
                    </span>
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      {branch.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone.replace(/\s/g, '')}`}
                          className="font-semibold text-white transition-colors hover:text-[#F5D565]"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-auto flex flex-wrap gap-2.5 pt-6">
                  <a
                    href={`tel:${branch.phones[0].replace(/\s/g, '')}`}
                    className="inline-flex flex-1 justify-center rounded-full bg-brand-red px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-brand-red-dark"
                  >
                    Call centre
                  </a>
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 justify-center rounded-full border border-white/25 px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-white/10"
                  >
                    Directions →
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-white/70">
            Not sure which centre to visit? Book online and our team will guide you to the nearest one.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <BookAppointmentButton className="inline-flex rounded-full bg-[#F5D565] px-7 py-3.5 text-sm font-bold text-[#0B1F3A] transition-colors hover:bg-yellow-300">
              Book Appointment
            </BookAppointmentButton>
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Contact & map →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
