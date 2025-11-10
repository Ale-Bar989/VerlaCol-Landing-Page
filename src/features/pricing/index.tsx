import { Check, ArrowRight, Wifi } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BackgroundEffects, Modal } from "@/shared/components";
import { Navbar } from "@/shared/components";
import { ROUTES } from "@/core/router/routes.config";
import FooterSection from "@/features/home/components/sections/FooterSection";
import { PricingSpeedTest } from "./components";
import { PRICING_PLANS } from "./data";
import type { Plan } from "./types";

// Página de Precios de Verla
// Ubicación: src/ui/pages/pricing/index.tsx

export default function PricingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedPlan(null), 300);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <BackgroundEffects variant="animated" opacity={20} />

      {/* Contenido principal */}
      <div className="relative z-10 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-1.5 sm:py-2 bg-white/5 border border-white/10 rounded-full mb-6 sm:mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Planes de Internet y TV
              </span>
            </div>

            {/* Título */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight px-2">
              Elige el plan{" "}
              <span className="text-transparent bg-clip-text inline-block gradient-text-primary">perfecto</span>
              <br />
              para tu hogar
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Fibra óptica de última generación con TV IP en alta definición.
              <br />
              <span className="text-gray-500">
                Sin contratos, sin permanencia, sin sorpresas.
              </span>
            </p>
          </div>

          {/* Planes */}
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
                  <div className={`absolute inset-0 opacity-0 transition-opacity duration-700 `}></div>

                  {/* Contenido */}
                  <div className="relative p-6 sm:p-8">
                    {/* Header del plan */}
                    <div className="text-center mb-6 sm:mb-8">
                      {/* Icono del plan */}
                      <div className="flex justify-center mb-4">
                        <div
                          className="relative w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                          style={{
                            background: `linear-gradient(135deg, ${plan.gradient
                              .replace("from-", "")
                              .replace("to-", ", ")
                              .replace("via-", ", ")})`,
                            boxShadow: `0 8px 25px ${
                              plan.highlighted
                                ? "rgba(74, 92, 255, 0.4)"
                                : "rgba(74, 92, 255, 0.2)"
                            }`,
                          }}
                        >
                          <plan.icon
                            className="w-8 h-8 text-white"
                            strokeWidth={2.5}
                          />
                          {/* Efecto de pulso sutil */}
                          <div
                            className={`absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500`}
                            style={{
                              background: `linear-gradient(135deg, ${plan.gradient
                                .replace("from-", "")
                                .replace("to-", ", ")
                                .replace("via-", ", ")})`,
                              filter: "blur(8px)",
                            }}
                          ></div>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-black mb-1 text-white">
                        {plan.name}
                      </h3>
                      <p className="text-sm text-gray-400 mb-6">
                        {plan.subtitle}
                      </p>

                      {/* Velocidad */}
                      <div className="mb-4 sm:mb-6">
                        <div
                          className="text-4xl sm:text-5xl font-black mb-2 text-transparent bg-clip-text"
                          style={{
                            backgroundImage: `linear-gradient(135deg, ${plan.gradient
                              .replace("from-", "")
                              .replace("to-", ", ")
                              .replace("via-", ", ")})`,
                          }}
                        >
                          {plan.speed}
                        </div>
                        <p className="text-sm text-gray-500">
                          {plan.speedLabel}
                        </p>
                      </div>

                      {/* Precio */}
                      <div className="flex items-baseline justify-center gap-0.5 sm:gap-1 mb-2">
                        <span className="text-2xl sm:text-3xl text-gray-400">
                          $
                        </span>
                        <span className="text-4xl sm:text-5xl md:text-6xl font-black text-white">
                          {plan.price}
                        </span>
                        <span className="text-base sm:text-xl text-gray-400">
                          /mes
                        </span>
                      </div>

                      {/* Ahorro (solo para Plan Familia) */}
                      {plan.savings && (
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
                      )}
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
