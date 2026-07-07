// Datos de mecanismos de filtrado
// Principio de Responsabilidad Única: Solo datos, sin lógica
// Ubicación: src/features/legal/filtrado/data/filtering.data.ts

import {
  AlertOctagon,
  Sword,
  Pill,
  HeartPulse,
  Bomb,
  ShieldAlert,
  Bug,
  Ban,
  Banknote,
} from "lucide-react";
import type { FeatureWithList } from "@/shared/types/common.types";

/**
 * Tipos de filtrado implementados
 */
export const FILTERING_TYPES: FeatureWithList[] = [
  {
    icon: AlertOctagon,
    title: "Filtrado por Categorías",
    description:
      "Bloqueo automático de categorías completas de contenido dañino",
    features: [
      "Contenido adulto",
      "Violencia explícita",
      "Apuestas en línea",
      "Drogas y sustancias",
    ],
    color: "orange",
  },
  {
    icon: ShieldAlert,
    title: "Filtrado por Palabras Clave",
    description:
      "Sistema que detecta términos específicos en URLs y contenido",
    features: [
      "Base de datos actualizada",
      "Múltiples idiomas",
      "Contexto semántico",
      "Machine learning",
    ],
    color: "red",
  },
  {
    icon: Ban,
    title: "Filtrado DNS",
    description: "Bloqueo a nivel de sistema de nombres de dominio",
    features: [
      "Rapidez de bloqueo",
      "Sin software adicional",
      "Listas actualizadas",
      "Efectivo globalmente",
    ],
    color: "yellow",
  },
  {
    icon: Bug,
    title: "Análisis en Tiempo Real",
    description: "Inspección automática de contenido mediante IA",
    features: [
      "Detección de imágenes",
      "Análisis de video",
      "Contenido generado",
      "Precisión del 98%",
    ],
    color: "pink",
  },
];

/**
 * Categorías de contenido bloqueado (solo iconos)
 */
export const BLOCKED_CATEGORIES_ICONS = [
  AlertOctagon,
  Sword,
  Banknote,
  Pill,
  HeartPulse,
  Bomb,
  ShieldAlert,
  Bug,
  Ban,
] as const;

/**
 * Textos de categorías bloqueadas
 */
export const BLOCKED_CATEGORIES_TEXTS = [
  "Contenido pornográfico",
  "Violencia extrema",
  "Apuestas y juegos de azar",
  "Drogas y sustancias ilegales",
  "Autolesiones y suicidio",
  "Terrorismo y extremismo",
  "Phishing y fraudes",
  "Malware y virus",
  "Contenido discriminatorio",
] as const;
