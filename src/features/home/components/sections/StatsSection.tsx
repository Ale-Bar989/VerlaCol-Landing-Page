import { memo, useEffect, useRef, useState, useCallback } from 'react';
import { useTheme } from '@/core/contexts';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  gradientFrom: string;
  gradientTo: string;
};

const Card: React.FC<CardProps> = ({ children, className = '', gradientFrom, gradientTo }) => (
  <div className={`relative group h-full transition-all duration-300 hover:scale-[1.02] ${className}`}>
    <div 
      className='absolute -inset-1 rounded-3xl blur-md transition-all duration-700 ease-out opacity-0 group-hover:opacity-100'
      style={{
        background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
      }}
    />
    <div 
      className='relative rounded-3xl p-6 h-full transition-all duration-700 ease-out'
      style={{
        background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.03))',
        border: '1px solid rgba(122, 143, 255, 0.15)',
        boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(16px)',
        transform: 'translateZ(0)',
        willChange: 'transform, box-shadow, border-color',
        transitionProperty: 'transform, box-shadow, border-color, background',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {children}
    </div>
  </div>
);

const SpeedTestCard: React.FC = () => {
  const [speed, setSpeed] = useState<number>(0);
  const [isTesting, setIsTesting] = useState<boolean>(false);
  const speedMeterRef = useRef<HTMLDivElement>(null);
  const speedTestInterval = useRef<number | null>(null);

  const cleanupInterval = useCallback(() => {
    if (speedTestInterval.current !== null) {
      clearInterval(speedTestInterval.current);
      speedTestInterval.current = null;
    }
  }, []);

  useEffect(() => {
    return () => cleanupInterval();
  }, [cleanupInterval]);

  const startSpeedTest = useCallback(() => {
    const speedMeter = speedMeterRef.current;
    if (!speedMeter) return;
    
    setSpeed(0);
    setIsTesting(true);
    cleanupInterval();
    
    speedMeter.style.transition = 'none';
    speedMeter.style.width = '0%';
    void speedMeter.offsetWidth; // Force reflow
    
    requestAnimationFrame(() => {
      speedMeter.style.transition = 'width 3s ease-in-out';
      speedMeter.style.width = '100%';
      
      let currentSpeed = 0;
      speedTestInterval.current = window.setInterval(() => {
        currentSpeed = Math.min(currentSpeed + Math.random() * 20, 100);
        setSpeed(currentSpeed);
        
        if (currentSpeed >= 100) {
          cleanupInterval();
          setSpeed(80 + Math.random() * 40);
          setIsTesting(false);
        }
      }, 100);
    });
  }, [cleanupInterval]);

  return (
    <Card gradientFrom="rgba(91, 111, 255, 0.2)" gradientTo="rgba(122, 143, 255, 0.2)">
      <h3 className='text-xl font-bold mb-4 text-white'>Prueba de Velocidad</h3>
      <div className='flex flex-col items-center justify-center h-48'>
        <div className='relative w-full h-2.5 bg-gray-800/50 rounded-full overflow-hidden mb-6'>
          <div 
            ref={speedMeterRef}
            className='h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-full transition-all duration-1000 ease-out'
            style={{ width: '0%' }}
          />
          <div className='absolute inset-0 bg-gradient-to-r from-transparent to-transparent via-white/10 bg-[length:200%_100%] animate-shimmer' />
        </div>
        <div 
          className='text-4xl font-black mb-2 text-transparent bg-clip-text'
          style={{
            backgroundImage: 'linear-gradient(135deg, #5B6FFF, #7A8FFF)',
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          }}
        >
          {Math.round(speed)}
        </div>
        <div className='text-sm font-semibold uppercase tracking-wider' style={{ color: '#7A8FFF' }}>
          Mbps
        </div>
        <button 
          onClick={startSpeedTest}
          className={`mt-4 px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5 ${
            isTesting ? 'opacity-75 cursor-not-allowed' : ''
          }`}
          disabled={isTesting}
        >
          Iniciar Prueba
        </button>
      </div>
    </Card>
  );
};

const ConnectionMeter: React.FC = () => {
  useEffect(() => {
    const updateConnectionSpeed = () => {
      const connectionMeter = document.getElementById('connectionMeter');
      const connectionSpeed = document.getElementById('connectionSpeed');
      
      if (!connectionMeter || !connectionSpeed) return;
      
      const speed = 5 + Math.random() * 50;
      const percentage = (speed / 100) * 100;
      const offset = 283 - (283 * percentage) / 100;
      
      connectionMeter.setAttribute('stroke-dashoffset', offset.toString());
      if (connectionSpeed) connectionSpeed.textContent = Math.round(speed).toString();
    };

    updateConnectionSpeed();
    const interval = setInterval(updateConnectionSpeed, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative w-32 h-32 mb-4'>
      <svg className='w-full h-full' viewBox='0 0 100 100'>
        <circle 
          cx='50' 
          cy='50' 
          r='45' 
          fill='none' 
          stroke='rgba(91, 111, 255, 0.2)' 
          strokeWidth='8'
        />
        <circle 
          id='connectionMeter'
          cx='50' 
          cy='50' 
          r='45' 
          fill='none' 
          stroke='url(#connectionGradient)' 
          strokeWidth='8'
          strokeLinecap='round'
          transform='rotate(-90 50 50)'
          strokeDasharray='283'
          strokeDashoffset='283'
          style={{ transition: 'stroke-dashoffset 0.5s ease-out' }}
        />
        <defs>
          <linearGradient id='connectionGradient' x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset='0%' stopColor='#5B6FFF' />
            <stop offset='100%' stopColor='#7A8FFF' />
          </linearGradient>
        </defs>
      </svg>
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='text-center'>
          <div className='text-3xl font-bold text-white' id='connectionSpeed'>0</div>
          <div className='text-xs text-gray-400'>Mbps</div>
        </div>
      </div>
    </div>
  );
};

const ConnectionCard: React.FC = () => (
  <Card gradientFrom="rgba(147, 51, 234, 0.2)" gradientTo="rgba(59, 130, 246, 0.2)">
    <h3 className='text-xl font-bold mb-4 text-white'>Conexión en Tiempo Real</h3>
    <div className='flex flex-col items-center justify-center h-48'>
      <ConnectionMeter />
      <div className='text-sm text-center text-gray-400 px-4'>
        <p>Velocidad actual de tu conexión a Internet</p>
      </div>
    </div>
  </Card>
);

const HeroText = () => (
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
);

const BackgroundEffects: React.FC = () => (
  <div className='absolute inset-0 pointer-events-none'>
    <div className='absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl' style={{ backgroundColor: '#5B6FFF0D' }} />
    <div className='absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl' style={{ backgroundColor: '#7A8FFF0D' }} />
  </div>
);

const ImpactBadge: React.FC = () => (
  <div className='inline-flex items-center gap-2 mb-10 px-6 py-3 rounded-full backdrop-blur-md' style={{ 
    background: 'linear-gradient(135deg, rgba(91, 111, 255, 0.1), rgba(122, 143, 255, 0.1))',
    border: '1px solid rgba(91, 111, 255, 0.2)',
    boxShadow: '0 0 30px rgba(91, 111, 255, 0.1)'
  }}>
    <div className='w-2 h-2 rounded-full animate-pulse' style={{ background: '#5B6FFF' }} />
    <span className='text-sm font-bold uppercase tracking-widest' style={{ 
      color: '#7A8FFF',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    }}>
      Impacto Real
    </span>
  </div>
);

const StatsSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className={`relative py-40 px-6 overflow-hidden ${isDark ? 'bg-black' : 'bg-white'}`}>
      <HeroText />
      <BackgroundEffects />
      
      <div className='container mx-auto max-w-6xl text-center relative z-10'>
        <ImpactBadge />
        
        <h2 className='text-4xl md:text-6xl font-black mb-6 leading-tight' style={{
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        }}>
          <span className='text-transparent bg-clip-text' style={{
            backgroundImage: isDark 
              ? 'linear-gradient(135deg, #FFFFFF, #E0E0E0)' 
              : 'linear-gradient(135deg, #1F1F1F, #4A4A4A)',
            backgroundSize: '100% 100%'
          }}>
            Conectando tu mundo con
          </span>
        </h2>
        
        <div className='mb-8 relative inline-block'>
          <span className='text-6xl md:text-8xl font-black text-transparent bg-clip-text animate-gradient' style={{ 
            backgroundImage: isDark 
              ? 'linear-gradient(90deg, #5B6FFF 0%, #7A8FFF 25%, #FFFFFF 50%, #7A8FFF 75%, #5B6FFF 100%)' 
              : 'linear-gradient(90deg, #5B6FFF 0%, #7A8FFF 25%, #4A5CFF 50%, #7A8FFF 75%, #5B6FFF 100%)', 
            backgroundSize: '200% 100%',
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          }}>
            velocidad
          </span>
          <div 
            className='absolute inset-0 blur-3xl opacity-40' 
            style={{ 
              background: 'radial-gradient(ellipse, #5B6FFF 0%, #7A8FFF 40%, transparent 70%)',
              zIndex: -1
            }} 
          />
        </div>
        
        <p className='text-xl md:text-2xl mb-16' style={{
          color: isDark ? '#B0B0B0' : '#666666',
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          fontWeight: 300
        }}>
          Internet estable, rápido y confiable para tu hogar o negocio
        </p>

        <div className='grid md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4'>
          <SpeedTestCard />
          <ConnectionCard />
        </div>
      </div>
    </section>
  );
};

export default memo(StatsSection);
