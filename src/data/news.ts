// ─────────────────────────────────────────────────────────────
//  NEWS & UPDATES
//  Add a new object at the top. Items are sorted by `date` (newest
//  first) and the latest three appear automatically on the homepage.
//  Dates use "YYYY", "YYYY-MM" or "YYYY-MM-DD".
// ─────────────────────────────────────────────────────────────
import type { NewsItem } from './types';

export const news: NewsItem[] = [
  {
    id: 'jpcc-2026-bromine',
    date: '2026',
    category: 'Publication',
    title: 'First-author paper in J. Phys. Chem. C',
    description: 'Beyond energy-level tuning: diffuse bromine orbitals of naphthalenediimides in electron transport.',
    link: { label: 'Read article', href: 'https://doi.org/10.1021/acs.jpcc.6c03722' },
  },
  {
    id: 'jpcl-2026-halogen',
    date: '2026',
    category: 'Publication',
    title: 'Halogen-bonding paper published in J. Phys. Chem. Lett.',
    description: 'Halogen-bonding–steered thermal reassembly into brickwork packing motifs enhances electron transport in naphthalenediimides.',
    link: { label: 'Read article', href: 'https://doi.org/10.1021/acs.jpclett.6c01870' },
  },
  {
    id: 'jmcc-2026-dimorphic',
    date: '2026',
    category: 'Publication',
    title: 'Dimorphic aggregates paper published in J. Mater. Chem. C',
    description: 'Exclusive pathway selectivity of dimorphic aggregates in an n-type semiconductor, with distinct optical and electron-transport properties.',
    link: { label: 'Read article', href: 'https://doi.org/10.1039/d6tc01848c' },
  },
  {
    id: 'chemphotochem-2026',
    date: '2026',
    category: 'Publication',
    title: 'New article in ChemPhotoChem',
    description:
      'Matrix-driven solid-state solvation effects on thermally activated delayed fluorescence and room-temperature phosphorescence.',
    link: { label: 'Read article', href: 'https://doi.org/10.1002/cptc.202500429' },
  },
  {
    id: 'jmcc-2026',
    date: '2026',
    category: 'Publication',
    title: 'Open-shell NDI radicals published in J. Mater. Chem. C',
    description:
      'Core-substitution controls sequential reduction in naphthalenediimides, giving an air-persistent, emissive radical anion.',
    link: { label: 'Read article', href: 'https://doi.org/10.1039/D5TC04219D' },
  },
  {
    id: 'namosbio-2026',
    date: '2026',
    category: 'Conference',
    title: 'Poster at the NaMoSBio International Conference',
    description: 'Presented a poster at the NaMoSBio International Conference, IISER Kolkata.',
  },
  {
    id: 'desy-2025',
    date: '2025',
    category: 'Award & Fellowship',
    title: 'DESY research grant for beamtime at PETRA III',
    description:
      'Awarded beamtime and research funding at DESY, Hamburg, for synchrotron grazing-incidence X-ray scattering (GIWAXS) on organic semiconductor films.',
  },
  {
    id: 'smma-2025',
    date: '2025',
    category: 'Conference',
    title: 'Invited talk at SMMA 2025',
    description:
      'Spoke on halogen-bonding–steered thermal reassembly into brickwork packing motifs at Smart Materials, Methods & Applications, IISER Kolkata.',
  },
  {
    id: 'chemasianj-2025',
    date: '2025',
    category: 'Publication',
    title: 'Ni(II) metallogel devices in Chemistry – An Asian Journal',
    description: 'A stimuli-responsive supramolecular metallogel showing Schottky-diode behaviour in metal–semiconductor junctions.',
    link: { label: 'Read article', href: 'https://doi.org/10.1002/asia.202401429' },
  },
  {
    id: 'iiser-niser-2025',
    date: '2025',
    category: 'Conference',
    title: 'Poster at the Inter-IISER–NISER Meet',
    description: 'Poster presentation at the Inter-IISER–NISER Meet, IISER Pune.',
  },
  {
    id: 'jpcl-2024',
    date: '2024',
    category: 'Publication',
    title: 'Magic-angle exciton coupling in J. Phys. Chem. Lett.',
    description: 'Optical consequences of null Coulombic coupling in a molecular solid.',
    link: { label: 'Read article', href: 'https://doi.org/10.1021/acs.jpclett.4c02535' },
  },
  {
    id: 'jpcc-2024',
    date: '2024',
    category: 'Publication',
    title: 'First-author paper in J. Phys. Chem. C',
    description:
      'Temperature-assisted molecular reordering in n-type semiconductor films and its effect on morphology, photophysics and electron transport.',
    link: { label: 'Read article', href: 'https://doi.org/10.1021/acs.jpcc.4c01133' },
  },
  {
    id: 'dcs-2024',
    date: '2024',
    category: 'Conference',
    title: 'Invited speaker at DCS Day',
    description: 'Invited talk at the Department of Chemical Sciences Day, IISER Kolkata.',
  },
];

export const sortedNews = [...news].sort((a, b) => b.date.localeCompare(a.date));
