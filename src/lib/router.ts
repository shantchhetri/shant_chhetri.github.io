import { useEffect, useState } from 'react';

/**
 * Tiny hash router: each tab is its own page (#/about, #/publications …),
 * so visitors open sections one at a time instead of one long scroll.
 * Hash URLs work on any static host without server configuration, and the
 * browser Back button moves between visited tabs.
 */
export const PAGES = ['home', 'about', 'research', 'publications', 'gallery', 'news', 'asap', 'cv', 'contact'] as const;
export type Page = (typeof PAGES)[number];

export const pageHref = (p: Page) => (p === 'home' ? '#/' : `#/${p}`);

function read(): Page {
  const raw = window.location.hash.replace(/^#\/?/, '').split(/[/?]/)[0].toLowerCase();
  return (PAGES as readonly string[]).includes(raw) ? (raw as Page) : 'home';
}

export function usePage() {
  const [page, setPage] = useState<Page>(read);
  useEffect(() => {
    const on = () => setPage(read());
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  return page;
}
