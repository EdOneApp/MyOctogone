import { ui, defaultLang, type Lang, type UIKey } from './ui';

export { defaultLang };
export type { Lang, UIKey };

export type Localized = { fr: string; en: string };

/** Detect the active language from the current URL pathname. */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if (seg === 'en') return 'en';
  return defaultLang;
}

/** Return a translator bound to a language, for UI strings. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Pick the right value out of a { fr, en } object. */
export function tf(value: Localized | string, lang: Lang): string {
  if (typeof value === 'string') return value;
  return value[lang] ?? value[defaultLang];
}

/**
 * Prefix an internal path with the language segment.
 * localizePath('/filiales/finance', 'en') -> '/en/filiales/finance'
 * localizePath('/', 'fr') -> '/'
 */
export function localizePath(path: string, lang: Lang): string {
  const clean = '/' + path.replace(/^\/+/, '').replace(/\/+$/, '');
  const normalized = clean === '/' ? '' : clean;
  if (lang === defaultLang) return normalized || '/';
  return `/en${normalized}` || '/en';
}

/** Strip the language prefix from a pathname, returning the canonical FR path. */
export function stripLang(pathname: string): string {
  const p = pathname.replace(/\/en(?=\/|$)/, '');
  return p === '' ? '/' : p;
}

/** Build the alternate-language URL for the current page. */
export function switchLangPath(pathname: string, to: Lang): string {
  const base = stripLang(pathname);
  return localizePath(base, to);
}

/** Resolve an asset path (stored without a leading slash) against the site base. */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  return `${base.replace(/\/$/, '')}/${path.replace(/^\/+/, '')}`;
}
