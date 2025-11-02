import { Zap, Shield, TrendingUp, Clock, Check, Wifi } from "lucide-react";
import {
  PageLayout,
  ServiceHeroSection,
  FeaturesGrid,
  CTASection,
  type Feature,
} from '@/shared//components';
import { useLocalTheme } from '@/shared//hooks/useLocalTheme';
import { DESIGN_SYSTEM } from '@/shared//styles/design-system';
import { ROUTES } from '@/core/router/routes.config';

// Página de Fibra Óptica Residencial
// Ubicación: src/ui/pages/services/fibra-residencial/index.tsx

export default function FibraResidencialPage() {
  const { isDark } = useLocalTheme();

  const features: Feature[] = [
    {
      icon: Zap,
      title: "Velocidad Simétrica",
      description: "Misma velocidad de subida y bajada hasta 1 Gbps",
      color: DESIGN_SYSTEM.colors.primary,
    },
    {
      icon: Shield,
      title: "Máxima Estabilidad",
      description: "99.9% uptime garantizado sin interferencias",
      color: DESIGN_SYSTEM.colors.secondary,
    },
    {
      icon: TrendingUp,
      title: "Baja Latencia",
      description: "Ideal para gaming, streaming 4K y videollamadas",
      color: DESIGN_SYSTEM.colors.accent,
    },
    {
      icon: Clock,
      title: "Instalación Rápida",
      description: "Técnicos certificados en 24-48 horas",
      color: DESIGN_SYSTEM.colors.primary,
    },
  ];

  const benefits = [
    "Router WiFi 6 de última generación",
    "IP pública estática disponible",
    "Sin límite de descarga o consumo",
    "Soporte técnico 24/7",
    "Sin permanencia mínima",
    "Instalación sin costo adicional",
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <ServiceHeroSection
        icon={Wifi}
        title="Fibra Óptica"
        highlight="Residencial"
        subtitle="Conectividad de última generación con tecnología FTTH (Fiber To The Home)"
      />

      {/* Main Description */}
      <section className={`py-12 px-6 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="container mx-auto max-w-4xl">
          <div
            className={`p-8 rounded-3xl ${
              isDark ? 'bg-gray-900/50' : 'bg-gray-50'
            }`}
            style={{
              border: `1px solid ${
                isDark
                  ? DESIGN_SYSTEM.rgba.primary[20]
                  : DESIGN_SYSTEM.rgba.primary[10]
              }`,
            }}
          >
            <p
              className={`text-lg leading-relaxed ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Experimenta internet a velocidades ultrarrápidas con nuestra
              tecnología de fibra óptica FTTH. Conexión simétrica directa a tu
              hogar sin intermediarios, proporcionando la mejor experiencia de
              navegación, streaming y gaming disponible en el mercado.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className={`${isDark ? "bg-black" : "bg-white"}`}>
        <div className="container mx-auto max-w-7xl px-6 pb-12">
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Características Principales
          </h2>
        </div>
        <FeaturesGrid features={features} columns={4} />
      </section>

      {/* Benefits Section */}
      <section
        className={`py-20 px-6 ${isDark ? "bg-gray-950" : "bg-gray-50"}`}
      >
        <div className="container mx-auto max-w-4xl">
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Beneficios Incluidos
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 p-4 rounded-xl transition-all hover:scale-102 ${
                  isDark ? "bg-gray-900" : "bg-white"
                }`}
                style={{
                  border: `1px solid ${
                    isDark
                      ? DESIGN_SYSTEM.rgba.primary[20]
                      : DESIGN_SYSTEM.rgba.primary[10]
                  }`,
                }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: DESIGN_SYSTEM.rgba.primary[20],
                  }}
                >
                  <Check
                    className="w-4 h-4"
                    style={{ color: DESIGN_SYSTEM.colors.primary }}
                  />
                </div>
                <span
                  className={`${isDark ? "text-gray-300" : "text-gray-700"}`}
                >
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="¿Listo para la mejor conexión?"
        description="Contrata ahora y disfruta de internet sin límites"
        buttonText="Solicitar Información"
        buttonLink={ROUTES.CONTACT}
      />
    </PageLayout>
  );
}
