export interface TreatmentData {
  name: string;
  subtitle: string;
  color: string;
  icon: string;
  overview: string;
  symptoms: string[];
  diagnosis: string[];
  treatments: { name: string; desc: string }[];
  recovery: string;
  faq: { q: string; a: string }[];
  cta: string;
}

export const treatmentsData: Record<string, TreatmentData> = {
  cataract: {
    name: 'Cataract Surgery',
    subtitle: 'Clear Vision, Restored Life',
    color: '#0096D6',
    icon: '◉',
    overview: `In simple words: A cataract means the natural lens inside your eye has become cloudy — like looking through foggy glass. It usually grows slowly with age.

What happens inside the eye: Light needs a clear lens to focus at the back of the eye. When the lens becomes cloudy, vision turns blurry, colours look dull, and night lights may glare.

How we treat it at SARADA: We remove the cloudy lens through a tiny cut (about 2.2 mm) using gentle ultrasound, then place a clear artificial lens. Surgery usually takes about 15 minutes and most people go home the same day. Special lenses can also help reduce the need for glasses, depending on your lifestyle.`,
    symptoms: [
      'Blurry or foggy vision that glasses no longer fully correct',
      'Glare and halos around lights, especially at night',
      'Colours look faded or yellowish',
      'Frequent changes in spectacle power',
      'Difficulty reading or driving in bright sunlight',
      'Double vision in one eye',
      'Sudden temporary improvement in near vision (“second sight”)',
    ],
    diagnosis: [
      'Vision test to check how clearly you see',
      'Close look at the lens with a special microscope',
      'Dilated exam to check the back of the eye',
      'ZEISS IOLMaster 700 scan to choose the right lens power',
      'OCT scan when needed to check the centre of vision before surgery',
    ],
    treatments: [
      {
        name: 'Phacoemulsification',
        desc: 'Standard cataract removal through a tiny cut that usually needs no stitches, then a new clear lens is placed.',
      },
      {
        name: 'Micro-incision cataract surgery (MICS)',
        desc: 'An even smaller cut for faster healing in suitable patients.',
      },
      {
        name: 'Laser-assisted cataract surgery',
        desc: 'Computer-guided laser helps with precise steps in selected cases.',
      },
      {
        name: 'Special intraocular lenses',
        desc: 'Lenses that can help distance, near, or cylinder power — chosen for your daily needs.',
      },
    ],
    recovery:
      'Most patients go home the same day. Light activities often resume the next day. Eye drops continue for several weeks. Vision usually stabilizes over 2–4 weeks. Avoid heavy lifting and rubbing the eye until your surgeon clears you.',
    faq: [
      {
        q: 'Is cataract surgery painful?',
        a: 'No. Anaesthetic drops numb the eye. You may feel mild pressure, not pain.',
      },
      {
        q: 'Can both eyes be operated on the same day?',
        a: 'Usually one eye first, then the second after 1–2 weeks for safety and clarity of recovery.',
      },
      {
        q: 'Can cataract come back?',
        a: 'The artificial lens does not develop cataract. Sometimes the capsule behind it becomes cloudy later — a quick outpatient YAG laser clears it.',
      },
      {
        q: 'How long does the new lens last?',
        a: 'It is designed to last a lifetime.',
      },
    ],
    cta: 'Book a cataract evaluation and understand your lens options.',
  },
  refractive: {
    name: 'Refractive Surgery',
    subtitle: 'ICL · IPCL · Clearer Everyday Vision',
    color: '#0284C7',
    icon: '✦',
    overview: `In simple words: Refractive errors (short-sight, long-sight, or cylinder) mean light does not focus correctly on the back of the eye, so you need glasses or contacts.

What happens inside the eye: The eye focuses too strongly, too weakly, or unevenly. An implantable lens can fine-tune focus from inside the eye without removing your natural lens.

How we treat it at SARADA: We counsel carefully on ICL and IPCL implantable lens options. After a full eye check, we suggest the safest plan for your power, cornea, and lifestyle — so you can depend less on spectacles with confidence.`,
    symptoms: [
      'Dependence on glasses or contact lenses for clear vision',
      'Contact lens intolerance or dryness',
      'High myopia, hyperopia, or astigmatism',
      'Glasses interfering with sports, work, or outdoor life',
      'Desire for clearer vision with implantable lens options',
    ],
    diagnosis: [
      'Exact measurement of your glass power',
      'Cornea shape and thickness check',
      'Front-chamber depth and cell health checks for ICL/IPCL',
      'Dry-eye and retina check before planning',
      'Clear counselling on whether ICL or IPCL suits you',
    ],
    treatments: [
      {
        name: 'ICL (Implantable Collamer Lens)',
        desc: 'A soft lens placed inside the eye to correct power while keeping your natural lens — useful for many higher powers.',
      },
      {
        name: 'IPCL',
        desc: 'Another implantable lens option, chosen after detailed eye measurements for suitable patients.',
      },
      {
        name: 'Full refractive counselling',
        desc: 'Honest advice on whether implantable lenses are right for your eyes and daily life.',
      },
    ],
    recovery:
      'Recovery plans are personalised. Many patients notice clearer vision soon after implantable lens procedures, with drop schedules and follow-ups explained clearly before you go home.',
    faq: [
      {
        q: 'What is ICL?',
        a: 'ICL is an implantable contact lens placed inside the eye to correct refractive error without removing your natural lens.',
      },
      {
        q: 'Who is suitable for ICL / IPCL?',
        a: 'Suitability depends on power, cornea, chamber depth, and overall eye health. We confirm this only after a full workup.',
      },
      {
        q: 'Will I still need reading glasses later?',
        a: 'Age-related near vision changes after 40 are separate and may still need reading help even after refractive correction.',
      },
    ],
    cta: 'Book a refractive surgery counselling visit for ICL / IPCL suitability.',
  },
  glaucoma: {
    name: 'Glaucoma Treatment',
    subtitle: 'Protecting the Optic Nerve',
    color: '#D97706',
    icon: '◐',
    overview: `In simple words: Glaucoma damages the optic nerve — often linked to high eye pressure. Early stages usually have no symptoms, so regular checks matter.

What happens inside the eye: High pressure or a weak nerve can slowly damage nerve fibres. Side vision goes first; if untreated, vision can become tunnel-like or be lost.

How we treat it at SARADA: We check pressure, nerve scans, visual fields, and the drainage angle. Treatment may start with drops, then laser, or surgery if needed — to protect the vision you still have.`,
    symptoms: [
      'Often no early symptoms — silent progression',
      'Gradual loss of side vision',
      'Tunnel vision in advanced disease',
      'Halos around lights',
      'Severe eye pain, redness, nausea (sudden pressure rise — urgent care needed)',
    ],
    diagnosis: [
      'Pressure check (tonometry)',
      'OCT scan of the optic nerve',
      'Visual field test for side vision',
      'Angle check (gonioscopy)',
      'Cornea thickness measurement',
    ],
    treatments: [
      {
        name: 'Eye drops',
        desc: 'Daily drops lower pressure and are often the first step.',
      },
      {
        name: 'SLT laser',
        desc: 'A quick clinic laser that helps drainage; can be repeated in some cases.',
      },
      {
        name: 'Trabeculectomy',
        desc: 'Surgery that creates a new drainage path when drops and laser are not enough.',
      },
      {
        name: 'Drainage devices',
        desc: 'Small tubes for harder or advanced pressure control.',
      },
    ],
    recovery:
      'Laser procedures usually allow same-day return to light activity. Surgical recovery takes 1–2 weeks or more. Lifelong follow-up is essential because glaucoma is monitored, not “cured.”',
    faq: [
      {
        q: 'Can lost vision return?',
        a: 'No. Treatment aims to prevent further loss. That is why early detection is so important.',
      },
      {
        q: 'How often should I be checked?',
        a: 'Adults over 40 should have periodic exams; more often with family history. Diagnosed patients usually need reviews every 3–6 months.',
      },
    ],
    cta: 'Book a glaucoma risk assessment — especially if you are over 40.',
  },
  retina: {
    name: 'Medical Retina Services',
    subtitle: 'Protecting Sight from Within',
    color: '#DC2626',
    icon: '◎',
    overview: `In simple words: The retina is the thin layer at the back of the eye that senses light. When it is damaged, clear images cannot form.

What happens inside the eye: Diabetes, ageing, tears, or detachment can harm retinal cells and blood vessels. You may notice floaters, flashes, shadows, or sudden blur.

How we treat it at SARADA: Clear scans (OCT and fundus photos), laser, injections into the eye, and surgery when needed help treat diabetic eye disease, macular problems, and retinal detachment early.`,
    symptoms: [
      'New floaters or cobweb-like spots',
      'Flashes of light in the side vision',
      'A curtain or shadow over part of vision',
      'Sudden blur or distortion of straight lines',
      'Gradual vision loss in people with diabetes',
    ],
    diagnosis: [
      'Dilated look at the back of the eye',
      'OCT scan of retinal layers',
      'Fluorescein angiography when vessel detail is needed',
      'Ultrasound if the view is cloudy',
      'Special OCT vessel scan in selected macular cases',
    ],
    treatments: [
      {
        name: 'Anti-VEGF injections',
        desc: 'Medicine injected into the eye to control swelling and abnormal vessels.',
      },
      {
        name: 'Retinal laser',
        desc: 'Laser to seal leaks or reduce high-risk diabetic changes.',
      },
      {
        name: 'Vitrectomy',
        desc: 'Microsurgery to repair detachment, clear blood, or treat complex retina problems.',
      },
      {
        name: 'Scleral buckling',
        desc: 'Surgical support for selected retinal detachments.',
      },
    ],
    recovery:
      'Injections and laser usually have minimal downtime. After retinal surgery, recovery may take 2–4 weeks with posture or activity restrictions as advised. Ongoing monitoring is critical for diabetes.',
    faq: [
      {
        q: 'Can diabetic retinopathy cause blindness?',
        a: 'Yes if untreated. Annual dilated exams and timely treatment greatly reduce that risk.',
      },
      {
        q: 'Are floaters always dangerous?',
        a: 'Many are harmless, but a sudden shower of floaters with flashes needs urgent examination.',
      },
    ],
    cta: 'Diabetic or seeing floaters/flashes? Book a retina check now.',
  },
  cornea: {
    name: 'Cornea Treatment',
    subtitle: 'The Window to Your World',
    color: '#7C3AED',
    icon: '◑',
    overview: `In simple words: The cornea is the clear front window of the eye. If it scars, thins, or becomes uneven, vision suffers.

What happens inside the eye: Infection, injury, keratoconus, or cell failure can bend or cloud how light enters the eye.

How we treat it at SARADA: We map the cornea shape, then treat with medicines, crosslinking for keratoconus, or partial/full transplant when needed.`,
    symptoms: [
      'Progressive blur not fully corrected by glasses',
      'Light sensitivity and glare',
      'Eye pain, redness, or watering',
      'Frequent power changes',
      'Halos around lights',
    ],
    diagnosis: [
      'Close exam of the cornea',
      'Cornea shape map (topography)',
      'Thickness measurement',
      'Cell-count test when needed',
    ],
    treatments: [
      {
        name: 'Medicines first',
        desc: 'Infection, inflammation, and surface problems are treated with targeted medicines.',
      },
      {
        name: 'Corneal crosslinking (CXL)',
        desc: 'Strengthens the cornea to slow or stop keratoconus progression.',
      },
      {
        name: 'Partial-thickness transplant',
        desc: 'Replaces only the diseased inner layer for faster recovery in suitable cases.',
      },
      {
        name: 'Full-thickness transplant',
        desc: 'Replaces the full cornea button when deeper scarring or advanced disease is present.',
      },
    ],
    recovery:
      'CXL usually has days to weeks of discomfort. Transplant recovery ranges from weeks to many months and requires careful follow-up and protective care.',
    faq: [
      {
        q: 'Can keratoconus patients have refractive laser reshaping?',
        a: 'Usually no. Crosslinking and other cornea-preserving options are safer.',
      },
      {
        q: 'Are transplants successful?',
        a: 'Success rates are high with proper selection and lifelong follow-up when advised.',
      },
    ],
    cta: 'Book a corneal evaluation if glasses keep changing or vision is distorting.',
  },
  'dry-eye': {
    name: 'Dry Eye Clinic',
    subtitle: 'Comfortable Eyes, Clear Focus',
    color: '#2563EB',
    icon: '◑',
    overview: `In simple words: Dry eye means your tears are too few or of poor quality, so the eye surface feels irritated.

What happens inside the eye: Screens, AC, ageing, and blocked oil glands can break the tear film.

How we treat it at SARADA: We check tear amount, tear quality, and gland health, then plan lubricants, lid care, IPL, light therapy, or tiny plugs that keep tears longer.`,
    symptoms: [
      'Burning, stinging, or gritty sensation',
      'Redness and fluctuating blur',
      'Light sensitivity',
      'Discomfort with computer use',
      'Watery eyes from reflex tearing',
    ],
    diagnosis: [
      'Schirmer test for tear volume',
      'Tear breakup time',
      'Meibography for oil-gland health',
      'Inflammation tests when needed',
    ],
    treatments: [
      {
        name: 'Medicines & lid care',
        desc: 'Lubricants, anti-inflammatory drops, warm compresses, and lid hygiene for basic relief.',
      },
      {
        name: 'IPL therapy',
        desc: 'Gentle light treatment to improve gland function and reduce inflammation in suitable patients.',
      },
      {
        name: 'LLLT',
        desc: 'Low-level light therapy to support surface healing and comfort.',
      },
      {
        name: 'Punctal plugs',
        desc: 'Tiny plugs that keep natural tears on the eye longer.',
      },
    ],
    recovery:
      'Most therapies have little or no downtime. Improvement is often gradual over weeks, with maintenance care for lasting comfort.',
    faq: [
      {
        q: 'Is dry eye permanent?',
        a: 'It can be chronic, but structured treatment usually brings major relief.',
      },
      {
        q: 'Are over-the-counter drops enough?',
        a: 'Mild cases may improve. Persistent symptoms need a full dry-eye workup.',
      },
    ],
    cta: 'Book an advanced dry-eye assessment.',
  },
  pediatric: {
    name: 'Pediatric Eye Care',
    subtitle: 'Caring for Developing Eyes',
    color: '#059669',
    icon: '◈',
    overview: `In simple words: A child’s vision system is still learning. Problems missed early can become permanent.

What happens inside the eye: Uncorrected power, squint, or lazy eye can stop one eye from developing clear vision in the brain.

How we treat it at SARADA: We check for glass power, lazy eye, squint, congenital cataract/glaucoma, and tear-duct blockage — then treat with glasses, patching, therapy, or surgery while vision can still improve.`,
    symptoms: [
      'Squinting or closing one eye',
      'Head tilting while looking',
      'Sitting too close to books or screens',
      'School board difficulty or frequent headaches',
      'Eyes that appear misaligned',
      'Poor hand–eye coordination',
    ],
    diagnosis: [
      'Age-appropriate vision testing',
      'Special refraction for true power in children',
      'Squint and both-eyes-together assessment',
      'Dilated retina check when needed',
    ],
    treatments: [
      {
        name: 'Glasses',
        desc: 'Often the first and most important step for clear focused vision.',
      },
      {
        name: 'Patching / lazy-eye therapy',
        desc: 'Strengthens the weaker eye while the brain can still learn.',
      },
      {
        name: 'Vision therapy',
        desc: 'Guided exercises for tracking, focusing, and using both eyes together.',
      },
      {
        name: 'Pediatric eye surgery',
        desc: 'Squint correction or other procedures under specialist care when needed.',
      },
    ],
    recovery:
      'Glasses help immediately. Patching needs consistency over months. After surgery, recovery is usually 1–2 weeks with scheduled follow-ups through childhood.',
    faq: [
      {
        q: 'When should the first eye check be?',
        a: 'Around 6 months, again by age 3, and before school — sooner if any warning signs appear.',
      },
      {
        q: 'Will squint correct itself?',
        a: 'Do not wait. Untreated squint can lead to lazy eye and lasting vision loss.',
      },
    ],
    cta: 'Book a pediatric eye screening for your child.',
  },
  squint: {
    name: 'Squint Correction',
    subtitle: 'Aligned Eyes, Confident Vision',
    color: '#EA580C',
    icon: '◇',
    overview: `In simple words: Squint means the eyes do not point in the same direction.

What happens inside the eye: Misalignment can cause double vision, poor depth sense, or lazy eye in children. Adults may want better function and a more natural look.

How we treat it at SARADA: We check muscle balance and both-eye vision, then treat with glasses, prisms, vision therapy, or eye-muscle surgery.`,
    symptoms: [
      'Visible eye turn inward, outward, up, or down',
      'Double vision (more common in adults)',
      'Closing one eye to see clearly',
      'Head posture to compensate',
      'Eye strain and headaches',
    ],
    diagnosis: [
      'Cover and prism tests for alignment',
      'Eye movement assessment',
      'Both-eyes-together vision check',
      'Lazy-eye screening in children',
    ],
    treatments: [
      {
        name: 'Glasses / prism correction',
        desc: 'Can straighten some squints or ease double vision.',
      },
      {
        name: 'Vision therapy',
        desc: 'Exercises to improve coordination in selected cases.',
      },
      {
        name: 'Squint surgery',
        desc: 'Repositions eye muscles for lasting alignment in children and adults.',
      },
    ],
    recovery:
      'After surgery, mild redness and discomfort usually settle in 1–2 weeks. Follow-up confirms stable alignment.',
    faq: [
      {
        q: 'Does squint surgery work in adults?',
        a: 'Yes. Adults can benefit functionally and cosmetically with proper planning.',
      },
      {
        q: 'Can squint return?',
        a: 'Most results are stable; large or complex deviations may occasionally need fine-tuning.',
      },
    ],
    cta: 'Book a squint evaluation and treatment plan.',
  },
};
