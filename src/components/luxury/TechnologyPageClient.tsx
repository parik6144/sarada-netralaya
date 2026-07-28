'use client';

import BookAppointmentButton from '@/components/luxury/BookAppointmentButton';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SiteLayout from '@/components/luxury/SiteLayout';
import ExploreMore from '@/components/luxury/ExploreMore';
import { site } from '@/data/site';

const tech = [
  {
    name: 'Zeiss Lumera 700',
    category: 'Surgical Microscope',
    image: '/images/tech-microscope.png',
    resultImage: '/images/treatment-cataract.png',
    simple: 'Like a super-clear camera for the surgeon — so tiny eye structures look sharp during surgery.',
    howTitle: 'How it works',
    how: [
      'The microscope sits above the eye and magnifies every layer.',
      'Bright, stable light helps the surgeon see depth clearly.',
      'Integrated imaging can guide precise cuts in real time.',
    ],
    resultTitle: 'What result you get',
    result:
      'Safer, more precise cataract and cornea surgery — less guesswork, clearer steps, and better control in every delicate moment.',
    helps: 'Cataract · Cornea · Complex surgery',
    color: '#0096D6',
    link: '/treatments/cataract',
  },
  {
    name: 'Alcon Centurion',
    category: 'Phaco Machine',
    image: '/images/tech-phaco.png',
    resultImage: '/images/cataract-lifestyle.png',
    simple: 'Gently breaks and removes a cloudy cataract lens through a tiny opening — usually stitchless.',
    howTitle: 'How it works',
    how: [
      'A tiny tip enters through a micro opening in the eye.',
      'Ultrasound energy softens the cloudy natural lens.',
      'Fluid control keeps eye pressure stable while the lens is removed.',
      'A clear premium IOL (artificial lens) is placed in its place.',
    ],
    resultTitle: 'What result you get',
    result:
      'Foggy vision clears. Colours look brighter. Many people return to light daily activity the next day — with usually no stitch.',
    helps: 'High-end cataract surgery',
    color: '#0EA5E9',
    link: '/treatments/cataract',
  },
  {
    name: 'Zeiss Cirrus HD-OCT',
    category: 'Eye Scanner (OCT)',
    image: '/images/tech-oct.png',
    resultImage: '/images/treatment-glaucoma.png',
    simple: 'Takes a layered photo of the retina and optic nerve — like a CT scan for the eye, without cutting.',
    howTitle: 'How it works',
    how: [
      'You rest your chin and look at a target light — no pain.',
      'A scanning beam maps retina layers in microns.',
      'The screen shows swelling, thinning, or nerve damage early.',
      'Doctors compare scans over time to track progress.',
    ],
    resultTitle: 'What result you get',
    result:
      'Early detection of retina and glaucoma problems — often before you notice big vision loss — so treatment can start in time.',
    helps: 'Retina · Glaucoma checks',
    color: '#0284C7',
    link: '/treatments/retina',
  },
  {
    name: 'Wavelight EX500',
    category: 'LASIK Laser',
    image: '/images/tech-lasik-laser.png',
    resultImage: '/images/lasik-lifestyle.png',
    simple: 'Reshapes the front window of the eye in seconds so light focuses clearly — after full safety tests.',
    howTitle: 'How it works',
    how: [
      'First we check cornea thickness, shape, dryness, and power.',
      'If suitable, the laser reshapes the cornea with computer guidance.',
      'Each pulse is measured for precision — often seconds per eye.',
      'If LASIK is not right, we explain safer options like PRK or ICL.',
    ],
    resultTitle: 'What result you get',
    result:
      'Many patients reduce dependence on glasses for distance vision. Clearer focus for sports, travel, and daily life — when you are a good candidate.',
    helps: 'LASIK & refractive care',
    color: '#4FA3D1',
    link: '/treatments/lasik',
  },
  {
    name: 'Topcon Maestro',
    category: 'Retina Imaging',
    image: '/images/tech-fundus.png',
    resultImage: '/images/treatment-retina.png',
    simple: 'Combines OCT and fundus photography — one visit, clearer picture of the back of the eye.',
    howTitle: 'How it works',
    how: [
      'A camera photographs the retina (the “film” at the back of the eye).',
      'OCT adds layered detail of the same area.',
      'We look for diabetic changes, macular swelling, or bleeding.',
      'Images are saved so follow-up visits can compare “before vs after”.',
    ],
    resultTitle: 'What result you get',
    result:
      'Faster, clearer diagnosis for diabetic eye disease and macular problems — so laser, injections, or surgery can be planned early.',
    helps: 'Diabetic eye · Macula',
    color: '#059669',
    link: '/treatments/retina',
  },
  {
    name: 'IPL & LLLT Systems',
    category: 'Dry Eye Therapy',
    image: '/images/tech-ipl.png',
    resultImage: '/images/treatment-dry-eye.png',
    simple: 'Light-based care for oil glands — when simple drops are not enough for screen-life dry eyes.',
    howTitle: 'How it works',
    how: [
      'We first test tear quality and oil-gland health.',
      'Gentle light pulses warm blocked eyelid oil glands.',
      'Better oil flow helps tears stay on the eye longer.',
      'Home care tips (blink breaks, lid hygiene) support lasting comfort.',
    ],
    resultTitle: 'What result you get',
    result:
      'Less burning, grit, and fluctuating blur on screens. Eyes feel more comfortable in AC rooms and long work hours.',
    helps: 'Dry eye clinic',
    color: '#D97706',
    link: '/treatments/dry-eye',
  },
];

const pillars = [
  {
    title: 'See the problem',
    body: 'Scans and maps show what is wrong — we explain findings in easy English on screen.',
    image: '/images/tech-oct.png',
  },
  {
    title: 'Match the machine',
    body: 'We choose the right technology for your exact eye condition — not one tool for everyone.',
    image: '/images/tech-phaco.png',
  },
  {
    title: 'Measure the result',
    body: 'Follow-up scans and clearer vision show progress — so you know treatment is working.',
    image: '/images/cataract-lifestyle.png',
  },
];

export default function TechnologyPageClient() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-[#0B1F3A] text-white pt-[88px] sm:pt-[104px]">
        <div className="absolute inset-0 opacity-35">
          <Image src="/images/tech-surgery.png" alt="" fill className="object-cover" sizes="100vw" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/92 to-[#0B1F3A]/55" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(79,163,209,0.28),_transparent_55%)]" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 py-12 sm:py-16">
          <nav className="flex flex-wrap items-center gap-2 text-xs text-white/60 mb-6">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/90">Technology</span>
          </nav>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] tracking-[0.14em] uppercase font-semibold text-[#F5D565] mb-4">
            See the Machine · Understand the Result
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl leading-tight">
            Powered by <span className="text-[#F5D565]">Precision</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed">
            Every machine below is explained with pictures — how it works, and what result you can expect — in school-level
            simple English.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/treatments/cataract"
              className="inline-flex justify-center px-7 py-3.5 rounded-full bg-[#F5D565] text-[#0B1F3A] text-sm font-bold hover:bg-yellow-300 transition-colors"
            >
              Explore Cataract Care
            </Link>
            <BookAppointmentButton className="inline-flex justify-center px-7 py-3.5 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors">Book Check-up</BookAppointmentButton>
          </div>
        </div>
      </section>

      {/* 3 visual pillars */}
      <section className="py-12 sm:py-14 bg-gradient-to-b from-[#F0F7FC] to-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-brand-blue">
              How technology helps you
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">See · Treat · Improve</h2>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-sky-100 bg-white overflow-hidden shadow-sm"
              >
                <div className="relative h-36">
                  <Image src={p.image} alt={p.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
                </div>
                <div className="p-5">
                  <div className="text-2xl font-bold text-sky-200">0{i + 1}</div>
                  <h3 className="mt-1 text-lg font-semibold text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{p.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed machine cards with images */}
      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-brand-red">Equipment library</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">
              Machines, workings &amp; results
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Scroll each guide: picture of the technology → how it works → what clearer vision or comfort you can expect.
            </p>
          </div>

          <div className="space-y-10 sm:space-y-14">
            {tech.map((t, i) => {
              const reverse = i % 2 === 1;
              return (
                <motion.article
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45 }}
                  className="rounded-[1.75rem] border border-slate-200 bg-white overflow-hidden shadow-sm"
                >
                  <div className={`grid lg:grid-cols-2 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                    {/* Main machine image */}
                    <div className="relative min-h-[240px] sm:min-h-[320px] lg:min-h-full">
                      <Image
                        src={t.image}
                        alt={`${t.name} — ${t.category}`}
                        fill
                        className="object-cover"
                        sizes="(max-width:1024px) 100vw, 50vw"
                        priority={i === 0}
                      />
                      <div className="absolute top-4 left-4">
                        <span
                          className="inline-flex rounded-full px-3 py-1 text-[10px] font-bold tracking-[0.12em] uppercase text-white border border-white/25 backdrop-blur-sm"
                          style={{ background: `${t.color}dd` }}
                        >
                          0{i + 1} · {t.category}
                        </span>
                      </div>
                    </div>

                    {/* Explanation */}
                    <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">{t.name}</h3>
                      <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed font-medium">{t.simple}</p>

                      <div className="mt-6">
                        <p className="text-[11px] tracking-[0.14em] uppercase font-bold" style={{ color: t.color }}>
                          {t.howTitle}
                        </p>
                        <ol className="mt-3 space-y-2.5">
                          {t.how.map((step, si) => (
                            <li key={step} className="flex gap-3 text-sm text-slate-600 leading-relaxed">
                              <span
                                className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
                                style={{ background: t.color }}
                              >
                                {si + 1}
                              </span>
                              {step}
                            </li>
                          ))}
                        </ol>
                      </div>

                      <div
                        className="mt-6 rounded-2xl border p-4 sm:p-5"
                        style={{ borderColor: `${t.color}33`, background: `${t.color}0d` }}
                      >
                        <p className="text-[11px] tracking-[0.14em] uppercase font-bold" style={{ color: t.color }}>
                          {t.resultTitle}
                        </p>
                        <p className="mt-2 text-sm text-slate-700 leading-relaxed">{t.result}</p>
                      </div>

                      <div className="mt-5 flex flex-wrap items-center gap-3">
                        <span
                          className="inline-flex rounded-full px-3 py-1 text-[11px] font-semibold"
                          style={{ background: `${t.color}14`, color: t.color }}
                        >
                          Helps: {t.helps}
                        </span>
                        <Link href={t.link} className="text-sm font-bold hover:underline" style={{ color: t.color }}>
                          Related treatment guide →
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Result visual strip */}
                  <div className="grid sm:grid-cols-[0.9fr_1.1fr] border-t border-slate-100 bg-[#F8FAFC]">
                    <div className="relative min-h-[140px] sm:min-h-[160px]">
                      <Image
                        src={t.resultImage}
                        alt={`${t.name} patient result visual`}
                        fill
                        className="object-cover"
                        sizes="(max-width:640px) 100vw, 40vw"
                      />
                    </div>
                    <div className="p-5 sm:p-6 flex flex-col justify-center">
                      <p className="text-[11px] tracking-[0.14em] uppercase font-semibold text-slate-500">
                        Result in everyday life
                      </p>
                      <p className="mt-2 text-sm sm:text-base font-medium text-slate-800 leading-relaxed">{t.result}</p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="rounded-3xl bg-gradient-to-br from-[#0B1F3A] to-[#123A5C] px-6 py-10 sm:px-10 text-center">
            <p className="text-[#F5D565] text-xs tracking-[0.16em] uppercase font-semibold">See it for yourself</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white">Book a technology-guided eye check</h2>
            <p className="mt-3 text-sm text-white/70 max-w-xl mx-auto">
              We show you scans and measurements on screen — then explain the plan in simple words.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <BookAppointmentButton className="inline-flex justify-center px-8 py-3.5 rounded-full bg-[#F5D565] text-[#0B1F3A] text-sm font-bold">Book Appointment</BookAppointmentButton>
              <a
                href={`tel:${site.phones[0].replace(/\s/g, '')}`}
                className="inline-flex justify-center px-8 py-3.5 rounded-full border border-white/30 text-white text-sm font-semibold"
              >
                Call {site.phones[0]}
              </a>
            </div>
          </div>
        </div>
      </section>

      <ExploreMore
        links={[
          { label: 'Cataract Surgery', href: '/treatments/cataract', desc: 'Premium lens options explained simply.' },
          { label: 'LASIK', href: '/treatments/lasik', desc: 'Laser vision correction suitability.' },
          { label: 'Book Appointment', href: '/appointment', desc: 'Schedule your consultation.' },
        ]}
      />
    </SiteLayout>
  );
}
