import SiteLayout from '@/components/luxury/SiteLayout';
import PageHero from '@/components/luxury/PageHero';
import FAQSection from '@/components/luxury/FAQSection';
import ExploreMore from '@/components/luxury/ExploreMore';

export const metadata = {
  title: 'FAQ | SARADA Netralaya',
  description: 'Common questions about cataract surgery, LASIK, glaucoma, insurance, recovery, and pediatric eye care.',
};

export default function FAQPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="FAQ"
        title="Common"
        accent="Questions"
        description="Clear answers about conditions, treatment, recovery, and insurance — from first symptoms to advanced care."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'FAQ', href: '/faq' },
        ]}
      />
      <FAQSection hideHeader />
      <ExploreMore
        links={[
          { label: 'All Treatments', href: '/treatments' },
          { label: 'Insurance', href: '/insurance' },
          { label: 'Book Appointment', href: '/appointment' },
        ]}
      />
    </SiteLayout>
  );
}
