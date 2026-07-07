// Speed Test Abstraction - Dependency Inversion Principle
// Ubicación: src/core/services/speedTest.ts
// Permite cambiar el proveedor de speed test sin afectar el código que lo usa

import SpeedTestEngine from "@cloudflare/speedtest";

/**
 * Callback para actualizaciones de progreso en tiempo real
 */
export type ProgressCallback = (data: {
  type: 'latency' | 'download' | 'upload';
  currentValue: number;
}) => void;

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

  /**
   * Ejecuta un test completo (ping, download, upload)
   * @param onProgress - Callback opcional para recibir actualizaciones en tiempo real
   * @returns Promise con todos los resultados
   */
  runFullTest(onProgress?: ProgressCallback): Promise<{
    ping: number;
    download: number;
    upload: number;
    jitter?: number;
  }>;
}

/**
 * Implementación de ISpeedTest usando @cloudflare/speedtest oficial
 * Usa la librería oficial de Cloudflare para mediciones precisas
 */
export class CloudflareSpeedTest implements ISpeedTest {
  private engine: SpeedTestEngine | null = null;
  private isTestRunning = false;

  /**
   * Ejecuta un test completo y devuelve todos los resultados
   */
  async runFullTest(onProgress?: ProgressCallback): Promise<{
    ping: number;
    download: number;
    upload: number;
    jitter?: number;
  }> {
    console.log("🚀 Iniciando test completo con @cloudflare/speedtest...");

    return new Promise((resolve, reject) => {
      try {
        // Crear nueva instancia del engine
        this.engine = new SpeedTestEngine({
          autoStart: true,
          measurements: [
            { type: "latency", numPackets: 20 },
            { type: "download", bytes: 1e6, count: 20 },
            { type: "upload", bytes: 1e5, count: 20 },
          ],
        });

        this.isTestRunning = true;

        // Listener para cuando termine el test
        this.engine.onFinish = (results) => {
          console.log("✅ Test completo finalizado");

          const summary = results.getSummary();

          // La librería devuelve valores en bps, convertir a Mbps
          const result = {
            ping: summary.latency || 0,
            download: summary.download ? summary.download / 1000000 : 0, // bps a Mbps
            upload: summary.upload ? summary.upload / 1000000 : 0, // bps a Mbps
            jitter: summary.jitter,
          };

          console.log("📊 Resultados (Mbps):", result);

          this.isTestRunning = false;
          this.engine = null;

          resolve(result);
        };

        // Listener para errores
        this.engine.onError = (error) => {
          console.error("❌ Error en speed test:", error);
          this.isTestRunning = false;
          this.engine = null;
          reject(new Error(error));
        };

        // Listener para cambios de estado con actualizaciones en tiempo real
        this.engine.onResultsChange = () => {
          if (this.engine && onProgress) {
            const results = this.engine.results;
            const summary = results.getSummary();
            
            // Enviar actualizaciones en tiempo real
            if (summary.latency) {
              onProgress({
                type: 'latency',
                currentValue: summary.latency
              });
            }
            if (summary.download) {
              onProgress({
                type: 'download',
                currentValue: summary.download / 1000000 // bps a Mbps
              });
            }
            if (summary.upload) {
              onProgress({
                type: 'upload',
                currentValue: summary.upload / 1000000 // bps a Mbps
              });
            }
          }
        };
      } catch (error) {
        console.error("❌ Error inicializando speed test:", error);
        this.isTestRunning = false;
        this.engine = null;
        reject(error);
      }
    });
  }

  /**
   * Mide solo la latencia (ping)
   */
  async measurePing(): Promise<number> {
    console.log("🏓 Midiendo latencia con @cloudflare/speedtest...");

    return new Promise((resolve) => {
      try {
        this.engine = new SpeedTestEngine({
          autoStart: true,
          measurements: [{ type: "latency", numPackets: 20 }],
        });

        this.isTestRunning = true;

        this.engine.onFinish = (results) => {
          const summary = results.getSummary();
          const ping = summary.latency || 30;

          console.log(`📊 Ping: ${ping}ms`);

          this.isTestRunning = false;
          this.engine = null;

          resolve(ping);
        };

        this.engine.onError = (error) => {
          console.error("❌ Error midiendo ping:", error);
          this.isTestRunning = false;
          this.engine = null;
          resolve(30); // Fallback
        };
      } catch (error) {
        console.error("❌ Error inicializando ping test:", error);
        this.isTestRunning = false;
        resolve(30); // Fallback
      }
    });
  }

  /**
   * Mide solo la velocidad de descarga
   */
  async measureDownload(): Promise<number> {
    console.log("⬇️ Midiendo descarga con @cloudflare/speedtest...");

    return new Promise((resolve) => {
      try {
        this.engine = new SpeedTestEngine({
          autoStart: true,
          measurements: [{ type: "download", bytes: 1e6, count: 15 }],
        });

        this.isTestRunning = true;

        this.engine.onFinish = (results) => {
          const summary = results.getSummary();
          // La librería devuelve en bps, convertir a Mbps
          const download = summary.download ? summary.download / 1000000 : 0;

          console.log(`✅ Descarga: ${download.toFixed(2)} Mbps`);

          this.isTestRunning = false;
          this.engine = null;

          resolve(download);
        };

        this.engine.onError = (error) => {
          console.error("❌ Error midiendo descarga:", error);
          this.isTestRunning = false;
          this.engine = null;
          resolve(50); // Fallback
        };
      } catch (error) {
        console.error("❌ Error inicializando download test:", error);
        this.isTestRunning = false;
        resolve(50); // Fallback
      }
    });
  }

  /**
   * Mide solo la velocidad de subida
   */
  async measureUpload(): Promise<number> {
    console.log("⬆️ Midiendo subida con @cloudflare/speedtest...");

    return new Promise((resolve) => {
      try {
        this.engine = new SpeedTestEngine({
          autoStart: true,
          measurements: [{ type: "upload", bytes: 1e5, count: 8 }],
        });

        this.isTestRunning = true;

        this.engine.onFinish = (results) => {
          const summary = results.getSummary();
          // La librería devuelve en bps, convertir a Mbps
          const upload = summary.upload ? summary.upload / 1000000 : 0;

          console.log(`✅ Subida: ${upload.toFixed(2)} Mbps`);

          this.isTestRunning = false;
          this.engine = null;

          resolve(upload);
        };

        this.engine.onError = (error) => {
          console.error("❌ Error midiendo subida:", error);
          this.isTestRunning = false;
          this.engine = null;
          resolve(20); // Fallback
        };
      } catch (error) {
        console.error("❌ Error inicializando upload test:", error);
        this.isTestRunning = false;
        resolve(20); // Fallback
      }
    });
  }

  /**
   * Cancela las mediciones en curso
   */
  cancelMeasurements(): void {
    if (this.engine && this.isTestRunning) {
      console.log("🛑 Cancelando mediciones...");
      this.engine.pause();
      this.isTestRunning = false;
      this.engine = null;
    }
  }
}

/**
 * Implementación Mock para testing (no hace peticiones reales)
 */
export class MockSpeedTest implements ISpeedTest {
  async runFullTest(onProgress?: ProgressCallback): Promise<{
    ping: number;
    download: number;
    upload: number;
    jitter?: number;
  }> {
    // Simular progreso en tiempo real
    if (onProgress) {
      for (let i = 0; i <= 10; i++) {
        await new Promise((resolve) => setTimeout(resolve, 100));
        onProgress({
          type: 'download',
          currentValue: (Math.random() * 100) + 50
        });
      }
    } else {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    
    return {
      ping: Math.floor(Math.random() * 50) + 10, // 10-60ms
      download: Math.floor(Math.random() * 100) + 50, // 50-150 Mbps
      upload: Math.floor(Math.random() * 50) + 20, // 20-70 Mbps
      jitter: Math.floor(Math.random() * 10) + 1, // 1-10ms
    };
  }

  async measurePing(): Promise<number> {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return Math.floor(Math.random() * 50) + 10; // 10-60ms
  }

  async measureDownload(): Promise<number> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return Math.floor(Math.random() * 100) + 50; // 50-150 Mbps
  }

  async measureUpload(): Promise<number> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return Math.floor(Math.random() * 50) + 20; // 20-70 Mbps
  }

  cancelMeasurements(): void {
    // No-op para mock
  }
}

// Instancia por defecto (puede ser inyectada)
export const defaultSpeedTest: ISpeedTest = new CloudflareSpeedTest();
