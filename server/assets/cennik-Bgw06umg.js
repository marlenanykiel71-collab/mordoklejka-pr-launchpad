import { I as jsxRuntimeExports } from "./server-CWvL_9gX.js";
import { L as Link } from "./router-qoD95pip.js";
import { c as createLucideIcon, a as SiteHeader, S as SiteFooter } from "./SiteFooter-CsrFXMir.js";
import { P as PageHero } from "./PageHero-DDRCTqdu.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode);
const tiers = [{
  name: "Basic",
  price: "od 4 900 zł",
  period: "/ mies.",
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
  features: ["1 komunikat prasowy/mies.", "Podstawowe media relations", "Miesięczny raport", "Wsparcie e-mail"]
}, {
  name: "Standard",
  price: "od 9 900 zł",
  period: "/ mies.",
  desc: "Sed do eiusmod tempor incididunt ut labore et dolore.",
  features: ["3 komunikaty prasowe/mies.", "Aktywne media relations", "Social media PR", "Monitoring wzmianek", "Konsultacje strategiczne"],
  featured: true
}, {
  name: "Pro",
  price: "indywidualnie",
  period: "",
  desc: "Ut enim ad minim veniam, quis nostrud exercitation.",
  features: ["Pełna strategia PR", "PR kryzysowy 24/7", "Public affairs", "Content & kreacja", "Dedykowany zespół"]
}];
function Cennik() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Cennik", title: "Trzy pakiety, jedna jakość.", subtitle: "Lorem ipsum dolor sit amet. Wycena indywidualna po krótkiej rozmowie." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 lg:grid-cols-3", children: tiers.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-3xl border p-10 ${t.featured ? "border-accent bg-ink text-cream" : "border-border bg-background"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xs uppercase tracking-widest ${t.featured ? "text-ember" : "text-accent"}`, children: t.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-baseline gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-4xl", children: t.price }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm ${t.featured ? "text-cream/60" : "text-muted-foreground"}`, children: t.period })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `mt-4 text-sm ${t.featured ? "text-cream/70" : "text-muted-foreground"}`, children: t.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 space-y-3", children: t.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 16, className: t.featured ? "mt-0.5 text-ember" : "mt-0.5 text-accent" }),
          f
        ] }, f)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/kontakt", className: `mt-10 block rounded-full px-6 py-3 text-center text-sm ${t.featured ? "bg-ember text-cream" : "bg-foreground text-background"} hover:opacity-90`, children: [
          "Wybierz ",
          t.name
        ] })
      ] }, t.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-16 text-center text-sm text-muted-foreground", children: "Lorem ipsum — wszystkie pakiety obejmują wstępną konsultację i audyt komunikacyjny." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  Cennik as component
};
