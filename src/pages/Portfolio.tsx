import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { ArrowUpRight } from "lucide-react";

const cases = [
  { client: "Lorem Brand", category: "FMCG · Launch", title: "Premiera produktu z zasięgiem 12 mln", stat: "+340% awareness" },
  { client: "Ipsum Group", category: "Tech · B2B", title: "Repozycjonowanie marki w mediach branżowych", stat: "82 publikacji" },
  { client: "Dolor S.A.", category: "Finanse · Kryzys", title: "Zarządzanie kryzysem komunikacyjnym", stat: "−68% negatywnych wzmianek" },
  { client: "Sit Amet", category: "Lifestyle · Social", title: "Strategia content marketingowa", stat: "1.2M zasięgu" },
  { client: "Consectetur", category: "Health · ESG", title: "Raport zrównoważonego rozwoju", stat: "12 nagród branżowych" },
  { client: "Adipiscing", category: "Retail · Influencer", title: "Kampania influencerska", stat: "ROI 4.8×" },
];

export default function Portfolio() {
  return (
    <div>
      <SiteHeader />
      <PageHero eyebrow="Portfolio" title="Projekty, które mówią same za siebie." subtitle="Lorem ipsum dolor sit amet — wybrane realizacje z ostatnich miesięcy." />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-px bg-border md:grid-cols-2">
          {cases.map((c) => (
            <article key={c.title} className="group bg-background p-10 transition-colors hover:bg-secondary">
              <div className="flex items-start justify-between gap-4">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.category}</div>
                <ArrowUpRight size={20} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
              <h3 className="mt-8 font-display text-2xl md:text-3xl">{c.title}</h3>
              <div className="mt-8 flex items-end justify-between border-t border-border pt-6">
                <span className="text-sm">{c.client}</span>
                <span className="font-display text-xl text-accent">{c.stat}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24">
          <div className="text-xs uppercase tracking-[0.25em] text-accent">Zaufali nam</div>
          <div className="mt-8 grid grid-cols-2 gap-px bg-border sm:grid-cols-3 md:grid-cols-6">
            {["LOREM", "IPSUM", "DOLOR", "SIT", "AMET", "CONSEC"].map((l) => (
              <div key={l} className="flex h-24 items-center justify-center bg-background text-sm tracking-widest text-muted-foreground">
                {l}
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
