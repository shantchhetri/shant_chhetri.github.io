// ─────────────────────────────────────────────────────────────
//  RESEARCH EXPERIENCE & TECHNICAL EXPERTISE
//  Each broad domain shows its subtopics as highlighted tags.
//  Source: CV (July 2026) and published papers. Edit freely —
//  add a subtopic, rename a domain, or add a new domain object.
//  `icon` must be one of the names listed in IconName below.
// ─────────────────────────────────────────────────────────────

export type IconName = 'flask' | 'layers' | 'cpu' | 'zap' | 'atom' | 'sun' | 'microscope' | 'gauge' | 'scan' | 'waves' | 'code';

export interface Domain {
  icon: IconName;
  title: string;
  description: string;
  subtopics: string[];
}

/** What I do — broad research domains (Research Scholar, IISER Kolkata, 2020 – present) */
export const researchDomains: Domain[] = [
  {
    icon: 'flask',
    title: 'Molecular Design & Synthesis',
    description: 'Designing and synthesizing electron-deficient small molecules for n-channel transport.',
    subtopics: [
      'n-type small molecules',
      'Naphthalene diimide (NDI) derivatives',
      'Core & end-group substitution',
      'Halogen-bonding motifs',
      'Low-cost, scalable routes',
      'Structural characterization',
    ],
  },
  {
    icon: 'layers',
    title: 'Thin-Film Processing & Morphology',
    description: 'Controlling how molecules assemble in solution-processed films, and seeing the result.',
    subtopics: [
      'Spin-coating',
      'Blade-coating',
      'Thermal annealing & reordering',
      'Self-assembly',
      'AFM · SEM · thin-film XRD',
      'Synchrotron GIWAXS (DESY)',
    ],
  },
  {
    icon: 'cpu',
    title: 'Device Fabrication',
    description: 'Building organic electronic devices under inert atmosphere from solution-processed active layers.',
    subtopics: ['n-channel OFETs', 'Diodes', 'Memristors', 'Capacitors', 'Glove-box fabrication', 'Solution-processed devices'],
  },
  {
    icon: 'zap',
    title: 'Charge Transport & Device Physics',
    description: 'Measuring how electrons move through molecular films, and what limits them.',
    subtopics: [
      'Transfer & output characteristics',
      'Electron-mobility extraction',
      'On/off current ratio',
      'Ambient & humidity stability',
      'Impedance spectroscopy (EIS)',
      'Structure–transport correlation',
    ],
  },
  {
    icon: 'atom',
    title: 'Computational Chemistry',
    description: 'Using quantum-chemical calculations to connect molecular structure to electronic behaviour.',
    subtopics: [
      'DFT geometry & energy optimization',
      'TD-DFT excited states',
      'Natural transition orbitals (NTO)',
      'Electronic coupling',
      'Crystal-packing analysis',
      'Wavefunction analysis',
    ],
  },
  {
    icon: 'sun',
    title: 'Photophysics & Spectroscopy',
    description: 'Probing excited states and aggregates to understand optical behaviour in the solid state.',
    subtopics: [
      'UV-Vis absorption',
      'Photoluminescence',
      'Exciton coupling',
      'Aggregation & polymorphism',
      'Open-shell radical anions',
      'Spectro-electrochemistry',
    ],
  },
];

/** Instruments and tools — technical expertise */
export const expertiseDomains: Domain[] = [
  {
    icon: 'flask',
    title: 'Fabrication & Material Processing',
    description: 'Hands-on device and film preparation.',
    subtopics: ['Glove-box fabrication', 'Solution processing', 'Organic synthesis', 'Spin-coating', 'Blade-coating', 'Self-assembly'],
  },
  {
    icon: 'gauge',
    title: 'Electrical Characterization',
    description: 'Device testing and transport measurement.',
    subtopics: ['Keithley SCS-4200 parameter analyzer', 'Lakeshore PS100 probe station', 'Electrochemical impedance spectroscopy'],
  },
  {
    icon: 'microscope',
    title: 'Microscopy & Structural Analysis',
    description: 'Film morphology and molecular orientation.',
    subtopics: ['AFM', 'SEM', 'Thin-film XRD', 'GIWAXS (PETRA III)', 'Polarized optical microscopy', 'Confocal microscopy'],
  },
  {
    icon: 'waves',
    title: 'Spectroscopy',
    description: 'Optical and structural spectroscopy.',
    subtopics: ['UV-Vis spectrophotometry', 'Photoluminescence (PL)', 'FTIR', 'NMR'],
  },
  {
    icon: 'code',
    title: 'Computational & Software',
    description: 'Modelling, analysis and visualization.',
    subtopics: ['Gaussian / GaussView', 'Multiwfn', 'CrystalExplorer', 'Python (NumPy, SciPy)', 'MATLAB', 'R', 'Blender', 'LaTeX'],
  },
];
