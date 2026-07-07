// Estilos constantes para componentes comunes
// Ubicación: src/ui/components/common/styles/index.ts

export const gradientClasses = {
  blue: 'bg-linear-to-br from-blue-50 to-indigo-100',
  purple: 'bg-linear-to-br from-purple-50 to-pink-100',
  green: 'bg-linear-to-br from-green-50 to-teal-100',
} as const;

export const cardVariantClasses = {
  default: 'shadow-lg',
  elevated: 'shadow-xl',
} as const;

export const backButtonColorClasses = {
  purple: 'text-purple-600 hover:text-purple-800',
  green: 'text-green-600 hover:text-green-800',
  blue: 'text-blue-600 hover:text-blue-800',
} as const;

export const iconBadgeColorClasses = {
  blue: 'bg-blue-100 text-blue-600',
  green: 'bg-green-100 text-green-600',
  purple: 'bg-purple-100 text-purple-600',
  indigo: 'bg-indigo-100 text-indigo-600',
  red: 'bg-red-100 text-red-600',
} as const;

export const iconBadgeSizeClasses = {
  sm: { container: 'w-8 h-8', icon: 'w-4 h-4' },
  md: { container: 'w-12 h-12', icon: 'w-6 h-6' },
  lg: { container: 'w-16 h-16', icon: 'w-8 h-8' },
} as const;
