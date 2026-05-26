import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Mordoklejka PR" },
      { name: "description", content: "Artykuły, komentarze eksperckie i analizy trendów PR." },
    ],
  }),
  component: Blog,
});

const posts = [
  { date: "12.05.2026", cat: "Trendy", title: "Lorem ipsum dolor sit amet, consectetur adipiscing", excerpt: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { date: "28.04.2026", cat: "Kryzys", title: "Jak zarządzać kryzysem komunikacyjnym w 24h", excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." },
  { date: "10.04.2026", cat: "Media", title: "Press release, który dziennikarze chcą czytać", excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse." },
  { date: "22.03.2026", cat: "Strategia", title: "Mapa interesariuszy — narzędzie, które zmienia gry", excerpt: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui." },
  { date: "08.03.2026", cat: "ESG", title: "Raport ESG: od obowiązku do narzędzia PR", excerpt: "Sunt in culpa qui officia deserunt mollit anim id est laborum." },
  { date: "20.02.2026", cat: "Social", title: "Influencer marketing w 2026 — co naprawdę działa", excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed." },
];

function Blog() {
  return (
    <div>
      <SiteHeader />
      <PageHero
        eyebrow="Blog"
        title="Wiedza, którą dzielimy się chętnie."
        subtitle="Lorem ipsum dolor sit amet. Komentarze, analizy i trendy w komunikacji."
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-secondary via-muted to-secondary">
                <div className="flex h-full items-end p-6">
                  <span className="rounded-full bg-background/90 px-3 py-1 text-xs uppercase tracking-widest">{p.cat}</span>
                </div>
              </div>
              <div className="mt-5 text-xs text-muted-foreground">{p.date}</div>
              <h3 className="mt-3 font-display text-2xl leading-tight transition-colors group-hover:text-accent">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
