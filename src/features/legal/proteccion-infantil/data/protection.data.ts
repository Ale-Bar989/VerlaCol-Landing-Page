// Datos de medidas de protección infantil
// Principio de Responsabilidad Única: Solo datos, sin lógica
// Ubicación: src/features/legal/proteccion-infantil/data/protection.data.ts

import { Shield, Lock, AlertTriangle, Heart } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * Interfaz para medidas de protección
 */
export interface ProtectionMeasure {
  title: string;
  description: string;
  icon: LucideIcon;
}

/**
 * Medidas de protección activa para menores
 */
export const PROTECTION_MEASURES: ProtectionMeasure[] = [
  {
    title: "Filtrado de Contenido",
    description:
      "Sistema automatizado que bloquea contenido inapropiado para menores",
    icon: Shield,
  },
  {
    title: "Control Parental",
    description:
      "Herramientas para que padres supervisen y gestionen el acceso",
    icon: Lock,
  },
  {
    title: "Verificación de Edad",
    description:
      "Mecanismos robustos para validar la edad de los usuarios",
    icon: AlertTriangle,
  },
  {
    title: "Reporte Inmediato",
    description:
      "Sistema de denuncia rápida ante contenido inadecuado",
    icon: Heart,
  },
];
