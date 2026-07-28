export type InsurancePartner = {
  name: string;
  logo: string;
  blurb?: string;
};

export const corporatePartners: InsurancePartner[] = [
  { name: 'Tata Power', logo: '/images/insurance/tatapowers.png' },
  { name: 'Tata Motors', logo: '/images/insurance/TataMotors.png' },
  { name: 'LIC', logo: '/images/insurance/lic.png' },
  { name: 'MediAssist', logo: '/images/insurance/mediassist.png' },
  { name: 'MD India', logo: '/images/insurance/mdindia.png' },
  { name: 'Health India', logo: '/images/insurance/healthindia.png' },
];

export const governmentInsurers: InsurancePartner[] = [
  { name: 'New India Assurance', logo: '/images/insurance/newindiainsaurance.png' },
  { name: 'National Insurance', logo: '/images/insurance/nationalindia.png' },
  { name: 'Oriental Insurance', logo: '/images/insurance/orientalinsaurance.png' },
  { name: 'United India Insurance', logo: '/images/insurance/unitedInsaurance.png' },
];

export const empanelledSchemes: InsurancePartner[] = [
  {
    name: 'Ayushman Bharat (PM-JAY)',
    logo: '/images/insurance/Ayushman.png',
    blurb:
      'Government health cover for eligible families. Bring your Ayushman / PM-JAY card — we help verify entitlement before treatment.',
  },
  {
    name: 'Rajyakarmi Swasthya Bima Yojana',
    logo: '/images/insurance/rajyakarmi.png',
    blurb: 'State employee health scheme support with documentation guidance at the hospital front desk.',
  },
  {
    name: 'NML Empanelment',
    logo: '/images/insurance/NML.png',
    blurb: 'National Metallurgical Laboratory empanelment support for eligible beneficiaries.',
  },
];

export const cashlessChecklist = [
  'Valid photo ID and insurance / mediclaim card',
  'Ayushman Bharat / PM-JAY card for eligible beneficiaries',
  'Referral letter if required by your insurer or TPA',
  'Previous eye reports, prescriptions, and diabetes records if applicable',
  'Employer details for corporate schemes (Tata Power, Tata Motors, NML, etc.)',
];
