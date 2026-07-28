import Link from 'next/link';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  accent?: string;
  description: string;
  breadcrumbs?: { label: string; href: string }[];
}

export default function PageHero({ eyebrow, title, accent, description, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 bg-gradient-to-b from-[#F0F6FA] via-white to-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-500 mb-6">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                <Link href={crumb.href} className="hover:text-brand-red transition-colors">
                  {crumb.label}
                </Link>
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <p className="text-[11px] tracking-[0.2em] uppercase font-semibold text-brand-red mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 max-w-4xl">
          {title}
          {accent ? (
            <>
              {' '}
              <span className="text-brand-red">{accent}</span>
            </>
          ) : null}
        </h1>
        <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
