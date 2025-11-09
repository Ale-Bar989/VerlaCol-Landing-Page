// Datos de planes de pricing
// Principio de Responsabilidad Única: Solo datos, sin lógica
// Ubicación: src/features/pricing/data/plans.data.ts

import {
  Home,
  Users,
  Zap,
  DollarSign,
  Smartphone,
  Tv,
  Gamepad2,
  Briefcase,
  Film,
} from "lucide-react";
import type { Plan, SimplePlan } from "../types/pricing.types";

/**
 * Planes completos de pricing
 */
export const PRICING_PLANS: Plan[] = [
  {
    name: "Plan Hogar",
    subtitle: "1-2 personas",
    icon: Home,
    speed: "300 Mbps",
    speedLabel: "de velocidad simétrica",
    price: "79.900",
    features: [
      "Velocidad simétrica 300 Mbps",
      "100+ canales en HD",
      "1 decodificador incluido",
      "Soporte técnico 24/7",
      "Instalación gratuita",
      "Router WiFi 6 incluido",
    ],
    extraInfo: [
      { icon: Home, text: "Perfecto para hogar" },
      {
        icon: DollarSign,
        text: "El plan más económico sin sacrificar calidad",
      },
      {
        icon: Smartphone,
        text: "Navega, ve series y haz videollamadas sin problemas",
      },
    ],
    buttonText: "Contratar este Plan",
    highlighted: false,
    gradient: "from-[#4A5CFF] to-[#7A8FFF]",
    badge: "Mejor Valor",
  },
  {
    name: "Plan Familia",
    subtitle: "Perfecto para 3-5 personas",
    icon: Users,
    speed: "600 Mbps",
    speedLabel: "de velocidad simétrica",
    price: "119.900",
    savings: "Ahorra $40.000 vs contratar por separado",
    features: [
      "Velocidad simétrica 600 Mbps (descarga y subida)",
      "200+ canales HD, 4K y contenido on-demand",
      "2 decodificadores 4K incluidos",
      "Soporte técnico prioritario 24/7",
      "Instalación profesional gratuita",
      "Router WiFi 6 Dual Band de alta gama",
      "App móvil para ver TV en cualquier dispositivo",
      "Control parental avanzado",
      "Grabación en la nube (50 horas)",
      "Netflix básico incluido por 3 meses",
      "Garantía de velocidad mínima",
      "Sin cargos ocultos ni costos de activación",
    ],
    extraInfo: [
      { icon: Tv, text: "Streaming en múltiples dispositivos" },
      { icon: Zap, text: "Ideal para trabajo remoto y estudio" },
      { icon: Gamepad2, text: "Gaming online sin lag" },
    ],
    buttonText: "Contratar este Plan",
    highlighted: true,
    gradient: "from-[#5B6FFF] via-[#4A5CFF] to-[#7A8FFF]",
    badge: "Recomendado",
  },
  {
    name: "Plan Pro",
    subtitle: "Gamers y pequeños negocios",
    icon: Zap,
    speed: "1000 Mbps",
    speedLabel: "de velocidad simétrica",
    price: "169.900",
    features: [
      "Velocidad simétrica 1000 Mbps",
      "250+ canales HD, 4K y Premium",
      "3 decodificadores incluidos",
      "Soporte técnico VIP 24/7",
      "Instalación gratuita express",
      "Router WiFi 6E Mesh incluido",
      "App móvil premium",
      "IP estática disponible",
      "Configuración para gaming/streaming",
      "Amazon Prime Video por 6 meses",
    ],
    extraInfo: [
      { icon: Zap, text: "Velocidad profesional para gaming competitivo" },
      { icon: Briefcase, text: "Ideal para oficinas en casa y emprendedores" },
      { icon: Film, text: "Streaming 4K simultáneo sin límites" },
      { icon: Zap, text: "Latencia ultra baja para e-sports" },
    ],
    buttonText: "Contratar este Plan",
    highlighted: false,
    gradient: "from-[#7A8FFF] to-[#4A5CFF]",
    badge: "Premium",
  },
];

/**
 * Planes simplificados para StatsCard
 */
export const SIMPLE_PLANS: SimplePlan[] = [
  {
    name: "Plan Hogar",
    speed: "300 Mbps",
    price: "$79.900/mes",
  },
  {
    name: "Plan Familia",
    speed: "600 Mbps",
    price: "$119.900/mes",
  },
  {
    name: "Plan Pro",
    speed: "1000 Mbps",
    price: "$169.900/mes",
  },
];

/**
 * Planes para StatsCard con iconos
 */
export const STATS_CARD_PLANS = [
  {
    name: "Plan Hogar",
    speed: "300 Mbps",
    icon: Home,
    description: "1-2 personas",
  },
  {
    name: "Plan Familia",
    speed: "600 Mbps",
    icon: Users,
    description: "3-5 personas",
  },
  {
    name: "Plan Empresarial",
    speed: "1000 Mbps",
    icon: Briefcase,
    description: "Negocios",
  },
] as const;
