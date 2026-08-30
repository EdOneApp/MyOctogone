import type { Localized } from './types';

export interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: Localized;
}

export const groupStats: Stat[] = [
  {
    value: 8,
    label: { fr: 'Filiales spécialisées', en: 'Specialised subsidiaries' },
  },
  {
    value: 40,
    suffix: '+',
    label: { fr: 'Projets livrés', en: 'Projects delivered' },
  },
  {
    value: 3,
    label: { fr: 'Distinctions & prix', en: 'Awards & prizes' },
  },
  {
    value: 8,
    label: { fr: 'Pays UEMOA couverts', en: 'WAEMU countries covered' },
  },
];
