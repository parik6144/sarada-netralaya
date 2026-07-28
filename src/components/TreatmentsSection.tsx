'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Zap, Shield, Scan, Heart, Droplets, Baby, Activity } from 'lucide-react';

const treatments = [
  { icon: Eye, name: 'Cataract Surgery', desc: 'Advanced phacoemulsification with premium intraocular lens implantation for clear, restored vision.', iconBg: 'bg-brand-red/10', iconBgHover: 'group-hover:bg-brand-red/20', iconColor: 'text-brand-red' },
  { icon: Zap, name: 'LASIK & Refractive Surgery', desc: 'Laser-assisted vision correction to reduce or eliminate dependence on glasses and contact lenses.', iconBg: 'bg-brand-blue/10', iconBgHover: 'group-hover:bg-brand-blue/20', iconColor: 'text-brand-blue' },
  { icon: Shield, name: 'Glaucoma Treatment', desc: 'Early detection and management of glaucoma to prevent irreversible optic nerve damage.', iconBg: 'bg-brand-red/10', iconBgHover: 'group-hover:bg-brand-red/20', iconColor: 'text-brand-red' },
  { icon: Scan, name: 'Retina Services', desc: 'Comprehensive diagnosis and treatment for retinal conditions including diabetic retinopathy and macular degeneration.', iconBg: 'bg-brand-blue/10', iconBgHover: 'group-hover:bg-brand-blue/20', iconColor: 'text-brand-blue' },
  { icon: Heart, name: 'Cornea Treatment', desc: 'Advanced corneal care including transplant surgery, cross-linking, and treatment of corneal infections.', iconBg: 'bg-brand-red/10', iconBgHover: 'group-hover:bg-brand-red/20', iconColor: 'text-brand-red' },
  { icon: Droplets, name: 'Dry Eye Treatment', desc: 'Comprehensive dry eye evaluation and management using advanced diagnostic tools and therapies.', iconBg: 'bg-brand-blue/10', iconBgHover: 'group-hover:bg-brand-blue/20', iconColor: 'text-brand-blue' },
  { icon: Baby, name: 'Pediatric Eye Care', desc: 'Specialized eye care for children including screening for lazy eye, squint, and refractive errors.', iconBg: 'bg-brand-red/10', iconBgHover: 'group-hover:bg-brand-red/20', iconColor: 'text-brand-red' },
  { icon: Activity, name: 'Diabetic Eye Care', desc: 'Regular screening and treatment for diabetes-related eye complications to preserve vision.', iconBg: 'bg-brand-blue/10', iconBgHover: 'group-hover:bg-brand-blue/20', iconColor: 'text-brand-blue' },
];

export default function TreatmentsSection() {
  return (
    <section id="treatments" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-brand-blue font-semibold text-sm tracking-widest uppercase mb-2">Our Services</p>
          <h2 className="font-[var(--font-montserrat)] font-extrabold text-3xl sm:text-4xl text-brand-black mb-4">Treatments We Offer</h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-10 h-1 bg-brand-red rounded-full" />
            <div className="w-10 h-1 bg-brand-blue rounded-full" />
          </div>
          <p className="text-brand-gray max-w-2xl mx-auto">We provide a comprehensive range of eye care services using the latest technology and techniques.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {treatments.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
              <Card className="h-full border border-gray-100 hover:border-brand-red/50 transition-all duration-300 shadow-sm hover:shadow-lg group cursor-pointer">
                <CardContent className="p-5 text-center">
                  <div className={`w-14 h-14 ${t.iconBg} ${t.iconBgHover} rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors`}>
                    <t.icon className={`h-7 w-7 ${t.iconColor} transition-colors`} />
                  </div>
                  <h3 className="font-[var(--font-montserrat)] font-bold text-brand-black mb-2">{t.name}</h3>
                  <p className="text-brand-gray text-sm leading-relaxed">{t.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}