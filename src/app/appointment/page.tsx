'use client';

import { useEffect } from 'react';
import SiteLayout from '@/components/luxury/SiteLayout';
import { useBookingModal } from '@/components/luxury/BookingModalContext';
import BookAppointmentButton from '@/components/luxury/BookAppointmentButton';
import { site } from '@/data/site';

function AppointmentBody() {
  const { openBooking } = useBookingModal();

  useEffect(() => {
    openBooking();
  }, [openBooking]);

  return (
    <section className="nav-offset min-h-[70vh] pb-16 bg-gradient-to-b from-[#F0F6FA] to-white">
      <div className="max-w-2xl mx-auto px-5 sm:px-6 text-center">
        <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-brand-red">Book online</p>
        <h1 className="mt-3 text-3xl sm:text-4xl font-bold text-[#0B1F3A]">Book your appointment</h1>
        <p className="mt-4 text-sm text-slate-600 leading-relaxed">
          The booking form opens in a popup. If it closed, tap the button below — or call {site.phones[0]}.
        </p>
        <BookAppointmentButton className="mt-8 inline-flex px-8 py-3.5 rounded-full bg-brand-red text-white text-sm font-bold hover:bg-brand-red-dark">
          Open booking form
        </BookAppointmentButton>
      </div>
    </section>
  );
}

export default function AppointmentPage() {
  return (
    <SiteLayout>
      <AppointmentBody />
    </SiteLayout>
  );
}
