// Datos de características de Fibra Residencial
// Principio de Responsabilidad Única: Solo datos, sin lógica
// Ubicación: src/features/services/fibra-residencial/data/features.data.ts

import { Zap, ShieldCheck, TrendingUp, Clock } from "lucide-react";
import { DESIGN_SYSTEM } from "@/shared/styles/design-system";
import type { Feature } from "@/shared/types";

/**
 * Características principales de Fibra Residencial
 */
export const FIBRA_FEATURES: Feature[] = [
  {
    icon: Zap,
    title: "Velocidad Simétrica",
    description: "Misma velocidad de subida y bajada hasta 1 Gbps",
    color: DESIGN_SYSTEM.colors.primary,
  },
  {
    icon: ShieldCheck,
    title: "Máxima Estabilidad",
    description: "99.9% uptime garantizado sin interferencias",
    color: DESIGN_SYSTEM.colors.secondary,
  },
  {
    icon: TrendingUp,
    title: "Baja Latencia",
    description: "Ideal para gaming, streaming 4K y videollamadas",
    color: DESIGN_SYSTEM.colors.accent,
  },
  {
    icon: Clock,
    title: "Instalación Rápida",
    description: "Técnicos certificados en 24-48 horas",
    color: DESIGN_SYSTEM.colors.primary,
  },
];

/**
 * Beneficios incluidos en el servicio
 */
export const FIBRA_BENEFITS: string[] = [
  "Router WiFi 6 de última generación",
  "IP pública estática disponible",
  "Sin límite de descarga o consumo",
  "Soporte técnico 24/7",
  "Sin permanencia mínima",
  "Instalación sin costo adicional",
];
