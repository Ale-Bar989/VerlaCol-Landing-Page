// Datos de capas de seguridad
// Principio de Responsabilidad Única: Solo datos, sin lógica
// Ubicación: src/features/legal/seguridad/data/security.data.ts

import { Shield, Eye, Lock, AlertTriangle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * Interfaz para capas de seguridad
 */
export interface SecurityLayer {
  layer: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  color: string;
}

/**
 * Capas de protección de seguridad
 */
export const SECURITY_LAYERS: SecurityLayer[] = [
  {
    layer: "Capa 1: Perímetro de Red",
    description:
      "Firewall de última generación con DPI (Deep Packet Inspection)",
    features: [
      "Firewall avanzado",
      "Anti-DDoS",
      "IPS/IDS",
      "Traffic shaping",
    ],
    icon: Shield,
    color: "blue",
  },
  {
    layer: "Capa 2: Protección de Contenido",
    description:
      "Filtrado web y protección contra malware en tiempo real",
    features: [
      "Antivirus en red",
      "Anti-phishing",
      "Anti-malware",
      "Sandboxing",
    ],
    icon: Eye,
    color: "blue",
  },
  {
    layer: "Capa 3: Encriptación",
    description:
      "Cifrado de extremo a extremo de todas las comunicaciones",
    features: [
      "TLS 1.3",
      "VPN disponible",
      "DNS encriptado",
      "HTTPS forzado",
    ],
    icon: Lock,
    color: "blue",
  },
  {
    layer: "Capa 4: Monitoreo 24/7",
    description:
      "Centro de operaciones de seguridad vigilando constantemente",
    features: [
      "SOC activo",
      "Análisis de amenazas",
      "Respuesta rápida",
      "Alertas automáticas",
    ],
    icon: AlertTriangle,
    color: "blue",
  },
];
