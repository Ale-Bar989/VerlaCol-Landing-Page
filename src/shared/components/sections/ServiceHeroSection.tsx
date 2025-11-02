import type { LucideIcon } from 'lucide-react';
import { useLocalTheme } from '@/shared/hooks/useLocalTheme';
import { DESIGN_SYSTEM } from '@/shared/styles/design-system';

// Hero section reutilizable para páginas de servicios
// Ubicación: src/shared/components/ServiceHeroSection.tsx

interface ServiceHeroSectionProps {
  icon: LucideIcon;
  title: string;
  highlight: string;
  subtitle: string;
}

export default function ServiceHeroSection({ 
  icon: Icon, 
  title, 
  highlight, 
  subtitle 
}: ServiceHeroSectionProps) {
  const { isDark } = useLocalTheme();

  return (
    <section className={`py-20 px-6 relative overflow-hidden ${
      isDark ? 'bg-gray-950' : 'bg-gray-50'
    }`}>
      {/* Efectos de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px]" 
          style={{ backgroundColor: isDark ? '#5B6FFF15' : '#5B6FFF08' }}
        />
        <div 
          className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px]" 
          style={{ backgroundColor: isDark ? '#7A8FFF15' : '#7A8FFF08' }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          {/* Icon */}
          <div 
            className="inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-6" 
            style={{
              background: DESIGN_SYSTEM.gradients.primary,
              boxShadow: DESIGN_SYSTEM.shadows.large
            }}
          >
            <Icon className="w-10 h-10 text-white" />
          </div>

          {/* Title */}
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            {title}{' '}
            <span 
              className="text-transparent bg-clip-text" 
              style={{
                backgroundImage: DESIGN_SYSTEM.gradients.primaryWithWhite,
                backgroundSize: '200% 100%'
              }}
            >
              {highlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
