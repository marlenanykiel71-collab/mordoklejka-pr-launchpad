import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { Check } from "lucide-react";

export const Route = createFileRoute("/cennik")({
  head: () => ({
    meta: [
      { title: "Cennik — Mordoklejka PR" },
      { name: "description", content: "Pakiety usług PR: Basic, Standard, Pro. Wycena indywidualna." },
    ],
  }),
  component: Cennik,
});

const tiers = [
  {
    name: "Basic",
    price: "od 4 900 zł",
    period: "/ mies.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    features: ["1 komunikat prasowy/mies.", "Podstawowe media relations", "Miesięczny raport", "Wsparcie e-mail"],
  },
  {
    name: "Standard",
    price: "od 9 900 zł",
    period: "/ mies.",
    desc: "Sed do eiusmod tempor incididunt ut labore et dolore.",
    features: ["3 komunikaty prasowe/mies.", "Aktywne media relations", "Social media PR", "Monitoring wzmianek", "Konsultacje strategiczne"],
    featured: true,
  },
  {
    name: "Pro",
    price: "indywidualnie",
    period: "",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation.",
    features: ["Pełna strategia PR", "PR kryzysowy 24/7", "Public affairs", "Content & kreacja", "Dedykowany zespół"],
  },
];

function Cennik() {
  return (
    <div>
      <SiteHeader />
      <PageHero
        eyebrow="Cennik"
        title="Trzy pakiety, jedna jakość."
        subtitle="Lorem ipsum dolor sit amet. Wycena indywidualna po krótkiej rozmowie."
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-3xl border p-10 ${
                t.featured ? "border-accent bg-ink text-cream" : "border-border bg-background"
              }`}
            >
              <div className={`text-xs uppercase tracking-widest ${t.featured ? "text-ember" : "text-accent"}`}>
                {t.name}
              </div>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-4xl">{t.price}</span>
                <span className={`text-sm ${t.featured ? "text-cream/60" : "text-muted-foreground"}`}>{t.period}</span>
              </div>
              <p className={`mt-4 text-sm ${t.featured ? "text-cream/70" : "text-muted-foreground"}`}>{t.desc}</p>
              <ul className="mt-8 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check size={16} className={t.featured ? "mt-0.5 text-ember" : "mt-0.5 text-accent"} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/kontakt"
                className={`mt-10 block rounded-full px-6 py-3 text-center text-sm ${
                  t.featured ? "bg-ember text-cream" : "bg-foreground text-background"
                } hover:opacity-90`}
              >
                Wybierz {t.name}
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-16 text-center text-sm text-muted-foreground">
          Lorem ipsum — wszystkie pakiety obejmują wstępną konsultację i audyt komunikacyjny.
        </p>
      </section>

      <SiteFooter />
    </div>
  );
}
