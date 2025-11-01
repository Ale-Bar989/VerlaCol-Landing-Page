import { Target, Heart, Sparkles, Tv, Globe, Zap, Radio, Shuffle, Link as LinkIcon, BarChart3, Lock, HeadphonesIcon } from 'lucide-react';
import Navbar from '../../components/layout/Navbar/Navbar';
import FooterSection from '../home/components/sections/FooterSection';
import { BackgroundEffects } from '../../../shared/components';
import { DESIGN_SYSTEM } from '../../../shared/styles/design-system';

// Página About con diseño moderno
// Ubicación: src/ui/pages/about/About.tsx
export default function About() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <BackgroundEffects />
      
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          {/* Header moderno */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-[#4A5CFF]" />
              <span className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Nuestra Historia
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Sobre{' '}
              <span 
                className="text-transparent bg-clip-text animate-gradient inline-block"
                style={{ 
                  backgroundImage: 'linear-gradient(to right, #4A5CFF, #FFFFFF, #7A8FFF, #FFFFFF, #4A5CFF)',
                  backgroundSize: '200% 100%'
                }}
              >
                Verla
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Conectamos hogares colombianos con la mejor tecnología en{' '}
              <span className="text-white font-semibold">Internet y TV IP</span>
            </p>
          </div>

          {/* Card principal con diseño premium */}
          <div className="relative rounded-3xl p-12 mb-20 overflow-hidden group">
            {/* Fondo con gradiente */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(74, 92, 255, 0.1), rgba(122, 143, 255, 0.05))' }}></div>
            {/* Border glow */}
            <div className="absolute inset-0 rounded-3xl" style={{ padding: '1px', background: 'linear-gradient(135deg, #4A5CFF, #7A8FFF)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }}></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-8">
                <div 
                  className="w-24 h-24 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500" 
                  style={{ background: 'linear-gradient(135deg, #4A5CFF, #7A8FFF)', boxShadow: '0 8px 32px rgba(74, 92, 255, 0.4)' }}
                >
                  <Tv size={48} className="text-white" strokeWidth={2.5} />
                </div>
              </div>
              <p className="text-2xl text-white text-center leading-relaxed mb-6 font-semibold">
                Verla es un proveedor de servicios de telecomunicaciones especializado en Internet de fibra óptica y TV IP.
              </p>
              <p className="text-lg text-gray-300 text-center leading-relaxed max-w-3xl mx-auto">
                Ofrecemos conexiones de alta velocidad simétricas (FTTH) y televisión por IP en alta definición,
                llevando entretenimiento sin límites a los hogares colombianos con tecnología de última generación.
              </p>
            </div>
          </div>

          {/* Cards MVV modernas */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <div className="relative rounded-2xl p-8 group hover:scale-105 transition-all duration-300" style={{ background: 'linear-gradient(135deg, rgba(74, 92, 255, 0.08), rgba(122, 143, 255, 0.04))' }}>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(135deg, rgba(74, 92, 255, 0.15), rgba(122, 143, 255, 0.08))' }}></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ background: 'linear-gradient(135deg, #4A5CFF, #7A8FFF)' }}>
                  <Target size={28} className="text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-black mb-4 text-white">Misión</h3>
                <p className="text-gray-300 leading-relaxed">
                  Conectar hogares colombianos con servicios de Internet de fibra óptica y TV IP de alta calidad, brindando velocidad, estabilidad y entretenimiento sin límites.
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl p-8 group hover:scale-105 transition-all duration-300" style={{ background: 'linear-gradient(135deg, rgba(74, 92, 255, 0.08), rgba(122, 143, 255, 0.04))' }}>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(135deg, rgba(74, 92, 255, 0.15), rgba(122, 143, 255, 0.08))' }}></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ background: DESIGN_SYSTEM.gradients.primary }}>
                  <Heart size={28} className="text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-black mb-4 text-white">Valores</h3>
                <p className="text-gray-300 leading-relaxed">
                  Calidad de servicio, innovación tecnológica y atención al cliente son los pilares que guían cada decisión en Verla.
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl p-8 group hover:scale-105 transition-all duration-300" style={{ background: 'linear-gradient(135deg, rgba(74, 92, 255, 0.08), rgba(122, 143, 255, 0.04))' }}>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(135deg, rgba(74, 92, 255, 0.15), rgba(122, 143, 255, 0.08))' }}></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ background: 'linear-gradient(135deg, #7A8FFF, #4A5CFF)' }}>
                  <Globe size={28} className="text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-black mb-4 text-white">Visión</h3>
                <p className="text-gray-300 leading-relaxed">
                  Ser el proveedor líder de telecomunicaciones en Colombia, reconocido por nuestra tecnología FTTH y servicio al cliente excepcional.
                </p>
              </div>
            </div>
          </div>

          {/* Infraestructura Tecnológica */}
          <div className="relative rounded-3xl p-12 text-center overflow-hidden">
            {/* Fondo con gradiente */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(74, 92, 255, 0.1), rgba(122, 143, 255, 0.05))' }}></div>
            {/* Border glow */}
            <div className="absolute inset-0 rounded-3xl" style={{ padding: '1px', background: 'linear-gradient(135deg, rgba(74, 92, 255, 0.3), rgba(122, 143, 255, 0.2))', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }}></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full mb-6">
                <Zap className="w-4 h-4 text-[#4A5CFF]" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Infraestructura
                </span>
              </div>
              
              <h2 className="text-4xl font-black mb-4">
                Nuestra{' '}
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #4A5CFF, #FFFFFF, #7A8FFF)' }}>
                  Tecnología
                </span>
              </h2>
              <p className="text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
                Infraestructura de telecomunicaciones de última generación para garantizar la mejor experiencia
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: 'FTTH/FTTX', Icon: Radio, desc: 'Fibra hasta el hogar' },
                  { name: 'GPON/OLT', Icon: Zap, desc: 'Red óptica pasiva' },
                  { name: 'Core Routers', Icon: Shuffle, desc: 'Enrutamiento principal' },
                  { name: 'Switches', Icon: LinkIcon, desc: 'Agregación de red' },
                  { name: 'TV Headend', Icon: Tv, desc: 'Sistema TV IP' },
                  { name: 'DNS/CDN', Icon: Globe, desc: 'Distribución contenido' },
                  { name: 'NMS', Icon: BarChart3, desc: 'Monitoreo de red' },
                  { name: 'AAA Radius', Icon: Lock, desc: 'Autenticación' }
                ].map((tech) => (
                  <div 
                    key={tech.name}
                    className="relative rounded-2xl p-6 group/item transition-all duration-300 hover:scale-105"
                    style={{ background: 'linear-gradient(135deg, rgba(74, 92, 255, 0.1), rgba(122, 143, 255, 0.05))', border: '1px solid rgba(74, 92, 255, 0.2)' }}
                  >
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover/item:opacity-100 transition-opacity" style={{ background: 'linear-gradient(135deg, rgba(74, 92, 255, 0.2), rgba(122, 143, 255, 0.1))' }}></div>
                    
                    <div className="relative z-10">
                      <div className="mb-3 group-hover/item:scale-110 transition-transform duration-300">
                        <tech.Icon className="w-10 h-10 text-[#4A5CFF]" strokeWidth={1.5} />
                      </div>
                      <h4 className="font-bold text-white mb-1">
                        {tech.name}
                      </h4>
                      <p className="text-xs text-gray-400">{tech.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Ventajas competitivas */}
              <div className="flex flex-wrap items-center justify-center gap-3 mt-12">
                <span className="px-5 py-2.5 rounded-lg text-sm text-white font-semibold flex items-center gap-2" style={{ background: 'linear-gradient(135deg, rgba(74, 92, 255, 0.2), rgba(122, 143, 255, 0.1))', border: '1px solid rgba(74, 92, 255, 0.3)' }}>
                  <Zap className="w-4 h-4" />
                  Velocidad Simétrica
                </span>
                <span className="px-5 py-2.5 rounded-lg text-sm text-white font-semibold flex items-center gap-2" style={{ background: 'linear-gradient(135deg, rgba(74, 92, 255, 0.2), rgba(122, 143, 255, 0.1))', border: '1px solid rgba(74, 92, 255, 0.3)' }}>
                  <Tv className="w-4 h-4" />
                  TV HD/4K
                </span>
                <span className="px-5 py-2.5 rounded-lg text-sm text-white font-semibold flex items-center gap-2" style={{ background: 'linear-gradient(135deg, rgba(74, 92, 255, 0.2), rgba(122, 143, 255, 0.1))', border: '1px solid rgba(74, 92, 255, 0.3)' }}>
                  <Lock className="w-4 h-4" />
                  Red Segura
                </span>
                <span className="px-5 py-2.5 rounded-lg text-sm text-white font-semibold flex items-center gap-2" style={{ background: 'linear-gradient(135deg, rgba(74, 92, 255, 0.2), rgba(122, 143, 255, 0.1))', border: '1px solid rgba(74, 92, 255, 0.3)' }}>
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
