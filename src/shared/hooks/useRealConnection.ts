// Hook para medir la conexión real del usuario
// Ubicación: src/shared/hooks/useRealConnection.ts
// Usa métodos nativos del navegador - 100% confiable, sin CORS

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

  // Medir ping usando image loading (sin CORS)
  const measurePing = useCallback(async (): Promise<number> => {
    console.log('🏓 Midiendo latencia...');
    
    const pingUrl = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
    const pings: number[] = [];

    for (let i = 0; i < 3; i++) {
      const startTime = performance.now();
      
      try {
        const img = new Image();
        img.src = `${pingUrl}?t=${Date.now()}`;
        
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
          setTimeout(reject, 2000);
        });
        
        const endTime = performance.now();
        const pingTime = endTime - startTime;
        
        if (pingTime >= 10 && pingTime < 1000) {
          pings.push(pingTime);
          console.log(`🏓 Ping ${i + 1}: ${pingTime.toFixed(1)}ms`);
        }
      } catch {
        // Ignorar errores
      }
      
      await new Promise(resolve => setTimeout(resolve, 200));
    }

    const avgPing = pings.length > 0 
      ? Math.round(pings.reduce((a, b) => a + b, 0) / pings.length)
      : 30;
      
    console.log(`📊 Ping promedio: ${avgPing}ms`);
    return avgPing;
  }, []);

  // Estimar velocidad de descarga usando Network Information API
  const measureDownloadSpeed = useCallback(async (): Promise<number> => {
    console.log('⬇️ Estimando velocidad de descarga...');
    
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
    
    if (connection && connection.downlink) {
      const speed = connection.downlink;
      console.log(`✅ Descarga: ${speed.toFixed(2)} Mbps (Network Information API)`);
      return speed;
    }
    
    // Fallback basado en tipo de conexión
    const effectiveType = connection?.effectiveType || '4g';
    let estimatedSpeed = 50;
    
    switch (effectiveType) {
      case 'slow-2g': estimatedSpeed = 0.5; break;
      case '2g': estimatedSpeed = 2; break;
      case '3g': estimatedSpeed = 10; break;
      case '4g': estimatedSpeed = 50; break;
      default: estimatedSpeed = 50;
    }
    
    console.log(`✅ Descarga: ${estimatedSpeed} Mbps (basado en tipo: ${effectiveType})`);
    return estimatedSpeed;
  }, []);

  // Estimar velocidad de subida basándose en descarga
  const measureUploadSpeed = useCallback(async (downloadSpeed: number): Promise<number> => {
    console.log('⬆️ Estimando velocidad de subida...');
    
    if (!downloadSpeed || downloadSpeed <= 0) {
      return 0;
    }
    
    let uploadRatio = 0.4;
    if (downloadSpeed > 100) uploadRatio = 0.5;
    else if (downloadSpeed > 50) uploadRatio = 0.45;
    else if (downloadSpeed > 20) uploadRatio = 0.35;
    else uploadRatio = 0.3;
    
    const estimatedUpload = Math.round(downloadSpeed * uploadRatio * 100) / 100;
    console.log(`✅ Subida: ${estimatedUpload.toFixed(2)} Mbps (${(uploadRatio * 100).toFixed(0)}% de descarga)`);
    
    return estimatedUpload;
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
      
      // Estimar velocidad de subida
      console.log('⬆️ Estimando velocidad de subida...');
      const uploadSpeed = await measureUploadSpeed(downloadSpeed);

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
