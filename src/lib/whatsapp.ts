export type ContactMessage = { name: string; email: string; company: string; subject: string; message: string };
export function buildWhatsAppUrl(data: ContactMessage, lang: 'fr' | 'en' = 'fr'): string {
  const fr = lang === 'fr';
  const lines = [
    fr ? 'Bonjour Octogone, je vous contacte depuis votre site.' : 'Hello Octogone, I am contacting you through your website.',
    '',
    `${fr ? 'Nom' : 'Name'} : ${data.name.trim()}`,
    `E-mail : ${data.email.trim()}`,
    ...(data.company.trim() ? [`Organisation : ${data.company.trim()}`] : []),
    `${fr ? 'Sujet' : 'Subject'} : ${data.subject.trim()}`,
    '',
    fr ? 'Mon message :' : 'My message:',
    data.message.trim(),
  ];
  return `https://wa.me/2250748733365?text=${encodeURIComponent(lines.join('\n'))}`;
}
