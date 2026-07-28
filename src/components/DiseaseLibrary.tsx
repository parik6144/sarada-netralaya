    'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Eye, AlertTriangle, ShieldCheck, Stethoscope, Syringe, Pill, Activity, Heart, Scan, Droplets, Baby, Brain, CircleDot, ThermometerSun, ChevronRight, ArrowLeft } from 'lucide-react';

interface Disease {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  iconBg: string;
  shortDesc: string;
  overview: string;
  symptoms: string[];
  causes: string[];
  riskFactors: string[];
  diagnosis: string[];
  treatment: string[];
  prevention: string[];
  whenToSee: string;
  doctor: string;
}

const diseases: Disease[] = [
  {
    id: 'cataract',
    name: 'Cataract',
    icon: Eye,
    color: 'text-brand-red',
    iconBg: 'bg-brand-red/10',
    shortDesc: 'Clouding of the eye\'s natural lens causing progressive vision loss, most common in people over 40.',
    overview: 'A cataract is a clouding of the normally clear lens of the eye. For people who have cataracts, seeing through cloudy lenses is a bit like looking through a frosty or fogged-up window. Clouded vision caused by cataracts can make it more difficult to read, drive a car (especially at night) or see the expression on a friend\'s face. Cataracts are the leading cause of vision loss in people over age 40 and the principal cause of blindness in the world. At SARADA Netralaya, we perform advanced phacoemulsification surgery with premium IOL implants, restoring clear vision with minimal downtime.',
    symptoms: ['Blurry or cloudy vision', 'Difficulty seeing at night', 'Sensitivity to light and glare', 'Seeing "halos" around lights', 'Frequent changes in eyeglass prescription', 'Fading or yellowing of colors', 'Double vision in one eye'],
    causes: ['Aging - natural protein breakdown in the lens', 'Diabetes mellitus', 'Exposure to UV radiation', 'Smoking and alcohol consumption', 'Previous eye injury or inflammation', 'Prolonged use of corticosteroid medications', 'Family history of cataracts'],
    riskFactors: ['Age above 60 years', 'Diabetes', 'Excessive sunlight exposure', 'Obesity', 'High blood pressure', 'Previous eye surgery', 'Smoking'],
    diagnosis: ['Visual acuity test (Snellen chart)', 'Slit-lamp examination', 'Retinal exam with dilated pupils', 'Tonometry to measure eye pressure', 'Optical coherence tomography (OCT)'],
    treatment: ['Phacoemulsification surgery (stitch-less, painless)', 'Premium IOL implantation (Toric, Multifocal, EDOF)', 'Laser-assisted cataract surgery', 'Post-operative care and follow-up'],
    prevention: ['Wear UV-protective sunglasses outdoors', 'Manage diabetes and blood pressure', 'Quit smoking', 'Eat a diet rich in antioxidants', 'Get regular eye exams after age 50'],
    whenToSee: 'If you notice gradual blurring of vision, difficulty driving at night, or colors appearing faded, schedule an appointment immediately. Cataracts worsen over time and early intervention ensures better outcomes.',
    doctor: 'Dr. Nitin G. Dhira',
  },
  {
    id: 'glaucoma',
    name: 'Glaucoma',
    icon: AlertTriangle,
    color: 'text-brand-blue',
    iconBg: 'bg-brand-blue/10',
    shortDesc: 'Silent thief of sight - damage to the optic nerve often caused by high eye pressure, leading to irreversible vision loss.',
    overview: 'Glaucoma is a group of eye conditions that damage the optic nerve, the health of which is vital for good vision. This damage is often caused by abnormally high pressure in your eye. Glaucoma is one of the leading causes of blindness for people over the age of 60. It can occur at any age but is more common in older adults. Many forms of glaucoma have no warning signs and the effect is so gradual that you may not notice a change in vision until the condition is at an advanced stage. That\'s why regular eye exams are crucial at SARADA Netralaya — early detection can prevent significant vision loss.',
    symptoms: ['No symptoms in early stages (silent disease)', 'Gradual loss of peripheral (side) vision', 'Tunnel vision in advanced stages', 'Severe eye pain (acute angle-closure)', 'Nausea and vomiting with eye pain', 'Sudden blurred vision', 'Seeing rainbow-colored halos around lights'],
    causes: ['Elevated intraocular pressure (IOP)', 'Damage to the optic nerve fibers', 'Poor blood flow to the optic nerve', 'Blocked drainage canals in the eye', 'Thin corneas', 'Optic nerve sensitivity'],
    riskFactors: ['Age above 40 (especially 60+)', 'Family history of glaucoma', 'High eye pressure', 'Diabetes, heart disease, or high BP', 'Extreme nearsightedness or farsightedness', 'Long-term corticosteroid use', 'Eye injury'],
    diagnosis: ['Tonometry (eye pressure measurement)', 'Ophthalmoscopy (optic nerve examination)', 'Perimetry (visual field test)', 'Gonioscopy (drainage angle exam)', 'Optical coherence tomography (OCT) of the optic nerve', 'Pachymetry (corneal thickness measurement)'],
    treatment: ['Prescription eye drops to lower IOP', 'Laser trabeculoplasty (SLT/ALT)', 'Minimally invasive glaucoma surgery (MIGS)', 'Trabeculectomy for advanced cases', 'Regular monitoring and follow-up'],
    prevention: ['Get comprehensive dilated eye exams every 1-2 years', 'Know your family eye health history', 'Exercise safely (moderate aerobic)', 'Use prescribed eye drops regularly', 'Protect eyes from injury with eyewear'],
    whenToSee: 'If you have a family history of glaucoma, are over 40, or experience sudden eye pain, blurred vision, or halos around lights, seek immediate evaluation. Early treatment can save your vision.',
    doctor: 'Dr. Nitin G. Dhira',
  },
  {
    id: 'diabetic-retinopathy',
    name: 'Diabetic Retinopathy',
    icon: ThermometerSun,
    color: 'text-brand-red',
    iconBg: 'bg-brand-red/10',
    shortDesc: 'Diabetes-related damage to retinal blood vessels that can lead to blindness if undetected and untreated.',
    overview: 'Diabetic retinopathy is a diabetes complication that affects eyes. It is caused by damage to the blood vessels of the light-sensitive tissue at the back of the eye (retina). At first, diabetic retinopathy may cause no symptoms or only mild vision problems. Eventually, it can cause blindness. The condition can develop in anyone who has type 1 or type 2 diabetes. The longer you have diabetes and the less controlled your blood sugar is, the more likely you are to develop this eye complication. At SARADA, we have specialized retinal imaging and treatment protocols to detect and manage diabetic eye disease at every stage.',
    symptoms: ['Spots or dark strings floating in vision (floaters)', 'Blurred vision', 'Fluctuating vision', 'Dark or empty areas in vision', 'Vision loss', 'Difficulty seeing colors'],
    causes: ['Chronic high blood sugar damaging retinal blood vessels', 'High blood pressure worsening vessel damage', 'Swelling of the macula (diabetic macular edema)', 'Abnormal new blood vessel growth (neovascularization)', 'Vitreous hemorrhage'],
    riskFactors: ['Duration of diabetes (longer = higher risk)', 'Poor blood sugar control', 'High blood pressure', 'High cholesterol', 'Pregnancy', 'Smoking', 'Kidney disease'],
    diagnosis: ['Dilated eye exam with fundus photography', 'Optical coherence tomography (OCT)', 'Fluorescein angiography', 'Optical coherence tomography angiography (OCTA)', 'Ultrasound (B-scan) if vitreous hemorrhage'],
    treatment: ['Blood sugar and BP control (first-line)', 'Anti-VEGF injections (Lucentis, Eylea, Avastin)', 'Laser photocoagulation', 'Vitrectomy surgery for advanced cases', 'Dexamethasone implant (Ozurdex)', 'Regular screening every 6 months'],
    prevention: ['Strict blood sugar management (HbA1c < 7%)', 'Control blood pressure and cholesterol', 'Regular eye screening at least yearly', 'Quit smoking', 'Exercise and healthy diet', 'Monitor kidney function'],
    whenToSee: 'If you have diabetes, you MUST get your eyes checked at least once a year, even if vision seems fine. Any sudden vision changes, floaters, or blurred vision need immediate attention.',
    doctor: 'Dr. Nitin G. Dhira',
  },
  {
    id: 'retina',
    name: 'Retinal Disorders',
    icon: Scan,
    color: 'text-brand-blue',
    iconBg: 'bg-brand-blue/10',
    shortDesc: 'Comprehensive retinal conditions including retinal detachment, macular degeneration, and other vision-threatening disorders.',
    overview: 'The retina is a thin layer of tissue that lines the back of the eye on the inside. It is located near the optic nerve. The purpose of the retina is to receive light that the lens has focused, convert the light into neural signals, and send these signals on to the brain for visual recognition. Retinal disorders can affect vision severely and may lead to permanent blindness if not treated promptly. At SARADA Netralaya, our advanced retinal diagnostics including OCT, fundus angiography, and OCTA allow precise diagnosis and targeted treatment for all retinal conditions.',
    symptoms: ['Sudden appearance of many floaters', 'Flashes of light in one or both eyes', 'A dark shadow or curtain over vision', 'Blurred or distorted central vision', 'Loss of peripheral vision', 'Difficulty reading or recognizing faces'],
    causes: ['Retinal tears or detachment', 'Age-related macular degeneration (AMD)', 'Diabetic retinopathy', 'Retinal vein occlusion', 'Central serous retinopathy', 'Retinitis pigmentosa (genetic)'],
    riskFactors: ['Age above 50', 'Severe nearsightedness (myopia)', 'Diabetes', 'Previous eye surgery or trauma', 'Family history of retinal disease', 'Smoking', 'Cardiovascular disease'],
    diagnosis: ['Dilated fundus examination', 'Optical coherence tomography (OCT)', 'Fluorescein and ICG angiography', 'OCT Angiography (OCTA)', 'B-scan ultrasonography', 'Electroretinography (ERG)'],
    treatment: ['Laser photocoagulation', 'Anti-VEGF intravitreal injections', 'Vitrectomy surgery', 'Scleral buckling for detachment', 'Retinal cryotherapy', 'Photodynamic therapy for AMD'],
    prevention: ['Regular comprehensive eye exams', 'Control systemic conditions (diabetes, BP)', 'Wear protective eyewear during sports', 'Seek immediate care for flashes/floaters', 'Eat leafy greens and omega-3 rich foods', 'Do not ignore sudden vision changes'],
    whenToSee: 'Sudden flashes of light, a shower of new floaters, or a dark curtain coming over your vision are EMERGENCIES. Call our 24/7 emergency line immediately at 7091090014.',
    doctor: 'Dr. Nitin G. Dhira',
  },
  {
    id: 'cornea',
    name: 'Corneal Disorders',
    icon: CircleDot,
    color: 'text-brand-red',
    iconBg: 'bg-brand-red/10',
    shortDesc: 'Conditions affecting the clear front surface of the eye including infections, dystrophies, and keratoconus.',
    overview: 'The cornea is the transparent front part of the eye that covers the iris, pupil, and anterior chamber. Along with the anterior chamber and lens, the cornea refracts light, accounting for approximately two-thirds of the eye\'s total optical power. Corneal diseases can cause pain, redness, reduced vision, and in severe cases, blindness. SARADA Netralaya offers comprehensive corneal care including advanced corneal imaging, cross-linking for keratoconus, and corneal transplant surgery (penetrating and DSAEK) by our experienced cornea specialist.',
    symptoms: ['Eye pain or burning', 'Redness of the eye', 'Blurred or cloudy vision', 'Sensitivity to light (photophobia)', 'Excessive tearing or discharge', 'A feeling that something is in the eye', 'Halos around lights'],
    causes: ['Bacterial, viral, or fungal infections', 'Keratoconus (corneal thinning)', 'Corneal dystrophies (genetic)', 'Eye injuries or trauma', 'Contact lens complications', 'Dry eye disease', 'Autoimmune conditions'],
    riskFactors: ['Contact lens overwear or poor hygiene', 'Viral infections (herpes simplex)', 'Eye injuries', 'Family history of corneal dystrophy', 'Chronic eye inflammation', 'Vitamin A deficiency'],
    diagnosis: ['Slit-lamp biomicroscopy', 'Corneal topography', 'Pachymetry (corneal thickness)', 'Specular microscopy (endothelial cell count)', 'Corneal culture if infection suspected', 'Anterior segment OCT'],
    treatment: ['Antibiotic/antiviral/antifungal eye drops', 'Corneal collagen cross-linking (CXL) for keratoconus', 'Penetrating keratoplasty (full corneal transplant)', 'DSAEK/DMEK (partial thickness transplant)', 'Phototherapeutic keratectomy (PTK)', 'Rigid gas permeable contact lenses'],
    prevention: ['Practice good contact lens hygiene', 'Never sleep with contact lenses', 'Protect eyes with safety goggles', 'Treat eye infections promptly', 'Avoid sharing eye makeup or towels', 'Get regular eye checkups if you have risk factors'],
    whenToSee: 'Severe eye pain, sudden vision loss, or a visible white spot on the cornea needs URGENT evaluation. Delay in treatment of corneal infections can lead to permanent scarring and vision loss.',
    doctor: 'Dr. Nitish R. Bharadwaj',
  },
  {
    id: 'dry-eye',
    name: 'Dry Eye Syndrome',
    icon: Droplets,
    color: 'text-brand-blue',
    iconBg: 'bg-brand-blue/10',
    shortDesc: 'Chronic condition where eyes don\'t produce enough tears or the tears evaporate too quickly, causing discomfort.',
    overview: 'Dry eye disease is a common condition that occurs when your tears are not able to provide adequate lubrication for your eyes. Tears can be inadequate and unstable for many reasons. For example, dry eyes may occur if you do not produce enough tears or if you produce poor-quality tears. This tear instability leads to inflammation and damage of the eye surface. Dry eye is very common, especially in India due to climate, screen time, and pollution. At SARADA, we have advanced dry eye diagnostics including tear film analysis, meibography, and osmolarity testing to provide targeted treatment.',
    symptoms: ['Stinging, burning, or scratchy sensation', 'Stringy mucus in or around eyes', 'Sensitivity to light', 'Eye redness', 'A sensation of something in the eyes', 'Difficulty wearing contact lenses', 'Difficulty with nighttime driving', 'Watery eyes (reflex tearing)', 'Blurred vision that improves with blinking'],
    causes: ['Decreased tear production (aging, hormonal changes)', 'Increased tear evaporation (screen time, wind, dry air)', 'Meibomian gland dysfunction (MGD)', 'Medications (antihistamines, antidepressants, BP meds)', 'Autoimmune diseases (Sjogren\'s syndrome, RA)', 'Blepharitis (eyelid inflammation)', 'Vitamin A or omega-3 deficiency'],
    riskFactors: ['Age above 50', 'Being female (hormonal changes)', 'Prolonged computer/screen use', 'Wearing contact lenses', 'Dry environment (AC, low humidity)', 'LASIK or refractive surgery history', 'Autoimmune conditions'],
    diagnosis: ['Schirmer\'s test (tear production)', 'Tear breakup time (TBUT)', 'Ocular surface staining (fluorescein/lissamine green)', 'Meibography (gland imaging)', 'Tear osmolarity test', 'Inflammatory marker testing'],
    treatment: ['Artificial tears and lubricating eye drops', 'Preservative-free eye drops for frequent use', 'Warm compresses and lid hygiene', 'Punctal plugs to reduce tear drainage', 'Prescription eye drops (Cyclosporine/Lifitegrast)', 'Intense Pulsed Light (IPL) therapy', 'LipiFlow thermal pulsation', 'Serum autologous eye drops (severe cases)'],
    prevention: ['Follow 20-20-20 rule for screen use', 'Blink consciously and frequently', 'Use a humidifier in dry environments', 'Take omega-3 supplements', 'Stay hydrated (8+ glasses water/day)', 'Wear wraparound sunglasses outdoors', 'Avoid direct fan/AC airflow on face'],
    whenToSee: 'If dry eye symptoms persist despite over-the-counter drops, or if you experience pain, redness, or vision changes, schedule a comprehensive dry eye evaluation at SARADA.',
    doctor: 'Dr. Nitish R. Bharadwaj',
  },
  {
    id: 'allergy',
    name: 'Eye Allergy',
    icon: Activity,
    color: 'text-brand-red',
    iconBg: 'bg-brand-red/10',
    shortDesc: 'Allergic conjunctivitis causing itchy, red, and watery eyes triggered by allergens like pollen, dust, and pet dander.',
    overview: 'Eye allergies, also called allergic conjunctivitis, are quite common. They occur when the eyes react to something that irritates them (an allergen). The eyes produce a substance called histamine to fight off the allergen. As a result, the eyelids and conjunctiva become red, swollen, and itchy. The eyes can tear and burn. Unlike other kinds of conjunctivitis, eye allergies are not contagious. At SARADA Netralaya, we differentiate allergic conjunctivitis from infections and provide targeted treatment including antihistamine drops, mast cell stabilizers, and immunotherapy guidance.',
    symptoms: ['Intense itching of eyes', 'Redness in both eyes', 'Watery discharge (clear, not yellow/green)', 'Swollen eyelids', 'Burning sensation', 'Sensitivity to light', 'Gritty feeling in eyes', 'Puffy eyelids especially in morning'],
    causes: ['Pollen from trees, grass, and weeds', 'Dust mites', 'Pet dander (cats, dogs)', 'Mold spores', 'Perfumes and cosmetics', 'Certain eye drops (preservative sensitivity)', 'Smoke and air pollution'],
    riskFactors: ['Personal or family history of allergies', 'Having other allergic conditions (asthma, eczema)', 'Seasonal exposure (spring/fall pollen)', 'Living in dusty or humid environments', 'Using eye cosmetics frequently'],
    diagnosis: ['Clinical examination of the eye', 'Slit-lamp evaluation', 'Allergy testing (skin prick or blood test)', 'Tear film analysis', 'Review of environmental triggers'],
    treatment: ['Antihistamine eye drops (Olopatadine, Ketotifen)', 'Mast cell stabilizer drops', 'Combination antihistamine/mast cell drops', 'Oral antihistamines (Cetirizine, Allegra)', 'Cold compresses for symptom relief', 'Prescription steroid eye drops (severe cases)', 'Artificial tears to wash out allergens', 'Avoidance of identified allergens'],
    prevention: ['Stay indoors during high pollen days', 'Keep windows closed during allergy season', 'Use HEPA air purifiers', 'Wash hands and face after being outdoors', 'Use hypoallergenic pillow covers', 'Avoid rubbing eyes', 'Clean contact lenses properly'],
    whenToSee: 'If symptoms are severe, persistent, or accompanied by pain or vision changes, visit us. If over-the-counter allergy drops are not providing relief after 1-2 weeks, a prescription may be needed.',
    doctor: 'Dr. Nitish R. Bharadwaj',
  },
  {
    id: 'squint',
    name: 'Squint (Strabismus)',
    icon: Eye,
    color: 'text-brand-blue',
    iconBg: 'bg-brand-blue/10',
    shortDesc: 'Misalignment of the eyes where they point in different directions, common in children but also affects adults.',
    overview: 'Squint, also known as strabismus, is a condition in which the eyes do not properly align with each other when looking at an object. One eye may turn in, out, up, or down while the other eye focuses straight ahead. Squint can be constant or intermittent and can affect one or both eyes. If detected and treated early in children, it can prevent amblyopia (lazy eye) and permanent vision loss. At SARADA, we specialize in pediatric squint assessment and management, including orthoptic exercises, prism glasses, and squint correction surgery.',
    symptoms: ['Eyes that do not look in the same direction at the same time', 'Frequent squinting or closing one eye', 'Tilting head to see', 'Poor depth perception', 'Bumping into objects', 'Eye fatigue or strain', 'Double vision (in adults)', 'Difficulty reading'],
    causes: ['Muscle imbalance around the eye', 'Family history of strabismus', 'Refractive error (uncorrected farsightedness)', 'Problems with the nerves controlling eye muscles', 'Childhood illness or injury', 'Premature birth or low birth weight', 'Down syndrome or other genetic conditions'],
    riskFactors: ['Family history of squint', 'Premature birth', 'Significant refractive error', 'Cerebral palsy or brain injury', 'Thyroid eye disease (adults)', 'Stroke or neurological conditions (adults)'],
    diagnosis: ['Cover-uncover test', 'Hirschberg corneal reflex test', 'Prism bar testing', 'Visual acuity assessment', 'Stereopsis (3D vision) testing', 'Cycloplegic refraction', 'Neurological evaluation if needed'],
    treatment: ['Prescription glasses (for refractive-related squint)', 'Prism lenses to align images', 'Orthoptic exercises (vision therapy)', 'Botox injection for temporary alignment', 'Squint correction surgery (adjusting eye muscles)', 'Patching for amblyopia (lazy eye)', 'Regular follow-up and monitoring'],
    prevention: ['Early childhood eye screening (by age 3-4)', 'Get eyes checked if family history of squint', 'Treat refractive errors promptly in children', 'Do not ignore signs of eye misalignment', 'Regular pediatric eye exams'],
    whenToSee: 'If your child\'s eyes appear misaligned in photos, if they squint frequently, tilt their head, or complain of double vision — bring them in immediately. Early treatment is critical for children under 8.',
    doctor: 'Dr. Nitish R. Bharadwaj',
  },
  {
    id: 'pediatric',
    name: 'Pediatric Eye Diseases',
    icon: Baby,
    color: 'text-brand-red',
    iconBg: 'bg-brand-red/10',
    shortDesc: 'Children\'s eye conditions including lazy eye (amblyopia), congenital cataracts, and refractive errors requiring early intervention.',
    overview: 'Children can experience a variety of eye conditions that differ significantly from adult eye problems. Early detection and treatment are crucial because children\'s eyes and visual system are still developing. Conditions like amblyopia (lazy eye) must be treated before age 8-10 for the best outcomes, or the vision loss becomes permanent. At SARADA Netralaya, Dr. Nitish R. Bharadwaj has specialized training in pediatric ophthalmology and provides gentle, child-friendly eye examinations and treatments including vision screening, glasses, patching therapy, and pediatric eye surgery when needed.',
    symptoms: ['Frequent eye rubbing', 'Sitting too close to TV or holding books close', 'Squinting or tilting head to see', 'Crossed or misaligned eyes', 'White reflex in pupil (leukocoria) in photos', 'Poor performance in school', 'Clumsiness or difficulty with sports', 'Complaints of headaches or eye fatigue', 'Excessive tearing'],
    causes: ['Genetic/hereditary factors', 'Premature birth (retinopathy of prematurity)', 'Congenital conditions (cataracts, glaucoma)', 'Uncorrected refractive errors', 'Amblyopia (lazy eye) from unequal vision', 'Developmental abnormalities', 'Eye infections in newborns'],
    riskFactors: ['Family history of eye problems', 'Premature or low birth weight', 'Developmental delays', 'Mother\'s infection during pregnancy', 'Lack of early eye screening', 'Prolonged screen time in young children'],
    diagnosis: ['Age-appropriate visual acuity tests', 'Red reflex test (Bruckner test)', 'Cover testing for alignment', 'Cycloplegic refraction', 'Fundus examination', 'Retinopathy of prematurity (ROP) screening for preemies'],
    treatment: ['Prescription eyeglasses', 'Patching therapy for amblyopia', 'Atropine drops for lazy eye', 'Vision therapy exercises', 'Pediatric cataract surgery', 'ROP laser treatment', 'Strabismus (squint) surgery', 'Regular monitoring every 6 months'],
    prevention: ['First eye exam at 6 months of age', 'Second exam at age 3, before school', 'Annual eye exams for school-age children', 'Limit screen time (follow 20-20-20 rule)', 'Ensure good lighting for reading', 'Provide a balanced diet rich in vitamin A', 'Do not ignore any eye complaints from children'],
    whenToSee: 'If you notice a white reflection in your child\'s pupil in photos, misaligned eyes, frequent eye rubbing, or if your child struggles with reading — these need prompt evaluation. ROP screening for premature babies is MANDATORY.',
    doctor: 'Dr. Nitish R. Bharadwaj',
  },
  {
    id: 'computer-vision',
    name: 'Computer Vision Syndrome',
    icon: Activity,
    color: 'text-brand-blue',
    iconBg: 'bg-brand-blue/10',
    shortDesc: 'Digital eye strain from prolonged screen use causing headaches, blurred vision, and neck/shoulder pain.',
    overview: 'Computer Vision Syndrome (CVS), also called Digital Eye Strain, is a group of eye and vision-related problems that result from prolonged computer, tablet, e-reader, and smartphone use. The level of discomfort appears to increase with the amount of digital screen use. With the average Indian professional spending 8-10 hours daily on screens, this has become one of the most common eye complaints. At SARADA, we provide comprehensive digital eye strain evaluation including binocular vision assessment and recommend personalized solutions including computer glasses, ergonomic advice, and eye exercises.',
    symptoms: ['Eyestrain and fatigue', 'Headaches', 'Blurred vision', 'Dry eyes', 'Neck and shoulder pain', 'Difficulty focusing between screen and distant objects', 'Double vision', 'Increased sensitivity to light', 'Red or irritated eyes'],
    causes: ['Prolonged screen use without breaks', 'Improper viewing distance (too close)', 'Poor lighting (glare, reflections)', 'Uncorrected refractive error', 'Reduced blink rate (normally 15/min, drops to 5-7 on screen)', 'Screen brightness and blue light emission', 'Poor posture and ergonomics'],
    riskFactors: ['IT professionals and desk workers', 'Students with heavy study/screen time', 'Gaming enthusiasts', 'Pre-existing dry eye or refractive error', 'Bifocal or progressive lens wearers', 'Children using tablets/phones excessively'],
    diagnosis: ['Visual acuity assessment', 'Refraction to check glasses prescription', 'Binocular vision assessment', 'Tear film evaluation', 'Accommodative facility testing', 'Evaluation of workspace ergonomics'],
    treatment: ['Computer glasses with anti-reflective coating', 'Blue-light blocking lenses', 'Artificial tears and lubricating drops', '20-20-20 rule (every 20 min, look 20ft away for 20 sec)', 'Ergonomic workstation adjustments', 'Blink exercises and eye yoga', 'Screen brightness/filter adjustments', 'Vision therapy if binocular vision issues'],
    prevention: ['Follow 20-20-20 rule strictly', 'Position screen 20-26 inches from eyes', 'Set screen at or slightly below eye level', 'Reduce overhead lighting to minimize glare', 'Use anti-glare screen protectors', 'Take 10-min breaks every 2 hours', 'Get annual eye exams', 'Keep eyes hydrated with artificial tears'],
    whenToSee: 'If headaches, eye strain, or blurred vision persist despite taking breaks, visit SARADA for a comprehensive evaluation. You may need prescription computer glasses or have an underlying refractive error.',
    doctor: 'Dr. Nitish R. Bharadwaj',
  },
  {
    id: 'conjunctivitis',
    name: 'Conjunctivitis',
    icon: AlertTriangle,
    color: 'text-brand-red',
    iconBg: 'bg-brand-red/10',
    shortDesc: 'Inflammation or infection of the conjunctiva (clear membrane lining the eyelid), commonly known as "pink eye."',
    overview: 'Conjunctivitis, commonly known as "pink eye," is an inflammation or infection of the transparent membrane (conjunctiva) that lines your eyelid and covers the white part of your eyeball. When small blood vessels in the conjunctiva become inflamed, they are more visible. This is what causes the whites of your eyes to appear reddish or pink. Conjunctivitis can be caused by viruses, bacteria, allergens, or irritants. While usually mild, certain types can be serious and contagious. At SARADA, we accurately diagnose the type of conjunctivitis and provide targeted treatment to prevent complications and spread.',
    symptoms: ['Redness in one or both eyes', 'Itchiness in one or both eyes', 'Gritty feeling in eyes', 'Discharge that forms a crust at night (bacterial)', 'Watery eyes (viral or allergic)', 'Swollen eyelids', 'Burning sensation', 'Increased sensitivity to light', 'Blurred vision (if discharge is heavy)'],
    causes: ['Viruses (most common, adenovirus)', 'Bacteria (Staph, Strep, H. influenzae)', 'Allergens (pollen, dust, pet dander)', 'Chemical irritants (chlorine, smoke, cosmetics)', 'Foreign body in the eye', 'Blocked tear duct (in newborns)', 'Contact lens overwear'],
    riskFactors: ['Exposure to someone with infectious conjunctivitis', 'Contact lens use (especially extended wear)', 'Allergies or hay fever', 'Cold or respiratory infection', 'Weakened immune system', 'Children in daycare or school settings'],
    diagnosis: ['Clinical examination of the eye', 'Slit-lamp evaluation', 'Discharge swab and culture (if bacterial)', 'Allergy testing (if allergic type suspected)', 'Fluorescein staining (to rule out corneal involvement)', 'Vision testing'],
    treatment: ['Viral: Supportive care (artificial tears, cold compress) - resolves in 1-2 weeks', 'Bacterial: Antibiotic eye drops/ointments (Erythromycin, Gentamicin, Moxifloxacin)', 'Allergic: Antihistamine/mast cell drops, oral antihistamines', 'Chemical: Immediate irrigation, remove irritant', 'Good hygiene: frequent hand washing, no eye rubbing', 'Avoid contact lenses until fully healed', 'Do not share towels, pillows, or eye makeup'],
    prevention: ['Wash hands frequently with soap', 'Avoid touching or rubbing eyes', 'Do not share personal items (towels, makeup)', 'Clean contact lenses properly', 'Replace eye makeup regularly', 'Stay home if infectious (viral/bacterial)', 'Use protective eyewear in pools/chemical environments'],
    whenToSee: 'If you have severe eye pain, sensitivity to light, blurred vision that does not clear with blinking, or symptoms that worsen after 3 days — visit SARADA immediately. Newborns with eye discharge need URGENT evaluation.',
    doctor: 'Dr. Nitish R. Bharadwaj',
  },
];

function DiseaseDetail({ disease, onBack }: { disease: Disease; onBack: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto"
    >
      <button onClick={onBack} className="flex items-center gap-2 text-brand-blue hover:text-brand-blue-dark font-semibold mb-6 transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back to All Diseases
      </button>

      {/* Header */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-8">
        <div className={`bg-gradient-to-r ${disease.color === 'text-brand-red' ? 'from-brand-red/10 to-brand-red/5' : 'from-brand-blue/10 to-brand-blue/5'} p-8` }>
          <div className="flex items-start gap-5">
            <div className={`${disease.iconBg} p-4 rounded-2xl shrink-0`}>
              <disease.icon className={`h-8 w-8 ${disease.color}`} />
            </div>
            <div>
              <h2 className="font-[var(--font-montserrat)] font-extrabold text-2xl sm:text-3xl text-brand-black mb-2">{disease.name}</h2>
              <p className="text-brand-gray leading-relaxed">{disease.overview}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Symptoms */}
        <InfoCard title="Symptoms" icon={<Activity className="h-5 w-5 text-brand-red" />} items={disease.symptoms} />
        {/* Causes */}
        <InfoCard title="Causes" icon={<AlertTriangle className="h-5 w-5 text-brand-blue" />} items={disease.causes} />
        {/* Risk Factors */}
        <InfoCard title="Risk Factors" icon={<ShieldCheck className="h-5 w-5 text-brand-red" />} items={disease.riskFactors} />
        {/* Diagnosis */}
        <InfoCard title="How We Diagnose" icon={<Scan className="h-5 w-5 text-brand-blue" />} items={disease.diagnosis} />
        {/* Treatment */}
        <InfoCard title="Treatment at SARADA" icon={<Stethoscope className="h-5 w-5 text-brand-red" />} items={disease.treatment} highlight />
        {/* Prevention */}
        <InfoCard title="Prevention" icon={<ShieldCheck className="h-5 w-5 text-brand-blue" />} items={disease.prevention} />
      </div>

      {/* When to see a doctor - CTA */}
      <div className="mt-8 bg-gradient-to-r from-brand-red to-brand-red-dark rounded-2xl p-8 text-white">
        <div className="flex items-start gap-4">
          <div className="bg-white/20 p-3 rounded-xl shrink-0">
            <Heart className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-[var(--font-montserrat)] font-bold text-xl mb-2">When to See a Doctor</h3>
            <p className="text-white/90 leading-relaxed mb-4">{disease.whenToSee}</p>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="bg-white/20 px-4 py-2 rounded-full text-sm">
                <span className="font-semibold">Consulting Doctor: </span>{disease.doctor}
              </div>
              <a href="tel:7091090014" className="bg-white text-brand-red font-bold px-5 py-2 rounded-full text-sm hover:bg-white/90 transition-colors">
                Call Now: 7091090014
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function InfoCard({ title, icon, items, highlight }: { title: string; icon: React.ReactNode; items: string[]; highlight?: boolean }) {
  return (
    <div className={`rounded-xl p-6 border ${highlight ? 'bg-brand-red/5 border-brand-red/20 shadow-md' : 'bg-white border-gray-100 shadow-sm'}`}>
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className={`font-[var(--font-montserrat)] font-bold text-lg ${highlight ? 'text-brand-red' : 'text-brand-black'}`}>{title}</h3>
      </div>
      <ul className="space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${highlight ? 'bg-brand-red' : 'bg-brand-blue'}`} />
            <span className="text-brand-gray text-sm leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function DiseaseLibrary() {
  const [selected, setSelected] = useState<Disease | null>(null);

  return (
    <section id="diseases" className="py-16 md:py-24 px-4 bg-brand-gray-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-brand-blue font-semibold text-sm tracking-widest uppercase mb-2">Disease Library</p>
          <h2 className="font-[var(--font-montserrat)] font-extrabold text-3xl md:text-4xl text-brand-black mb-4">
            Eye Disease Information Center
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-10 h-1 bg-brand-red rounded-full" />\n            <div className="w-10 h-1 bg-brand-blue rounded-full" />
          </div>
          <p className="text-brand-gray max-w-3xl mx-auto">
            Comprehensive information about common eye diseases — their symptoms, causes, diagnosis, treatment options, and prevention. Click on any condition to learn more in detail.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {selected ? (
            <DiseaseDetail disease={selected} onBack={() => setSelected(null)} />
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {diseases.map((d, i) => (
                  <motion.div
                    key={d.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                  >
                    <Card
                      className="h-full bg-white border border-gray-100 hover:border-brand-red/50 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
                      onClick={() => setSelected(d)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4 mb-3">
                          <div className={`${d.iconBg} p-3 rounded-xl group-hover:scale-110 transition-transform`}>
                            <d.icon className={`h-6 w-6 ${d.color}`} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-[var(--font-montserrat)] font-bold text-brand-black group-hover:text-brand-red transition-colors">{d.name}</h3>
                            <Badge variant="outline" className="mt-1 text-[10px] border-brand-blue/30 text-brand-blue">{d.doctor}</Badge>
                          </div>
                          <ChevronRight className="h-5 w-5 text-gray-300 group-hover:text-brand-red transition-colors shrink-0 mt-1" />
                        </div>
                        <p className="text-brand-gray text-sm leading-relaxed">{d.shortDesc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}