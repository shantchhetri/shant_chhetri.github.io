// ─────────────────────────────────────────────────────────────
//  PUBLICATIONS
//  Every entry below comes from your .bib files and CV (July 2026).
//  To add a paper: copy one object, fill in the fields, save.
//  Never add a paper here before it is accepted/published.
// ─────────────────────────────────────────────────────────────
import type { Publication } from './types';

export const SELF_NAME = 'Shant Chhetri';

export const publications: Publication[] = [
  {
    id: 'jmcc-2026',
    type: 'research',
    title:
      'The impact of core-substitution on the sequential reduction-induced open-shell structures in napthalenediimides',
    authors: ['Amjed Khader K. T.', 'A. Arshad', 'Shant Chhetri', 'Jesslyn John P.', 'Ratheesh K. Vijayaraghavan'],
    journal: 'Journal of Materials Chemistry C',
    journalShort: 'J. Mater. Chem. C',
    year: 2026,
    volume: '14',
    issue: '17',
    pages: '7181–7189',
    doi: '10.1039/D5TC04219D',
    keywords: ['n-type doping', 'radical anions', 'NDI', 'open-shell'],
    abstract:
      'n-Type doping in organic semiconductors has emerged as a powerful strategy to modulate electrical conductance. Identifying the structural features that enable efficient chemical doping is therefore essential for rational molecular design. In this work, we establish a clear structure–property correlation in naphthalenediimide (NDI)-based n-channel materials through systematic structural modification, from unsubstituted NDI-Br0 to heterogeneously reduced NDI-Br2 (yielding a mixture of species), and finally to the cleanly and homogeneously generated NDI-Br4 radical anion. The formation of the NDI-Br4 doped system arises from a synergistic mechanism: the strong electron-withdrawing inductive effect of the four bromine atoms provides the necessary thermodynamic driving force for reduction (validated by spectro-electrochemistry), while their active involvement in spin and charge delocalization—confirmed by FT-IR, XPS, and DFT analyses—ensures thermodynamic and kinetic stabilization of the open-shell product. This precise chemical control translates directly to functional outcomes, enabling a “fluorescence turn-on” behaviour by fundamentally reconfiguring the molecule’s de-excitation pathways. The strong correlation between the persistent open-shell character of the NDI-Br4 radical and its photophysical purity—as a single, bright emitter at 589 nm—is definitive. Overall, this study delivers a stable, air-persistent, and emissive radical platform for n-type semiconductors and next-generation sensors, while establishing key molecular design principles for achieving controlled open-shell architectures.',
  },
  {
    id: 'chemphotochem-2026',
    type: 'research',
    title:
      'Matrix-Driven Solid-State Solvation Effects on Thermally Activated Delayed Fluorescence and Room-Temperature Phosphorescence',
    authors: ['R. M. Arikkottira', 'Shant Chhetri', 'Ratheesh K. Vijayaraghavan'],
    journal: 'ChemPhotoChem',
    journalShort: 'ChemPhotoChem',
    year: 2026,
    doi: '10.1002/cptc.202500429',
    keywords: ['TADF', 'room-temperature phosphorescence', 'solid-state solvation'],
    // abstract: 'Paste the published abstract here.',
  },
  {
    id: 'chemasianj-2025',
    type: 'research',
    title:
      'Ni(II)-Directed Supramolecular Metallogel: Stimuli Responsiveness and Semiconducting Device Fabrication',
    authors: ['Surajit Singh', 'Shant Chhetri', 'Debasish Haldar'],
    journal: 'Chemistry – An Asian Journal',
    journalShort: 'Chem. Asian J.',
    year: 2025,
    volume: '20',
    issue: '8',
    pages: 'e202401429',
    doi: '10.1002/asia.202401429',
    url: 'https://aces.onlinelibrary.wiley.com/doi/abs/10.1002/asia.202401429',
    keywords: ['metallogel', 'Schottky diode', 'stimuli-responsive'],
    abstract:
      'Metal-organic gels (MOGs) are a type of supramolecular complex that have become highly intriguing due to their synergistic combination of inorganic and organic elements. We report the synthesis and characterization of a Ni-directed supramolecular gel using chiral amino acid L–DOPA (3,4-dihydroxy phenylalanine) containing ligand, which coordinates with Ni(II) to form metal-organic gels with exceptional properties. The functional Ni(II)-gel was synthesized by heating nickel(II) acetate hexahydrate and the L–DOPA containing ligand in DMSO at 70 °C. The rheological tests have verified the gel with its mechanical stability, while a SEM image has shown a spherical aggregate morphology. The gel is photo-responsive in nature and exhibits gel to sol transformation upon adsorption of toxic gases like NH3 or H2S. Notably, electrical conductivity of the gel was observed in electronic metal-semiconductor (MS) junctions’ devices with a measured conductivity of 0.9×10⁻⁶ S m⁻¹. These devices also exhibited Schottky barrier diode characteristics, underscoring the multifunctional potential of the Ni(II)-gel.',
  },
  {
    id: 'jpcc-2024',
    type: 'research',
    featured: true,
    role: 'First author',
    title:
      'Temperature-Assisted Molecular Reordering in n-Type Organic Semiconductor Films: The Impact on Nanoscale Morphology, Photophysical Properties, and Electron Transport',
    authors: [
      'Shant Chhetri',
      'Indrajit Giri',
      'Triza Pal',
      'Soumik Sao',
      'Priyam Lakar',
      'Arka Bikash Dey',
      'Debangshu Chaudhuri',
      'Ratheesh K. Vijayaraghavan',
    ],
    journal: 'The Journal of Physical Chemistry C',
    journalShort: 'J. Phys. Chem. C',
    year: 2024,
    volume: '128',
    issue: '21',
    pages: '8812–8820',
    doi: '10.1021/acs.jpcc.4c01133',
    keywords: ['thermal annealing', 'thin-film morphology', 'electron transport', 'n-type OFET'],
    // abstract: 'Paste the published abstract here.',
  },
  {
    id: 'jpcl-2024',
    type: 'research',
    featured: true,
    title: 'Magic-Angle Exciton Coupling in a Molecular Solid: Optical Consequence of Null–Coulombic Coupling',
    authors: [
      'Tapan Ghosh',
      'Shant Chhetri',
      'Sumona Ghosh',
      'Kalyan J. Kalita',
      'Sudhadevi Antharjanam',
      'Ratheesh K. Vijayaraghavan',
    ],
    journal: 'The Journal of Physical Chemistry Letters',
    journalShort: 'J. Phys. Chem. Lett.',
    year: 2024,
    volume: '15',
    issue: '42',
    pages: '10500–10504',
    doi: '10.1021/acs.jpclett.4c02535',
    keywords: ['exciton coupling', 'molecular packing', 'photophysics'],
    // abstract: 'Paste the published abstract here.',
  },
  {
    id: 'chemsci-2024',
    type: 'research',
    featured: true,
    title:
      'Engineered solid-state aggregates in brickwork stacks of n-type organic semiconductors: a way to achieve high electron mobility',
    authors: [
      'Indrajit Giri',
      'Shant Chhetri',
      'Jesslyn John P.',
      'Madalasa Mondal',
      'Arka Bikash Dey',
      'Ratheesh K. Vijayaraghavan',
    ],
    journal: 'Chemical Science',
    journalShort: 'Chem. Sci.',
    year: 2024,
    volume: '15',
    issue: '25',
    pages: '9630–9640',
    doi: '10.1039/D4SC02339K',
    keywords: ['brickwork stacking', 'electron mobility', 'NDI', 'solution-processed OFET'],
    abstract:
      'Efficient, economically viable n-type organic semiconductor materials suitable for solution-processed OFET devices with high electron mobility and ambient stability are scarce. Merging these attributes into a single molecule remains a significant challenge and a careful molecular design is needed. To address this, synthetic viability (achievable in fewer than three steps) and using cost-effective starting materials are crucial. Our research presents a strategy that meets these criteria using naphthalene diimide (NDI) core structures. The approach involves a simple synthesis process with a cost of $5–10 per gram for the final products. This paper highlights our success in scaling up the production using affordable known reagents, creating ambient condition solution-processed OFET devices with impressive electron mobility, on–off current ratio (1 cm² V⁻¹ s⁻¹ and Ion/Ioff ∼ 10⁹) and good ambient stability (more than 100 h). We conducted a comprehensive study on EHNDIBr2, a material that demonstrates superior performance due to its unique supramolecular arrangement in its brickwork stack. This was compared with two similar structures to validate our findings. The superior performance of EHNDIBr2 is attributed to the effective interlocking of charge-hopping units within the NDI core in its brickwork stack. Our findings include detailed electronic, spectroscopic, and microscopic analyses of these layers.',
  },
  {
    id: 'rscadv-2024',
    type: 'research',
    title:
      'Ambient stable solution-processed organic field effect transistors from electron deficient planar aromatics: effect of end-groups on ambient stability',
    authors: [
      'Indrajit Giri',
      'Sagar Biswas',
      'Shant Chhetri',
      'Anwesha Choudhuri',
      'Indrajit Mondal',
      'Satyaprasad P. Senanayak',
      'Parameswar Krishnan Iyer',
      'Debangshu Chaudhuri',
      'Ratheesh K. Vijayaraghavan',
    ],
    journal: 'RSC Advances',
    journalShort: 'RSC Adv.',
    year: 2024,
    volume: '14',
    issue: '11',
    pages: '7915–7923',
    doi: '10.1039/D4RA01499E',
    keywords: ['ambient stability', 'fluorinated end-groups', 'n-channel OFET'],
    abstract:
      'Ambient stable solution processed n-channel organic field effect transistors (OFETs) are essential for next-generation low-cost organic electronic devices. Several molecular features, such as suitable orbital energy levels, easy synthetic steps, etc., must be considered while designing efficient active layer materials. Here, we report a case of improved ambient stability of solution-processed n-type OFETs upon suitable end-groups substitution of the active layer materials. A pair of core-substituted napthalenediimide (NDIFCN2 and EHNDICN2) derivatives with alkyl and perfluorinated end groups are considered. The transistor devices made out of these two derivatives exhibited largely different ambient stability behavior. The superior device stability (more than 25 days under ambient conditions) of one of the derivatives (NDIFCN2) was ascribed to the presence of fluorinated end groups that function as hydrophobic guard units inhibiting moisture infiltration into the active layer, thereby achieving ambient stability under humid conditions (>65% relative atmospheric humidity). Molecular level optical and electrochemical properties, thermal stability, and the solution-processed (spin coat and drop cast active layers) device characteristics are described in detail. Our findings highlight the requirement of hydrophobic end groups or sidechains for ambient stability of active layer materials, along with deep LUMO levels for ambient stability.',
  },

  // ── Published 2026 (from CV, November 2026) ──
  {
    id: 'jpcc-2026-bromine',
    type: 'research',
    role: 'First author',
    title: 'Beyond Energy-Level Tuning: Diffuse Bromine Orbitals of Naphthalenediimides in Electron Transport',
    authors: ['Shant Chhetri', 'S. Chhetri', 'P. K. Jharapla', 'Indrajit Giri', 'B. L. Chittari', 'Ratheesh K. Vijayaraghavan'],
    journal: 'The Journal of Physical Chemistry C',
    journalShort: 'J. Phys. Chem. C',
    year: 2026,
    volume: '130',
    pages: '15332–15341',
    doi: '10.1021/acs.jpcc.6c03722',
    keywords: ['bromine orbitals', 'naphthalenediimide', 'electron transport'],
  },
  {
    id: 'jpcl-2026-halogen',
    type: 'research',
    role: 'First & corresponding author',
    title:
      'Halogen-Bonding–Steered Thermal Reassembly into Brickwork Packing Motifs Enhances Electron Transport in Naphthalenediimides',
    authors: ['Shant Chhetri', 'Jesslyn John P.', 'Ratheesh K. Vijayaraghavan'],
    journal: 'The Journal of Physical Chemistry Letters',
    journalShort: 'J. Phys. Chem. Lett.',
    year: 2026,
    volume: '17',
    issue: '37',
    pages: '10584–10593',
    doi: '10.1021/acs.jpclett.6c01870',
    keywords: ['halogen bonding', 'brickwork packing', 'thermal reassembly'],
  },
  {
    id: 'jmcc-2026-dimorphic',
    type: 'research',
    role: 'First & corresponding author',
    title:
      'Exclusive Pathway Selectivity of Dimorphic Aggregates in an n-Type Semiconductor: Distinct Optical and Electron Transport Properties',
    authors: ['Shant Chhetri', 'A. Beena Kumary', 'R. K. Vijayaraghavan', 'D. Singh', 'K. D. Dubey', 'Ratheesh K. Vijayaraghavan'],
    journal: 'Journal of Materials Chemistry C',
    journalShort: 'J. Mater. Chem. C',
    year: 2026,
    doi: '10.1039/d6tc01848c',
    keywords: ['polymorphism', 'aggregation pathways', 'electron transport'],
  },
];

export const publicationTypeLabels: Record<Publication['type'], string> = {
  research: 'Research Articles',
  review: 'Review Articles',
  chapter: 'Book Chapters',
  conference: 'Conference Proceedings',
  other: 'Other Scientific Contributions',
};

export const publishedCount = publications.filter((p) => !p.status || p.status === 'published').length;
