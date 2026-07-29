'use client';

import { site } from '@/data/site';

const faqs = [
  {
    q: 'What are your visiting hours?',
    a: `Monday to Saturday: 10:00 AM – 7:00 PM. ${site.emergency}.`,
  },
  {
    q: 'Do you accept insurance?',
    a: 'Yes. We support cashless treatment with major TPAs and insurers. Please bring your policy card and ID; our desk will guide you through eligibility.',
  },
  {
    q: 'How long does cataract surgery take?',
    a: 'The procedure is often around 15–20 minutes per eye. Plan a few hours at the hospital for preparation and observation. Most patients go home the same day.',
  },
  {
    q: 'What is refractive surgery with ICL / IPCL?',
    a: 'ICL and IPCL are implantable lens options that can correct refractive power from inside the eye after a full suitability workup. We counsel honestly on whether you are a good candidate.',
  },
  {
    q: 'Do you offer pediatric eye care?',
    a: 'Yes. We provide gentle child eye examinations for glasses, lazy eye (amblyopia), squint, and school vision screening — early care matters while vision is still developing.',
  },
];

export default function FAQSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-5 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">Frequently Asked Questions</h2>
        <div className="mt-8 space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-slate-200 bg-slate-50/80 p-5 open:bg-white open:shadow-sm">
              <summary className="cursor-pointer list-none font-semibold text-slate-900 pr-6 relative">
                {f.q}
                <span className="absolute right-0 top-0 text-brand-red group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
