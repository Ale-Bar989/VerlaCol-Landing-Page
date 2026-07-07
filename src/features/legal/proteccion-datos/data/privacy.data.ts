// Datos de protección de datos personales
// Principio de Responsabilidad Única: Solo datos, sin lógica
// Ubicación: src/features/legal/proteccion-datos/data/privacy.data.ts

import { FileCheck, Eye, UserCheck, Lock } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * Interfaz para principios de tratamiento de datos
 */
export interface DataPrinciple {
  title: string;
  description: string;
  icon: LucideIcon;
}

/**
 * Principios de tratamiento de datos personales
 */
export const DATA_PRINCIPLES: DataPrinciple[] = [
  {
    title: "Legalidad",
    description:
      "Tratamiento conforme a la constitución y la ley colombiana",
    icon: FileCheck,
  },
  {
    title: "Finalidad",
    description:
      "Uso solo para propósitos legítimos e informados previamente",
    icon: Eye,
  },
  {
    title: "Libertad",
    description:
      "Recopilación con consentimiento previo, expreso e informado",
    icon: UserCheck,
  },
  {
    title: "Seguridad",
    description:
      "Medidas técnicas y administrativas para proteger tus datos",
    icon: Lock,
  },
];
