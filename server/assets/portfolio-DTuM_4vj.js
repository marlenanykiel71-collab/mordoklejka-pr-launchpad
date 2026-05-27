import { I as jsxRuntimeExports } from "./server-CWvL_9gX.js";
import { a as SiteHeader, S as SiteFooter } from "./SiteFooter-CsrFXMir.js";
import { P as PageHero } from "./PageHero-DDRCTqdu.js";
import { A as ArrowUpRight } from "./arrow-up-right-BgRjuEmW.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-qoD95pip.js";
const cases = [{
  client: "Lorem Brand",
  category: "FMCG · Launch",
  title: "Premiera produktu z zasięgiem 12 mln",
  stat: "+340% awareness"
}, {
  client: "Ipsum Group",
  category: "Tech · B2B",
  title: "Repozycjonowanie marki w mediach branżowych",
  stat: "82 publikacji"
}, {
  client: "Dolor S.A.",
  category: "Finanse · Kryzys",
  title: "Zarządzanie kryzysem komunikacyjnym",
  stat: "−68% negatywnych wzmianek"
}, {
  client: "Sit Amet",
  category: "Lifestyle · Social",
  title: "Strategia content marketingowa",
  stat: "1.2M zasięgu"
}, {
  client: "Consectetur",
  category: "Health · ESG",
  title: "Raport zrównoważonego rozwoju",
  stat: "12 nagród branżowych"
}, {
  client: "Adipiscing",
  category: "Retail · Influencer",
  title: "Kampania influencerska",
  stat: "ROI 4.8×"
}];
function Portfolio() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Portfolio", title: "Projekty, które mówią same za siebie.", subtitle: "Lorem ipsum dolor sit amet — wybrane realizacje z ostatnich miesięcy." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-px bg-border md:grid-cols-2", children: cases.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group bg-background p-10 transition-colors hover:bg-secondary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: c.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 20, className: "transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-8 font-display text-2xl md:text-3xl", children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-end justify-between border-t border-border pt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: c.client }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl text-accent", children: c.stat })
        ] })
      ] }, c.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-accent", children: "Zaufali nam" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-2 gap-px bg-border sm:grid-cols-3 md:grid-cols-6", children: ["LOREM", "IPSUM", "DOLOR", "SIT", "AMET", "CONSEC"].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-24 items-center justify-center bg-background text-sm tracking-widest text-muted-foreground", children: l }, l)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  Portfolio as component
};
