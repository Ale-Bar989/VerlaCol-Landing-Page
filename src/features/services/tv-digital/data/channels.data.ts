// Datos de TV Digital y canales
// Principio de Responsabilidad Única: Solo datos, sin lógica
// Ubicación: src/features/services/tv-digital/data/channels.data.ts

import {
  Monitor,
  Film,
  Play,
  Calendar,
  Users,
  Star,
  Clapperboard,
  Radio,
  Server,
  Clock,
  Shield,
  Wifi,
} from "lucide-react";
import { DESIGN_SYSTEM } from "@/shared/styles/design-system";
import type { Feature } from "@/shared/types";

/**
 * Características principales de TV Digital
 */
export const TV_FEATURES: Feature[] = [
  {
    icon: Monitor,
    title: "Plataforma IPTV Empresarial",
    description:
      "Solución completa de IPTV para empresas con gestión centralizada y escalable",
    color: DESIGN_SYSTEM.colors.primary,
  },
  {
    icon: Film,
    title: "Catálogo Premium",
    description:
      "Más de 10,000 horas de contenido en múltiples idiomas y géneros",
    color: DESIGN_SYSTEM.colors.secondary,
  },
  {
    icon: Play,
    title: "Video Bajo Demanda",
    description: "Biblioteca en constante actualización con los últimos estrenos",
    color: DESIGN_SYSTEM.colors.accent,
  },
  {
    icon: Calendar,
    title: "Soporte Técnico 24/7",
    description:
      "Asistencia técnica especializada para socios comerciales",
    color: DESIGN_SYSTEM.colors.primary,
  },
  {
    icon: Users,
    title: "Multiplataforma",
    description:
      "Compatible con Smart TVs, móviles, tablets y decodificadores",
    color: DESIGN_SYSTEM.colors.secondary,
  },
  {
    icon: Star,
    title: "Contenido Exclusivo",
    description:
      "Eventos en vivo, deportes y canales internacionales premium",
    color: DESIGN_SYSTEM.colors.accent,
  },
];

/**
 * Categorías de canales disponibles
 */
export const CHANNEL_CATEGORIES = [
  {
    icon: Film,
    name: "Películas y Series",
    channels: [
      "HBO",
      "FOX",
      "Warner",
      "Universal",
      "Sony",
      "AXN",
      "FX",
      "TNT",
    ],
    color: DESIGN_SYSTEM.colors.primary,
  },
  {
    icon: Clapperboard,
    name: "Deportes",
    channels: [
      "ESPN",
      "Fox Sports",
      "DirecTV Sports",
      "Win Sports",
      "TNT Sports",
      "Golf Channel",
    ],
    color: DESIGN_SYSTEM.colors.secondary,
  },
  {
    icon: Radio,
    name: "Noticias e Información",
    channels: [
      "CNN",
      "BBC",
      "Discovery",
      "History",
      "National Geographic",
      "TLC",
    ],
    color: DESIGN_SYSTEM.colors.accent,
  },
  {
    icon: Users,
    name: "Entretenimiento Familiar",
    channels: [
      "Disney",
      "Nickelodeon",
      "Cartoon Network",
      "Disney Jr",
      "Nick Jr",
      "Baby TV",
    ],
    color: DESIGN_SYSTEM.colors.primary,
  },
] as const;

/**
 * Soluciones mayoristas incluidas
 */
export const WHOLESALE_SOLUTIONS: string[] = [
  "Panel de control empresarial completo",
  "Sistema de facturación integrado",
  "Gestión de usuarios y permisos",
  "Soporte multi-idioma",
  "Análisis y reportes avanzados",
  "Integración con sistemas de pago",
  "Soporte técnico dedicado",
  "Actualizaciones regulares de seguridad",
];

/**
 * Ventajas técnicas (iconos como componentes)
 */
export const TECHNICAL_ADVANTAGES_ICONS = [
  Server,
  Clock,
  Shield,
  Wifi,
] as const;

/**
 * Ventajas técnicas (datos)
 */
export const TECHNICAL_ADVANTAGES_DATA = [
  {
    title: "Infraestructura Sólida",
    description: "Red de servidores de alto rendimiento con balanceo de carga",
  },
  {
    title: "Alta Disponibilidad",
    description: "99.9% de tiempo de actividad garantizado",
  },
  {
    title: "Seguridad Avanzada",
    description: "Protección contra IP Leeching y restricción por IP",
  },
  {
    title: "Ancho de Banda Ilimitado",
    description: "Sin restricciones de tráfico para tus clientes",
  },
] as const;
