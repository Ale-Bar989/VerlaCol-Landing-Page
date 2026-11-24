import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Cargar .env.local / .env si existe
for (const envFile of [".env.local", ".env.production", ".env"]) {
  const fullPath = path.join(__dirname, envFile);
  if (fs.existsSync(fullPath)) {
    try {
      process.loadEnvFile(fullPath);
      break;
    } catch {
      // Continuar con variables de entorno del sistema
    }
  }
}

const PORT = parseInt(process.env.PORT || "3001", 10);
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const UPSTREAM_TIMEOUT_MS = 15_000;

function sendJson(res, statusCode, body, extraHeaders = {}) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    ...extraHeaders,
  });
  return res.end(JSON.stringify(body));
}

async function handleContacto(req, res) {
  if (req.method !== "POST") {
    return sendJson(
      res,
      405,
      { success: false, message: "Método no permitido." },
      { Allow: "POST" }
    );
  }

  const webhookUrl = (process.env.VERLA_CONTACTO_WEBHOOK_URL || "").trim();
  const webhookToken = (process.env.VERLA_CONTACTO_TOKEN || "").trim();

  if (!webhookUrl || !webhookToken) {
    console.error(
      "[api/contacto] Error de configuración del servidor: faltan VERLA_CONTACTO_WEBHOOK_URL o VERLA_CONTACTO_TOKEN."
    );
    return sendJson(res, 500, {
      success: false,
      message:
        "El servicio de contacto no está configurado en este momento. Escríbenos a info@verla.com.co.",
    });
  }

  let bodyText = "";
  for await (const chunk of req) {
    bodyText += chunk;
    if (bodyText.length > 1e6) {
      return sendJson(res, 413, {
        success: false,
        message: "La solicitud excede el tamaño permitido.",
      });
    }
  }

  let data = {};
  try {
    data = JSON.parse(bodyText || "{}");
  } catch {
    return sendJson(res, 400, {
      success: false,
      message: "Formato de solicitud inválido.",
    });
  }

  // Honeypot anti-spam
  if (typeof data.website === "string" && data.website.trim() !== "") {
    return sendJson(res, 200, {
      success: true,
      message: "Solicitud enviada correctamente.",
    });
  }

  const nombre = String(data.nombre ?? "").trim();
  const correo = String(data.correo ?? "").trim().toLowerCase();
  const telefono = String(data.telefono ?? "").trim();
  const ciudad = String(data.ciudad ?? data.municipio ?? "").trim();
  const area =
    String(data.area ?? "Contacto Institucional").trim() ||
    "Contacto Institucional";
  const mensaje = String(data.mensaje ?? data.observaciones ?? "").trim();

  if (!nombre || (!correo && !telefono)) {
    return sendJson(res, 422, {
      success: false,
      message: "Faltan datos obligatorios",
    });
  }

  if (correo && !EMAIL_REGEX.test(correo)) {
    return sendJson(res, 422, {
      success: false,
      message: "El formato del correo electrónico no es válido.",
    });
  }

  const payload = {
    nombre,
    correo,
    telefono,
    area,
    ciudad,
    mensaje,
    origen: "verla.com.co",
    fecha: new Date().toISOString(),
  };

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), UPSTREAM_TIMEOUT_MS);

  try {
    const upstream = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": webhookToken,
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timer);

    if (upstream.status === 401 || upstream.status === 403) {
      console.error(
        `[api/contacto] Error de configuración del servidor: autenticación rechazada por n8n (HTTP ${upstream.status}).`
      );
      return sendJson(res, 502, {
        success: false,
        message:
          "No pudimos enviar tu solicitud en este momento. Inténtalo más tarde o escríbenos a info@verla.com.co.",
      });
    }

    let upstreamData = null;
    const contentType = upstream.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      upstreamData = await upstream.json().catch(() => null);
    }

    if (upstream.status === 200 && upstreamData && upstreamData.success === true) {
      return sendJson(res, 200, {
        success: true,
        message: "Solicitud enviada correctamente.",
      });
    }

    console.error(
      `[api/contacto] Respuesta no exitosa de n8n (HTTP ${upstream.status}).`
    );
    return sendJson(res, 502, {
      success: false,
      message:
        "No pudimos enviar tu solicitud en este momento. Inténtalo nuevamente o escríbenos a info@verla.com.co.",
    });
  } catch (err) {
    clearTimeout(timer);
    const reason = err && err.name === "AbortError" ? "timeout" : "network";
    console.error(`[api/contacto] Error al contactar n8n (${reason}).`);
    return sendJson(res, 502, {
      success: false,
      message:
        "Error de conexión al enviar tu solicitud. Tus datos se conservan en el formulario; inténtalo nuevamente o escríbenos a info@verla.com.co.",
    });
  }
}

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  const pathname = parsedUrl.pathname;

  if (pathname === "/api/health") {
    return sendJson(res, 200, {
      ok: true,
      app: "verla-backend",
      time: new Date().toISOString(),
    });
  }

  if (pathname === "/api/lead" || pathname === "/api/contacto") {
    return handleContacto(req, res);
  }

  return sendJson(res, 404, { error: "Not Found" });
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`[Verla API] Servidor escuchando en http://127.0.0.1:${PORT}`);
});
