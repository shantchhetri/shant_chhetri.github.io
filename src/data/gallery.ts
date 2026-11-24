// ─────────────────────────────────────────────────────────────
//  GALLERY
//  1. Put photos in  public/images/gallery/  (JPG, ~1600 px wide is plenty)
//  2. Add one entry per photo below. Only entries with a photo are shown.
//  Categories appear as filter buttons automatically.
// ─────────────────────────────────────────────────────────────

export interface Photo {
  /** e.g. "images/gallery/desy-beamtime.jpg" */
  src: string;
  title: string;
  caption?: string;
  /** e.g. "Laboratory", "Conferences", "DESY beamtime", "Group" */
  category: string;
  date?: string;
}

export const photos: Photo[] = [
  // Example (remove the // to use):
  // { src: 'images/gallery/desy-beamtime.jpg', title: 'GIWAXS beamtime at DESY', caption: 'PETRA III, Hamburg', category: 'DESY beamtime', date: '2025' },
];
