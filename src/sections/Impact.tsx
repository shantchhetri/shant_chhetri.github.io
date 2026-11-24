import { ArrowUpRight, AtSign, BookMarked, GraduationCap, Linkedin, Network, type LucideIcon } from 'lucide-react';
import { CountUp } from '../components/CountUp';
import { Reveal } from '../components/Reveal';
import { Section } from '../components/Section';
import { academicProfiles, metrics } from '../data/profile';
import { publishedCount } from '../data/publications';

const icons: Record<string, LucideIcon> = {
  orcid: AtSign,
  scholar: GraduationCap,
  researchgate: Network,
  scopus: BookMarked,
  linkedin: Linkedin,
};

export function Impact() {
  const stats: { label: string; value: number | null; note?: string }[] = [
    { label: 'Publications', value: metrics.publications ?? publishedCount, note: metrics.publications === null ? 'peer-reviewed, listed on this site' : undefined },
    { label: 'Citations', value: metrics.citations },
    { label: 'h-index', value: metrics.hIndex },
    { label: 'i10-index', value: metrics.i10Index },
  ];

  return (
    <Section
      id="impact"
      eyebrow="Scientific Impact"
      title={
        <>
          Academic <em>profiles</em>
        </>
      }
      intro="Find my work and research profiles on these platforms."
    >
      <Reveal>
        <dl className="mx-auto flex max-w-4xl flex-wrap justify-center gap-4">
          {stats.filter((s) => s.value !== null).map((s) => (
            <div key={s.label} className="card min-w-[11rem] flex-1 p-6 text-center">
              <dt className="text-sm font-medium text-muted">{s.label}</dt>
              <dd className="mt-2">
                <span className="font-mono text-5xl font-semibold text-wine">
                  <CountUp to={s.value!} />
                </span>
                {s.note && <span className="mt-1 block text-xs text-muted">{s.note}</span>}
              </dd>
            </div>
          ))}
        </dl>
        {metrics.lastVerified && (
          <p className="mt-3 text-center text-xs text-muted">
            Source: {metrics.source} · verified {metrics.lastVerified}
          </p>
        )}
      </Reveal>

      <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
        {academicProfiles.filter((p) => p.url).map((p, i) => {
          const Icon = icons[p.id];
          return (
            <Reveal as="li" key={p.id} delay={i * 0.05}>
              {p.url ? (
                <a href={p.url} target="_blank" rel="noopener noreferrer me" className="card card-hover group flex h-full flex-col gap-4 p-5">
                  <span className="flex items-start justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-lg bg-wine/10 text-wine transition-colors group-hover:bg-wine group-hover:text-white">
                      <Icon size={20} />
                    </span>
                    <ArrowUpRight size={16} className="text-muted group-hover:text-wine" />
                  </span>
                  <span>
                    <span className="block font-semibold text-navy">{p.label}</span>
                    <span className="block truncate font-mono text-xs text-muted">{p.handle}</span>
                  </span>
                </a>
              ) : (
                <div className="flex h-full flex-col gap-4 rounded-xl border border-dashed border-line p-5">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-paper text-muted">
                    <Icon size={20} />
                  </span>
                  <span>
                    <span className="block font-semibold text-navy/60">{p.label}</span>
                    <span className="block text-xs italic text-muted">Link to be added</span>
                  </span>
                </div>
              )}
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
