import { useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'motion/react';

type Labels = {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
  send: string;
  sending: string;
  success: string;
  error: string;
  fallback: string;
};

type Props = {
  endpoint?: string;
  email: string;
  labels: Labels;
  subjects: string[];
};

type State = 'idle' | 'loading' | 'ok' | 'err';

export default function ContactForm({ endpoint, email, labels, subjects }: Props) {
  const [state, setState] = useState<State>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!endpoint) {
      const subject = encodeURIComponent(`[Octogone] ${data.get('subject') ?? ''}`);
      const body = encodeURIComponent(
        `${data.get('name')} — ${data.get('company')}\n${data.get('email')}\n\n${data.get('message')}`
      );
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      return;
    }

    setState('loading');
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      if (!res.ok) throw new Error(String(res.status));
      setState('ok');
      form.reset();
    } catch {
      setState('err');
    }
  }

  const field =
    'w-full rounded-lg border border-[#23273d] bg-[#0a0c14] px-4 py-3 text-sm text-white placeholder:text-[#5c6180] outline-none transition-colors focus:border-cyan-400/70';

  return (
    <form onSubmit={onSubmit} className="glass clip-octagon-sm space-y-4 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-[#8b90ad]">{labels.name}</span>
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-[#8b90ad]">{labels.email}</span>
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-[#8b90ad]">{labels.company}</span>
          <input name="company" autoComplete="organization" className={field} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-[#8b90ad]">{labels.subject}</span>
          <select name="subject" className={field} defaultValue={subjects[0]}>
            {subjects.map((s) => (
              <option key={s} value={s} className="bg-[#0a0c14]">
                {s}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-xs font-medium text-[#8b90ad]">{labels.message}</span>
        <textarea name="message" required rows={5} className={field} />
      </label>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button
          type="submit"
          disabled={state === 'loading'}
          className="btn btn-primary clip-octagon-sm disabled:opacity-60"
        >
          {state === 'loading' ? labels.sending : labels.send}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span className="text-xs text-[#5c6180]">
          {labels.fallback}{' '}
          <a href={`mailto:${email}`} className="text-cyan-300 underline-offset-2 hover:underline">
            {email}
          </a>
        </span>
      </div>

      <AnimatePresence>
        {state === 'ok' && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200"
          >
            {labels.success}
          </motion.p>
        )}
        {state === 'err' && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-lg border border-rose-400/30 bg-rose-400/10 px-4 py-3 text-sm text-rose-200"
          >
            {labels.error}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
