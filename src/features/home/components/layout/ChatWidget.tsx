import { memo } from 'react';
import { Sparkles } from 'lucide-react';

// Chat widget component with button and floating chat interface
// Ubicación: src/ui/pages/home/components/ChatWidget.tsx

interface ChatWidgetProps {
  isOpen: boolean;
  onToggle: () => void;
}

function ChatWidget({ isOpen, onToggle }: ChatWidgetProps) {
  return (
    <>
      {/* Botón de Chat flotante moderno */}
      <button 
        onClick={onToggle}
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Abrir chat"
      >
        <div className="relative">
          {/* Badge de notificación */}
          {!isOpen && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-bounce">
              1
            </div>
          )}
          
          {/* Círculo principal con gradiente azul moderno */}
          <div 
            className="relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #4A5CFF 0%, #FFFFFF 100%)',
              boxShadow: '0 10px 30px rgba(74, 92, 255, 0.5), 0 0 20px rgba(74, 92, 255, 0.3)',
              willChange: 'transform'
            }}
          >
            {/* Efecto ping de fondo azul */}
            {!isOpen && <div className="absolute -inset-2 rounded-full animate-ping" style={{ background: 'rgba(74, 92, 255, 0.4)' }} />}
            
            {/* Icono de chat o X con estilo mejorado */}
            {isOpen ? (
              <svg className="w-7 h-7 relative z-10" fill="none" viewBox="0 0 24 24" stroke="#5B6FFF" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7 relative z-10" fill="none" viewBox="0 0 24 24" stroke="#5B6FFF" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            )}
          </div>

          {/* Tooltip en hover mejorado */}
          {!isOpen && (
            <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div 
                className="px-4 py-2 rounded-xl shadow-2xl text-sm font-bold whitespace-nowrap backdrop-blur-sm"
                style={{
                  background: 'linear-gradient(135deg, #4A5CFF, #7A8FFF)',
                  boxShadow: '0 10px 30px rgba(74, 92, 255, 0.4)'
                }}
              >
                <span className="text-white">¿Necesitas ayuda?</span>
                <div className="absolute top-full right-4 -mt-1 border-4 border-transparent" style={{ borderTopColor: '#4A5CFF' }} />
              </div>
            </div>
          )}
        </div>
      </button>

      {/* Chat Widget con animación suave */}
      <div 
        className={`fixed bottom-24 right-6 z-40 transition-all duration-500 ease-out ${
          isOpen 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-8 scale-95 pointer-events-none'
        }`}
        style={{ willChange: 'transform, opacity' }}
      >
        <div className="w-96 h-[500px] bg-black/95 backdrop-blur-xl border border-[#5B6FFF]/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden" style={{ boxShadow: '0 20px 60px rgba(74, 92, 255, 0.3)' }}>
          {/* Chat Header con gradiente azul */}
          <div className="p-4 flex items-center justify-between" style={{ background: 'linear-gradient(135deg, #5B6FFF, #7A8FFF, #4A5CFF)' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Soporte VerlaCol</h3>
                <p className="text-xs text-white/80">Estamos aquí para ayudarte</p>
              </div>
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {/* Mensaje del sistema */}
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-[#5B6FFF]/20 rounded-full flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-[#4A5CFF]" />
              </div>
              <div className="flex-1">
                <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-3">
                  <p className="text-sm text-gray-300">
                    ¡Hola! 👋 Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?
                  </p>
                </div>
                <span className="text-xs text-gray-500 mt-1 block">Ahora</span>
              </div>
            </div>

            {/* Opciones rápidas */}
            <div className="space-y-2">
              <p className="text-xs text-gray-500 font-medium">Respuestas rápidas:</p>
              <button className="w-full text-left bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-3 transition-all duration-300 group">
                <p className="text-sm text-gray-300 group-hover:text-white">💼 ¿Cómo empezar con VerlaCol?</p>
              </button>
              <button className="w-full text-left bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-3 transition-all duration-300 group">
                <p className="text-sm text-gray-300 group-hover:text-white">💰 Ver planes y precios</p>
              </button>
              <button className="w-full text-left bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-3 transition-all duration-300 group">
                <p className="text-sm text-gray-300 group-hover:text-white">🤝 Hablar con un experto</p>
              </button>
            </div>
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Escribe tu mensaje..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#4A5CFF] focus:ring-1 focus:ring-[#4A5CFF] transition-all"
              />
              <button className="rounded-xl px-4 py-2 hover:opacity-90 transition-all hover:scale-105" style={{ background: 'linear-gradient(135deg, #4A5CFF, #FFFFFF)' }}>
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Memoizar para evitar re-renders innecesarios
export default memo(ChatWidget);
