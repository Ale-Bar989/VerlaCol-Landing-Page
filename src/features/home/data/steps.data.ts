// Datos de pasos del proceso para ProblemSection
// Principio de Responsabilidad Única: Solo datos, sin lógica
// Ubicación: src/features/home/data/steps.data.ts

import type { ProcessStep } from "@/shared/types";

/**
 * Pasos del proceso de contratación
 */
export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: "Contáctanos",
    description: "Comunícate con nosotros para conocer tu necesidad",
  },
  {
    number: 2,
    title: "Consulta",
    description: "Revisamos opciones para resolver tus dudas",
  },
  {
    number: 3,
    title: "Realiza el pedido",
    description: "Elige el servicio ideal y procede",
  },
  {
    number: 4,
    title: "Pago",
    description: "Completa el pago de forma segura en todos los bancos",
  },
];
