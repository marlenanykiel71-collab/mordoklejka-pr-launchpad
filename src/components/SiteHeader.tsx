import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Start" },
  { to: "/o-nas", label: "O nas" },
  { to: "/uslugi", label: "Usługi" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/cennik", label: "Cennik" },
  { to: "/blog", label: "Blog" },
  { to: "/kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-tight">Mordoklejka</span>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">PR</span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                `text-sm transition-colors hover:text-accent ${isActive ? "text-accent" : "text-foreground/80"}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <Link
          to="/kontakt"
          className="hidden rounded-full bg-foreground px-5 py-2 text-sm text-background transition-opacity hover:opacity-90 md:inline-block"
        >
          Umów konsultację
        </Link>
        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `py-2 text-base ${isActive ? "text-accent" : ""}`}
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
