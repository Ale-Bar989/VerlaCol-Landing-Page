// Tipos para componentes comunes
// Ubicación: src/ui/components/common/types/index.ts

import type { LucideIcon } from 'lucide-react';

export interface IconBadgeProps {
  icon: LucideIcon;
  color?: 'blue' | 'green' | 'purple' | 'indigo' | 'red';
  size?: 'sm' | 'md' | 'lg';
}

export interface LoadingFallbackProps {
  message?: string;
}
