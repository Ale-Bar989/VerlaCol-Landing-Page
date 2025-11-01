import { lazy, Suspense } from "react";

import Navbar from "../../components/layout/Navbar/Navbar";
import {
  BackgroundEffects,
  HeroSection,
} from "./components";

// Lazy loading para secciones below-the-fold
const ProductsSection = lazy(() => import("./components/sections/ProductsSection"));
const StatsSection = lazy(() => import("./components/sections/StatsSection"));
const ProblemSection = lazy(() => import("./components/sections/ProblemSection"));
const FeaturesSection = lazy(() => import("./components/sections/FeaturesSection"));
const FooterSection = lazy(() => import("./components/sections/FooterSection"));

// Componente de carga simple
const SectionLoader = () => (
  <div className="w-full h-32 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-[#4A5CFF] border-t-transparent rounded-full animate-spin" />
  </div>
);

// Página Home con diseño moderno tipo Superhuman + Lazy Loading
// Ubicación: src/ui/pages/home/Home.tsx
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background effects */}
      <BackgroundEffects />

      <Navbar />

      {/* Hero Section - Carga inmediata (above the fold) */}
      <HeroSection />

      {/* Secciones con lazy loading (below the fold) */}
      <Suspense fallback={<SectionLoader />}>
        <ProductsSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <StatsSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <ProblemSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <FeaturesSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <FooterSection />
      </Suspense>
    </div>
  );
}
