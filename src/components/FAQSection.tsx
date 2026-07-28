'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  { q: 'What are your visiting hours?', a: 'Monday to Saturday: 9:00 AM - 8:00 PM, Sunday: 10:00 AM - 2:00 PM. Emergency services are available 24/7.' },
  { q: 'Do I need a referral for an appointment?', a: 'No, you can directly book an appointment by calling us or using our online booking form. Walk-in patients are also welcome.' },
  { q: 'Which insurance plans do you accept?', a: 'We accept most major insurance plans including Star Health, ICICI Lombard, HDFC ERGO, New India Assurance, Bajaj Allianz, and many more. Please contact us to verify your specific plan.' },
  { q: 'How long does cataract surgery take?', a: 'The actual procedure takes approximately 15-20 minutes per eye. However, you should plan to spend about 2-3 hours at the hospital for pre-operative preparation and post-operative observation.' },
  { q: 'Is LASIK surgery safe?', a: 'LASIK is one of the safest and most studied elective procedures available. At SARADA Netralaya, we use the latest FDA-approved laser technology. Our surgeons have performed thousands of successful LASIK procedures.' },
  { q: 'What should I bring to my appointment?', a: 'Please bring your previous prescriptions, current glasses or contact lenses, a list of any medications you are taking, your insurance card, and a valid photo ID.' },
  { q: 'Do you offer pediatric eye care?', a: "Yes, we have specialized pediatric eye care services. Dr. Nitish R. Bharadwaj has extensive experience in treating children's eye conditions including squint, lazy eye, and congenital cataracts." },
  { q: 'How often should I get an eye exam?', a: 'Adults aged 18-60 should have a comprehensive eye exam every 1-2 years. Those over 60 should have annual exams. Children should have their first eye exam at 6 months, then at age 3, and before starting school.' },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-24 px-4 bg-brand-gray-light">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-brand-blue font-semibold text-sm tracking-widest uppercase mb-2">FAQ</p>
          <h2 className="font-[var(--font-montserrat)] font-extrabold text-3xl md:text-4xl text-brand-black mb-4">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-brand-red mx-auto rounded-full mb-6" />
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-white border border-gray-100 rounded-xl px-6 data-[state=open]:border-brand-blue data-[state=open]:shadow-md transition-all">
              <AccordionTrigger className="font-[var(--font-montserrat)] font-semibold text-brand-black text-left hover:no-underline py-5">{item.q}</AccordionTrigger>
              <AccordionContent className="text-brand-gray text-sm leading-relaxed pb-5">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
