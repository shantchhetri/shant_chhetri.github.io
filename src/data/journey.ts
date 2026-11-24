// ─────────────────────────────────────────────────────────────
//  ACADEMIC JOURNEY & ACHIEVEMENTS — from CV (July 2026)
//  Items with `placeholder: true` are shown as "to be added".
// ─────────────────────────────────────────────────────────────
import type { JourneyItem } from './types';

export const journey: JourneyItem[] = [
  {
    id: 'phd',
    period: '2020 – 2026',
    sortYear: 2020,
    kind: 'Education',
    title: 'Ph.D. in Chemical Sciences',
    org: 'IISER Kolkata, Department of Chemical Sciences',
    detail:
      'Dissertation: “Overcoming Fundamental Challenges in n-Channel Organic Field-Effect Transistors”. Advisor: Prof. Ratheesh K. Vijayaraghavan.',
  },
  {
    id: 'msc',
    period: '2017 – 2019',
    sortYear: 2017,
    kind: 'Education',
    title: 'M.Sc., Chemical Sciences',
    org: 'B. Borooah College',
  },
  {
    id: 'bsc',
    period: '2014 – 2017',
    sortYear: 2014,
    kind: 'Education',
    title: 'B.Sc., Chemical Sciences',
    org: 'B. Borooah College',
  },
  {
    id: 'scholar',
    period: '2020 – Present',
    sortYear: 2020,
    kind: 'Research Position',
    title: 'Research Scholar',
    org: 'Molecular Energy and Electronic Lab, IISER Kolkata',
    detail:
      'Synthesis of n-channel semiconductors; thin-film processing; fabrication of OFETs, diodes, memristors and capacitors; charge-transport measurements; DFT / TD-DFT and electronic-coupling calculations.',
  },
  {
    id: 'desy',
    period: '2025',
    sortYear: 2025,
    kind: 'Award',
    title: 'DESY Research Grant — PETRA III, Germany',
    org: 'Deutsches Elektronen-Synchrotron (DESY), Hamburg',
    detail: 'Beamtime and research funding for synchrotron grazing-incidence X-ray scattering experiments.',
  },
  {
    id: 'csir-fellow',
    period: '2020 – 2025',
    sortYear: 2020,
    kind: 'Fellowship',
    title: 'CSIR Fellowship',
    org: 'Council of Scientific & Industrial Research, India',
    detail: 'National-level fellowship funding for Ph.D. research.',
  },
  {
    id: 'csir-net',
    period: '2019',
    sortYear: 2019,
    kind: 'Award',
    title: 'CSIR-NET, Chemical Sciences',
    org: 'Council of Scientific & Industrial Research, India',
    detail: 'Qualified the National Eligibility Test in Chemical Sciences.',
  },
  {
    id: 'smma',
    period: '2025',
    sortYear: 2025,
    kind: 'Invited Talk',
    title: 'Invited Speaker — Smart Materials, Methods & Applications (SMMA 2025)',
    org: 'IISER Kolkata',
    detail:
      '“Halogen-Bonding–Steered Thermal Reassembly into Brickwork Packing Motifs Enhances Electron Transport in Naphthalenediimides.”',
  },
  {
    id: 'dcs',
    period: '2024',
    sortYear: 2024,
    kind: 'Invited Talk',
    title: 'Invited Speaker — DCS Day',
    org: 'Department of Chemical Sciences, IISER Kolkata',
  },
  {
    id: 'namosbio',
    period: '2026',
    sortYear: 2026,
    kind: 'Presentation',
    title: 'Poster — NaMoSBio International Conference',
    org: 'IISER Kolkata, India',
  },
  {
    id: 'iiser-niser',
    period: '2025',
    sortYear: 2025,
    kind: 'Presentation',
    title: 'Poster — Inter-IISER–NISER Meet',
    org: 'IISER Pune, India',
  },
  {
    id: 'giwaxs',
    period: 'Ph.D. tenure',
    sortYear: 2025,
    kind: 'Training',
    title: 'Hands-on training: GIWAXS with synchrotron radiation',
    org: 'DESY (PETRA III), Hamburg, Germany',
  },
  {
    id: 'ta',
    period: 'Ph.D. tenure',
    sortYear: 2021,
    kind: 'Teaching',
    title: 'Teaching Assistant',
    org: 'IISER Kolkata',
    detail:
      'General Chemistry Laboratory (CH1202); Advanced Physical Chemistry Laboratory (CH3105) — spectroscopy and kinetics experiments, error analysis and data interpretation.',
  },
];

/** Students mentored (from CV) */
export const mentees = [
  { name: 'Suryagayathri Bhattathiripad', now: 'Ph.D. student, Johns Hopkins University, USA' },
  { name: 'Amjed Khader K. T.', now: 'Ph.D. student, Politecnico di Milano, Italy' },
  { name: 'Meenakshy Suresh', now: 'Ph.D. student, University of Angers, France' },
  { name: 'Arshad A.', now: 'Ph.D. student, University of Barcelona, Spain' },
  { name: 'M. Sahal O. T.', now: 'BS-MS student, IISER Kolkata, India' },
];

export const languages = 'English (fluent), Hindi (native), Nepali (fluent), Assamese (fluent), Bengali (basic)';
