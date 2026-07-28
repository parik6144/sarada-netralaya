import SiteLayout from '@/components/luxury/SiteLayout';
import PageHero from '@/components/luxury/PageHero';
import Link from 'next/link';
import { site } from '@/data/site';

export const metadata = {
  title: 'Privacy Policy | SARADA Netralaya & Maternity',
  description: 'How SARADA Netralaya collects, uses, and protects your personal information.',
};

const sections = [
  {
    title: '1. Who we are',
    body: [
      `${site.name} (“SARADA”, “we”, “us”) operates this website and provides eye-care services from ${site.address}.`,
      `For privacy questions, contact us at ${site.email} or call ${site.phones.join(' / ')}.`,
    ],
  },
  {
    title: '2. Information we collect',
    body: [
      'When you book an appointment or send a contact message, we may collect your name, phone number, email address, preferred doctor, preferred date/time, and any message you write.',
      'We may also collect basic technical data such as browser type, device information, and pages visited, to keep the website secure and working well.',
    ],
  },
  {
    title: '3. How we use your information',
    body: [
      'To confirm appointments, answer enquiries, and provide clinical coordination.',
      'To contact you by phone or email about your request.',
      'To improve our website, patient communication, and hospital services.',
      'To meet legal, regulatory, or clinical record-keeping requirements where applicable.',
    ],
  },
  {
    title: '4. How we share information',
    body: [
      'We do not sell your personal information.',
      'Your enquiry or booking details may be shared internally with our front-desk and clinical team so we can respond.',
      'We may use email delivery services to notify our team of website form submissions.',
      'We may disclose information if required by law, regulation, or to protect patient safety.',
    ],
  },
  {
    title: '5. Data security',
    body: [
      'We take reasonable technical and organisational steps to protect information submitted through this website.',
      'No online transmission is completely secure. Please avoid sending highly sensitive medical documents through the public contact form unless asked.',
    ],
  },
  {
    title: '6. Cookies and analytics',
    body: [
      'Our website may use essential cookies needed for basic functionality.',
      'If analytics tools are enabled, they help us understand aggregate traffic patterns — not to sell your identity.',
    ],
  },
  {
    title: '7. Your choices',
    body: [
      'You may request access, correction, or deletion of information you submitted through the website by contacting us.',
      'If you no longer wish to receive follow-up calls or emails about a website enquiry, tell our desk and we will update our records where legally allowed.',
    ],
  },
  {
    title: '8. Children’s privacy',
    body: [
      'Parents or guardians should submit paediatric appointment requests on behalf of children. We do not knowingly collect children’s data for marketing purposes.',
    ],
  },
  {
    title: '9. Updates to this policy',
    body: [
      'We may update this Privacy Policy from time to time. The “Last updated” date at the top of this page will change when we do.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Legal"
        title="Privacy"
        accent="Policy"
        description="How we handle personal information submitted through appointments, contact forms, and your use of this website."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Privacy Policy', href: '/privacy-policy' },
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
            <p className="text-[#F5D565] text-xs tracking-[0.16em] uppercase font-semibold">Need help?</p>
            <p className="mt-2 text-sm text-white/80 leading-relaxed">
              Questions about privacy or your submitted data — call {site.phones[0]} or email {site.email}.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-full bg-[#F5D565] px-5 py-2.5 text-xs font-bold text-[#0B1F3A]">
                Contact us
              </Link>
              <Link href="/terms" className="rounded-full border border-white/30 px-5 py-2.5 text-xs font-semibold text-white">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
