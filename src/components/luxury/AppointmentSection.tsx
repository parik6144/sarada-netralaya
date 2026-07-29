'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from './SectionHeader';

gsap.registerPlugin(ScrollTrigger);

const steps = ['Personal Info', 'Select Doctor', 'Pick Date', 'Confirm'];

export default function AppointmentSection({ hideHeader = false }: { hideHeader?: boolean }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [form, setForm] = useState({
    name: '', phone: '', email: '', doctor: '', date: '', time: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(headingRef.current, { y: 28 });
      gsap.to(headingRef.current, {
        y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || 'Booking failed');
      }
      setSubmitted(true);
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Something went wrong. Please call us directly.');
    }
  };

  return (
    <section ref={sectionRef} id="appointment" className="luxury-section relative section-surface">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div ref={headingRef}>
          {!hideHeader && (
          <SectionHeader
            eyebrow="Book Now"
            titleWhite="Schedule Your"
            titleAccent="Visit"
            description="Fill the form below or call +91 70910 90014 / 70910 90016 for appointments at our Baradwari centre."
            align="center"
          />
          )}
        </div>

        <div className={`${hideHeader ? 'mt-0' : 'mt-12'} grid lg:grid-cols-5 gap-6 lg:gap-8 items-start`}>
          <div className="lg:col-span-2 relative min-h-[280px] sm:min-h-[360px] lg:min-h-[520px] rounded-2xl overflow-hidden">
            <Image
              src="/images/appointment-care.png"
              alt="Compassionate patient care at SARADA"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-3">
            <div className="flex items-center justify-center gap-2 max-w-md mx-auto">
              {steps.map((s, i) => (
                <div key={s} className="flex items-center gap-2 flex-1">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all duration-500 ${
                    i <= currentStep
                      ? 'bg-brand-red text-white'
                      : 'bg-slate-50 text-slate-500'
                  }`}>
                    {i < currentStep ? '✓' : i + 1}
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`flex-1 h-[1px] transition-all duration-500 ${
                      i < currentStep ? 'bg-medical-blue' : 'bg-slate-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>

            {submitted ? (
              <div className="mt-8 glass-card rounded-3xl p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-slate-900">Appointment Booked!</h3>
                <p className="mt-3 text-slate-500">We will confirm with you shortly. Thank you!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 glass-card rounded-3xl p-8 lg:p-10">
                {currentStep === 0 && (
                  <div className="space-y-5">
                    <h3 className="text-lg font-medium text-slate-900 mb-6">Personal Information</h3>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <input className="luxury-input" placeholder="Full Name *" required
                        value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                      <input className="luxury-input" placeholder="Phone Number *" type="tel" required
                        value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                      <input className="luxury-input sm:col-span-2" placeholder="Email Address" type="email"
                        value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                    </div>
                    <div className="flex justify-end">
                      <button type="button" onClick={() => setCurrentStep(1)}
                        className="magnetic-btn px-8 py-3 rounded-full bg-brand-red text-white text-sm font-medium">
                        Next →
                      </button>
                    </div>
                  </div>
                )}

                {currentStep === 1 && (
                  <div className="space-y-5">
                    <h3 className="text-lg font-medium text-slate-900 mb-6">Select Doctor</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[{ name: 'Dr. Nitin G. Dhira', spec: 'Cataract & Glaucoma' }, { name: 'Dr. Nitish Bhardwaj', spec: 'Cornea, Cataract & Refractive' }, { name: 'Dr. Pallavi Gautam', spec: 'Anaesthesiology & Critical Care' }].map(d => (
                        <button key={d.name} type="button"
                          onClick={() => setForm({ ...form, doctor: d.name })}
                          className={`p-5 rounded-xl text-left transition-all duration-300 ${
                            form.doctor === d.name
                              ? 'glass-strong border-brand-red/40'
                              : 'glass-card border-transparent'
                          }`}>
                          <div className="text-sm font-medium text-slate-900">{d.name}</div>
                          <div className="text-xs text-slate-500 mt-1">{d.spec}</div>
                        </button>
                      ))}
                      <button type="button"
                        onClick={() => setForm({ ...form, doctor: 'Any Available' })}
                        className={`p-5 rounded-xl text-left transition-all duration-300 ${
                          form.doctor === 'Any Available'
                            ? 'glass-strong border-brand-red/40'
                            : 'glass-card border-transparent'
                        }`}>
                        <div className="text-sm font-medium text-slate-900">First Available</div>
                        <div className="text-xs text-slate-500 mt-1">Any doctor available</div>
                      </button>
                    </div>
                    <div className="flex justify-between">
                      <button type="button" onClick={() => setCurrentStep(0)} className="text-sm text-slate-500 hover:text-slate-900 transition-colors">← Back</button>
                      <button type="button" onClick={() => setCurrentStep(2)}
                        className="magnetic-btn px-8 py-3 rounded-full bg-brand-red text-white text-sm font-medium">
                        Next →
                      </button>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-5">
                    <h3 className="text-lg font-medium text-slate-900 mb-6">Pick Date & Time</h3>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <input className="luxury-input" type="date" required
                        value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
                      <select className="luxury-input" value={form.time} onChange={e => setForm({ ...form, time: e.target.value })}>
                        <option value="">Select Time</option>
                        {['10:00 AM','11:00 AM','12:00 PM','02:00 PM','03:00 PM','04:00 PM','05:00 PM','06:00 PM'].map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <textarea className="luxury-input" rows={3} placeholder="Any message for the doctor..."
                      value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                    <div className="flex justify-between">
                      <button type="button" onClick={() => setCurrentStep(1)} className="text-sm text-slate-500 hover:text-slate-900 transition-colors">← Back</button>
                      <button type="button" onClick={() => setCurrentStep(3)}
                        className="magnetic-btn px-8 py-3 rounded-full bg-brand-red text-white text-sm font-medium">
                        Review →
                      </button>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium text-slate-900 mb-6">Confirm Appointment</h3>
                    <div className="glass rounded-xl p-6 space-y-3">
                      <div className="flex justify-between"><span className="text-slate-500 text-sm">Name</span><span className="text-slate-900 text-sm">{form.name}</span></div>
                      <div className="flex justify-between"><span className="text-slate-500 text-sm">Phone</span><span className="text-slate-900 text-sm">{form.phone}</span></div>
                      <div className="flex justify-between"><span className="text-slate-500 text-sm">Doctor</span><span className="text-slate-900 text-sm">{form.doctor}</span></div>
                      <div className="flex justify-between"><span className="text-slate-500 text-sm">Date</span><span className="text-slate-900 text-sm">{form.date}</span></div>
                      <div className="flex justify-between"><span className="text-slate-500 text-sm">Time</span><span className="text-slate-900 text-sm">{form.time}</span></div>
                    </div>
                    <div className="flex justify-between">
                      <button type="button" onClick={() => setCurrentStep(2)} className="text-sm text-slate-500 hover:text-slate-900 transition-colors">← Back</button>
                      <button type="submit"
                        className="magnetic-btn px-10 py-3.5 rounded-full bg-brand-red text-white text-sm font-medium hover:shadow-[0_0_30px_rgba(0,174,239,0.4)] transition-all">
                        Confirm Booking
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 glass-card rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-medium text-slate-900">Eye Emergency?</h4>
            <p className="text-sm text-slate-500 mt-1">24x7 emergency care available. Call now.</p>
          </div>
          <a href="tel:+917091090014" className="px-8 py-3 rounded-full bg-red-600/20 border border-red-500/30 text-red-500 text-sm font-medium hover:bg-red-600/30 transition-all whitespace-nowrap">
            Emergency: +91 70910 90014
          </a>
        </div>
      </div>
    </section>
  );
}
