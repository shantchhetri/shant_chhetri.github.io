// ─────────────────────────────────────────────────────────────
//  PROFILE — personal details, links, metrics, CV
//  Source: Shant Chhetri CV (July 2026). Edit freely.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Shant Chhetri',
  postNominal: 'PhD',
  monogram: 'SC',
  designation: 'Research Scholar | Organic Electronics | Molecular Semiconductors',
  department: 'Department of Chemical Sciences',
  institution: 'Indian Institute of Science Education and Research (IISER) Kolkata',
  institutionShort: 'IISER Kolkata',
  location: 'Kolkata, West Bengal, India',
  lab: 'Molecular Energy and Electronic Lab',
  labUrl: 'https://www.iiserkol.ac.in/~rvlab/',
  intro:
    'Exploring the fundamental relationship between molecular structure, solid-state organization, and charge transport to advance next-generation organic electronic materials and semiconductor devices.',

  // The email is stored in two parts and assembled in the browser, which keeps it
  // out of the HTML that simple spam bots scrape.
  emailUser: 'shantchhetri1996',
  emailDomain: 'gmail.com',

  /** Portrait: put a photo at public/images/portrait.jpg and set this to "images/portrait.jpg" */
  portrait: 'images/portrait.jpg',
};

export const academicProfiles: {
  id: 'scholar' | 'orcid' | 'researchgate' | 'scopus' | 'linkedin';
  label: string;
  handle: string;
  url: string;
}[] = [
  { id: 'orcid', label: 'ORCID', handle: '0009-0003-3741-0126', url: 'https://orcid.org/0009-0003-3741-0126' },
  {
    id: 'scholar',
    label: 'Google Scholar',
    handle: 'Citations & h-index',
    url: 'https://scholar.google.com/citations?hl=en&user=A1iJFFgAAAAJ&view_op=list_works&sortby=pubdate',
  },
  { id: 'researchgate', label: 'ResearchGate', handle: 'Research network', url: '' }, // ← paste profile URL
  { id: 'scopus', label: 'Scopus', handle: 'Author profile', url: '' }, // ← paste profile URL
  { id: 'linkedin', label: 'LinkedIn', handle: 'shant-chhetri-phd', url: 'https://www.linkedin.com/in/shant-chhetri-phd-34a335264' },
];

/**
 * Scientific-impact figures. Leave a value as null until you have checked it
 * on Google Scholar / Scopus — null values are shown as "add verified value".
 * `publications` is counted automatically from publications.ts when left null.
 */
export const metrics = {
  citations: null as number | null,
  hIndex: null as number | null,
  i10Index: null as number | null,
  publications: null as number | null,
  source: 'Google Scholar',
  lastVerified: '', // e.g. "November 2026"
};

export const cv = {
  /** Replace public/cv/Shant_Chhetri_CV.pdf with a new file of the same name to update. */
  file: 'cv/Shant_Chhetri_CV.pdf',
  lastUpdated: 'November 2026',
  pages: 3,
  sections: [
    'Research profile',
    'Education',
    'Research experience',
    'Publications (first-author & co-author)',
    'Honours, awards & fellowships',
    'Technical skills',
    'Mentoring & teaching',
    'Training, workshops & presentations',
  ],
};

/** Animated keyword display in the hero / about area */
export const keywords = [
  'n-type organic semiconductors',
  'Organic field-effect transistors',
  'Naphthalene diimides',
  'Charge transport',
  'Brickwork packing',
  'Halogen bonding',
  'Thin-film morphology',
  'GIWAXS',
  'Ambient stability',
  'Exciton coupling',
  'Open-shell radicals',
  'Molecular design',
  'DFT & TD-DFT',
  'Supramolecular assembly',
];
