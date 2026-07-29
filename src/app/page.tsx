'use client';

import SiteLayout from '@/components/luxury/SiteLayout';
import LuxuryHero from '@/components/luxury/LuxuryHero';
import HospitalIntro from '@/components/luxury/HospitalIntro';
import WhyChooseSection from '@/components/luxury/WhyChooseSection';
import BranchesSection from '@/components/luxury/BranchesSection';
import HomeSurgeonsSection from '@/components/luxury/HomeSurgeonsSection';
import TreatmentsSection from '@/components/luxury/TreatmentsSection';
import CashlessFacilityBadge from '@/components/luxury/CashlessFacilityBadge';
import InsuranceLogoMarquee from '@/components/luxury/InsuranceLogoMarquee';

export default function Home() {
  return (
    <SiteLayout>
      <LuxuryHero />
      <HospitalIntro />
      <WhyChooseSection />
      <BranchesSection />
      <HomeSurgeonsSection />
      <TreatmentsSection limit={6} />
      {/* Testimonials hidden until real patient reviews are supplied */}

      {/* Catchy cashless trust strip */}
      <section className="relative py-12 sm:py-14 bg-gradient-to-b from-[#F4F8FB] via-white to-[#F4F8FB] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,16,46,0.06),_transparent_55%)]" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-8">
            <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-brand-red">
              Hassle-free treatment
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0B1F3A]">
              Money should never delay your vision care
            </h2>
          </div>
          <CashlessFacilityBadge />
        </div>
      </section>

      <InsuranceLogoMarquee />
    </SiteLayout>
  );
}
