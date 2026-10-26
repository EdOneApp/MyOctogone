import type { APIRoute } from 'astro';
import { projects } from '../data/projects';
import { subsidiaries } from '../data/subsidiaries';
const esc = (text: string) => text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
export const GET: APIRoute = ({site}) => {
 const origin = (site ?? new URL('https://myoctogone.com')).origin;
 const paths=['/','/a-propos/','/contact/','/confidentialite/','/cgu/',...subsidiaries.map(s=>`/filiales/${s.slug}/`),...projects.filter(p=>p.status==='verified').map(p=>`/projets/${p.slug}/`)];
 const entries=paths.flatMap(path=>{
  const fr=`${origin}${path}`,en=`${origin}/en${path}`;
  const alternates=`<xhtml:link rel="alternate" hreflang="fr" href="${esc(fr)}"/><xhtml:link rel="alternate" hreflang="en" href="${esc(en)}"/><xhtml:link rel="alternate" hreflang="x-default" href="${esc(fr)}"/>`;
  return [fr,en].map(url=>`<url><loc>${esc(url)}</loc>${alternates}</url>`);
 });
 return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${entries.join('')}</urlset>`,{headers:{'Content-Type':'application/xml; charset=utf-8'}});
};
