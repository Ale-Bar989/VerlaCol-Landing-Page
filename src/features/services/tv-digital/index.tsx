import {
  Tv,
  Film,
  Clapperboard,
  Radio,
  Check,
  Monitor,
  Users,
  Star,
  Play,
  Calendar,
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

// Página de TV Digital HD
// Ubicación: src/ui/pages/services/tv-digital/index.tsx

export default function TVDigitalPage() {
  const { isDark } = useLocalTheme();

  const features: Feature[] = [
    {
      icon: Monitor,
      title: "Calidad 4K/HD",
      description:
        "Disfruta de imagen y sonido en máxima resolución con tecnología HDR",
      color: DESIGN_SYSTEM.colors.primary,
    },
    {
      icon: Film,
      title: "200+ Canales",
      description:
        "Entretenimiento, deportes, películas, series y contenido infantil",
      color: DESIGN_SYSTEM.colors.secondary,
    },
    {
      icon: Play,
      title: "Video On Demand",
      description: "Miles de títulos disponibles cuando quieras, sin esperas",
      color: DESIGN_SYSTEM.colors.accent,
    },
    {
      icon: Calendar,
      title: "Grabación Cloud",
      description:
        "Graba tus programas favoritos y míralo cuando quieras, hasta 200 horas",
      color: DESIGN_SYSTEM.colors.primary,
    },
    {
      icon: Users,
      title: "Multi-Pantalla",
      description:
        "Ve diferentes contenidos en hasta 5 dispositivos simultáneamente",
      color: DESIGN_SYSTEM.colors.secondary,
    },
    {
      icon: Star,
      title: "Contenido Premium",
      description:
        "Acceso a canales premium, estrenos y eventos deportivos exclusivos",
      color: DESIGN_SYSTEM.colors.accent,
    },
  ];

  const channelCategories = [
    {
      icon: Film,
      name: "Películas y Series",
      channels: [
        "HBO",
        "FOX",
        "Warner",
        "Universal",
        "Sony",
        "AXN",
        "FX",
        "TNT",
      ],
      color: DESIGN_SYSTEM.colors.primary,
    },
    {
      icon: Clapperboard,
      name: "Deportes",
      channels: [
        "ESPN",
        "Fox Sports",
        "DirecTV Sports",
        "Win Sports",
        "TNT Sports",
        "Golf Channel",
      ],
      color: DESIGN_SYSTEM.colors.secondary,
    },
    {
      icon: Radio,
      name: "Noticias e Información",
      channels: [
        "CNN",
        "BBC",
        "Discovery",
        "History",
        "National Geographic",
        "TLC",
      ],
      color: DESIGN_SYSTEM.colors.accent,
    },
    {
      icon: Users,
      name: "Entretenimiento Familiar",
      channels: [
        "Disney",
        "Nickelodeon",
        "Cartoon Network",
        "Disney Jr",
        "Nick Jr",
        "Baby TV",
      ],
      color: DESIGN_SYSTEM.colors.primary,
    },
  ];

  const benefits = [
    "Sin contratos de permanencia",
    "Instalación profesional incluida",
    "Decodificador 4K de última generación",
    "Control parental avanzado",
    "Guía electrónica de programación",
    "Soporte técnico 24/7",
    "App móvil para ver en cualquier lugar",
    "Actualizaciones automáticas",
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <ServiceHeroSection
        icon={Tv}
        title="TV Digital"
        highlight="HD/4K"
        subtitle="Entretenimiento sin límites con la mejor calidad de imagen y sonido"
      />

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
        <FeaturesGrid features={features} columns={3} />
      </section>

      {/* Channel Categories */}
      <section
        className={`py-20 px-6 ${isDark ? "bg-gray-950" : "bg-gray-50"}`}
      >
        <div className="container mx-auto max-w-7xl">
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Categorías de Contenido
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {channelCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-2xl ${
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
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: isDark
                          ? DESIGN_SYSTEM.rgba.primary[20]
                          : DESIGN_SYSTEM.rgba.primary[10],
                      }}
                    >
                      <Icon
                        className="w-6 h-6"
                        style={{ color: category.color }}
                      />
                    </div>
                    <h3
                      className={`text-xl font-bold ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {category.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.channels.map((channel, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-lg text-sm ${
                          isDark
                            ? "bg-gray-800 text-gray-300"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {channel}
                      </span>
                    ))}
                  </div>
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
        title="¿Listo para el mejor entretenimiento?"
        description="Contrata ahora y disfruta de contenido ilimitado"
        buttonText="Solicitar Información"
        buttonLink={ROUTES.CONTACT}
      />
    </PageLayout>
  );
}
