import { memo, type ReactNode } from 'react';
import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';

// Componente para lazy loading visual con Intersection Observer
// Solo renderiza el contenido cuando es visible en viewport
// Ubicación: src/shared/components/LazySection.tsx

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
}

function LazySection({
  children,
  fallback = null,
  threshold = 0.1,
  rootMargin = '100px',
  className = '',
}: LazySectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={className}>
      {isIntersecting ? children : fallback}
    </div>
  );
}

export default memo(LazySection);
