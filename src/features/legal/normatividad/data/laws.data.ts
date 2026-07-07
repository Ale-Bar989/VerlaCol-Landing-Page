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

export interface Agency {
  name: string;
  title: string;
  description: string;
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
    link: "/documents/pdf/Ley_1480_de_2011_Norma.pdf",
  },
  {
    title: "Ley 1341 de 2009",
    subtitle: "TIC en Colombia",
    description:
      "Principios y conceptos sobre la sociedad de la información y organización de las TIC.",
    link: "/documents/pdf/Ley_1341_de_2009_Norma.pdf",
  },
  {
    title: "Ley 1581 de 2012",
    subtitle: "Protección de Datos Personales",
    description:
      "Régimen general de protección de datos personales y Habeas Data.",
    link: "/documents/pdf/Ley_1581_de_2012_Norma.pdf",
  },
  {
    title: "Ley 1098 de 2006",
    subtitle: "Código de Infancia y Adolescencia",
    description:
      "Protección integral de los niños, niñas y adolescentes.",
    link: "/documents/pdf/Ley_1098_de_2006_Norma.pdf",
  },
  {
    title: "Resolución CRC 5050 de 2016",
    subtitle: "Régimen de Protección al Usuario",
    description:
      "Obligaciones de los proveedores de servicios de telecomunicaciones.",
    link: "/documents/pdf/Resolucion_CRC_5050_de_2016_Norma.pdf",
  },
];

export const AGENCIES: Agency[] = [
  {
    name: "CRC",
    title: "Comisión de Regulación de Comunicaciones",
    description: "Regulación del sector de las telecomunicaciones",
  },
  {
    name: "SIC",
    title: "Superintendencia de Industria y Comercio",
    description: "Protección de datos personales y derechos del consumidor",
  },
  {
    name: "MinTIC",
    title: "Ministerio de Tecnologías de la Información",
    description: "Política pública del sector TIC en Colombia",
  },
  {
    name: "ANE",
    title: "Agencia Nacional del Espectro",
    description: "Administración y vigilancia del espectro radioeléctrico",
  },
];
