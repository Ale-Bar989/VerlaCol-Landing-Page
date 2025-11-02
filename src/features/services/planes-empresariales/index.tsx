import {
  Building2,
  Users,
  Check,
  Zap,
  Shield,
  Globe,
  Clock,
  TrendingUp,
  Award,
} from "lucide-react";
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

// Página de Planes Empresariales
// Ubicación: src/ui/pages/services/planes-empresariales/index.tsx

export default function PlanesEmpresarialesPage() {
  const { isDark } = useLocalTheme();

  const features: Feature[] = [
    {
      icon: Zap,
      title: "Alta Velocidad Dedicada",
      description:
        "Conexión de hasta 10 Gbps con ancho de banda garantizado para operaciones críticas",
      color: DESIGN_SYSTEM.colors.primary,
    },
    {
      icon: Shield,
      title: "Seguridad Avanzada",
      description:
        "Firewall empresarial, VPN dedicada y protección DDoS incluida",
      color: DESIGN_SYSTEM.colors.secondary,
    },
    {
      icon: Globe,
      title: "IP Estática",
      description:
        "Múltiples IPs públicas estáticas para servidores y servicios empresariales",
      color: DESIGN_SYSTEM.colors.accent,
    },
    {
      icon: Clock,
      title: "SLA 99.95%",
      description:
        "Acuerdo de nivel de servicio garantizado con compensación por downtime",
      color: DESIGN_SYSTEM.colors.primary,
    },
    {
      icon: Users,
      title: "Soporte Prioritario",
      description:
        "Equipo técnico dedicado disponible 24/7/365 con tiempos de respuesta garantizados",
      color: DESIGN_SYSTEM.colors.secondary,
    },
    {
      icon: TrendingUp,
      title: "Escalabilidad",
      description:
        "Planes flexibles que crecen con tu negocio sin interrupciones",
      color: DESIGN_SYSTEM.colors.accent,
    },
  ];

  const businessBenefits = [
    {
      icon: Award,
      title: "Consultoría Especializada",
      description:
        "Asesoría técnica para optimizar tu infraestructura de red y comunicaciones",
    },
    {
      icon: Shield,
      title: "Backup Redundante",
      description:
        "Conexión de respaldo automática para garantizar continuidad del negocio",
    },
    {
      icon: Globe,
      title: "Soluciones Cloud",
      description:
        "Integración con servicios cloud AWS, Azure y Google Cloud Platform",
    },
    {
      icon: Building2,
      title: "Infraestructura Dedicada",
      description:
        "Equipamiento profesional y conexión directa sin compartir recursos",
    },
  ];

  const benefits = [
    "Instalación y configuración profesional sin costo",
    "Router empresarial de alta gama incluido",
    "Certificaciones ISO para seguridad de datos",
    "Monitoreo 24/7 de la red",
    "Reportes mensuales de desempeño",
    "Garantía de servicio SLA 99.95%",
    "Migración asistida desde otros proveedores",
    "Sin costos ocultos ni cargos adicionales",
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <ServiceHeroSection
        icon={Building2}
        title="Planes"
        highlight="Empresariales"
        subtitle="Soluciones de conectividad robustas y escalables para tu empresa"
      />

      {/* Main Description */}
      <section className={`py-12 px-6 ${isDark ? "bg-black" : "bg-white"}`}>
        <div className="container mx-auto max-w-4xl">
          <div
            className={`p-8 rounded-3xl ${
              isDark ? "bg-gray-900/50" : "bg-gray-50"
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
              Potencia el crecimiento de tu empresa con soluciones de
              conectividad de grado empresarial. Ofrecemos conexiones dedicadas,
              soporte prioritario y SLAs garantizados para mantener tu negocio
              siempre conectado y operativo.
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
            Características Empresariales
          </h2>
        </div>
        <FeaturesGrid features={features} columns={3} />
      </section>

      {/* Business Benefits */}
      <section
        className={`py-20 px-6 ${isDark ? "bg-gray-950" : "bg-gray-50"}`}
      >
        <div className="container mx-auto max-w-7xl">
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Soluciones Complementarias
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {businessBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                    isDark ? "bg-gray-900" : "bg-white"
                  }`}
                  style={{
                    border: `1px solid ${
                      isDark
                        ? DESIGN_SYSTEM.rgba.primary[20]
                        : DESIGN_SYSTEM.rgba.primary[10]
                    }`,
                    boxShadow: isDark
                      ? DESIGN_SYSTEM.shadows.medium
                      : "0 4px 12px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: isDark
                        ? DESIGN_SYSTEM.rgba.primary[20]
                        : DESIGN_SYSTEM.rgba.primary[10],
                    }}
                  >
                    <Icon
                      className="w-7 h-7"
                      style={{ color: DESIGN_SYSTEM.colors.primary }}
                    />
                  </div>
                  <h3
                    className={`text-xl font-bold mb-3 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={`py-20 px-6 ${isDark ? "bg-black" : "bg-white"}`}>
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
                  isDark ? "bg-gray-900" : "bg-gray-50"
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
        title="¿Listo para llevar tu empresa al siguiente nivel?"
        description="Contáctanos para una consultoría gratuita y cotización personalizada"
        buttonText="Solicitar Cotización"
        buttonLink={ROUTES.CONTACT}
      />
    </PageLayout>
  );
}
