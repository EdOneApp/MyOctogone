import { useState, type FormEvent } from 'react';
import { buildWhatsAppUrl } from '../../lib/whatsapp';

type Labels = {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
  fallback: string;
};

type Props = {
  lang: 'fr' | 'en';
  email: string;
  labels: Labels;
  subjects: string[];
  privacyHref?: string;
  privacyLabel?: string;
};


export default function ContactForm({ lang, email, labels, subjects, privacyHref = "/confidentialite", privacyLabel = "Politique de confidentialité" }: Props) {
  const [preparedUrl, setPreparedUrl] = useState('');
  const fr = lang === 'fr';

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const url = buildWhatsAppUrl({
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      company: String(data.get('company') ?? ''),
      subject: String(data.get('subject') ?? ''),
      message: String(data.get('message') ?? ''),
    }, lang);
    setPreparedUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  const field =
    'w-full rounded-xl border border-[#e4e8f0] bg-white px-4 py-3 text-sm text-[#1c2951] placeholder:text-[#a7adc2] outline-none transition-colors focus:border-[#1c2951]';

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-[1.25rem] border border-[#e4e8f0] bg-white p-6 shadow-[0_2px_6px_rgba(28,41,81,0.06),0_30px_60px_-24px_rgba(28,41,81,0.2)] sm:p-8"
    >
      <p className="whatsapp-form-intro">{fr ? 'Votre demande sera préparée dans WhatsApp pour le +225 07 48 73 33 65. Vous pourrez la relire avant de l’envoyer.' : 'Your enquiry will be prepared in WhatsApp for +225 07 48 73 33 65. You can review it before sending.'}</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-[#4b5375]">{labels.name}</span>
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-[#4b5375]">{labels.email}</span>
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-[#4b5375]">{labels.company}</span>
          <input name="company" autoComplete="organization" className={field} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-[#4b5375]">{labels.subject}</span>
          <select name="subject" className={field} defaultValue={subjects[0]}>
            {subjects.map((s) => (
              <option key={s} value={s} className="bg-white">
                {s}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-xs font-medium text-[#4b5375]">{labels.message}</span>
        <textarea name="message" required rows={5} className={field} />
      </label>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button
          type="submit"
          className="btn btn-primary disabled:opacity-60"
        >
          {fr ? 'Envoyer sur WhatsApp' : 'Send via WhatsApp'}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span className="text-xs text-[#838aa6]">
          {labels.fallback}{' '}
          <a href={`mailto:${email}`} className="font-medium text-[#1c2951] underline-offset-2 hover:underline">
            {email}
          </a>
        </span>
      </div>

      <p className="contact-privacy"><a href={privacyHref}>{privacyLabel} ↗</a></p>

      {preparedUrl && <p className="whatsapp-form-prepared" role="status">
        {fr ? 'Votre message est prêt. Finalisez son envoi dans WhatsApp. Si aucun onglet ne s’est ouvert : ' : 'Your message is ready. Complete sending it in WhatsApp. If no tab opened: '}
        <a href={preparedUrl} target="_blank" rel="noopener noreferrer">{fr ? 'ouvrir WhatsApp' : 'open WhatsApp'} ↗</a>
      </p>}

    </form>
  );
}
