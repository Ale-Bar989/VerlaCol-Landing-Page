// Button Component - Componente reutilizable con SOLID
// Ubicación: src/shared/components/Button/Button.tsx
// Implementa: SRP (solo renderiza botón), OCP (extensible con variantes)

import { memo, forwardRef } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Loader2 } from 'lucide-react';

/**
 * Variantes del botón
 */
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';

/**
 * Tamaños del botón
 */
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Props del componente Button
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Variante visual del botón */
  variant?: ButtonVariant;
  /** Tamaño del botón */
  size?: ButtonSize;
  /** Si el botón está en estado de carga */
  loading?: boolean;
  /** Icono a la izquierda del texto */
  leftIcon?: ReactNode;
  /** Icono a la derecha del texto */
  rightIcon?: ReactNode;
  /** Ancho completo */
  fullWidth?: boolean;
  /** Children del botón */
  children: ReactNode;
}

/**
 * Estilos base del botón
 */
const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2';

/**
 * Estilos por variante (Open/Closed Principle)
 */
const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-gradient-to-r from-[#4A5CFF] to-[#7A8FFF] text-white hover:scale-[1.02] hover:shadow-lg hover:shadow-[#4A5CFF]/50 focus:ring-[#4A5CFF]',
  secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
  outline: 'border-2 border-[#4A5CFF] text-[#4A5CFF] hover:bg-[#4A5CFF] hover:text-white focus:ring-[#4A5CFF]',
  ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
  danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
};

/**
 * Estilos por tamaño (Open/Closed Principle)
 */
const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

/**
 * Componente Button reutilizable
 * Implementa Single Responsibility Principle (SRP)
 * Implementa Open/Closed Principle (OCP) - Fácil agregar nuevas variantes
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="md" loading={isLoading}>
 *   Enviar
 * </Button>
 * 
 * <Button variant="outline" leftIcon={<Mail />}>
 *   Contactar
 * </Button>
 * ```
 */
export const Button = memo(forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    const classes = [
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      fullWidth ? 'w-full' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={classes}
        {...props}
      >
        {loading && <Loader2 className="w-4 h-4 animate-spin" />}
        {!loading && leftIcon && <span className="inline-flex">{leftIcon}</span>}
        <span>{children}</span>
        {!loading && rightIcon && <span className="inline-flex">{rightIcon}</span>}
      </button>
    );
  }
));

Button.displayName = 'Button';
