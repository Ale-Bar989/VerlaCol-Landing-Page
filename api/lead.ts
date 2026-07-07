/**
 * Serverless Function: Lead Magnet (formulario web → n8n → CRM)
 *
 * Recibe los datos del formulario de la lista de espera (Apartado 2: Planes y Contacto),
 * construye un payload imitando el flujo del agente de voz (Retell) para que el LLM de n8n
 * clasifique el lead igual, y lo reenvía al webhook de Verla con un token secreto.
 *
 * Endpoints:
 *   POST /api/lead  →  reenvía a VERLA_WEBHOOK_URL con header x-verla-token
 *
 * Variables de entorno (configurar en Vercel → Settings → Environment Variables):
 *   - VERLA_WEBHOOK_URL    URL del webhook n8n (ej. https://n8njh.verla.cloud/webhook/verla/crear-lead-llm)
 *   - VERLA_WEBHOOK_TOKEN  Token secreto validado por el flujo n8n (header x-verla-token)
 *
 * Seguridad:
 *   - El token NUNCA se expone al cliente (vive solo en el backend de Vercel).
 *   - Honeypot: campo oculto "website" que los bots rellenan → se descarta silenciosamente.
 *   - Validación mínima: nombre + (teléfono o correo).
 *
 * Adaptación a VERLA (vs. el flujo original "TreeNet/Verlina"):
 *   - Marca/origen: "Formulario Web Verla".
 *   - args.canal = "web" para distinguir leads web de los de voz en el CRM.
 */

import type { VercelRequest, VercelResponse } from "@vercel/node";

/** Campos que el formulario envía desde el cliente. */
interface LeadFormData {
  nombre: string;
  correo?: string;
  telefono?: string;
  ciudad?: string;
  barrio?: string;
  direccion?: string;
  plan?: string;
  observaciones?: string;
  // Honeypot anti-spam: debe ir vacío en envíos humanos.
  website?: string;
}

/**
 * Construye un transcript sintético en lenguaje natural a partir de los campos
 * del formulario, para que el LLM del flujo n8n pueda clasificar intención
 * (caliente/tibio/frío) y enriquecer el lead igual que con una llamada.
 */
function construirTranscript(f: LeadFormData): string {
  const partes: string[] = [
    "Lead capturado por formulario web de Verla (no es una llamada).",
    f.nombre ? `Nombre: ${f.nombre}.` : "",
    [f.direccion, f.barrio, f.ciudad].filter(Boolean).join(", ")
      ? `Ubicación: ${[f.direccion, f.barrio, f.ciudad].filter(Boolean).join(", ")}.`
      : "",
    f.plan ? `Plan de interés: ${f.plan}.` : "",
    f.observaciones ? `Mensaje del cliente: "${f.observaciones}".` : "",
  ];
  return partes.filter(Boolean).join(" ");
}

/** Genera un call_id único por envío para idempotencia (evita duplicados en reintentos). */
function generarCallId(): string {
  const rand = Math.random().toString(36).slice(2, 8);
  return `web-${Date.now()}-${rand}`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Solo aceptamos POST
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, message: "Método no permitido." });
  }

  const webhookUrl = process.env.VERLA_WEBHOOK_URL;
  const webhookToken = process.env.VERLA_WEBHOOK_TOKEN;

  // Validación de configuración del backend
  if (!webhookUrl || !webhookToken) {
    console.error("[api/lead] Faltan variables de entorno VERLA_WEBHOOK_URL o VERLA_WEBHOOK_TOKEN.");
    return res.status(500).json({
      success: false,
      message: "El formulario no está configurado correctamente. Contacta al administrador.",
    });
  }

  const data = (req.body ?? {}) as LeadFormData;

  // Honeypot: si el campo oculto viene relleno, es un bot. Responder 200 silencioso.
  if (data.website && data.website.trim() !== "") {
    return res.status(200).json({ success: true, message: "Gracias." });
  }

  // Validación mínima: nombre + (teléfono o correo)
  const nombre = (data.nombre || "").trim();
  const correo = (data.correo || "").trim().toLowerCase();
  const telefono = (data.telefono || "").replace(/\D/g, "");

  if (!nombre) {
    return res.status(422).json({ success: false, message: "El nombre es obligatorio." });
  }
  if (!telefono && !correo) {
    return res
      .status(422)
      .json({ success: false, message: "Debes indicar al menos un teléfono o un correo." });
  }

  // Payload adaptado al flujo n8n de Verla (mismo formato que el agente de voz).
  const payload = {
    call: {
      call_id: generarCallId(),
      call_type: "web_form",
      agent_name: "Formulario Web Verla",
      call_status: "completed",
      start_timestamp: Date.now(),
      transcript: construirTranscript(data),
    },
    args: {
      nombre,
      telefono,
      correo,
      direccion: (data.direccion || "").trim(),
      barrio: (data.barrio || "").trim(),
      ciudad: (data.ciudad || "").trim(),
      tipo_inmueble: "",
      operador_actual: "",
      necesidad: "",
      plan: (data.plan || "").trim(),
      adicionales: "",
      observaciones: (data.observaciones || "").trim(),
      // Origen del lead: distingue web vs. voz en el CRM.
      canal: "web",
      // Validación posterior por el equipo comercial (el LLM los deja como pendiente_validacion).
      zona_comercial: "",
      precio: "",
      partner_id: null,
    },
  };

  try {
    const upstream = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-verla-token": webhookToken,
      },
      body: JSON.stringify(payload),
    });

    if (!upstream.ok) {
      const texto = await upstream.text().catch(() => "");
      console.error(`[api/lead] El webhook respondió ${upstream.status}: ${texto}`);
      return res.status(502).json({
        success: false,
        message: "No pudimos registrar tu solicitud en este momento. Inténtalo de nuevo.",
      });
    }

    // Intentamos propagar la respuesta del webhook; si no es JSON, respondemos un mensaje genérico.
    const contentType = upstream.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const json = await upstream.json();
      return res.status(200).json({
        success: true,
        message: "¡Gracias! Te contactaremos pronto con beneficios exclusivos de preventa.",
        data: json,
      });
    }

    return res.status(200).json({
      success: true,
      message: "¡Gracias! Te contactaremos pronto con beneficios exclusivos de preventa.",
    });
  } catch (error) {
    console.error("[api/lead] Error al contactar el webhook:", error);
    return res.status(502).json({
      success: false,
      message: "Error de conexión con el servicio de registro. Inténtalo más tarde.",
    });
  }
}
