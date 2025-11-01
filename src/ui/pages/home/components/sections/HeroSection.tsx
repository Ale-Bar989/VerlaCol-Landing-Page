import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Wifi, Tv, Zap, Rocket } from "lucide-react";
import { useTheme } from "../../../../../contexts";
import { ROUTES } from "../../../../../router/routes.config";

// Hero section with modern custom slider
// Ubicación: src/ui/pages/home/components/HeroSection.tsx

// Slides data con imágenes de fondo
const slides = [
  {
    id: 1,
    badge: "Especial",
    badgeColor: "#0000",
    badgeIcon: Rocket,
    title: "Conectividad",
    titleHighlight: "Premium",
    subtitle: "Fibra Óptica",
    description: "Velocidad simétrica sin límites",
    backgroundImage:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2340&auto=format&fit=crop",
    icon: Wifi,
    ctaPrimary: "Ver Planes",
    ctaSecondary: "Consultar Cobertura",
    // ctaRoute: "/precios",
    ctaRoute: ROUTES.PRICING,
    gradient: "linear-gradient(135deg, #5B6FFF, #7A8FFF, #4A5CFF)",
  },
  {
    id: 2,
    badge: "TV Premium",
    badgeColor: "#7A8FFF",
    badgeIcon: Tv,
    title: "Entretenimiento",
    titleHighlight: "Sin Límites",
    subtitle: "TV 4K",
    description: "200+ canales en alta definición",
    backgroundImage:
      "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=2340&auto=format&fit=crop",
    icon: Tv,
    ctaPrimary: "Ver Canales",
    ctaSecondary: "Planes TV",
    // ctaRoute: "/legal/comparador-tarifas",
    ctaRoute: ROUTES.LEGAL.COMPARADOR_TARIFAS,
    gradient: "linear-gradient(135deg, #7A8FFF, #4A5CFF, #5B6FFF)",
  },
  {
    id: 3,
    badge: "FTTH",
    badgeColor: "#4A5CFF",
    badgeIcon: Zap,
    title: "Velocidad",
    titleHighlight: "Extrema",
    subtitle: "Hasta 1 Gbps",
    description: "La mejor conexión disponible",
    backgroundImage:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2340&auto=format&fit=crop",
    icon: Zap,
    ctaPrimary: "Contratar Ahora",
    ctaSecondary: "Ver Beneficios",
    // ctaRoute: "/contact",
    ctaRoute: ROUTES.CONTACT,
    gradient: "linear-gradient(135deg, #4A5CFF, #FFFFFF, #7A8FFF)",
  },
];

export default function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play functionality (siempre activo)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  const activeSlide = slides[currentSlide];

  return (
    <section className="relative min-h-screen overflow-hidden p-6 md:p-8 lg:p-12 flex items-center">
      {/* Contenedor del slider con bordes redondeados */}
      <div className="relative w-full h-[85vh] rounded-3xl overflow-hidden shadow-2xl">
        {/* Imagen de fondo con transición suave */}
        <div
          key={`bg-${currentSlide}`}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${activeSlide.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Overlay oscuro para legibilidad del texto */}
          {/* <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/30"></div> */}

          {/* Efectos de blur sutiles sobre la imagen */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] animate-pulse-slow"
              style={{ backgroundColor: "#5B6FFF15" }}
            ></div>
            <div
              className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full blur-[120px] animate-pulse-slow"
              style={{ backgroundColor: "#7A8FFF15", animationDelay: "1s" }}
            ></div>
          </div>
        </div>

        {/* Contenido sobre la imagen */}
        <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12 lg:p-16">
          {/* Contenido superior */}
          <div className="max-w-2xl">
            {/* Slider Content con animación de fade */}
            <div
              key={currentSlide}
              className="animate-fadeIn"
              style={{
                animation: "fadeIn 0.8s ease-in-out",
              }}
            >
              {/* Badge superior - tech style */}
              <div
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full backdrop-blur-md"
                style={{
                  background: isDark
                    ? "rgba(255, 255, 255, 0.1)"
                    : "linear-gradient(135deg, #4A5CFF, #7A8FFF)",
                  border: isDark
                    ? "1px solid rgba(255, 255, 255, 0.2)"
                    : "1px solid rgba(74, 92, 255, 0.5)",
                  boxShadow: isDark
                    ? "none"
                    : "0 4px 16px rgba(74, 92, 255, 0.4)",
                }}
              >
                {activeSlide.badgeIcon && (
                  <activeSlide.badgeIcon
                    className="w-4 h-4"
                    style={{ color: "#FFFFFF" }}
                  />
                )}
                <span
                  className="text-xs md:text-sm font-bold text-white uppercase tracking-[0.2em] letter-spacing-wide"
                  style={{
                    textShadow: isDark
                      ? "0 2px 10px rgba(0, 0, 0, 0.8), 0 4px 20px rgba(0, 0, 0, 0.6)"
                      : "0 2px 8px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  {activeSlide.badge}
                </span>
              </div>

              {/* Subtítulo superior - minimal */}
              <p
                className="text-xs md:text-sm font-medium text-white uppercase tracking-[0.3em] mb-3"
                style={{
                  textShadow:
                    "0 2px 8px rgba(0, 0, 0, 0.9), 0 4px 16px rgba(0, 0, 0, 0.7)",
                }}
              >
                {activeSlide.subtitle}
              </p>

              {/* Título principal - mix de weights para contraste moderno */}
              <h1
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 leading-[0.95] tracking-tighter"
                style={{
                  textShadow:
                    "0 4px 20px rgba(0, 0, 0, 0.9), 0 8px 40px rgba(0, 0, 0, 0.8), 0 12px 60px rgba(0, 0, 0, 0.7)",
                }}
              >
                <span className="block text-white font-black">
                  {activeSlide.title}
                </span>
                <span className="block text-white font-thin italic">
                  {activeSlide.titleHighlight}
                </span>
              </h1>

              {/* Descripción - moderna y legible */}
              <p
                className="text-base md:text-lg lg:text-xl text-white max-w-xl leading-relaxed font-light tracking-wide"
                style={{
                  textShadow:
                    "0 2px 12px rgba(0, 0, 0, 0.9), 0 4px 24px rgba(0, 0, 0, 0.7)",
                }}
              >
                {activeSlide.description}
              </p>
            </div>
          </div>

          {/* Botón en esquina inferior izquierda */}
          <div className="self-start">
            <div
              className="button-wrapper-custom relative -left-[5em] -bottom-[5em] px-7 py-7 rounded-3xl"
              style={{
                borderTop: "3px solid #000000",
                borderRight: "3px solid #000000",
                backgroundColor: theme === "dark" ? "#000000" : "#ffffff",
              }}
            >
              <Link
                to={activeSlide.ctaRoute}
                className="flex items-center justify-center gap-4 bg-white/95 dark:bg-black/95 text-black dark:text-white px-40 py-4 rounded-2xl shadow-xl"
              >
                <span className="text-sm md:text-base font-bold uppercase tracking-[0.15em]">
                  {activeSlide.ctaPrimary}
                </span>
                <ArrowRight size={20} className="shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
