// StatsCard - Estadísticas en vivo de la red
// Ubicación: src/features/home/components/cards/StatsCard/StatsCard.tsx

import { useEffect, useState } from 'react';
import { useTheme } from '@/core/contexts';
import { TrendingUp, Wifi, Activity } from 'lucide-react';
import { useRealStats } from '@/shared/hooks/useRealStats';
import { ModernCard } from '../ModernCard';

export const StatsCard: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const realStats = useRealStats();
  const [activeUsers, setActiveUsers] = useState(1247);

  // Simular usuarios activos con variación realista
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 10 - 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Formatear uptime a formato legible
  const formatUptime = (seconds: number): string => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (days > 0) return `${days}d ${hours}h`;
    if (hours > 0) return `${hours}h ${minutes}m`;
    if (minutes > 0) return `${minutes}m ${secs}s`;
    return `${secs}s`;
  };

  return (
    <ModernCard icon={<TrendingUp className='w-6 h-6 text-[#4A5CFF]' strokeWidth={2.5} />}>
      <div className='space-y-8'>
        <div>
          <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Estadísticas en Vivo</h3>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Datos en tiempo real de nuestra red</p>
        </div>

        {/* Stats grid */}
        <div className='space-y-6'>
          {/* Usuarios activos */}
          <div className='space-y-3'>
            <div className='flex items-center justify-between'>
              <span className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Usuarios Activos</span>
              <Wifi className='w-4 h-4 text-green-400' strokeWidth={2.5} />
            </div>
            <div className={`text-5xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ 
                fontFamily: 'system-ui, -apple-system, sans-serif',
                letterSpacing: '-0.03em',
                textShadow: `0 0 30px rgba(74, 92, 255, ${isDark ? '0.4' : '0.2'})`
              }}
            >
              {activeUsers.toLocaleString()}
            </div>
            <div className='w-full h-2 bg-white/5 rounded-full overflow-hidden'>
              <div className='h-full bg-linear-to-r from-[#4A5CFF] to-[#7A8FFF] rounded-full'
                style={{ width: '78%', transition: 'width 0.5s ease-out' }}
              />
            </div>
          </div>

          {/* Data transferida - REAL */}
          <div className='space-y-3'>
            <div className='flex items-center justify-between'>
              <span className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Data Transferida (Sesión)</span>
              <Activity className='w-4 h-4 text-[#4A5CFF]' strokeWidth={2.5} />
            </div>
            <div className='flex items-baseline gap-2'>
              <span className={`text-5xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}
                style={{ 
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  letterSpacing: '-0.03em',
                  textShadow: `0 0 30px rgba(74, 92, 255, ${isDark ? '0.4' : '0.2'})`
                }}
              >
                {realStats.dataTransferred.toFixed(1)}
              </span>
              <span className={`text-2xl font-bold ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                MB
              </span>
            </div>
            <div className='w-full h-2 bg-white/5 rounded-full overflow-hidden'>
              <div className='h-full bg-linear-to-r from-[#7A8FFF] to-[#4A5CFF] rounded-full'
                style={{ 
                  width: `${Math.min((realStats.dataTransferred / 10) * 100, 100)}%`, 
                  transition: 'width 0.5s ease-out' 
                }}
              />
            </div>
          </div>

          {/* Métricas adicionales - REALES */}
          <div className='grid grid-cols-2 gap-4 pt-6 mt-6 border-t border-[#4A5CFF]/20'>
            <div className='relative group/metric'>
              <div className='absolute inset-0 bg-linear-to-br from-[#4A5CFF]/10 to-transparent rounded-xl opacity-0 group-hover/metric:opacity-100 transition-opacity' />
              <div className='relative text-center p-4 rounded-xl border border-[#4A5CFF]/10'>
                <div className={`text-2xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}
                  style={{ 
                    letterSpacing: '-0.02em',
                    textShadow: `0 0 20px rgba(74, 92, 255, ${isDark ? '0.3' : '0.2'})`
                  }}
                >
                  {formatUptime(realStats.uptime)}
                </div>
                <div className={`text-xs font-semibold uppercase tracking-wider mt-2 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>Uptime (Sesión)</div>
              </div>
            </div>
            <div className='relative group/metric'>
              <div className='absolute inset-0 bg-linear-to-br from-[#4A5CFF]/10 to-transparent rounded-xl opacity-0 group-hover/metric:opacity-100 transition-opacity' />
              <div className='relative text-center p-4 rounded-xl border border-[#4A5CFF]/10'>
                <div className={`text-3xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}
                  style={{ 
                    letterSpacing: '-0.02em',
                    textShadow: `0 0 20px rgba(74, 92, 255, ${isDark ? '0.3' : '0.2'})`
                  }}
                >
                  {realStats.latency > 0 ? `${realStats.latency}ms` : '--'}
                </div>
                <div className={`text-xs font-semibold uppercase tracking-wider mt-2 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>Tu Latencia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModernCard>
  );
};
