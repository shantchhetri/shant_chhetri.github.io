import { AnimatePresence, motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { PaperPreview } from '../components/PaperPreview';
import { PublicationCard } from '../components/PublicationCard';
import { Reveal } from '../components/Reveal';
import { Section } from '../components/Section';
import { publications, publishedCount } from '../data/publications';

/** One list of research publications, newest first, with search and filters. Tap a paper to preview it. */
export function Publications() {
  const [q, setQ] = useState('');
  const [year, setYear] = useState('all');
  const [journal, setJournal] = useState('all');
  const [preview, setPreview] = useState<number | null>(null);

  const years = useMemo(() => [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a), []);
  const journals = useMemo(() => [...new Set(publications.map((p) => p.journal))].sort(), []);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return publications
      .filter((p) => (year === 'all' ? true : String(p.year) === year))
      .filter((p) => (journal === 'all' ? true : p.journal === journal))
      .filter((p) =>
        !needle
          ? true
          : [p.title, p.journal, p.authors.join(' '), p.abstract ?? '', (p.keywords ?? []).join(' '), p.doi ?? ''].join(' ').toLowerCase().includes(needle),
      )
      .sort((a, b) => b.year - a.year);
  }, [q, year, journal]);

  const active = q || year !== 'all' || journal !== 'all';
  const reset = () => {
    setQ('');
    setYear('all');
    setJournal('all');
  };

  return (
    <Section
      id="publications"
      eyebrow="Publications"
      title={
        <>
          Research <em>publications</em>
        </>
      }
      intro={`${publishedCount} peer-reviewed articles in journals including Chemical Science, J. Phys. Chem. C, J. Phys. Chem. Lett. and J. Mater. Chem. C. Tap any paper to preview its title page.`}
    >
      <Reveal>
        <div role="search" className="mx-auto grid max-w-5xl gap-3 md:grid-cols-12">
          <label className="relative md:col-span-5">
            <span className="sr-only">Search publications</span>
            <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
            <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search title, author, keyword, DOI…" className="field pl-9" />
          </label>
          <label className="md:col-span-2">
            <span className="sr-only">Filter by year</span>
            <select value={year} onChange={(e) => setYear(e.target.value)} className="field">
              <option value="all">All years</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </label>
          <label className="md:col-span-3">
            <span className="sr-only">Filter by journal</span>
            <select value={journal} onChange={(e) => setJournal(e.target.value)} className="field">
              <option value="all">All journals</option>
              {journals.map((j) => (
                <option key={j} value={j}>
                  {j}
                </option>
              ))}
            </select>
          </label>
          <button onClick={reset} disabled={!active} className="btn-ghost justify-center disabled:opacity-40 md:col-span-2">
            <X size={14} /> Reset
          </button>
        </div>
        <p className="mx-auto mt-5 max-w-5xl text-sm text-muted" aria-live="polite">
          Showing {filtered.length} of {publications.length}
        </p>
      </Reveal>

      <div className="mx-auto mt-4 max-w-5xl">
        <AnimatePresence initial={false}>
          {filtered.map((p, i) => (
            <motion.div key={p.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mb-3">
              <PublicationCard pub={p} onPreview={() => setPreview(i)} />
            </motion.div>
          ))}
        </AnimatePresence>
        {!filtered.length && (
          <p className="mt-8 border-t border-line pt-8 text-muted">
            No publications match these filters.{' '}
            <button onClick={reset} className="link-u text-navy">
              Clear filters
            </button>
          </p>
        )}
      </div>

      <PaperPreview list={filtered} index={preview} onClose={() => setPreview(null)} onIndex={setPreview} />
    </Section>
  );
}
