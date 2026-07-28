/** Flyer-style easy explanations + visuals for each treatment page */

export interface TreatmentExtras {
  headline: string;
  promise: string;
  simpleWhat: string;
  simpleFeel: string;
  simpleFix: string;
  highlights: string[];
  features: { label: string; hint: string }[];
  image: string;
  lifestyleImage?: string;
  lifestyleCaption: string;
  /** Smart story (used on detail pages except glaucoma) */
  metaphorTitle: string;
  metaphorBody: string;
  storySteps: { title: string; body: string }[];
  compareGood: { label: string; title: string; body: string };
  compareBad: { label: string; title: string; body: string };
  whoShould: { title: string; body: string }[];
  hubBlurb: string;
  whenToSee: string;
}

export const treatmentExtras: Record<string, TreatmentExtras> = {
  cataract: {
    headline: 'Clear Vision Again — Life Without Foggy Eyes',
    promise: 'SAFE · PAINLESS · PRECISE',
    simpleWhat:
      'A cataract means the natural lens inside your eye becomes cloudy — like looking through fogged glass. It usually grows slowly with age.',
    simpleFeel:
      'You may notice blurry vision, dull colours, glare from headlights at night, or glasses that no longer help enough.',
    simpleFix:
      'We remove the cloudy lens through a tiny opening and place a clear premium lens (IOL) inside. Most people go home the same day.',
    highlights: [
      'Safe & painless cataract operation',
      'Premium lens options for clearer far & near vision',
      'Advanced technology & experienced specialists',
      'Fast recovery — better vision, better life',
      'Usually no stitch and no injection for many patients',
    ],
    features: [
      { label: 'No Stitch', hint: 'Tiny opening that heals fast' },
      { label: 'No Injection*', hint: 'Numbing drops for comfort' },
      { label: 'Quick Recovery', hint: 'Often back to light work soon' },
      { label: 'Premium Lens', hint: 'Options for clearer everyday vision' },
    ],
    image: '/images/treatment-cataract.png',
    lifestyleImage: '/images/cataract-lifestyle.png',
    lifestyleCaption: 'Clearer reading, driving, and daily life after cataract care',
    metaphorTitle: 'Think of a camera with a foggy lens',
    metaphorBody:
      'Your natural lens should be clear — like a clean camera lens. When a cataract forms, that lens turns cloudy. Light cannot pass cleanly, so the picture looks dull and soft.',
    storySteps: [
      { title: 'We check how cloudy it is', body: 'Simple vision tests and a microscope exam show how much the lens has clouded.' },
      { title: 'We plan the right lens', body: 'Biometry measures your eye so the new premium lens matches your lifestyle needs.' },
      { title: 'We replace the cloudy lens', body: 'Through a tiny opening we remove the cataract and place a clear IOL.' },
      { title: 'You heal quickly', body: 'Most people go home the same day and notice clearer vision within days.' },
    ],
    compareGood: {
      label: 'After care',
      title: 'Bright, clear everyday sight',
      body: 'Colours look richer. Reading and night driving feel safer again.',
    },
    compareBad: {
      label: 'With cataract',
      title: 'Foggy, yellowed vision',
      body: 'Like looking through frosted glass — glare, dull colours, and glasses that stop helping.',
    },
    whoShould: [
      { title: 'Age 50+', body: 'Cataracts become more common as we grow older.' },
      { title: 'Night glare', body: 'Headlights scatter and make driving uncomfortable.' },
      { title: 'Glasses not enough', body: 'Even a new power does not make things sharp.' },
      { title: 'Diabetes history', body: 'Ask for a full check — cataracts can appear earlier.' },
    ],
    hubBlurb: 'Cloudy natural lens → clear premium lens. Safe, usually stitchless, same-day home.',
    whenToSee: 'Glasses no longer help, night glare, or reading feels unsafe.',
  },
  lasik: {
    headline: 'Freedom from Glasses — Clear Vision for Active Life',
    promise: 'FAST · PRECISE · PERSONALISED',
    simpleWhat:
      'If the front of your eye (cornea) does not bend light correctly, things look blurry without glasses. This is called a power problem.',
    simpleFeel:
      'You depend on glasses or contacts for school, work, sports, or driving — and want clearer vision without them.',
    simpleFix:
      'After careful tests, a laser gently reshapes the cornea so light focuses clearly. If LASIK is not right for you, we explain safer alternatives.',
    highlights: [
      'Detailed suitability tests before any laser',
      'Quick procedure — often seconds per eye',
      'Many people notice clearer vision within hours',
      'Alternatives available if LASIK is not suitable',
    ],
    features: [
      { label: 'Full Evaluation', hint: 'Thickness, shape & power checks' },
      { label: 'Laser Precision', hint: 'Computer-guided reshaping' },
      { label: 'Fast Recovery', hint: 'Often next-day clarity' },
      { label: 'Other Options', hint: 'PRK / ICL when needed' },
    ],
    image: '/images/treatment-lasik.png',
    lifestyleImage: '/images/lasik-lifestyle.png',
    lifestyleCaption: 'Active life with less dependence on spectacles',
    metaphorTitle: 'Think of focusing a camera lens',
    metaphorBody:
      'If the cornea (front window) is shaped a little too steep or flat, light misses the perfect focus point. Glasses fix it temporarily. Laser reshapes the window so focus happens naturally.',
    storySteps: [
      { title: 'Full suitability tests', body: 'We check thickness, shape, dryness, and power — not everyone is a LASIK candidate.' },
      { title: 'Personalised plan', body: 'If LASIK is right, we plan the exact reshape. If not, we discuss PRK or ICL.' },
      { title: 'Gentle laser reshape', body: 'The laser works in seconds per eye with numbing drops for comfort.' },
      { title: 'Quick recovery', body: 'Many people notice clearer vision within hours and resume light work soon.' },
    ],
    compareGood: {
      label: 'Goal',
      title: 'Clearer — freer from spectacles',
      body: 'Sports, travel, and daily life feel easier when power is corrected safely.',
    },
    compareBad: {
      label: 'Without correction',
      title: 'Blur without glasses',
      body: 'Distance or near objects stay soft unless you wear spectacles or contacts.',
    },
    whoShould: [
      { title: 'Stable power', body: 'Spectacle number should be stable for about a year.' },
      { title: 'Active lifestyle', body: 'Sports, travel, or work where glasses feel limiting.' },
      { title: 'Adult age', body: 'Usually after 18, with healthy corneas on testing.' },
      { title: 'Want options', body: 'Even if LASIK is not right, we explain safer alternatives.' },
    ],
    hubBlurb: 'Laser reshapes the cornea so light focuses clearly — after full safety tests.',
    whenToSee: 'You want freedom from glasses after a detailed suitability evaluation.',
  },
  retina: {
    headline: 'Protect the Camera of Your Eye',
    promise: 'EARLY CHECK · PRECISE CARE · SIGHT SAVING',
    simpleWhat:
      'The retina is like the camera film at the back of your eye. It turns light into pictures for the brain.',
    simpleFeel:
      'New floaters, flashes, a dark curtain, sudden blur, or diabetes-related vision changes need urgent attention.',
    simpleFix:
      'We use detailed scans (like OCT), then treat with laser, injections, or microsurgery — chosen for your exact problem.',
    highlights: [
      'Urgent care for flashes, floaters & curtains',
      'Special care for diabetic eye disease',
      'Advanced imaging to see retinal layers clearly',
      'Laser, injections, or surgery when needed',
    ],
    features: [
      { label: 'OCT Scans', hint: 'See retina layers in detail' },
      { label: 'Laser Care', hint: 'Seal leaks & protect sight' },
      { label: 'Injections', hint: 'Reduce swelling safely' },
      { label: 'Microsurgery', hint: 'Repair detachment when needed' },
    ],
    image: '/images/treatment-retina.png',
    lifestyleImage: '/images/doctor-retina.png',
    lifestyleCaption: 'Early retina care protects the sight you still have',
    metaphorTitle: 'Think of the film inside a camera',
    metaphorBody:
      'If the film is damaged, no camera body can create a clear photo. The retina is that film. Diabetes, tears, or detachment can harm it quickly — early care protects sight.',
    storySteps: [
      { title: 'Dilated retina check', body: 'We look at the back of the eye in detail after gentle dilating drops.' },
      { title: 'OCT / imaging', body: 'Scans show layers and swelling that the naked eye cannot see.' },
      { title: 'Targeted treatment', body: 'Laser, injections, or microsurgery — chosen for your exact finding.' },
      { title: 'Protect & follow up', body: 'Especially important if you have diabetes or sudden new symptoms.' },
    ],
    compareGood: {
      label: 'Protected retina',
      title: 'Stable, usable vision',
      body: 'Early treatment helps keep the “camera film” healthy and working.',
    },
    compareBad: {
      label: 'Warning signs',
      title: 'Floaters, flashes, curtain',
      body: 'These can mean a tear or detachment — do not wait for it to “settle”.',
    },
    whoShould: [
      { title: 'Sudden floaters', body: 'New spots, cobwebs, or flashes need same-day advice.' },
      { title: 'Dark curtain', body: 'A shadow rising over vision is an emergency.' },
      { title: 'Diabetes', body: 'Yearly retina checks even if vision feels fine.' },
      { title: 'Sudden distortion', body: 'Straight lines looking wavy need macular evaluation.' },
    ],
    hubBlurb: 'The eye’s camera film — OCT, laser, injections & microsurgery when needed.',
    whenToSee: 'Floaters, flashes, curtain over vision, or diabetes with blur.',
  },
  cornea: {
    headline: 'Keep the Window of Your Eye Clear',
    promise: 'DIAGNOSE · PROTECT · RESTORE',
    simpleWhat:
      'The cornea is the clear front window of your eye. If it gets infected, thin, scarred, or cone-shaped, vision becomes blurry.',
    simpleFeel:
      'Light sensitivity, pain, redness, changing spectacle power, or distorted vision are common warning signs.',
    simpleFix:
      'We map the cornea, treat infection or surface disease with medicines, strengthen weak corneas, or transplant only the damaged layer when needed.',
    highlights: [
      'Clear explanation of which cornea layer is affected',
      'Medicines first whenever safe',
      'Crosslinking to stop keratoconus progression',
      'Modern transplant options for advanced disease',
    ],
    features: [
      { label: 'Topography', hint: 'Shape map of the cornea' },
      { label: 'Medical Care', hint: 'Infection & surface treatment' },
      { label: 'Crosslinking', hint: 'Strengthen weak cornea' },
      { label: 'Transplant', hint: 'Replace only what is damaged' },
    ],
    image: '/images/treatment-cornea.png',
    lifestyleImage: '/images/treatment-cornea.png',
    lifestyleCaption: 'A healthy cornea means sharper, more comfortable vision',
    metaphorTitle: 'Think of a clear glass window',
    metaphorBody:
      'If the front window of your eye becomes scratched, fogged, infected, or cone-shaped, the whole view becomes distorted — even if the camera inside is fine.',
    storySteps: [
      { title: 'Map the surface', body: 'Topography shows the exact shape and thin spots of the cornea.' },
      { title: 'Treat the cause', body: 'Infection and surface disease often start with medicines and careful follow-up.' },
      { title: 'Strengthen if weak', body: 'Crosslinking can stop keratoconus from getting worse in suitable cases.' },
      { title: 'Replace only if needed', body: 'Modern transplants can replace only the damaged layer when required.' },
    ],
    compareGood: {
      label: 'Clear window',
      title: 'Sharp, comfortable focus',
      body: 'Light enters cleanly — vision feels crisp and less strained.',
    },
    compareBad: {
      label: 'Damaged window',
      title: 'Pain, glare, distortion',
      body: 'Redness, light fear, or changing power can mean the cornea needs urgent care.',
    },
    whoShould: [
      { title: 'Red painful eye', body: 'Especially with light sensitivity — do not ignore.' },
      { title: 'Changing power', body: 'Spectacle number keeps changing quickly.' },
      { title: 'Keratoconus family', body: 'Cone-shaped cornea can run in families — early mapping helps.' },
      { title: 'Contact lens pain', body: 'Sudden intolerance or infection signs need a check.' },
    ],
    hubBlurb: 'Clear front window care — infection, keratoconus, crosslinking & transplant.',
    whenToSee: 'Pain with light, redness, sudden blur, or rapidly changing power.',
  },
  glaucoma: {
    headline: 'Stop the Silent Thief of Sight',
    promise: 'DETECT EARLY · PROTECT NERVE · LIFELONG CARE',
    simpleWhat:
      'Glaucoma damages the optic nerve — the cable that carries pictures from your eye to the brain. Early stages often have no pain and no warning.',
    simpleFeel:
      'Side vision may slowly shrink. Some people only notice when reading, walking, or driving feels harder. Sudden pain with nausea is an emergency — call us at once.',
    simpleFix:
      'We measure eye pressure, scan the optic nerve, and test side vision. Then we protect what remains with drops, laser, or surgery — matched to your stage.',
    highlights: [
      'Early checks catch glaucoma before vision is lost',
      'Lost optic-nerve fibres cannot grow back — so we act early',
      'Gentle pressure tests, OCT nerve scans & field maps',
      'Drops, SLT laser, or surgery based on your needs',
      'Clear lifelong plan with regular follow-up',
    ],
    features: [
      { label: 'Pressure Test', hint: 'Quick & painless check' },
      { label: 'Nerve OCT', hint: 'See optic nerve health' },
      { label: 'Field Test', hint: 'Map side vision' },
      { label: 'Lifelong Plan', hint: 'Monitor & protect sight' },
    ],
    image: '/images/treatment-glaucoma.png',
    lifestyleImage: '/images/glaucoma-lifestyle.png',
    lifestyleCaption: 'Protect the vision you still have — with early, gentle glaucoma care',
    metaphorTitle: 'Think of your eye like a soft ball',
    metaphorBody:
      'Fluid comes in and drains out. If the drain is slow, pressure rises and can hurt the optic nerve cable.',
    storySteps: [
      { title: 'Measure pressure', body: 'Quick gentle test.' },
      { title: 'Scan the nerve', body: 'OCT shows fibre health.' },
      { title: 'Map side vision', body: 'Field test draws your vision map.' },
      { title: 'Protect remaining sight', body: 'Drops, laser, or surgery.' },
    ],
    compareGood: {
      label: 'Healthy vision',
      title: 'Full, clear view',
      body: 'Centre and sides stay usable.',
    },
    compareBad: {
      label: 'Untreated risk',
      title: 'Tunnel vision',
      body: 'Side vision shrinks quietly.',
    },
    whoShould: [
      { title: 'Age 40+', body: 'Risk rises with age.' },
      { title: 'Family history', body: 'Check sooner.' },
      { title: 'Diabetes / steroids', body: 'Can raise pressure.' },
      { title: 'Sudden pain + nausea', body: 'Emergency — call now.' },
    ],
    hubBlurb: 'Silent thief of sight — pressure, nerve OCT & lifelong protection.',
    whenToSee: 'After 40, family history, or any tunnel-vision / emergency pain.',
  },
  pediatric: {
    headline: 'Healthy Eyes for Growing Children',
    promise: 'GENTLE · EARLY · CHILD-FRIENDLY',
    simpleWhat:
      'A child’s brain is still learning to see. If one eye is weak, turned, or needs glasses, early care can permanently improve vision.',
    simpleFeel:
      'Sitting too close to books, head tilting, squinting, school board difficulty, or an eye that turns are common clues.',
    simpleFix:
      'We check vision gently, give glasses when needed, start patching for lazy eye, and operate only if necessary — while the visual system can still improve.',
    highlights: [
      'Child-friendly examinations',
      'Glasses & patching explained simply for parents',
      'Squint and lazy-eye care at the right age',
      'School-readiness vision screening',
    ],
    features: [
      { label: 'Gentle Exam', hint: 'Age-right testing' },
      { label: 'Glasses First', hint: 'Clear focus for learning' },
      { label: 'Lazy Eye Care', hint: 'Patching while it still works' },
      { label: 'Family Guidance', hint: 'Simple home plans' },
    ],
    image: '/images/treatment-pediatric.png',
    lifestyleImage: '/images/treatment-pediatric.png',
    lifestyleCaption: 'Early eye care helps children learn and play with confidence',
    metaphorTitle: 'Think of a brain still learning to see',
    metaphorBody:
      'In childhood, the brain practices seeing. If one eye sends a weak picture, the brain may ignore it. Early glasses or patching can retrain the brain while it is still flexible.',
    storySteps: [
      { title: 'Gentle age-right tests', body: 'We check vision in a calm, child-friendly way.' },
      { title: 'Glasses when needed', body: 'Clear focus helps learning and stops lazy-eye risk.' },
      { title: 'Patching / therapy', body: 'Strengthens the weaker eye during the critical window.' },
      { title: 'Surgery only if needed', body: 'Squint or other procedures are planned carefully with parents.' },
    ],
    compareGood: {
      label: 'Early care',
      title: 'Confident learning & play',
      body: 'Clear vision supports school, sports, and confidence.',
    },
    compareBad: {
      label: 'Missed early signs',
      title: 'Lazy eye risk',
      body: 'Waiting too long can make permanent improvement harder.',
    },
    whoShould: [
      { title: 'Before school', body: 'A vision check helps learning readiness.' },
      { title: 'Eye turning', body: 'Any squint needs early evaluation.' },
      { title: 'Sitting too close', body: 'Books or screens held very near can be a clue.' },
      { title: 'Family concern', body: 'If teachers notice board difficulty, book a check.' },
    ],
    hubBlurb: 'Gentle child eye care — glasses, lazy eye, squint & school screening.',
    whenToSee: 'By age 3, before school, or sooner if an eye turns.',
  },
  squint: {
    headline: 'Straight Eyes. Confident Vision.',
    promise: 'ALIGN · STRENGTHEN · CONFIDENCE',
    simpleWhat:
      'Squint means the eyes do not look in the same direction. One eye may turn in, out, up, or down.',
    simpleFeel:
      'People may notice a turned eye, double vision, head tilt, eye strain, or a child closing one eye to see clearly.',
    simpleFix:
      'We measure the turn carefully, then use glasses, prisms, exercises, or muscle surgery to align the eyes.',
    highlights: [
      'Care for children and adults',
      'Glasses or prisms when they help',
      'Surgery planned with clear before/after expectations',
      'Helps both function and appearance',
    ],
    features: [
      { label: 'Alignment Test', hint: 'Exact measure of turn' },
      { label: 'Glasses / Prism', hint: 'Non-surgical options first' },
      { label: 'Therapy', hint: 'Improve teamwork of eyes' },
      { label: 'Surgery', hint: 'Reposition eye muscles' },
    ],
    image: '/images/treatment-squint.png',
    lifestyleImage: '/images/treatment-squint.png',
    lifestyleCaption: 'Aligned eyes support clearer, more comfortable vision',
    metaphorTitle: 'Think of two cameras that must point together',
    metaphorBody:
      'Your brain wants one clear picture from both eyes. If one eye turns, the pictures do not match — causing double vision, strain, or a lazy eye in children.',
    storySteps: [
      { title: 'Measure the turn', body: 'Exact tests show how much and which way the eye turns.' },
      { title: 'Try glasses / prisms', body: 'Some turns improve with optical correction first.' },
      { title: 'Therapy when useful', body: 'Exercises can improve teamwork of the two eyes.' },
      { title: 'Align with surgery if needed', body: 'Muscle surgery repositions the eyes with a clear plan.' },
    ],
    compareGood: {
      label: 'Aligned eyes',
      title: 'One team, one picture',
      body: 'Better comfort, depth sense, and confidence in photos and daily life.',
    },
    compareBad: {
      label: 'Misaligned eyes',
      title: 'Turn, strain, or double vision',
      body: 'One eye drifts — the brain struggles to merge two different views.',
    },
    whoShould: [
      { title: 'Visible eye turn', body: 'In children or adults — early check is best.' },
      { title: 'Double vision', body: 'Seeing two images needs prompt evaluation.' },
      { title: 'Head tilt', body: 'Compensating postures can hide a squint.' },
      { title: 'Adult onset', body: 'New squint in adults needs medical assessment.' },
    ],
    hubBlurb: 'Eye alignment for children & adults — glasses, therapy, or surgery.',
    whenToSee: 'Any noticeable eye turn, head tilt, or double vision.',
  },
  'dry-eye': {
    headline: 'Comfortable Eyes for Screen Life',
    promise: 'FIND THE CAUSE · TREAT THE SURFACE · LASTING RELIEF',
    simpleWhat:
      'Dry eye means your tears are too few or poor in quality. The eye surface becomes irritated and vision may fluctuate.',
    simpleFeel:
      'Burning, gritty feeling, redness, watery eyes, blur on screens, or discomfort in AC rooms are common.',
    simpleFix:
      'We test tear quality and oil glands, then treat with drops, lid care, IPL/LLLT, or plugs — matched to the real cause.',
    highlights: [
      'Not just “buy any eye drop”',
      'Find whether glands, tears, or inflammation are the issue',
      'Advanced IPL / LLLT options when needed',
      'Practical screen-life advice for lasting comfort',
    ],
    features: [
      { label: 'Tear Tests', hint: 'Quantity & quality' },
      { label: 'Gland Check', hint: 'Oil layer health' },
      { label: 'IPL / LLLT', hint: 'Advanced surface therapy' },
      { label: 'Home Plan', hint: 'Simple daily care' },
    ],
    image: '/images/treatment-dry-eye.png',
    lifestyleImage: '/images/treatment-dry-eye.png',
    lifestyleCaption: 'Comfortable eyes make work, reading, and screens easier',
    metaphorTitle: 'Think of a windscreen that needs washer fluid',
    metaphorBody:
      'Tears are not only water — they need oil and mucus layers. If oil glands are blocked or tears evaporate too fast, the surface burns and vision flickers on screens.',
    storySteps: [
      { title: 'Find the real cause', body: 'We test tear quantity, oil glands, and surface inflammation.' },
      { title: 'Match the treatment', body: 'Not every dry eye needs the same drop.' },
      { title: 'Advanced options', body: 'IPL / LLLT and plugs when simple care is not enough.' },
      { title: 'Home habits that help', body: 'Blink breaks, lid hygiene, and AC/screen tips for lasting comfort.' },
    ],
    compareGood: {
      label: 'Comfortable surface',
      title: 'Steady, soothed vision',
      body: 'Screens and AC rooms feel easier; burning and grit settle down.',
    },
    compareBad: {
      label: 'Dry surface',
      title: 'Burn, grit, fluctuating blur',
      body: 'Eyes water (ironically), sting, and tire quickly on devices.',
    },
    whoShould: [
      { title: 'Long screen hours', body: 'Office and study work often reduce blinking.' },
      { title: 'AC / travel', body: 'Dry air worsens evaporative dry eye.' },
      { title: 'Contact lens users', body: 'Discomfort may mean surface disease.' },
      { title: 'Drops not helping', body: 'Random pharmacy drops may miss the real cause.' },
    ],
    hubBlurb: 'Find the real cause of burning eyes — tears, glands, IPL & home plans.',
    whenToSee: 'Burning, grit, screen blur, or drops that stop working.',
  },
};
