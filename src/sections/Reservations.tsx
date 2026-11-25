import { useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { GoldUnderlineHeading, Reveal } from '@/components/shared';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { site, whatsappLink } from '@/data/site';
import { useLang } from '@/i18n';

// Canonical values are language-independent, so switching language keeps the selection.
const times = Array.from({ length: 31 }, (_, i) => {
  const minutes = 9 * 60 + i * 30; // 9:00 AM → 12:00 AM
  return { value: String(minutes), h24: Math.floor(minutes / 60) % 24, m: minutes % 60 };
});
const partySizes = [...Array.from({ length: 11 }, (_, i) => String(i + 1)), '12+'];

const today = () => {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
};

export function Reservations() {
  const { c, dir } = useLang();
  const r = c.reserve;
  const [time, setTime] = useState('');
  const [party, setParty] = useState('');
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const date = String(data.get('date') || '');
    const name = String(data.get('name') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const email = String(data.get('email') || '').trim();
    if (!date || !time || !party || !name || !phone) {
      setError(r.error);
      return;
    }
    setError('');
    const pretty = new Date(`${date}T12:00:00`).toLocaleDateString(r.dateLocale, {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    const t = times.find((x) => x.value === time)!;
    const message = r.message({ date: pretty, time: r.timeLabel(t.h24, t.m), party: r.partyLabel(party), name, phone, email });
    window.open(whatsappLink(message), '_blank', 'noopener');
    setSent(true);
  };

  return (
    <section id="reserve" className="relative overflow-hidden px-6 py-24 md:py-32" style={{ background: 'var(--footer)' }}>
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(201,151,62,0.18), transparent 65%)' }}
      />
      <div className="relative mx-auto max-w-[600px]">
        <div className="mb-12 text-center">
          <GoldUnderlineHeading>{r.title}</GoldUnderlineHeading>
          <p className="mt-5 text-muted-foreground">{r.sub}</p>
        </div>

        <Reveal>
          <div
            className="relative overflow-hidden rounded-sm p-px"
            style={{ background: 'linear-gradient(135deg, rgba(201,151,62,0.5), rgba(201,151,62,0.05) 50%, rgba(201,151,62,0.2))' }}
          >
            <div
              className="rounded-sm p-6 md:p-12"
              style={{ background: 'rgba(13,9,5,0.85)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}
            >
              <form onSubmit={onSubmit} noValidate className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label htmlFor="date" className="field-label">{r.date}</label>
                  <input id="date" name="date" type="date" min={today()} required className="field" />
                </div>
                <div>
                  <span id="time-label" className="field-label">{r.time}</span>
                  <Select value={time} onValueChange={setTime} dir={dir}>
                    <SelectTrigger aria-labelledby="time-label">
                      <SelectValue placeholder={r.timePh} />
                    </SelectTrigger>
                    <SelectContent>
                      {times.map((t) => (
                        <SelectItem key={t.value} value={t.value}>{r.timeLabel(t.h24, t.m)}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <span id="party-label" className="field-label">{r.party}</span>
                  <Select value={party} onValueChange={setParty} dir={dir}>
                    <SelectTrigger aria-labelledby="party-label">
                      <SelectValue placeholder={r.partyPh} />
                    </SelectTrigger>
                    <SelectContent>
                      {partySizes.map((p) => (
                        <SelectItem key={p} value={p}>{r.partyLabel(p)}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="name" className="field-label">{r.name}</label>
                  <input id="name" name="name" autoComplete="name" required className="field" placeholder={r.namePh} />
                </div>
                <div>
                  <label htmlFor="phone" className="field-label">{r.phone}</label>
                  <input id="phone" name="phone" type="tel" dir="ltr" autoComplete="tel" required className="field rtl:text-right" placeholder="07X XXX XXXX" />
                </div>
                <div>
                  <label htmlFor="email" className="field-label">{r.email}</label>
                  <input id="email" name="email" type="email" dir="ltr" autoComplete="email" className="field rtl:text-right" placeholder={r.emailPh} />
                </div>

                <div className="sm:col-span-2">
                  {error && <p className="mb-4 text-sm text-[#e8a87c]" role="alert">{error}</p>}
                  <button type="submit" className="btn-gold w-full">{r.submit}</button>
                  <AnimatePresence>
                    {sent && (
                      <motion.p
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 text-center text-sm text-primary"
                        role="status"
                      >
                        {r.sent}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <p className="mt-5 text-center text-sm text-muted-foreground">
                    {r.notePrefix}{' '}
                    <a href={site.phoneHref} dir="ltr" className="text-primary hover:underline">{site.phoneDisplay}</a>
                    {r.noteSuffix}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
