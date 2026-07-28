'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './SectionHeader';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: 'What is a cataract, and is surgery safe?',
    a: 'A cataract is clouding of the eye’s natural lens. Surgery is one of the safest procedures worldwide. At SARADA we use phacoemulsification with advanced microscopes and phaco systems. The procedure usually takes 15–20 minutes, is painless with anaesthetic drops, and most patients go home the same day.',
  },
  {
    q: 'Will I need glasses again after LASIK?',
    a: 'Most suitable candidates achieve excellent distance vision and reduce dependence on glasses. Results are long-lasting. Reading glasses may still be needed later in life due to age-related near-vision changes (presbyopia), which is different from the power LASIK corrects.',
  },
  {
    q: 'What is glaucoma and how do you treat it?',
    a: 'Glaucoma damages the optic nerve, often from raised eye pressure. Lost vision cannot be restored, so early detection is critical. Treatment may include pressure-lowering drops, laser therapy, or surgery. Regular monitoring protects remaining sight.',
  },
  {
    q: 'When should a child have an eye check?',
    a: 'We recommend screening around 6 months of age, again by age 3, and before school starts. If there is family history, squint, lazy eye, or school complaints, seek care immediately. Early treatment preserves lifelong vision development.',
  },
  {
    q: 'Is dry eye permanent?',
    a: 'Dry eye is often chronic, but it is highly manageable. We identify whether the problem is tear quantity, tear quality, or blocked oil glands, then treat with medical therapy, IPL, LLLT, plugs, and lifestyle guidance for lasting comfort.',
  },
  {
    q: 'How often should diabetic patients check their eyes?',
    a: 'At least once every year with a dilated retina exam — even if vision feels normal. If diabetic retinopathy is found, follow-up may be every 3–6 months. Early laser or injections can prevent blindness.',
  },
  {
    q: 'How long is recovery after eye surgery?',
    a: 'Cataract and LASIK: most people resume light activities in 1–2 days. Retina surgery: often 2–4 weeks. Corneal transplant: months of careful healing. Your surgeon will give a personalized recovery plan.',
  },
  {
    q: 'Do you offer cashless insurance treatment?',
    a: 'Yes. Cashless facility is available and all major mediclaim and insurance are accepted. Partners include Tata Power, Tata Motors, LIC, MediAssist, MD India, Health India, New India Assurance, National Insurance, Oriental Insurance, United India Insurance, Ayushman Bharat (PM-JAY), Rajyakarmi Swasthya Bima Yojana, and NML. Please bring your insurance details so we can verify benefits before treatment.',
  },
];

export default function FAQSection({ hideHeader = false }: { hideHeader?: boolean }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [search, setSearch] = useState('');

  const filtered = faqs.filter(
    (f) =>
      f.q.toLowerCase().includes(search.toLowerCase()) ||
      f.a.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 80%' },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="faq" className="luxury-section relative">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <div ref={headingRef}>
          {!hideHeader && (
          <SectionHeader
            eyebrow="FAQ"
            titleWhite="Common"
            titleAccent="Questions"
            description="Clear answers about conditions, treatment, and recovery — from first symptoms to advanced care."
          />
          )}
        </div>

        <div className={`${hideHeader ? 'mt-0' : 'mt-10'} relative`}>
          <input
            type="text"
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="luxury-input pl-12"
          />
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <div className="mt-8 space-y-3">
          {filtered.map((faq, i) => (
            <div key={i} className="faq-item glass-card rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="text-sm sm:text-base font-medium text-slate-800 pr-4">{faq.q}</span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-slate-400 text-xl flex-shrink-0"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <div className="px-6 pb-5">
                      <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
