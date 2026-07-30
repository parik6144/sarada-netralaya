'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { doctors } from '@/data/doctors';
import { mainNav, navTreatments } from '@/data/site';
import { useBookingModal } from '@/components/luxury/BookingModalContext';

export default function LuxuryNavbar() {
  const pathname = usePathname();
  const { openBooking } = useBookingModal();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Publish the real navbar height so page offsets never overlap the header.
  useEffect(() => {
    const el = navRef.current;
    if (!el) return;

    const publishHeight = () => {
      document.documentElement.style.setProperty('--nav-h', `${Math.round(el.offsetHeight)}px`);
    };

    publishHeight();
    const observer = new ResizeObserver(publishHeight);
    observer.observe(el);
    window.addEventListener('resize', publishHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', publishHeight);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeMenus = useCallback(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
  }, []);

  const handleDropdownEnter = useCallback((key: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(key);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 180);
  }, []);

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href));

  const linkClass = (href: string) =>
    `px-3 xl:px-3.5 py-2 text-[13px] xl:text-[14px] tracking-[0.04em] font-bold transition-colors cursor-pointer rounded-lg ${
      isActive(href)
        ? 'text-brand-red bg-red-50/80'
        : 'text-slate-700 hover:text-brand-red hover:bg-slate-50'
    }`;

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-slate-200 shadow-[0_4px_24px_rgba(15,23,42,0.06)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center gap-1 py-2 min-h-0">
          {/* Logo row */}
          {/* Side padding reserves room for the absolute mobile toggle. */}
          <div className="relative w-full flex items-center justify-center leading-none px-14 lg:px-0">
            <Link
              href="/"
              onClick={closeMenus}
              className="relative z-10 min-w-0 cursor-pointer block leading-none"
            >
              {/* Width-driven sizing keeps the aspect exact, so no letterbox gap appears. */}
              <Image
                src="/sarada-logo-nav.png"
                alt="SARADA Netralaya & Maternity"
                width={1769}
                height={499}
                className="block h-auto w-[200px] sm:w-[280px] md:w-[340px] lg:w-[440px] xl:w-[480px] max-w-full"
                priority
              />
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden absolute right-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex flex-col items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white shadow-sm"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-5 h-[2px] bg-slate-800 block origin-center"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-5 h-[2px] bg-slate-800 block"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-5 h-[2px] bg-slate-800 block origin-center"
              />
            </button>
          </div>

          {/* Desktop menu — centered under logo */}
          <div className="hidden lg:flex items-center justify-center flex-wrap gap-0.5 xl:gap-1 w-full">
            {mainNav.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.hasDropdown && handleDropdownEnter(link.hasDropdown)}
                onMouseLeave={link.hasDropdown ? handleDropdownLeave : undefined}
              >
                <Link href={link.href} onClick={closeMenus} className={linkClass(link.href)}>
                  {link.label}
                </Link>

                {link.hasDropdown === 'treatments' && activeDropdown === 'treatments' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] z-[110]">
                    <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xl">
                      <div className="grid grid-cols-2 gap-1">
                        {navTreatments.map((t) => (
                          <Link
                            key={t.slug}
                            href={`/treatments/${t.slug}`}
                            onClick={closeMenus}
                            className="text-left group flex items-start gap-3 p-3 rounded-xl hover:bg-sky-50 transition-colors cursor-pointer"
                          >
                            <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0 text-brand-red text-sm">
                              •
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-slate-800 group-hover:text-brand-red">
                                {t.name}
                              </div>
                              <div className="text-xs text-slate-500 mt-0.5">{t.desc}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <Link
                        href="/treatments"
                        onClick={closeMenus}
                        className="mt-2 block w-full text-center text-sm font-bold text-brand-red hover:underline cursor-pointer py-2"
                      >
                        View all treatments →
                      </Link>
                    </div>
                  </div>
                )}

                {link.hasDropdown === 'doctors' && activeDropdown === 'doctors' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[300px] z-[110]">
                    <div className="bg-white rounded-2xl p-3 border border-slate-200 shadow-xl">
                      {doctors.map((d) => (
                        <Link
                          key={d.id}
                          href={`/doctors#doctor-${d.id}`}
                          onClick={closeMenus}
                          className="w-full text-left block p-3 rounded-xl hover:bg-sky-50 transition-colors cursor-pointer"
                        >
                          <div className="text-sm font-semibold text-slate-800">{d.name}</div>
                          <div className="text-xs text-brand-blue mt-0.5">{d.speciality}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={() => {
                setActiveDropdown(null);
                openBooking();
              }}
              className="ml-2 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-brand-red text-white text-[13px] font-bold tracking-wide hover:bg-brand-red-dark transition-colors shadow-sm cursor-pointer"
            >
              Book Appointment
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="nav-offset fixed inset-0 z-[95] bg-white px-5 pb-10 overflow-y-auto lg:hidden"
          >
            <div className="space-y-1 max-w-lg mx-auto">
              {mainNav.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    onClick={closeMenus}
                    className="w-full text-left block py-4 text-lg font-bold text-slate-800 hover:text-brand-red transition-colors border-b border-slate-100 cursor-pointer"
                  >
                    {link.label}
                  </Link>
                  {link.hasDropdown === 'treatments' && (
                    <div className="pl-3 pb-2">
                      {navTreatments.map((t) => (
                        <Link
                          key={t.slug}
                          href={`/treatments/${t.slug}`}
                          onClick={closeMenus}
                          className="w-full text-left block py-2.5 text-sm font-medium text-slate-500 hover:text-brand-red cursor-pointer"
                        >
                          {t.name}
                        </Link>
                      ))}
                    </div>
                  )}
                  {link.hasDropdown === 'doctors' && (
                    <div className="pl-3 pb-2">
                      {doctors.map((d) => (
                        <Link
                          key={d.id}
                          href={`/doctors#doctor-${d.id}`}
                          onClick={closeMenus}
                          className="w-full text-left block py-2.5 text-sm font-medium text-slate-500 hover:text-brand-red cursor-pointer"
                        >
                          {d.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  openBooking();
                }}
                className="mt-6 block w-full text-center px-6 py-4 rounded-full bg-brand-red text-white font-bold cursor-pointer"
              >
                Book Appointment
              </button>
              <Link
                href="/faq"
                onClick={closeMenus}
                className="mt-3 block w-full text-center px-6 py-4 rounded-full border border-slate-200 text-slate-700 font-semibold cursor-pointer"
              >
                FAQ
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
