// Hook para medir velocidad de conexión - Optimizado con DIP
// Ubicación: src/shared/hooks/useSpeedTest.ts
// Usa ISpeedTest en lugar de implementación directa (Dependency Inversion)

import { useState, useEffect, useCallback } from 'react';
import { defaultSpeedTest, type ISpeedTest } from '@/core/services';
import type { ConnectionData } from '@/core/types';

interface UseSpeedTestOptions {
  speedTest?: ISpeedTest; // Inyección de dependencia opcional
}

/**
 * Hook para medir velocidad de conexión
 * Implementa Dependency Inversion Principle
 * 
 * @param options - Opciones del hook
 * @param options.speedTest - Servicio de speed test (opcional, usa Cloudflare por defecto)
 * @returns Estado de la conexión y función para medir
 * 
 * @example
 * // Uso básico (usa Cloudflare)
 * const { connectionData, isMeasuring, measureConnection } = useSpeedTest();
 * 
 * @example
 * // Uso con mock (testing)
 * const mockService = new MockSpeedTest();
 * const { connectionData } = useSpeedTest({ speedTest: mockService });
 */
export function useSpeedTest(options: UseSpeedTestOptions = {}) {
  const { speedTest = defaultSpeedTest } = options;

  const [connectionData, setConnectionData] = useState<ConnectionData>({
    downloadSpeed: 0,
    uploadSpeed: 0,
    ping: 0,
    effectiveType: '4g',
    isOnline: true,
  });
  const [isMeasuring, setIsMeasuring] = useState(false);

  // Obtener información de la API de Network Information
  const getNetworkInfo = useCallback(() => {
    interface NavigatorWithConnection extends Navigator {
      connection?: {
        effectiveType?: string;
        downlink?: number;
      };
      mozConnection?: {
        effectiveType?: string;
        downlink?: number;
      };
      webkitConnection?: {
        effectiveType?: string;
        downlink?: number;
      };
    }

    const nav = navigator as NavigatorWithConnection;
    const connection = nav.connection || nav.mozConnection || nav.webkitConnection;

    return {
      effectiveType: connection?.effectiveType || '4g',
      downlink: connection?.downlink || 0,
    };
  }, []);

  // Función principal para medir la conexión usando el servicio inyectado
  const measureConnection = useCallback(async () => {
    if (isMeasuring) return;

    setIsMeasuring(true);
    console.log('🚀 Iniciando test de velocidad real...');

    // Resetear valores al iniciar
    setConnectionData({
      downloadSpeed: 0,
      uploadSpeed: 0,
      ping: 0,
      effectiveType: '4g',
      isOnline: true,
    });

    try {
      const networkInfo = getNetworkInfo();
      console.log('📡 Tipo de conexión:', networkInfo.effectiveType);

      // Usar runFullTest con callback de progreso en tiempo real
      const results = await speedTest.runFullTest((progressData) => {
        // Actualizar datos en tiempo real mientras se mide
        console.log('📊 Progreso:', progressData);
        setConnectionData(prev => {
          if (progressData.type === 'download') {
            return { ...prev, downloadSpeed: progressData.currentValue };
          } else if (progressData.type === 'upload') {
            return { ...prev, uploadSpeed: progressData.currentValue };
          } else if (progressData.type === 'latency') {
            return { ...prev, ping: progressData.currentValue };
          }
          return prev;
        });
      });

      // Actualizar con resultados finales
      const finalResults = {
        downloadSpeed: results.download,
        uploadSpeed: results.upload,
        ping: results.ping,
        effectiveType: networkInfo.effectiveType,
        isOnline: navigator.onLine,
      };

      console.log('✅ Test completado:', finalResults);
      setConnectionData(finalResults);
    } catch (error) {
      console.error('❌ Error en test de velocidad:', error);
      // En caso de error, mantener valores anteriores o usar fallback
      const networkInfo = getNetworkInfo();
      setConnectionData(prev => ({
        ...prev,
        effectiveType: networkInfo.effectiveType,
        isOnline: navigator.onLine,
      }));
    } finally {
      setIsMeasuring(false);
    }
  }, [isMeasuring, speedTest, getNetworkInfo]);

  // Detectar cambios en el estado online/offline
  useEffect(() => {
    const handleOnline = () => {
      console.log('🟢 Conexión restaurada');
      setConnectionData(prev => ({ ...prev, isOnline: true }));
    };

    const handleOffline = () => {
      console.log('🔴 Conexión perdida');
      setConnectionData(prev => ({ ...prev, isOnline: false }));
      speedTest.cancelMeasurements();
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      speedTest.cancelMeasurements();
    };
  }, [speedTest]);

  return {
    connectionData,
    isMeasuring,
    measureConnection,
  };
}
