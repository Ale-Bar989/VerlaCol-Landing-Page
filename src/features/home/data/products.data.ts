// Datos de productos/servicios para ProductsSection
// Principio de Responsabilidad Única: Solo datos, sin lógica
// Ubicación: src/features/home/data/products.data.ts

import { ROUTES } from "@/core/router/routes.config";

/**
 * Interfaz para producto con colores de glow
 */
interface ProductWithGlow {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  glowColor: {
    start: string;
    mid: string;
    end: string;
  };
}

/**
 * Productos/servicios destacados
 */
export const PRODUCTS: ProductWithGlow[] = [
  {
    id: 1,
    title: "Internet por Fibra Óptica",
    description:
      "Conectividad de última generación para tu hogar y empresa. Muy pronto conocerás nuestras alternativas de navegación asimétrica.",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: ROUTES.SERVICES.FIBRA_RESIDENCIAL,
    glowColor: {
      start: "rgba(91, 111, 255, 0.9)",
      mid: "rgba(122, 143, 255, 0.7)",
      end: "rgba(91, 111, 255, 0.4)",
    },
  },
  {
    id: 2,
    title: "Televisión IP",
    description:
      "El mejor entretenimiento y contenido en un solo lugar. Estamos preparando una parrilla optimizada para tu hogar.",
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: ROUTES.SERVICES.TV_DIGITAL,
    glowColor: {
      start: "rgba(236, 72, 153, 0.9)",
      mid: "rgba(219, 39, 119, 0.7)",
      end: "rgba(236, 72, 153, 0.4)",
    },
  },
  {
    id: 3,
    title: "Planes Empresariales",
    description:
      "Soluciones corporativas diseñadas para la estabilidad y continuidad de tu negocio. Déjanos tus datos para brindarte una consultoría preferencial.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: ROUTES.SERVICES.PLANES_EMPRESARIALES,
    glowColor: {
      start: "rgba(168, 85, 247, 0.9)",
      mid: "rgba(147, 51, 234, 0.7)",
      end: "rgba(168, 85, 247, 0.4)",
    },
  },
  {
    id: 4,
    title: "Soporte Técnico 24/7",
    description:
      "Nuestro compromiso permanente: respaldo técnico y acompañamiento especializado en cada una de tus conexiones.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: ROUTES.CONTACT,
    glowColor: {
      start: "rgba(34, 197, 94, 0.9)",
      mid: "rgba(22, 163, 74, 0.7)",
      end: "rgba(34, 197, 94, 0.4)",
    },
  },
];
