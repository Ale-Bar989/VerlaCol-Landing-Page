import { Tv, Check } from "lucide-react";
import {
  PageLayout,
  ServiceHeroSection,
  FeaturesGrid,
  CTASection,
} from '@/shared//components';
import { useLocalTheme } from '@/shared//hooks/useLocalTheme';
import { DESIGN_SYSTEM } from '@/shared//styles/design-system';
import { ROUTES } from '@/core/router/routes.config';
import {
  TV_FEATURES,
  CHANNEL_CATEGORIES,
  WHOLESALE_SOLUTIONS,
  TECHNICAL_ADVANTAGES_ICONS,
  TECHNICAL_ADVANTAGES_DATA,
} from "./data/channels.data";

// Página de TV Digital HD
// Ubicación: src/ui/pages/services/tv-digital/index.tsx

export default function TVDigitalPage() {
  const { isDark } = useLocalTheme();

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
            <div className="w-24 h-1 rounded-full mx-auto mt-6 bg-[var(--accent-primary)]"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[var(--accent-primary)]">¿Por qué elegir nuestra plataforma IPTV?</h3>
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
            <div className={`${isDark ? "bg-gray-800/90 border-gray-700" : "bg-white/90 border-gray-200"} p-6 sm:p-8 rounded-2xl shadow-xl border transition-colors duration-300`}>
              <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Ventajas Técnicas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {TECHNICAL_ADVANTAGES_DATA.map((advantage, index) => {
                  const Icon = TECHNICAL_ADVANTAGES_ICONS[index];
                  return (
                    <div 
                      key={index} 
                      className={`${isDark ? "bg-gray-700/80 border-2 border-gray-500 hover:border-blue-[var(--accent-primary)]" : "bg-white/90 border border-blue-400/50 hover:border-blue-[var(--accent-primary)]"} group p-6 rounded-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg ${isDark ? 'hover:shadow-blue-900/30' : 'hover:shadow-blue-100'}`}
                    >
                      <div className="mb-3 text-[var(--accent-primary)] dark:text-blue-400 transition-colors">
                        <Icon className="w-8 h-8" />
                      </div>
                      <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`} style={{ color: 'var(--accent-primary)' }}>
                        {advantage.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  );
                })}
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
        <FeaturesGrid features={TV_FEATURES} columns={3} />
      </section>

      {/* Channel Categories */}
      <section className={`relative py-20 px-6 overflow-hidden ${isDark ? "bg-linear-to-br from-gray-950 to-gray-900" : "bg-linear-to-br from-gray-50 to-gray-100"}`}>
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 bg-[radial-gradient(circle_at_center,var(--accent-primary),transparent_70%)]" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent ${isDark ? 'bg-linear-to-r from-white to-gray-300' : 'bg-linear-to-br from-gray-50 to-gray-100'}`}>
              Categorías de Contenido
            </h2>
            <p className={`text-lg md:text-xl max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Descubre nuestra amplia variedad de canales organizados por categorías
            </p>
            <div className="w-24 h-1 rounded-full mx-auto mt-6 bg-[var(--accent-primary)]"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {CHANNEL_CATEGORIES.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className={`group relative p-8 rounded-3xl overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4, 0, 0.2, 1)] gpu-accelerated ${
                    isDark 
                      ? 'bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 hover:border-gray-700/70 service-card-dark' 
                      : 'bg-white/80 backdrop-blur-sm border border-gray-100 hover:border-gray-200 service-card-light'
                  }`}
                >
                  {/* Hover effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 hover-gradient-overlay" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-5 mb-6">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 hover:-translate-y-1 gpu-accelerated ${
                        isDark ? 'service-icon-gradient-dark' : 'service-icon-gradient-light shadow-md'
                      }`}>
                        <Icon
                          className="w-8 h-8 text-[var(--accent-primary)] transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <h3 className="text-2xl font-bold bg-clip-text text-transparent text-gradient-animated">
                        {category.name}
                      </h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {category.channels.map((channel, idx) => (
                        <span
                          key={idx}
                          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                            isDark
                              ? 'bg-gray-800/70 text-gray-200 hover:bg-gray-700/70 hover:text-white service-channel-badge-dark'
                              : 'bg-white text-gray-700 hover:bg-gray-50 hover:text-gray-900 shadow-sm service-channel-badge-light'
                          }`}
                        >
                          {channel}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Animated border effect */}
                  <div className="animated-border" />
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
            <div className="w-20 h-1 mx-auto rounded-full bg-[var(--accent-primary)]"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {WHOLESALE_SOLUTIONS.map((solution, index) => (
              <div
                key={index}
                className={`group relative p-6 rounded-2xl transition-all duration-300 overflow-hidden gpu-accelerated ${
                  isDark ? 'bg-gray-900/50 service-feature-card-dark' : 'bg-white/80 backdrop-blur-sm service-feature-card-light'
                }`}
              >
                {/* Hover effect */}
                <div className="absolute inset-0 bg-linear-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex items-center gap-4 relative z-10">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:-translate-y-1 ${
                    isDark ? 'bg-gray-800 service-icon-shadow-dark' : 'bg-blue-50 service-icon-shadow-light'
                  }`}>
                    <Check
                      className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                      style={{ color: DESIGN_SYSTEM.colors.primary }}
                    />
                  </div>
                  <span className={`text-base font-medium transition-colors duration-300 ${
                    isDark ? 'text-gray-300 group-hover:text-white' : 'text-gray-700 group-hover:text-gray-900'
                  }`}>
                    {solution}
                  </span>
                </div>

                {/* Animated border effect */}
                <div className="animated-border" />
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
