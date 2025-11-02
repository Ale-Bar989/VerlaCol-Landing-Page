import type { LucideIcon } from 'lucide-react';
import { useLocalTheme } from '@/shared/hooks/useLocalTheme';
import { DESIGN_SYSTEM } from '@/shared/styles/design-system';

// Grid de features reutilizable para páginas de servicios
// Ubicación: src/shared/components/FeaturesGrid.tsx

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

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
    <section className="py-20">
      <div className="container mx-auto max-w-7xl px-6">
        <div className={`grid ${gridCols[columns]} gap-6`}>
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <div
                key={index}
                className={`p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                  isDark ? 'bg-gray-900/50' : 'bg-white'
                }`}
                style={{
                  border: `1px solid ${isDark ? DESIGN_SYSTEM.rgba.primary[20] : DESIGN_SYSTEM.rgba.primary[10]}`,
                  boxShadow: isDark 
                    ? DESIGN_SYSTEM.shadows.medium
                    : '0 4px 12px rgba(0, 0, 0, 0.05)'
                }}
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    backgroundColor: isDark ? DESIGN_SYSTEM.rgba.primary[20] : DESIGN_SYSTEM.rgba.primary[10]
                  }}
                >
                  <IconComponent className="w-7 h-7" style={{ color: feature.color }} />
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold mb-3 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {feature.title}
                </h3>

                {/* Description */}
                <p className={`text-sm leading-relaxed ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
