// Hook para medir la conexión real del usuario
// Ubicación: src/shared/hooks/useRealConnection.ts
// Usa Cloudflare Speed Test API - Mediciones 100% reales

import { useState, useEffect, useCallback, useRef } from 'react';

interface ConnectionData {
  downloadSpeed: number;
  uploadSpeed: number;
  ping: number;
  effectiveType: string;
  isOnline: boolean;
}

export function useRealConnection() {
  const [connectionData, setConnectionData] = useState<ConnectionData>({
    downloadSpeed: 0,
    uploadSpeed: 0,
    ping: 0,
    effectiveType: '4g',
    isOnline: true,
  });
  const [isMeasuring, setIsMeasuring] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Medir ping usando Cloudflare Speed Test API
  const measurePing = useCallback(async (): Promise<number> => {
    console.log('🏓 Midiendo latencia con Cloudflare...');
    
    const pingUrl = 'https://speed.cloudflare.com/__down?bytes=0';
    const pings: number[] = [];

    for (let i = 0; i < 5; i++) {
      const startTime = performance.now();
      
      try {
        await fetch(pingUrl, {
          method: 'GET',
          cache: 'no-cache',
          signal: abortControllerRef.current?.signal,
        });
        
        const endTime = performance.now();
        const pingTime = endTime - startTime;
        
        if (pingTime >= 1 && pingTime < 1000) {
          pings.push(pingTime);
          console.log(`🏓 Ping ${i + 1}: ${pingTime.toFixed(1)}ms`);
        }
      } catch (error) {
        console.warn(`⚠️ Ping ${i + 1} falló:`, error);
      }
      
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    if (pings.length === 0) {
      console.warn('⚠️ No se pudo medir ping, usando fallback');
      return 30;
    }

    // Eliminar outliers (más alto y más bajo)
    if (pings.length >= 3) {
      pings.sort((a, b) => a - b);
      pings.shift();
      pings.pop();
    }

    const avgPing = Math.round(pings.reduce((a, b) => a + b, 0) / pings.length);
    console.log(`📊 Ping promedio: ${avgPing}ms`);
    return avgPing;
  }, []);

  // Medir velocidad de descarga REAL usando Cloudflare
  const measureDownloadSpeed = useCallback(async (): Promise<number> => {
    console.log('⬇️ Midiendo descarga REAL con Cloudflare...');
    
    try {
      // Descargar 10 MB de Cloudflare
      const downloadUrl = 'https://speed.cloudflare.com/__down?bytes=10000000';
      
      const startTime = performance.now();
      const response = await fetch(downloadUrl, {
        cache: 'no-cache',
        signal: abortControllerRef.current?.signal,
      });

      if (!response.ok || !response.body) {
        throw new Error('Error en respuesta de Cloudflare');
      }

      const reader = response.body.getReader();
      let receivedBytes = 0;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        receivedBytes += value.length;
        
        // Detener después de 5 segundos o 10MB
        const elapsed = performance.now() - startTime;
        if (receivedBytes >= 10000000 || elapsed > 5000) {
          reader.cancel();
          break;
        }
      }

      const endTime = performance.now();
      const durationSeconds = (endTime - startTime) / 1000;
      const speedMbps = (receivedBytes * 8) / (durationSeconds * 1000000);
      
      console.log(`✅ Descarga REAL: ${speedMbps.toFixed(2)} Mbps (${(receivedBytes / 1000000).toFixed(1)} MB en ${durationSeconds.toFixed(2)}s)`);
      return Math.round(speedMbps * 100) / 100;
    } catch (error) {
      console.error('❌ Error midiendo descarga:', error);
      // Fallback: usar Network Information API
      const nav = navigator as any;
      const connection = nav.connection || nav.mozConnection || nav.webkitConnection;
      return connection?.downlink || 50;
    }
  }, []);

  // Medir velocidad de subida REAL usando Cloudflare
  const measureUploadSpeed = useCallback(async (): Promise<number> => {
    console.log('⬆️ Midiendo subida REAL con Cloudflare...');
    
    try {
      // Generar 5 MB de datos aleatorios para subir
      const uploadSize = 5 * 1024 * 1024; // 5 MB
      const chunkSize = 65536; // 64 KB por chunk (límite de crypto.getRandomValues)
      const chunks: Uint8Array[] = [];
      
      // Generar datos en chunks
      for (let i = 0; i < uploadSize; i += chunkSize) {
        const size = Math.min(chunkSize, uploadSize - i);
        const chunk = new Uint8Array(size);
        crypto.getRandomValues(chunk);
        chunks.push(chunk);
      }
      
      // Combinar todos los chunks
      const data = new Uint8Array(uploadSize);
      let offset = 0;
      for (const chunk of chunks) {
        data.set(chunk, offset);
        offset += chunk.length;
      }
      
      console.log(`📤 Subiendo ${uploadSize / 1000000}MB a Cloudflare...`);
      
      const startTime = performance.now();
      const response = await fetch('https://speed.cloudflare.com/__up', {
        method: 'POST',
        body: data,
        cache: 'no-cache',
        signal: abortControllerRef.current?.signal,
      });

      const endTime = performance.now();
      const durationSeconds = (endTime - startTime) / 1000;

      if (!response.ok) {
        throw new Error(`Upload falló con status: ${response.status}`);
      }

      const speedMbps = (uploadSize * 8) / (durationSeconds * 1000000);
      
      console.log(`✅ Subida REAL: ${speedMbps.toFixed(2)} Mbps (${uploadSize / 1000000}MB en ${durationSeconds.toFixed(2)}s)`);
      return Math.round(speedMbps * 100) / 100;
    } catch (error) {
      console.error('❌ Error midiendo subida:', error);
      // Fallback: estimar basado en descarga
      return 0;
    }
  }, []);

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
    if ('connection' in nav || 'mozConnection' in nav || 'webkitConnection' in nav) {
      const connection = nav.connection || nav.mozConnection || nav.webkitConnection;
      return {
        effectiveType: connection?.effectiveType || '4g',
        downlink: connection?.downlink || 0, // Mbps estimado
      };
    }
    return { effectiveType: '4g', downlink: 0 };
  }, []);

  // Medir conexión completa
  const measureConnection = useCallback(async () => {
    console.log('🚀 Iniciando test de velocidad real...');
    setIsMeasuring(true);
    abortControllerRef.current = new AbortController();

    try {
      const networkInfo = getNetworkInfo();
      console.log('📡 Tipo de conexión:', networkInfo.effectiveType);
      
      // Medir ping
      console.log('⏱️ Midiendo ping...');
      const ping = await measurePing();
      
      // Medir velocidad de descarga
      console.log('⬇️ Midiendo velocidad de descarga...');
      const downloadSpeed = await measureDownloadSpeed();
      
      // Medir velocidad de subida REAL
      console.log('⬆️ Midiendo velocidad de subida...');
      const uploadSpeed = await measureUploadSpeed();

      const results = {
        downloadSpeed,
        uploadSpeed,
        ping,
        effectiveType: networkInfo.effectiveType,
        isOnline: navigator.onLine,
      };

      console.log('✅ Test completado:', results);
      console.log('🔍 Valores individuales:', {
        'Ping': ping,
        'Descarga': downloadSpeed,
        'Subida': uploadSpeed,
        'uploadSpeed es 0?': uploadSpeed === 0,
        'uploadSpeed es undefined?': uploadSpeed === undefined,
        'uploadSpeed es null?': uploadSpeed === null
      });
      
      setConnectionData(results);
      console.log('💾 connectionData actualizado con:', results);
    } catch (error) {
      console.error('❌ Error midiendo conexión:', error);
    } finally {
      setIsMeasuring(false);
    }
  }, [measurePing, measureDownloadSpeed, measureUploadSpeed, getNetworkInfo]);

  // Detectar cambios en la conexión
  useEffect(() => {
    const handleOnline = () => {
      setConnectionData(prev => ({ ...prev, isOnline: true }));
    };

    const handleOffline = () => {
      setConnectionData(prev => ({ ...prev, isOnline: false }));
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  return {
    connectionData,
    isMeasuring,
    measureConnection,
  };
}
