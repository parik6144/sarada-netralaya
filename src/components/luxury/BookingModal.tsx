'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { site } from '@/data/site';
import AppointmentBookingForm from '@/components/luxury/AppointmentBookingForm';
import { useBookingModal } from '@/components/luxury/BookingModalContext';

/** Global booking popup — same modal everywhere */
export default function BookingModal() {
  const { isOpen, closeBooking } = useBookingModal();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[120] flex items-end sm:items-center justify-center p-0 sm:p-6"
        >
          <button
            type="button"
            className="absolute inset-0 bg-[#0B1F3A]/55 backdrop-blur-[2px]"
            aria-label="Close booking"
            onClick={closeBooking}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Book appointment"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="relative z-10 flex w-full max-w-4xl max-h-[min(92vh,860px)] flex-col overflow-hidden rounded-t-[1.75rem] sm:rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_30px_100px_rgba(11,31,58,0.35)]"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
          >
            <div className="grid min-h-0 w-full flex-1 md:grid-cols-[260px_minmax(0,1fr)] overflow-hidden">
              <div className="relative hidden min-h-0 overflow-hidden bg-[#0B1F3A] text-white md:block">
                <div className="absolute inset-0 opacity-35">
                  <Image
                    src="/images/appointment-care.png"
                    alt=""
                    fill
                    className="object-cover"
                    sizes="260px"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A]/65 via-[#0B1F3A]/88 to-[#0B1F3A]" />
                <div className="relative z-10 flex h-full min-h-full flex-col p-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F5D565]">
                    Quick booking
                  </p>
                  <h3 className="mt-3 text-2xl font-bold leading-snug">Schedule your eye consultation</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    Fill the form — you will see a clear success or failure message after submit. Our desk confirms by
                    phone.
                  </p>
                  <div className="mt-auto space-y-4 pt-10 text-sm text-white/85">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-[#F5D565]">Call</p>
                      <p className="mt-1 text-base font-semibold text-white">{site.phones[0]}</p>
                      <p className="text-base font-semibold text-white">{site.phones[1]}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-[#F5D565]">Hours</p>
                      <p className="mt-1">{site.hours}</p>
                    </div>
                    <p className="text-xs italic leading-snug text-white/55">{site.motto}</p>
                  </div>
                </div>
              </div>

              {/* Scrollable form panel — page scroll is locked */}
              <div className="box-border flex min-h-0 min-w-0 w-full flex-col overflow-y-auto overscroll-contain p-5 sm:p-7">
                <div className="mb-5 flex w-full min-w-0 items-start justify-between gap-3 sticky top-0 z-10 bg-white pb-2">
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-red">
                      SARADA Netralaya
                    </p>
                    <h3 className="text-xl font-bold text-[#0B1F3A]">Book appointment</h3>
                  </div>
                  <button
                    type="button"
                    onClick={closeBooking}
                    className="flex-shrink-0 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                  >
                    Close
                  </button>
                </div>
                <div className="w-full min-w-0 flex-1 pb-4">
                  <AppointmentBookingForm />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
