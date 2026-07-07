import { useLocalTheme } from '@/shared/hooks/useLocalTheme';
import type { Feature } from '@/shared/types';
import { DESIGN_SYSTEM } from '@/shared/styles/design-system';

// Grid de features reutilizable para páginas de servicios
// Ubicación: src/shared/components/FeaturesGrid.tsx

interface FeaturesGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
}

export default function FeaturesGrid({ features, columns = 4 }: FeaturesGridProps) {
  const { isDark } = useLocalTheme();

  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <section className="pt-15 pb-20 relative">
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
      
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className={`grid ${gridCols[columns]} gap-6`}>
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <div 
                key={index}
                className={`group relative p-6 rounded-2xl transition-all duration-500 overflow-hidden ${
                  isDark ? 'bg-gray-900/50' : 'bg-white'
                }`}
                style={{
                  border: `1px solid ${isDark ? DESIGN_SYSTEM.rgba.primary[20] : DESIGN_SYSTEM.rgba.primary[10]}`,
                  boxShadow: isDark 
                    ? DESIGN_SYSTEM.shadows.medium
                    : '0 4px 12px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                {/* Shine effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-linear-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div 
                    className="shine-border absolute inset-0 bg-linear-to-r from-blue-500/20 via-cyan-500/40 to-transparent w-1/2 transform -skew-x-12"
                    style={{
                      height: '200%',
                      top: '-50%',
                      left: '-100%',
                      transition: 'left 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  />
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:-translate-y-1"
                    style={{
                      backgroundColor: isDark 
                        ? DESIGN_SYSTEM.rgba.primary[20] 
                        : DESIGN_SYSTEM.rgba.primary[10],
                      boxShadow: isDark 
                        ? '0 4px 15px rgba(91, 111, 255, 0.2)'
                        : '0 4px 12px rgba(0, 0, 0, 0.05)',
                      transform: 'translateZ(0)'
                    }}
                  >
                    <IconComponent 
                      className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" 
                      style={{ 
                        color: feature.color,
                        filter: isDark ? 'brightness(1.2)' : 'none'
                      }} 
                    />
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                    isDark ? 'text-white group-hover:text-blue-300' : 'text-gray-900 group-hover:text-blue-600'
                  }`}>
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                    isDark ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-600 group-hover:text-gray-800'
                  }`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        @keyframes shineUp {
          0% {
            transform: translateY(100%) skewX(-12deg);
            opacity: 0;
          }
          20% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-50%) skewX(-12deg);
            opacity: 0;
          }
        }
        .shine-border {
          transform: translateY(100%) skewX(-12deg);
          opacity: 0;
        }
        .group:hover .shine-border {
          animation: shineUp 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </section>
  );
}
