// ─────────────────────────────────────────────────────────────
//  VISITOR ANALYTICS (GoatCounter: free, cookie-free, shows countries)
//
//  Switched off until you set VITE_GOATCOUNTER_CODE in the `.env` file
//  (see README → "Visitor statistics"). Your dashboard at
//  https://<code>.goatcounter.com then shows visitors, countries,
//  referring sites, devices, and the events tracked below.
// ─────────────────────────────────────────────────────────────

declare global {
  interface Window {
    goatcounter?: {
      count?: (vars: { path: string; title?: string; event?: boolean }) => void;
      no_onload?: boolean;
    };
  }
}

const CODE = (import.meta.env.VITE_GOATCOUNTER_CODE as string | undefined)?.trim();

const queue: { path: string; title?: string; event?: boolean }[] = [];

export const analyticsEnabled = !!CODE && /^[a-z0-9-]+$/i.test(CODE);

/** Load the GoatCounter script once. Page views are counted per tab by trackPage(). */
export function initAnalytics() {
  if (!analyticsEnabled || document.querySelector('script[data-goatcounter]')) return;
  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://gc.zgo.at/count.js';
  s.dataset.goatcounter = `https://${CODE}.goatcounter.com/count`;
  // the site is a set of tabs, so count each tab ourselves instead of only the first load
  s.dataset.goatcounterSettings = JSON.stringify({ no_onload: true });
  s.onload = () => {
    const q = queue.splice(0);
    q.forEach((v) => window.goatcounter?.count?.(v));
  };
  document.head.appendChild(s);

  // One listener for the whole page: CV downloads and article (DOI) clicks.
  document.addEventListener(
    'click',
    (e) => {
      const a = (e.target as Element | null)?.closest?.('a');
      if (!a) return;
      const href = a.getAttribute('href') ?? '';
      if (a.hasAttribute('download') || /\.pdf$/i.test(href)) {
        trackEvent('cv-download', 'CV downloaded');
      } else if (href.startsWith('https://doi.org/')) {
        trackEvent(`article/${href.slice('https://doi.org/'.length)}`, 'Article opened: ' + (a.textContent ?? '').trim().slice(0, 80));
      }
    },
    { capture: true },
  );
}

/**
 * Record an event, e.g. a CV download. Shows up in the dashboard as its own
 * row (with countries). Does nothing when analytics is off or blocked.
 */
export function trackEvent(path: string, title?: string) {
  try {
    window.goatcounter?.count?.({ path, title: title ?? path, event: true });
  } catch {
    /* analytics must never break the page */
  }
}

/** Count a page view for a tab (e.g. "/publications"). Queued until the script has loaded. */
export function trackPage(path: string, title?: string) {
  if (!analyticsEnabled) return;
  const v = { path, title };
  try {
    if (window.goatcounter?.count) window.goatcounter.count(v);
    else queue.push(v);
  } catch {
    /* analytics must never break the page */
  }
}
