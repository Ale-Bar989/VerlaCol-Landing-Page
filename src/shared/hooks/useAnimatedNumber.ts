// Hook para animar números con diferentes easings (Open/Closed Principle)
// Ubicación: src/shared/hooks/useAnimatedNumber.ts
// Permite extender con nuevos easings sin modificar el código existente

import { useState, useEffect } from 'react';

/**
 * Tipos de easing disponibles para animaciones
 */
export type EasingType = 'linear' | 'easeIn' | 'easeOut' | 'easeInOut';

/**
 * Configuración de la animación
 */
export interface AnimationConfig {
  /** Duración de la animación en milisegundos (default: 2000) */
  duration?: number;
  /** Número de pasos de la animación (default: 40) */
  steps?: number;
  /** Tipo de easing a aplicar (default: 'easeOut') */
  easing?: EasingType;
}

/**
 * Funciones de easing
 * Cada función toma un progreso (0-1) y devuelve el progreso modificado
 */
const easingFunctions: Record<EasingType, (t: number) => number> = {
  linear: (t: number) => t,
  easeIn: (t: number) => t * t * t,
  easeOut: (t: number) => 1 - Math.pow(1 - t, 3),
  easeInOut: (t: number) => t < 0.5 
    ? 4 * t * t * t 
    : 1 - Math.pow(-2 * t + 2, 3) / 2,
};

/**
 * Hook para animar números de forma suave
 * Implementa Open/Closed Principle: abierto para extensión (nuevos easings), cerrado para modificación
 * 
 * @param target - Valor objetivo a alcanzar
 * @param shouldAnimate - Si debe animar o no
 * @param config - Configuración de la animación
 * @returns Valor actual animado
 * 
 * @example
 * ```tsx
 * const animatedSpeed = useAnimatedNumber(
 *   connectionData.downloadSpeed,
 *   showDownload,
 *   { duration: 2000, easing: 'easeOut' }
 * );
 * 
 * return <div>{Math.round(animatedSpeed)} Mbps</div>;
 * ```
 */
export function useAnimatedNumber(
  target: number,
  shouldAnimate: boolean,
  config: AnimationConfig = {}
): number {
  const { 
    duration = 2000, 
    steps = 40, 
    easing = 'easeOut' 
  } = config;

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // Si no debe animar o el target es 0, resetear
    if (!shouldAnimate) {
      setCurrent(0);
      return;
    }

    if (target === 0) {
      return;
    }

    const stepDuration = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      // Aplicar función de easing
      const easingFunction = easingFunctions[easing];
      const easedProgress = easingFunction(progress);
      
      // Calcular valor actual
      const newValue = target * easedProgress;
      setCurrent(newValue);

      // Completar animación
      if (currentStep >= steps) {
        setCurrent(target);
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [target, shouldAnimate, duration, steps, easing]);

  return current;
}

/**
 * Hook para animar múltiples números simultáneamente
 * Útil cuando necesitas animar varios valores con la misma configuración
 * 
 * @param targets - Objeto con los valores objetivo
 * @param shouldAnimate - Si debe animar o no
 * @param config - Configuración de la animación
 * @returns Objeto con los valores actuales animados
 * 
 * @example
 * ```tsx
 * const animated = useAnimatedNumbers(
 *   { speed: 100, ping: 20, upload: 50 },
 *   isComplete,
 *   { duration: 2000, easing: 'easeOut' }
 * );
 * 
 * return (
 *   <>
 *     <div>{Math.round(animated.speed)} Mbps</div>
 *     <div>{Math.round(animated.ping)} ms</div>
 *     <div>{Math.round(animated.upload)} Mbps</div>
 *   </>
 * );
 * ```
 */
export function useAnimatedNumbers<T extends Record<string, number>>(
  targets: T,
  shouldAnimate: boolean,
  config: AnimationConfig = {}
): T {
  const { 
    duration = 2000, 
    steps = 40, 
    easing = 'easeOut' 
  } = config;

  const [current, setCurrent] = useState<T>(() => {
    const initial = {} as Record<string, number>;
    for (const key in targets) {
      initial[key] = 0;
    }
    return initial as T;
  });

  useEffect(() => {
    // Si no debe animar, resetear
    if (!shouldAnimate) {
      const reset = {} as Record<string, number>;
      for (const key in targets) {
        reset[key] = 0;
      }
      setCurrent(reset as T);
      return;
    }

    const stepDuration = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      // Aplicar función de easing
      const easingFunction = easingFunctions[easing];
      const easedProgress = easingFunction(progress);
      
      // Calcular valores actuales para cada target
      const newValues = {} as Record<string, number>;
      for (const key in targets) {
        newValues[key] = targets[key] * easedProgress;
      }
      setCurrent(newValues as T);

      // Completar animación
      if (currentStep >= steps) {
        setCurrent({ ...targets } as T);
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [targets, shouldAnimate, duration, steps, easing]);

  return current;
}
