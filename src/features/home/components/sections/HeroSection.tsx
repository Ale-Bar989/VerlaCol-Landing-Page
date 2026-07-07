import { useState, useEffect, memo, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useTheme } from '@/core/contexts';
import { 
  HERO_SLIDES, 
  HERO_SLIDES_BADGE_ICONS
} from "@/features/home/data";

// Hero Section con slider automático - OPTIMIZADO
// Ubicación: src/ui/pages/home/components/sections/HeroSection.tsx
// Optimizaciones: React.memo, useMemo, datos centralizados

function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [currentSlide, setCurrentSlide] = useState(0);

  // Memoizar slides para evitar recreación
  const slides = useMemo(() => HERO_SLIDES, []);

  // Auto-play functionality (siempre activo)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [slides.length]);

  const activeSlide = slides[currentSlide];
  const BadgeIcon = HERO_SLIDES_BADGE_ICONS[currentSlide];

  return (
    <section className="relative min-h-screen overflow-hidden p-3 sm:p-4 md:p-6 lg:p-8 xl:p-12 flex items-center">
      {/* Contenedor del slider con bordes redondeados */}
      <div className="relative w-full h-[92vh] sm:h-[88vh] md:h-[85vh] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl animate-slideDown">
        {/* Imagen de fondo con transición suave */}
        <div
          key={`bg-${currentSlide}`}
          className="absolute inset-0 transition-opacity duration-1000 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${activeSlide.image})`,
          }}
        >
          {/* Overlay oscuro para legibilidad del texto */}
          {/* <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/30"></div> */}

          {/* Efectos de blur sutiles sobre la imagen - optimizado para móviles */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] lg:blur-[120px] animate-pulse-slow bg-[#5B6FFF15]"></div>
            <div className="absolute top-1/3 right-1/4 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] lg:blur-[120px] animate-pulse-slow bg-[#7A8FFF15] [animation-delay:1s]"></div>
          </div>
        </div>

        {/* Contenido sobre la imagen */}
        <div className="relative z-10 h-full flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
          {/* Contenido superior */}
          <div className="max-w-full sm:max-w-xl md:max-w-2xl mt-12 sm:mt-16 md:mt-20 lg:mt-0">
            {/* Slider Content con animación de fade */}
            <div
              key={currentSlide}
              className="animate-fadeIn"
            >
              {/* Badge superior - tech style */}
              <div className={`inline-flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-5 md:mb-6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-md ${
                isDark ? 'hero-badge-dark' : 'hero-badge-light'
              }`}>
                <BadgeIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className={`text-xs md:text-sm font-bold text-white uppercase tracking-[0.2em] letter-spacing-wide ${
                  isDark ? 'text-shadow-hero-dark' : 'text-shadow-hero-light'
                }`}>
                  {activeSlide.badge}
                </span>
              </div>

              {/* Subtítulo superior - minimal */}
              <p className="text-[10px] sm:text-xs md:text-sm font-medium text-white uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-2 sm:mb-3 text-shadow-hero-dark">
                {activeSlide.subtitle}
              </p>

              {/* Título principal - mix de weights para contraste moderno */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-4 sm:mb-5 md:mb-6 leading-[0.95] tracking-tighter text-shadow-hero-title">
                <span className="block text-white font-black">
                  {activeSlide.title}
                </span>
                <span className="block text-white font-thin italic">
                  {activeSlide.highlight}
                </span>
              </h1>

              {/* Descripción - moderna y legible */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-full sm:max-w-md md:max-w-xl leading-relaxed font-light tracking-wide text-shadow-hero-description">
                {activeSlide.description}
              </p>
            </div>
          </div>

          {/* Botón en esquina inferior - responsive */}
          <div className="self-start w-full sm:w-auto">
            <div className={`button-wrapper-custom relative -left-[0.2rem] sm:-left-[3.2rem] md:-left-[4.2rem] lg:-left-[5em] -bottom-[2em] sm:-bottom-[4em] md:-bottom-[5em] lg:-bottom-[5em] px-4 py-4 sm:px-5 sm:py-5 md:px-6 md:py-6 lg:px-7 lg:py-7 rounded-2xl sm:rounded-3xl border-t-[3px] border-r-[3px] border-black ${
              theme === 'dark' ? 'bg-black' : 'bg-[#f5f7fa]'
            }`}>
              <Link
                to={activeSlide.ctaLink}
                className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 bg-white/95 dark:bg-black/95 text-black dark:text-white px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 py-3 sm:py-3.5 md:py-4 rounded-xl sm:rounded-2xl shadow-xl"
              >
                <span className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-widest sm:tracking-[0.15em]">
                  {activeSlide.ctaText}
                </span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Memoizar para evitar re-renders innecesarios
HeroSection.displayName = 'HeroSection';

export default memo(HeroSection);
