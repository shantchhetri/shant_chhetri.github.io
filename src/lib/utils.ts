export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export const doiUrl = (doi: string) => `https://doi.org/${doi}`;

/** Resolve a path in /public so it works from any base URL. */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

export function formatNewsDate(date: string) {
  const [y, m, d] = date.split('-').map(Number);
  if (!m) return String(y);
  const month = new Date(y, m - 1, 1).toLocaleString('en-GB', { month: 'short' });
  return d ? `${d} ${month} ${y}` : `${month} ${y}`;
}
