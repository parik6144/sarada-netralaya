'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  { quote: 'The cataract surgery was completely painless. Dr. Dhira and his team made me feel so comfortable. I can see clearly now!', name: 'Rajesh Kumar', treatment: 'Cataract Surgery', stars: 5 },
  { quote: 'LASIK at SARADA changed my life. No more glasses! The entire process was smooth and quick.', name: 'Priya Singh', treatment: 'LASIK Surgery', stars: 5 },
  { quote: "My son's squint was corrected beautifully. The doctors are very patient with children.", name: 'Amit Sharma', treatment: 'Pediatric Eye Care', stars: 5 },
  { quote: 'Excellent diabetic eye care. They caught my retinopathy early and treated it effectively.', name: 'Sunita Devi', treatment: 'Diabetic Retinopathy', stars: 5 },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-brand-blue font-semibold text-sm tracking-widest uppercase mb-2">Testimonials</p>
          <h2 className="font-[var(--font-montserrat)] font-extrabold text-3xl md:text-4xl text-brand-black mb-4">
            What Our Patients Say
          </h2>
          <div className="w-20 h-1 bg-brand-red mx-auto rounded-full mb-6" />
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="h-full bg-brand-gray-light border border-gray-100 hover:border-brand-red/50 shadow-sm hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-brand-red/20 mb-3" />
                  <p className="italic text-brand-gray leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div>
                      <p className="font-[var(--font-montserrat)] font-bold text-brand-black">{t.name}</p>
                      <div className="flex gap-0.5 mt-1">
                        {Array.from({ length: t.stars }).map((_, si) => (
                          <Star key={si} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <Badge className="bg-brand-red text-white hover:bg-brand-red-dark">{t.treatment}</Badge>
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