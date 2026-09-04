export interface DoctorProfile {
  id: string;
  name: string;
  credentials?: string;
  title?: string;
  speciality: string;
  experience: string;
  surgeries: string;
  image: string;
  accent: string;
  focus: string[];
  bio: string;
  education: string;
  approach: string;
  conditions: string[];
  highlights: string[];
}

export const doctors: DoctorProfile[] = [
  {
    id: 'nitin',
    name: 'Dr. Nitin G. Dhira',
    credentials: 'DNB, FICO (UK, London)',
    title: 'Founder & Director, Sarada Netralaya',
    speciality: 'Senior Consultant – Cataract & Glaucoma Services',
    experience: 'Founder & Director',
    surgeries: '15,000+',
    image: '/images/doctor-nitin-studio.png',
    accent: '#C8102E',
    focus: [
      'Advanced & premium cataract surgery',
      'Trifocal, EDOF & Toric IOL implantation',
      'Complex & challenging cataract cases',
      'Glaucoma diagnosis, medical & surgical care',
    ],
    bio: 'Dr. Nitin G. Dhira is a distinguished ophthalmologist with extensive expertise in cataract and glaucoma management. He completed his undergraduate medical education from the prestigious B. J. Medical College and Sassoon General Hospital, Pune, Maharashtra, followed by postgraduate training in Ophthalmology at the internationally acclaimed L. V. Prasad Eye Institute, Hyderabad.\n\nWith a rich surgical experience of over 15,000 cataract surgeries, Dr. Dhira is recognized for his precision, meticulous surgical technique, and exceptional ability to successfully manage complex and challenging cataract cases. His commitment to clinical excellence and innovation has earned him the trust of thousands of patients and the respect of colleagues across the ophthalmic fraternity.\n\nHis areas of specialization include Advanced and Premium Cataract Surgery, with expertise in the implantation of the latest intraocular lenses, including Trifocal, Extended Depth of Focus (EDOF), and Toric IOLs, helping patients achieve superior visual outcomes and greater spectacle independence. He also has a special interest in the diagnosis, medical management, and surgical treatment of Glaucoma.\n\nA passionate academician and educator, Dr. Dhira actively contributes to the advancement of ophthalmology through teaching and scientific exchange. He is a regular faculty member and instructor at national and international ophthalmic conferences, where he delivers invited lectures and conducts instructional courses on advanced cataract surgery and related topics.\n\nIn recognition of his academic leadership, Dr. Dhira currently serves as the Chairman, Scientific Committee, Eastern India Zonal Ophthalmological Committee (2024–2027).\n\nAs the Founder & Director of Sarada Netralaya, Dr. Dhira is dedicated to building a centre of excellence in eye care by combining cutting-edge technology, evidence-based medicine, ethical practice, and compassionate patient care.',
    education:
      'Undergraduate medical education — B. J. Medical College and Sassoon General Hospital, Pune, Maharashtra. Postgraduate training in Ophthalmology — L. V. Prasad Eye Institute, Hyderabad. DNB; FICO (UK, London).',
    approach:
      'As Founder & Director of Sarada Netralaya, Dr. Dhira builds a centre of excellence by combining cutting-edge technology, evidence-based medicine, ethical practice, and compassionate patient care — with advanced premium cataract surgery and comprehensive glaucoma services.',
    conditions: [
      'Advanced cataract',
      'Premium IOL counselling (Trifocal / EDOF / Toric)',
      'Complex cataract cases',
      'Glaucoma',
      'Spectacle independence planning',
    ],
    highlights: [
      'Founder & Director, Sarada Netralaya',
      'Senior Consultant – Cataract & Glaucoma Services',
      '15,000+ cataract surgeries',
      'Trained at L. V. Prasad Eye Institute, Hyderabad',
      'Chairman, Scientific Committee, EIZOC (2024–2027)',
      'National & international conference faculty',
    ],
  },
  {
    id: 'nitish',
    name: 'Dr. Nitish Bhardwaj',
    credentials: 'MBBS, DNB, FICO (UK, London), FCRS',
    title: 'Senior Consultant – Cataract, Cornea and Refractive Services',
    speciality: 'Senior Consultant – Cataract, Cornea and Refractive Services',
    experience: 'FICO · FCRS',
    surgeries: 'Premium IOLs',
    image: '/images/nitishbhardwaj.jpg',
    accent: '#4FA3D1',
    focus: [
      'Advanced phacoemulsification cataract surgery',
      'Premium IOLs — Monofocal, Toric, Multifocal, EDOF',
      'Corneal diseases, infections & transplantation',
      'Keratoconus, dry eye & refractive evaluation',
    ],
    bio: 'Dr. Nitish Bhardwaj is a Consultant Ophthalmologist with special expertise in Cornea, Cataract, Refractive Surgery, and Premium Intraocular Lens (IOL) Solutions. He completed his DNB (Ophthalmology) followed by an advanced Fellowship in Cornea & Refractive Surgery (FCRS) at Shri Ganapati Netralaya, Jalna, a renowned tertiary eye care, teaching, and fellowship centre.\n\nHe holds the prestigious FICO (UK, London) – Fellow of the International Council of Ophthalmology qualification. During his fellowship, he was honoured with the Certificate of Excellence in Cornea Fellowship for his outstanding clinical performance. His academic achievements also include the iFocus Quiz Award and the OJAS 2018 National-Level Postgraduate Ophthalmology Quiz Award, reflecting his dedication to academic excellence and continuous professional development.\n\nDr. Bhardwaj combines evidence-based medicine with advanced diagnostic and surgical technology to deliver personalised, ethical, and patient-centred eye care. He is committed to achieving the best possible visual outcomes while ensuring patient comfort and safety.\n\nAt Sarada Netralaya, Dr. Bhardwaj actively contributes to community eye health through screening camps, public awareness initiatives, and continuing medical education. His vision is to provide world-class ophthalmic care with compassion, innovation, and clinical excellence.\n\n“Dedicated to restoring and preserving vision through excellence, innovation, and compassionate eye care.”',
    education:
      'MBBS; DNB (Ophthalmology); FICO (UK, London); FCRS — Fellowship in Cornea & Refractive Surgery at Shri Ganapati Netralaya, Jalna. Certificate of Excellence in Cornea Fellowship; iFocus Quiz Award; OJAS 2018 National-Level Postgraduate Ophthalmology Quiz Award.',
    approach:
      'Evidence-based medicine with advanced diagnostics and surgical technology for personalised, ethical, patient-centred care — focused on the best visual outcomes with comfort and safety.',
    conditions: [
      'Advanced phacoemulsification cataract',
      'Premium cataract (Monofocal / Toric / Multifocal / EDOF IOL)',
      'Personalised IOL selection',
      'Corneal diseases & infections',
      'Corneal transplantation',
      'Keratoconus',
      'Corneal / ocular trauma',
      'Ocular surface disorders',
      'Dry eye disease',
      'Refractive surgery evaluation',
      'Anterior segment disorders',
    ],
    highlights: [
      'Senior Consultant – Cataract, Cornea and Refractive Services',
      'FICO (UK, London) & FCRS fellowship trained',
      'Premium IOL solutions & personalised lens selection',
      'Certificate of Excellence in Cornea Fellowship',
      'Community screening & CME at Sarada Netralaya',
    ],
  },
  {
    id: 'shabnam',
    name: 'Dr. Shabnam Kumari Dhira',
    credentials: 'MD (Obstetrics & Gynaecology), RIMS, Ranchi',
    title: 'Consultant Gynaecologist | Laparoscopic Surgeon | Infertility Specialist',
    speciality: 'Consultant Gynaecologist | Laparoscopic Surgeon | Infertility Specialist',
    experience: 'Apollo · Fernandez',
    surgeries: 'Laparoscopy · IVF',
    image: '/images/drshabnamdhira.jpeg',
    accent: '#9B2D5C',
    focus: [
      'Pregnancy & comprehensive women’s healthcare',
      'Gynecological disorders & laparoscopic surgery',
      'Infertility & IVF counselling',
      'Evidence-based, patient-centric gynaecology care',
    ],
    bio: 'Dr. Shabnam Kumari Dhira has working experience at JCI-accredited Apollo Hospital, Hyderabad, and Fernandez Hospital, Hyderabad. She has also completed a Fellowship in Gynecological Endoscopic Surgery from Apollo Hospital, Hyderabad.\n\nShe has completed her Fellowship in Infertility and IVF from CIMER / EDAPAL.\n\nDr. Shabnam Kumari Dhira is a dedicated and compassionate Obstetrician and Gynaecologist committed to providing comprehensive women\'s healthcare. With expertise in the management of pregnancy, gynecological disorders, infertility, and advanced laparoscopic (minimally invasive) surgeries, she offers personalized, evidence-based treatment tailored to each patient\'s needs.\n\nHer patient-centric approach, combined with clinical excellence, ensures high-quality care for women at every stage of life, from adolescence to menopause. She strives to deliver safe, ethical, and advanced medical care while fostering trust, confidence, and comfort for every patient.',
    education:
      'MD (Obstetrics & Gynaecology), RIMS, Ranchi. Fellowship in Gynecological Endoscopic Surgery — Apollo Hospital, Hyderabad. Fellowship in Infertility and IVF — CIMER / EDAPAL. Clinical experience at JCI-accredited Apollo Hospital, Hyderabad and Fernandez Hospital, Hyderabad.',
    approach:
      'Personalized, evidence-based women’s healthcare — pregnancy, gynecological disorders, infertility, and advanced laparoscopic surgery — with trust, comfort, and clinical excellence at every stage of life.',
    conditions: [
      'Pregnancy & obstetric care',
      'Gynecological disorders',
      'Infertility & IVF',
      'Laparoscopic / endoscopic gynaecology surgery',
      'Adolescent to menopause women’s health',
    ],
    highlights: [
      'Consultant Gynaecologist | Laparoscopic Surgeon | Infertility Specialist',
      'MD (Obstetrics & Gynaecology), RIMS, Ranchi',
      'Experience — Apollo Hospital & Fernandez Hospital, Hyderabad',
      'Fellowship in Gynecological Endoscopic Surgery, Apollo Hyderabad',
      'Fellowship in Infertility and IVF, CIMER / EDAPAL',
    ],
  },
  {
    id: 'pallavi',
    name: 'Dr. Pallavi Gautam',
    credentials: 'MBBS, MD (Anaesthesiology & Critical Care)',
    title: 'Consultant Anaesthesiologist',
    speciality: 'Consultant Anaesthesiologist',
    experience: 'Ex-TMH · BJSA Council',
    surgeries: 'Regional blocks',
    image: '/images/drpallavigautam.jpeg',
    accent: '#0B7A5C',
    focus: [
      'Regional anaesthesia (nerve blocks)',
      'Segmental anaesthesia',
      'Perioperative care for high-risk geriatric patients',
      'Safe, evidence-based anaesthesia & critical care',
    ],
    bio: 'Dr. Pallavi Gautam is a skilled Consultant Anaesthesiologist with expertise in Anaesthesia and Critical Care. She is an Ex-Associate Specialist at Tata Main Hospital (TMH) and currently serves as a General Council Member of the Bihar-Jharkhand Society of Anaesthesiologists. Her special interests include regional anaesthesia (nerve blocks), segmental anaesthesia, and the perioperative management of high-risk geriatric patients. She is dedicated to providing safe, evidence-based, and compassionate anaesthesia care for every patient.',
    education:
      'MBBS; MD (Anaesthesiology & Critical Care). Ex-Associate Specialist, Tata Main Hospital (TMH). General Council Member, Bihar-Jharkhand Society of Anaesthesiologists.',
    approach:
      'Safe, evidence-based, and compassionate anaesthesia care — with special focus on regional and segmental techniques and careful perioperative management of high-risk geriatric patients.',
    conditions: [
      'Regional anaesthesia / nerve blocks',
      'Segmental anaesthesia',
      'High-risk geriatric perioperative care',
      'Anaesthesia for eye & surgical procedures',
      'Critical care support',
    ],
    highlights: [
      'Consultant Anaesthesiologist',
      'Ex-Associate Specialist, Tata Main Hospital (TMH)',
      'General Council Member, Bihar-Jharkhand Society of Anaesthesiologists',
      'Special interest — regional & segmental anaesthesia',
      'High-risk geriatric perioperative care',
    ],
  },
];
