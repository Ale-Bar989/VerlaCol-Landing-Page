import {
  Mail,
  Phone,
  MapPin,
  // ArrowLeft,
  Send,
  MessageCircle,
  Clock,
  CheckCircle,
} from "lucide-react";
// import { Link } from "react-router-dom";
import { BackgroundEffects, Navbar } from "@/shared//components";
import { FooterSection } from "../home/components";

// Página Contact con diseño moderno
// Ubicación: src/ui/pages/contact/Contact.tsx
export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar lógica de envío
    console.log("Formulario enviado");
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <BackgroundEffects />

      <Navbar />

      <div className="pt-32 pb-20 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          {/* Botón volver moderno */}
          {/* <Link
            to="/"
            className="group inline-flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 backdrop-blur-sm mb-12"
          > */}
          {/* <div className="relative">
              <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" strokeWidth={2} />
              <div className="absolute inset-0 bg-[#4A5CFF]/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
              Volver
            </span> */}
          {/* </Link> */}

          {/* Header moderno */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
              <MessageCircle className="w-4 h-4 text-[#4A5CFF]" />
              <span className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Estamos para ayudarte
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="text-transparent bg-clip-text animate-gradient inline-block gradient-text-animated">
                Contáctanos
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Nuestro equipo está listo para resolver todas tus dudas sobre{" "}
              <span className="text-white font-semibold">Internet y TV IP</span>
            </p>
          </div>

          {/* Cards de contacto modernas */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="relative rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300 gradient-section-bg-alt">
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity gradient-section-bg"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform gradient-icon-box">
                  <Mail size={28} className="dark:text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-black mb-2 text-white">Email</h3>
                <a
                  href="mailto:info@verla.com"
                  className="text-gray-300 hover:text-white transition-colors font-medium"
                >
                  info@verla.com
                </a>
              </div>
            </div>

            <div className="relative rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300 gradient-section-bg-alt">
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity gradient-section-bg"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform gradient-icon-box">
                  <Phone size={28} className="dark:text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-black mb-2 text-white">Teléfono</h3>
                <a
                  href="tel:+573001234567"
                  className="text-gray-300 hover:text-white transition-colors font-medium"
                >
                  +57 300-123-4567
                </a>
              </div>
            </div>

            <div className="relative rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300 gradient-section-bg-alt">
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity gradient-section-bg"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform gradient-icon-box">
                  <MapPin size={28} className="dark:text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-black mb-2 text-white">
                  Ubicación
                </h3>
                <p className="text-gray-300 font-medium">Bogotá, Colombia</p>
              </div>
            </div>
          </div>

          {/* Formulario de contacto moderno */}
          <div className="relative rounded-3xl p-12 overflow-hidden">
            {/* Fondo con gradiente */}
            <div className="absolute inset-0 gradient-section-bg"></div>
            {/* Border glow */}
            <div className="absolute inset-0 rounded-3xl gradient-border-primary-soft"></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-black mb-2 text-center">
                Envíanos un{" "}
                <span className="text-transparent bg-clip-text gradient-text-primary">
                  Mensaje
                </span>
              </h2>
              <p className="text-center text-gray-400 mb-10">
                Responderemos en menos de 24 horas
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-6 max-w-2xl mx-auto"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold text-white mb-2"
                  >
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#4A5CFF] focus:bg-white/10 transition-all"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-white mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#4A5CFF] focus:bg-white/10 transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-bold text-white mb-2"
                    >
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#4A5CFF] focus:bg-white/10 transition-all"
                      placeholder="+57 300 123 4567"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-white mb-2"
                  >
                    ¿En qué podemos ayudarte?
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    required
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#4A5CFF] focus:bg-white/10 transition-all resize-none"
                    placeholder="Cuéntanos sobre tu consulta, plan de interés, dirección para cobertura..."
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-3 dark:text-white px-8 py-5 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-105 btn-cta-primary"
                >
                  Enviar Mensaje
                  <Send
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                    strokeWidth={2.5}
                  />
                </button>

                {/* Features adicionales */}
                <div className="grid md:grid-cols-3 gap-4 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <CheckCircle
                      className="w-5 h-5 text-[#4A5CFF] shrink-0"
                      strokeWidth={2.5}
                    />
                    <span className="text-sm text-gray-300">
                      Respuesta en 24h
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle
                      className="w-5 h-5 text-[#4A5CFF] shrink-0"
                      strokeWidth={2.5}
                    />
                    <span className="text-sm text-gray-300">
                      Soporte personalizado
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock
                      className="w-5 h-5 text-[#4A5CFF] shrink-0"
                      strokeWidth={2.5}
                    />
                    <span className="text-sm text-gray-300">Horario 24/7</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <FooterSection/>
    </div>
  );
}
