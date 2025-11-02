import { ArrowRight } from 'lucide-react';
import { useLocalTheme } from '@/shared/hooks/useLocalTheme';
import { DESIGN_SYSTEM } from '@/shared/styles/design-system';

// CTA Section reutilizable para páginas
// Ubicación: src/shared/components/CTASection.tsx

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
  onButtonClick?: () => void;
}

export default function CTASection({ 
  title, 
  description, 
  buttonText,
  buttonLink = '/contact',
  onButtonClick
}: CTASectionProps) {
  const { isDark } = useLocalTheme();

  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      window.location.href = buttonLink;
    }
  };

  return (
    <section className={`py-20 px-6 ${isDark ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <div className="container mx-auto max-w-4xl text-center">
        <div 
          className="p-12 rounded-3xl" 
          style={{
            background: DESIGN_SYSTEM.gradients.primary,
            boxShadow: DESIGN_SYSTEM.shadows.large
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {description}
          </p>
          <button
            onClick={handleClick}
            className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            style={{
              boxShadow: '0 4px 20px rgba(255, 255, 255, 0.2)'
            }}
          >
            {buttonText}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
