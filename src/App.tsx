import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "@/pages/Home";
import ONas from "@/pages/ONas";
import Uslugi from "@/pages/Uslugi";
import Portfolio from "@/pages/Portfolio";
import Cennik from "@/pages/Cennik";
import Blog from "@/pages/Blog";
import Kontakt from "@/pages/Kontakt";
import NotFound from "@/pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const titles: Record<string, [string, string]> = {
      "/": ["Mordoklejka — agencja PR", "Budujemy wizerunek, który działa. Strategia PR, media relations, content i PR kryzysowy."],
      "/o-nas": ["O nas — Mordoklejka PR", "Poznaj agencję Mordoklejka — misja, wartości i zespół."],
      "/uslugi": ["Usługi — Mordoklejka PR", "Strategia PR, media relations, PR kryzysowy, content, social media, CSR/ESG, public affairs."],
      "/portfolio": ["Portfolio — Mordoklejka PR", "Case studies i zrealizowane projekty PR."],
      "/cennik": ["Cennik — Mordoklejka PR", "Pakiety usług PR: Basic, Standard, Pro. Wycena indywidualna."],
      "/blog": ["Blog — Mordoklejka PR", "Artykuły, komentarze eksperckie i analizy trendów PR."],
      "/kontakt": ["Kontakt — Mordoklejka PR", "Skontaktuj się z agencją Mordoklejka. Telefon, e-mail, formularz."],
    };
    const t = titles[pathname];
    if (t) {
      document.title = t[0];
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", t[1]);
    }
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/o-nas" element={<ONas />} />
        <Route path="/uslugi" element={<Uslugi />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/cennik" element={<Cennik />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}
