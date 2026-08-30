import { localizePath, useTranslations, switchLangPath } from './utils';
import type { Lang } from './ui';

export interface NavLink {
  label: string;
  href: string;
}

export function getNav(lang: Lang): NavLink[] {
  const t = useTranslations(lang);
  return [
    { label: t('nav.group'), href: localizePath('/a-propos', lang) },
    { label: t('nav.subsidiaries'), href: `${localizePath('/', lang)}#filiales` },
    { label: t('nav.projects'), href: `${localizePath('/', lang)}#realisations` },
    { label: t('nav.contact'), href: localizePath('/contact', lang) },
  ];
}

export function getCta(lang: Lang): NavLink {
  const t = useTranslations(lang);
  return { label: t('cta.talk'), href: localizePath('/contact', lang) };
}

export function getLangSwitch(lang: Lang, pathname: string): NavLink {
  const other: Lang = lang === 'fr' ? 'en' : 'fr';
  return { label: other.toUpperCase(), href: switchLangPath(pathname, other) };
}
