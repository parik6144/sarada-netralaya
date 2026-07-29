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
    credentials: 'MS (Ophthalmology)',
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
      'Undergraduate medical education — B. J. Medical College and Sassoon General Hospital, Pune, Maharashtra. Postgraduate training in Ophthalmology — L. V. Prasad Eye Institute, Hyderabad. MS (Ophthalmology).',
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
    name: 'Dr. Nitish R. Bharadwaj',
    speciality: 'Cataract & Cornea Specialist',
    experience: '15+ Years',
    surgeries: '15,000+',
    image: '/images/doctor-nitish.png',
    accent: '#4FA3D1',
    focus: [
      'Cataract surgery & clear lens restoration',
      'Corneal infections, ulcers & scarring',
      'Keratoconus evaluation & crosslinking',
      'Ocular surface & clarity care',
    ],
    bio: 'Dr. Nitish R. Bharadwaj specialises in cataract and corneal disease — the clear front window of the eye. He treats infections, injury-related scarring, keratoconus, and surface problems that distort vision, while also performing modern cataract surgery. His goal is to restore clarity with the least invasive option that still delivers lasting results.',
    education:
      'Specialist training in corneal diagnostics, topography-guided assessment, cataract surgery, and corneal therapeutic procedures including medical therapy and crosslinking.',
    approach:
      'He shows patients which layer of the cornea or lens is affected, what caused it, and whether drops, crosslinking, or surgery is required. Treatment decisions are explained in plain language so families can choose confidently.',
    conditions: ['Cataract', 'Corneal infection', 'Keratoconus', 'Corneal scarring', 'Dry / irregular ocular surface'],
    highlights: [
      'Cataract & cornea specialist',
      'Advanced corneal diagnostics & topography',
      'Step-by-step explanation of surface disease',
      'Matches therapy to stage of disease and recovery goals',
    ],
  },
];
