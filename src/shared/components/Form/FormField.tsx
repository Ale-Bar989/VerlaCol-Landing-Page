// FormField Component - Campo de formulario reutilizable con SOLID
// Ubicación: src/shared/components/Form/FormField.tsx
// Implementa: SRP (solo renderiza campo), OCP (extensible con tipos)

import { memo, forwardRef } from 'react';
import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { AlertCircle } from 'lucide-react';

/**
 * Tipo de campo
 */
export type FieldType = 'input' | 'textarea';

/**
 * Props base del FormField
 */
interface BaseFormFieldProps {
  /** Label del campo */
  label: string;
  /** Mensaje de error */
  error?: string;
  /** Texto de ayuda */
  helperText?: string;
  /** Si el campo es requerido */
  required?: boolean;
  /** Tipo de campo */
  fieldType?: FieldType;
}

/**
 * Props para input
 */
export interface InputFieldProps
  extends BaseFormFieldProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  fieldType?: 'input';
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
}

/**
 * Props para textarea
 */
export interface TextareaFieldProps
  extends BaseFormFieldProps,
    TextareaHTMLAttributes<HTMLTextAreaElement> {
  fieldType: 'textarea';
}

/**
 * Props del FormField (union type)
 */
export type FormFieldProps = InputFieldProps | TextareaFieldProps;

/**
 * Estilos base del campo
 */
const baseInputStyles =
  'w-full px-4 py-2 border rounded-lg focus:ring-2 focus:border-transparent transition-colors';

/**
 * Estilos según estado
 */
const getInputStyles = (hasError: boolean) => {
  if (hasError) {
    return `${baseInputStyles} border-red-500 focus:ring-red-500`;
  }
  return `${baseInputStyles} border-gray-300 focus:ring-green-500`;
};

/**
 * Componente FormField reutilizable
 * Implementa Single Responsibility Principle (SRP)
 * Implementa Open/Closed Principle (OCP) - Fácil agregar nuevos tipos
 * 
 * @example
 * ```tsx
 * <FormField
 *   label="Email"
 *   name="email"
 *   type="email"
 *   value={email}
 *   onChange={handleChange}
 *   error={errors.email}
 *   required
 * />
 * 
 * <FormField
 *   fieldType="textarea"
 *   label="Mensaje"
 *   name="message"
 *   value={message}
 *   onChange={handleChange}
 *   rows={4}
 *   helperText="Máximo 500 caracteres"
 * />
 * ```
 */
export const FormField = memo(
  forwardRef<HTMLInputElement | HTMLTextAreaElement, FormFieldProps>(
    (props, ref) => {
      const {
        label,
        error,
        helperText,
        required = false,
        fieldType = 'input',
        className = '',
        ...fieldProps
      } = props;

      const hasError = Boolean(error);
      const inputStyles = `${getInputStyles(hasError)} ${className}`;

      // ID único para accesibilidad
      const fieldId = fieldProps.id || fieldProps.name || `field-${Math.random()}`;

      return (
        <div className="w-full">
          {/* Label */}
          <label
            htmlFor={fieldId}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {label} {required && <span className="text-red-500">*</span>}
            {helperText && !error && (
              <span className="text-xs text-gray-500 ml-2">
                {helperText}
              </span>
            )}
          </label>

          {/* Input o Textarea */}
          {fieldType === 'textarea' ? (
            <textarea
              ref={ref as React.Ref<HTMLTextAreaElement>}
              id={fieldId}
              className={inputStyles}
              aria-invalid={hasError}
              aria-describedby={hasError ? `${fieldId}-error` : undefined}
              {...(fieldProps as TextareaHTMLAttributes<HTMLTextAreaElement>)}
            />
          ) : (
            <input
              ref={ref as React.Ref<HTMLInputElement>}
              id={fieldId}
              className={inputStyles}
              aria-invalid={hasError}
              aria-describedby={hasError ? `${fieldId}-error` : undefined}
              {...(fieldProps as InputHTMLAttributes<HTMLInputElement>)}
            />
          )}

          {/* Error Message */}
          {error && (
            <p
              id={`${fieldId}-error`}
              className="mt-1 text-sm text-red-600 flex items-center gap-1"
              role="alert"
            >
              <AlertCircle className="w-4 h-4" />
              {error}
            </p>
          )}
        </div>
      );
    }
  )
);

FormField.displayName = 'FormField';
