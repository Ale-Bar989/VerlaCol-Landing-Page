// Tipos comunes reutilizables en toda la aplicación
// Principio de Responsabilidad Única: Un solo lugar para tipos compartidos
// Ubicación: src/shared/types/common.types.ts

import type { LucideIcon } from "lucide-react";
import type { ReactElement } from "react";

/**
 * Feature genérica con icono, título y descripción
 * Usada en: FeaturesGrid, ServicePages, etc.
 */
export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

/**
 * Feature con lista de características adicionales
 * Usada en: Páginas legales, filtrado, etc.
 */
export interface FeatureWithList extends Feature {
  features: string[];
}

/**
 * Item de categoría con icono y nombre
 * Usada en: TV Digital, categorías de contenido, etc.
 */
export interface CategoryItem {
  icon: LucideIcon;
  name: string;
  color: string;
  description?: string;
}

/**
 * Beneficio con icono y texto
 * Usada en: Listas de beneficios en servicios
 */
export interface BenefitItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

/**
 * Item simple con icono JSX y texto
 * Usada en: Listas de categorías bloqueadas, etc.
 */
export interface IconTextItem {
  icon: ReactElement;
  text: string;
}

/**
 * Slide de carrusel
 * Usada en: HeroSection
 */
export interface SlideData {
  id: number;
  badge: string;
  title: string;
  highlight: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;
}

/**
 * Producto/Servicio
 * Usada en: ProductsSection
 */
export interface ProductData {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  gradient: string;
}

/**
 * Paso de proceso
 * Usada en: ProblemSection, guías paso a paso
 */
export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

/**
 * Colores para temas/variantes
 */
export type ColorVariant = "orange" | "red" | "yellow" | "pink" | "blue" | "green" | "purple";

/**
 * Tipo base para componentes con color personalizado
 */
export interface WithColor {
  color: ColorVariant;
}
