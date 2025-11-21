import {
  DollarSign,
  TrendingUp,
  Star,
  ArrowRight,
  Check,
  Home,
  Users,
  Wifi,
  Zap,
} from "lucide-react";
import { PageLayout, ParallaxBackground } from "@/shared//components";
import { Link } from "react-router-dom";
import { ROUTES } from "@/core/router/routes.config";

// Página de Comparador de Tarifas
// Ubicación: src/ui/pages/legal/comparador-tarifas/index.tsx

export default function ComparadorTarifasPage() {
  return (
    <PageLayout>
      <div className="container mx-auto mt-16 mb-16 px-6 max-w-6xl">
        {/* Header con ParallaxBackground */}
        <ParallaxBackground
          imageUrl="/images/backgrounds/9.jpg"
          className="mb-16 rounded-2xl overflow-hidden"
          height="400px"
        >
          <div className="relative z-10 text-center h-full flex flex-col items-center justify-center px-6">
            <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 gradient-icon-box">
              <DollarSign className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-white">
              Comparador de{" "}
              <div className="relative inline-block">
                <span className="text-transparent bg-clip-text animate-gradient gradient-text-animated">
                  Tarifas
                </span>
                {/* Underline */}
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#4A5CFF] to-transparent"></div>
              </div>
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Encuentra el plan perfecto para tu hogar con{" "}
              <span className="text-white font-semibold">
                total transparencia
              </span>
            </p>
          </div>
        </ParallaxBackground>

        {/* Content */}
        <div className="space-y-12">
          {/* Introducción con gradiente moderno */}
          <section className="relative rounded-3xl p-10 text-center overflow-hidden gradient-section-bg">
            {/* Border glow */}
            <div className="absolute inset-0 rounded-3xl gradient-border-primary"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <TrendingUp className="w-5 h-5 text-[#4A5CFF]" />
                <span className="text-sm font-bold text-white">
                  Transparencia Total
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Precios{" "}
                <span className="text-transparent bg-clip-text gradient-text-primary">
                  Justos y Honestos
                </span>
              </h2>
              <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
                En cumplimiento con la normativa de la{" "}
                <strong className="text-white">CRC</strong> (Comisión de
                Regulación de Comunicaciones), te presentamos todas nuestras
                tarifas de{" "}
                <strong className="text-white">Internet + TV IP</strong> sin
                cargos ocultos. Compara y elige con total confianza.
              </p>
            </div>
          </section>

          {/* Planes - Diseño idéntico a PricingPage */}
          <section>
            <h2 className="text-4xl font-black mb-4 text-center">
              Nuestros{" "}
              <span className="text-transparent bg-clip-text gradient-text-primary">
                Planes
              </span>
            </h2>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
              Elige el que mejor se adapte a tu estilo de vida
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Plan Hogar",
                  subtitle: "1-2 personas",
                  icon: Home,
                  speed: "300 Mbps",
                  speedLabel: "de velocidad simétrica",
                  // price: "79.900",
                  price: "Te Sorprenderás",
                  features: [
                    "Velocidad simétrica 300 Mbps",
                    "100+ canales en HD",
                    "1 decodificador incluido",
                    "Soporte técnico 24/7",
                    "Instalación gratuita",
                    "Router WiFi 6 incluido",
                  ],
                  buttonText: "Contratar este Plan",
                  highlighted: false,
                  gradient: "from-[#4A5CFF] to-[#7A8FFF]",
                  badge: "Mejor Valor",
                },
                {
                  name: "Plan Familia",
                  subtitle: "Perfecto para 3-5 personas",
                  icon: Users,
                  speed: "600 Mbps",
                  speedLabel: "de velocidad simétrica",
                  // price: "119.900",
                  price: "Te Sorprenderás",
                  savings: "Ahorra $40.000 vs contratar por separado",
                  features: [
                    "Velocidad simétrica 600 Mbps (descarga y subida)",
                    "200+ canales HD, 4K y contenido on-demand",
                    "2 decodificadores 4K incluidos",
                    "Soporte técnico prioritario 24/7",
                    "Instalación profesional gratuita",
                    "Router WiFi 6 Dual Band de alta gama",
                    "App móvil para ver TV en cualquier dispositivo",
                    "Control parental avanzado",
                    "Grabación en la nube (50 horas)",
                    "Netflix básico incluido por 3 meses",
                    "Garantía de velocidad mínima",
                    "Sin cargos ocultos ni costos de activación",
                  ],
                  buttonText: "Contratar este Plan",
                  highlighted: true,
                  gradient: "from-[#5B6FFF] via-[#4A5CFF] to-[#7A8FFF]",
                  badge: "Recomendado",
                },
                {
                  name: "Plan Pro",
                  subtitle: "Gamers y pequeños negocios",
                  icon: Zap,
                  speed: "1000 Mbps",
                  speedLabel: "de velocidad simétrica",
                  // price: "169.900",
                  price: "Te Sorprenderás",
                  features: [
                    "Velocidad simétrica 1000 Mbps",
                    "250+ canales HD, 4K y Premium",
                    "3 decodificadores incluidos",
                    "Soporte técnico VIP 24/7",
                    "Instalación gratuita express",
                    "Router WiFi 6E Mesh incluido",
                    "App móvil premium",
                    "IP estática disponible",
                    "Configuración para gaming/streaming",
                    "Amazon Prime Video por 6 meses",
                  ],
                  buttonText: "Contratar este Plan",
                  highlighted: false,
                  gradient: "from-[#7A8FFF] to-[#4A5CFF]",
                  badge: "Premium",
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`relative group ${
                    plan.highlighted ? "md:-mt-8" : ""
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
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 gradient-hover-overlay"></div>

                    {/* Contenido */}
                    <div className="relative p-8">
                      {/* Header del plan */}
                      <div className="text-center mb-8">
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
                            <div
                              className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500"
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

                        <h3 className="text-2xl font-black mb-1 text-white">
                          {plan.name}
                        </h3>
                        <p className="text-sm text-gray-400 mb-6">
                          {plan.subtitle}
                        </p>

                        {/* Velocidad */}
                        <div className="mb-6">
                          <div
                            className="text-5xl font-black mb-2 text-transparent bg-clip-text"
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
                        <div className="flex items-baseline justify-center gap-1 mb-2">
                          {/* <span className="text-3xl text-gray-400">$</span> */}
                          <span className="text-4xl font-black text-white">
                            {plan.price}
                          </span>
                          {/* <span className="text-xl text-gray-400">/mes</span> */}
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

                      {/* Features */}
                      <div className="space-y-3 mb-8">
                        {plan.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <div className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 gradient-check-circle">
                              <Check
                                className="w-3 h-3 text-white"
                                strokeWidth={3}
                              />
                            </div>
                            <span className="text-sm text-gray-300 leading-relaxed">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Botón CTA moderno con icono */}
                      <button
                        className={`group/btn relative flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold transition-all duration-300 overflow-hidden ${
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
                      </button>
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
          </section>

          {/* Tabla Comparativa */}
          <section className="relative rounded-3xl p-8 overflow-hidden gradient-section-bg-alt">
            <div className="absolute inset-0 rounded-3xl gradient-border-primary-soft"></div>

            <h2 className="text-3xl font-black mb-8 text-center">
              Comparación{" "}
              <span className="text-transparent bg-clip-text gradient-text-primary">
                Detallada
              </span>
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm relative">
                <thead>
                  <tr className="border-b border-[rgba(74,92,255,0.3)]">
                    <th className="text-left py-4 px-4 text-gray-400 font-bold">
                      Característica
                    </th>
                    <th className="text-center py-4 px-4 font-bold text-[#4A5CFF]">
                      Plan Hogar
                    </th>
                    <th className="text-center py-4 px-4 font-bold text-[#5B6FFF]">
                      Plan Familia
                    </th>
                    <th className="text-center py-4 px-4 font-bold text-[#7A8FFF]">
                      Plan Pro
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feature: "Velocidad simétrica",
                      hogar: "300 Mbps",
                      familia: "600 Mbps",
                      pro: "1000 Mbps",
                    },
                    {
                      feature: "Canales TV",
                      hogar: "100+ HD",
                      familia: "200+ HD/4K",
                      pro: "250+ HD/4K/Premium",
                    },
                    {
                      feature: "Decodificadores",
                      hogar: "1",
                      familia: "2 4K",
                      pro: "3",
                    },
                    {
                      feature: "Router WiFi",
                      hogar: "WiFi 6",
                      familia: "WiFi 6 Dual Band",
                      pro: "WiFi 6E Mesh",
                    },
                    {
                      feature: "IP estática",
                      hogar: "—",
                      familia: "—",
                      pro: "Disponible",
                    },
                    {
                      feature: "App móvil",
                      hogar: "—",
                      familia: "✓",
                      pro: "✓ Premium",
                    },
                    {
                      feature: "Streaming incluido",
                      hogar: "—",
                      familia: "Netflix 3m",
                      pro: "Prime 6m",
                    },
                    {
                      feature: "Soporte técnico",
                      hogar: "24/7",
                      familia: "Prioritario 24/7",
                      pro: "VIP 24/7",
                    },
                    {
                      feature: "Instalación",
                      hogar: "Gratuita",
                      familia: "Gratuita",
                      pro: "Express Gratuita",
                    },
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="py-4 px-4 text-gray-300 font-medium">
                        {row.feature}
                      </td>
                      <td className="py-4 px-4 text-center text-gray-400">
                        {row.hogar}
                      </td>
                      <td className="py-4 px-4 text-center font-bold text-[#4A5CFF]">
                        {row.familia}
                      </td>
                      <td className="py-4 px-4 text-center font-bold text-[#7A8FFF]">
                        {row.pro}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Información Legal */}
          <section className="relative rounded-3xl p-8 overflow-hidden gradient-section-bg-alt">
            <div className="absolute inset-0 rounded-3xl gradient-border-primary-soft"></div>

            <h2 className="text-3xl font-black mb-6">
              Información{" "}
              <span className="text-transparent bg-clip-text gradient-text-primary">
                Legal
              </span>
            </h2>
            <div className="space-y-4 text-gray-300 text-sm">
              <p>
                <strong className="text-white">Precio Total:</strong> Los
                precios mostrados incluyen IVA (19%) y todos los cargos
                aplicables. Planes combina Internet Fibra Óptica + TV IP.
              </p>
              <p>
                <strong className="text-white">Sin permanencia:</strong> Puedes
                cancelar tu servicio en cualquier momento sin penalizaciones ni
                cláusulas de permanencia.
              </p>
              <p>
                <strong className="text-white">Instalación:</strong> Instalación
                profesional gratuita en todos los planes (instalación express en
                Plan Pro).
              </p>
              <p>
                <strong className="text-white">Velocidad simétrica:</strong> Las
                velocidades de subida y bajada son iguales, garantizadas por
                fibra óptica hasta tu hogar (FTTH).
              </p>
              <p>
                <strong className="text-white">Facturación:</strong> Mensual.
                Primer mes prorrateado según fecha de instalación.
              </p>
              <p>
                <strong className="text-white">Medios de pago:</strong>{" "}
                Efectivo, transferencia bancaria, tarjeta de crédito, débito y
                PSE.
              </p>
              <p>
                <strong className="text-white">Cobertura:</strong> Disponible en
                zonas urbanas de Colombia. Verifica disponibilidad en tu
                dirección.
              </p>
            </div>
          </section>

          {/* Testimonios */}
          <section>
            <h2 className="text-4xl font-black mb-4 text-center">
              Lo que dicen{" "}
              <span className="text-transparent bg-clip-text gradient-text-primary">
                Nuestros Clientes
              </span>
            </h2>
            <p className="text-center text-gray-400 mb-12">
              Testimonios reales de usuarios satisfechos
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "María González",
                  plan: "Plan Familia",
                  rating: 5,
                  comment:
                    "Excelente servicio, la velocidad es constante y los canales de TV son de gran calidad. Perfecto para mi familia.",
                },
                {
                  name: "Carlos Ruiz",
                  plan: "Plan Pro",
                  rating: 5,
                  comment:
                    "Ideal para mi oficina en casa. 1000 Mbps reales, nunca tengo lag en videollamadas y el gaming es perfecto.",
                },
                {
                  name: "Ana Torres",
                  plan: "Plan Hogar",
                  rating: 5,
                  comment:
                    "Relación precio-calidad increíble. 300 Mbps son más que suficientes para mi hogar y el soporte es excelente.",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="relative rounded-2xl p-6 transition-all duration-300 hover:scale-105 gradient-section-bg border border-[rgba(74,92,255,0.2)]"
                >
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm mb-4 italic">
                    "{testimonial.comment}"
                  </p>
                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-500">{testimonial.plan}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Premium */}
          <section className="relative rounded-3xl p-12 text-center overflow-hidden cta-section-bg">
            {/* Glow effects */}
            <div className="absolute top-0 left-1/4 w-64 h-64 blur-3xl opacity-30 glow-primary-left"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 blur-3xl opacity-30 glow-secondary-right"></div>

            {/* Border glow */}
            <div className="absolute inset-0 rounded-3xl gradient-border-cta"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                ¿Listo para conectarte con{" "}
                <span className="text-transparent bg-clip-text gradient-text-primary">
                  Verla?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contáctanos y uno de nuestros asesores te ayudará a elegir el{" "}
                <strong className="text-white">plan perfecto</strong> para tu
                hogar
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to={ROUTES.CONTACT}
                  className="group px-10 py-4 rounded-xl font-bold text-white btn-cta-primary"
                >
                  <span className="flex items-center gap-2 justify-center dark:text-white">
                    Hablar con un Asesor
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  to={ROUTES.CONTACT}
                  className="px-10 py-4 rounded-xl font-bold btn-cta-secondary inline-flex items-center justify-center"
                >
                  Verificar Cobertura
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
