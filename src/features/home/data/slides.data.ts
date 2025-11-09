// Datos de slides para HeroSection
// Principio de Responsabilidad Única: Solo datos, sin lógica
// Ubicación: src/features/home/data/slides.data.ts

import { Wifi, Tv, Zap, Rocket } from "lucide-react";
import { ROUTES } from "@/core/router/routes.config";
import type { SlideData } from "@/shared/types";

/**
 * Slides del Hero Section
 */
export const HERO_SLIDES: SlideData[] = [
  {
    id: 1,
    badge: "Especial",
    title: "Conectividad Premium",
    highlight: "Fibra Óptica",
    subtitle: "Velocidad simétrica sin límites",
    description: "La mejor conexión de fibra óptica para tu hogar o negocio",
    ctaText: "Ver Planes",
    ctaLink: ROUTES.PRICING,
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2340&auto=format&fit=crop",
  },
  {
    id: 2,
    badge: "TV Premium",
    title: "Entretenimiento Sin Límites",
    highlight: "TV 4K",
    subtitle: "200+ canales en alta definición",
    description: "Disfruta del mejor contenido en calidad 4K",
    ctaText: "Ver Canales",
    ctaLink: ROUTES.LEGAL.COMPARADOR_TARIFAS,
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=2340&auto=format&fit=crop",
  },
  {
    id: 3,
    badge: "FTTH",
    title: "Velocidad Extrema",
    highlight: "Hasta 1 Gbps",
    subtitle: "La mejor conexión disponible",
    description: "Tecnología de fibra hasta tu hogar",
    ctaText: "Contratar Ahora",
    ctaLink: ROUTES.CONTACT,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2340&auto=format&fit=crop",
  },
];

/**
 * Iconos para los slides (en el mismo orden)
 */
export const HERO_SLIDES_ICONS = [Wifi, Tv, Zap] as const;

/**
 * Iconos para badges (en el mismo orden)
 */
export const HERO_SLIDES_BADGE_ICONS = [Rocket, Tv, Zap] as const;

/**
 * Colores de badges (en el mismo orden)
 */
export const HERO_SLIDES_BADGE_COLORS = [
  "#0000",
  "#7A8FFF",
  "#4A5CFF",
] as const;

/**
 * Gradientes para cada slide (en el mismo orden)
 */
export const HERO_SLIDES_GRADIENTS = [
  "linear-gradient(135deg, #5B6FFF, #7A8FFF, #4A5CFF)",
  "linear-gradient(135deg, #7A8FFF, #4A5CFF, #5B6FFF)",
  "linear-gradient(135deg, #4A5CFF, #FFFFFF, #7A8FFF)",
] as const;

/**
 * Textos secundarios de CTA (en el mismo orden)
 */
export const HERO_SLIDES_SECONDARY_CTA = [
  "Consultar Cobertura",
  "Planes TV",
  "Ver Beneficios",
] as const;
