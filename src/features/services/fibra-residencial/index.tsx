import { Wifi, Zap, RefreshCw, Gamepad2, ShieldCheck, TrendingUp, Clock, Check } from 'lucide-react';
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
      icon: ShieldCheck,
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
      <section className={`relative py-20 px-6 overflow-hidden ${
        isDark ? 'bg-linear-to-br from-gray-900 to-black' : 'bg-linear-to-br from-gray-50 to-gray-100'
      }`}>
        {/* Fiber Optic Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Fiber optic lines */}
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute h-full w-px"
              style={{
                left: `${5 + (i * 5)}%`,
                background: 'linear-gradient(to bottom, transparent, #4A5CFF, transparent)',
                opacity: 0.1,
              }}
            >
              <div 
                className="absolute w-full h-10 bg-white rounded-full animate-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  animationDuration: `${3 + Math.random() * 5}s`,
                  animationDelay: `${Math.random() * 5}s`,
                  boxShadow: '0 0 15px 2px rgba(74, 92, 255, 0.8)',
                  opacity: 0,
                  animationName: 'pulse',
                  animationIterationCount: 'infinite'
                }}
              />
            </div>
          ))}
          
          {/* Connection dots */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(74, 92, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
          
          {/* Light effects */}
          <div className="absolute inset-0">
            <div 
              className="absolute top-1/2 left-1/4 w-[600px] h-[600px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(74, 92, 255, 0.15) 0%, rgba(0,0,0,0) 70%)',
                transform: 'translate(-50%, -50%)',
                filter: 'blur(60px)'
              }}
            />
            <div 
              className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(122, 143, 255, 0.1) 0%, rgba(0,0,0,0) 70%)',
                transform: 'translate(50%, -50%)',
                filter: 'blur(40px)'
              }}
            />
          </div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="relative">
              <div className={`p-8 rounded-3xl backdrop-blur-sm ${
                isDark ? 'bg-black/40' : 'bg-white/80'
              } border ${
                isDark ? 'border-gray-800' : 'border-gray-200'
              } shadow-2xl transform transition-all duration-500 hover:scale-[1.02]`}>
                <h2 className={`text-3xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r ${
                  isDark ? 'from-blue-400 to-cyan-400' : 'from-blue-600 to-cyan-600'
                }`}>
                  Conexión de Próxima Generación
                </h2>
                <p className={`text-lg leading-relaxed mb-6 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Experimenta la revolución de la fibra óptica FTTH con velocidades ultrarrápidas y conexión simétrica. 
                  Nuestra tecnología directa a tu hogar elimina intermediarios, ofreciendo la mejor experiencia de navegación, 
                  streaming en 4K y gaming sin latencia.
                </p>
                
                {/* Features list with icons */}
                <ul className="space-y-3">
                  {[
                    { icon: <Zap className="w-5 h-5 text-blue-400" />, text: 'Velocidad simétrica garantizada' },
                    { icon: <RefreshCw className="w-5 h-5 text-blue-400" />, text: 'Conexión directa FTTH' },
                    { icon: <Gamepad2 className="w-5 h-5 text-blue-400" />, text: 'Ideal para gaming y streaming' },
                    { icon: <ShieldCheck className="w-5 h-5 text-blue-400" />, text: 'Conexión segura y estable' }
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <span className="flex items-center justify-center">{item.icon}</span>
                      <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-blue-500/20 blur-xl" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-cyan-500/20 blur-2xl" />
            </div>
            
            {/* Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-cover bg-center" style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)'
              }} />
              <div className={`absolute inset-0 bg-linear-to-t ${
                isDark ? 'from-black/80 to-transparent' : 'from-white/80 to-transparent'
              }`} />
              <div className="absolute inset-0 flex items-end p-8">
                <div className="relative">
                  <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                  <button className="relative px-6 py-3 bg-linear-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-lg flex items-center space-x-2">
                    <span>Ver planes disponibles</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animation keyframes */}
        <style>{`
          @keyframes pulse {
            0% { 
              transform: translateY(-100%);
              opacity: 0;
            }
            15%, 85% {
              opacity: 0.8;
            }
            100% { 
              transform: translateY(100%);
              opacity: 0;
            }
          }
        `}</style>
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
        <FeaturesGrid features={features} columns={4} />
      </section>

      {/* Benefits Section */}
      <section className={`relative py-20 px-6 overflow-hidden ${isDark ? "bg-gray-950" : "bg-linear-to-br from-gray-50 to-white"}`}>
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" 
            style={{ backgroundColor: isDark ? '#5B6FFF0D' : '#5B6FFF05' }}
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl" 
            style={{ backgroundColor: isDark ? '#7A8FFF0D' : '#7A8FFF05' }}
          />
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Beneficios Incluidos
            </h2>
            <div className={`w-20 h-1 mx-auto rounded-full ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
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
                    {benefit}
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
