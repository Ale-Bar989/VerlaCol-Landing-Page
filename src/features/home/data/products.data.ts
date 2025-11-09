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
      "Velocidades ultrarrápidas y conexión estable con nuestra red de fibra óptica de última generación. Ideal para streaming, juegos en línea y teletrabajo.",
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
      "Más de 200 canales en alta definición, contenido bajo demanda y funciones avanzadas como pausar y retroceder en vivo. Disfruta del mejor entretenimiento en un solo lugar.",
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
      "Soluciones de conectividad empresarial con ancho de banda dedicado, IP fija y soporte prioritario. Garantizamos la estabilidad que tu negocio necesita para operar sin interrupciones.",
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
      "Asistencia técnica especializada disponible las 24 horas del día, los 7 días de la semana. Tu conexión siempre activa con nuestro soporte dedicado.",
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
