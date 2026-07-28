import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, ArrowRight } from 'lucide-react';

const blogs = [
  { title: 'Understanding Cataracts: When Should You Consider Surgery?', date: 'Jun 15, 2024', excerpt: 'Cataracts are one of the most common eye conditions affecting millions worldwide. Learn about the signs, symptoms, and the right time to consider surgical intervention.', accent: 'bg-brand-red' },
  { title: 'LASIK Myths Debunked: What You Need to Know', date: 'Jun 10, 2024', excerpt: 'Many people hesitate to get LASIK due to common misconceptions. We separate fact from fiction to help you make an informed decision about laser eye surgery.', accent: 'bg-brand-blue' },
  { title: '5 Daily Eye Care Tips for Screen Users', date: 'Jun 5, 2024', excerpt: "In today's digital age, our eyes are under constant strain from screens. Discover simple yet effective habits to protect your vision during long work hours.", accent: 'bg-brand-red' },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-16 md:py-24 px-4 bg-brand-gray-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-brand-red font-semibold text-sm tracking-widest uppercase mb-2">Our Blog</p>
          <h2 className="font-[var(--font-montserrat)] font-extrabold text-3xl md:text-4xl text-brand-black mb-4">
            Health Tips & Articles
          </h2>
          <div className="w-20 h-1 bg-brand-blue mx-auto rounded-full mb-6" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, i) => (
            <motion.div key={blog.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
              <Card className="h-full bg-white border border-gray-100 hover:border-brand-blue/50 shadow-md hover:shadow-lg transition-all group">
                <CardContent className="p-6">
                  <div className={`${blog.accent} text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3`}>{blog.date}</div>
                  <h3 className="font-[var(--font-montserrat)] font-bold text-brand-black text-lg mb-3 group-hover:text-brand-red transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-brand-gray text-sm leading-relaxed mb-4">{blog.excerpt}</p>
                  <button className="text-brand-red font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Read More <ArrowRight className="h-4 w-4" />
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}