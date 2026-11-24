// Datos institucionales del Portal Corporativo VERLA
// Fuente: Especificación de Rediseño Web - Portal Institucional VERLA

export const EXTERNAL_LINKS = {
  TREENET: "https://www.treenet.com.co",
  TREENET_BLOG: "https://www.treenet.com.co/blog",
} as const;

export interface ExecutiveProfile {
  id: string;
  role: string;
  name: string;
  image: string;
  bio: string;
  featured?: boolean;
}

export const LEADERSHIP_TEAM: ExecutiveProfile[] = [
  {
    id: "ximena-mora",
    role: "CEO",
    name: "Ximena Mora",
    image: "/images/institucional/ceo-ximena-mora.png",
    featured: true,
    bio: "Reconocida por su sólida experiencia de más de 28 años en el sector de las tecnologías de la información y telecomunicaciones (TIC), su habilidad comprobada en la construcción de negocios, crecimiento de mercados, liderazgo y alineación de equipos diversos con metas ambiciosas. Es Ingeniera Eléctrica de la Universidad del Norte de Barranquilla, Máster en Ingeniería Eléctrica (MSc) de la Universidad de los Andes, con formación complementaria en alta dirección empresarial del INALDE - Universidad de la Sabana (PADE y PID), Dirección de Personas de la Universidad Javeriana, entre otras.",
  },
  {
    id: "sebastian-mendoza",
    role: "CFO",
    name: "Sebastián Mendoza",
    image: "/images/institucional/cfo-sebastian-mendoza.png",
    bio: "Asume este liderazgo aportando una sólida trayectoria en Finanzas Corporativas, Estrategia, Asignación de Capital e Infraestructura & Energía. Su perfil como Chief Financial Officer y miembro de junta directiva, sumado a su destacada formación en la Universidad de Los Andes y su experiencia en empresas referentes como Inversiones de Gases de Colombia S.A., será una pieza clave para impulsar nuestro crecimiento y consolidar la gestión financiera de la compañía.",
  },
  {
    id: "john-ospina",
    role: "CMCO",
    name: "John Ospina",
    image: "/images/institucional/cmco-john-ospina.png",
    bio: "Su destacada trayectoria de más de 20 años en el sector de las telecomunicaciones y su sólida experiencia en la expansión de redes de fibra óptica (FTTH), la gestión de aliados comerciales y el desarrollo de canales B2C y Pymes serán piezas clave para consolidar la presencia de Verla S.A.S. en las regiones donde operamos y acelerar nuestros planes de crecimiento e infraestructura.",
  },
  {
    id: "guillermo-holguin",
    role: "CTIO",
    name: "Guillermo Holguín",
    image: "/images/institucional/ctio-guillermo-holguin.png",
    bio: "Es Ingeniero egresado de la Universidad del Cauca y cuenta con una destacada trayectoria como consultor estratégico en telecomunicaciones y tecnología. Su experiencia liderando arquitecturas tecnológicas complejas y su visión orientada a la transformación digital serán claves para llevar nuestra infraestructura y soluciones al siguiente nivel.",
  },
  {
    id: "joel-vasquez",
    role: "COO",
    name: "Joel Vásquez",
    image: "/images/institucional/coo-joel-vasquez.png",
    bio: "Con más de 17 años de trayectoria en la industria de telecomunicaciones en Colombia y Venezuela, Joel lidera la operación con un enfoque clave en el diseño, construcción y expansión de infraestructuras tecnológicas de alta complejidad. Su liderazgo y capacidad técnica son fundamentales para llevar nuestras operaciones al siguiente nivel.",
  },
];

export const CORPORATE_VALUES = [
  {
    id: "compromiso",
    title: "Compromiso con el desarrollo nacional",
    description:
      "Llevamos conectividad confiable a municipios intermedios y regiones donde otros no llegan.",
  },
  {
    id: "innovacion",
    title: "Innovación continua",
    description:
      "Integramos redes con agilidad y adoptamos tecnologías FTTH de última generación.",
  },
  {
    id: "integridad",
    title: "Integridad",
    description:
      "Actuamos con transparencia, ética corporativa y cumplimiento estricto en cada operación.",
  },
  {
    id: "excelencia",
    title: "Excelencia técnica",
    description:
      "Ingeniería propia orientada a la estabilidad, velocidad real y continuidad operativa nacional.",
  },
] as const;

export const CONTACT_AREAS = [
  "Gestión de Talento",
  "Infraestructura y Proyectos",
  "Proveedores y Alianzas",
  "Inversionistas",
  "Contacto Institucional",
] as const;
