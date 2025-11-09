// Configuración de errores para NotFound component
// Ubicación: src/shared/components/NotFound/errorConfig.ts
// Responsabilidad única: Definir configuración de errores

import { WifiOff, AlertTriangle, ServerCrash } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ErrorConfig {
  icon: LucideIcon;
  defaultTitle: string;
  defaultDescription: string;
  iconColor: string;
  gradientFrom: string;
  gradientTo: string;
}

export type ErrorCode = 400 | 404 | 500 | 503;

export const ERROR_CONFIGS: Record<ErrorCode, ErrorConfig> = {
  400: {
    icon: WifiOff,
    defaultTitle: "Sin conexión a internet",
    defaultDescription: "Parece que no tienes conexión a internet. Por favor, verifica tu conexión y vuelve a intentarlo.",
    iconColor: "text-orange-500",
    gradientFrom: "from-orange-500",
    gradientTo: "to-red-500",
  },
  404: {
    icon: AlertTriangle,
    defaultTitle: "Oops, página no encontrada",
    defaultDescription: "La página que buscas no existe o ha sido movida. Verifica la URL o regresa al inicio.",
    iconColor: "text-blue-500",
    gradientFrom: "from-blue-500",
    gradientTo: "to-indigo-500",
  },
  500: {
    icon: AlertTriangle,
    defaultTitle: "Error del servidor",
    defaultDescription: "Algo salió mal en nuestros servidores. Estamos trabajando para solucionarlo.",
    iconColor: "text-red-500",
    gradientFrom: "from-red-500",
    gradientTo: "to-pink-500",
  },
  503: {
    icon: ServerCrash,
    defaultTitle: "Servicio temporalmente no disponible",
    defaultDescription: "Nuestros servicios están temporalmente fuera de línea. Por favor, intenta nuevamente en unos minutos.",
    iconColor: "text-yellow-500",
    gradientFrom: "from-yellow-500",
    gradientTo: "to-orange-500",
  },
};
