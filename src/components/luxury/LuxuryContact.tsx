'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from './SectionHeader';
import { site } from '@/data/site';

gsap.registerPlugin(ScrollTrigger);

const contactCards = [
  { icon: '◉', label: 'Address', value: site.address },
  { icon: '◎', label: 'Phone', value: site.phones.join(' / ') },
  { icon: '◐', label: 'Email', value: site.email },
  { icon: '◑', label: 'Hours', value: `${site.hours} | ${site.emergency}` },
];

export default function LuxuryContact({ hideHeader = false }: { hideHeader?: boolean }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 60, opacity: 0, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setSent(true);
    } catch { /* silent */ }
  };

  return (
    <section ref={sectionRef} id="contact" className="luxury-section relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div ref={headingRef}>
          {!hideHeader && (
          <SectionHeader
            eyebrow="Contact"
            titleWhite="Get in"
            titleAccent="Touch"
            description="Visit our Advanced Eye Care Center in Baradwari, Sakchi — or call us for appointments and emergencies."
          />
          )}
        </div>

        <div className={`${hideHeader ? 'mt-0' : 'mt-16'} grid lg:grid-cols-2 gap-12`}>
          {/* Info Cards */}
          <div className="space-y-4">
            {contactCards.map((c) => (
              <div key={c.label} className="glass-card rounded-xl p-5 flex items-start gap-4">
                <span className="text-2xl text-brand-red mt-0.5">{c.icon}</span>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">{c.label}</div>
                  <div className="text-sm text-slate-600">{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="glass-card rounded-2xl p-8">
            {sent ? (
              <div className="text-center py-8">
                <div className="text-3xl mb-4">✓</div>
                <h3 className="text-xl font-semibold text-slate-900">Message Sent!</h3>
                <p className="text-sm text-slate-500 mt-2">We will reply shortly. Thank you.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input className="luxury-input" placeholder="Your Name *" required
                  value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                <input className="luxury-input" placeholder="Phone Number *" type="tel" required
                  value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                <textarea className="luxury-input" rows={4} placeholder="Your Message..." required
                  value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                <button type="submit"
                  className="magnetic-btn w-full py-3.5 rounded-full bg-brand-red text-white text-sm font-medium hover:shadow-[0_0_30px_rgba(0,174,239,0.3)] transition-all">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
