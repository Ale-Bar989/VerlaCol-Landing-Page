// Tipos específicos para la funcionalidad de Pricing
// Principio de Responsabilidad Única: Tipos solo para pricing
// Ubicación: src/features/pricing/types/pricing.types.ts

import type { LucideIcon } from "lucide-react";
import type { ComponentType } from "react";

/**
 * Feature de un plan con icono y texto
 */
export interface PlanFeature {
  icon: LucideIcon;
  text: string;
}

/**
 * Plan de servicio completo
 */
export interface Plan {
  name: string;
  subtitle: string;
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  speed: string;
  speedLabel: string;
  price: string;
  savings?: string;
  features: string[];
  extraInfo?: PlanFeature[];
  buttonText: string;
  highlighted: boolean;
  gradient: string;
  badge?: string;
}

/**
 * Plan simplificado para StatsCard
 */
export interface SimplePlan {
  name: string;
  speed: string;
  price: string;
}
