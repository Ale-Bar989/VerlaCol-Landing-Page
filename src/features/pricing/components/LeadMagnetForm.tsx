/**
 * LeadMagnetForm — Formulario de la lista de espera (Modo Expectativa)
 *
 * Captura leads de prelanzamiento y los envía a la serverless function /api/lead,
 * que los reenvía al webhook de Verla (n8n → CRM) con un token secreto.
 *
 * Campos:
 *   Requeridos: nombre, correo, telefono
 *   Opcionales (enriquecimiento): ciudad, barrio, direccion, plan, observaciones
 *
 * Seguridad:
 *   - Honeypot: campo oculto "website" que los bots rellenan (se descarta en el backend).
 *   - Validación mínima en cliente (nombre + teléfono o correo); el backend valida de nuevo.
 *
 * Ubicación: src/features/pricing/components/LeadMagnetForm.tsx
 */

import { useState, type FormEvent } from "react";
import { Send, CheckCircle, AlertCircle, Loader2, Sparkles } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

interface FormData {
  nombre: string;
  correo: string;
  telefono: string;
  ciudad: string;
  barrio: string;
  direccion: string;
  plan: string;
  observaciones: string;
  // Honeypot anti-spam (debe quedar vacío)
  website: string;
}

const INITIAL_DATA: FormData = {
  nombre: "",
  correo: "",
  telefono: "",
  ciudad: "",
  barrio: "",
  direccion: "",
  plan: "",
  observaciones: "",
  website: "",
};

const PLANES = ["Plan Hogar 300 Mbps", "Plan Familia 600 Mbps", "Plan Pro 1000 Mbps"];

const inputClass =
  "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#4A5CFF] focus:bg-white/10 transition-all text-sm";
const labelClass = "block text-sm font-bold text-white mb-1.5";

export function LeadMagnetForm() {
  const [data, setData] = useState<FormData>(INITIAL_DATA);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");

    // Validación mínima en cliente (el backend valida de nuevo)
    if (!data.nombre.trim()) {
      setStatus("error");
      setMessage("El nombre es obligatorio.");
      return;
    }
    if (!data.telefono.trim() && !data.correo.trim()) {
      setStatus("error");
      setMessage("Debes indicar al menos un teléfono o un correo.");
      return;
    }

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));

      if (res.ok && json.success) {
        setStatus("success");
        setMessage(json.message ?? "¡Gracias! Te contactaremos pronto.");
        setData(INITIAL_DATA);
      } else {
        setStatus("error");
        setMessage(json.message ?? "No pudimos registrar tu solicitud. Inténtalo de nuevo.");
      }
    } catch {
      setStatus("error");
      setMessage("Error de conexión. Verifica tu internet e inténtalo de nuevo.");
    }
  };

  // Estado de éxito: mensaje claro y opción de enviar otro
  if (status === "success") {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 gradient-icon-box">
          <CheckCircle className="w-9 h-9 text-white" strokeWidth={2.5} />
        </div>
        <p className="text-lg font-bold text-white mb-2">{message}</p>
        <p className="text-sm text-gray-400 mb-6">
          Guardamos tus datos en la lista de espera de preventa.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setMessage("");
          }}
          className="text-sm font-semibold text-[#4A5CFF] hover:text-[#7A8FFF] transition-colors"
        >
          Enviar otro registro
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl mx-auto">
      {/* Honeypot — oculto para humanos, visible para bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">No rellenar este campo</label>
        <input
          type="text"
          id="website"
          name="website"
          value={data.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Nombre (requerido) */}
      <div>
        <label htmlFor="lm-nombre" className={labelClass}>
          Nombre completo <span className="text-[#7A8FFF]">*</span>
        </label>
        <input
          type="text"
          id="lm-nombre"
          name="nombre"
          required
          value={data.nombre}
          onChange={handleChange}
          className={inputClass}
          placeholder="Juan Pérez"
          autoComplete="name"
        />
      </div>

      {/* Correo y Teléfono (requeridos) */}
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="lm-correo" className={labelClass}>
            Correo electrónico <span className="text-[#7A8FFF]">*</span>
          </label>
          <input
            type="email"
            id="lm-correo"
            name="correo"
            required
            value={data.correo}
            onChange={handleChange}
            className={inputClass}
            placeholder="tu@email.com"
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="lm-telefono" className={labelClass}>
            Celular / WhatsApp <span className="text-[#7A8FFF]">*</span>
          </label>
          <input
            type="tel"
            id="lm-telefono"
            name="telefono"
            required
            value={data.telefono}
            onChange={handleChange}
            className={inputClass}
            placeholder="+57 311 576 1963"
            autoComplete="tel"
          />
        </div>
      </div>

      {/* Campos de enriquecimiento (opcionales) */}
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="lm-ciudad" className={labelClass}>
            Ciudad
          </label>
          <input
            type="text"
            id="lm-ciudad"
            name="ciudad"
            value={data.ciudad}
            onChange={handleChange}
            className={inputClass}
            placeholder="Bogotá"
          />
        </div>
        <div>
          <label htmlFor="lm-barrio" className={labelClass}>
            Barrio
          </label>
          <input
            type="text"
            id="lm-barrio"
            name="barrio"
            value={data.barrio}
            onChange={handleChange}
            className={inputClass}
            placeholder="Teusaquillo"
          />
        </div>
      </div>

      <div>
        <label htmlFor="lm-direccion" className={labelClass}>
          Dirección
        </label>
        <input
          type="text"
          id="lm-direccion"
          name="direccion"
          value={data.direccion}
          onChange={handleChange}
          className={inputClass}
          placeholder="Calle 59 #56-63"
          autoComplete="street-address"
        />
      </div>

      {/* Plan de interés (select) */}
      <div>
        <label htmlFor="lm-plan" className={labelClass}>
          Plan de interés
        </label>
        <select
          id="lm-plan"
          name="plan"
          value={data.plan}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="" className="bg-gray-900">
            Selecciona un plan (opcional)
          </option>
          {PLANES.map((p) => (
            <option key={p} value={p} className="bg-gray-900">
              {p}
            </option>
          ))}
        </select>
      </div>

      {/* Mensaje / observaciones */}
      <div>
        <label htmlFor="lm-observaciones" className={labelClass}>
          ¿Algo más que quieras contarnos?
        </label>
        <textarea
          id="lm-observaciones"
          name="observaciones"
          rows={3}
          value={data.observaciones}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
          placeholder="Ej: quiero instalación lo antes posible."
        />
      </div>

      {/* Mensaje de error */}
      {status === "error" && (
        <div className="flex items-start gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{message}</span>
        </div>
      )}

      {/* Botón submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100 disabled:cursor-not-allowed"
        style={{
          background: "linear-gradient(135deg, #4A5CFF, #7A8FFF)",
          boxShadow: "0 10px 30px rgba(74, 92, 255, 0.3)",
        }}
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Sparkles className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Quiero ser parte del lanzamiento
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>

      <p className="text-center text-xs text-gray-500">
        Al registrarte aceptas ser contactado por Verla con beneficios exclusivos de preventa.
        Tus datos se tratan según nuestra Política de Privacidad.
      </p>
    </form>
  );
}

export default LeadMagnetForm;
