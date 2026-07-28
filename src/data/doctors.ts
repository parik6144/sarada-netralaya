export interface DoctorProfile {
  id: string;
  name: string;
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
    speciality: 'Cataract & Glaucoma Specialist',
    experience: '30+ Years',
    surgeries: '25,000+',
    image: '/images/doctor-nitin.png',
    accent: '#C8102E',
    focus: [
      'High-end cataract surgery with premium IOLs',
      'Glaucoma diagnosis & pressure management',
      'Phacoemulsification & micro-incision surgery',
      'Long-term vision preservation counselling',
    ],
    bio: 'Dr. Nitin G. Dhira leads cataract and glaucoma care at SARADA Netralaya. With over three decades of clinical experience, he specialises in precise, safe, and painless cataract surgery using the latest technology and premium intraocular lenses. He also manages glaucoma — the “silent thief of sight” — with careful pressure monitoring, medicines, laser, and surgical options when needed.',
    education:
      'Extensive training in phacoemulsification, glaucoma management, and premium intraocular lens selection for distance, near, and lifestyle-focused vision.',
    approach:
      'Every consultation starts with a clear explanation: what is cloudy in the lens, how eye pressure is affecting the optic nerve, what happens if treatment is delayed, and which option fits your age, lifestyle, and insurance. Patients leave knowing the problem, the plan, and the recovery steps.',
    conditions: ['Cataract', 'Glaucoma', 'Raised eye pressure', 'Premium IOL counselling', 'Post-cataract follow-up'],
    highlights: [
      'Senior cataract & glaucoma specialist',
      'Focus on painless, same-day discharge cataract care',
      'Clear counselling before every surgery',
      'Protects remaining vision in glaucoma with structured follow-up',
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
