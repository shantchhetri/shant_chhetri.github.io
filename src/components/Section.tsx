import type { ReactNode } from 'react';
import { cn } from '../lib/utils';
import { Reveal } from './Reveal';

interface Props {
  id: string;
  index?: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
  tone?: 'paper' | 'surface';
}

/** Section with a centred header: eyebrow pill, bold title, subtitle. */
export function Section({ id, eyebrow, title, intro, children, className }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn('bg-surface py-16 sm:py-20', className)}
    >
      <div className="container-page">
        <Reveal className="mx-auto mb-12 max-w-3xl text-center md:mb-14">
          <p className="chip mb-4 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]">{eyebrow}</p>
          <h2 id={`${id}-title`} className="text-3xl text-navy sm:text-4xl lg:text-[2.6rem] lg:leading-tight [&_em]:not-italic [&_em]:text-wine">
            {title}
          </h2>
          {intro && <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-[17px]">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
