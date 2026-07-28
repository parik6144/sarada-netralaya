import SiteLayout from '@/components/luxury/SiteLayout';
import PageHero from '@/components/luxury/PageHero';
import Link from 'next/link';
import { site } from '@/data/site';

export const metadata = {
  title: 'Terms of Use | SARADA Netralaya & Maternity',
  description: 'Terms governing use of the SARADA Netralaya website and online appointment requests.',
};

const sections = [
  {
    title: '1. Acceptance of terms',
    body: [
      `By using the website of ${site.name}, you agree to these Terms of Use. If you do not agree, please do not use the site.`,
    ],
  },
  {
    title: '2. Informational purpose only',
    body: [
      'Content on this website (including treatment explanations, technology descriptions, and FAQs) is for general education. It is not a personal medical diagnosis or prescription.',
      'Always consult our doctors for advice specific to your eyes and health. In an emergency, call us immediately or visit the nearest emergency facility.',
    ],
  },
  {
    title: '3. Online appointments & contact forms',
    body: [
      'Submitting an appointment request does not guarantee a confirmed slot until our team verifies availability and contacts you.',
      'Please provide accurate phone and contact details so we can reach you. Incorrect information may delay confirmation.',
      'We may reschedule or decline requests based on clinical urgency, doctor availability, or incomplete details.',
    ],
  },
  {
    title: '4. Medical emergencies',
    body: [
      `Sudden vision loss, severe eye pain, chemical injury, flashes with curtain-like shadows, or trauma need urgent care. Call ${site.phones[0]} / ${site.phones[1]} — do not wait for a website form reply.`,
    ],
  },
  {
    title: '5. Insurance & cashless information',
    body: [
      'Empanelment and cashless facility details on this website are for guidance. Final coverage depends on your policy, TPA approval, and verification at our front desk.',
      'Bring valid ID, insurance/Ayushman card, and any required referral documents for cashless processing.',
    ],
  },
  {
    title: '6. Intellectual property',
    body: [
      'Hospital name, logo, text, graphics, and page designs on this website belong to SARADA or its licensors. You may not copy or reuse them for commercial purposes without permission.',
    ],
  },
  {
    title: '7. Acceptable use',
    body: [
      'Do not misuse the website — including submitting false bookings, attempting to disrupt the site, scraping content at scale, or uploading harmful material.',
      'We may block access or ignore abusive submissions.',
    ],
  },
  {
    title: '8. Limitation of liability',
    body: [
      'While we aim to keep website information accurate and services available, we do not warrant that the site will be uninterrupted or error-free.',
      'To the extent permitted by law, SARADA is not liable for losses arising solely from website use, delayed email delivery, or reliance on general educational content without clinical consultation.',
    ],
  },
  {
    title: '9. Privacy',
    body: [
      'Personal information submitted through forms is handled as described in our Privacy Policy.',
    ],
  },
  {
    title: '10. Changes to these terms',
    body: [
      'We may update these Terms of Use from time to time. Continued use of the website after changes means you accept the updated terms.',
    ],
  },
  {
    title: '11. Contact',
    body: [
      `${site.name}, ${site.address}. Phone: ${site.phones.join(' / ')}. Email: ${site.email}. Hours: ${site.hours}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Legal"
        title="Terms of"
        accent="Use"
        description="Rules for using our website, requesting appointments online, and understanding educational content."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Terms', href: '/terms' },
        ]}
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <p className="text-sm text-slate-500 mb-8">Last updated: 29 July 2026</p>

          <div className="space-y-8">
            {sections.map((s) => (
              <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
                <h2 className="text-lg font-bold text-[#0B1F3A]">{s.title}</h2>
                <div className="mt-3 space-y-3">
                  {s.body.map((p) => (
                    <p key={p} className="text-sm text-slate-600 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-[#0B1F3A] p-6 text-white">
            <p className="text-[#F5D565] text-xs tracking-[0.16em] uppercase font-semibold">Questions?</p>
            <p className="mt-2 text-sm text-white/80 leading-relaxed">
              For legal or service questions, reach our desk at {site.phones[0]} or visit the contact page.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-full bg-[#F5D565] px-5 py-2.5 text-xs font-bold text-[#0B1F3A]">
                Contact us
              </Link>
              <Link
                href="/privacy-policy"
                className="rounded-full border border-white/30 px-5 py-2.5 text-xs font-semibold text-white"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
