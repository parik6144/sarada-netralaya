'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from './SectionHeader';

gsap.registerPlugin(ScrollTrigger);

const tech = [
  { name: 'Zeiss Cirrus HD-OCT', category: 'Diagnostic', desc: 'High-definition optical coherence tomography for ultra-detailed retinal imaging and glaucoma analysis.', color: '#C9A84C' },
  { name: 'Refractive Surgery', category: 'ICL · IPCL', desc: 'Implantable lens counselling and planning for ICL and IPCL — after a full suitability workup.', color: '#4FA3D1' },
];

export default function TechSection({ hideHeader = false }: { hideHeader?: boolean }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(headingRef.current, { y: 28 });
      gsap.to(headingRef.current, {
        y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 80%' },
      });
      const items = sectionRef.current?.querySelectorAll('.tech-item');
      if (items?.length) {
        const list = Array.from(items);
        gsap.set(list, { y: 28 });
        gsap.to(list, {
          y: 0, stagger: 0.12, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: list[0], start: 'top 85%' },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="technology" className="luxury-section relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div ref={headingRef}>
          {!hideHeader && (
          <SectionHeader
            eyebrow="Technology"
            titleWhite="Powered by"
            titleAccent="Precision"
            description="World-class diagnostic and surgical equipment — so cataract, cornea, glaucoma, and laser care are safer, faster, and easier to understand for every patient."
            align="center"
          />
          )}
        </div>

        {!hideHeader && (
        <p className="mt-6 text-sm text-slate-600 text-center max-w-3xl mx-auto leading-relaxed">
          Technology alone is not enough. We use each machine to show you what is happening in your eye —
          pressure maps, lens measurements, retinal scans — then match treatment to those findings.
        </p>
        )}

        <div className={`${hideHeader ? 'mt-0' : 'mt-12'} relative rounded-2xl overflow-hidden min-h-[220px] sm:min-h-[300px]`}>
          <Image
            src="/images/tech-surgery.png"
            alt="Advanced ophthalmic surgical technology"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          <p className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 text-white text-sm sm:text-base font-medium">
            Surgical precision powered by world-class equipment
          </p>
        </div>

        <div className="mt-8 space-y-4 sm:space-y-5">
          {tech.map((t, i) => (
            <div
              key={t.name}
              className="tech-item group glass-card rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row lg:items-center gap-6"
            >
              <div className="lg:w-48 flex-shrink-0">
                <div className="text-5xl font-bold text-slate-200 group-hover:text-slate-300 transition-colors duration-500">
                  0{i + 1}
                </div>
                <div className="text-xs tracking-wider uppercase mt-1" style={{ color: t.color + '80' }}>
                  {t.category}
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 group-hover:text-medical-blue transition-colors">
                  {t.name}
                </h3>
                <p className="mt-3 text-sm text-slate-500 leading-relaxed max-w-xl">
                  {t.desc}
                </p>
              </div>

              <div
                className="hidden lg:block w-1 h-16 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                style={{ background: 'linear-gradient(to bottom, ' + t.color + ', transparent)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
