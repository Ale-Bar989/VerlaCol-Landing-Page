import type { LucideIcon } from 'lucide-react';
import { useLocalTheme } from '@/shared/hooks/useLocalTheme';

// Hero section reutilizable para páginas de servicios
// Ubicación: src/shared/components/ServiceHeroSection.tsx

interface ServiceHeroSectionProps {
  icon: LucideIcon;
  title: string;
  highlight: string;
  subtitle: string;
  isDark?: boolean;
}

// Componente para las líneas de fibra óptica
const FiberOpticLines = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Líneas de fibra óptica */}
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
          {/* Efecto de luz que viaja por la fibra */}
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
      
      {/* Puntos de conexión */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle, rgba(74, 92, 255, 0.1) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }} />
    </div>
  );
};

export default function ServiceHeroSection({ 
  icon: Icon, 
  title, 
  highlight, 
  subtitle,
  isDark = false 
}: ServiceHeroSectionProps) {
  const { isDark: themeIsDark } = useLocalTheme();

  return (
    <section className={`relative py-28 px-6 overflow-hidden ${
      (isDark || themeIsDark) ? 'bg-linear-to-br from-gray-900 to-black' : 'bg-linear-to-br from-gray-50 to-gray-100'
    }`}>
      {/* Fondo de fibra óptica */}
      <FiberOpticLines />
      
      {/* Efectos de luz */}
      <div className="absolute inset-0 pointer-events-none">
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

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center">
          {/* Icon */}
          <div 
            className="inline-flex items-center justify-center w-24 h-24 rounded-3xl mb-8 relative group"
            style={{
              background: 'linear-gradient(135deg, #4A5CFF, #7A8FFF)',
              boxShadow: '0 0 40px rgba(74, 92, 255, 0.3)'
            }}
          >
            <Icon className="w-12 h-12 text-white transition-all duration-500 ease-in-out group-hover:scale-110" />
            {/* Efecto de resplandor solo en tema oscuro */}
            {isDark && (
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out" style={{
                background: 'radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, transparent 70%)',
              }} />
            )}
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-linear-to-r from-white to-gray-300">
            {title}{' '}
            <span className="bg-clip-text text-transparent" style={{ 
              backgroundImage: 'linear-gradient(90deg, #4A5CFF, #7A8FFF)'
            }}>
              {highlight}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          {/* Efecto de partículas */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div 
                key={`particle-${i}`}
                className="absolute rounded-full bg-white/20"
                style={{
                  width: `${Math.random() * 6 + 2}px`,
                  height: `${Math.random() * 6 + 2}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${5 + Math.random() * 10}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                  opacity: 0.3 + Math.random() * 0.7
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Animaciones CSS */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }
        @keyframes pulse {
          0% { transform: translateY(-50px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(calc(100vh + 50px)); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
