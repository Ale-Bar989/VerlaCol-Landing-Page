import { lazy, Suspense, memo } from "react";

import { Navbar } from '@/shared//components';
import {
  BackgroundEffects,
  HeroSection,
} from "./components";
import { LazySection } from '@/shared//components';

// Lazy loading para secciones below-the-fold
const ProductsSection = lazy(() => import("./components/sections/ProductsSection"));
const StatsSection = lazy(() => import("./components/sections/StatsSection"));
const ProblemSection = lazy(() => import("./components/sections/ProblemSection"));
const FeaturesSection = lazy(() => import("./components/sections/FeaturesSection"));
const FooterSection = lazy(() => import("./components/sections/FooterSection"));

// Componente de carga simple - memoizado
const SectionLoader = memo(() => (
  <div className="w-full h-32 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-[#4A5CFF] border-t-transparent rounded-full animate-spin" style={{ willChange: 'transform' }} />
  </div>
));

SectionLoader.displayName = 'SectionLoader';

// Página Home con diseño moderno tipo Superhuman + Lazy Loading - Optimizado
// Ubicación: src/ui/pages/home/Home.tsx
function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background effects */}
      <BackgroundEffects />

      <Navbar />

      {/* Hero Section - Carga inmediata (above the fold) */}
      <HeroSection />

      {/* Secciones con lazy loading + Intersection Observer (below the fold) */}
      <LazySection fallback={<SectionLoader />}>
        <Suspense fallback={<SectionLoader />}>
          <ProductsSection />
        </Suspense>
      </LazySection>

      <LazySection fallback={<SectionLoader />}>
        <Suspense fallback={<SectionLoader />}>
          <StatsSection />
        </Suspense>
      </LazySection>

      <LazySection fallback={<SectionLoader />}>
        <Suspense fallback={<SectionLoader />}>
          <ProblemSection />
        </Suspense>
      </LazySection>

      <LazySection fallback={<SectionLoader />}>
        <Suspense fallback={<SectionLoader />}>
          <FeaturesSection />
        </Suspense>
      </LazySection>

      <LazySection fallback={<SectionLoader />}>
        <Suspense fallback={<SectionLoader />}>
          <FooterSection />
        </Suspense>
      </LazySection>
    </div>
  );
}

// Memoizar para evitar re-renders innecesarios
export default memo(Home);
