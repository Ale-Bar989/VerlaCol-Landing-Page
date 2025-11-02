import { memo, useCallback } from 'react';

// Componente ContactForm separado siguiendo responsabilidad única - Optimizado
// Ubicación: src/ui/pages/contact/ContactForm.tsx
function ContactForm() {
  // Memoizar handler para evitar recreación
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar lógica de envío de formulario
    console.log('Formulario enviado');
  }, []);

  return (
    <div className="mt-8 pt-6 border-t border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Envíanos un mensaje
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Tu nombre"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="tu@email.com"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Mensaje
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Tu mensaje..."
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
}

export default memo(ContactForm);
