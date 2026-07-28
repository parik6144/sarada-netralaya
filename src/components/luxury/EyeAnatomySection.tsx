'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from './SectionHeader';

gsap.registerPlugin(ScrollTrigger);

const parts = [
  {
    name: 'Cornea',
    color: '#0284C7',
    desc: 'Clear front window of the eye. It bends light so images focus correctly.',
    related: 'Infections, keratoconus, and scarring are treated by our cornea specialist.',
  },
  {
    name: 'Iris',
    color: '#0096D6',
    desc: 'The coloured part of the eye. It controls pupil size and how much light enters.',
    related: 'Inflammation here can cause pain and light sensitivity.',
  },
  {
    name: 'Lens',
    color: '#38BDF8',
    desc: 'Focuses light onto the retina. When it clouds, we call it a cataract.',
    related: 'High-end cataract surgery replaces this cloudy lens with a clear IOL.',
  },
  {
    name: 'Retina',
    color: '#EF4444',
    desc: 'Light-sensitive layer that captures images and sends signals to the brain.',
    related: 'Diabetes and detachment need urgent retina imaging and care.',
  },
  {
    name: 'Optic Nerve',
    color: '#F59E0B',
    desc: 'Carries visual signals to the brain. Glaucoma damages this nerve over time.',
    related: 'Pressure checks protect this nerve before vision is permanently lost.',
  },
  {
    name: 'Sclera',
    color: '#94A3B8',
    desc: 'The white outer coat that protects and shapes the eye.',
    related: 'It anchors eye muscles and keeps the globe stable.',
  },
];

export default function EyeAnatomySection({ hideHeader = false }: { hideHeader?: boolean }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(headingRef.current, { y: 28 });
      gsap.to(headingRef.current, {
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 82%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="anatomy" className="luxury-section relative section-surface">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div ref={headingRef}>
          {!hideHeader && (
          <SectionHeader
            eyebrow="Eye Anatomy"
            titleWhite="Understand the"
            titleAccent="Human Eye"
            description="A simple map of your eye — so you can connect symptoms to the right structure, understand disease location, and know why each treatment works."
          />
          )}
        </div>

        <div className={`${hideHeader ? 'mt-0' : 'mt-8'} rounded-2xl border border-slate-200 bg-white px-5 py-4 sm:px-6`}>
          <p className="text-sm text-slate-600 leading-relaxed">
            <span className="font-semibold text-slate-900">How to use this map: </span>
            Foggy vision often points to the lens (cataract). Distorted or infected front surface points to the cornea.
            Tunnel vision or silent pressure damage points to the optic nerve (glaucoma). Sudden floaters or a curtain over vision point to the retina.
          </p>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div className="relative rounded-2xl overflow-hidden min-h-[320px] sm:min-h-[400px]">
            <Image
              src="/images/anatomy-eye.png"
              alt="Human eye anatomy"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-3">
            {parts.map((part) => (
              <div key={part.name} className="glass-card rounded-xl p-4 sm:p-5 flex items-start gap-4">
                <div
                  className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0"
                  style={{ background: part.color }}
                />
                <div>
                  <h4 className="text-base font-semibold text-slate-900">{part.name}</h4>
                  <p className="text-sm text-slate-500 mt-1">{part.desc}</p>
                  <p className="text-sm text-slate-700 mt-1.5">{part.related}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
