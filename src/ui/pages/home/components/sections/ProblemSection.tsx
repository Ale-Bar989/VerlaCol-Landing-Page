import { useState } from "react";
import { useTheme } from "../../../../../contexts";
import { ArrowRight, X, Phone, Mail, MapPin, Clock } from "lucide-react";
import { ROUTES } from "../../../../../router/routes.config";

// Solutions section - Simple process showcase
// Ubicación: src/ui/pages/home/components/ProblemSection.tsx

const steps = [
  {
    number: 1,
    title: "Contáctanos",
    description: "Comunícate con nosotros para conocer tu necesidad",
  },
  {
    number: 2,
    title: "Consulta",
    description: "Revisamos opciones para resolver tus dudas",
  },
  {
    number: 3,
    title: "Realiza el pedido",
    description: "Elige el servicio ideal y procede",
  },
  {
    number: 4,
    title: "Pago",
    description: "Completa el pago de forma segura en todos los bancos",
  },
];

export default function ProblemSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <section
        className={`py-20 md:py-32 px-6 relative overflow-hidden ${
          isDark ? "bg-gray-950" : "bg-gray-50"
        }`}
      >
        {/* Decorative circles */}
        <div
          className="absolute top-20 right-10 w-12 h-12 rounded-full border-4"
          style={{ borderColor: "rgba(91, 111, 255, 0.3)" }}
        />
        <div
          className="absolute top-40 right-32 w-8 h-8 rounded-full"
          style={{ backgroundColor: "rgba(122, 143, 255, 0.2)" }}
        />
        <div
          className="absolute bottom-20 right-20 w-10 h-10 rounded-full border-4"
          style={{ borderColor: "rgba(74, 92, 255, 0.3)" }}
        />

        <div className="container mx-auto max-w-7xl relative z-10">
          {/* Main Content - Two Columns */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Illustration */}
            <div className="relative">
              <div className="relative">
                {/* Illustration placeholder */}
                <div
                  className={`relative rounded-3xl overflow-hidden p-8 ${
                    isDark ? "bg-gray-900" : "bg-white"
                  } shadow-2xl`}
                >
                  <div className="flex items-center justify-center min-h-[400px]">
                    {/* Person with laptop illustration */}
                    <img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=600&fit=crop&q=80"
                      alt="Persona trabajando con tecnología"
                      className="w-full h-auto object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              {/* Title */}
              <div>
                <h2
                  className={`text-4xl md:text-5xl font-bold mb-4 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Soluciones <span style={{ color: "#5B6FFF" }}>Simples!</span>
                </h2>
                <p
                  className={`text-base md:text-lg ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Comprendemos que administrar dos negocios no es tarea fácil.
                  Por eso nos tomamos el tiempo para entender.
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-4">
                {steps.map((step) => (
                  <div key={step.number} className="flex items-start gap-4">
                    {/* Number Circle */}
                    <div
                      className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                      style={{
                        background: "linear-gradient(135deg, #5B6FFF, #7A8FFF)",
                      }}
                    >
                      {step.number}
                    </div>
                    {/* Content */}
                    <div className="pt-1">
                      <h3
                        className={`font-bold text-lg mb-1 ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`text-sm ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => setIsDrawerOpen(true)}
                  className="inline-flex items-center gap-2 px-8 py-3 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{
                    background: "linear-gradient(135deg, #4A5CFF, #FFFFFF)",
                    backgroundSize: "200% 100%",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundPosition = "100% 0")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundPosition = "0% 0")
                  }
                >
                  Saber más
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drawer */}
      {isDrawerOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fadeIn"
            onClick={() => setIsDrawerOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="fixed bottom-0 left-0 right-0 w-full max-h-[85vh] bg-linear-to-t from-black to-gray-900 border-t border-blue-500/30 shadow-2xl shadow-blue-500/20 z-50 animate-slideInUp overflow-y-auto rounded-t-3xl">
            {/* Handle */}
            <div className="sticky top-0 flex justify-center pt-3 pb-2 bg-gray-900/95 backdrop-blur-sm">
              <div className="w-12 h-1.5 rounded-full bg-gray-600"></div>
            </div>

            {/* Header */}
            <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-white/10 px-6 pb-6 flex items-center justify-between z-10">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  📋
                </span>
                Información de Contacto
              </h2>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Contacto */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">Contáctanos</h3>

                {/* Teléfono */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Teléfono</p>
                    <a
                      href="tel:+573001234567"
                      className="text-white font-semibold hover:text-blue-400 transition-all"
                    >
                      +57 300 123 4567
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <a
                      href="mailto:info@verlapage.com"
                      className="text-white font-semibold hover:text-purple-400 transition-all"
                    >
                      info@verlapage.com
                    </a>
                  </div>
                </div>

                {/* Dirección */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Dirección</p>
                    <p className="text-white font-semibold">
                      Calle 123 #45-67
                      <br />
                      Bogotá, Colombia
                    </p>
                  </div>
                </div>

                {/* Horario */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 hover:bg-orange-500/20 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">
                      Horario de Atención
                    </p>
                    <p className="text-white font-semibold">
                      Lunes a Viernes: 8:00 AM - 6:00 PM
                      <br />
                      Sábados: 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Pasos */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">Proceso Simple</h3>
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <div className="w-8 h-8 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        {step.title}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                // onClick={() => (window.location.href = "#contact")}
                onClick={() => (window.location.href = ROUTES.CONTACT)}
                className="w-full py-4 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 text-white font-bold hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-blue-500/20"
              >
                Iniciar Ahora
              </button>
            </div>
          </div>

          <style>{`
          @keyframes slideInUp {
            from {
              transform: translateY(100%);
            }
            to {
              transform: translateY(0);
            }
          }
          .animate-slideInUp {
            animation: slideInUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
        `}</style>
        </>
      )}
    </>
  );
}
