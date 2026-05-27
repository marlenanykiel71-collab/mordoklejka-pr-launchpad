import { I as jsxRuntimeExports } from "./server-CWvL_9gX.js";
import { a as SiteHeader, S as SiteFooter } from "./SiteFooter-CsrFXMir.js";
import { P as PageHero } from "./PageHero-DDRCTqdu.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-qoD95pip.js";
const services = [{
  t: "Strategia PR",
  d: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Opracowanie spójnego planu komunikacji dla marki, produktu lub osoby publicznej.",
  points: ["Audyt wizerunku", "Cele i KPI", "Mapa działań"]
}, {
  t: "Media relations",
  d: "Sed do eiusmod tempor incididunt ut labore et dolore. Komunikaty prasowe i budowanie relacji z dziennikarzami.",
  points: ["Press release", "Baza mediów", "Press office"]
}, {
  t: "PR kryzysowy",
  d: "Ut enim ad minim veniam, quis nostrud exercitation ullamco. Procedury i szybka reakcja w sytuacjach kryzysowych.",
  points: ["Manual kryzysowy", "Hotline 24/7", "Szkolenia"]
}, {
  t: "Content & kreacja",
  d: "Duis aute irure dolor in reprehenderit in voluptate velit. Teksty, materiały wizerunkowe i storytelling.",
  points: ["Artykuły eksperckie", "Wywiady", "Materiały wizualne"]
}, {
  t: "Social media PR",
  d: "Excepteur sint occaecat cupidatat non proident sunt in culpa. Prowadzenie profili i moderacja społeczności.",
  points: ["Content plan", "Community", "Influencer relations"]
}, {
  t: "CSR / ESG",
  d: "Sunt in culpa qui officia deserunt mollit anim id est laborum. Projekty społeczne i raportowanie.",
  points: ["Strategia ESG", "Raporty roczne", "Komunikacja CSR"]
}, {
  t: "Public affairs",
  d: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Relacje z instytucjami i liderami opinii.",
  points: ["Stakeholder mapping", "Lobbying", "Komunikacja publiczna"]
}];
function Uslugi() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Usługi", title: "Pełen zakres działań PR.", subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 py-12 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl text-accent", children: String(i + 1).padStart(2, "0") }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl", children: s.t }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: s.d }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-2", children: s.points.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-6 bg-accent" }),
          " ",
          p
        ] }, p)) })
      ] })
    ] }, s.t)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  Uslugi as component
};
