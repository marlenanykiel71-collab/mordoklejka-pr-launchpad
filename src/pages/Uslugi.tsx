import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";

const services = [
  { t: "Strategia PR", d: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Opracowanie spójnego planu komunikacji dla marki, produktu lub osoby publicznej.", points: ["Audyt wizerunku", "Cele i KPI", "Mapa działań"] },
  { t: "Media relations", d: "Sed do eiusmod tempor incididunt ut labore et dolore. Komunikaty prasowe i budowanie relacji z dziennikarzami.", points: ["Press release", "Baza mediów", "Press office"] },
  { t: "PR kryzysowy", d: "Ut enim ad minim veniam, quis nostrud exercitation ullamco. Procedury i szybka reakcja w sytuacjach kryzysowych.", points: ["Manual kryzysowy", "Hotline 24/7", "Szkolenia"] },
  { t: "Content & kreacja", d: "Duis aute irure dolor in reprehenderit in voluptate velit. Teksty, materiały wizerunkowe i storytelling.", points: ["Artykuły eksperckie", "Wywiady", "Materiały wizualne"] },
  { t: "Social media PR", d: "Excepteur sint occaecat cupidatat non proident sunt in culpa. Prowadzenie profili i moderacja społeczności.", points: ["Content plan", "Community", "Influencer relations"] },
  { t: "CSR / ESG", d: "Sunt in culpa qui officia deserunt mollit anim id est laborum. Projekty społeczne i raportowanie.", points: ["Strategia ESG", "Raporty roczne", "Komunikacja CSR"] },
  { t: "Public affairs", d: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Relacje z instytucjami i liderami opinii.", points: ["Stakeholder mapping", "Lobbying", "Komunikacja publiczna"] },
];

export default function Uslugi() {
  return (
    <div>
      <SiteHeader />
      <PageHero eyebrow="Usługi" title="Pełen zakres działań PR." subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="divide-y divide-border">
          {services.map((s, i) => (
            <div key={s.t} className="grid gap-8 py-12 md:grid-cols-12">
              <div className="md:col-span-1">
                <div className="font-display text-2xl text-accent">{String(i + 1).padStart(2, "0")}</div>
              </div>
              <div className="md:col-span-5">
                <h2 className="font-display text-3xl md:text-4xl">{s.t}</h2>
              </div>
              <div className="md:col-span-6">
                <p className="text-muted-foreground">{s.d}</p>
                <ul className="mt-6 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm">
                      <span className="h-px w-6 bg-accent" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
