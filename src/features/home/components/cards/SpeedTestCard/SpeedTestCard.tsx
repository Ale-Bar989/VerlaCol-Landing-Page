// SpeedTestCard - Test de velocidad real con animaciones (OPTIMIZADO + OCP)
// Ubicación: src/features/home/components/cards/SpeedTestCard/SpeedTestCard.tsx
// Optimizaciones: React.memo, useAnimatedNumber (OCP), eliminación de logs, reducción de re-renders

import { useEffect, useState, memo } from "react";
import { useTheme } from "@/core/contexts";
import { Zap, Download, Wifi, Activity, Upload } from "lucide-react";
import { useSpeedTest, useAnimatedNumber } from "@/shared/hooks";
import { ModernCard } from "../ModernCard";
import { SpeedGauge } from "@/shared/components";
import { CONNECTION_TIPS } from "@/features/home/data";

export const SpeedTestCard: React.FC = memo(() => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const { connectionData, isMeasuring, measureConnection } = useSpeedTest();

  // Estados de visualización
  const [progress, setProgress] = useState<number>(0);
  const [tipIndex, setTipIndex] = useState<number>(0);
  const [showPing, setShowPing] = useState<boolean>(false);
  const [showDownload, setShowDownload] = useState<boolean>(false);
  const [showUpload, setShowUpload] = useState<boolean>(false);

  // Animaciones con useAnimatedNumber (Open/Closed Principle)
  const displaySpeed = useAnimatedNumber(
    connectionData.downloadSpeed,
    showDownload,
    { duration: 2000, easing: "easeOut" }
  );

  const displayUpload = useAnimatedNumber(
    connectionData.uploadSpeed,
    showUpload,
    { duration: 2000, easing: "easeOut" }
  );

  const displayPing = useAnimatedNumber(connectionData.ping, showPing, {
    duration: 2000,
    easing: "easeOut",
  });

  // Logs eliminados para producción - mejora de performance

  // Resetear todos los valores al iniciar medición
  useEffect(() => {
    if (isMeasuring) {
      setProgress(0);
      setTipIndex(0);
      setShowPing(false);
      setShowDownload(false);
      setShowUpload(false);
    }
  }, [isMeasuring]);

  // Calcular progreso basado en las fases del test
  useEffect(() => {
    if (isMeasuring) {
      // Fase 1: Ping (0-33%)
      if (connectionData.ping > 0) {
        setProgress(33);
      }
      // Fase 2: Download (33-66%)
      if (connectionData.downloadSpeed > 0) {
        setProgress(66);
      }
      // Fase 3: Upload (66-100%)
      if (connectionData.uploadSpeed > 0) {
        setProgress(100);
      }
    } else if (connectionData.downloadSpeed > 0) {
      setProgress(100);
    }
  }, [
    isMeasuring,
    connectionData.ping,
    connectionData.downloadSpeed,
    connectionData.uploadSpeed,
  ]);

  // Mostrar resultados secuencialmente cuando termina
  useEffect(() => {
    if (!isMeasuring && connectionData.downloadSpeed > 0) {
      setTimeout(() => setShowPing(true), 300);
    }
  }, [
    isMeasuring,
    connectionData.downloadSpeed,
    connectionData.uploadSpeed,
    connectionData.ping,
  ]);

  // Cuando Ping termina de animar, mostrar Descarga
  useEffect(() => {
    if (showPing && connectionData.ping > 0) {
      setTimeout(() => setShowDownload(true), 1500);
    }
  }, [showPing, connectionData.ping]);

  // Cuando Descarga termina de animar, mostrar Subida
  useEffect(() => {
    if (showDownload && connectionData.downloadSpeed > 0) {
      setTimeout(() => setShowUpload(true), 1500);
    }
  }, [showDownload, connectionData.downloadSpeed, connectionData.uploadSpeed]);

  // Rotar consejos cada 3 segundos durante la medición
  useEffect(() => {
    if (isMeasuring) {
      const interval = setInterval(() => {
        setTipIndex((prev) => (prev + 1) % CONNECTION_TIPS.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isMeasuring]);

  // Animaciones ahora manejadas por useAnimatedNumber (OCP)
  // Eliminados 3 useEffect complejos (~75 líneas) - reemplazados por hook reutilizable

  return (
    <ModernCard
      icon={<Zap className="w-6 h-6 text-[#4A5CFF]" strokeWidth={2.5} />}
    >
      <div className="space-y-8">
        <div className="text-center">
          <h3
            className={`text-2xl font-bold mb-2 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Mide tu velocidad Actual
          </h3>
          <p
            className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            Medición de tu conexión a Internet
          </p>
        </div>

        {/* Estado central con velocímetro animado */}
        <div className="flex flex-col items-center justify-center py-8">
          {isMeasuring ? (
            <div className="mb-6">
              {/* Velocímetro animado tipo gauge */}
              <SpeedGauge
                speed={connectionData.downloadSpeed}
                maxSpeed={1000}
                size={300}
                type="download"
                showMarks={true}
                label="Mbps"
                isMeasuring={isMeasuring}
              />

              {/* Indicador de progreso debajo del velocímetro - Solo visible durante la medición */}
              {isMeasuring && (
                <div className="text-center mt-4 space-y-2">
                  <div className="text-xs font-bold text-[#7A8FFF]">
                    {progress === 0 && "Iniciando test..."}
                    {progress === 33 && "Midiendo latencia..."}
                    {progress === 66 && "Midiendo descarga..."}
                    {progress === 100 && "Midiendo subida..."}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div
              className="w-36 h-36 mb-6 rounded-full flex items-center justify-center"
              style={{
                background: isDark
                  ? "rgba(74, 92, 255, 0.05)"
                  : "rgba(74, 92, 255, 0.03)",
                border: `2px dashed ${
                  isDark ? "rgba(74, 92, 255, 0.2)" : "rgba(74, 92, 255, 0.15)"
                }`,
              }}
            >
              <Wifi
                className={`w-16 h-16 ${
                  isDark ? "text-gray-600" : "text-gray-400"
                }`}
                strokeWidth={2}
              />
            </div>
          )}

          {/* Tips rotatorios cuando está midiendo */}
          {isMeasuring && (
            <div className="text-center min-h-[40px] flex items-center justify-center">
              <p
                className={`text-sm font-medium ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                💡 {CONNECTION_TIPS[tipIndex]}
              </p>
            </div>
          )}

          {/* Tips visibles cuando NO está midiendo */}
          {!isMeasuring && (
            <div className="text-center min-h-[40px] flex items-center justify-center">
              <p
                className={`text-sm font-medium ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {connectionData.downloadSpeed > 0
                  ? "Listo para medir nuevamente"
                  : "Listo para iniciar"}
              </p>
            </div>
          )}

          <style>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(10px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            @keyframes borderSweep {
              0% {
                clip-path: polygon(50% 0, 50% 0, 50% 0, 50% 0);
              }
              25% {
                clip-path: polygon(50% 0, 0 0, 0 0, 50% 0);
              }
              50% {
                clip-path: polygon(50% 0, 0 0, 0 100%, 50% 0);
              }
              75% {
                clip-path: polygon(50% 0, 0 0, 0 100%, 100% 100%);
              }
              87.5% {
                clip-path: polygon(50% 0, 0 0, 0 100%, 100% 100%, 100% 0);
              }
              100% {
                clip-path: polygon(50% 0, 0 0, 0 100%, 100% 100%, 100% 0, 50% 0);
              }
            }
          `}</style>
        </div>

        {/* Grid de métricas - 3 columnas */}
        <div className="grid grid-cols-3 gap-4">
          {/* Ping */}
          <div
            className="text-center"
            style={{
              opacity: showPing ? 1 : 0,
              transform: showPing ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.5s ease-out",
            }}
          >
            <div
              className="relative w-16 h-16 mx-auto mb-3 rounded-2xl flex items-center justify-center overflow-hidden"
              style={{
                background: isDark
                  ? "linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(34, 197, 94, 0.05))"
                  : "linear-gradient(135deg, rgba(34, 197, 94, 0.08), rgba(34, 197, 94, 0.03))",
              }}
            >
              {showPing && (
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    border: "2px solid rgba(34, 197, 94, 1)",
                    boxShadow:
                      "0 0 10px rgba(34, 197, 94, 0.8), 0 0 20px rgba(34, 197, 94, 0.6), inset 0 0 10px rgba(34, 197, 94, 0.4)",
                    animation:
                      displayPing < connectionData.ping
                        ? "borderSweep 2s linear"
                        : "none",
                  }}
                />
              )}
              <Activity
                className="w-8 h-8 text-green-500 relative z-10"
                strokeWidth={2.5}
              />
            </div>
            <div
              className={`text-3xl font-black mb-1 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
              style={{
                letterSpacing: "-0.02em",
                textShadow: `0 0 20px rgba(34, 197, 94, ${
                  isDark ? "0.3" : "0.2"
                })`,
              }}
            >
              {showPing ? Math.round(displayPing) : "--"}
            </div>
            <div
              className={`text-xs font-semibold uppercase tracking-wider ${
                isDark ? "text-gray-500" : "text-gray-600"
              }`}
            >
              Ping
            </div>
          </div>

          {/* Descarga */}
          <div
            className="text-center"
            style={{
              opacity: showDownload ? 1 : 0,
              transform: showDownload ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.5s ease-out",
            }}
          >
            <div
              className="relative w-16 h-16 mx-auto mb-3 rounded-2xl flex items-center justify-center overflow-hidden"
              style={{
                background: isDark
                  ? "linear-gradient(135deg, rgba(74, 92, 255, 0.15), rgba(74, 92, 255, 0.08))"
                  : "linear-gradient(135deg, rgba(74, 92, 255, 0.1), rgba(74, 92, 255, 0.05))",
              }}
            >
              {showDownload && (
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    border: "2px solid rgba(74, 92, 255, 1)",
                    boxShadow:
                      "0 0 10px rgba(74, 92, 255, 0.8), 0 0 20px rgba(74, 92, 255, 0.6), inset 0 0 10px rgba(74, 92, 255, 0.4)",
                    animation:
                      displaySpeed < connectionData.downloadSpeed
                        ? "borderSweep 2s linear"
                        : "none",
                  }}
                />
              )}
              <Download
                className="w-8 h-8 text-[#4A5CFF] relative z-10"
                strokeWidth={2.5}
              />
            </div>
            <div
              className={`text-3xl font-black mb-1 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
              style={{
                letterSpacing: "-0.02em",
                textShadow: `0 0 20px rgba(74, 92, 255, ${
                  isDark ? "0.4" : "0.2"
                })`,
              }}
            >
              {showDownload ? Math.round(displaySpeed) : "--"}
            </div>
            <div
              className={`text-xs font-semibold uppercase tracking-wider ${
                isDark ? "text-gray-500" : "text-gray-600"
              }`}
            >
              Descarga (Mbps)
            </div>
          </div>

          {/* Subida */}
          <div
            className="text-center"
            style={{
              opacity: showUpload ? 1 : 0,
              transform: showUpload ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.5s ease-out",
            }}
          >
            <div
              className="relative w-16 h-16 mx-auto mb-3 rounded-2xl flex items-center justify-center overflow-hidden"
              style={{
                background: isDark
                  ? "linear-gradient(135deg, rgba(122, 143, 255, 0.15), rgba(122, 143, 255, 0.08))"
                  : "linear-gradient(135deg, rgba(122, 143, 255, 0.1), rgba(122, 143, 255, 0.05))",
              }}
            >
              {showUpload && (
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    border: "2px solid rgba(122, 143, 255, 1)",
                    boxShadow:
                      "0 0 10px rgba(122, 143, 255, 0.8), 0 0 20px rgba(122, 143, 255, 0.6), inset 0 0 10px rgba(122, 143, 255, 0.4)",
                    animation:
                      displayUpload < connectionData.uploadSpeed
                        ? "borderSweep 2s linear"
                        : "none",
                  }}
                />
              )}
              <Upload
                className="w-8 h-8 text-[#7A8FFF] relative z-10"
                strokeWidth={2.5}
              />
            </div>
            <div
              className={`text-3xl font-black mb-1 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
              style={{
                letterSpacing: "-0.02em",
                textShadow: `0 0 20px rgba(122, 143, 255, ${
                  isDark ? "0.4" : "0.2"
                })`,
              }}
            >
              {showUpload ? Math.round(displayUpload) : "--"}
            </div>
            <div
              className={`text-xs font-semibold uppercase tracking-wider ${
                isDark ? "text-gray-500" : "text-gray-600"
              }`}
            >
              Subida (Mbps)
            </div>
          </div>
        </div>

        {/* Botón */}
        <button
          onClick={measureConnection}
          disabled={isMeasuring}
          className="w-full py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed group/btn relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #4A5CFF, #7A8FFF)",
            boxShadow: "0 10px 30px rgba(74, 92, 255, 0.4)",
            color: "#FFFFFF",
          }}
        >
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
          <span className="relative flex items-center justify-center gap-2">
            <Zap className="w-5 h-5" strokeWidth={2.5} />
            {isMeasuring
              ? "Midiendo..."
              : connectionData.downloadSpeed > 0
              ? "Medir Nuevamente"
              : "Iniciar Test"}
          </span>
        </button>
      </div>
    </ModernCard>
  );
});

SpeedTestCard.displayName = "SpeedTestCard";
