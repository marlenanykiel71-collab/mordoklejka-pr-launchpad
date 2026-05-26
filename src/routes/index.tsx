import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArrowUpRight, Megaphone, Newspaper, ShieldAlert, PenLine, Hash, Leaf, Building2 } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mordoklejka — agencja PR" },
      { name: "description", content: "Budujemy wizerunek, który działa. Strategia PR, media relations, content i PR kryzysowy." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Megaphone, title: "Strategia PR", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing." },
  { icon: Newspaper, title: "Media relations", desc: "Sed do eiusmod tempor incididunt ut labore et dolore." },
  { icon: ShieldAlert, title: "PR kryzysowy", desc: "Ut enim ad minim veniam, quis nostrud exercitation." },
  { icon: PenLine, title: "Content & kreacja", desc: "Duis aute irure dolor in reprehenderit in voluptate." },
  { icon: Hash, title: "Social media PR", desc: "Excepteur sint occaecat cupidatat non proident sunt." },
  { icon: Leaf, title: "CSR / ESG", desc: "Sunt in culpa qui officia deserunt mollit anim id est." },
  { icon: Building2, title: "Public affairs", desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit." },
];

function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 md:pt-32">
          <div className="text-xs uppercase tracking-[0.25em] text-accent">Agencja PR · Warszawa</div>
          <h1 className="mt-8 max-w-5xl font-display text-6xl leading-[1.02] md:text-8xl">
            Budujemy wizerunek,<br />
            <span className="italic text-accent">który działa.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua —
            strategia, media relations i kreacja w jednym miejscu.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/kontakt" className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm text-background hover:opacity-90">
              Umów konsultację <ArrowUpRight size={16} />
            </Link>
            <Link to="/uslugi" className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm hover:border-accent hover:text-accent">
              Sprawdź ofertę
            </Link>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-32 top-20 hidden h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl md:block" />
      </section>

      {/* Stats */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border md:grid-cols-4">
          {[
            ["120+", "Lorem klientów"],
            ["4.2K", "Publikacji medialnych"],
            ["98%", "Lorem retention"],
            ["12 lat", "Na rynku PR"],
          ].map(([n, l]) => (
            <div key={l} className="bg-background p-8">
              <div className="font-display text-4xl text-accent">{n}</div>
              <div className="mt-2 text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-accent">Usługi</div>
            <h2 className="mt-4 max-w-2xl font-display text-4xl md:text-5xl">
              Pełen zakres komunikacji wizerunkowej.
            </h2>
          </div>
          <Link to="/uslugi" className="text-sm underline-offset-4 hover:underline">Zobacz wszystkie →</Link>
        </div>
        <div className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group bg-background p-8 transition-colors hover:bg-secondary">
              <s.icon size={28} className="text-accent" strokeWidth={1.5} />
              <h3 className="mt-6 text-xl">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="font-display text-3xl italic leading-tight md:text-5xl">
            „Lorem ipsum dolor sit amet, consectetur adipiscing elit — wizerunek
            to nie szczęście, to strategia.”
          </p>
          <div className="mt-8 text-sm uppercase tracking-widest text-muted-foreground">
            — Anna Lorem, Head of PR
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-3xl bg-ink p-12 text-cream md:p-20">
          <h2 className="max-w-2xl font-display text-4xl md:text-6xl">
            Porozmawiajmy o Twojej marce.
          </h2>
          <p className="mt-6 max-w-xl text-cream/70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <Link to="/kontakt" className="mt-10 inline-flex items-center gap-2 rounded-full bg-ember px-7 py-3.5 text-sm text-cream hover:opacity-90">
            Umów konsultację <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
