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
  Server,
  Clock,
  Shield,
  Wifi,
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
      title: "Plataforma IPTV Empresarial",
      description:
        "Solución completa de IPTV para empresas con gestión centralizada y escalable",
      color: DESIGN_SYSTEM.colors.primary,
    },
    {
      icon: Film,
      title: "Catálogo Premium",
      description:
        "Más de 10,000 horas de contenido en múltiples idiomas y géneros",
      color: DESIGN_SYSTEM.colors.secondary,
    },
    {
      icon: Play,
      title: "Video Bajo Demanda",
      description: "Biblioteca en constante actualización con los últimos estrenos",
      color: DESIGN_SYSTEM.colors.accent,
    },
    {
      icon: Calendar,
      title: "Soporte Técnico 24/7",
      description:
        "Asistencia técnica especializada para socios comerciales",
      color: DESIGN_SYSTEM.colors.primary,
    },
    {
      icon: Users,
      title: "Multiplataforma",
      description:
        "Compatible con Smart TVs, móviles, tablets y decodificadores",
      color: DESIGN_SYSTEM.colors.secondary,
    },
    {
      icon: Star,
      title: "Contenido Exclusivo",
      description:
        "Eventos en vivo, deportes y canales internacionales premium",
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

  const wholesaleSolutions: string[] = [
    "Panel de control empresarial completo",
    "Sistema de facturación integrado",
    "Gestión de usuarios y permisos",
    "Soporte multi-idioma",
    "Análisis y reportes avanzados",
    "Integración con sistemas de pago",
    "Soporte técnico dedicado",
    "Actualizaciones regulares de seguridad"
  ];

  const technicalAdvantages = [
    {
      title: "Infraestructura Sólida",
      description: "Red de servidores de alto rendimiento con balanceo de carga",
      icon: <Server className="w-8 h-8 text-blue-600 dark:text-blue-400" />
    },
    {
      title: "Alta Disponibilidad",
      description: "99.9% de tiempo de actividad garantizado",
      icon: <Clock className="w-8 h-8 text-blue-600 dark:text-blue-400" />
    },
    {
      title: "Seguridad Avanzada",
      description: "Protección contra IP Leeching y restricción por IP",
      icon: <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
    },
    {
      title: "Ancho de Banda Ilimitado",
      description: "Sin restricciones de tráfico para tus clientes",
      icon: <Wifi className="w-8 h-8 text-blue-600 dark:text-blue-400" />
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <ServiceHeroSection
        icon={Tv}
        title="Soluciones IPTV"
        highlight="Mayorista"
        subtitle="Convierte tu negocio en un proveedor líder de televisión digital con nuestra plataforma IPTV empresarial"
      />

      {/* Wholesale Solutions */}
      <section className={`py-20 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Soluciones IPTV para Empresas
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Conviértete en proveedor de IPTV con nuestra plataforma todo en uno
            </p>
            <div className={`w-24 h-1 rounded-full mx-auto mt-6 ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-500">¿Por qué elegir nuestra plataforma IPTV?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-3 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Plataforma White Label</h4>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Marca blanca personalizable con tu identidad corporativa</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-3 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Panel de Control Avanzado</h4>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Gestiona usuarios, paquetes y facturación en un solo lugar</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-3 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Contenido Premium</h4>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Acceso a miles de canales y contenido bajo demanda</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className={`${isDark ? "bg-gray-800/90 border-gray-700" : "bg-gray-200/80 border-gray-200"} p-6 sm:p-8 rounded-2xl shadow-xl border transition-colors duration-300`}>
              <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Ventajas Técnicas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {technicalAdvantages.map((advantage, index) => (
                  <div 
                    key={index} 
                    className={`${isDark ? "bg-gray-700/80 border-2 border-gray-500 hover:border-blue-500/50" : "bg-white/90 border border-blue-400/50 hover:border-blue-500/50"} group p-6 rounded-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg ${isDark ? 'hover:shadow-blue-900/30' : 'hover:shadow-blue-100'}`}
                  >
                    <div className="mb-3 text-blue-600 dark:text-blue-400 transition-colors">
                      {advantage.icon}
                    </div>
                    <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {advantage.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className={`${isDark ? "bg-black" : "bg-white"}`}>
        <div className="container mx-auto max-w-7xl px-6 pb-1">
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-1 pt-20 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Características Principales
          </h2>
        </div>
        <FeaturesGrid features={features} columns={3} />
      </section>

      {/* Channel Categories */}
      <section className={`relative py-20 px-6 overflow-hidden ${isDark ? "bg-linear-to-br from-gray-950 to-gray-900" : "bg-linear-to-br from-gray-50 to-gray-100"}`}>
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-20" 
            style={{ 
              background: isDark 
                ? 'radial-gradient(circle, rgba(91, 111, 255, 0.2) 0%, rgba(0,0,0,0) 70%)' 
                : 'radial-gradient(circle, rgba(91, 111, 255, 0.1) 0%, rgba(0,0,0,0) 70%)' 
            }}
          />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent ${isDark ? 'bg-linear-to-r from-white to-gray-300' : 'bg-linear-to-br from-gray-50 to-gray-100'}`}>
              Categorías de Contenido
            </h2>
            <p className={`text-lg md:text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Descubre nuestra amplia variedad de canales organizados por categorías
            </p>
            <div className={`w-24 h-1 rounded-full mx-auto mt-6 ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {channelCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className={`group relative p-8 rounded-3xl overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4, 0, 0.2, 1)] ${
                    isDark 
                      ? 'bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 hover:border-gray-700/70' 
                      : 'bg-white/80 backdrop-blur-sm border border-gray-100 hover:border-gray-200'
                  }`}
                  style={{
                    boxShadow: isDark 
                      ? '0 8px 32px rgba(0, 0, 0, 0.3)'
                      : '0 8px 32px rgba(0, 0, 0, 0.05)',
                    transform: 'translateZ(0)',
                    willChange: 'transform, box-shadow, border-color',
                    transitionProperty: 'transform, box-shadow, border-color, background-color',
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    transitionDuration: '300ms'
                  }}
                >
                  {/* Hover effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%)',
                      transition: 'opacity 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                      willChange: 'opacity'
                    }}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-5 mb-6">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                          isDark ? 'bg-gray-800/80' : 'bg-white shadow-md'
                        }`}
                        style={{
                          background: isDark
                            ? `linear-gradient(135deg, ${DESIGN_SYSTEM.rgba.primary[20]}, ${DESIGN_SYSTEM.rgba.primary[10]})`
                            : `linear-gradient(135deg, ${DESIGN_SYSTEM.rgba.primary[10]}, #fff)`,
                          boxShadow: isDark
                            ? '0 4px 20px rgba(0, 0, 0, 0.3)'
                            : '0 4px 15px rgba(0, 0, 0, 0.05)',
                          transform: 'translateY(0) translateZ(0)',
                          transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                          willChange: 'transform',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-4px) translateZ(0)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0) translateZ(0)';
                        }}
                      >
                        <Icon
                          className="w-7 h-7 transition-transform duration-300 group-hover:scale-110"
                          style={{ 
                            color: category.color,
                            filter: isDark ? 'brightness(1.1)' : 'none'
                          }}
                        />
                      </div>
                      <h3
                        className="text-2xl font-bold bg-clip-text text-transparent"
                        style={{
                          backgroundImage: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
                          backgroundSize: '200% 200%',
                          backgroundPosition: '0% 0%',
                          transition: 'background-position 0.5s ease-out',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundPosition = '100% 100%';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundPosition = '0% 0%';
                        }}
                      >
                        {category.name}
                      </h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {category.channels.map((channel, idx) => (
                        <span
                          key={idx}
                          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                            isDark
                              ? 'bg-gray-800/70 text-gray-200 hover:bg-gray-700/70 hover:text-white'
                              : 'bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900 shadow-sm'
                          }`}
                          style={{
                            border: isDark 
                              ? '1px solid rgba(255, 255, 255, 0.05)' 
                              : '1px solid rgba(0, 0, 0, 0.05)'
                          }}
                        >
                          {channel}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Animated border effect */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden" style={{
                    padding: '1px',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    pointerEvents: 'none'
                  }}>
                    <div 
                      className="absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100"
                      style={{
                        transition: 'opacity 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                        willChange: 'opacity',
                        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IPTV Wholesale Solutions Section */}
      <section className={`relative py-20 px-6 overflow-hidden ${isDark ? "bg-gray-950" : "bg-linear-to-br from-gray-50 to-white"}`}>
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Soluciones de IPTV Mayoristas
            </h2>
            <div className={`w-20 h-1 mx-auto rounded-full ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {wholesaleSolutions.map((solution: string, index: number) => (
              <div
                key={index}
                className={`group relative p-6 rounded-2xl transition-all duration-300 overflow-hidden ${
                  isDark ? 'bg-gray-900/50' : 'bg-white/80 backdrop-blur-sm'
                }`}
                style={{
                  border: `1px solid ${isDark ? DESIGN_SYSTEM.rgba.primary[20] : 'rgba(0, 0, 0, 0.05)'}`,
                  boxShadow: isDark 
                    ? '0 4px 20px rgba(0, 0, 0, 0.2)'
                    : '0 4px 15px rgba(0, 0, 0, 0.03)',
                  transform: 'translateZ(0)'
                }}
              >
                {/* Hover effect */}
                <div className="absolute inset-0 bg-linear-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex items-center gap-4 relative z-10">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:-translate-y-1 ${
                      isDark ? 'bg-gray-800' : 'bg-blue-50'
                    }`}
                    style={{
                      boxShadow: isDark 
                        ? '0 4px 15px rgba(91, 111, 255, 0.15)'
                        : '0 4px 12px rgba(0, 0, 0, 0.05)'
                    }}
                  >
                    <Check
                      className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                      style={{ 
                        color: isDark ? DESIGN_SYSTEM.colors.primary : DESIGN_SYSTEM.colors.primary
                      }}
                    />
                  </div>
                  <span className={`text-base font-medium transition-colors duration-300 ${
                    isDark ? 'text-gray-300 group-hover:text-white' : 'text-gray-700 group-hover:text-gray-900'
                  }`}>
                    {solution}
                  </span>
                </div>

                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      maskComposite: 'exclude',
                      padding: '1px',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business CTA Section */}
      <CTASection
        title="Conviértete en Proveedor de IPTV"
        description="Únete a nuestra red de socios y comienza a ofrecer servicios de televisión digital de primer nivel con nuestra plataforma todo en uno."
        buttonText="Solicitar Información Comercial"
        buttonLink={ROUTES.CONTACT}
      />
    </PageLayout>
  );
}
