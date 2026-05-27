import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, CheckCircle2 } from "lucide-react";

const CONTACT_EMAIL = "hello@mordoklejka.pl";

export default function Kontakt() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  function update<K extends keyof typeof form>(key: K, v: string) {
    setForm((f) => ({ ...f, [key]: v }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `Zapytanie ze strony — ${form.name || "Anonim"}`;
    const body = [
      `Imię i nazwisko: ${form.name}`,
      `E-mail: ${form.email}`,
      `Firma: ${form.company}`,
      "",
      "Wiadomość:",
      form.message,
    ].join("\n");
    const url = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    setSent(true);
  }

  return (
    <div>
      <SiteHeader />
      <PageHero eyebrow="Kontakt" title="Porozmawiajmy." subtitle="Lorem ipsum dolor sit amet. Odpowiadamy w ciągu 24 godzin." />

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-2">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Imię i nazwisko</label>
            <input required value={form.name} onChange={(e) => update("name", e.target.value)} className="w-full border-0 border-b border-border bg-transparent py-3 outline-none focus:border-accent" placeholder="Lorem Ipsum" />
          </div>
          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">E-mail</label>
            <input required type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="w-full border-0 border-b border-border bg-transparent py-3 outline-none focus:border-accent" placeholder="lorem@ipsum.pl" />
          </div>
          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Firma</label>
            <input value={form.company} onChange={(e) => update("company", e.target.value)} className="w-full border-0 border-b border-border bg-transparent py-3 outline-none focus:border-accent" placeholder="Dolor S.A." />
          </div>
          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Wiadomość</label>
            <textarea required rows={5} value={form.message} onChange={(e) => update("message", e.target.value)} className="w-full resize-none border-0 border-b border-border bg-transparent py-3 outline-none focus:border-accent" placeholder="Lorem ipsum dolor sit amet…" />
          </div>
          <button type="submit" className="rounded-full bg-foreground px-8 py-3.5 text-sm text-background hover:opacity-90">
            Wyślij wiadomość
          </button>
          {sent && (
            <div className="flex items-start gap-3 rounded-2xl bg-secondary/60 p-4 text-sm">
              <CheckCircle2 size={18} className="mt-0.5 text-accent" />
              <div>
                Otworzyliśmy Twojego klienta poczty z gotową wiadomością. Jeżeli nic się nie pojawiło,
                napisz bezpośrednio na <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </div>
            </div>
          )}
          <p className="text-xs text-muted-foreground">
            Formularz nie wymaga żadnej rejestracji — wiadomość wysyłana jest bezpośrednio z Twojego programu pocztowego (Outlook, Gmail, Apple Mail…).
          </p>
        </form>

        <aside className="space-y-10">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-accent">Bezpośrednio</div>
            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-4">
                <Mail size={20} className="mt-1 text-accent" />
                <div>
                  <div className="text-sm text-muted-foreground">E-mail</div>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-accent">{CONTACT_EMAIL}</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone size={20} className="mt-1 text-accent" />
                <div>
                  <div className="text-sm text-muted-foreground">Telefon</div>
                  <a href="tel:+48600000000" className="hover:text-accent">+48 600 000 000</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin size={20} className="mt-1 text-accent" />
                <div>
                  <div className="text-sm text-muted-foreground">Biuro</div>
                  <div>ul. Lorem 12 / 4<br />00-001 Warszawa</div>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-accent">Social</div>
            <div className="mt-6 flex gap-3">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="rounded-full border border-border p-3 transition-colors hover:border-accent hover:text-accent">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-secondary/50 p-6 text-sm text-muted-foreground">
            <strong className="text-foreground">Mordoklejka Sp. z o.o.</strong><br />
            NIP: 000-000-00-00<br />
            REGON: 000000000<br />
            KRS: 0000000000
          </div>
        </aside>
      </section>

      <SiteFooter />
    </div>
  );
}
