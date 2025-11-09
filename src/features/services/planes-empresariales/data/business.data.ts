// Datos de Planes Empresariales
// Principio de Responsabilidad Única: Solo datos, sin lógica
// Ubicación: src/features/services/planes-empresariales/data/business.data.ts

import {
  Zap,
  ShieldCheck,
  Server,
  Headset,
  Clock,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";
import { DESIGN_SYSTEM } from "@/shared/styles/design-system";
import type { Feature, BenefitItem } from "@/shared/types";

/**
 * Características principales de Planes Empresariales
 */
export const BUSINESS_FEATURES: Feature[] = [
  {
    icon: Zap,
    title: "Alta Velocidad Dedicada",
    description:
      "Conexión de hasta 10 Gbps con ancho de banda garantizado para operaciones críticas",
    color: DESIGN_SYSTEM.colors.primary,
  },
  {
    icon: ShieldCheck,
    title: "Seguridad Avanzada",
    description:
      "Firewall empresarial, VPN dedicada y protección DDoS incluida",
    color: DESIGN_SYSTEM.colors.secondary,
  },
  {
    icon: Server,
    title: "Infraestructura Escalable",
    description:
      "Soluciones personalizables que crecen con tu negocio",
    color: DESIGN_SYSTEM.colors.accent,
  },
  {
    icon: Headset,
    title: "Soporte Priorizado",
    description:
      "Asistencia técnica especializada 24/7 con tiempo de respuesta garantizado",
    color: DESIGN_SYSTEM.colors.primary,
  },
  {
    icon: Clock,
    title: "SLA 99.95%",
    description:
      "Acuerdo de nivel de servicio garantizado con compensación por downtime",
    color: DESIGN_SYSTEM.colors.primary,
  },
  {
    icon: Users,
    title: "Soporte Prioritario",
    description:
      "Equipo técnico dedicado disponible 24/7/365 con tiempos de respuesta garantizados",
    color: DESIGN_SYSTEM.colors.secondary,
  },
  {
    icon: TrendingUp,
    title: "Escalabilidad",
    description:
      "Planes flexibles que crecen con tu negocio sin interrupciones",
    color: DESIGN_SYSTEM.colors.accent,
  },
];

/**
 * Beneficios empresariales con iconos
 */
export const BUSINESS_BENEFITS: BenefitItem[] = [
  {
    icon: Award,
    title: "Consultoría Especializada",
    description:
      "Asesoría técnica para optimizar tu infraestructura de red y comunicaciones",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad Integral",
    description:
      "Protección avanzada contra amenazas con firewall de próxima generación",
  },
  {
    icon: Server,
    title: "Infraestructura Dedicada",
    description:
      "Recursos exclusivos para garantizar el máximo rendimiento",
  },
  {
    icon: Headset,
    title: "Soporte VIP",
    description:
      "Gestor de cuenta dedicado y soporte técnico prioritario 24/7",
  },
];

/**
 * Beneficios adicionales incluidos
 */
export const ADDITIONAL_BENEFITS: string[] = [
  "Instalación profesional sin costo",
  "Router empresarial de última generación incluido",
  "Certificaciones de seguridad y cumplimiento",
  "Monitoreo proactivo 24/7 de la red",
  "Reportes detallados de rendimiento",
  "Backup de conectividad opcional",
  "Migración asistida sin interrupciones",
];
