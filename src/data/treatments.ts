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
    overview: `Basic: A cataract is when the natural lens inside your eye becomes cloudy — like looking through fogged glass. It usually develops slowly with age.

What happens in the eye: Light must pass through a clear lens to focus on the retina. When the lens proteins clump and cloud, images become blurry, colours look dull, and night glare increases.

Advanced care at SARADA: We perform phacoemulsification — a minimally invasive procedure through a tiny incision (about 2.2 mm). Ultrasound softens and removes the cloudy lens, then we implant a clear intraocular lens (IOL). Using the Alcon Centurion system and Zeiss Lumera 700 microscope, surgery is typically completed in about 15 minutes with same-day discharge. Premium IOLs can also reduce dependence on glasses for distance, near, and intermediate vision based on your lifestyle.`,
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
      'Visual acuity testing to measure clarity of sight',
      'Slit-lamp examination of the lens under magnification',
      'Dilated retinal exam to check the back of the eye',
      'Biometry / IOL Master to calculate implant lens power',
      'OCT when needed to assess macular health before surgery',
    ],
    treatments: [
      {
        name: 'Phacoemulsification',
        desc: 'Gold-standard cataract removal through a tiny, usually stitchless incision with ultrasound and IOL implant.',
      },
      {
        name: 'Micro-incision cataract surgery (MICS)',
        desc: 'Even smaller incision technique for faster healing and reduced induced astigmatism in selected cases.',
      },
      {
        name: 'Femtosecond laser-assisted cataract surgery',
        desc: 'Computer-guided laser steps for highly precise cuts in suitable patients.',
      },
      {
        name: 'Premium intraocular lenses',
        desc: 'Multifocal, toric, or extended-depth-of-focus lenses customized to your visual needs.',
      },
    ],
    recovery:
      'Most patients go home the same day. Light activities often resume the next day. Eye drops continue for several weeks. Vision usually stabilizes over 2–4 weeks. Avoid heavy lifting and rubbing the eye until your surgeon clears you.',
    faq: [
      {
        q: 'Is cataract surgery painful?',
        a: 'No. Anaesthetic drops numb the eye. You may feel mild pressure, not pain. Sedation is available if you are anxious.',
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
  lasik: {
    name: 'LASIK & Refractive Surgery',
    subtitle: 'Freedom from Glasses',
    color: '#0284C7',
    icon: '✦',
    overview: `Basic: If light does not focus correctly on the retina, you need glasses or contacts for clear vision. This is called a refractive error (myopia, hyperopia, or astigmatism).

What happens in the eye: The cornea’s shape bends light. If it is too steep, flat, or irregular, images blur.

Advanced care at SARADA: After a full eligibility workup (topography, thickness, wavefront analysis, dry-eye checks), we reshape the cornea with the Wavelight EX500 excimer laser. Treatment time is often seconds per eye. If LASIK is not suitable, alternatives such as PRK or ICL may be discussed.`,
    symptoms: [
      'Dependence on glasses or contact lenses for clear vision',
      'Contact lens intolerance or dryness',
      'Glasses interfering with sports or outdoor work',
      'High myopia, hyperopia, or astigmatism',
      'Career or lifestyle needs that make glasses inconvenient',
    ],
    diagnosis: [
      'Precise refraction to measure your power',
      'Corneal topography to map corneal shape',
      'Pachymetry to measure corneal thickness',
      'Wavefront analysis for optical quality',
      'Dry-eye and retinal evaluation before planning surgery',
    ],
    treatments: [
      {
        name: 'LASIK',
        desc: 'A thin corneal flap is created and the underlying tissue is reshaped with laser for rapid visual recovery.',
      },
      {
        name: 'Wavefront-optimized LASIK',
        desc: 'Personalized laser pattern based on your eye’s unique optics.',
      },
      {
        name: 'PRK / surface ablation',
        desc: 'Flap-free option for thinner corneas; recovery is slower but outcomes are excellent.',
      },
      {
        name: 'ICL (implantable contact lens)',
        desc: 'An internal lens implant for very high prescriptions when laser is not ideal.',
      },
    ],
    recovery:
      'Many patients notice clearer vision within hours. Light work and driving often resume the next day after clearance. Eye drops continue for weeks. Full stabilization may take 1–3 months.',
    faq: [
      {
        q: 'Is LASIK safe?',
        a: 'When patients are carefully selected, LASIK has an excellent safety profile and is widely performed worldwide.',
      },
      {
        q: 'Who should avoid LASIK?',
        a: 'Thin or irregular corneas, unstable power, advanced dry eye, keratoconus, and pregnancy are common reasons to choose another option.',
      },
      {
        q: 'Are results permanent?',
        a: 'Corneal reshaping is long-lasting. Age-related near vision changes after 40 are separate and may still need reading help.',
      },
    ],
    cta: 'Book a free LASIK suitability evaluation.',
  },
  glaucoma: {
    name: 'Glaucoma Treatment',
    subtitle: 'Protecting the Optic Nerve',
    color: '#D97706',
    icon: '◐',
    overview: `Basic: Glaucoma is a group of diseases that damage the optic nerve — often linked to high eye pressure. Early stages usually have no symptoms, so regular checks matter.

What happens in the eye: Raised pressure or nerve vulnerability damages nerve fibres. Peripheral vision is lost first; untreated disease can lead to tunnel vision or blindness.

Advanced care at SARADA: We combine pressure measurement, optic-nerve OCT, visual fields, and angle assessment. Treatment may start with drops, progress to laser (such as SLT), or require surgery (trabeculectomy / tube shunt) to preserve remaining vision.`,
    symptoms: [
      'Often no early symptoms — silent progression',
      'Gradual loss of side vision',
      'Tunnel vision in advanced disease',
      'Halos around lights',
      'Severe eye pain, redness, nausea (acute angle-closure emergency)',
    ],
    diagnosis: [
      'Tonometry to measure eye pressure',
      'OCT of the optic nerve and nerve fibre layer',
      'Visual field testing for peripheral vision',
      'Gonioscopy to examine the drainage angle',
      'Pachymetry for corneal thickness',
    ],
    treatments: [
      {
        name: 'Medical therapy (eye drops)',
        desc: 'Daily drops lower pressure and are the first line for many patients.',
      },
      {
        name: 'SLT laser',
        desc: 'A quick clinic laser that improves drainage; can be repeated in selected cases.',
      },
      {
        name: 'Trabeculectomy',
        desc: 'Surgery that creates a new drainage pathway when medicines and laser are not enough.',
      },
      {
        name: 'Glaucoma drainage devices',
        desc: 'Implanted tubes for complex or advanced pressure control.',
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
    name: 'Retina Services',
    subtitle: 'Protecting Sight from Within',
    color: '#DC2626',
    icon: '◎',
    overview: `Basic: The retina is the thin light-sensing layer at the back of the eye. When it is damaged, images cannot be formed properly.

What happens in the eye: Diabetes, ageing, tears, or detachment disrupt retinal cells and blood vessels. Symptoms may include floaters, flashes, shadows, or sudden blur.

Advanced care at SARADA: High-resolution OCT, fundus imaging, laser therapy, anti-VEGF injections, and vitrectomy surgery help diagnose and treat diabetic retinopathy, macular disease, and retinal detachment early.`,
    symptoms: [
      'New floaters or cobweb-like spots',
      'Flashes of light in the side vision',
      'A curtain or shadow over part of vision',
      'Sudden blur or distortion of straight lines',
      'Gradual vision loss in people with diabetes',
    ],
    diagnosis: [
      'Dilated fundus examination',
      'OCT imaging of retinal layers',
      'Fluorescein angiography when vessel detail is needed',
      'B-scan ultrasound if the view is cloudy',
      'OCT angiography in selected macular cases',
    ],
    treatments: [
      {
        name: 'Anti-VEGF injections',
        desc: 'Medicines injected into the eye to control swelling and abnormal vessels in macular and diabetic disease.',
      },
      {
        name: 'Retinal laser',
        desc: 'Focal, grid, or pan-retinal laser to seal leaks or reduce high-risk diabetic changes.',
      },
      {
        name: 'Vitrectomy',
        desc: 'Microsurgery to repair detachment, remove blood, or treat complex vitreoretinal disease.',
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
    overview: `Basic: The cornea is the clear front surface of the eye. If it scars, thins, or becomes irregular, vision suffers.

What happens in the eye: Infection, injury, keratoconus, or endothelial failure distort how light enters the eye.

Advanced care at SARADA: We use topography and specialized exams to stage disease, then treat with medicines, corneal crosslinking (CXL) for keratoconus, or partial/full-thickness transplant techniques when needed.`,
    symptoms: [
      'Progressive blur not fully corrected by glasses',
      'Light sensitivity and glare',
      'Eye pain, redness, or watering',
      'Frequent power changes',
      'Halos around lights',
    ],
    diagnosis: [
      'Slit-lamp biomicroscopy',
      'Corneal topography (shape mapping)',
      'Pachymetry for thickness',
      'Specular microscopy for endothelial cells when indicated',
    ],
    treatments: [
      {
        name: 'Medical therapy',
        desc: 'Infection, inflammation, and surface disease are treated with targeted medicines first.',
      },
      {
        name: 'Corneal crosslinking (CXL)',
        desc: 'Strengthens the cornea to slow or stop keratoconus progression.',
      },
      {
        name: 'Partial-thickness transplant (DSEK/DMEK)',
        desc: 'Replaces only the diseased inner layer for faster recovery in suitable cases.',
      },
      {
        name: 'Full-thickness transplant (PKP)',
        desc: 'Replaces the entire corneal button when deeper scarring or advanced disease is present.',
      },
    ],
    recovery:
      'CXL usually has days to weeks of discomfort. Transplant recovery ranges from weeks to many months and requires careful follow-up and protective care.',
    faq: [
      {
        q: 'Can keratoconus patients have LASIK?',
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
    overview: `Basic: Dry eye means your tears are insufficient or of poor quality, so the eye surface becomes irritated.

What happens in the eye: Screens, air-conditioning, ageing, and blocked oil glands (meibomian gland dysfunction) destabilize the tear film.

Advanced care at SARADA: We test tear production, breakup time, inflammation, and gland health (meibography), then build a plan with medicines, lid therapy, IPL, LLLT, or punctal plugs.`,
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
      'Inflammation and osmolarity tests when needed',
    ],
    treatments: [
      {
        name: 'Medical & lid care',
        desc: 'Lubricants, anti-inflammatory therapy, warm compresses, and lid hygiene for foundational relief.',
      },
      {
        name: 'IPL therapy',
        desc: 'Intense pulsed light to improve gland function and reduce inflammation in selected patients.',
      },
      {
        name: 'LLLT',
        desc: 'Low-level light therapy supporting surface healing and comfort.',
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
    overview: `Basic: A child’s vision system is still learning. Problems missed early can become permanent.

What happens in the eye: Uncorrected power, squint, or lazy eye can stop one eye from developing clear vision pathways in the brain.

Advanced care at SARADA: We screen for refractive errors, amblyopia, squint, congenital cataract/glaucoma, and tear-duct blockage — then treat with glasses, patching, therapy, or surgery while the visual system can still improve.`,
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
      'Cycloplegic refraction for true power',
      'Squint and binocular vision assessment',
      'Dilated retinal examination when indicated',
    ],
    treatments: [
      {
        name: 'Glasses',
        desc: 'Often the first and most important step for clear focused vision.',
      },
      {
        name: 'Patching / amblyopia therapy',
        desc: 'Strengthens the weaker eye during the critical developmental window.',
      },
      {
        name: 'Vision therapy',
        desc: 'Guided exercises for tracking, focusing, and binocular skills.',
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
    overview: `Basic: Squint (strabismus) means the eyes do not point in the same direction.

What happens in the eye: Misalignment can cause double vision, reduced depth perception, or lazy eye in children. Adults may seek functional relief and cosmetic alignment.

Advanced care at SARADA: We assess muscle balance and binocular vision, then treat with glasses, prisms, vision therapy, or eye-muscle surgery using modern techniques.`,
    symptoms: [
      'Visible eye turn inward, outward, up, or down',
      'Double vision (more common in adults)',
      'Closing one eye to see clearly',
      'Head posture to compensate',
      'Eye strain and headaches',
    ],
    diagnosis: [
      'Cover and prism tests for alignment',
      'Ocular motility assessment',
      'Sensory evaluation of binocular vision',
      'Amblyopia screening in children',
    ],
    treatments: [
      {
        name: 'Glasses / prism correction',
        desc: 'Can straighten refractive squint or ease double vision.',
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
