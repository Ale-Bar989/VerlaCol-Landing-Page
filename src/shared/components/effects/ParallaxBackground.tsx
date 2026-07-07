import { useEffect, useRef } from 'react';
import { useLocalTheme } from '@/shared/hooks';

interface ParallaxBackgroundProps {
  imageUrl: string;
  children: React.ReactNode;
  className?: string;
  opacity?: number;
  height?: string; // Altura específica para el header
}

export const ParallaxBackground = ({ 
  imageUrl, 
  children, 
  className = '',
  opacity = 0.7,
  height = 'auto'
}: ParallaxBackgroundProps) => {
  const { theme } = useLocalTheme();
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.3; // Velocidad suave del parallax
        parallaxRef.current.style.transform = `translateY(${parallax}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const overlayColor = theme === 'dark' ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)';

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ height }}>
      {/* Background Image with Parallax */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          willChange: 'transform',
        }}
      >
        {/* Overlay with Theme-based Opacity */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundColor: overlayColor,
            opacity: opacity,
            transition: 'opacity 0.3s ease-in-out',
          }}
        />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};