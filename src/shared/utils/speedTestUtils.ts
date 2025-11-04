// Utilidades para el test de velocidad
// Ubicación: src/shared/utils/speedTestUtils.ts

export type SpeedComparison = 'excellent' | 'good' | 'fair' | 'poor' | null;

export interface ComparisonResult {
  level: SpeedComparison;
  message: string;
  color: string;
  backgroundColor: string;
  borderColor: string;
}

/**
 * Compara la velocidad real con la velocidad del plan contratado
 * @param actualSpeed - Velocidad medida en Mbps
 * @param planSpeed - Velocidad del plan (ej: "300 Mbps")
 * @returns Nivel de comparación
 */
export function compareSpeed(actualSpeed: number, planSpeed: string): SpeedComparison {
  if (actualSpeed === 0) return null;
  
  const targetSpeed = parseInt(planSpeed.replace(/\D/g, ''));
  const percentage = (actualSpeed / targetSpeed) * 100;
  
  if (percentage >= 90) return 'excellent';
  if (percentage >= 70) return 'good';
  if (percentage >= 50) return 'fair';
  return 'poor';
}

/**
 * Obtiene el resultado detallado de la comparación
 * @param level - Nivel de comparación
 * @returns Objeto con mensaje, colores y estilos
 */
export function getComparisonResult(level: SpeedComparison): ComparisonResult | null {
  if (!level) return null;

  const results: Record<Exclude<SpeedComparison, null>, ComparisonResult> = {
    excellent: {
      level: 'excellent',
      message: '🎉 ¡Excelente! Tu conexión está funcionando perfectamente',
      color: '#22c55e',
      backgroundColor: 'rgba(34, 197, 94, 0.1)',
      borderColor: 'rgba(34, 197, 94, 0.3)',
    },
    good: {
      level: 'good',
      message: '✅ Buena velocidad, muy cerca del plan contratado',
      color: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      borderColor: 'rgba(59, 130, 246, 0.3)',
    },
    fair: {
      level: 'fair',
      message: '⚠️ Velocidad aceptable, pero por debajo de lo esperado',
      color: '#fbbf24',
      backgroundColor: 'rgba(251, 191, 36, 0.1)',
      borderColor: 'rgba(251, 191, 36, 0.3)',
    },
    poor: {
      level: 'poor',
      message: '❌ Velocidad baja, contacta a soporte técnico',
      color: '#ef4444',
      backgroundColor: 'rgba(239, 68, 68, 0.1)',
      borderColor: 'rgba(239, 68, 68, 0.3)',
    },
  };

  return results[level];
}

/**
 * Formatea la velocidad para mostrar
 * @param speed - Velocidad en Mbps
 * @returns Velocidad formateada
 */
export function formatSpeed(speed: number): string {
  if (speed === 0) return '--';
  return Math.round(speed).toString();
}

/**
 * Formatea el ping para mostrar
 * @param ping - Ping en ms
 * @returns Ping formateado
 */
export function formatPing(ping: number): string {
  if (ping === 0) return '--';
  return `${ping}ms`;
}
