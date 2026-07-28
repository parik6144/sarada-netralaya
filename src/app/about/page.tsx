import SiteLayout from '@/components/luxury/SiteLayout';
import PageHero from '@/components/luxury/PageHero';
import MissionVisionRich from '@/components/luxury/MissionVisionRich';
import HospitalIntro from '@/components/luxury/HospitalIntro';
import WhyChooseSection from '@/components/luxury/WhyChooseSection';
import ExploreMore from '@/components/luxury/ExploreMore';

export const metadata = {
  title: 'About Us | SARADA Netralaya & Maternity',
  description:
    'Learn about SARADA Netralaya — Advanced Eye Care Center in Jamshedpur with modern technology and compassionate care.',
};

export default function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About SARADA"
        title="Advanced Eye Care Center in"
        accent="Jamshedpur"
        description="World-class care, modern facilities, and compassionate service — with clear explanations at every step of your eye care journey."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
        ]}
      />
      <MissionVisionRich />
      <HospitalIntro hideHeader hideMissionVision hideReadMore />
      <WhyChooseSection hideHeader />
      <ExploreMore
        links={[
          { label: 'Meet Our Doctors', href: '/doctors', desc: 'Specialist profiles and areas of expertise.' },
          { label: 'View Treatments', href: '/treatments', desc: 'Condition guides from basic to advanced.' },
          { label: 'Book Appointment', href: '/appointment', desc: 'Schedule your consultation today.' },
        ]}
      />
    </SiteLayout>
  );
}
