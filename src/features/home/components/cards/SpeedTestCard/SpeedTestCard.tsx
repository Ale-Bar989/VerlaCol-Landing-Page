// SpeedTestCard - Test de velocidad real con animaciones
// Ubicación: src/features/home/components/cards/SpeedTestCard/SpeedTestCard.tsx

import { useEffect, useState } from 'react';
import { useTheme } from '@/core/contexts';
import { Zap, Download, Wifi, Activity, Upload } from 'lucide-react';
import { useRealConnection } from '@/shared/hooks/useRealConnection';
import { ModernCard } from '../ModernCard';

const CONNECTION_TIPS = [
  'Cierra aplicaciones que no estés usando',
  'Acerca tu dispositivo al router',
  'Evita obstáculos entre el router y tu dispositivo',
  'Reinicia tu router cada cierto tiempo',
  'Usa cable ethernet para mejor velocidad',
  'Actualiza el firmware de tu router',
  'Cambia el canal WiFi si hay interferencias',
];

export const SpeedTestCard: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { connectionData, isMeasuring, measureConnection } = useRealConnection();
  const [displaySpeed, setDisplaySpeed] = useState<number>(0);
  const [displayUpload, setDisplayUpload] = useState<number>(0);
  const [displayPing, setDisplayPing] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [tipIndex, setTipIndex] = useState<number>(0);
  const [showPing, setShowPing] = useState<boolean>(false);
  const [showDownload, setShowDownload] = useState<boolean>(false);
  const [showUpload, setShowUpload] = useState<boolean>(false);

  // Log de debugging para rastrear cambios en connectionData
  useEffect(() => {
    console.log('🔍 connectionData actualizado:', connectionData);
  }, [connectionData]);

  // Log de debugging para rastrear cambios en showUpload
  useEffect(() => {
    console.log('🎬 showUpload cambió a:', showUpload);
  }, [showUpload]);

  // Resetear todos los valores al iniciar medición
  useEffect(() => {
    if (isMeasuring) {
      setDisplaySpeed(0);
      setDisplayUpload(0);
      setDisplayPing(0);
      setProgress(0);
      setTipIndex(0);
      setShowPing(false);
      setShowDownload(false);
      setShowUpload(false);
    }
  }, [isMeasuring]);

  // Mostrar resultados secuencialmente cuando termina
  useEffect(() => {
    if (!isMeasuring && connectionData.downloadSpeed > 0) {
      console.log('🎯 Test terminado, iniciando secuencia de visualización', {
        ping: connectionData.ping,
        download: connectionData.downloadSpeed,
        upload: connectionData.uploadSpeed
      });
      setTimeout(() => setShowPing(true), 300);
    }
  }, [isMeasuring, connectionData.downloadSpeed, connectionData.uploadSpeed, connectionData.ping]);

  // Cuando Ping termina de animar, mostrar Descarga
  useEffect(() => {
    if (showPing && connectionData.ping > 0) {
      console.log('🔄 Mostrando descarga...', { showPing, ping: connectionData.ping });
      setTimeout(() => setShowDownload(true), 1500);
    }
  }, [showPing, connectionData.ping]);

  // Cuando Descarga termina de animar, mostrar Subida
  useEffect(() => {
    if (showDownload && connectionData.downloadSpeed > 0) {
      console.log('🔄 Mostrando subida...', { 
        showDownload, 
        downloadSpeed: connectionData.downloadSpeed,
        uploadSpeed: connectionData.uploadSpeed 
      });
      setTimeout(() => setShowUpload(true), 1500);
    }
  }, [showDownload, connectionData.downloadSpeed, connectionData.uploadSpeed]);

  // Rotar consejos cada 3 segundos durante la medición
  useEffect(() => {
    if (isMeasuring) {
      const interval = setInterval(() => {
        setTipIndex(prev => (prev + 1) % CONNECTION_TIPS.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isMeasuring]);

  // Animar progreso de 0 a 100 durante la medición
  useEffect(() => {
    if (isMeasuring) {
      const duration = 15000;
      const steps = 100;
      const stepDuration = duration / steps;
      let currentStep = 0;
      
      const interval = setInterval(() => {
        currentStep++;
        setProgress(currentStep);
        
        if (currentStep >= 100) {
          clearInterval(interval);
        }
      }, stepDuration);
      
      return () => clearInterval(interval);
    } else if (connectionData.downloadSpeed > 0) {
      setProgress(100);
    }
  }, [isMeasuring, connectionData.downloadSpeed]);

  // Animar descarga cuando se muestra
  useEffect(() => {
    if (showDownload && connectionData.downloadSpeed > 0) {
      const target = connectionData.downloadSpeed;
      const duration = 2000;
      const steps = 40;
      const stepDuration = duration / steps;
      let currentStep = 0;
      
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setDisplaySpeed(target * easeOut);
        
        if (currentStep >= steps) {
          setDisplaySpeed(target);
          clearInterval(interval);
        }
      }, stepDuration);
      
      return () => clearInterval(interval);
    }
  }, [showDownload, connectionData.downloadSpeed]);

  // Animar subida cuando se muestra
  useEffect(() => {
    if (showUpload && connectionData.uploadSpeed > 0) {
      console.log('✅ Iniciando animación de subida:', connectionData.uploadSpeed);
      const target = connectionData.uploadSpeed;
      const duration = 2000;
      const steps = 40;
      const stepDuration = duration / steps;
      let currentStep = 0;
      
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setDisplayUpload(target * easeOut);
        
        if (currentStep >= steps) {
          setDisplayUpload(target);
          clearInterval(interval);
        }
      }, stepDuration);
      
      return () => clearInterval(interval);
    }
  }, [showUpload, connectionData.uploadSpeed]);

  // Animar ping cuando se muestra
  useEffect(() => {
    if (showPing && connectionData.ping > 0) {
      const target = connectionData.ping;
      const duration = 2000;
      const steps = 40;
      const stepDuration = duration / steps;
      let currentStep = 0;
      
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setDisplayPing(target * easeOut);
        
        if (currentStep >= steps) {
          setDisplayPing(target);
          clearInterval(interval);
        }
      }, stepDuration);
      
      return () => clearInterval(interval);
    }
  }, [showPing, connectionData.ping]);

  return (
    <ModernCard icon={<Zap className='w-6 h-6 text-[#4A5CFF]' strokeWidth={2.5} />}>
      <div className='space-y-8'>
        <div className='text-center'>
          <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Test de Velocidad Real</h3>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Medición real de tu conexión a Internet</p>
        </div>

        {/* Estado central limpio y ordenado */}
        <div className='flex flex-col items-center justify-center py-8'>
          {(isMeasuring || connectionData.downloadSpeed > 0) ? (
            <div className='relative w-52 h-52 mb-6'>
              {/* Círculo de progreso SVG limpio */}
              <svg className='absolute inset-0 w-full h-full transform -rotate-90' viewBox='0 0 208 208'>
                <circle
                  cx='104'
                  cy='104'
                  r='95'
                  fill='none'
                  stroke={isDark ? 'rgba(74, 92, 255, 0.08)' : 'rgba(74, 92, 255, 0.06)'}
                  strokeWidth='8'
                />
                <circle
                  cx='104'
                  cy='104'
                  r='95'
                  fill='none'
                  stroke='#7A8FFF'
                  strokeWidth='8'
                  strokeLinecap='round'
                  strokeDasharray={`${2 * Math.PI * 95}`}
                  strokeDashoffset={`${2 * Math.PI * 95 * (1 - progress / 100)}`}
                  style={{
                    transition: 'stroke-dashoffset 0.3s ease-out'
                  }}
                />
              </svg>
              
              {/* Contenido central */}
              <div className='absolute inset-0 flex flex-col items-center justify-center'>
                {isMeasuring ? (
                  <>
                    <Download className='w-14 h-14 text-[#4A5CFF] mb-3' strokeWidth={2.5} />
                    <div className={`text-5xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}
                      style={{ letterSpacing: '-0.03em' }}
                    >
                      {Math.round(displaySpeed)}
                    </div>
                    <div className={`text-sm font-semibold ${isDark ? 'text-gray-400' : 'text-gray-600'} uppercase mt-1`}>
                      Mbps
                    </div>
                    <div className='text-xs font-bold text-[#7A8FFF] mt-3'>
                      {progress}%
                    </div>
                  </>
                ) : (
                  <>
                    <div className='w-16 h-16 rounded-full flex items-center justify-center mb-3'
                      style={{
                        background: isDark 
                          ? 'rgba(122, 143, 255, 0.15)'
                          : 'rgba(122, 143, 255, 0.1)'
                      }}
                    >
                      <svg 
                        className='w-8 h-8 text-[#7A8FFF]' 
                        fill='none' 
                        viewBox='0 0 24 24' 
                        stroke='currentColor'
                        strokeWidth={3}
                      >
                        <path 
                          strokeLinecap='round' 
                          strokeLinejoin='round' 
                          d='M5 13l4 4L19 7' 
                        />
                      </svg>
                    </div>
                    <div className={`text-base font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      ¡Test completado!
                    </div>
                  </>
                )}
              </div>
            </div>
          ) : (
            <div className='w-36 h-36 mb-6 rounded-full flex items-center justify-center'
              style={{
                background: isDark 
                  ? 'rgba(74, 92, 255, 0.05)'
                  : 'rgba(74, 92, 255, 0.03)',
                border: `2px dashed ${isDark ? 'rgba(74, 92, 255, 0.2)' : 'rgba(74, 92, 255, 0.15)'}`
              }}
            >
              <Wifi className={`w-16 h-16 ${isDark ? 'text-gray-600' : 'text-gray-400'}`} strokeWidth={2} />
            </div>
          )}
          
          <div className='text-center min-h-[40px] flex items-center justify-center'>
            {isMeasuring ? (
              <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
                key={tipIndex}
                style={{
                  animation: 'fadeIn 0.5s ease-in'
                }}
              >
                💡 {CONNECTION_TIPS[tipIndex]}
              </p>
            ) : (
              <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {connectionData.downloadSpeed > 0 ? 'Conexión medida' : 'Listo para iniciar'}
              </p>
            )}
          </div>
          
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
        <div className='grid grid-cols-3 gap-4'>
          {/* Ping */}
          <div className='text-center'
            style={{
              opacity: showPing ? 1 : 0,
              transform: showPing ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.5s ease-out'
            }}
          >
            <div className='relative w-16 h-16 mx-auto mb-3 rounded-2xl flex items-center justify-center overflow-hidden'
              style={{
                background: isDark 
                  ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(34, 197, 94, 0.05))'
                  : 'linear-gradient(135deg, rgba(34, 197, 94, 0.08), rgba(34, 197, 94, 0.03))',
              }}
            >
              {showPing && (
                <div className='absolute inset-0 rounded-2xl'
                  style={{
                    border: '2px solid rgba(34, 197, 94, 1)',
                    boxShadow: '0 0 10px rgba(34, 197, 94, 0.8), 0 0 20px rgba(34, 197, 94, 0.6), inset 0 0 10px rgba(34, 197, 94, 0.4)',
                    animation: displayPing < connectionData.ping ? 'borderSweep 2s linear' : 'none'
                  }}
                />
              )}
              <Activity className='w-8 h-8 text-green-500 relative z-10' strokeWidth={2.5} />
            </div>
            <div className={`text-3xl font-black mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ 
                letterSpacing: '-0.02em',
                textShadow: `0 0 20px rgba(34, 197, 94, ${isDark ? '0.3' : '0.2'})`
              }}
            >
              {showPing ? Math.round(displayPing) : '--'}
            </div>
            <div className={`text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
              Ping
            </div>
          </div>

          {/* Descarga */}
          <div className='text-center'
            style={{
              opacity: showDownload ? 1 : 0,
              transform: showDownload ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.5s ease-out'
            }}
          >
            <div className='relative w-16 h-16 mx-auto mb-3 rounded-2xl flex items-center justify-center overflow-hidden'
              style={{
                background: isDark 
                  ? 'linear-gradient(135deg, rgba(74, 92, 255, 0.15), rgba(74, 92, 255, 0.08))'
                  : 'linear-gradient(135deg, rgba(74, 92, 255, 0.1), rgba(74, 92, 255, 0.05))',
              }}
            >
              {showDownload && (
                <div className='absolute inset-0 rounded-2xl'
                  style={{
                    border: '2px solid rgba(74, 92, 255, 1)',
                    boxShadow: '0 0 10px rgba(74, 92, 255, 0.8), 0 0 20px rgba(74, 92, 255, 0.6), inset 0 0 10px rgba(74, 92, 255, 0.4)',
                    animation: displaySpeed < connectionData.downloadSpeed ? 'borderSweep 2s linear' : 'none'
                  }}
                />
              )}
              <Download className='w-8 h-8 text-[#4A5CFF] relative z-10' strokeWidth={2.5} />
            </div>
            <div className={`text-3xl font-black mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ 
                letterSpacing: '-0.02em',
                textShadow: `0 0 20px rgba(74, 92, 255, ${isDark ? '0.4' : '0.2'})`
              }}
            >
              {showDownload ? Math.round(displaySpeed) : '--'}
            </div>
            <div className={`text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
              Descarga (Mbps)
            </div>
          </div>

          {/* Subida */}
          <div className='text-center'
            style={{
              opacity: showUpload ? 1 : 0,
              transform: showUpload ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.5s ease-out'
            }}
          >
            <div className='relative w-16 h-16 mx-auto mb-3 rounded-2xl flex items-center justify-center overflow-hidden'
              style={{
                background: isDark 
                  ? 'linear-gradient(135deg, rgba(122, 143, 255, 0.15), rgba(122, 143, 255, 0.08))'
                  : 'linear-gradient(135deg, rgba(122, 143, 255, 0.1), rgba(122, 143, 255, 0.05))',
              }}
            >
              {showUpload && (
                <div className='absolute inset-0 rounded-2xl'
                  style={{
                    border: '2px solid rgba(122, 143, 255, 1)',
                    boxShadow: '0 0 10px rgba(122, 143, 255, 0.8), 0 0 20px rgba(122, 143, 255, 0.6), inset 0 0 10px rgba(122, 143, 255, 0.4)',
                    animation: displayUpload < connectionData.uploadSpeed ? 'borderSweep 2s linear' : 'none'
                  }}
                />
              )}
              <Upload className='w-8 h-8 text-[#7A8FFF] relative z-10' strokeWidth={2.5} />
            </div>
            <div className={`text-3xl font-black mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ 
                letterSpacing: '-0.02em',
                textShadow: `0 0 20px rgba(122, 143, 255, ${isDark ? '0.4' : '0.2'})`
              }}
            >
              {showUpload ? Math.round(displayUpload) : '--'}
            </div>
            <div className={`text-xs font-semibold uppercase tracking-wider ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
              Subida (Mbps)
            </div>
          </div>
        </div>

        {/* Botón */}
        <button
          onClick={measureConnection}
          disabled={isMeasuring}
          className='w-full py-4 rounded-2xl font-bold text-white transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed group/btn relative overflow-hidden'
          style={{
            background: 'linear-gradient(135deg, #4A5CFF, #7A8FFF)',
            boxShadow: '0 10px 30px rgba(74, 92, 255, 0.4)'
          }}
        >
          <div className='absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000' />
          <span className='relative flex items-center justify-center gap-2'>
            <Zap className='w-5 h-5' strokeWidth={2.5} />
            {isMeasuring ? 'Midiendo...' : connectionData.downloadSpeed > 0 ? 'Medir Nuevamente' : 'Iniciar Test'}
          </span>
        </button>
      </div>
    </ModernCard>
  );
};
