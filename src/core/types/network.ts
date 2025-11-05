// Tipos de red segregados (Interface Segregation Principle)
// Ubicación: src/core/types/network.ts
// Interfaces pequeñas y específicas en lugar de una grande

/**
 * Métricas de velocidad de conexión
 * Componentes que solo necesitan velocidades pueden usar solo esta interface
 */
export interface SpeedMetrics {
  /** Velocidad de descarga en Mbps */
  downloadSpeed: number;
  /** Velocidad de subida en Mbps */
  uploadSpeed: number;
}

/**
 * Métricas de latencia
 * Componentes que solo necesitan latencia pueden usar solo esta interface
 */
export interface LatencyMetrics {
  /** Latencia (ping) en milisegundos */
  ping: number;
}

/**
 * Estado de la conexión de red
 * Componentes que solo necesitan el estado pueden usar solo esta interface
 */
export interface NetworkStatus {
  /** Tipo de conexión efectiva (4g, 3g, 2g, slow-2g) */
  effectiveType: string;
  /** Si el dispositivo está online */
  isOnline: boolean;
}

/**
 * Datos completos de conexión
 * Combina todas las interfaces para componentes que necesitan todo
 * Implementa Interface Segregation Principle
 */
export interface ConnectionData extends SpeedMetrics, LatencyMetrics, NetworkStatus {}

/**
 * Resultado parcial de medición de velocidad
 * Para componentes que muestran resultados progresivos
 */
export interface PartialSpeedMetrics {
  downloadSpeed?: number;
  uploadSpeed?: number;
  ping?: number;
}
