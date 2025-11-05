// Speed Test Abstraction - Dependency Inversion Principle
// Ubicación: src/core/services/speedTest.ts
// Permite cambiar el proveedor de speed test sin afectar el código que lo usa

/**
 * Interface para servicios de medición de velocidad
 * Implementa Dependency Inversion Principle (DIP)
 */
export interface ISpeedTest {
  /**
   * Mide la latencia (ping) en milisegundos
   * @returns Promise con el ping en ms
   */
  measurePing(): Promise<number>;

  /**
   * Mide la velocidad de descarga en Mbps
   * @returns Promise con la velocidad de descarga
   */
  measureDownload(): Promise<number>;

  /**
   * Mide la velocidad de subida en Mbps
   * @returns Promise con la velocidad de subida
   */
  measureUpload(): Promise<number>;

  /**
   * Cancela las mediciones en curso
   */
  cancelMeasurements(): void;
}

/**
 * Implementación de ISpeedTest usando Cloudflare Speed Test API
 * Esta es una implementación concreta que puede ser reemplazada
 */
export class CloudflareSpeedTest implements ISpeedTest {
  private abortController: AbortController | null = null;

  async measurePing(): Promise<number> {
    console.log('🏓 Midiendo latencia con Cloudflare...');
    
    this.abortController = new AbortController();
    const pingUrl = 'https://speed.cloudflare.com/__down?bytes=0';
    const pings: number[] = [];

    for (let i = 0; i < 5; i++) {
      const startTime = performance.now();
      
      try {
        await fetch(pingUrl, {
          method: 'GET',
          cache: 'no-cache',
          signal: this.abortController.signal,
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
  }

  async measureDownload(): Promise<number> {
    console.log('⬇️ Midiendo descarga REAL con Cloudflare...');
    
    try {
      this.abortController = new AbortController();
      const downloadUrl = 'https://speed.cloudflare.com/__down?bytes=10000000';
      
      const startTime = performance.now();
      const response = await fetch(downloadUrl, {
        cache: 'no-cache',
        signal: this.abortController.signal,
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
      const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
      return connection?.downlink || 50;
    }
  }

  async measureUpload(): Promise<number> {
    console.log('⬆️ Midiendo subida REAL con Cloudflare...');
    
    try {
      this.abortController = new AbortController();
      
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
        signal: this.abortController.signal,
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
      return 0;
    }
  }

  cancelMeasurements(): void {
    if (this.abortController) {
      this.abortController.abort();
      this.abortController = null;
    }
  }
}

/**
 * Implementación Mock para testing (no hace peticiones reales)
 */
export class MockSpeedTest implements ISpeedTest {
  async measurePing(): Promise<number> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return Math.floor(Math.random() * 50) + 10; // 10-60ms
  }

  async measureDownload(): Promise<number> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return Math.floor(Math.random() * 100) + 50; // 50-150 Mbps
  }

  async measureUpload(): Promise<number> {
    await new Promise(resolve => setTimeout(resolve, 500));
    return Math.floor(Math.random() * 50) + 20; // 20-70 Mbps
  }

  cancelMeasurements(): void {
    // No-op para mock
  }
}

// Instancia por defecto (puede ser inyectada)
export const defaultSpeedTest: ISpeedTest = new CloudflareSpeedTest();
