'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Eye, Cross, Heart, Star, Clock, Activity, Award } from 'lucide-react';

interface HeroSectionProps {
  onBookAppointment: () => void;
}

export default function HeroSection({ onBookAppointment }: HeroSectionProps) {
  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-28 pb-20">
      {/* Soft gradient background blobs - red & blue from logo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-brand-blue-50 rounded-full blur-3xl opacity-80" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-red-50 rounded-full blur-3xl opacity-80" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-brand-red font-[var(--font-montserrat)] font-bold text-sm tracking-widest uppercase mb-4">
              Passion for Excellence
            </p>
            <h1 className="font-[var(--font-montserrat)] font-extrabold text-4xl sm:text-5xl lg:text-6xl text-brand-black leading-tight mb-6">
              Advanced Eye Care{' '}
              <span className="text-brand-red">Center</span>
            </h1>
            <p className="text-brand-blue font-[var(--font-montserrat)] text-lg sm:text-xl mb-2 font-semibold">
              Passion for Excellence{' '}
              <span className="text-brand-gray mx-2">|</span>{' '}
              Committed to Care
            </p>
            <p className="text-brand-gray text-base sm:text-lg mb-4 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Jamshedpur&apos;s premier eye hospital offering world-class ophthalmology services with cutting-edge technology and compassionate patient care. From cataract surgery to LASIK, glaucoma to retinal care — your vision is in expert hands at SARADA Netralaya.
            </p>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
              {['Cataract', 'LASIK', 'Glaucoma', 'Retina', 'Cornea', 'Pediatric', 'Dry Eye'].map((s) => (
                <span key={s} className="text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200 text-brand-gray hover:border-brand-red hover:text-brand-red transition-colors cursor-default">{s}</span>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button onClick={onBookAppointment} size="lg" className="bg-brand-red hover:bg-brand-red-dark text-white font-bold px-8 py-6 rounded-full text-base shadow-lg shadow-brand-red/25">
              Book Appointment
            </Button>
            <Button onClick={() => handleScrollTo('#treatments')} size="lg" variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue-50 hover:text-brand-blue-dark font-semibold px-8 py-6 rounded-full text-base">
              Our Services
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-shrink-0 relative"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            {/* Eye illustration - logo-matched with blue + red */}
            <svg viewBox="0 0 200 200" className="w-full h-full animate-iris-pulse">
              <defs>
                <radialGradient id="irisGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#33c1f5" />
                  <stop offset="40%" stopColor="#00AEEF" />
                  <stop offset="100%" stopColor="#008cc4" />
                </radialGradient>
                <radialGradient id="pupilGrad" cx="45%" cy="45%" r="50%">
                  <stop offset="0%" stopColor="#1a1a2e" />
                  <stop offset="100%" stopColor="#000000" />
                </radialGradient>
              </defs>
              {/* Eye white */}
              <ellipse cx="100" cy="100" rx="95" ry="65" fill="white" stroke="#e5e7eb" strokeWidth="2" />
              {/* Blue arc top - from logo */}
              <path d="M5 100 Q100 30 195 100" stroke="#00AEEF" strokeWidth="3" fill="none" strokeLinecap="round" />
              {/* Red arc bottom - from logo */}
              <path d="M5 100 Q100 170 195 100" stroke="#E31837" strokeWidth="3" fill="none" strokeLinecap="round" />
              {/* Iris - blue gradient */}
              <circle cx="100" cy="100" r="45" fill="url(#irisGrad)" />
              <circle cx="100" cy="100" r="45" fill="none" stroke="#008cc4" strokeWidth="1" />
              {/* Iris lines */}
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i * 30 * Math.PI) / 180;
                const x1 = 100 + 20 * Math.cos(angle);
                const y1 = 100 + 20 * Math.sin(angle);
                const x2 = 100 + 43 * Math.cos(angle);
                const y2 = 100 + 43 * Math.sin(angle);
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#008cc4" strokeWidth="0.5" opacity="0.4" />;
              })}
              {/* Pupil */}
              <circle cx="100" cy="100" r="20" fill="url(#pupilGrad)" />
              {/* Light reflection */}
              <circle cx="90" cy="90" r="6" fill="white" opacity="0.4" />
              <circle cx="88" cy="88" r="3" fill="white" opacity="0.7" />
            </svg>
            {/* Floating icons */}
            <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -top-4 -right-4 bg-brand-red/10 backdrop-blur-sm rounded-xl p-3 border border-brand-red/20">
              <Eye className="h-6 w-6 text-brand-red" />
            </motion.div>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }} className="absolute -bottom-4 -left-4 bg-brand-blue/10 backdrop-blur-sm rounded-xl p-3 border border-brand-blue/20">
              <Cross className="h-6 w-6 text-brand-blue" />
            </motion.div>
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} className="absolute top-1/2 -right-8 bg-brand-red/10 backdrop-blur-sm rounded-xl p-3 border border-brand-red/20">
              <Heart className="h-6 w-6 text-brand-red" />
            </motion.div>
          </div>
        </motion.div>
      </div>
      {/* Stats bar - clean white with red/blue accents */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="absolute bottom-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 pb-6">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
            {[
              { icon: Clock, label: 'Years Experience', value: '15+', color: 'text-brand-red' },
              { icon: Activity, label: 'Surgeries Done', value: '10,000+', color: 'text-brand-blue' },
              { icon: Award, label: 'Conditions Treated', value: '50+', color: 'text-brand-red' },
              { icon: Star, label: 'Patient Rating', value: '4.9 \u2605', color: 'text-brand-blue' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className={`h-5 w-5 ${stat.color} mx-auto mb-1`} />
                <p className="font-[var(--font-montserrat)] font-bold text-xl sm:text-2xl text-brand-black">{stat.value}</p>
                <p className="text-brand-gray text-xs sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path d="M0 30L60 25C120 20 240 10 360 15C480 20 600 40 720 45C840 50 960 40 1080 30C1200 20 1320 15 1380 12L1440 10V60H0V30Z" fill="#F5F7FA" />
        </svg>
      </div>
    </section>
  );
}
