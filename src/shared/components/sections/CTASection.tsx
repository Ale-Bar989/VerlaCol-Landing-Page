import { ArrowRight } from 'lucide-react';
import { useLocalTheme } from '@/shared/hooks/useLocalTheme';

// CTA Section reutilizable para páginas
// Ubicación: src/shared/components/CTASection.tsx

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
  onButtonClick?: () => void;
}

export default function CTASection({ 
  title, 
  description, 
  buttonText,
  buttonLink = '/contact',
  onButtonClick
}: CTASectionProps) {
  const { isDark } = useLocalTheme();

  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      window.location.href = buttonLink;
    }
  };

  return (
    <section className={`relative flex items-center justify-center min-h-[60vh] py-16 px-6 overflow-hidden ${isDark ? 'bg-gray-950' : 'bg-linear-to-br from-gray-50 to-white'}`}>
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl" 
          style={{ backgroundColor: isDark ? '#5B6FFF0D' : '#5B6FFF05' }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl" 
          style={{ backgroundColor: isDark ? '#7A8FFF0D' : '#7A8FFF05' }}
        />
      </div>

      <div className="w-full max-w-5xl relative z-10">
        <div 
          className="relative p-8 md:p-12 lg:p-16 rounded-3xl overflow-hidden mx-auto"
          style={{
            background: isDark 
              ? 'linear-gradient(135deg, rgba(91, 111, 255, 0.1), rgba(74, 92, 255, 0.15))' 
              : 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.98))',
            border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
            boxShadow: isDark 
              ? '0 20px 40px -10px rgba(0, 0, 0, 0.25)'
              : '0 20px 40px -10px rgba(0, 0, 0, 0.05)',
            backdropFilter: 'blur(8px)',
            transform: 'translateZ(0)',
            maxWidth: '90vw',
            width: '100%'
          }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 -ml-32 -mb-32 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          
          <div className="relative z-10 text-center">
            <h2 className={`text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent mx-auto ${isDark ? 'bg-linear-to-r from-white to-blue-100' : 'bg-linear-to-br from-gray-50 to-white'}`}>
              {title}
            </h2>
            
            <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-10 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {description}
            </p>
            
            <div className="flex justify-center">
              <button
                onClick={handleClick}
                className={`group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full transition-all duration-500 overflow-hidden ${
                  isDark 
                    ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20' 
                    : 'bg-linear-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                <span className={`relative z-10 flex items-center`}>
                  {buttonText}
                  <ArrowRight className="ml-3 w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
