'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from './SectionHeader';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Rajesh Kumar',
    location: 'Sakchi, Jamshedpur',
    rating: 5,
    text: 'My cataract surgery with Dr. Nitin was so smooth that I barely felt anything. The next day my vision was clear. Best decision of my life.',
    treatment: 'Cataract Surgery',
  },
  {
    name: 'Priya Sharma',
    location: 'Ranchi',
    rating: 5,
    text: 'After LASIK I stopped wearing glasses completely. I had depended on them for 10 years — everything is clear now. Thank you, SARADA team.',
    treatment: 'LASIK',
  },
  {
    name: 'Mohammed Aslam',
    location: 'Bokaro',
    rating: 5,
    text: 'My mother had retina surgery here. We were nervous, but the doctor explained every step. Her vision is much better now.',
    treatment: 'Retina Surgery',
  },
  {
    name: 'Ananya Singh',
    location: 'Jamshedpur',
    rating: 5,
    text: 'I struggled with severe dry eye. IPL therapy made a real difference. I can work on a computer again without discomfort.',
    treatment: 'Dry Eye Treatment',
  },
  {
    name: 'Suresh Verma',
    location: 'Hazaribagh',
    rating: 5,
    text: 'Glaucoma was detected early. Regular monitoring and treatment helped protect my remaining vision. Grateful to the team.',
    treatment: 'Glaucoma Management',
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(headingRef.current, { y: 28 });
      gsap.to(headingRef.current, {
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 80%' },
      });
      const cards = sectionRef.current?.querySelectorAll('.testimonial-card');
      if (cards?.length) {
        const list = Array.from(cards);
        gsap.set(list, { y: 28 });
        gsap.to(list, {
          y: 0,
          stagger: 0.1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: { trigger: list[0], start: 'top 85%' },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="luxury-section relative section-surface">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div ref={headingRef}>
          <SectionHeader
            eyebrow="Patient Stories"
            titleWhite="Trusted by Families"
            titleAccent="Across Jharkhand"
            accent="gold"
            description="Real experiences from patients who came to us with vision problems — and left with clarity and confidence."
          />
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.slice(0, 3).map((t) => (
            <div key={t.name} className="testimonial-card glass-card rounded-2xl p-7">
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-sm text-slate-600 leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>

              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sky-100 text-medical-blue flex items-center justify-center font-semibold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500">
                    {t.location} · {t.treatment}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
