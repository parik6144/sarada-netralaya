'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

type TestimonialsModalContextValue = {
  isOpen: boolean;
  startIndex: number;
  openTestimonials: (startIndex?: number) => void;
  closeTestimonials: () => void;
};

const TestimonialsModalContext = createContext<TestimonialsModalContextValue | null>(null);

export function TestimonialsModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const openTestimonials = useCallback((index = 0) => {
    setStartIndex(Math.max(0, index));
    setIsOpen(true);
  }, []);

  const closeTestimonials = useCallback(() => setIsOpen(false), []);

  // Lock page scroll (including Lenis) while modal is open
  useEffect(() => {
    if (!isOpen) return;

    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    lenis?.stop();

    const prevHtml = document.documentElement.style.overflow;
    const prevBody = document.body.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    return () => {
      lenis?.start();
      document.documentElement.style.overflow = prevHtml;
      document.body.style.overflow = prevBody;
    };
  }, [isOpen]);

  const value = useMemo(
    () => ({ isOpen, startIndex, openTestimonials, closeTestimonials }),
    [isOpen, startIndex, openTestimonials, closeTestimonials]
  );

  return (
    <TestimonialsModalContext.Provider value={value}>{children}</TestimonialsModalContext.Provider>
  );
}

export function useTestimonialsModal() {
  const ctx = useContext(TestimonialsModalContext);
  if (!ctx) {
    throw new Error('useTestimonialsModal must be used within TestimonialsModalProvider');
  }
  return ctx;
}
