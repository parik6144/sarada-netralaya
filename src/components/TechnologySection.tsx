'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Scan, Camera, Activity, Zap, Microscope } from 'lucide-react';

const equipment = [
  { icon: Eye, name: 'Advanced Phaco Machine', desc: 'State-of-the-art phacoemulsification system for precise, minimally invasive cataract removal surgery.', accent: 'bg-brand-red/10 text-brand-red' },
  { icon: Scan, name: 'OCT (Optical Coherence Tomography)', desc: 'High-resolution cross-sectional imaging of the retina for accurate diagnosis of retinal conditions.', accent: 'bg-brand-blue/10 text-brand-blue' },
  { icon: Camera, name: 'Fundus Camera', desc: 'Advanced digital imaging system for detailed documentation of the retina, optic disc, and blood vessels.', accent: 'bg-brand-red/10 text-brand-red' },
  { icon: Activity, name: 'Visual Field Analyzer', desc: 'Precision instrument for detecting and monitoring glaucoma and other visual field defects.', accent: 'bg-brand-blue/10 text-brand-blue' },
  { icon: Zap, name: 'LASIK Laser System', desc: 'FDA-approved excimer laser platform for safe and accurate refractive vision correction surgery.', accent: 'bg-brand-red/10 text-brand-red' },
  { icon: Microscope, name: 'Slit Lamp Biomicroscope', desc: 'Advanced examination microscope for detailed evaluation of the anterior segment of the eye.', accent: 'bg-brand-blue/10 text-brand-blue' },
];

export default function TechnologySection() {
  return (
    <section id="technology" className="py-16 md:py-24 px-4 bg-brand-gray-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-brand-red font-semibold text-sm tracking-widest uppercase mb-2">Our Equipment</p>
          <h2 className="font-[var(--font-montserrat)] font-extrabold text-3xl md:text-4xl text-brand-black mb-4">
            State-of-the-Art Technology
          </h2>
          <div className="w-20 h-1 bg-brand-blue mx-auto rounded-full mb-6" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipment.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Card className="h-full bg-white border border-gray-100 hover:border-brand-blue/50 shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${item.accent}`}>
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-[var(--font-montserrat)] font-bold text-lg text-brand-black mb-2">{item.name}</h3>
                  <p className="text-brand-gray text-sm leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
