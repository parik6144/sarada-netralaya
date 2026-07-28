'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye as EyeIcon, Users, ShieldCheck, Award, Heart } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-brand-gray-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-brand-red font-semibold text-sm tracking-widest uppercase mb-2">About Us</p>
          <h2 className="font-[var(--font-montserrat)] font-extrabold text-3xl sm:text-4xl text-brand-black mb-4">
            Trusted Eye Care Since 2009
          </h2>
          <div className="w-20 h-1 bg-brand-red mx-auto rounded-full mb-6" />
          <p className="text-brand-gray max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            SARADA Netralaya & Maternity is Jamshedpur&apos;s leading eye care center, dedicated to providing
            world-class ophthalmology services. With state-of-the-art technology and a team of highly
            experienced surgeons, we have successfully treated over 10,000 patients. Our commitment
            to excellence and compassionate care makes us the preferred choice for eye health in
            Jharkhand.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <Card className="border border-gray-100 shadow-md hover:shadow-lg transition-shadow h-full">
              <CardHeader className="pb-3">
                <div className="w-14 h-14 bg-brand-red/10 rounded-xl flex items-center justify-center mb-3">
                  <Target className="h-7 w-7 text-brand-red" />
                </div>
                <CardTitle className="font-[var(--font-montserrat)] font-bold text-xl text-brand-black">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray leading-relaxed">
                  To provide world-class eye care services accessible to all, combining advanced technology
                  with compassionate care. We strive to restore and preserve vision for every patient who
                  walks through our doors, ensuring the highest standards of treatment outcomes and patient
                  satisfaction.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
            <Card className="border border-gray-100 shadow-md hover:shadow-lg transition-shadow h-full">
              <CardHeader className="pb-3">
                <div className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-3">
                  <EyeIcon className="h-7 w-7 text-brand-blue" />
                </div>
                <CardTitle className="font-[var(--font-montserrat)] font-bold text-xl text-brand-black">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-gray leading-relaxed">
                  To be the leading eye care center in Eastern India, recognized for clinical excellence,
                  innovation, and patient-centric approach. We envision a future where preventable blindness
                  is eliminated through early detection, advanced treatment, and community education.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Award, label: 'Years of Excellence', value: '15+', color: 'text-brand-red', bg: 'bg-brand-red/10' },
            { icon: Users, label: 'Happy Patients', value: '10,000+', color: 'text-brand-blue', bg: 'bg-brand-blue/10' },
            { icon: ShieldCheck, label: 'Surgeries Performed', value: '10,000+', color: 'text-brand-red', bg: 'bg-brand-red/10' },
            { icon: Heart, label: 'Patient Satisfaction', value: '98%', color: 'text-brand-blue', bg: 'bg-brand-blue/10' },
          ].map((item, i) => (
            <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="text-center p-4">
              <div className={`w-12 h-12 ${item.bg} rounded-full flex items-center justify-center mx-auto mb-3`}>
                <item.icon className={`h-6 w-6 ${item.color}`} />
              </div>
              <p className="font-[var(--font-montserrat)] font-bold text-2xl sm:text-3xl text-brand-black">{item.value}</p>
              <p className="text-brand-gray text-sm mt-1">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
