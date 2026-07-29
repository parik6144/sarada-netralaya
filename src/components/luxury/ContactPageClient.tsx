'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import SiteLayout from '@/components/luxury/SiteLayout';
import ExploreMore from '@/components/luxury/ExploreMore';
import CashlessFacilityBadge from '@/components/luxury/CashlessFacilityBadge';
import { site } from '@/data/site';

const info = [
  {
    label: 'Visit us',
    value: site.address,
    hint: 'Near HDFC Bank, New Baradwari, Sakchi',
    href: 'https://maps.google.com/?q=Swastik+Ambika+Tower+Baradwari+Jamshedpur',
    icon: '📍',
  },
  {
    label: 'Call',
    value: site.phones.join(' / '),
    hint: 'Appointments & emergencies',
    href: `tel:${site.phones[0].replace(/\s/g, '')}`,
    icon: '📞',
  },
  {
    label: 'Email',
    value: site.email,
    hint: 'We reply during working hours',
    href: `mailto:${site.email}`,
    icon: '✉️',
  },
  {
    label: 'Hours',
    value: site.hours,
    hint: site.emergency,
    icon: '🕒',
  },
];

export default function ContactPageClient() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [mailSent, setMailSent] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      setStatus('error');
      setErrorMsg('Please fill name, phone, and message.');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Failed to send message');

      setMailSent(data.mailSent !== false);
      setStatus('success');
      setForm({ name: '', phone: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Could not send. Please call us.');
    }
  };

  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-[#0B1F3A] text-white pt-[88px] sm:pt-[104px]">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/hospital-building.png"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/92 to-[#0B1F3A]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(245,213,101,0.15),_transparent_45%)]" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 py-12 sm:py-16 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <nav className="flex flex-wrap items-center gap-2 text-xs text-white/60 mb-6">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span>/</span>
              <span className="text-white/90">Contact</span>
            </nav>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] tracking-[0.14em] uppercase font-semibold text-[#F5D565] mb-4">
              Advanced Eye Care Center · Jamshedpur
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Talk to us. <span className="text-[#F5D565]">We listen.</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base text-white/80 max-w-xl leading-relaxed">
              Visit SARADA Netralaya at Swastik Ambika Tower, New Baradwari, Sakchi — or message us below. Every enquiry
              reaches our team by email.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${site.phones[0].replace(/\s/g, '')}`}
                className="inline-flex justify-center px-7 py-3.5 rounded-full bg-[#F5D565] text-[#0B1F3A] text-sm font-bold hover:bg-yellow-300 transition-colors"
              >
                Call {site.phones[0]}
              </a>
              <a
                href={`tel:${site.phones[1].replace(/\s/g, '')}`}
                className="inline-flex justify-center px-7 py-3.5 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors"
              >
                Call {site.phones[1]}
              </a>
            </div>
            <p className="mt-5 text-xs text-white/55 italic">{site.motto}</p>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <CashlessFacilityBadge href="/insurance" className="shadow-[0_20px_60px_rgba(0,0,0,0.35)]" />
          </div>
        </div>
      </section>

      {/* Info cards */}
      <section className="py-10 sm:py-12 -mt-2 relative z-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {info.map((c, i) => {
              const inner = (
                <>
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] tracking-[0.14em] uppercase font-semibold text-brand-red">{c.label}</p>
                    <span className="text-base opacity-70" aria-hidden>
                      {c.icon}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-slate-900 leading-snug">{c.value}</p>
                  <p className="mt-1 text-xs text-slate-500">{c.hint}</p>
                </>
              );
              const cls =
                'rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-sky-200 hover:shadow-md transition-all h-full block';
              return c.href ? (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={cls}
                >
                  {inner}
                </motion.a>
              ) : (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={cls}
                >
                  {inner}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Smart form + map */}
      <section className="pb-16 bg-gradient-to-b from-[#F4F8FB] to-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-8 sm:py-10">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:p-8 shadow-sm"
            >
              <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-brand-blue">Send a message</p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0B1F3A]">We are here to help</h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Share your details below. You will see a clear success or failure response after submit — and our team
                gets an email instantly.
              </p>

              {status === 'success' ? (
                <div className="mt-8 text-center py-10 rounded-2xl border border-emerald-100 bg-emerald-50/50">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl text-emerald-600 ring-8 ring-emerald-50">
                    ✓
                  </div>
                  <p className="mt-5 text-[11px] tracking-[0.2em] uppercase font-semibold text-emerald-700">Success</p>
                  <h3 className="mt-2 text-xl font-bold text-slate-900">Message sent</h3>
                  <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
                    Thank you. We will reply shortly on your phone or email. If you shared an email, a
                    confirmation mail is also on its way.
                  </p>
                  {mailSent ? (
                    <p className="mt-3 text-xs font-semibold text-emerald-700">
                      Hospital notified · confirmation email sent when email was provided
                    </p>
                  ) : (
                    <p className="mt-3 text-xs font-semibold text-amber-700">
                      Message saved — email notify pending
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-6 inline-flex rounded-full bg-brand-red px-6 py-2.5 text-sm font-bold text-white"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                        Your name *
                      </label>
                      <input
                        className="luxury-input mt-1.5"
                        placeholder="Full name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                        Phone *
                      </label>
                      <input
                        className="luxury-input mt-1.5"
                        placeholder="10-digit mobile"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                        Email
                      </label>
                      <input
                        className="luxury-input mt-1.5"
                        placeholder="optional@email.com"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                        Subject
                      </label>
                      <input
                        className="luxury-input mt-1.5"
                        placeholder="Appointment / insurance / other"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                      Message *
                    </label>
                    <textarea
                      className="luxury-input mt-1.5"
                      rows={5}
                      placeholder="How can we help?"
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  {status === 'error' && (
                    <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      <p className="font-bold">Message failed</p>
                      <p className="mt-1 text-xs text-red-600">{errorMsg}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-3.5 rounded-full bg-brand-red text-white text-sm font-bold hover:bg-brand-red-dark transition-colors disabled:opacity-60"
                  >
                    {status === 'loading' ? 'Sending message…' : 'Send Message'}
                  </button>
                </form>
              )}
            </motion.div>

            <div className="lg:col-span-5 flex flex-col gap-5">
              <div className="relative flex-1 min-h-[280px] rounded-[1.75rem] overflow-hidden border border-slate-200 shadow-sm">
                <Image
                  src="/images/hospital-building.png"
                  alt="SARADA Netralaya building"
                  fill
                  className="object-cover"
                  sizes="40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/90 via-[#0B1F3A]/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-[#F5D565] text-[11px] tracking-wider uppercase font-semibold">Our centre</p>
                  <p className="mt-1 text-lg font-bold">SARADA Netralaya</p>
                  <p className="mt-1 text-sm text-white/75 leading-relaxed">{site.address}</p>
                  <a
                    href="https://maps.google.com/?q=Swastik+Ambika+Tower+Baradwari+Jamshedpur"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex rounded-full bg-white px-5 py-2 text-xs font-bold text-[#0B1F3A]"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>

              <div className="rounded-[1.75rem] bg-[#0B1F3A] p-6 text-white">
                <p className="text-[#F5D565] text-[11px] tracking-[0.16em] uppercase font-semibold">Eye emergency?</p>
                <h3 className="mt-2 text-xl font-bold">Don&apos;t wait for a form</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">
                  Sudden vision loss, flashes, or curtain-like shadows — call us now.
                </p>
                <a
                  href={`tel:${site.phones[0].replace(/\s/g, '')}`}
                  className="mt-5 inline-flex w-full justify-center rounded-full bg-brand-red px-5 py-3 text-sm font-bold text-white"
                >
                  Emergency: {site.phones[0]}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ExploreMore
        links={[
          { label: 'Insurance', href: '/insurance', desc: 'Ayushman, corporates & cashless.' },
          { label: 'Treatments', href: '/treatments', desc: 'Smart guides for every eye condition.' },
          { label: 'Doctors', href: '/doctors', desc: 'Meet our specialists.' },
        ]}
      />
    </SiteLayout>
  );
}
