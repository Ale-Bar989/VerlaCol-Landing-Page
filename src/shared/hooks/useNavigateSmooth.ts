// Hook para navegación suave entre páginas
// Ubicación: src/shared/hooks/useNavigateSmooth.ts
// Optimizaciones: useCallback para memoizar la función de navegación

import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Hook personalizado para navegación suave con transición
 * Agrega un fade out antes de navegar y scroll al top después
 * 
 * @param duration - Duración de la transición en ms (default: 300)
 * @returns Función de navegación suave
 * 
 * @example
 * const navigateSmooth = useNavigateSmooth();
 * navigateSmooth('/about');
 */
export const useNavigateSmooth = (duration: number = 300) => {
  const navigate = useNavigate();

  const navigateSmooth = useCallback((to: string) => {
    // Agregar clase de fade out al body
    document.body.style.opacity = '0';
    document.body.style.transition = `opacity ${duration}ms ease-out`;

    // Esperar la transición y luego navegar
    setTimeout(() => {
      navigate(to);
      
      // Scroll suave al top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

      // Fade in después de navegar
      setTimeout(() => {
        document.body.style.opacity = '1';
      }, 50);
    }, duration);
  }, [navigate, duration]);

  return navigateSmooth;
};
