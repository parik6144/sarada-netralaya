'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Stethoscope } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. Nitin G. Dhira',
    title: 'Senior Ophthalmologist & Eye Surgeon',
    experience: '18+ Years Experience',
    initials: 'ND',
    color: 'bg-brand-red',
    qualifications: ['MBBS, MS (Ophthalmology)', 'Fellowship in Phaco & Refractive Surgery', 'Specialist in Cataract & Glaucoma Surgery', 'Former Consultant at Apollo Hospitals'],
  },
  {
    name: 'Dr. Nitish Bhardwaj',
    title: 'Ophthalmologist & Refractive Surgeon',
    experience: '10+ Years Experience',
    initials: 'NB',
    color: 'bg-brand-blue',
    qualifications: ['MBBS, DNB (Ophthalmology)', 'Fellowship in Cornea & Refractive Surgery', 'Specialist in Cornea & Anterior Segment', 'FICO (UK, London), FCRS'],
  },
  {
    name: 'Dr. Pallavi Gautam',
    title: 'Consultant Anaesthesiologist',
    experience: 'Anaesthesia & Critical Care',
    initials: 'PG',
    color: 'bg-emerald-700',
    qualifications: [
      'MBBS, MD (Anaesthesiology & Critical Care)',
      'Ex-Associate Specialist, Tata Main Hospital (TMH)',
      'General Council Member, Bihar-Jharkhand Society of Anaesthesiologists',
      'Regional anaesthesia, nerve blocks & high-risk geriatric care',
    ],
  },
];

export default function DoctorsSection() {
  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-brand-red font-semibold text-sm tracking-widest uppercase mb-2">Our Doctors</p>
          <h2 className="font-[var(--font-montserrat)] font-extrabold text-3xl sm:text-4xl text-brand-black mb-4">Meet Our Specialists</h2>
          <div className="w-20 h-1 bg-brand-red mx-auto rounded-full mb-6" />
          <p className="text-brand-gray max-w-2xl mx-auto">Our team of highly experienced ophthalmologists is dedicated to providing the best eye care.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {doctors.map((doc, i) => (
            <motion.div key={doc.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.2 }}>
              <Card className="border border-gray-100 hover:border-brand-red/50 transition-all duration-300 shadow-md hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className={`w-24 h-24 ${doc.color} rounded-full flex items-center justify-center mx-auto mb-5 text-2xl font-bold text-white font-[var(--font-montserrat)]`}>{doc.initials}</div>
                  <h3 className="font-[var(--font-montserrat)] font-bold text-xl text-brand-black mb-1">{doc.name}</h3>
                  <p className="text-brand-red font-semibold text-sm mb-2">{doc.title}</p>
                  <div className="flex items-center justify-center gap-2 mb-5"><Award className="h-4 w-4 text-brand-blue" /><span className="text-brand-gray text-sm">{doc.experience}</span></div>
                  <div className="space-y-2 text-left">
                    {doc.qualifications.map((q) => (
                      <div key={q} className="flex items-start gap-2"><div className="w-5 h-5 bg-brand-red/10 rounded-full flex items-center justify-center shrink-0 mt-0.5"><Stethoscope className="h-3 w-3 text-brand-red" /></div><span className="text-brand-gray text-sm">{q}</span></div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}