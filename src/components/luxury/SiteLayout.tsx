'use client';

import SmoothScroll from '@/components/SmoothScroll';
import LuxuryNavbar from '@/components/luxury/LuxuryNavbar';
import LuxuryFooter from '@/components/luxury/LuxuryFooter';
import FloatingCallButton from '@/components/luxury/FloatingCallButton';
import BookingModal from '@/components/luxury/BookingModal';
import { BookingModalProvider } from '@/components/luxury/BookingModalContext';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <BookingModalProvider>
      <SmoothScroll>
        <LuxuryNavbar />
        <main>{children}</main>
        <LuxuryFooter />
        <FloatingCallButton />
        <BookingModal />
      </SmoothScroll>
    </BookingModalProvider>
  );
}
