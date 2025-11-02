// Stats section con diseño moderno tipo Superhuman
// Ubicación: src/ui/pages/home/components/StatsSection.tsx

import { memo } from 'react';
import { useTheme } from '@/core/contexts';

function StatsSection() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className={`relative py-40 px-6 overflow-hidden ${isDark ? 'bg-black' : 'bg-white'}`}>
      {/* Texto VERLA con barrido luminoso en las líneas */}
      <div className='absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden'>
        <svg className='w-full h-full' viewBox='0 0 1200 400' preserveAspectRatio='xMidYMid meet'>
          <defs>
            <linearGradient id='strokeGradient' x1='0%' y1='0%' x2='100%' y2='0%'>
              <stop offset='0%' stopColor='rgba(91, 111, 255, 0.15)' />
              <stop offset='20%' stopColor='rgba(91, 111, 255, 0.5)' />
              <stop offset='40%' stopColor='rgba(122, 143, 255, 0.8)' />
              <stop offset='50%' stopColor='rgba(255, 255, 255, 1)' />
              <stop offset='60%' stopColor='rgba(122, 143, 255, 0.8)' />
              <stop offset='80%' stopColor='rgba(91, 111, 255, 0.5)' />
              <stop offset='100%' stopColor='rgba(91, 111, 255, 0.15)' />
              <animate 
                attributeName='x1' 
                values='-100%;200%' 
                dur='3s' 
                repeatCount='indefinite' 
              />
              <animate 
                attributeName='x2' 
                values='0%;300%' 
                dur='3s' 
                repeatCount='indefinite' 
              />
            </linearGradient>
          </defs>
          <text 
            x='50%' 
            y='50%' 
            textAnchor='middle' 
            dominantBaseline='middle'
            fontSize='380'
            fontWeight='900'
            fill='transparent'
            stroke='url(#strokeGradient)'
            strokeWidth='4'
            letterSpacing='30'
            fontFamily='system-ui, -apple-system, sans-serif'
          >
            VERLA
          </text>
        </svg>
      </div>
      
      {/* Efectos de fondo sutiles */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl' style={{ backgroundColor: '#5B6FFF0D' }}></div>
        <div className='absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl' style={{ backgroundColor: '#7A8FFF0D' }}></div>
      </div>

      <div className='container mx-auto max-w-6xl text-center relative z-10'>
        {/* Badge moderno */}
        <div className='inline-flex items-center gap-2 mb-10 px-6 py-3 rounded-full backdrop-blur-md' style={{ 
          background: 'linear-gradient(135deg, rgba(91, 111, 255, 0.1), rgba(122, 143, 255, 0.1))',
          border: '1px solid rgba(91, 111, 255, 0.2)',
          boxShadow: '0 0 30px rgba(91, 111, 255, 0.1)'
        }}>
          <div className='w-2 h-2 rounded-full animate-pulse' style={{ background: '#5B6FFF' }}></div>
          <span className='text-sm font-bold uppercase tracking-widest' style={{ 
            color: '#7A8FFF',
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          }}>
            Impacto Real
          </span>
        </div>
        
        {/* Título principal con gradiente */}
        <h2 className='text-4xl md:text-6xl font-black mb-6 leading-tight' style={{
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        }}>
          <span className='text-transparent bg-clip-text' style={{
            backgroundImage: isDark ? 'linear-gradient(135deg, #FFFFFF, #E0E0E0)' : 'linear-gradient(135deg, #1F1F1F, #4A4A4A)',
            backgroundSize: '100% 100%'
          }}>
            Conectando tu mundo con
          </span>
        </h2>
        
        {/* Palabra destacada con efecto */}
        <div className='mb-8 relative inline-block'>
          <span className='text-6xl md:text-8xl font-black text-transparent bg-clip-text animate-gradient' style={{ 
            backgroundImage: isDark ? 'linear-gradient(90deg, #5B6FFF 0%, #7A8FFF 25%, #FFFFFF 50%, #7A8FFF 75%, #5B6FFF 100%)' : 'linear-gradient(90deg, #5B6FFF 0%, #7A8FFF 25%, #4A5CFF 50%, #7A8FFF 75%, #5B6FFF 100%)', 
            backgroundSize: '200% 100%',
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          }}>
            velocidad
          </span>
          <div className='absolute inset-0 blur-3xl opacity-40' style={{ 
            background: 'radial-gradient(ellipse, #5B6FFF 0%, #7A8FFF 40%, transparent 70%)',
            zIndex: -1
          }}></div>
        </div>
        
        {/* Subtítulo */}
        <p className='text-xl md:text-2xl mb-16' style={{
          color: isDark ? '#B0B0B0' : '#666666',
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          fontWeight: 300
        }}>
          Internet estable, rápido y confiable para tu hogar o negocio
        </p>

        {/* Stats cards modernos */}
        <div className='grid md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
          {/* Card 1 */}
          <div className='relative group'>
            <div className='absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' style={{
              background: 'linear-gradient(135deg, rgba(91, 111, 255, 0.1), rgba(122, 143, 255, 0.05))',
              filter: 'blur(20px)'
            }}></div>
            <div className='relative rounded-3xl p-8 backdrop-blur-sm transition-all duration-500 group-hover:transform group-hover:scale-105' style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(91, 111, 255, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
            }}>
              <div className='text-5xl font-black mb-3 text-transparent bg-clip-text' style={{
                backgroundImage: 'linear-gradient(135deg, #5B6FFF, #7A8FFF)',
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
              }}>
                1000
              </div>
              <div className='text-sm font-semibold uppercase tracking-wider' style={{ color: '#7A8FFF' }}>
                Mbps
              </div>
              <p className='text-xs mt-2' style={{ color: '#808080' }}>
                Velocidad máxima
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className='relative group'>
            <div className='absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' style={{
              background: 'linear-gradient(135deg, rgba(91, 111, 255, 0.1), rgba(122, 143, 255, 0.05))',
              filter: 'blur(20px)'
            }}></div>
            <div className='relative rounded-3xl p-8 backdrop-blur-sm transition-all duration-500 group-hover:transform group-hover:scale-105' style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(122, 143, 255, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
            }}>
              <div className='text-5xl font-black mb-3 text-transparent bg-clip-text' style={{
                backgroundImage: 'linear-gradient(135deg, #7A8FFF, #FFFFFF)',
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
              }}>
                99.9%
              </div>
              <div className='text-sm font-semibold uppercase tracking-wider' style={{ color: '#7A8FFF' }}>
                Uptime
              </div>
              <p className='text-xs mt-2' style={{ color: '#808080' }}>
                Disponibilidad garantizada
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className='relative group'>
            <div className='absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500' style={{
              background: 'linear-gradient(135deg, rgba(91, 111, 255, 0.1), rgba(122, 143, 255, 0.05))',
              filter: 'blur(20px)'
            }}></div>
            <div className='relative rounded-3xl p-8 backdrop-blur-sm transition-all duration-500 group-hover:transform group-hover:scale-105' style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(74, 92, 255, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
            }}>
              <div className='text-5xl font-black mb-3 text-transparent bg-clip-text' style={{
                backgroundImage: 'linear-gradient(135deg, #4A5CFF, #5B6FFF)',
                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
              }}>
                24/7
              </div>
              <div className='text-sm font-semibold uppercase tracking-wider' style={{ color: '#7A8FFF' }}>
                Soporte
              </div>
              <p className='text-xs mt-2' style={{ color: '#808080' }}>
                Asistencia permanente
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(StatsSection);
