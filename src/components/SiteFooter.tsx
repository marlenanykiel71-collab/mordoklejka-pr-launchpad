import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-ink text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-3xl">Mordoklejka</div>
          <p className="mt-4 max-w-sm text-sm text-cream/70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Agencja PR
            budująca wizerunki, które działają.
          </p>
        </div>
        <div>
          <div className="mb-4 text-xs uppercase tracking-widest text-cream/50">Nawigacja</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/o-nas" className="hover:text-ember">O nas</Link></li>
            <li><Link to="/uslugi" className="hover:text-ember">Usługi</Link></li>
            <li><Link to="/portfolio" className="hover:text-ember">Portfolio</Link></li>
            <li><Link to="/blog" className="hover:text-ember">Blog</Link></li>
          </ul>
        </div>
        <div>
          <div className="mb-4 text-xs uppercase tracking-widest text-cream/50">Kontakt</div>
          <ul className="space-y-2 text-sm text-cream/80">
            <li>hello@mordoklejka.pl</li>
            <li>+48 600 000 000</li>
            <li>ul. Lorem 12, Warszawa</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-cream/50 md:flex-row">
          <span>© {new Date().getFullYear()} Mordoklejka PR. Lorem ipsum.</span>
          <span>Lorem ipsum · Dolor sit · Amet</span>
        </div>
      </div>
    </footer>
  );
}
