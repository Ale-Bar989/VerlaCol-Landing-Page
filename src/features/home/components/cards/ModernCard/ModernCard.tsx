// ModernCard - Tarjeta moderna con efectos glassmorphism
// Ubicación: src/features/home/components/cards/ModernCard/ModernCard.tsx

import { useTheme } from '@/core/contexts';

type ModernCardProps = {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
};

export const ModernCard: React.FC<ModernCardProps> = ({ children, className = '', icon }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <div className={`relative group h-full ${className}`}>
      {/* Animated border gradient */}
      <div className='absolute inset-0 rounded-3xl p-[2px] bg-linear-to-br from-[#4A5CFF] via-white to-[#7A8FFF] opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
        <div className='h-full w-full rounded-3xl' style={{ background: isDark ? '#000' : '#fff' }} />
      </div>
      
      {/* Card content */}
      <div className='relative h-full rounded-3xl p-8 transition-all duration-500 group-hover:translate-y-[-4px]'
        style={{
          background: isDark 
            ? 'linear-gradient(135deg, rgba(10, 10, 10, 0.95), rgba(0, 0, 0, 0.98))'
            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.98))',
          border: `1px solid rgba(74, 92, 255, ${isDark ? '0.3' : '0.2'})`,
          boxShadow: isDark
            ? '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(74, 92, 255, 0.1), inset 0 2px 4px rgba(255, 255, 255, 0.05)'
            : '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(74, 92, 255, 0.1), inset 0 2px 4px rgba(255, 255, 255, 0.8)',
        }}
      >
        {/* Corner accent */}
        <div className='absolute top-0 right-0 w-32 h-32 opacity-30'>
          <div className='absolute top-0 right-0 w-full h-full bg-linear-to-br from-[#4A5CFF] to-transparent rounded-bl-full' />
        </div>
        
        {/* Icon badge */}
        {icon && (
          <div className='absolute top-6 right-6 w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-sm z-10'
            style={{
              background: isDark
                ? 'linear-gradient(135deg, rgba(74, 92, 255, 0.15), rgba(122, 143, 255, 0.05))'
                : 'linear-gradient(135deg, rgba(74, 92, 255, 0.1), rgba(122, 143, 255, 0.05))',
              border: `1px solid rgba(74, 92, 255, ${isDark ? '0.4' : '0.3'})`,
              boxShadow: '0 8px 32px rgba(74, 92, 255, 0.2)'
            }}
          >
            {icon}
          </div>
        )}
        
        {/* Grid pattern overlay */}
        <div className='absolute inset-0 opacity-[0.02] pointer-events-none rounded-3xl'
          style={{
            backgroundImage: 'linear-gradient(rgba(74, 92, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(74, 92, 255, 0.5) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}
        />
        
        {children}
      </div>
    </div>
  );
};
