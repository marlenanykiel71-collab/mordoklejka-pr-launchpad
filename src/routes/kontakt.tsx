import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Mordoklejka PR" },
      { name: "description", content: "Skontaktuj się z agencją Mordoklejka. Telefon, e-mail, formularz." },
    ],
  }),
  component: Kontakt,
});

function Kontakt() {
  return (
    <div>
      <SiteHeader />
      <PageHero
        eyebrow="Kontakt"
        title="Porozmawiajmy."
        subtitle="Lorem ipsum dolor sit amet. Odpowiadamy w ciągu 24 godzin."
      />

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-2">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-6"
        >
          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Imię i nazwisko</label>
            <input className="w-full border-0 border-b border-border bg-transparent py-3 outline-none focus:border-accent" placeholder="Lorem Ipsum" />
          </div>
          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">E-mail</label>
            <input type="email" className="w-full border-0 border-b border-border bg-transparent py-3 outline-none focus:border-accent" placeholder="lorem@ipsum.pl" />
          </div>
          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Firma</label>
            <input className="w-full border-0 border-b border-border bg-transparent py-3 outline-none focus:border-accent" placeholder="Dolor S.A." />
          </div>
          <div>
            <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Wiadomość</label>
            <textarea rows={5} className="w-full resize-none border-0 border-b border-border bg-transparent py-3 outline-none focus:border-accent" placeholder="Lorem ipsum dolor sit amet…" />
          </div>
          <button type="submit" className="rounded-full bg-foreground px-8 py-3.5 text-sm text-background hover:opacity-90">
            Wyślij wiadomość
          </button>
        </form>

        <aside className="space-y-10">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-accent">Bezpośrednio</div>
            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-4">
                <Mail size={20} className="mt-1 text-accent" />
                <div>
                  <div className="text-sm text-muted-foreground">E-mail</div>
                  <div>hello@mordoklejka.pl</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone size={20} className="mt-1 text-accent" />
                <div>
                  <div className="text-sm text-muted-foreground">Telefon</div>
                  <div>+48 600 000 000</div>
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
