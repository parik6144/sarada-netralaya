import BookAppointmentButton from '@/components/luxury/BookAppointmentButton';
import SiteLayout from '@/components/luxury/SiteLayout';
import PageHero from '@/components/luxury/PageHero';
import DoctorShowcase from '@/components/luxury/DoctorShowcase';
import ExploreMore from '@/components/luxury/ExploreMore';
import Link from 'next/link';

export const metadata = {
  title: 'Our Doctors | SARADA Netralaya & Maternity',
  description:
    'Meet Dr. Nitin G. Dhira (Cataract & Glaucoma) and Dr. Nitish R. Bharadwaj (Cataract & Cornea) at SARADA Netralaya, Jamshedpur.',
};

export default function DoctorsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Specialists"
        title="Two Specialists."
        accent="One Trusted Team."
        description="At SARADA Netralaya, your care is led by experienced ophthalmologists who diagnose carefully, explain in plain language, and treat with precision — from high-end cataract surgery to glaucoma and cornea care."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Doctors', href: '/doctors' },
        ]}
      />

      <section className="py-10 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                title: 'Clear diagnosis',
                body: 'We show you which part of the eye is affected and how serious it is today.',
              },
              {
                title: 'Plain-language plans',
                body: 'Medicines, laser, or surgery — every option is explained before you decide.',
              },
              {
                title: 'Guided recovery',
                body: 'Drop schedules, warning signs, and follow-ups are written clearly for safe healing.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
                <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DoctorShowcase hideHeader detailed />

      <section className="luxury-section">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">
          <div className="rounded-2xl bg-gradient-to-r from-[#0B1F3A] to-[#163A5F] px-6 py-10 sm:px-10">
            <h2 className="text-xl sm:text-2xl font-semibold text-white">
              Ready to meet your surgeon?
            </h2>
            <p className="mt-3 text-sm text-white/80 max-w-xl mx-auto">
              Book a consultation with Dr. Nitin G. Dhira or Dr. Nitish R. Bharadwaj at our Baradwari centre.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <BookAppointmentButton className="inline-flex justify-center px-7 py-3 rounded-full bg-brand-red text-white text-sm font-semibold hover:bg-brand-red-dark transition-colors">Book Appointment</BookAppointmentButton>
              <a
                href="tel:+917091090014"
                className="inline-flex justify-center px-7 py-3 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors"
              >
                Call 70910 90014
              </a>
            </div>
          </div>
        </div>
      </section>

      <ExploreMore
        links={[
          { label: 'Cataract Surgery', href: '/treatments/cataract', desc: 'High-end phaco with premium IOLs.' },
          { label: 'Glaucoma Care', href: '/treatments/glaucoma', desc: 'Pressure control to protect the optic nerve.' },
          { label: 'Cornea Treatment', href: '/treatments/cornea', desc: 'Infection, keratoconus, and surface care.' },
          { label: 'Book Appointment', href: '/appointment', desc: 'Schedule your specialist consultation.' },
        ]}
      />
    </SiteLayout>
  );
}
