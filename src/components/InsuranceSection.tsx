import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const insurers = [
  'Star Health', 'ICICI Lombard', 'HDFC ERGO', 'New India Assurance',
  'Bajaj Allianz', 'Religare Health', 'Max Bupa', 'United India Insurance',
];

export default function InsuranceSection() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-brand-blue font-semibold text-sm tracking-widest uppercase mb-2">Cashless Treatment</p>
          <h2 className="font-[var(--font-montserrat)] font-extrabold text-3xl md:text-4xl text-brand-black mb-4">
            Insurance Partners
          </h2>
          <div className="w-20 h-1 bg-brand-red mx-auto rounded-full mb-6" />
          <p className="text-brand-gray max-w-2xl mx-auto">
            We accept all major insurance plans for hassle-free cashless treatment
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {insurers.map((name, i) => (
            <motion.div key={name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }}>
              <Card className="border border-gray-100 hover:border-brand-blue/50 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-5 text-center">
                  <p className="font-[var(--font-montserrat)] font-semibold text-brand-black text-sm sm:text-base">{name}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}