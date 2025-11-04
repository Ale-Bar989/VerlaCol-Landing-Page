// Componente Modal reutilizable con animaciones
// Ubicación: src/shared/components/Modal.tsx

import { X } from 'lucide-react';
import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export function Modal({ isOpen, onClose, children, title }: ModalProps) {
  // Bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Cerrar con tecla Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center p-4"
      style={{
        animation: 'fadeIn 0.3s ease-out',
      }}
    >
      {/* Backdrop con blur */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
        style={{
          animation: 'fadeIn 0.3s ease-out',
        }}
      />

      {/* Modal Container */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-linear-to-br from-gray-900 via-black to-gray-900 border border-white/10 rounded-3xl shadow-2xl"
        style={{
          animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: '0 25px 50px -12px rgba(74, 92, 255, 0.25)',
        }}
      >
        {/* Header */}
        {title && (
          <div className="sticky top-0 z-10 flex items-center justify-between px-8 py-6 bg-black/50 backdrop-blur-xl border-b border-white/10">
            <h2 className="text-2xl font-bold text-white">{title}</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <X className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" strokeWidth={2.5} />
            </button>
          </div>
        )}

        {/* Close button sin título */}
        {!title && (
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group"
          >
            <X className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" strokeWidth={2.5} />
          </button>
        )}

        {/* Content */}
        <div className="p-8">
          {children}
        </div>
      </div>

      {/* Animaciones CSS */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Estilos para el scroll */
        .overflow-y-auto::-webkit-scrollbar {
          width: 8px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #4A5CFF, #7A8FFF);
          border-radius: 10px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #5B6FFF, #8A9FFF);
        }
      `}</style>
    </div>
  );
}
