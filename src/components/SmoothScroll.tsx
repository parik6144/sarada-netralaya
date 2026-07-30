'use client';

import { useCallback, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  /** Lenis runs with anchors disabled, so hash targets need a manual scroll. */
  const scrollToHash = useCallback((hash: string) => {
    const id = decodeURIComponent(hash.replace(/^#/, ''));
    if (!id) return false;

    const target = document.getElementById(id);
    if (!target) return false;

    const navHeight =
      parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue('--nav-h')
      ) || 0;

    const jump = () => {
      const top = Math.max(
        0,
        target.getBoundingClientRect().top + window.scrollY - navHeight - 24
      );
      const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
      if (lenis) {
        lenis.scrollTo(top, { duration: 0.8 });
      } else {
        window.scrollTo({ top, behavior: 'smooth' });
      }
    };

    jump();
    // Entry animations and lazy images shift the card after the first jump.
    const correction = window.setTimeout(jump, 500);
    return () => window.clearTimeout(correction);
  }, []);

  useEffect(() => {
    const onHashChange = () => scrollToHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [scrollToHash]);

  // Init Lenis once — do not destroy on every route (that blocked smooth page opens)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      anchors: false,
      autoRaf: false,
    });

    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value) {
        if (arguments.length) {
          lenis.scrollTo(value as number, { immediate: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    const handleRefresh = () => lenis.resize();
    ScrollTrigger.addEventListener('refresh', handleRefresh);
    ScrollTrigger.refresh();

    return () => {
      cancelAnimationFrame(rafId);
      ScrollTrigger.removeEventListener('refresh', handleRefresh);
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // On route change: jump to top (or to the requested hash) without remounting Lenis
  useEffect(() => {
    const hash = window.location.hash;
    const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;

    if (!hash) {
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      }
      window.scrollTo(0, 0);
    }

    // Let layout settle, then refresh ScrollTrigger for the new page
    const t = window.setTimeout(() => {
      ScrollTrigger.refresh();
      if (hash) scrollToHash(hash);
    }, 120);

    return () => window.clearTimeout(t);
  }, [pathname, scrollToHash]);

  return <>{children}</>;
}
