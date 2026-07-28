'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

type BookingModalContextValue = {
  isOpen: boolean;
  openBooking: () => void;
  closeBooking: () => void;
};

const BookingModalContext = createContext<BookingModalContextValue | null>(null);

export function BookingModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openBooking = useCallback(() => setIsOpen(true), []);
  const closeBooking = useCallback(() => setIsOpen(false), []);

  // Lock page scroll (including Lenis) while modal is open
  useEffect(() => {
    if (!isOpen) return;

    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    lenis?.stop();

    const prevHtml = document.documentElement.style.overflow;
    const prevBody = document.body.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onKey);

    return () => {
      lenis?.start();
      document.documentElement.style.overflow = prevHtml;
      document.body.style.overflow = prevBody;
      document.removeEventListener('keydown', onKey);
    };
  }, [isOpen]);

  const value = useMemo(
    () => ({ isOpen, openBooking, closeBooking }),
    [isOpen, openBooking, closeBooking]
  );

  return <BookingModalContext.Provider value={value}>{children}</BookingModalContext.Provider>;
}

export function useBookingModal() {
  const ctx = useContext(BookingModalContext);
  if (!ctx) {
    throw new Error('useBookingModal must be used within BookingModalProvider');
  }
  return ctx;
}

/** Safe hook when provider might be missing (returns no-op) */
export function useBookingModalOptional() {
  return useContext(BookingModalContext);
}
