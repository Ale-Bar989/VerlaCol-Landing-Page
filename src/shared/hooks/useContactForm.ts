// Hook para manejar formulario de contacto - Optimizado con DIP + SRP
// Ubicación: src/shared/hooks/useContactForm.ts
// Separa lógica de negocio de la presentación

import { useState, useCallback } from 'react';
import { 
  defaultContactValidator, 
  defaultSanitizer,
  type IValidator,
  type ISanitizer,
  type ContactFormData,
  type ContactFormErrors
} from '@/core/services';

/**
 * Estado de envío del formulario
 */
export type SubmitStatus = 'idle' | 'success' | 'error';

/**
 * Opciones para el hook useContactForm
 */
export interface UseContactFormOptions {
  /** Validador personalizado (opcional) */
  validator?: IValidator<ContactFormData>;
  /** Sanitizador personalizado (opcional) */
  sanitizer?: ISanitizer;
  /** Callback al enviar el formulario */
  onSubmit?: (data: ContactFormData) => Promise<void>;
}

/**
 * Resultado del hook useContactForm
 */
export interface UseContactFormResult {
  formData: ContactFormData;
  errors: ContactFormErrors;
  isSubmitting: boolean;
  submitStatus: SubmitStatus;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  resetForm: () => void;
}

/**
 * Hook para manejar formulario de contacto
 * Implementa Single Responsibility Principle (SRP) y Dependency Inversion (DIP)
 * 
 * @param options - Opciones del hook
 * @returns Estado y handlers del formulario
 * 
 * @example
 * ```tsx
 * const { formData, errors, handleChange, handleSubmit } = useContactForm({
 *   onSubmit: async (data) => {
 *     await fetch('/api/contact', {
 *       method: 'POST',
 *       body: JSON.stringify(data)
 *     });
 *   }
 * });
 * ```
 */
export function useContactForm(options: UseContactFormOptions = {}): UseContactFormResult {
  const {
    validator = defaultContactValidator,
    sanitizer = defaultSanitizer,
    onSubmit
  } = options;

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  /**
   * Maneja cambios en los inputs
   * Sanitiza automáticamente el valor
   */
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Sanitizar el valor
    const sanitizedValue = sanitizer.sanitize(value);
    
    // Actualizar formData
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));

    // Limpiar error del campo al escribir
    if (errors[name as keyof ContactFormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  }, [sanitizer, errors]);

  /**
   * Resetea el formulario
   */
  const resetForm = useCallback(() => {
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    setSubmitStatus('idle');
  }, []);

  /**
   * Maneja el envío del formulario
   */
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar formulario
    const validationErrors = validator.getErrors(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Simular envío si no hay callback
        await new Promise(resolve => setTimeout(resolve, 1500));
      }

      setSubmitStatus('success');
      resetForm();
      
      // Resetear estado después de 3 segundos
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validator, onSubmit, resetForm]);

  return {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit,
    resetForm
  };
}
