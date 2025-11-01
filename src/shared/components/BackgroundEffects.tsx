import { DESIGN_SYSTEM } from '../styles/design-system';

// Efectos de fondo reutilizables con blur
// Ubicación: src/shared/components/BackgroundEffects.tsx

interface BackgroundEffectsProps {
  variant?: 'default' | 'animated';
  opacity?: 15 | 20 | 30;
}

export default function BackgroundEffects({ 
  variant = 'default', 
  opacity = 15 
}: BackgroundEffectsProps) {
  const baseClass = variant === 'animated' 
    ? "absolute rounded-full blur-[150px] animate-pulse"
    : "absolute rounded-full blur-[150px]";

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div 
        className={`${baseClass} top-0 left-1/4 w-[600px] h-[600px]`}
        style={{ 
          backgroundColor: DESIGN_SYSTEM.rgba.accent[opacity],
          ...(variant === 'animated' && { animationDelay: '0s' })
        }}
      />
      <div 
        className={`${baseClass} top-1/3 right-1/4 w-[600px] h-[600px]`}
        style={{ 
          backgroundColor: DESIGN_SYSTEM.rgba.secondary[opacity],
          ...(variant === 'animated' && { animationDelay: '2s' })
        }}
      />
      <div 
        className={`${baseClass} bottom-0 left-1/2 w-[500px] h-[500px]`}
        style={{ 
          backgroundColor: DESIGN_SYSTEM.rgba.primary[opacity],
          ...(variant === 'animated' && { animationDelay: '4s' })
        }}
      />
    </div>
  );
}
