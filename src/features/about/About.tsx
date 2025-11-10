import { Target, Heart, Sparkles, Tv, Globe, Zap, Radio, Shuffle, Link as LinkIcon, BarChart3, Lock, HeadphonesIcon } from 'lucide-react';
import { Navbar } from '@/shared//components';
import FooterSection from '@/features/home/components/sections/FooterSection';
import { BackgroundEffects } from '@/shared//components';

// Página About con diseño moderno
// Ubicación: src/ui/pages/about/About.tsx
export default function About() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <BackgroundEffects />
      
      <Navbar />
      
      <div className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          {/* Header moderno */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-1.5 sm:py-2 bg-white/5 border border-white/10 rounded-full mb-6 sm:mb-8">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#4A5CFF]" />
              <span className="text-xs sm:text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Nuestra Historia
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight">
              Sobre{' '}
              <span className="text-transparent bg-clip-text animate-gradient inline-block gradient-text-animated">
                Verla
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Conectamos hogares colombianos con la mejor tecnología en{' '}
              <span className="text-white font-semibold">Internet y TV IP</span>
            </p>
          </div>

          {/* Card principal con diseño premium */}
          <div className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mb-12 sm:mb-16 md:mb-20 overflow-hidden group">
            {/* Fondo con gradiente */}
            <div className="absolute inset-0 gradient-section-bg"></div>
            {/* Border glow */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl gradient-border-primary"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6 sm:mb-8">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 gradient-icon-box">
                  <Tv size={40} className="sm:w-12 sm:h-12 dark:text-white" strokeWidth={2.5} />
                </div>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-white text-center leading-relaxed mb-4 sm:mb-6 font-semibold">
                Verla es un proveedor de servicios de telecomunicaciones especializado en Internet de fibra óptica y TV IP.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 text-center leading-relaxed max-w-3xl mx-auto">
                Ofrecemos conexiones de alta velocidad simétricas (FTTH) y televisión por IP en alta definición,
                llevando entretenimiento sin límites a los hogares colombianos con tecnología de última generación.
              </p>
            </div>
          </div>

          {/* Cards MVV modernas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20">
            <div className="relative rounded-xl sm:rounded-2xl p-6 sm:p-8 group hover:scale-105 transition-all duration-300 gradient-section-bg-alt">
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity gradient-section-bg"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform gradient-icon-box">
                  <Target size={24} className="sm:w-7 sm:h-7 dark:text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-white">Misión</h3>
                <p className="text-gray-300 leading-relaxed">
                  Conectar hogares colombianos con servicios de Internet de fibra óptica y TV IP de alta calidad, brindando velocidad, estabilidad y entretenimiento sin límites.
                </p>
              </div>
            </div>

            <div className="relative rounded-xl sm:rounded-2xl p-6 sm:p-8 group hover:scale-105 transition-all duration-300 gradient-section-bg-alt">
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity gradient-section-bg"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform gradient-icon-box">
                  <Heart size={24} className="sm:w-7 sm:h-7 dark:text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-white">Valores</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Calidad de servicio, innovación tecnológica y atención al cliente son los pilares que guían cada decisión en Verla.
                </p>
              </div>
            </div>

            <div className="relative rounded-xl sm:rounded-2xl p-6 sm:p-8 group hover:scale-105 transition-all duration-300 gradient-section-bg-alt">
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity gradient-section-bg"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform gradient-icon-box">
                  <Globe size={24} className="sm:w-7 sm:h-7 dark:text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-white">Visión</h3>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  Ser el proveedor líder de telecomunicaciones en Colombia, reconocido por nuestra tecnología FTTH y servicio al cliente excepcional.
                </p>
              </div>
            </div>
          </div>

          {/* Infraestructura Tecnológica */}
          <div className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center overflow-hidden">
            {/* Fondo con gradiente */}
            <div className="absolute inset-0 gradient-section-bg"></div>
            {/* Border glow */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl gradient-border-primary-soft"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full mb-4 sm:mb-6">
                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#4A5CFF]" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Infraestructura
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4">
                Nuestra{' '}
                <span className="text-transparent bg-clip-text gradient-text-primary">
                  Tecnología
                </span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-4">
                Infraestructura de telecomunicaciones de última generación para garantizar la mejor experiencia
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                {[
                  { name: 'FTTH/FTTX', Icon: Radio, desc: "Fibra hasta el hogar" },
                  { name: 'GPON/OLT', Icon: Zap, desc: "Red óptica pasiva" },
                  { name: 'Core Routers', Icon: Shuffle, desc: "Enrutamiento principal" },
                  { name: 'Switches', Icon: LinkIcon, desc: "Agregación de red" },
                  { name: 'TV Headend', Icon: Tv, desc: "Sistema TV IP" },
                  { name: 'DNS/CDN', Icon: Globe, desc: "Distribución contenido" },
                  { name: 'NMS', Icon: BarChart3, desc: "Monitoreo de red" },
                  { name: 'AAA Radius', Icon: Lock, desc: "Autenticación" }
                ].map((tech) => (
                  <div 
                    key={tech.name}
                    className="relative rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 group/item transition-all duration-300 hover:scale-105 gradient-section-bg border border-[rgba(74,92,255,0.2)]"
                  >
                    <div className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover/item:opacity-100 transition-opacity gradient-section-bg-alt"></div>
                    
                    <div className="relative z-10">
                      <div className="mb-2 sm:mb-3 group-hover/item:scale-110 transition-transform duration-300">
                        <tech.Icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#4A5CFF]" strokeWidth={1.5} />
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-white mb-1">
                        {tech.name}
                      </h4>
                      <p className="text-[10px] sm:text-xs text-gray-400">{tech.desc}</p>
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
}
