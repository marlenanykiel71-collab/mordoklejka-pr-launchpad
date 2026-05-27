import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";

const team = [
  { name: "Anna Lorem", role: "Head of PR" },
  { name: "Marek Ipsum", role: "Strategy Director" },
  { name: "Kasia Dolor", role: "Media Relations Lead" },
  { name: "Tomasz Sit", role: "Content Director" },
];

export default function ONas() {
  return (
    <div>
      <SiteHeader />
      <PageHero eyebrow="O nas" title="Agencja, która rozumie wizerunek." subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-2">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-accent">Misja</div>
          <h2 className="mt-4 font-display text-4xl">Tworzymy historie, w które ludzie wierzą.</h2>
        </div>
        <div className="space-y-6 text-muted-foreground">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="text-xs uppercase tracking-[0.25em] text-accent">Wartości</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">Jak pracujemy.</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              ["01", "Transparentność", "Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
              ["02", "Strategia", "Sed do eiusmod tempor incididunt ut labore et dolore magna."],
              ["03", "Zaangażowanie", "Ut enim ad minim veniam, quis nostrud exercitation ullamco."],
            ].map(([n, t, d]) => (
              <div key={n}>
                <div className="font-display text-5xl text-accent">{n}</div>
                <h3 className="mt-4 text-xl">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-xs uppercase tracking-[0.25em] text-accent">Zespół</div>
        <h2 className="mt-4 font-display text-4xl md:text-5xl">Ludzie za marką.</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <div key={m.name}>
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-secondary to-muted" />
              <h3 className="mt-4 text-lg">{m.name}</h3>
              <div className="text-sm text-muted-foreground">{m.role}</div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
