import { Link } from "react-router-dom";
import { Sparkles, Lock, Radio, Zap, Tv } from "lucide-react";
import { ROUTES } from "../../../../../router/routes.config";
import { useTheme } from "../../../../../contexts";

// Footer section with newsletter, brand info, links and social icons
// Ubicación: src/ui/pages/home/components/FooterSection.tsx

export default function FooterSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer className="relative py-24 px-6 bg-black overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{ backgroundColor: "#5B6FFF15" }}
        ></div>
        <div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{ backgroundColor: "#7A8FFF15" }}
        ></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Footer Top - Newsletter Moderno */}
        <div className="relative mb-16">
          {/* Resplandor de fondo */}
          <div
            className="absolute inset-0 blur-3xl opacity-30"
            style={{
              background:
                "radial-gradient(ellipse at center, #5B6FFF, transparent)",
            }}
          ></div>

          <div className="relative max-w-3xl mx-auto text-center p-8 rounded-3xl bg-linear-to-br from-[#5B6FFF]/5 to-transparent border border-[#5B6FFF]/10 backdrop-blur-sm">
            {/* Badge superior */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5B6FFF]/10 border border-[#5B6FFF]/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#4A5CFF] rounded-full animate-pulse"></div>
              <span className="text-xs font-bold text-[#4A5CFF] uppercase tracking-wider">
                Newsletter
              </span>
            </div>

            <h3 className="text-3xl md:text-5xl font-black mb-4">
              Mantente{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#5B6FFF] via-[#7A8FFF] to-[#4A5CFF]">
                  actualizado
                </span>
                <div className="absolute -bottom-1 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#4A5CFF] to-transparent"></div>
              </span>
            </h3>

            <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
              Recibe las últimas novedades,{" "}
              <span className="text-white font-semibold">tips exclusivos</span>{" "}
              y
              <span className="text-white font-semibold">
                {" "}
                contenido premium
              </span>{" "}
              directamente en tu inbox
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 bg-white/5 border border-[#5B6FFF]/20 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#4A5CFF] focus:ring-2 focus:ring-[#4A5CFF]/30 transition-all backdrop-blur-sm"
              />
              <button
                className="relative group px-8 py-4 rounded-xl font-bold overflow-hidden transition-all hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, #4A5CFF 0%, #FFFFFF 100%)",
                  boxShadow: "0 10px 40px rgba(74, 92, 255, 0.4)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, #7A8FFF 0%, #FFFFFF 100%)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 50px rgba(122, 143, 255, 0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, #4A5CFF 0%, #FFFFFF 100%)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 40px rgba(74, 92, 255, 0.4)";
                }}
              >
                <span
                  className="relative z-10 font-bold"
                  style={{
                    color: isDark ? "#000000" : "#FFFFFF",
                  }}
                >
                  Suscribirse
                </span>
                {/* Efecto de brillo */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>

            {/* Indicador de privacidad */}
            <p className="text-xs text-gray-500 mt-4 flex items-center gap-2">
              <Lock className="w-3 h-3" />
              100% privado. Sin spam. Cancela cuando quieras.
            </p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-16 mb-12" />

        {/* Footer Content Grid */}
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-linear-to-br from-[#5B6FFF] to-[#4A5CFF] rounded-xl flex items-center justify-center shadow-lg shadow-[#5B6FFF]/20">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Verla</h3>
                  <p className="text-xs text-gray-500">Telecomunicaciones</p>
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              Televisión IP y fibra óptica de última generación.
              <br />
              Conectamos tu hogar al entretenimiento sin límites.
            </p>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1.5 bg-[#4A5CFF]/10 border border-[#4A5CFF]/20 rounded-lg text-xs text-[#4A5CFF] font-medium flex items-center gap-1.5">
                <Tv className="w-3 h-3" />
                TV IP HD/4K
              </span>
              <span className="px-3 py-1.5 bg-[#4A5CFF]/10 border border-[#4A5CFF]/20 rounded-lg text-xs text-[#4A5CFF] font-medium flex items-center gap-1.5">
                <Radio className="w-3 h-3" />
                Fibra Óptica
              </span>
              <span className="px-3 py-1.5 bg-[#4A5CFF]/10 border border-[#4A5CFF]/20 rounded-lg text-xs text-[#4A5CFF] font-medium flex items-center gap-1.5">
                <Zap className="w-3 h-3" />
                Ultrarrápido
              </span>
            </div>
            <div className="flex gap-3">
              <a
                href="#"
                className="group w-10 h-10 bg-white/5 hover:bg-[#4A5CFF] border border-white/10 hover:border-[#4A5CFF] rounded-lg flex items-center justify-center"
                style={{ transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)" }}
              >
                <svg
                  className="w-4.5 h-4.5 text-gray-400 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="group w-10 h-10 bg-white/5 hover:bg-[#4A5CFF] border border-white/10 hover:border-[#4A5CFF] rounded-lg flex items-center justify-center"
                style={{ transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)" }}
              >
                <svg
                  className="w-4.5 h-4.5 text-gray-400 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                </svg>
              </a>
              <a
                href="#"
                className="group w-10 h-10 bg-white/5 hover:bg-[#4A5CFF] border border-white/10 hover:border-[#4A5CFF] rounded-lg flex items-center justify-center"
                style={{ transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)" }}
              >
                <svg
                  className="w-4.5 h-4.5 text-gray-400 group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Servicios Column */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-sm mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/precios"
                  className="text-sm text-gray-400 hover:text-[#4A5CFF] transition-colors"
                >
                  Planes y Precios
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-[#4A5CFF] transition-colors"
                >
                  TV IP
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-[#4A5CFF] transition-colors"
                >
                  Internet Fibra
                </a>
              </li>
            </ul>
          </div>

          {/* Empresa Column */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-sm mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  // to="/about"
                  to={ROUTES.ABOUT}
                  className="text-sm text-gray-400 hover:text-[#4A5CFF] transition-colors"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  // to="/contact"
                  to={ROUTES.CONTACT}
                  className="text-sm text-gray-400 hover:text-[#4A5CFF] transition-colors"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-[#4A5CFF] transition-colors"
                >
                  Soporte
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-sm mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to={ROUTES.LEGAL.NORMATIVIDAD}
                  className="text-sm text-gray-400 hover:text-[#4A5CFF] transition-colors"
                >
                  Normatividad
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.LEGAL.PROTECCION_DATOS}
                  className="text-sm text-gray-400 hover:text-[#4A5CFF] transition-colors"
                >
                  Privacidad
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-[#4A5CFF] transition-colors"
                >
                  Términos
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom - Moderno */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 Verla. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-lg">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-500">Disponible 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
