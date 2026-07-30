'use client';

import { useState } from 'react';
import SiteLayout from '@/components/luxury/SiteLayout';
import PageHero from '@/components/luxury/PageHero';
import { site } from '@/data/site';

const fieldCls =
  'box-border block w-full min-w-0 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-[#4FA3D1] focus:ring-2 focus:ring-[#4FA3D1]/20';

const labelCls =
  'mb-1.5 block w-full text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500';

export default function FeedbackPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    rating: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      setStatus('error');
      setErrorMsg('Please fill name, phone, and your feedback message.');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Could not send feedback.');

      setStatus('success');
      setForm({ name: '', phone: '', email: '', rating: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Your Voice Matters"
        title="Share Your"
        accent="Feedback"
        description="Tell us about your visit. Your message goes privately to our team by email — it is never shown publicly on this website."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Feedback', href: '/feedback' },
        ]}
      />

      <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-[#F4F8FB]">
        <div className="max-w-2xl mx-auto px-5 sm:px-6">
          {status === 'success' ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-10 text-center">
              <p className="text-3xl font-bold text-emerald-600">✓</p>
              <h2 className="mt-3 text-xl font-bold text-[#0B1F3A]">Thank you for your feedback</h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                We have received your message by email at {site.email}. Our team will read it carefully.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-6 inline-flex rounded-full bg-brand-red px-6 py-2.5 text-sm font-bold text-white hover:bg-brand-red-dark"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-4"
            >
              <p className="text-sm text-slate-600 leading-relaxed">
                Feedback is private. It is sent only to{' '}
                <a href={`mailto:${site.email}`} className="font-semibold text-brand-red hover:underline">
                  {site.email}
                </a>{' '}
                and is not posted on the website.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className={labelCls}>Full name *</label>
                  <input
                    className={fieldCls}
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className={labelCls}>Phone *</label>
                  <input
                    className={fieldCls}
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="10-digit mobile"
                  />
                </div>
              </div>

              <div>
                <label className={labelCls}>Email</label>
                <input
                  className={fieldCls}
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="optional@email.com"
                />
              </div>

              <div>
                <label className={labelCls}>How was your experience?</label>
                <select
                  className={fieldCls}
                  value={form.rating}
                  onChange={(e) => setForm({ ...form, rating: e.target.value })}
                >
                  <option value="">Select (optional)</option>
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Average">Average</option>
                  <option value="Needs improvement">Needs improvement</option>
                </select>
              </div>

              <div>
                <label className={labelCls}>Your feedback *</label>
                <textarea
                  className={`${fieldCls} resize-none`}
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="What went well? What can we improve?"
                />
              </div>

              {status === 'error' && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full rounded-full bg-brand-red px-5 py-3.5 text-sm font-bold text-white hover:bg-brand-red-dark disabled:opacity-60"
              >
                {status === 'loading' ? 'Sending…' : 'Send Feedback'}
              </button>
            </form>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
