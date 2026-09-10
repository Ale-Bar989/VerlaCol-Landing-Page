import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load .env.local or .env if present
for (const envFile of [".env.local", ".env.production", ".env"]) {
  const fullPath = path.join(__dirname, envFile);
  if (fs.existsSync(fullPath)) {
    try {
      process.loadEnvFile(fullPath);
      break;
    } catch {}
  }
}

const PORT = parseInt(process.env.PORT || "3001", 10);

function construirTranscript(f) {
  const partes = [
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

function generarCallId() {
  const rand = Math.random().toString(36).slice(2, 8);
  return `web-${Date.now()}-${rand}`;
}

async function handleLead(req, res) {
  if (req.method !== "POST") {
    res.writeHead(405, { "Content-Type": "application/json", Allow: "POST" });
    return res.end(JSON.stringify({ success: false, message: "Método no permitido." }));
  }

  const webhookUrl = process.env.VERLA_WEBHOOK_URL;
  const webhookToken = process.env.VERLA_WEBHOOK_TOKEN;

  if (!webhookUrl || !webhookToken) {
    console.error("[api/lead] Faltan variables VERLA_WEBHOOK_URL o VERLA_WEBHOOK_TOKEN.");
    res.writeHead(500, { "Content-Type": "application/json" });
    return res.end(
      JSON.stringify({
        success: false,
        message: "El formulario no está configurado correctamente. Contacta al administrador.",
      })
    );
  }

  let bodyText = "";
  for await (const chunk of req) {
    bodyText += chunk;
    if (bodyText.length > 1e6) {
      res.writeHead(413, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ success: false, message: "Payload demasiado grande." }));
    }
  }

  let data = {};
  try {
    data = JSON.parse(bodyText || "{}");
  } catch {
    res.writeHead(400, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ success: false, message: "JSON inválido." }));
  }

  if (data.website && data.website.trim() !== "") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ success: true, message: "Gracias." }));
  }

  const nombre = (data.nombre || "").trim();
  const correo = (data.correo || "").trim().toLowerCase();
  const telefono = (data.telefono || "").replace(/\D/g, "");

  if (!nombre) {
    res.writeHead(422, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ success: false, message: "El nombre es obligatorio." }));
  }
  if (!telefono && !correo) {
    res.writeHead(422, { "Content-Type": "application/json" });
    return res.end(
      JSON.stringify({
        success: false,
        message: "Debes indicar al menos un teléfono o un correo.",
      })
    );
  }

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
      canal: "web",
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
        "x-api-key": webhookToken,
      },
      body: JSON.stringify(payload),
    });

    if (!upstream.ok) {
      const texto = await upstream.text().catch(() => "");
      console.error(`[api/lead] Webhook respondió ${upstream.status}: ${texto}`);
      res.writeHead(502, { "Content-Type": "application/json" });
      return res.end(
        JSON.stringify({
          success: false,
          message: "No pudimos registrar tu solicitud en este momento. Inténtalo de nuevo.",
        })
      );
    }

    const contentType = upstream.headers.get("content-type") || "";
    let upstreamData = undefined;
    if (contentType.includes("application/json")) {
      upstreamData = await upstream.json().catch(() => undefined);
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(
      JSON.stringify({
        success: true,
        message: "¡Gracias! Te contactaremos pronto con beneficios exclusivos de preventa.",
        data: upstreamData,
      })
    );
  } catch (err) {
    console.error("[api/lead] Error al contactar webhook:", err);
    res.writeHead(502, { "Content-Type": "application/json" });
    return res.end(
      JSON.stringify({
        success: false,
        message: "Error de conexión con el servicio de registro. Inténtalo más tarde.",
      })
    );
  }
}

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  const pathname = parsedUrl.pathname;

  if (pathname === "/api/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ ok: true, app: "verla-backend", time: new Date().toISOString() }));
  }

  if (pathname === "/api/lead") {
    return handleLead(req, res);
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "Not Found" }));
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`[Verla API] Servidor escuchando en http://127.0.0.1:${PORT}`);
});
