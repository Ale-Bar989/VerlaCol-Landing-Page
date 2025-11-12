import {
  Target,
  Heart,
  Sparkles,
  Tv,
  Globe,
  Zap,
  Radio,
  Shuffle,
  Link as LinkIcon,
  BarChart3,
  Lock,
  HeadphonesIcon,
} from "lucide-react";
import { Navbar } from "@/shared//components";
import FooterSection from "@/features/home/components/sections/FooterSection";
import { BackgroundEffects } from "@/shared//components";
import { useLocalTheme } from "@/shared/hooks/useLocalTheme";
import { memo, useState, useEffect } from "react";

// Página About con diseño VIBRANTE - Azul brillante y blanco puro
// Ubicación: src/features/about/About.tsx
const About = memo(() => {
  const { isDark } = useLocalTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations on mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`min-h-screen relative overflow-hidden ${
        isDark
          ? "bg-linear-to-br from-[#0A0E27] via-[#1a1f3a] to-[#0A0E27] text-white"
          : "bg-white text-gray-900"
      }`}
    >
      <BackgroundEffects showVerlaText={true} opacity={20} />

      {/* Partículas vibrantes brillantes - MÁS CANTIDAD */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-floatVibrant"
            style={{
              background: isDark
                ? "radial-gradient(circle, rgba(74,92,255,0.7) 0%, rgba(122,143,255,0.3) 100%)"
                : "radial-gradient(circle, rgba(74,92,255,0.5) 0%, rgba(91,111,255,0.2) 100%)",
              width: `${Math.random() * 80 + 30}px`,
              height: `${Math.random() * 80 + 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${Math.random() * 12 + 15}s`,
              filter: "blur(30px)",
            }}
          />
        ))}
      </div>

      <Navbar />

      <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="container mx-auto max-w-5xl">
          {/* Header moderno con animaciones */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 animate-bounceIn">
            <div
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 transition-all duration-300 ${
                isDark
                  ? "bg-[#4A5CFF]/20 border-2 border-[#4A5CFF] hover:bg-[#4A5CFF]/30"
                  : "bg-[#4A5CFF] border-2 border-[#4A5CFF] hover:bg-[#5B6FFF]"
              }`}
            >
              <Sparkles
                className={`w-5 h-5 animate-pulse ${
                  isDark ? "text-white" : "text-white"
                }`}
              />
              <span
                className={`text-sm font-bold uppercase tracking-wider ${
                  isDark ? "text-white" : "text-white"
                }`}
              >
                Nuestra Historia
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight">
              Sobre{" "}
              <span className="text-transparent bg-clip-text animate-gradient inline-block gradient-text-animated">
                Verla
              </span>
            </h1>

            <p
              className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Conectamos hogares colombianos con la mejor tecnología en{" "}
              <span
                className={`font-bold ${
                  isDark ? "text-[#4A5CFF]" : "text-[#4A5CFF]"
                }`}
              >
                Internet y TV IP
              </span>
            </p>
          </div>

          {/* Card principal con diseño premium */}
          <div
            className={`relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-14 mb-12 sm:mb-16 md:mb-20 overflow-hidden group transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            } ${!isDark ? "bg-transparent" : ""}`}
          >
            {/* Fondo con gradiente - solo en tema oscuro */}
            {isDark && (
              <div className="absolute inset-0 gradient-section-bg-dark"></div>
            )}
            {/* Border glow - solo en tema oscuro */}
            {isDark && (
              <div className="absolute inset-0 rounded-3xl gradient-border-primary-soft"></div>
            )}
            {/* Border simple en tema blanco */}
            {!isDark && (
              <div className="absolute inset-0 rounded-3xl border-primary-light bg-white/40"></div>
            )}

            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6 sm:mb-8">
                <div
                  className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 ${
                    isDark
                      ? "bg-linear-to-br from-[#4A5CFF] to-[#5B6FFF] shadow-lg shadow-[#4A5CFF]/50"
                      : "bg-linear-to-br from-[#4A5CFF]/10 to-[#5B6FFF]/5 ring-2 ring-[#4A5CFF]/30"
                  }`}
                >
                  {/* Efecto de brillo interno */}
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-white/20 to-transparent opacity-50"></div>
                  <Tv
                    className={`w-10 h-10 sm:w-12 sm:h-12 relative z-10 ${
                      isDark ? "text-white" : "text-[#4A5CFF]"
                    }`}
                    strokeWidth={2}
                  />
                </div>
              </div>
              <h2
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center leading-tight mb-6 sm:mb-8 font-black tracking-tight"
                style={{
                  fontFamily: "Inter, system-ui, -apple-system, sans-serif",
                }}
              >
                <span className={isDark ? "text-white" : "text-gray-900"}>
                  Verla es un proveedor de servicios de telecomunicaciones
                  especializado en{" "}
                </span>
                <span className="inline-block">
                  <span className="bg-linear-to-r from-[#4A5CFF] via-[#5B6FFF] to-[#7A8FFF] bg-clip-text text-transparent animate-typewriter">
                    Internet de fibra óptica y TV IP
                  </span>
                </span>
                {/* <span className={isDark ? "text-white" : "text-gray-900"}>
                  .
                </span> */}
              </h2>
              <p
                className={`text-base sm:text-lg md:text-xl text-center leading-relaxed max-w-3xl mx-auto font-light ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
                style={{
                  fontFamily: "Inter, system-ui, -apple-system, sans-serif",
                }}
              >
                Ofrecemos conexiones de alta velocidad simétricas (FTTH) y
                televisión por IP en alta definición, llevando entretenimiento
                sin límites a los hogares colombianos con tecnología de última
                generación.
              </p>
            </div>
          </div>

          {/* Cards MVV con diseño moderno y vibrante */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20">
            <div
              className={`relative rounded-xl sm:rounded-2xl p-6 sm:p-8 group hover:scale-105 transition-all duration-300 overflow-hidden animate-slideInLeft ${
                !isDark ? "bg-transparent" : ""
              }`}
              style={{ animationDelay: "500ms", opacity: 0 }}
            >
              {/* Fondo con gradiente - solo en tema oscuro */}
              {isDark && (
                <div className="absolute inset-0 gradient-section-bg-dark"></div>
              )}
              {/* Border glow - solo en tema oscuro */}
              {isDark && (
                <div className="absolute inset-0 rounded-2xl gradient-border-primary-soft"></div>
              )}
              {/* Border simple en tema blanco */}
              {!isDark && (
                <div className="absolute inset-0 rounded-2xl border-primary-light bg-white/40"></div>
              )}
              {/* Efecto de gradiente en hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity gradient-section-bg-alt"></div>

              <div className="relative z-10 text-center">
                <div
                  className={`relative w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-all duration-500 animate-float ${
                    isDark
                      ? "bg-linear-to-br from-[#4A5CFF] to-[#5B6FFF] shadow-lg shadow-[#4A5CFF]/30"
                      : "bg-linear-to-br from-[#4A5CFF]/10 to-[#5B6FFF]/5 ring-2 ring-[#4A5CFF]/30"
                  }`}
                >
                  {/* Efecto de brillo interno */}
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-white/20 to-transparent opacity-50"></div>
                  <Target
                    size={40}
                    className={
                      isDark
                        ? "text-white relative z-10"
                        : "text-[#4A5CFF] relative z-10"
                    }
                    strokeWidth={2.5}
                  />
                </div>
                <h3
                  className="text-2xl sm:text-3xl font-black mb-4 tracking-tight"
                  style={{
                    fontFamily: "Inter, system-ui, -apple-system, sans-serif",
                  }}
                >
                  <span className="bg-linear-to-r from-[#4A5CFF] via-[#5B6FFF] to-[#7A8FFF] bg-clip-text text-transparent">
                    Misión
                  </span>
                </h3>
                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Conectar hogares colombianos con servicios de Internet de
                  fibra óptica y TV IP de alta calidad, brindando velocidad,
                  estabilidad y entretenimiento sin límites.
                </p>
              </div>
            </div>

            <div
              className={`relative rounded-xl sm:rounded-2xl p-6 sm:p-8 group hover:scale-105 transition-all duration-300 overflow-hidden animate-fadeInUp ${
                !isDark ? "bg-transparent" : ""
              }`}
              style={{ animationDelay: "400ms", opacity: 0 }}
            >
              {/* Fondo con gradiente - solo en tema oscuro */}
              {isDark && (
                <div className="absolute inset-0 gradient-section-bg-dark"></div>
              )}
              {/* Border glow - solo en tema oscuro */}
              {isDark && (
                <div className="absolute inset-0 rounded-2xl gradient-border-primary-soft"></div>
              )}
              {/* Border simple en tema blanco */}
              {!isDark && (
                <div className="absolute inset-0 rounded-2xl border-primary-light bg-white/40"></div>
              )}
              {/* Efecto de gradiente en hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity gradient-section-bg-alt"></div>

              <div className="relative z-10 text-center">
                <div
                  className={`relative w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-all duration-500 animate-float ${
                    isDark
                      ? "bg-linear-to-br from-[#4A5CFF] to-[#5B6FFF] shadow-lg shadow-[#4A5CFF]/30"
                      : "bg-linear-to-br from-[#4A5CFF]/10 to-[#5B6FFF]/5 ring-2 ring-[#4A5CFF]/30"
                  }`}
                  style={{ animationDelay: "0.5s" }}
                >
                  {/* Efecto de brillo interno */}
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-white/20 to-transparent opacity-50"></div>
                  <Heart
                    size={40}
                    className={
                      isDark
                        ? "text-white relative z-10"
                        : "text-[#4A5CFF] relative z-10"
                    }
                    strokeWidth={2.5}
                  />
                </div>
                <h3
                  className="text-2xl sm:text-3xl font-black mb-4 tracking-tight"
                  style={{
                    fontFamily: "Inter, system-ui, -apple-system, sans-serif",
                  }}
                >
                  <span className="bg-linear-to-r from-[#4A5CFF] via-[#5B6FFF] to-[#7A8FFF] bg-clip-text text-transparent">
                    Valores
                  </span>
                </h3>
                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Calidad de servicio, innovación tecnológica y atención al
                  cliente son los pilares que guían cada decisión en Verla.
                </p>
              </div>
            </div>

            <div
              className={`relative rounded-xl sm:rounded-2xl p-6 sm:p-8 group hover:scale-105 transition-all duration-300 overflow-hidden animate-slideInRight ${
                !isDark ? "bg-transparent" : ""
              }`}
              style={{ animationDelay: "600ms", opacity: 0 }}
            >
              {/* Fondo con gradiente - solo en tema oscuro */}
              {isDark && (
                <div className="absolute inset-0 gradient-section-bg-dark"></div>
              )}
              {/* Border glow - solo en tema oscuro */}
              {isDark && (
                <div className="absolute inset-0 rounded-2xl gradient-border-primary-soft"></div>
              )}
              {/* Border simple en tema blanco */}
              {!isDark && (
                <div className="absolute inset-0 rounded-2xl border-primary-light bg-white/40"></div>
              )}
              {/* Efecto de gradiente en hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity gradient-section-bg-alt"></div>

              <div className="relative z-10 text-center">
                <div
                  className={`relative w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-all duration-500 animate-float ${
                    isDark
                      ? "bg-linear-to-br from-[#4A5CFF] to-[#5B6FFF] shadow-lg shadow-[#4A5CFF]/30"
                      : "bg-linear-to-br from-[#4A5CFF]/10 to-[#5B6FFF]/5 ring-2 ring-[#4A5CFF]/30"
                  }`}
                  style={{ animationDelay: "1s" }}
                >
                  {/* Efecto de brillo interno */}
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-white/20 to-transparent opacity-50"></div>
                  <Globe
                    size={40}
                    className={
                      isDark
                        ? "text-white relative z-10"
                        : "text-[#4A5CFF] relative z-10"
                    }
                    strokeWidth={2.5}
                  />
                </div>
                <h3
                  className="text-2xl sm:text-3xl font-black mb-4 tracking-tight"
                  style={{
                    fontFamily: "Inter, system-ui, -apple-system, sans-serif",
                  }}
                >
                  <span className="bg-linear-to-r from-[#4A5CFF] via-[#5B6FFF] to-[#7A8FFF] bg-clip-text text-transparent">
                    Visión
                  </span>
                </h3>
                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Ser el proveedor líder de telecomunicaciones en Colombia,
                  reconocido por nuestra tecnología FTTH y servicio al cliente
                  excepcional.
                </p>
              </div>
            </div>
          </div>

          {/* Infraestructura Tecnológica */}
          <div className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center overflow-hidden">
            {/* Fondo con gradiente - solo en tema oscuro */}
            {isDark && (
              <div className="absolute inset-0 gradient-section-bg-dark"></div>
            )}
            {/* Border glow - solo en tema oscuro */}
            {isDark && (
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl gradient-border-primary-soft"></div>
            )}
            {/* Border simple en tema blanco */}
            {!isDark && (
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-primary-light bg-white/40"></div>
            )}

            <div className="relative z-10">
              <div
                className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-700 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
              >
                <div className={`inline-flex items-center gap-2 px-4 sm:px-6 py-1.5 sm:py-2 backdrop-blur-sm rounded-full animate-pulse ${
                  isDark 
                    ? "bg-white/10 border border-white/10" 
                    : "bg-[#4A5CFF]/10 border border-[#4A5CFF]/30"
                }`}>
                  <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#4A5CFF]" />
                  <span className={`text-xs font-bold uppercase tracking-wider ${
                    isDark ? "text-white" : "text-[#4A5CFF]"
                  }`}>
                    Nuestra Historia
                  </span>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4">
                Nuestra{" "}
                <span className="text-transparent bg-clip-text gradient-text-primary">
                  Tecnología
                </span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-4">
                Infraestructura de telecomunicaciones de última generación para
                garantizar la mejor experiencia
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                {[
                  {
                    name: "FTTH/FTTX",
                    Icon: Radio,
                    desc: "Fibra hasta el hogar",
                  },
                  { name: "GPON/OLT", Icon: Zap, desc: "Red óptica pasiva" },
                  {
                    name: "Core Routers",
                    Icon: Shuffle,
                    desc: "Enrutamiento principal",
                  },
                  {
                    name: "Switches",
                    Icon: LinkIcon,
                    desc: "Agregación de red",
                  },
                  { name: "TV Headend", Icon: Tv, desc: "Sistema TV IP" },
                  {
                    name: "DNS/CDN",
                    Icon: Globe,
                    desc: "Distribución contenido",
                  },
                  { name: "NMS", Icon: BarChart3, desc: "Monitoreo de red" },
                  { name: "AAA Radius", Icon: Lock, desc: "Autenticación" },
                ].map((tech) => (
                  <div
                    key={tech.name}
                    className={`relative rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 group/item transition-all duration-300 hover:scale-105 overflow-hidden ${
                      isDark ? "" : "bg-transparent"
                    }`}
                  >
                    {/* Fondo - tema oscuro */}
                    {isDark && (
                      <div className="absolute inset-0 gradient-section-bg-dark"></div>
                    )}
                    {/* Border glow - tema oscuro */}
                    {isDark && (
                      <div className="absolute inset-0 rounded-xl sm:rounded-2xl border border-[rgba(74,92,255,0.2)]"></div>
                    )}
                    {/* Border - tema blanco */}
                    {!isDark && (
                      <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-primary-light bg-white/40"></div>
                    )}
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover/item:opacity-100 transition-opacity gradient-section-bg-alt"></div>

                    <div className="relative z-10 text-center">
                      <div className="mb-2 sm:mb-3 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                        <tech.Icon
                          className="w-8 h-8 sm:w-10 sm:h-10 text-[#4A5CFF]"
                          strokeWidth={1.5}
                        />
                      </div>
                      <h4 className={`text-sm sm:text-base font-bold mb-1 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}>
                        {tech.name}
                      </h4>
                      <p className={`text-[10px] sm:text-xs ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}>
                        {tech.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Ventajas competitivas */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8 sm:mt-10 md:mt-12">
                <span className="px-5 py-2.5 rounded-lg text-sm text-white font-semibold flex items-center gap-2 advantage-badge">
                  <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  Velocidad Simétrica
                </span>
                <span className="px-5 py-2.5 rounded-lg text-sm text-white font-semibold flex items-center gap-2 advantage-badge">
                  <Tv className="w-4 h-4" />
                  TV HD/4K
                </span>
                <span className="px-5 py-2.5 rounded-lg text-sm text-white font-semibold flex items-center gap-2 advantage-badge">
                  <Lock className="w-4 h-4" />
                  Red Segura
                </span>
                <span className="px-5 py-2.5 rounded-lg text-sm text-white font-semibold flex items-center gap-2 advantage-badge">
                  <HeadphonesIcon className="w-4 h-4" />
                  Soporte 24/7
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
});

About.displayName = "About";

export default About;
