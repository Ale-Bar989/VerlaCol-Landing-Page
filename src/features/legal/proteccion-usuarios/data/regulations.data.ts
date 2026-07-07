// Datos de normativas de protección al usuario
// Principio de Responsabilidad Única: Solo datos, sin lógica
// Ubicación: src/features/legal/proteccion-usuarios/data/regulations.data.ts

/**
 * Interfaz para documentos normativos
 */
export interface Regulation {
  name: string;
  path: string;
}

/**
 * Normativas columna 1
 */
export const REGULATIONS_COLUMN_1: Regulation[] = [
  { name: "Ley 679 de 2001", path: "/documents/pdf/ley_679_2001.pdf" },
  { name: "Acuerdo 011 de 2006", path: "/documents/pdf/acuerdo011-2006.pdf" },
  { name: "Ley 1480 de 2011", path: "/documents/pdf/ley1480.pdf" },
  {
    name: "Régimen de protección de usuarios. Resolución 5111 de 2017",
    path: "/documents/pdf/00005111.pdf",
  },
  {
    name: "Decreto 90 del 18 de Enero de 2018",
    path: "/documents/pdf/decreto_90_del_18_enero_de_2018.pdf",
  },
  {
    name: "Resolución CRC 6890 de 2022",
    path: "/documents/pdf/resolucion-crc-6890-de-2022.pdf",
  },
];

/**
 * Normativas columna 2
 */
export const REGULATIONS_COLUMN_2: Regulation[] = [
  {
    name: "Resolución CRC 5299 de 2018",
    path: "/documents/pdf/resolucion_crc_5299_de_2018.pdf",
  },
  {
    name: "Resolución CRC 5300 de 2018",
    path: "/documents/pdf/resolucion_crc_5300_de_2018.pdf",
  },
  {
    name: "Resolución CRC 5321 de 2018",
    path: "/documents/pdf/resolucion_crc_5321_de_2018.pdf",
  },
  {
    name: "Resolución CRC 6242 de 2021",
    path: "/documents/pdf/resolucion-crc-6242-de-2021.pdf",
  },
  {
    name: "Resolución CRC 5337 de 2018",
    path: "/documents/pdf/resolucion_crc_5337_de_2018.pdf",
  },
  {
    name: "Resolución CRC 5344 de 2018",
    path: "/documents/pdf/resolucion_crc_5344_de_2018.pdf",
  },
  {
    name: "Resolución CRC 6333 de 2021",
    path: "/documents/pdf/resolucion-crc-6333-de--2021.pdf",
  },
];

/**
 * Normativas columna 3
 */
export const REGULATIONS_COLUMN_3: Regulation[] = [
  {
    name: "Resolución CRC 5397 de 2018",
    path: "/documents/pdf/resolucion_crc_5397_de_2018.pdf",
  },
  {
    name: "Resolución CRC 5322 de 2018",
    path: "/documents/pdf/resolucion_crc_5321_de_2018.pdf",
  },
  {
    name: "Resolución 5930 de 2020",
    path: "/documents/pdf/resolucion-5930-de-2020.pdf",
  },
  {
    name: "Resolución 19012 2020",
    path: "/documents/pdf/resolucion19012-de2020.pdf",
  },
  {
    name: "Art. 6 Ley 1266 de 2008",
    path: "/documents/pdf/articulo-6-de-la-ley-1266-de-2008.pdf",
  },
  {
    name: "Art. 16 Ley 1266 de 2008",
    path: "/documents/pdf/articulo-16-de-la-ley-1266-de-2008.pdf",
  },
];
