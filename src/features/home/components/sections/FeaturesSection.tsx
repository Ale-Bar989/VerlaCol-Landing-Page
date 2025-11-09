import { memo } from "react";
import { Link } from "react-router-dom";
import { useTheme } from '@/core/contexts';
import { Zap, Shield, Rocket } from "lucide-react";
import { ROUTES } from '@/core/router/routes.config';

// Video section - Sección de video corporativo con fondo de video
// Ubicación: src/ui/pages/home/components/FeaturesSection.tsx

function FeaturesSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://www.youtube.com/embed/jQdkb_UIWSE?autoplay=1&mute=1&loop=1&playlist=jQdkb_UIWSE&controls=0&modestbranding=1&rel=0&showinfo=0&disablekb=1"
          title="Video Background"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          style={{
            pointerEvents: "none",
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            transform: "scale(1.5)",
          }}
        ></iframe>

        {/* Overlay con gradiente */}
        <div
          className="absolute inset-0"
          style={{
            background: isDark
              ? "linear-gradient(135deg, rgba(0,0,0,0.85), rgba(0,0,0,0.75), rgba(0,0,0,0.85))"
              : "linear-gradient(135deg, rgba(255,255,255,0.75), rgba(255,255,255,0.70), rgba(255,255,255,0.75))",
          }}
        ></div>

        {/* Efectos de luz azul */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full blur-[150px] animate-pulse"
            style={{ backgroundColor: isDark ? "#5B6FFF30" : "#5B6FFF15" }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] rounded-full blur-[150px] animate-pulse"
            style={{
              backgroundColor: isDark ? "#7A8FFF30" : "#7A8FFF15",
              animationDelay: "1s",
            }}
          ></div>
        </div>
      </div>

      {/* Contenido */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Columna Izquierda - Texto Principal */}
          <div className="space-y-6 sm:space-y-8">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-md"
              style={{
                background: isDark
                  ? "linear-gradient(135deg, rgba(91, 111, 255, 0.3), rgba(122, 143, 255, 0.2))"
                  : "linear-gradient(135deg, rgba(91, 111, 255, 0.25), rgba(122, 143, 255, 0.15))",
                border: isDark
                  ? "1px solid rgba(255, 255, 255, 0.2)"
                  : "1px solid rgba(91, 111, 255, 0.4)",
              }}
            >
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: isDark ? "#FFFFFF" : "#5B6FFF" }}
              ></div>
              <span
                className="text-xs sm:text-sm font-bold uppercase tracking-wider"
                style={{ color: isDark ? "#FFFFFF" : "#0f172a" }}
              >
                Fibra Óptica en Bogotá
              </span>
            </div>

            {/* Título Principal */}
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-[0.95] tracking-tight"
              style={{
                fontFamily:
                  "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              <span
                className="block mb-2"
                style={{ color: isDark ? "#FFFFFF" : "#0f172a" }}
              >
                Conectividad
              </span>
              <span
                className="text-transparent bg-clip-text block"
                style={{
                  backgroundImage: isDark
                    ? "linear-gradient(135deg, #5B6FFF, #7A8FFF, #FFFFFF)"
                    : "linear-gradient(135deg, #5B6FFF, #4A5CFF, #7A8FFF)",
                  backgroundSize: "200% 100%",
                }}
              >
                Sin Límites
              </span>
            </h2>

            {/* Descripción */}
            <p
              className={`text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl font-light ${
                isDark ? "" : "text-[#000000]!"
              }`}
              style={{
                fontFamily:
                  "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                lineHeight: "1.6",
                letterSpacing: "-0.01em",
                color: isDark ? "#e5e7eb" : "#000000",
              }}
            >
              Internet de fibra óptica diseñado para tu estilo de vida: gaming
              sin lag, teletrabajo fluido, streaming en HD y descargas
              instantáneas. Todo en una sola conexión.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="space-y-2 sm:space-y-3">
                <div
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text tracking-tight"
                  style={{
                    backgroundImage: isDark
                      ? "linear-gradient(135deg, #5B6FFF, #FFFFFF)"
                      : "linear-gradient(135deg, #5B6FFF, #4A5CFF, #7A8FFF)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  1000
                </div>
                <div
                  className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider"
                  style={{
                    letterSpacing: "0.05em",
                    color: isDark ? "#d1d5db" : "#475569",
                  }}
                >
                  Mbps
                </div>
              </div>
              <div className="space-y-2 sm:space-y-3">
                <div
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text tracking-tight"
                  style={{
                    backgroundImage: isDark
                      ? "linear-gradient(135deg, #7A8FFF, #FFFFFF)"
                      : "linear-gradient(135deg, #7A8FFF, #5B6FFF, #4A5CFF)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  99.9%
                </div>
                <div
                  className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider"
                  style={{
                    letterSpacing: "0.05em",
                    color: isDark ? "#d1d5db" : "#475569",
                  }}
                >
                  Uptime
                </div>
              </div>
              <div className="space-y-2 sm:space-y-3">
                <div
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text tracking-tight"
                  style={{
                    backgroundImage: isDark
                      ? "linear-gradient(135deg, #4A5CFF, #FFFFFF)"
                      : "linear-gradient(135deg, #4A5CFF, #7A8FFF, #5B6FFF)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  24/7
                </div>
                <div
                  className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-wider"
                  style={{
                    letterSpacing: "0.05em",
                    color: isDark ? "#d1d5db" : "#475569",
                  }}
                >
                  Soporte
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to={ROUTES.PRICING} className="w-full sm:w-auto">
                <button
                  className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold rounded-full transition-all duration-300 hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #5B6FFF, #7A8FFF)",
                    boxShadow: isDark
                      ? "0 10px 40px rgba(91, 111, 255, 0.4)"
                      : "0 10px 40px rgba(91, 111, 255, 0.3)",
                    color: "#FFFFFF",
                  }}
                >
                  <span>Ver Planes</span>
                </button>
              </Link>
              <Link to={ROUTES.CONTACT} className="w-full sm:w-auto">
                <button
                  className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-md"
                  style={{
                    background: isDark
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(91, 111, 255, 0.1)",
                    border: isDark
                      ? "2px solid rgba(255, 255, 255, 0.3)"
                      : "2px solid rgba(91, 111, 255, 0.3)",
                    color: isDark ? "#FFFFFF" : "#5B6FFF",
                  }}
                >
                  <span>Contactar</span>
                </button>
              </Link>
            </div>
          </div>

          {/* Columna Derecha - Features Cards */}
          <div className="space-y-3 sm:space-y-4 mt-8 lg:mt-0">
            {/* Feature 1 */}
            <div
              className="group p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-105"
              style={{
                background: isDark
                  ? "linear-gradient(135deg, rgba(91, 111, 255, 0.2), rgba(122, 143, 255, 0.1))"
                  : "linear-gradient(135deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.75))",
                border: isDark
                  ? "1px solid rgba(255, 255, 255, 0.2)"
                  : "1px solid rgba(91, 111, 255, 0.3)",
                boxShadow: isDark
                  ? "none"
                  : "0 4px 20px rgba(91, 111, 255, 0.15)",
              }}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #5B6FFF, #7A8FFF)",
                  }}
                >
                  <Zap className="w-6 h-6 sm:w-7 sm:h-7" stroke="#FFFFFF" strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <h3
                    className="text-lg sm:text-xl md:text-2xl font-bold mb-1.5 sm:mb-2 tracking-tight"
                    style={{
                      letterSpacing: "-0.01em",
                      color: isDark ? "#FFFFFF" : "#0f172a",
                    }}
                  >
                    Velocidad para lo que Importa
                  </h3>
                  <p
                    className={`text-sm sm:text-base leading-relaxed font-light ${
                      isDark ? "" : "text-[#000000]!"
                    }`}
                    style={{
                      lineHeight: "1.6",
                      color: isDark ? "#d1d5db" : "#000000",
                    }}
                  >
                    Internet de fibra óptica con baja latencia: ideal para
                    gamers, teletrabajo y videollamadas claras
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div
              className="group p-6 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-105"
              style={{
                background: isDark
                  ? "linear-gradient(135deg, rgba(122, 143, 255, 0.2), rgba(91, 111, 255, 0.1))"
                  : "linear-gradient(135deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.75))",
                border: isDark
                  ? "1px solid rgba(255, 255, 255, 0.2)"
                  : "1px solid rgba(122, 143, 255, 0.3)",
                boxShadow: isDark
                  ? "none"
                  : "0 4px 20px rgba(122, 143, 255, 0.15)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #7A8FFF, #5B6FFF)",
                  }}
                >
                  <Shield className="w-7 h-7" stroke="#FFFFFF" strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <h3
                    className="text-2xl font-bold mb-2 tracking-tight"
                    style={{
                      letterSpacing: "-0.01em",
                      color: isDark ? "#FFFFFF" : "#0f172a",
                    }}
                  >
                    Fibra que Potencia tu Día
                  </h3>
                  <p
                    className={`text-base leading-relaxed font-light ${
                      isDark ? "" : "text-[#000000]!"
                    }`}
                    style={{
                      lineHeight: "1.6",
                      color: isDark ? "#d1d5db" : "#000000",
                    }}
                  >
                    Conexión rápida y estable en Bogotá: trabaja sin
                    interrupciones, estudia online y disfruta tu contenido
                    favorito
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div
              className="group p-6 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-105"
              style={{
                background: isDark
                  ? "linear-gradient(135deg, rgba(74, 92, 255, 0.2), rgba(122, 143, 255, 0.1))"
                  : "linear-gradient(135deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.75))",
                border: isDark
                  ? "1px solid rgba(255, 255, 255, 0.2)"
                  : "1px solid rgba(74, 92, 255, 0.3)",
                boxShadow: isDark
                  ? "none"
                  : "0 4px 20px rgba(74, 92, 255, 0.15)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #4A5CFF, #7A8FFF)",
                  }}
                >
                  <Rocket className="w-7 h-7" stroke="#FFFFFF" strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <h3
                    className="text-2xl font-bold mb-2 tracking-tight"
                    style={{
                      letterSpacing: "-0.01em",
                      color: isDark ? "#FFFFFF" : "#0f172a",
                    }}
                  >
                    Conéctate sin Límites
                  </h3>
                  <p
                    className={`text-base leading-relaxed font-light ${
                      isDark ? "" : "text-[#000000]!"
                    }`}
                    style={{
                      lineHeight: "1.6",
                      color: isDark ? "#d1d5db" : "#000000",
                    }}
                  >
                    Fibra óptica confiable: descargas en segundos, streaming en
                    HD y partidas online sin cortes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSection.displayName = 'FeaturesSection';

export default memo(FeaturesSection);
