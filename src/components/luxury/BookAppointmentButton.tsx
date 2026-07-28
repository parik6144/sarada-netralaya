'use client';

import { useBookingModal } from '@/components/luxury/BookingModalContext';

type Props = {
  children?: React.ReactNode;
  className?: string;
};

/** Opens the global booking popup — use anywhere instead of /appointment links */
export default function BookAppointmentButton({
  children = 'Book Appointment',
  className = '',
}: Props) {
  const { openBooking } = useBookingModal();

  return (
    <button type="button" onClick={openBooking} className={className}>
      {children}
    </button>
  );
}
