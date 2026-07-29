'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const symptoms = [
  { q: 'Why is my vision blurry?', a: "Blurred vision can be caused by several conditions including: Cataract (clouding of the eye's natural lens), Refractive error (need for glasses or power change), Retinal disease (damage to the retina), Diabetes-related eye issues, and Dry eye syndrome. We recommend scheduling a comprehensive eye examination." },
  { q: 'Why are my eyes red?', a: 'Red eyes can result from: Eye allergies (common in seasonal changes), Eye infections (conjunctivitis), Severe dryness, or Eye injury. If redness persists for more than 24 hours or is accompanied by pain, visit us immediately.' },
  { q: 'What are floaters?', a: 'Floaters are tiny specks or clouds moving in your field of vision. They are usually harmless and caused by small clumps of gel inside the eye. However, a sudden increase in floaters, especially with flashes of light, needs urgent retina evaluation.' },
  { q: 'What is Cataract?', a: "Cataract is the clouding of the eye's natural lens, which lies behind the iris and the pupil. It is the most common cause of vision loss in people over age 40. Symptoms include blurry vision, colors appearing faded, glare, and difficulty seeing at night." },
  { q: 'Is Cataract surgery painful?', a: 'No, cataract surgery is generally not painful. It is performed under local anesthesia (eye drops). Most patients experience only mild discomfort or a slight pressure sensation during the procedure. Recovery is quick with most patients resuming normal activities within a few days.' },
  { q: 'What is refractive surgery with ICL / IPCL?', a: 'ICL and IPCL are implantable lens options that can correct refractive power from inside the eye after a full suitability workup, helping suitable candidates reduce dependence on glasses or contact lenses.' },
  { q: 'What is Glaucoma?', a: 'Glaucoma is a group of eye conditions that damage the optic nerve, often due to abnormally high pressure in the eye. It is one of the leading causes of blindness. Early detection and treatment are crucial as vision loss from glaucoma cannot be reversed.' },
];

export default function PatientEducationSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-brand-blue font-semibold text-sm tracking-widest uppercase mb-2">Patient Education</p>
          <h2 className="font-[var(--font-montserrat)] font-extrabold text-3xl md:text-4xl text-brand-black mb-4">
            Eye Symptom Checker
          </h2>
          <div className="w-20 h-1 bg-brand-red mx-auto rounded-full mb-6" />
          <p className="text-brand-gray max-w-2xl mx-auto">
            Find out what might be causing your eye discomfort
          </p>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {symptoms.map((item, i) => (
            <AccordionItem
              key={i}
              value={`symptom-${i}`}
              className="bg-brand-gray-light border border-gray-100 rounded-xl px-6 data-[state=open]:border-brand-red data-[state=open]:shadow-md transition-all"
            >
              <AccordionTrigger className="font-[var(--font-montserrat)] font-semibold text-brand-black text-left hover:no-underline py-5">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-brand-gray text-sm leading-relaxed pb-5">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
