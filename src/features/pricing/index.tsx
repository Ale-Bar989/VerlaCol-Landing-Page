import { Check, ArrowRight, Wifi } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BackgroundEffects, Modal, PlanBanner, LazySection } from "@/shared/components";
import { Navbar } from "@/shared/components";
import { ROUTES } from "@/core/router/routes.config";
import FooterSection from "@/features/home/components/sections/FooterSection";
import { PricingSpeedTest, LeadMagnetForm } from "./components";
import { PRICING_PLANS } from "./data";
import type { Plan } from "./types";

// Página de Precios de Verla
// Ubicación: src/ui/pages/pricing/index.tsx

export default function PricingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  // MODO EXPECTATIVA: las tarjetas de planes (300/600/1000 Mbps) están ocultas
  // hasta que marketing valide las velocidades y precios definitivos.
  // Reactivar cambiando a true cuando se definan los planes.
  const MOSTRAR_PLANES = false;

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedPlan(null), 300);
  };

  // Scroll automático a #registro cuando se navega con ese hash (ej. desde el botón "Ver producto")
  useEffect(() => {
    if (window.location.hash === "#registro") {
      const el = document.getElementById("registro");
      if (el) {
        // Pequeño retardo para asegurar que el layout ya está renderizado
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 150);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <BackgroundEffects variant="animated" opacity={20} />

      {/* Contenido principal */}
      <div className="relative z-10 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Header — MODO EXPECTATIVA */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-1.5 sm:py-2 bg-white/5 border border-white/10 rounded-full mb-6 sm:mb-8">
              <div className="w-2 h-2 bg-[#4A5CFF] rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Próximamente
              </span>
            </div>

            {/* Título */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight px-2">
              Sé de los{" "}
              <span className="text-transparent bg-clip-text inline-block gradient-text-primary">
                primeros
              </span>
              <br />
              en conectarse con Verla
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Estamos preparando la mejor conectividad de fibra óptica y TV IP para tu hogar.
              <br />
              <span className="text-gray-500">
                Regístrate y recibe beneficios exclusivos de preventa.
              </span>
            </p>
          </div>

          {/* Planes — MODO EXPECTATIVA: tarjetas ocultas hasta definir precios definitivos.
              Reactivar cambiando MOSTRAR_PLANES a true. */}
          {MOSTRAR_PLANES && (
          <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {PRICING_PLANS.map((plan, index) => (
              <div
                key={index}
                className={`relative group ${
                  plan.highlighted ? "lg:-mt-8" : ""
                }`}
              >
                {/* Badge moderno y sutil */}
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                    <div className="relative">
                      <div className="px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm border gradient-badge-bg text-white">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4A5CFF] animate-pulse"></span>
                          {plan.badge}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Resplandor exterior más sutil */}
                {plan.highlighted && (
                  <div className="absolute -inset-0.5 rounded-3xl opacity-20 group-hover:opacity-30 blur-lg transition-opacity duration-500 gradient-icon-box"></div>
                )}

                {/* Card principal */}
                <div
                  className={`relative h-full bg-linear-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border rounded-3xl overflow-hidden transition-all duration-500 ${
                    plan.highlighted
                      ? "border-white/30 shadow-2xl"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  {/* Gradiente animado de fondo */}
                  <div
                    className={`absolute inset-0 opacity-0 transition-opacity duration-700 `}
                  ></div>

                  {/* Contenido */}
                  <div className="relative">
                    {/* Header del plan con banner */}
                    <PlanBanner
                      imageUrl={
                        plan.name === "Plan Hogar"
                          ? "/images/backgrounds/5.jpg"
                          : plan.name === "Plan Familia"
                          ? "/images/backgrounds/6.jpg"
                          : "/images/backgrounds/12.jpg"
                      }
                      title={plan.name}
                      subtitle={plan.subtitle}
                      className="rounded-t-3xl h-32"
                      opacity={0.6}
                    />

                    {/* Resto del contenido */}
                    <div className="p-6 sm:p-8">
                      <div className="text-center mb-6 sm:mb-8">
                        {/* Velocidad */}
                        <div className="mb-4 sm:mb-6">
                          <div className="text-4xl sm:text-5xl font-black mb-2">
                            <span
                              className="text-transparent bg-clip-text"
                              style={{
                                backgroundImage:
                                  plan.name === "Plan Hogar"
                                    ? "linear-gradient(135deg, #4A5CFF, #7A8FFF)"
                                    : plan.name === "Plan Familia"
                                    ? "linear-gradient(135deg, #5B6FFF, #4A5CFF, #7A8FFF)"
                                    : "linear-gradient(135deg, #7A8FFF, #4A5CFF)",
                              }}
                            >
                              {plan.speed}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500">
                            {plan.speedLabel}
                          </p>
                        </div>

                        {/* Precio */}
                        <div className="flex items-baseline justify-center gap-0.5 sm:gap-1 mb-2">
                          {/* <span className="text-2xl sm:text-3xl text-gray-400">
                            $
                          </span> */}
                          <span className="text-2xl sm:text-3xl md:text-4xl font-black text-[#5B6FFF] typewriter">
                            {plan.price}
                          </span>
                          <style>{`
                            @keyframes typing {
                              from { width: 0 }
                              to { width: 100% }
                            }
                            @keyframes blink {
                              50% { border-color: transparent }
                            }
                            .typewriter {
                              overflow: hidden;
                              border-right: 3px solid #5B6FFF;
                              white-space: nowrap;
                              animation: typing 2s steps(20, end), blink 0.75s step-end infinite;
                            }
                          `}</style>
                          {/* <span className="text-base sm:text-xl text-gray-400">
                            /mes
                          </span> */}
                        </div>

                        {/* Ahorro (solo para Plan Familia) */}
                        {/* {plan.savings && (
                          <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg gradient-savings-badge">
                            <svg
                              className="w-4 h-4 text-green-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span className="text-xs font-semibold text-green-400">
                              {plan.savings}
                            </span>
                          </div>
                        )} */}
                      </div>

                      {/* Extra Info (solo para Plan Familia) */}
                      {plan.extraInfo && (
                        <div className="mb-4 sm:mb-6 grid grid-cols-1 gap-2">
                          {plan.extraInfo.map((info, i) => {
                            const IconComponent = info.icon;
                            return (
                              <div
                                key={i}
                                className="flex items-center gap-2 px-3 py-2 rounded-lg gradient-section-bg-alt"
                              >
                                <IconComponent className="w-4 h-4 text-[#4A5CFF]" />
                                <span className="text-xs text-gray-300 font-medium">
                                  {info.text}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {/* Features */}
                      <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                        {plan.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 gradient-check-circle">
                              <Check
                                className="w-3 h-3 text-white"
                                strokeWidth={3}
                              />
                            </div>
                            <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Botón CTA moderno con icono */}
                      <Link
                        to={ROUTES.CONTACT}
                        className={`group/btn relative flex items-center justify-center gap-1.5 sm:gap-2 w-full py-3 sm:py-4 rounded-xl text-sm sm:text-base font-bold transition-all duration-300 overflow-hidden ${
                          plan.highlighted
                            ? "text-white shadow-lg hover:shadow-xl hover:scale-105"
                            : "bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30"
                        }`}
                        style={
                          plan.highlighted
                            ? {
                                background:
                                  "linear-gradient(135deg, #4A5CFF, #7A8FFF)",
                                boxShadow: "0 10px 30px rgba(74, 92, 255, 0.4)",
                              }
                            : undefined
                        }
                      >
                        {/* Efecto de brillo en hover */}
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-out"></div>

                        {/* Icono WiFi */}
                        <Wifi
                          className="w-5 h-5 group-hover/btn:scale-110 transition-transform"
                          strokeWidth={2.5}
                        />

                        <span className="relative">{plan.buttonText}</span>

                        {/* Icono de flecha */}
                        <ArrowRight
                          className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform"
                          strokeWidth={2.5}
                        />
                      </Link>
                    </div>
                  </div>

                  {/* Línea decorativa inferior */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${
                        plan.gradient.includes("via")
                          ? plan.gradient.split("via-")[1].split(" ")[0]
                          : plan.gradient.split("to-")[1]
                      }, transparent)`,
                      opacity: 0.5,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer info */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8 py-4 sm:py-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm max-w-full">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 gradient-icon-box">
                  <Check
                    className="w-5 h-5 sm:w-6 sm:h-6 text-[#ffffff]"
                    strokeWidth={3}
                  />
                </div>
                <div className="text-left min-w-0">
                  <div className="text-xs sm:text-sm font-bold text-white whitespace-nowrap">
                    Sin permanencia
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-400 whitespace-nowrap">
                    Cancela cuando quieras
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 gradient-icon-box">
                  <Check
                    className="w-5 h-5 sm:w-6 sm:h-6 text-[#ffffff]"
                    strokeWidth={3}
                  />
                </div>
                <div className="text-left min-w-0">
                  <div className="text-xs sm:text-sm font-bold text-white whitespace-nowrap">
                    Instalación gratuita
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-400 whitespace-nowrap">
                    En 24-48 horas
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 gradient-icon-box">
                  <Check
                    className="w-5 h-5 sm:w-6 sm:h-6 text-[#ffffff]"
                    strokeWidth={3}
                  />
                </div>
                <div className="text-left min-w-0">
                  <div className="text-xs sm:text-sm font-bold text-white whitespace-nowrap">
                    Soporte 24/7
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-400 whitespace-nowrap">
                    Siempre disponibles
                  </div>
                </div>
              </div>
            </div>
          </div>
          </>
          )}

          {/* Lead Magnet — Lista de espera de preventa (Modo Expectativa) */}
          <section id="registro" className="mt-16 sm:mt-20 md:mt-24 scroll-mt-28">
            <LazySection>
              <div className="relative rounded-3xl p-8 sm:p-10 md:p-12 overflow-hidden">
                {/* Fondo con gradiente */}
                <div className="absolute inset-0 gradient-section-bg"></div>
                {/* Border glow */}
                <div className="absolute inset-0 rounded-3xl gradient-border-primary-soft"></div>

                <div className="relative z-10">
                  <div className="text-center mb-8 sm:mb-10">
                    <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
                      <div className="w-2 h-2 bg-[#4A5CFF] rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                        Lanzamiento exclusivo
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 leading-tight">
                      Sé parte del lanzamiento exclusivo de{" "}
                      <span className="text-transparent bg-clip-text gradient-text-primary">
                        Verla
                      </span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                      Regístrate para recibir beneficios únicos de preventa y ser de los
                      primeros en conocer nuestras alternativas de navegación.
                    </p>
                  </div>

                  <LeadMagnetForm />
                </div>
              </div>
            </LazySection>
          </section>
        </div>
      </div>

      {/* Animaciones CSS */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>

      <FooterSection />

      {/* Modal con SpeedTest animado */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedPlan && (
          <PricingSpeedTest
            planName={selectedPlan.name}
            planSpeed={selectedPlan.speed}
          />
        )}
      </Modal>
    </div>
  );
}
