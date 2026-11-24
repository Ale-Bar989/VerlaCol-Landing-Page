import { useEffect, memo } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "@/shared/components";
import InstitutionalHero from "./components/sections/InstitutionalHero";
import IdentitySection from "./components/sections/IdentitySection";
import LeadershipSection from "./components/sections/LeadershipSection";
import TreenetSection from "./components/sections/TreenetSection";
import NewsAndInfraSection from "./components/sections/NewsAndInfraSection";
import TalentAndContactSection from "./components/sections/TalentAndContactSection";
import FooterSection from "./components/sections/FooterSection";

// Portal Institucional Grupo Empresarial VERLA
// Orden vertical estricto según Especificación de Rediseño Web (Paneles 1 a 8)
function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 80);
      }
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Panel 1: Barra de Navegación Superior */}
      <Navbar />

      <main>
        {/* Panel 2: Portada Principal (Hero Institucional) */}
        <InstitutionalHero />

        {/* Panel 3: Identidad Corporativa (Misión, Visión al 2030 y Valores) */}
        <IdentitySection />

        {/* Panel 4: Liderazgo Directivo */}
        <LeadershipSection />

        {/* Panel 5: Respaldo Operativo ("Operamos treenet") */}
        <TreenetSection />

        {/* Paneles 6 y 7: Estrategia, Ingeniería de Infraestructura, Noticias, Logros y Blog */}
        <NewsAndInfraSection />

        {/* Panel 8 (Parte 1): Talento, Proyectos de Infraestructura y Contacto Corporativo */}
        <TalentAndContactSection />
      </main>

      {/* Panel 8 (Parte 2): Pie de Página Corporativo */}
      <FooterSection />
    </div>
  );
}

export default memo(Home);
