import { useState, memo } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  X,
  Briefcase,
  HardHat,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { CONTACT_AREAS } from "@/features/home/data/institucional.data";

function TalentAndContactSection() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [area, setArea] = useState<string>(CONTACT_AREAS[0]);
  const [mensaje, setMensaje] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [feedback, setFeedback] = useState("");
  const [showProjectsModal, setShowProjectsModal] = useState(false);

  const focusFormWithArea = (selectedArea: string) => {
    setArea(selectedArea);
    const el = document.getElementById("contacto-corporativo");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    const cleanNombre = nombre.trim();
    const cleanCorreo = correo.trim();
    const cleanTelefono = telefono.trim();
    const cleanCiudad = ciudad.trim();
    const cleanMensaje = mensaje.trim();

    if (!cleanNombre || (!cleanCorreo && !cleanTelefono)) {
      setStatus("error");
      setFeedback("Faltan datos obligatorios");
      return;
    }

    if (cleanCorreo && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(cleanCorreo)) {
      setStatus("error");
      setFeedback("El formato del correo electrónico no es válido.");
      return;
    }

    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: cleanNombre,
          correo: cleanCorreo,
          telefono: cleanTelefono,
          ciudad: cleanCiudad,
          area,
          mensaje: cleanMensaje,
          website,
        }),
      });

      const result = await response.json().catch(() => null);
      if (response.status === 200 && result && result.success === true) {
        setStatus("success");
        setFeedback("Solicitud enviada correctamente.");
        setNombre("");
        setCorreo("");
        setTelefono("");
        setCiudad("");
        setMensaje("");
      } else {
        setStatus("error");
        setFeedback(
          (result && typeof result.message === "string" && result.message) ||
            "No pudimos enviar tu solicitud en este momento. También puedes escribirnos directamente a info@verla.com.co."
        );
      }
    } catch {
      setStatus("error");
      setFeedback(
        "Error de conexión al enviar tu solicitud. Tus datos se conservan en el formulario; inténtalo nuevamente o escríbenos a info@verla.com.co."
      );
    }
  };

  return (
    <section
      id="contacto"
      className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Bloque Talento y Proyectos de Infraestructura */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tarjeta 1: Talento */}
          <div className="rounded-3xl bg-white border border-slate-200/90 shadow-md overflow-hidden flex flex-col sm:flex-row">
            <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1D4ED8] bg-blue-50 px-3 py-1 rounded-full mb-3">
                  <Briefcase className="w-3.5 h-3.5" />
                  Talento Humano
                </div>
                <h2 className="text-2xl font-extrabold text-[#1E1E6E] leading-snug mb-3">
                  ¿Quieres unirte a nuestro equipo?
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Si deseas formar parte de nuestro equipo, comparte tus datos y
                  nuestro personal revisará tu solicitud.
                </p>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => focusFormWithArea("Gestión de Talento")}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#2B2B94] hover:bg-[#1E1E72] transition-colors cursor-pointer"
                >
                  <span>Enviar datos</span>
                </button>
              </div>
            </div>
            <div className="sm:w-48 lg:w-52 bg-gradient-to-br from-[#2B2B94] to-[#1D4ED8] flex items-center justify-center p-6 text-white">
              <div className="text-center space-y-2">
                <p className="text-3xl font-black tracking-tight">VERLA</p>
                <p className="text-xs uppercase tracking-widest text-blue-100">
                  Talento &amp; Cultura
                </p>
                <p className="text-xs text-blue-100/80 pt-1">
                  Ingeniería, operación y gestión nacional
                </p>
              </div>
            </div>
          </div>

          {/* Tarjeta 2: Proyectos de infraestructura */}
          <div className="rounded-3xl bg-white border border-slate-200/90 shadow-md overflow-hidden flex flex-col sm:flex-row">
            <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1D4ED8] bg-blue-50 px-3 py-1 rounded-full mb-3">
                  <HardHat className="w-3.5 h-3.5" />
                  Ingeniería FTTH
                </div>
                <h2 className="text-2xl font-extrabold text-[#1E1E6E] leading-snug mb-3">
                  Proyectos de infraestructura
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Descubre cómo nuestro equipo de ingeniería diseña, desarrolla
                  y despliega redes de telecomunicaciones para mantener
                  conectadas a las comunidades.
                </p>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => setShowProjectsModal(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#2B2B94] hover:bg-[#1E1E72] transition-colors cursor-pointer"
                >
                  <span>Conocer más</span>
                </button>
              </div>
            </div>
            <div className="sm:w-48 lg:w-52 shrink-0">
              <img
                src="/images/institucional/proyectos-campo.png"
                alt="Despliegue de proyectos de infraestructura FTTH en campo"
                className="w-full h-52 sm:h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Bloque Contacto Corporativo */}
        <div
          id="contacto-corporativo"
          className="rounded-3xl bg-white border border-slate-200/90 shadow-lg p-7 sm:p-10 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Información institucional */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#1D4ED8] mb-2">
                  Contacto y Gestión
                </p>
                <h3 className="text-3xl font-extrabold text-[#0F172A] tracking-tight mb-3">
                  Contacto Corporativo
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Comunícate con el grupo empresarial para temas
                  institucionales, regulatorios, infraestructura, alianzas o
                  gestión de talento humano.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#1D4ED8]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Correo electrónico
                    </p>
                    <a
                      href="mailto:info@verla.com.co"
                      className="text-sm font-semibold text-slate-800 hover:text-[#1D4ED8] transition-colors"
                    >
                      info@verla.com.co
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#1D4ED8]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Teléfono
                    </p>
                    <a
                      href="tel:+573115761963"
                      className="text-sm font-semibold text-slate-800 hover:text-[#1D4ED8] transition-colors"
                    >
                      311-576-1963
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#1D4ED8]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Oficina principal
                    </p>
                    <p className="text-sm font-medium text-slate-700 leading-relaxed">
                      Carrera 69 # 25B - 44. Edificio World Business Port,
                      Oficina 613. Bogotá, Cundinamarca, Salitre
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <form
              onSubmit={handleSubmit}
              noValidate
              className="lg:col-span-7 space-y-4 bg-slate-50/80 border border-slate-200/80 rounded-2xl p-6 sm:p-8"
            >
              {/* Honeypot anti-spam */}
              <input
                type="text"
                name="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="inst-nombre"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    Nombre completo *
                  </label>
                  <input
                    id="inst-nombre"
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Tu nombre"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/30 focus:border-[#1D4ED8]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="inst-correo"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    Correo electrónico
                  </label>
                  <input
                    id="inst-correo"
                    type="email"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    placeholder="nombre@empresa.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/30 focus:border-[#1D4ED8]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="inst-telefono"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    Teléfono
                  </label>
                  <input
                    id="inst-telefono"
                    type="tel"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="300 000 0000"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/30 focus:border-[#1D4ED8]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="inst-ciudad"
                    className="block text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    Ciudad / Municipio
                  </label>
                  <input
                    id="inst-ciudad"
                    type="text"
                    value={ciudad}
                    onChange={(e) => setCiudad(e.target.value)}
                    placeholder="Bogotá, Cúcuta, etc."
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/30 focus:border-[#1D4ED8]"
                  />
                </div>
              </div>

              <p className="text-xs text-slate-500">
                * Ingresa tu nombre y al menos un medio de contacto (correo
                electrónico o teléfono).
              </p>

              <div>
                <label
                  htmlFor="inst-area"
                  className="block text-sm font-semibold text-slate-700 mb-1.5"
                >
                  Asunto / Área de interés
                </label>
                <select
                  id="inst-area"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/30 focus:border-[#1D4ED8]"
                >
                  {CONTACT_AREAS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="inst-mensaje"
                  className="block text-sm font-semibold text-slate-700 mb-1.5"
                >
                  Mensaje
                </label>
                <textarea
                  id="inst-mensaje"
                  rows={3}
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder="Cuéntanos en qué podemos colaborar..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#1D4ED8]/30 focus:border-[#1D4ED8] resize-none"
                />
              </div>

              {status === "success" && (
                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-600" />
                  <span>{feedback}</span>
                </div>
              )}

              {status === "error" && (
                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-600" />
                  <span>{feedback}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-[#2B2B94] hover:bg-[#1E1E72] disabled:opacity-60 transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>
                  {status === "submitting" ? "Enviando..." : "Enviar"}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Modal Proyectos e Infraestructura */}
      {showProjectsModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="projects-modal-title"
          onClick={() => setShowProjectsModal(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
              <h3
                id="projects-modal-title"
                className="text-lg font-extrabold text-[#1E1E6E]"
              >
                Proyectos e Infraestructura FTTH · Grupo VERLA
              </h3>
              <button
                type="button"
                onClick={() => setShowProjectsModal(false)}
                className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 cursor-pointer"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
              <img
                src="/images/institucional/hero-collage.png"
                alt="Despliegue de redes de fibra óptica en campo por el equipo de ingeniería de Grupo VERLA"
                className="w-full rounded-2xl border border-slate-200 object-cover"
              />
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Nuestro equipo de ingeniería diseña, construye y opera redes de
                fibra óptica de última milla (FTTH), integrando infraestructura
                troncal y despliegues propios en municipios intermedios de
                Colombia para garantizar conectividad estable, de alta capacidad
                y continuidad operativa nacional.
              </p>
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowProjectsModal(false);
                    focusFormWithArea("Infraestructura y Proyectos");
                  }}
                  className="px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-[#2B2B94] hover:bg-[#1E1E72] transition-colors cursor-pointer"
                >
                  Contactar área de infraestructura
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default memo(TalentAndContactSection);
