'use client';

import { useState } from 'react';
import { doctors } from '@/data/doctors';
import { site } from '@/data/site';

const TIME_SLOTS = [
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
  '06:00 PM',
];

const emptyForm = {
  name: '',
  phone: '',
  email: '',
  doctor: '',
  date: '',
  time: '',
  message: '',
};

const fieldCls =
  'box-border block w-full min-w-0 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-[#4FA3D1] focus:ring-2 focus:ring-[#4FA3D1]/20';

const labelCls =
  'mb-1.5 block w-full text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500';

type Props = {
  compact?: boolean;
  onSuccess?: () => void;
};

/** Enterprise appointment form — navbar modal + mobile sheet */
export default function AppointmentBookingForm({ compact = false, onSuccess }: Props) {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [mailSent, setMailSent] = useState(true);

  const today = new Date().toISOString().slice(0, 10);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!form.name.trim() || !form.phone.trim() || !form.doctor || !form.date || !form.time) {
      setStatus('error');
      setErrorMsg('Please fill all required fields (name, phone, doctor, date, time).');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || 'Booking failed. Please try again.');
      }

      setMailSent(data.mailSent !== false);
      setStatus('success');
      setForm(emptyForm);
      onSuccess?.();
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Could not submit. Please call us directly.');
    }
  };

  if (status === 'success') {
    return (
      <div className="box-border flex w-full min-h-[280px] flex-col items-center justify-center px-2 py-8 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl font-bold text-emerald-600 ring-8 ring-emerald-50">
          ✓
        </div>
        <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-700">Success</p>
        <h3 className="mt-2 w-full text-xl font-bold text-[#0B1F3A] sm:text-2xl">Appointment request sent</h3>
        <p className="mt-3 w-full text-sm leading-relaxed text-slate-600">
          Thank you. Our front desk will call you shortly to confirm your slot. If you shared an email, a
          confirmation mail is also on its way.
        </p>
        {mailSent ? (
          <p className="mt-3 w-full rounded-xl bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700">
            Hospital notified · confirmation email sent when email was provided
          </p>
        ) : (
          <p className="mt-3 w-full rounded-xl bg-amber-50 px-4 py-2 text-xs font-semibold text-amber-700">
            Booking saved — email notify pending, we still have your request
          </p>
        )}
        <p className="mt-4 w-full text-sm text-slate-500">
          Urgent? Call{' '}
          <a href={`tel:${site.phones[0].replace(/\s/g, '')}`} className="font-bold text-brand-red">
            {site.phones[0]}
          </a>
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 inline-flex w-full max-w-xs justify-center rounded-full bg-brand-red px-6 py-2.5 text-sm font-bold text-white hover:bg-brand-red-dark"
        >
          Book another visit
        </button>
      </div>
    );
  }

  const doctorOptions = [
    ...doctors.map((d) => ({ name: d.name, spec: d.speciality })),
    { name: 'Any Available', spec: 'First available specialist' },
  ];

  return (
    <form onSubmit={handleSubmit} className="box-border flex w-full min-w-0 flex-col gap-4">
      {/* Name + Phone — equal columns, full width */}
      <div className={`grid w-full min-w-0 gap-3 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
        <div className="min-w-0 w-full">
          <label className={labelCls}>Full name *</label>
          <input
            className={fieldCls}
            placeholder="Patient name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className="min-w-0 w-full">
          <label className={labelCls}>Phone *</label>
          <input
            className={fieldCls}
            placeholder="10-digit mobile"
            type="tel"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>
      </div>

      {/* Email — full row */}
      <div className="w-full min-w-0">
        <label className={labelCls}>Email</label>
        <input
          className={fieldCls}
          placeholder="optional@email.com"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>

      {/* Doctors — stacked full-width for clean alignment */}
      <div className="w-full min-w-0">
        <label className={labelCls}>Preferred doctor *</label>
        <div className="grid w-full grid-cols-1 gap-2">
          {doctorOptions.map((d) => (
            <button
              key={d.name}
              type="button"
              onClick={() => setForm({ ...form, doctor: d.name })}
              className={`box-border flex w-full min-w-0 items-center justify-between gap-3 rounded-xl border px-3.5 py-3 text-left transition-all ${
                form.doctor === d.name
                  ? 'border-brand-red bg-red-50/80 shadow-sm'
                  : 'border-slate-200 bg-white hover:border-sky-200 hover:bg-sky-50/50'
              }`}
            >
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold text-slate-900">{d.name}</span>
                <span className="mt-0.5 block truncate text-[11px] text-slate-500">{d.spec}</span>
              </span>
              <span
                className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border text-[10px] font-bold ${
                  form.doctor === d.name
                    ? 'border-brand-red bg-brand-red text-white'
                    : 'border-slate-300 text-transparent'
                }`}
              >
                ✓
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Date + Time — equal columns */}
      <div className={`grid w-full min-w-0 gap-3 ${compact ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
        <div className="min-w-0 w-full">
          <label className={labelCls}>Preferred date *</label>
          <input
            className={fieldCls}
            type="date"
            required
            min={today}
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
        </div>
        <div className="min-w-0 w-full">
          <label className={labelCls}>Preferred time *</label>
          <select
            className={fieldCls}
            required
            value={form.time}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
          >
            <option value="">Select slot</option>
            {TIME_SLOTS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message — full width */}
      <div className="w-full min-w-0">
        <label className={labelCls}>Message</label>
        <textarea
          className={`${fieldCls} resize-none`}
          rows={compact ? 2 : 3}
          placeholder="Symptoms or preferred concern (optional)"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </div>

      {status === 'error' && (
        <div className="box-border w-full rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          <p className="font-bold">Booking failed</p>
          <p className="mt-1 text-xs font-normal text-red-600">{errorMsg}</p>
          <p className="mt-2 text-xs">
            Call{' '}
            <a href={`tel:${site.phones[0].replace(/\s/g, '')}`} className="font-semibold underline">
              {site.phones[0]}
            </a>{' '}
            for help.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="box-border w-full rounded-full bg-brand-red px-5 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-brand-red-dark disabled:opacity-60"
      >
        {status === 'loading' ? 'Submitting your booking…' : 'Confirm Appointment'}
      </button>

      <p className="w-full text-center text-[11px] text-slate-400">
        Or call{' '}
        <a href={`tel:${site.phones[0].replace(/\s/g, '')}`} className="font-semibold text-[#0B1F3A] hover:underline">
          {site.phones[0]}
        </a>
        {' / '}
        <a href={`tel:${site.phones[1].replace(/\s/g, '')}`} className="font-semibold text-[#0B1F3A] hover:underline">
          {site.phones[1]}
        </a>
      </p>
    </form>
  );
}
