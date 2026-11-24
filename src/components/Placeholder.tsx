import type { ReactNode } from 'react';

/** Clearly-marked notice for content that still needs to be added. */
export function Placeholder({ children }: { children: ReactNode }) {
  return <p className="placeholder-note">{children}</p>;
}
