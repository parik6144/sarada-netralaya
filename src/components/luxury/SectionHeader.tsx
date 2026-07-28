'use client';

import { forwardRef } from 'react';

type Accent = 'blue' | 'gold' | 'red';

interface SectionHeaderProps {
  eyebrow: string;
  titleWhite: string;
  titleAccent: string;
  description?: string;
  accent?: Accent;
  align?: 'left' | 'center';
}

const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ eyebrow, titleWhite, titleAccent, description, accent = 'red', align = 'left' }, ref) => {
    const isCenter = align === 'center';
    const useBlue = accent === 'blue';
    const accentText = useBlue ? 'text-brand-blue' : 'text-brand-red';
    const accentClass = useBlue ? 'text-brand-blue' : 'text-brand-red';
    const lineFrom = useBlue ? 'from-brand-blue' : 'from-brand-red';

    return (
      <div ref={ref} className={isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-4xl'}>
        <div className={`flex items-center gap-3 mb-4 ${isCenter ? 'justify-center' : ''}`}>
          {isCenter && (
            <div className={`h-px w-8 bg-gradient-to-r from-transparent ${useBlue ? 'to-brand-blue/50' : 'to-brand-red/50'}`} />
          )}
          <div className={`h-px w-8 bg-gradient-to-r ${lineFrom} to-transparent`} />
          <span className={`text-[11px] tracking-[0.2em] uppercase font-semibold ${accentText}`}>
            {eyebrow}
          </span>
          {isCenter && (
            <div className={`h-px w-8 bg-gradient-to-l from-transparent ${useBlue ? 'to-brand-blue/50' : 'to-brand-red/50'}`} />
          )}
        </div>

        <h2 className="section-title">
          <span className="text-slate-900">{titleWhite}</span>{' '}
          <span className={accentClass}>{titleAccent}</span>
        </h2>

        {description && (
          <p className={`section-desc mt-4 ${isCenter ? 'mx-auto' : ''}`}>{description}</p>
        )}
      </div>
    );
  }
);

SectionHeader.displayName = 'SectionHeader';

export default SectionHeader;
