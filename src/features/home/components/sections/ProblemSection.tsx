import { useState, useCallback, useMemo, memo } from "react";
import { useTheme } from "@/core/contexts";
import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  Phone,
  X,
  Folder,
} from "lucide-react";
import { ROUTES } from "@/core/router/routes.config";
import { PROCESS_STEPS } from "@/features/home/data";

// Solutions section - Simple process showcase - Optimizado
// Ubicación: src/ui/pages/home/components/ProblemSection.tsx

function ProblemSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Memoizar steps
  const steps = useMemo(() => PROCESS_STEPS, []);

  // Memoizar handlers
  const handleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(true);
  }, []);

  const handleDrawerClose = useCallback(() => {
    setIsDrawerOpen(false);
  }, []);

  const handleContactRedirect = useCallback(() => {
    window.location.href = ROUTES.CONTACT;
  }, []);

  return (
    <>
      <section
        className={`py-20 md:py-32 px-6 relative overflow-hidden ${
          isDark ? "bg-gray-950" : "bg-gray-50"
        }`}
      >
        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-12 h-12 rounded-full border-4 border-[rgba(91,111,255,0.3)]" />
        <div className="absolute top-40 right-32 w-8 h-8 rounded-full bg-[rgba(122,143,255,0.2)]" />
        <div className="absolute bottom-20 right-20 w-10 h-10 rounded-full border-4 border-[rgba(74,92,255,0.3)]" />

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
                  Soluciones <span className="text-[#5B6FFF]">Simples!</span>
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
                    <div className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg gradient-icon-box">
                      {step.number}
                    </div>
                    {/* Content */}
                    <div className="pt-1">
                      <h3 className={`font-bold text-lg mb-1 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`text-sm ${
                        isDark ? "text-white/80" : "text-gray-600"
                      }`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={handleDrawerOpen}
                  className="inline-flex items-center gap-2 px-8 py-3 font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{
                    background: "linear-gradient(135deg, #4A5CFF, #FFFFFF)",
                    backgroundSize: "200% 100%",
                    color: "#FFFFFF",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundPosition = "100% 0")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundPosition = "0% 0")
                  }
                >
                  Saber más
                  <ArrowRight
                    className="w-5 h-5"
                    stroke="#FFFFFF"
                    strokeWidth={2}
                  />
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
            onClick={handleDrawerClose}
          />

          {/* Drawer Panel */}
          <div
            id="contact-drawer"
            className={`fixed bottom-0 left-0 right-0 w-full max-h-[85vh] z-50 animate-slideInUp overflow-y-auto rounded-t-3xl ${
              isDark ? "bg-gray-900/95 backdrop-blur-xl" : "bg-white"
            }`}
          >
            {/* Handle */}
            <div className="sticky top-0 flex justify-center pt-3 pb-2 contact-drawer-handle">
              <div
                className={`w-12 h-1.5 rounded-full ${
                  isDark ? "bg-gray-600" : "bg-[#4A5CFF]"
                }`}
              ></div>
            </div>

            {/* Header */}
            <div
              className={`px-6 pb-6 flex items-center justify-between border-b contact-drawer-header ${
                isDark ? "border-white/10" : "border-transparent"
              }`}
            >
              <h2
                className={`text-2xl font-bold flex items-center gap-3 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                <span className="w-10 h-10 rounded-xl bg-linear-to-br from-[#4A5CFF] to-white flex items-center justify-center">
                  <Folder />
                </span>
                Información de Contacto
              </h2>
              <button
                onClick={handleDrawerClose}
                className={`p-2 rounded-xl transition-all ${
                  isDark
                    ? "bg-white/5 hover:bg-white/10"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <X
                  className={`w-5 h-5 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6 light:bg-white">
              {/* Contacto */}
              <div className="space-y-4 light:bg-white">
                <h3
                  className={`text-lg font-bold ${
                    isDark ? "text-white" : "text-[#4A5CFF]"
                  }`}
                >
                  Contáctanos
                </h3>

                {/* Teléfono */}
                <div
                  className={`flex items-start gap-4 p-4 rounded-xl border transition-all ${
                    isDark
                      ? "bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20"
                      : "bg-white border-blue-200 hover:border-blue-300"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      isDark ? "bg-blue-500/20" : "bg-[#4A5CFF]/10"
                    }`}
                  >
                    <Phone
                      className={`w-6 h-6 ${
                        isDark ? "text-blue-400" : "text-[#4A5CFF]"
                      }`}
                    />
                  </div>
                  <div>
                    <p
                      className={`text-sm mb-1 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Teléfono
                    </p>
                    <a
                      href="tel:+573115761963"
                      className={`font-semibold transition-all ${
                        isDark
                          ? "text-white hover:text-blue-400"
                          : "text-gray-900 hover:text-blue-600"
                      }`}
                    >
                      311-576-1963
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div
                  className={`flex items-start gap-4 p-4 rounded-xl border transition-all ${
                    isDark
                      ? "bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20"
                      : "bg-white border-blue-200 hover:border-blue-300"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      // isDark ? "bg-purple-500/20" : "bg-purple-200"
                      isDark ? "bg-blue-500/20" : "bg-[#4A5CFF]/10"
                    }`}
                  >
                    <Mail
                      className={`w-6 h-6 ${
                        isDark ? "text-purple-400" : "text-[#4A5CFF]"
                      }`}
                    />
                  </div>
                  <div>
                    <p
                      className={`text-sm mb-1 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Email
                    </p>
                    <a
                      href="mailto:info@verla.com.co"
                      className={`font-semibold transition-all ${
                        isDark
                          ? "text-white hover:text-purple-400"
                          : "text-gray-900 hover:text-purple-600"
                      }`}
                    >
                      info@verla.com.co
                    </a>
                  </div>
                </div>

                {/* Dirección */}
                <div
                  className={`flex items-start gap-4 p-4 rounded-xl border transition-all ${
                    isDark
                      ? "bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20"
                      : "bg-white border-blue-200 hover:border-blue-300"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      // isDark ? "bg-green-500/20" : "bg-green-200"
                      isDark ? "bg-blue-500/20" : "bg-[#4A5CFF]/10"
                    }`}
                  >
                    <MapPin
                      className={`w-6 h-6 ${
                        isDark ? "text-green-400" : "text-[#4A5CFF]"
                      }`}
                    />
                  </div>
                  <div>
                    <p
                      className={`text-sm mb-1 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Dirección
                    </p>
                    <p
                      className={`font-semibold ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Carrera 69 # 25B - 44
                      <br />
                      Edificio World Business Port, Oficina 613
                      <br />
                      Bogotá, Colombia
                    </p>
                  </div>
                </div>

                {/* Horario */}
                <div
                  className={`flex items-start gap-4 p-4 rounded-xl border transition-all ${
                    isDark
                      ? "bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20"
                      : "bg-white border-blue-200 hover:border-blue-300"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      // isDark ? "bg-orange-500/20" : "bg-orange-200"
                      isDark ? "bg-blue-500/20" : "bg-[#4A5CFF]/10"
                    }`}
                  >
                    <Clock
                      className={`w-6 h-6 ${
                        isDark ? "text-orange-400" : "text-[#4A5CFF]"
                      }`}
                    />
                  </div>
                  <div>
                    <p
                      className={`text-sm mb-1 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Horario de Atención
                    </p>
                    <p
                      className={`font-semibold ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Lunes a Viernes: 8:00 AM - 6:00 PM
                      <br />
                      Sábados: 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Pasos */}
              <div className="space-y-4">
                <h3
                  className={`text-lg font-bold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Proceso Simple
                </h3>
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className={`flex items-start gap-3 p-4 rounded-xl border ${
                      isDark
                        ? "bg-white/5 border-white/10"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <div className="w-8 h-8 rounded-full bg-linear-to-br from-[#4A5CFF] to-[#7A8FFF] flex items-center justify-center text-white font-bold text-sm shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <h4
                        className={`font-semibold mb-1 ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {step.title}
                      </h4>
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

              {/* CTA */}
              <button
                onClick={handleContactRedirect}
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

ProblemSection.displayName = "ProblemSection";

export default memo(ProblemSection);
