// Shared content types. Edit the data files in this folder — not the components —
// to update the website. See README.md for a guide.

export type PublicationType = 'research' | 'review' | 'chapter' | 'conference' | 'other';

export interface Publication {
  id: string;
  type: PublicationType;
  title: string;
  /** Full author list, in published order. Your own name is highlighted automatically. */
  authors: string[];
  journal: string;
  /** Short journal name for compact display, e.g. "J. Phys. Chem. C" */
  journalShort?: string;
  year: number;
  volume?: string;
  issue?: string;
  pages?: string;
  /** DOI without the https://doi.org/ prefix, e.g. "10.1021/acs.jpcc.4c01133" */
  doi?: string;
  /** Publisher page for the article (falls back to the DOI link) */
  url?: string;
  /** Paste the published abstract here. Leave undefined if not yet added. */
  abstract?: string;
  /** Optional graphical abstract, placed in public/images/research/ */
  graphicalAbstract?: string;
  /**
   * Optional screenshot of the article's first page (title + authors), e.g.
   * "images/papers/chemsci-2024.png". Shown in the pop-up preview instead of
   * the built-in title page. Leave empty to use the built-in one.
   */
  screenshot?: string;
  /** "published" (default), "accepted", "under-revision", "submitted" */
  status?: 'published' | 'accepted' | 'under-revision' | 'submitted';
  /** Show in the Featured Publications strip */
  featured?: boolean;
  /** Your role, e.g. "First author" or "Corresponding author" */
  role?: string;
  keywords?: string[];
}

export interface ResearchArea {
  id: string;
  number: string;
  title: string;
  /** Which built-in scientific illustration to draw on the card */
  illustration: IllustrationKind;
  summary: string;
  overview: string;
  objectives: string[];
  approaches: string[];
  findings: { text: string; pubId?: string }[];
  publicationIds: string[];
  /** Paths to your own figures in public/images/research/ */
  figures?: { src: string; caption: string }[];
  /** Set true for areas that are still placeholders */
  placeholder?: boolean;
}

export type IllustrationKind =
  | 'device'
  | 'molecule'
  | 'synthesis'
  | 'transport'
  | 'structure'
  | 'ofet'
  | 'perovskite'
  | 'packing';

export type NewsCategory =
  | 'Publication'
  | 'Research Achievement'
  | 'Conference'
  | 'Award & Fellowship'
  | 'Collaboration'
  | 'Professional Update';

export interface NewsItem {
  id: string;
  /** ISO-style date: "2026", "2026-07" or "2026-07-15". Newest items appear first. */
  date: string;
  category: NewsCategory;
  title: string;
  description: string;
  link?: { label: string; href: string };
  image?: string;
}

export type JourneyKind =
  | 'Education'
  | 'Research Position'
  | 'Award'
  | 'Fellowship'
  | 'Presentation'
  | 'Invited Talk'
  | 'Training'
  | 'Teaching'
  | 'Membership';

export interface JourneyItem {
  id: string;
  period: string;
  /** used for ordering (start year) */
  sortYear: number;
  kind: JourneyKind;
  title: string;
  org: string;
  detail?: string;
  placeholder?: boolean;
}

export type GalleryCategory =
  | 'Laboratory Research'
  | 'Molecular Structures'
  | 'Crystal Structures'
  | 'Device Fabrication'
  | 'Microscopy & Characterization'
  | 'Scientific Conferences'
  | 'Research Group Activities';

export interface GalleryItem {
  id: string;
  category: GalleryCategory;
  title: string;
  description: string;
  /** Path such as "images/gallery/glovebox.jpg". Leave empty to show a placeholder. */
  src?: string;
  /** Tall images get a taller tile in the masonry grid */
  orientation?: 'portrait' | 'landscape' | 'square';
}
