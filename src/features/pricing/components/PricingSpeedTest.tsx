// PricingSpeedTest - Test de velocidad animado para modal de pricing
// Ubicación: src/features/pricing/components/PricingSpeedTest.tsx

import { useState, useEffect } from 'react';
import { Zap, Wifi, Download, Upload, Activity } from 'lucide-react';
import { useTheme } from '@/core/contexts';

interface PricingSpeedTestProps {
  planName: string;
  planSpeed: string;
}

export const PricingSpeedTest: React.FC<PricingSpeedTestProps> = ({ planName, planSpeed }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentSpeed, setCurrentSpeed] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // Extraer número de velocidad del plan
  const targetSpeed = parseInt(planSpeed.replace(/[^0-9]/g, ''));

  const startTest = () => {
    setIsRunning(true);
    setProgress(0);
    setCurrentSpeed(0);
    setIsComplete(false);
  };

  // Animar progreso
  useEffect(() => {
    if (isRunning && progress < 100) {
      const interval = setInterval(() => {
        setProgress(prev => {
          const next = prev + 2;
          return next > 100 ? 100 : next;
        });
      }, 50);
      return () => clearInterval(interval);
    } else if (progress >= 100 && isRunning) {
      setTimeout(() => {
        setIsComplete(true);
        setIsRunning(false);
      }, 500);
    }
  }, [isRunning, progress]);

  // Animar velocidad
  useEffect(() => {
    if (isRunning && currentSpeed < targetSpeed) {
      const interval = setInterval(() => {
        setCurrentSpeed(prev => {
          const increment = Math.ceil(targetSpeed / 50);
          const next = prev + increment;
          return next > targetSpeed ? targetSpeed : next;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isRunning, currentSpeed, targetSpeed]);

  return (
    <div className={`p-8 ${isDark ? 'bg-gray-900' : 'bg-white'} rounded-2xl max-w-2xl mx-auto`}>
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {planName}
        </h2>
        <p className={`text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Velocidad contratada: <span className="font-bold">{planSpeed}</span>
        </p>
      </div>

      {/* Círculo de progreso */}
      <div className="relative w-64 h-64 mx-auto mb-8">
        <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 256 256">
          {/* Círculo de fondo */}
          <circle
            cx="128"
            cy="128"
            r="110"
            fill="none"
            stroke={isDark ? 'rgba(74, 92, 255, 0.1)' : 'rgba(74, 92, 255, 0.08)'}
            strokeWidth="12"
          />
          
          {/* Círculo de progreso */}
          <circle
            cx="128"
            cy="128"
            r="110"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 110}`}
            strokeDashoffset={`${2 * Math.PI * 110 * (1 - progress / 100)}`}
            style={{
              transition: 'stroke-dashoffset 0.1s linear'
            }}
          />
          
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4A5CFF" />
              <stop offset="100%" stopColor="#7A8FFF" />
            </linearGradient>
          </defs>
        </svg>

        {/* Contenido central */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Wifi 
            className={`w-16 h-16 mb-4 ${isRunning ? 'text-[#4A5CFF] animate-pulse' : 'text-[#4A5CFF]'}`} 
            strokeWidth={2} 
          />
          <p className={`text-base font-medium ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
            {isComplete ? '¡Test Completado!' : isRunning ? 'Midiendo...' : 'Listo para iniciar'}
          </p>
        </div>
      </div>

      {/* Métricas - Siempre visibles */}
      <div className="grid grid-cols-3 gap-8 mb-8">
        {/* Ping */}
        <div className="text-center">
          <Activity className={`w-10 h-10 mx-auto mb-3 ${isComplete ? 'text-green-500' : isDark ? 'text-gray-600' : 'text-gray-400'}`} strokeWidth={2} />
          <div className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {isComplete ? `${Math.floor(Math.random() * 10 + 5)}` : '--'}
          </div>
          <div className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>Ping</div>
        </div>

        {/* Descarga */}
        <div className="text-center">
          <Download className={`w-10 h-10 mx-auto mb-3 ${isComplete ? 'text-[#4A5CFF]' : isDark ? 'text-gray-600' : 'text-gray-400'}`} strokeWidth={2} />
          <div className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {isComplete ? targetSpeed : '--'}
          </div>
          <div className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>Descarga (Mbps)</div>
        </div>

        {/* Subida */}
        <div className="text-center">
          <Upload className={`w-10 h-10 mx-auto mb-3 ${isComplete ? 'text-[#7A8FFF]' : isDark ? 'text-gray-600' : 'text-gray-400'}`} strokeWidth={2} />
          <div className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {isComplete ? Math.floor(targetSpeed * 0.8) : '--'}
          </div>
          <div className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>Subida (Mbps)</div>
        </div>
      </div>

      {/* Botón */}
      <button
        onClick={startTest}
        disabled={isRunning}
        className="w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #4A5CFF, #7A8FFF)',
          boxShadow: '0 8px 24px rgba(74, 92, 255, 0.4)'
        }}
      >
        <span className="relative flex items-center justify-center gap-2">
          <Zap className="w-5 h-5" strokeWidth={2.5} />
          {isRunning ? 'Midiendo...' : isComplete ? 'Probar Nuevamente' : 'Iniciar Test de Velocidad'}
        </span>
      </button>
    </div>
  );
};
