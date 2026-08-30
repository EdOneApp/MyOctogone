import type { Localized } from '../i18n/utils';

export type { Localized };

export interface Capability {
  title: Localized;
  description: Localized;
}

export interface Figure {
  label: Localized;
  value: string;
}

export interface Subsidiary {
  slug: string;
  /** Brand name, identical in both languages. */
  name: string;
  sector: Localized;
  tagline: Localized;
  /** Amber line-icon, path under /assets. */
  icon: string;
  /** Full branded carousel slide, path under /assets (used for og:image). */
  heroImage: string;
  /** Accent hue used for gradients on this subsidiary's pages. */
  accent: { from: string; to: string };
  intro: Localized[];
  capabilities: Capability[];
  figures: Figure[];
  /** Ordered list of project slugs. */
  projectSlugs: string[];
}

export interface Project {
  slug: string;
  title: string;
  subsidiarySlug: string;
  category: Localized;
  summary: Localized;
  description: Localized[];
  stack: string[];
  image: string;
  url?: string;
  repo?: string;
  award?: Localized;
  year?: string;
  /** 'verified' = real delivered project; 'draft' = illustrative, to be validated. */
  status: 'verified' | 'draft';
}

export interface Partner {
  name: string;
  logo: string;
}
