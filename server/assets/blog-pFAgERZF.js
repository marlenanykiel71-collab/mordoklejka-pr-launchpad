import { I as jsxRuntimeExports } from "./server-CWvL_9gX.js";
import { a as SiteHeader, S as SiteFooter } from "./SiteFooter-CsrFXMir.js";
import { P as PageHero } from "./PageHero-DDRCTqdu.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-qoD95pip.js";
const posts = [{
  date: "12.05.2026",
  cat: "Trendy",
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
  excerpt: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}, {
  date: "28.04.2026",
  cat: "Kryzys",
  title: "Jak zarządzać kryzysem komunikacyjnym w 24h",
  excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
}, {
  date: "10.04.2026",
  cat: "Media",
  title: "Press release, który dziennikarze chcą czytać",
  excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse."
}, {
  date: "22.03.2026",
  cat: "Strategia",
  title: "Mapa interesariuszy — narzędzie, które zmienia gry",
  excerpt: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui."
}, {
  date: "08.03.2026",
  cat: "ESG",
  title: "Raport ESG: od obowiązku do narzędzia PR",
  excerpt: "Sunt in culpa qui officia deserunt mollit anim id est laborum."
}, {
  date: "20.02.2026",
  cat: "Social",
  title: "Influencer marketing w 2026 — co naprawdę działa",
  excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed."
}];
function Blog() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Blog", title: "Wiedza, którą dzielimy się chętnie.", subtitle: "Lorem ipsum dolor sit amet. Komentarze, analizy i trendy w komunikacji." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-12 md:grid-cols-2 lg:grid-cols-3", children: posts.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group cursor-pointer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-secondary via-muted to-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full items-end p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-background/90 px-3 py-1 text-xs uppercase tracking-widest", children: p.cat }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 text-xs text-muted-foreground", children: p.date }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-2xl leading-tight transition-colors group-hover:text-accent", children: p.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: p.excerpt })
    ] }, p.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  Blog as component
};
