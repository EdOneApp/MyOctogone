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
    'w-full rounded-xl border border-[#e4e8f0] bg-white px-4 py-3 text-sm text-[#1c2951] placeholder:text-[#a7adc2] outline-none transition-colors focus:border-[#1c2951]';

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-[1.25rem] border border-[#e4e8f0] bg-white p-6 shadow-[0_2px_6px_rgba(28,41,81,0.06),0_30px_60px_-24px_rgba(28,41,81,0.2)] sm:p-8"
    >
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
          disabled={state === 'loading'}
          className="btn btn-primary disabled:opacity-60"
        >
          {state === 'loading' ? labels.sending : labels.send}
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

      <AnimatePresence>
        {state === 'ok' && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800"
          >
            {labels.success}
          </motion.p>
        )}
        {state === 'err' && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800"
          >
            {labels.error}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
