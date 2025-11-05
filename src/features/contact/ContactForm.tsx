// ContactForm - Formulario de contacto refactorizado (SOLID + DIP + SRP)
// Ubicación: src/features/contact/ContactForm.tsx
// Separación de concerns: UI vs Lógica de negocio
// Usa componentes reutilizables: Button, FormField

import { memo } from "react";
import { AlertCircle, CheckCircle } from "lucide-react";
import { useContactForm } from "@/shared/hooks";
import { Button, FormField } from "@/shared/components";

/**
 * Componente ContactForm refactorizado
 * Implementa Single Responsibility Principle (SRP)
 * Responsabilidad única: Renderizar UI del formulario
 *
 * La lógica de validación, sanitización y manejo de estado
 * está delegada al hook useContactForm
 */
function ContactForm() {
  const {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit,
  } = useContactForm();

  return (
    <div className="mt-8 pt-6 border-t border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Envíanos un mensaje
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Campo Nombre */}
        <FormField
          label="Nombre"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          placeholder="Tu nombre"
          maxLength={50}
          disabled={isSubmitting}
          required
        />

        {/* Campo Email */}
        <FormField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="tu@email.com"
          disabled={isSubmitting}
          required
        />

        {/* Campo Mensaje */}
        <FormField
          fieldType="textarea"
          label="Mensaje"
          name="message"
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          placeholder="Tu mensaje..."
          rows={4}
          maxLength={500}
          disabled={isSubmitting}
          helperText={`${formData.message.length}/500`}
          required
        />

        {/* Mensajes de estado */}
        {submitStatus === "success" && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 text-green-800">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">¡Mensaje enviado exitosamente!</span>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-800">
            <AlertCircle className="w-5 h-5" />
            <span className="font-medium">
              Error al enviar. Inténtalo nuevamente.
            </span>
          </div>
        )}

        {/* Botón de envío */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          loading={isSubmitting}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
        </Button>
      </form>
    </div>
  );
}

export default memo(ContactForm);
