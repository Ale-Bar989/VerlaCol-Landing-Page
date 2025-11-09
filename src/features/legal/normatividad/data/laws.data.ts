// Datos de leyes y normativas colombianas
// Principio de Responsabilidad Única: Solo datos, sin lógica
// Ubicación: src/features/legal/normatividad/data/laws.data.ts

/**
 * Interfaz para leyes y normativas
 */
export interface Law {
  title: string;
  subtitle: string;
  description: string;
  link: string;
}

/**
 * Leyes principales que rigen las telecomunicaciones en Colombia
 */
export const MAIN_LAWS: Law[] = [
  {
    title: "Ley 1480 de 2011",
    subtitle: "Estatuto del Consumidor",
    description:
      "Protección de los derechos de los consumidores y establecimiento de responsabilidades de proveedores.",
    link: "#",
  },
  {
    title: "Ley 1341 de 2009",
    subtitle: "TIC en Colombia",
    description:
      "Principios y conceptos sobre la sociedad de la información y organización de las TIC.",
    link: "#",
  },
  {
    title: "Ley 1581 de 2012",
    subtitle: "Protección de Datos Personales",
    description:
      "Régimen general de protección de datos personales y Habeas Data.",
    link: "#",
  },
  {
    title: "Ley 1098 de 2006",
    subtitle: "Código de Infancia y Adolescencia",
    description:
      "Protección integral de los niños, niñas y adolescentes.",
    link: "#",
  },
  {
    title: "Resolución CRC 5050 de 2016",
    subtitle: "Régimen de Protección al Usuario",
    description:
      "Obligaciones de los proveedores de servicios de telecomunicaciones.",
    link: "#",
  },
];
