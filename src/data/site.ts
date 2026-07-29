export const site = {
  name: 'SARADA Netralaya & Maternity',
  tagline: 'Passion for Excellence. Committed to Care.',
  motto: 'Your Vision is Our Mission. Your Trust is Our Strength.',
  location: 'Baradwari, Sakchi, Jamshedpur',
  address: '33, Swastik Ambika Tower, Near HDFC Bank, New Baradwari, Jamshedpur',
  phones: ['+91 70910 90014', '+91 70910 90016'],
  email: 'info@saradanetralaya.com',
  hours: 'Mon–Sat: 10:00 AM – 7:00 PM',
  emergency: '24×7 emergency eye care',
};

export const navTreatments = [
  { name: 'Cataract Surgery', slug: 'cataract', desc: 'Advanced phacoemulsification' },
  { name: 'Refractive Surgery', slug: 'refractive', desc: 'ICL, IPCL & vision correction' },
  { name: 'Glaucoma Treatment', slug: 'glaucoma', desc: 'Pressure management' },
  { name: 'Medical Retina Services', slug: 'retina', desc: 'Retinal diagnostics & care' },
  { name: 'Cornea Treatment', slug: 'cornea', desc: 'Corneal transplant & care' },
  { name: 'Dry Eye Clinic', slug: 'dry-eye', desc: 'Comprehensive dry eye care' },
  { name: 'Pediatric Eye Care', slug: 'pediatric', desc: 'Children eye specialist' },
  { name: 'Squint Correction', slug: 'squint', desc: 'Squint surgery & therapy' },
];

export const mainNav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Doctors', href: '/doctors', hasDropdown: 'doctors' as const },
  { label: 'Treatments', href: '/treatments', hasDropdown: 'treatments' as const },
  { label: 'Technology', href: '/technology' },
  { label: 'Insurance', href: '/insurance' },
  { label: 'Contact', href: '/contact' },
];
