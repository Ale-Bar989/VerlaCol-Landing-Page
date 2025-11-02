// Tipos para módulo Contact
// Ubicación: src/ui/pages/contact/types.ts

import type { LucideIcon } from 'lucide-react';

export interface ContactInfoProps {
  icon: LucideIcon;
  title: string;
  content: string;
  color: 'blue' | 'green' | 'purple';
}
