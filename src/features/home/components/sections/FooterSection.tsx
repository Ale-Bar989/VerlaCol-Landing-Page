import { memo } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { ROUTES } from "@/core/router/routes.config";
import { useTheme } from "@/core/contexts";

// Footer section adaptado al diseño moderno horizontal
// Ubicación: src/ui/pages/home/components/FooterSection.tsx

const FooterSection = memo(() => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer
      className={`relative py-12 px-6 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="container mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <h2
              className={`text-2xl font-black mb-2 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              VERLA
            </h2>
            <p className="text-sm text-[#4A5CFF] font-medium mb-6">
              Conectividad sin límites
            </p>

            <div className="space-y-4">
              <div>
                <h3
                  className={`text-sm font-bold mb-2 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Acerca de Nosotros
                </h3>
                <p
                  className={`text-xs leading-relaxed ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Somos un proveedor confiable de servicios de
                  telecomunicaciones, ofreciendo soluciones de fibra óptica y TV
                  digital de última generación para hogares y empresas.
                </p>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4
              className={`text-sm font-bold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Servicios
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to={ROUTES.PRICING}
                  className={`text-sm hover:text-[#4A5CFF] transition-colors ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  • Planes
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.SERVICES.FIBRA_RESIDENCIAL}
                  className={`text-sm hover:text-[#4A5CFF] transition-colors ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  • Internet
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.SERVICES.TV_DIGITAL}
                  className={`text-sm hover:text-[#4A5CFF] transition-colors ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  • TV Digital
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.SERVICES.PLANES_EMPRESARIALES}
                  className={`text-sm hover:text-[#4A5CFF] transition-colors ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  • Empresas
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4
              className={`text-sm font-bold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Compañía
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to={ROUTES.ABOUT}
                  className={`text-sm hover:text-[#4A5CFF] transition-colors ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  • Quiénes Somos
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.CONTACT}
                  className={`text-sm hover:text-[#4A5CFF] transition-colors ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  • Nuestros Servicios
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.LEGAL.NORMATIVIDAD}
                  className={`text-sm hover:text-[#4A5CFF] transition-colors ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  • Clientes
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.PRICING}
                  className={`text-sm hover:text-[#4A5CFF] transition-colors ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  • Precios
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.CONTACT}
                  className={`text-sm hover:text-[#4A5CFF] transition-colors ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  • Contáctanos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div>
            <h4
              className={`text-sm font-bold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Contáctanos
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#4A5CFF] mt-0.5 shrink-0" />
                <div>
                  <p
                    className={`text-xs font-medium ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Llámanos:
                  </p>
                  <a
                    href="tel:+573115761963"
                    className={`text-sm hover:text-[#4A5CFF] transition-colors ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    311-576-1963
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2 mt-3">
                <MapPin className="w-4 h-4 text-[#4A5CFF] mt-0.5 shrink-0" />
                <div>
                  <p className={`text-xs font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    Dirección:
                  </p>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Av. El Dorado #6913-35, Bogotá, Colombia
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#4A5CFF] mt-0.5 shrink-0" />
                <div>
                  <p
                    className={`text-xs font-medium ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Email:
                  </p>
                  <a
                    href="mailto:info@verla.com.ve"
                    className={`text-sm hover:text-[#4A5CFF] transition-colors ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    info@verla.com.co
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social Column */}
          <div>
            {/* Newsletter - COMENTADO TEMPORALMENTE
            <h4
              className={`text-sm font-bold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Newsletter
            </h4>
            <div className="mb-6">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your Email"
                  className={`flex-1 text-sm px-3 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-[#4A5CFF] ${
                    isDark
                      ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500"
                      : "bg-white border-gray-300 text-gray-900 placeholder-gray-400"
                  }`}
                />
                <button
                  className="p-2 rounded transition-colors shrink-0 btn-cta-primary"
                  aria-label="Enviar"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(135deg, #7A8FFF 0%, #FFFFFF 100%)";
                    e.currentTarget.style.boxShadow =
                      "0 6px 16px rgba(122, 143, 255, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(135deg, #4A5CFF 0%, #FFFFFF 100%)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 12px rgba(74, 92, 255, 0.3)";
                  }}
                >
                  <Send className="w-5 h-5" stroke="#FFFFFF" strokeWidth={2} />
                </button>
              </div>
            </div>
            */}

            <div>
              <h4
                className={`text-sm font-bold mb-3 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Síguenos
              </h4>
              <div className="flex gap-2">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#4A5CFF] hover:bg-[#7A8FFF] flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4" fill="#FFFFFF" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#4A5CFF] hover:bg-[#7A8FFF] flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-4 h-4" fill="#FFFFFF" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#4A5CFF] hover:bg-[#7A8FFF] flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4" fill="#FFFFFF" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#4A5CFF] hover:bg-[#7A8FFF] flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" fill="#FFFFFF" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          className={`pt-6 border-t ${
            isDark ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6 text-xs">
              <Link
                to={ROUTES.LEGAL.PROTECCION_DATOS}
                className={`hover:text-[#4A5CFF] transition-colors ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Política de Privacidad
              </Link>
              <Link
                to={ROUTES.ABOUT}
                className={`hover:text-[#4A5CFF] transition-colors ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Nuestra Historia
              </Link>
              <Link
                to={ROUTES.CONTACT}
                className={`hover:text-[#4A5CFF] transition-colors ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Qué Hacemos
              </Link>
            </div>
            <p
              className={`text-xs ${
                isDark ? "text-gray-500" : "text-gray-500"
              }`}
            >
              © 2025 Verla. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});

FooterSection.displayName = "FooterSection";

export default FooterSection;
