import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Shield,
  Globe,
  Lock,
  AlertCircle,
  FileText,
  Filter,
  DollarSign,
  Sun,
  Moon,
} from "lucide-react";
import { useState, memo, useCallback } from "react";
import { ROUTES } from "@/core/router/routes.config";
import { useTheme } from "@/core/contexts";
import LogoVerla from "@/shared/assets/logo verla horizontal.png";

// Navbar moderno con diseño tipo Superhuman - Optimizado
// Ubicación: src/ui/components/layout/Navbar/Navbar.tsx

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  // Menú Legal: VISIBLE — los temas legales son obligatorios para un ISP en Colombia
  // (Protección de Datos, Comparador de Tarifas, etc.) y NO pueden ocultarse.
  const MOSTRAR_LEGAL_NAV = true;

  // MODO EXPECTATIVA: enlaces "Nosotros" y "Precios" ocultos del header.
  // Su contenido sigue accesible vía footer y URL directa.
  // Reactivar cambiando a true cuando se levante el modo expectativa.
  const MOSTRAR_NAV_SECUNDARIOS = false;

  // Memoizar handlers para evitar recreación
  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleLegalToggle = useCallback(() => {
    setIsLegalOpen((prev) => !prev);
  }, []);

  const handleMenuClose = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-colors duration-300 ${
        isDark
          ? "bg-black/70 border-white/10"
          : "bg-white/90 border-gray-300/60 shadow-md"
      }`}
    >
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to={ROUTES.HOME} className="group flex items-center">
            <img
              src={LogoVerla}
              alt="Verla"
              className="h-20 w-auto max-w-[220px]"
              style={{
                transition: "all 300ms ease",
                filter: isDark
                  ? "brightness(1.5) contrast(1.3) saturate(1.1)"
                  : "none",
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              to={ROUTES.HOME}
              className={`group relative px-4 py-2 text-sm rounded-lg font-medium ${
                isDark
                  ? "text-gray-300 hover:text-white hover:bg-white/10"
                  : "text-gray-700 hover:text-gray-900 hover:bg-blue-50"
              }`}
              style={{ transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)" }}
            >
              Inicio
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-[#4A5CFF] to-[#7A8FFF] group-hover:w-8 transition-all duration-300 rounded-full"></div>
            </Link>
            {/* MODO EXPECTATIVA: "Nosotros" oculto del header (accesible vía footer y /about).
                Reactivar cambiando MOSTRAR_NAV_SECUNDARIOS a true cuando se levante el modo expectativa. */}
            {MOSTRAR_NAV_SECUNDARIOS && (
            <Link
              to={ROUTES.ABOUT}
              className={`group relative px-4 py-2 text-sm rounded-lg font-medium ${
                isDark
                  ? "text-gray-300 hover:text-white hover:bg-white/10"
                  : "text-gray-700 hover:text-gray-900 hover:bg-blue-50"
              }`}
              style={{ transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)" }}
            >
              Nosotros
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-[#4A5CFF] to-[#7A8FFF] group-hover:w-8 transition-all duration-300 rounded-full"></div>
            </Link>
            )}
            {/* Apartado 2: Planes y Contacto — enlace "Planes" al lead magnet */}
            <Link
              to={`${ROUTES.PRICING}#registro`}
              className={`group relative px-4 py-2 text-sm rounded-lg font-medium ${
                isDark
                  ? "text-gray-300 hover:text-white hover:bg-white/10"
                  : "text-gray-700 hover:text-gray-900 hover:bg-blue-50"
              }`}
              style={{ transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)" }}
            >
              Planes
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-[#4A5CFF] to-[#7A8FFF] group-hover:w-8 transition-all duration-300 rounded-full"></div>
            </Link>
            {/* MODO EXPECTATIVA: Mega-menú "Legal" oculto del header.
                Las páginas legales siguen accesibles vía footer (Política de Privacidad) y URL directa.
                Reactivar cambiando MOSTRAR_LEGAL_NAV a true cuando se levante el modo expectativa. */}
            {MOSTRAR_LEGAL_NAV && (
            <div className="relative group">
              <button
                className={`group/navitem flex items-center gap-1.5 px-4 py-2 text-sm rounded-lg font-medium ${
                  isDark
                    ? "text-gray-300 hover:text-white hover:bg-white/10"
                    : "text-gray-700 hover:text-gray-900 hover:bg-blue-50"
                }`}
                style={{ transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)" }}
              >
                <span className="relative">
                  Legal
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-[#4A5CFF] to-[#7A8FFF] group-hover/navitem:w-8 transition-all duration-300 rounded-full"></div>
                </span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
              </button>

              {/* Mega Menu Dropdown - Diseño Moderno Mejorado */}
              <div className="absolute left-1/2 -translate-x-1/2 mt-6 w-[680px] opacity-0 translate-y-4 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 z-50">
                <div
                  className={`relative backdrop-blur-2xl rounded-3xl overflow-hidden ${
                    isDark
                      ? "bg-linear-to-br from-gray-900/98 via-black/98 to-gray-900/98 border border-white/15 shadow-2xl"
                      : "bg-white/98 border border-gray-300 shadow-2xl"
                  }`}
                  style={
                    !isDark
                      ? {
                          boxShadow:
                            "0 25px 50px -12px rgba(91, 111, 255, 0.15), 0 0 0 1px rgba(91, 111, 255, 0.05)",
                        }
                      : {}
                  }
                >
                  {/* Efectos de fondo animados */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br pointer-events-none ${
                      isDark
                        ? "from-[#5B6FFF]/5 via-transparent to-[#4A5CFF]/5"
                        : "from-blue-50 via-indigo-50/30 to-purple-50"
                    }`}
                  ></div>
                  <div
                    className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none ${
                      isDark ? "bg-[#5B6FFF]/10" : "bg-purple-200/40"
                    }`}
                  ></div>

                  {/* Header decorativo mejorado */}
                  <div
                    className={`relative px-8 py-5 ${
                      isDark
                        ? "bg-linear-to-r from-[#5B6FFF]/15 via-[#7A8FFF]/10 to-[#4A5CFF]/15 border-b border-white/10"
                        : "bg-linear-to-r from-blue-100 via-indigo-100 to-purple-100 border-b border-blue-200"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3
                          className={`font-bold text-base tracking-tight flex items-center gap-2 ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}
                        >
                          Legal y Regulatorio
                          <span className="px-2 py-0.5 bg-[#7A8FFF]/20 rounded-full text-[10px] text-[#4A5CFF] font-medium">
                            8
                          </span>
                        </h3>
                        <p
                          className={`text-xs mt-1 ${
                            isDark ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          Toda la información legal y de cumplimiento
                        </p>
                      </div>
                      <div className="w-10 h-10 bg-linear-to-br from-[#5B6FFF]/20 to-[#4A5CFF]/20 rounded-xl flex items-center justify-center">
                        <Shield className="w-5 h-5 text-[#4A5CFF]" />
                      </div>
                    </div>
                  </div>

                  {/* Content - Grid de 2 columnas moderno */}
                  <div className="p-4 grid grid-cols-2 gap-3">
                    {/* Columna 1 */}
                    <div className="space-y-2">
                      <Link
                        to={ROUTES.LEGAL.PROTECCION_USUARIOS}
                        className={`group/item relative flex items-start gap-3 px-4 py-3.5 rounded-2xl border transition-all duration-300 ${
                          isDark
                            ? "bg-linear-to-br from-[#7A8FFF]/5 to-transparent hover:from-[#7A8FFF]/15 hover:to-[#4A5CFF]/5 border-transparent hover:border-[#7A8FFF]/30"
                            : "bg-linear-to-br from-indigo-100/80 to-indigo-50/40 hover:from-indigo-200 hover:to-purple-100 border-indigo-200 hover:border-indigo-400 hover:shadow-lg"
                        }`}
                      >
                        <div className="p-2.5 rounded-xl bg-linear-to-br from-[#5B6FFF]/20 to-[#4A5CFF]/10 group-hover/item:from-[#7A8FFF]/30 group-hover/item:to-[#4A5CFF]/20 transition-all duration-300 shadow-lg shadow-[#5B6FFF]/10">
                          <AlertCircle className="w-4 h-4 text-[#4A5CFF] group-hover/item:scale-110 transition-transform" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div
                            className={`text-sm font-semibold transition-colors mb-0.5 ${
                              isDark
                                ? "text-gray-200 group-hover/item:text-white"
                                : "text-gray-700 group-hover/item:text-gray-900"
                            }`}
                          >
                            Protección Usuarios
                          </div>
                          <p
                            className={`text-xs transition-colors ${
                              isDark
                                ? "text-gray-500 group-hover/item:text-gray-400"
                                : "text-gray-600 group-hover/item:text-gray-800"
                            }`}
                          >
                            Indicadores y métricas
                          </p>
                        </div>
                      </Link>

                      <Link
                        to={ROUTES.LEGAL.NORMATIVIDAD}
                        className={`group/item relative flex items-start gap-3 px-4 py-3.5 rounded-2xl border transition-all duration-300 ${
                          isDark
                            ? "bg-linear-to-br from-[#7A8FFF]/5 to-transparent hover:from-[#7A8FFF]/15 hover:to-[#4A5CFF]/5 border-transparent hover:border-[#7A8FFF]/30"
                            : "bg-linear-to-br from-indigo-100/80 to-indigo-50/40 hover:from-indigo-200 hover:to-purple-100 border-indigo-200 hover:border-indigo-400 hover:shadow-lg"
                        }`}
                      >
                        <div className="p-2.5 rounded-xl bg-linear-to-br from-[#5B6FFF]/20 to-[#4A5CFF]/10 group-hover/item:from-[#7A8FFF]/30 group-hover/item:to-[#4A5CFF]/20 transition-all duration-300 shadow-lg shadow-[#5B6FFF]/10">
                          <FileText className="w-4 h-4 text-[#4A5CFF] group-hover/item:scale-110 transition-transform" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div
                            className={`text-sm font-semibold transition-colors mb-0.5 ${
                              isDark
                                ? "text-gray-200 group-hover/item:text-white"
                                : "text-gray-700 group-hover/item:text-gray-900"
                            }`}
                          >
                            Normatividad
                          </div>
                          <p
                            className={`text-xs transition-colors ${
                              isDark
                                ? "text-gray-500 group-hover/item:text-gray-400"
                                : "text-gray-600 group-hover/item:text-gray-800"
                            }`}
                          >
                            Marco legal vigente
                          </p>
                        </div>
                      </Link>

                      <Link
                        to={ROUTES.LEGAL.PROTECCION_DATOS}
                        className={`group/item relative flex items-start gap-3 px-4 py-3.5 rounded-2xl border transition-all duration-300 ${
                          isDark
                            ? "bg-linear-to-br from-[#7A8FFF]/5 to-transparent hover:from-[#7A8FFF]/15 hover:to-[#4A5CFF]/5 border-transparent hover:border-[#7A8FFF]/30"
                            : "bg-linear-to-br from-indigo-100/80 to-indigo-50/40 hover:from-indigo-200 hover:to-purple-100 border-indigo-200 hover:border-indigo-400 hover:shadow-lg"
                        }`}
                      >
                        <div className="p-2.5 rounded-xl bg-linear-to-br from-[#5B6FFF]/20 to-[#4A5CFF]/10 group-hover/item:from-[#7A8FFF]/30 group-hover/item:to-[#4A5CFF]/20 transition-all duration-300 shadow-lg shadow-[#5B6FFF]/10">
                          <Lock className="w-4 h-4 text-[#4A5CFF] group-hover/item:scale-110 transition-transform" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div
                            className={`text-sm font-semibold transition-colors mb-0.5 ${
                              isDark
                                ? "text-gray-200 group-hover/item:text-white"
                                : "text-gray-700 group-hover/item:text-gray-900"
                            }`}
                          >
                            Datos Personales
                          </div>
                          <p
                            className={`text-xs transition-colors ${
                              isDark
                                ? "text-gray-500 group-hover/item:text-gray-400"
                                : "text-gray-600 group-hover/item:text-gray-800"
                            }`}
                          >
                            Política de tratamiento
                          </p>
                        </div>
                      </Link>

                      <Link
                        to={ROUTES.LEGAL.INTERNET_SANO}
                        className={`group/item relative flex items-start gap-3 px-4 py-3.5 rounded-2xl border transition-all duration-300 ${
                          isDark
                            ? "bg-linear-to-br from-[#7A8FFF]/5 to-transparent hover:from-[#7A8FFF]/15 hover:to-[#4A5CFF]/5 border-transparent hover:border-[#7A8FFF]/30"
                            : "bg-linear-to-br from-indigo-100/80 to-indigo-50/40 hover:from-indigo-200 hover:to-purple-100 border-indigo-200 hover:border-indigo-400 hover:shadow-lg"
                        }`}
                      >
                        <div className="p-2.5 rounded-xl bg-linear-to-br from-[#5B6FFF]/20 to-[#4A5CFF]/10 group-hover/item:from-[#7A8FFF]/30 group-hover/item:to-[#4A5CFF]/20 transition-all duration-300 shadow-lg shadow-[#5B6FFF]/10">
                          <Globe className="w-4 h-4 text-[#4A5CFF] group-hover/item:scale-110 transition-transform" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div
                            className={`text-sm font-semibold transition-colors mb-0.5 ${
                              isDark
                                ? "text-gray-200 group-hover/item:text-white"
                                : "text-gray-700 group-hover/item:text-gray-900"
                            }`}
                          >
                            Internet Sano
                          </div>
                          <p
                            className={`text-xs transition-colors ${
                              isDark
                                ? "text-gray-500 group-hover/item:text-gray-400"
                                : "text-gray-600 group-hover/item:text-gray-800"
                            }`}
                          >
                            Uso responsable
                          </p>
                        </div>
                      </Link>
                    </div>

                    {/* Columna 2 */}
                    <div className="space-y-2">
                      <Link
                        to={ROUTES.LEGAL.FILTRADO}
                        className={`group/item relative flex items-start gap-3 px-4 py-3.5 rounded-2xl border transition-all duration-300 ${
                          isDark
                            ? "bg-linear-to-br from-[#7A8FFF]/5 to-transparent hover:from-[#7A8FFF]/15 hover:to-[#4A5CFF]/5 border-transparent hover:border-[#7A8FFF]/30"
                            : "bg-linear-to-br from-indigo-100/80 to-indigo-50/40 hover:from-indigo-200 hover:to-purple-100 border-indigo-200 hover:border-indigo-400 hover:shadow-lg"
                        }`}
                      >
                        <div className="p-2.5 rounded-xl bg-linear-to-br from-[#5B6FFF]/20 to-[#4A5CFF]/10 group-hover/item:from-[#7A8FFF]/30 group-hover/item:to-[#4A5CFF]/20 transition-all duration-300 shadow-lg shadow-[#5B6FFF]/10">
                          <Filter className="w-4 h-4 text-[#4A5CFF] group-hover/item:scale-110 transition-transform" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div
                            className={`text-sm font-semibold transition-colors mb-0.5 ${
                              isDark
                                ? "text-gray-200 group-hover/item:text-white"
                                : "text-gray-700 group-hover/item:text-gray-900"
                            }`}
                          >
                            Mecanismos Filtrado
                          </div>
                          <p
                            className={`text-xs transition-colors ${
                              isDark
                                ? "text-gray-500 group-hover/item:text-gray-400"
                                : "text-gray-600 group-hover/item:text-gray-800"
                            }`}
                          >
                            Control de contenido
                          </p>
                        </div>
                      </Link>

                      <Link
                        to={ROUTES.LEGAL.SEGURIDAD}
                        className={`group/item relative flex items-start gap-3 px-4 py-3.5 rounded-2xl border transition-all duration-300 ${
                          isDark
                            ? "bg-linear-to-br from-[#7A8FFF]/5 to-transparent hover:from-[#7A8FFF]/15 hover:to-[#4A5CFF]/5 border-transparent hover:border-[#7A8FFF]/30"
                            : "bg-linear-to-br from-indigo-100/80 to-indigo-50/40 hover:from-indigo-200 hover:to-purple-100 border-indigo-200 hover:border-indigo-400 hover:shadow-lg"
                        }`}
                      >
                        <div className="p-2.5 rounded-xl bg-linear-to-br from-[#5B6FFF]/20 to-[#4A5CFF]/10 group-hover/item:from-[#7A8FFF]/30 group-hover/item:to-[#4A5CFF]/20 transition-all duration-300 shadow-lg shadow-[#5B6FFF]/10">
                          <Shield className="w-4 h-4 text-[#4A5CFF] group-hover/item:scale-110 transition-transform" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div
                            className={`text-sm font-semibold transition-colors mb-0.5 ${
                              isDark
                                ? "text-gray-200 group-hover/item:text-white"
                                : "text-gray-700 group-hover/item:text-gray-900"
                            }`}
                          >
                            Seguridad en la Red
                          </div>
                          <p
                            className={`text-xs transition-colors ${
                              isDark
                                ? "text-gray-500 group-hover/item:text-gray-400"
                                : "text-gray-600 group-hover/item:text-gray-800"
                            }`}
                          >
                            Protocolos y medidas
                          </p>
                        </div>
                      </Link>

                      <Link
                        to={ROUTES.LEGAL.COMPARADOR_TARIFAS}
                        className={`group/item relative flex items-start gap-3 px-4 py-3.5 rounded-2xl border transition-all duration-300 ${
                          isDark
                            ? "bg-linear-to-br from-[#7A8FFF]/5 to-transparent hover:from-[#7A8FFF]/15 hover:to-[#4A5CFF]/5 border-transparent hover:border-[#7A8FFF]/30"
                            : "bg-linear-to-br from-indigo-100/80 to-indigo-50/40 hover:from-indigo-200 hover:to-purple-100 border-indigo-200 hover:border-indigo-400 hover:shadow-lg"
                        }`}
                      >
                        <div className="p-2.5 rounded-xl bg-linear-to-br from-[#5B6FFF]/20 to-[#4A5CFF]/10 group-hover/item:from-[#7A8FFF]/30 group-hover/item:to-[#4A5CFF]/20 transition-all duration-300 shadow-lg shadow-[#5B6FFF]/10">
                          <DollarSign className="w-4 h-4 text-[#4A5CFF] group-hover/item:scale-110 transition-transform" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div
                            className={`text-sm font-semibold transition-colors mb-0.5 ${
                              isDark
                                ? "text-gray-200 group-hover/item:text-white"
                                : "text-gray-700 group-hover/item:text-gray-900"
                            }`}
                          >
                            Comparador Tarifas
                          </div>
                          <p
                            className={`text-xs transition-colors ${
                              isDark
                                ? "text-gray-500 group-hover/item:text-gray-400"
                                : "text-gray-600 group-hover/item:text-gray-800"
                            }`}
                          >
                            Mejores opciones
                          </p>
                        </div>
                      </Link>

                      <Link
                        to={ROUTES.LEGAL.PROTECCION_INFANTIL}
                        className={`group/item relative flex items-start gap-3 px-4 py-3.5 rounded-2xl border transition-all duration-300 ${
                          isDark
                            ? "bg-linear-to-br from-[#7A8FFF]/5 to-transparent hover:from-[#7A8FFF]/15 hover:to-[#4A5CFF]/5 border-transparent hover:border-[#7A8FFF]/30"
                            : "bg-linear-to-br from-indigo-100/80 to-indigo-50/40 hover:from-indigo-200 hover:to-purple-100 border-indigo-200 hover:border-indigo-400 hover:shadow-lg"
                        }`}
                      >
                        <div className="p-2.5 rounded-xl bg-linear-to-br from-[#5B6FFF]/20 to-[#4A5CFF]/10 group-hover/item:from-[#7A8FFF]/30 group-hover/item:to-[#4A5CFF]/20 transition-all duration-300 shadow-lg shadow-[#5B6FFF]/10">
                          <Shield className="w-4 h-4 text-[#4A5CFF] group-hover/item:scale-110 transition-transform" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div
                            className={`text-sm font-semibold transition-colors mb-0.5 ${
                              isDark
                                ? "text-gray-200 group-hover/item:text-white"
                                : "text-gray-700 group-hover/item:text-gray-900"
                            }`}
                          >
                            Protección Infantil
                          </div>
                          <p
                            className={`text-xs transition-colors ${
                              isDark
                                ? "text-gray-500 group-hover/item:text-gray-400"
                                : "text-gray-600 group-hover/item:text-gray-800"
                            }`}
                          >
                            Seguridad menores
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Footer con gradiente decorativo */}
                  <div className="relative h-1 bg-linear-to-r from-transparent via-purple-500/40 to-transparent"></div>
                </div>
              </div>
            </div>
            )}
          </div>

          {/* Theme Toggle Button - Oculto en móvil */}
          <button
            onClick={toggleTheme}
            onMouseEnter={() => setIsTooltipVisible(true)}
            onMouseLeave={() => setIsTooltipVisible(false)}
            className="hidden md:flex group relative w-11 h-11 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 items-center justify-center transition-all duration-500 hover:scale-105"
            aria-label={
              theme === "dark"
                ? "Cambiar a tema claro"
                : "Cambiar a tema oscuro"
            }
            style={{
              boxShadow:
                theme === "dark"
                  ? "0 2px 8px rgba(74, 92, 255, 0.15)"
                  : "0 2px 8px rgba(74, 92, 255, 0.25)",
            }}
          >
            {/* Contenedor con overflow para efectos internos */}
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              {/* Efecto de fondo animado */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{
                  background:
                    theme === "dark"
                      ? "linear-gradient(135deg, rgba(74, 92, 255, 0.2), rgba(122, 143, 255, 0.15))"
                      : "linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 165, 0, 0.15))",
                }}
              ></div>

              {/* Círculo de fondo giratorio */}
              <div
                className="absolute inset-0 rounded-xl transition-all duration-700"
                style={{
                  background:
                    theme === "dark"
                      ? "conic-gradient(from 0deg, transparent, rgba(74, 92, 255, 0.15), transparent)"
                      : "conic-gradient(from 0deg, transparent, rgba(255, 215, 0, 0.25), transparent)",
                  transform: `rotate(${theme === "dark" ? "0deg" : "180deg"})`,
                }}
              ></div>
            </div>

            {/* Iconos con animación mejorada */}
            <div className="relative w-5 h-5 z-10">
              <Sun
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  theme === "dark"
                    ? "opacity-0 rotate-180 scale-0"
                    : "opacity-100 rotate-0 scale-100 text-yellow-500"
                }`}
                size={20}
                strokeWidth={2.5}
                style={{
                  filter:
                    theme === "light"
                      ? "drop-shadow(0 0 4px rgba(255, 215, 0, 0.6))"
                      : "none",
                }}
              />
              <Moon
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  theme === "dark"
                    ? "opacity-100 rotate-0 scale-100 text-blue-400"
                    : "opacity-0 -rotate-180 scale-0"
                }`}
                size={20}
                strokeWidth={2.5}
                style={{
                  filter:
                    theme === "dark"
                      ? "drop-shadow(0 0 4px rgba(74, 92, 255, 0.6))"
                      : "none",
                }}
              />
            </div>

            {/* Tooltip moderno - Aparece hacia abajo - Adaptado al tema */}
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-4 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap pointer-events-none"
              style={{
                background:
                  theme === "dark"
                    ? "linear-gradient(135deg, rgba(26, 26, 26, 0.98), rgba(15, 15, 15, 0.98))"
                    : "linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 252, 0.98))",
                backdropFilter: "blur(20px)",
                border: `1.5px solid ${
                  theme === "dark"
                    ? "rgba(74, 92, 255, 0.4)"
                    : "rgba(74, 92, 255, 0.3)"
                }`,
                boxShadow:
                  theme === "dark"
                    ? "0 10px 40px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(74, 92, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                    : "0 10px 40px rgba(74, 92, 255, 0.25), 0 0 0 1px rgba(74, 92, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)",
                color: theme === "dark" ? "#ffffff" : "#1a1a1a",
                zIndex: 9999,
                opacity: isTooltipVisible ? 1 : 0,
                transform: isTooltipVisible 
                  ? "translateY(0) scale(1)" 
                  : "translateY(-8px) scale(0.95)",
                transition: "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {/* Flecha superior */}
              <div
                className="absolute bottom-full left-1/2 -translate-x-1/2"
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: "7px solid transparent",
                  borderRight: "7px solid transparent",
                  borderBottom: `7px solid ${
                    theme === "dark"
                      ? "rgba(26, 26, 26, 0.98)"
                      : "rgba(255, 255, 255, 0.98)"
                  }`,
                  marginBottom: "-1px",
                  opacity: isTooltipVisible ? 1 : 0,
                  transition: "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              ></div>

              <span className="flex items-center gap-2 relative">
                {theme === "dark" ? (
                  <Moon className="w-4 h-4 text-blue-400" strokeWidth={2.5} />
                ) : (
                  <Sun className="w-4 h-4 text-yellow-500" strokeWidth={2.5} />
                )}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      theme === "dark"
                        ? "linear-gradient(to right, #ffffff, #e5e7eb)"
                        : "linear-gradient(to right, #1a1a1a, #4b5563)",
                  }}
                >
                  {theme === "dark" ? "Tema Oscuro" : "Tema Claro"}
                </span>
              </span>

              {/* Brillo sutil */}
              <div
                className="absolute inset-0 rounded-xl opacity-30 pointer-events-none"
                style={{
                  background:
                    theme === "dark"
                      ? "linear-gradient(135deg, rgba(74, 92, 255, 0.2), transparent)"
                      : "linear-gradient(135deg, rgba(74, 92, 255, 0.15), transparent)",
                }}
              ></div>
            </div>
          </button>

          {/* CTA Button moderno */}
          <div className="hidden md:block ml-2">
            <Link
              to={ROUTES.CONTACT}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold overflow-hidden text-white!"
              style={{
                background: "linear-gradient(135deg, #4A5CFF, #7A8FFF)",
                boxShadow: "0 4px 15px rgba(74, 92, 255, 0.3)",
                color: "#FFFFFF !important",
              }}
            >
              <span className="relative text-white!" style={{ color: "#FFFFFF !important" }}>Contactar</span>
              <svg
                className="relative w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                  stroke="#FFFFFF"
                  style={{ stroke: "#FFFFFF !important" }}
                />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button moderno */}
          <button
            onClick={handleMenuToggle}
            className={`md:hidden group relative p-3 rounded-xl transition-all duration-500 overflow-hidden ${
              isDark
                ? "bg-white/10 hover:bg-white/15 border border-white/15 hover:border-white/25"
                : "bg-blue-50 hover:bg-blue-100 border border-blue-200 hover:border-blue-400"
            }`}
            style={{
              boxShadow: isDark
                ? "0 4px 12px rgba(74, 92, 255, 0.15)"
                : "0 4px 12px rgba(74, 92, 255, 0.1)",
            }}
          >
            {/* Efecto de fondo */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: isDark
                  ? "linear-gradient(135deg, rgba(74, 92, 255, 0.15), rgba(122, 143, 255, 0.1))"
                  : "linear-gradient(135deg, rgba(74, 92, 255, 0.1), rgba(122, 143, 255, 0.05))",
              }}
            ></div>

            <div className="relative z-10">
              {isMenuOpen ? (
                <X
                  size={22}
                  className={`transition-all duration-300 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                  style={{
                    transform: isMenuOpen ? "rotate(90deg)" : "rotate(0deg)",
                  }}
                />
              ) : (
                <Menu
                  size={22}
                  className={`transition-all duration-300 ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                />
              )}
            </div>
          </button>
        </div>

        {/* Mobile Menu Moderno */}
        <div
          className={`md:hidden transition-all duration-500 ease-out ${
            isMenuOpen ? "max-h-[90vh] opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{
            overflowY: isMenuOpen ? "auto" : "hidden",
            overflowX: "hidden",
          }}
        >
          <div
            className={`mt-6 pb-6 space-y-2 rounded-2xl p-4 backdrop-blur-xl ${
              isDark
                ? "bg-white/10 border border-white/15"
                : "bg-linear-to-b from-blue-50 to-white border border-blue-200"
            }`}
            style={{
              boxShadow: isDark
                ? "0 8px 32px rgba(0, 0, 0, 0.3)"
                : "0 8px 32px rgba(74, 92, 255, 0.08)",
            }}
          >
            {/* Enlaces principales */}
            <Link
              to={ROUTES.HOME}
              onClick={handleMenuClose}
              className={`group flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 ${
                isDark
                  ? "text-gray-300 hover:text-white hover:bg-white/10"
                  : "text-gray-700 hover:text-gray-900 hover:bg-blue-50"
              }`}
            >
              <div className="w-2 h-2 rounded-full bg-[#4A5CFF] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"></div>
              <span className="text-sm font-semibold">Inicio</span>
            </Link>

            {/* MODO EXPECTATIVA: "Nosotros" y "Precios" ocultos en el menú móvil.
                Apartado 2 se presenta como "Planes" (redirige al lead magnet).
                Reactivar cambiando MOSTRAR_NAV_SECUNDARIOS a true cuando se levante el modo expectativa. */}
            {MOSTRAR_NAV_SECUNDARIOS && (<>
            <Link
              to={ROUTES.ABOUT}
              onClick={handleMenuClose}
              className={`group flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 ${
                isDark
                  ? "text-gray-300 hover:text-white hover:bg-white/10"
                  : "text-gray-700 hover:text-gray-900 hover:bg-blue-50"
              }`}
            >
              <div className="w-2 h-2 rounded-full bg-[#4A5CFF] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"></div>
              <span className="text-sm font-semibold">Nosotros</span>
            </Link>

            <Link
              to={ROUTES.PRICING}
              onClick={handleMenuClose}
              className={`group flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 ${
                isDark
                  ? "text-gray-300 hover:text-white hover:bg-white/10"
                  : "text-gray-700 hover:text-gray-900 hover:bg-blue-50"
              }`}
            >
              <div className="w-2 h-2 rounded-full bg-[#4A5CFF] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"></div>
              <span className="text-sm font-semibold">Precios</span>
            </Link>
            </>)}

            {/* Apartado 2: Planes (modo expectativa, lleva al lead magnet) */}
            <Link
              to={`${ROUTES.PRICING}#registro`}
              onClick={handleMenuClose}
              className={`group flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 ${
                isDark
                  ? "text-gray-300 hover:text-white hover:bg-white/10"
                  : "text-gray-700 hover:text-gray-900 hover:bg-blue-50"
              }`}
            >
              <div className="w-2 h-2 rounded-full bg-[#4A5CFF] opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"></div>
              <span className="text-sm font-semibold">Planes</span>
            </Link>

            {/* Botón CTA en móvil */}
            <Link
              to={ROUTES.CONTACT}
              onClick={() => setIsMenuOpen(false)}
              className="group flex items-center justify-center gap-2 px-4 py-3.5 text-white rounded-xl mt-2 font-medium text-sm"
              style={{
                background: "linear-gradient(135deg, #4A5CFF, #7A8FFF)",
                transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.02)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <span>Contactar</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>

            {/* Separador visual */}
            <div
              className={`h-px my-3 ${isDark ? "bg-white/10" : "bg-gray-200"}`}
            ></div>

            {/* MODO EXPECTATIVA: bloque "Legal y Regulatorio" expandible oculto en móvil.
                Reactivar cambiando MOSTRAR_LEGAL_NAV a true cuando se levante el modo expectativa. */}
            {MOSTRAR_LEGAL_NAV && (
            <div className="space-y-2">
              <button
                onClick={handleLegalToggle}
                className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-300 group ${
                  isDark
                    ? "text-gray-300 hover:text-white hover:bg-white/10"
                    : "text-gray-700 hover:text-gray-900 hover:bg-linear-to-r hover:from-purple-50 hover:to-blue-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isDark
                        ? "bg-purple-500/15 group-hover:bg-purple-500/25"
                        : "bg-purple-100 group-hover:bg-purple-200"
                    }`}
                  >
                    <Shield
                      className={`w-4 h-4 ${
                        isDark ? "text-purple-400" : "text-purple-600"
                      }`}
                    />
                  </div>
                  <span className="font-semibold">Legal y Regulatorio</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isLegalOpen ? "rotate-180" : ""
                  } ${isDark ? "text-gray-400" : "text-gray-600"}`}
                />
              </button>

              {/* Submenú Legal */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isLegalOpen
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-4 space-y-1 py-2">
                  <Link
                    to={ROUTES.LEGAL.PROTECCION_USUARIOS}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-purple-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                  >
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Indicadores Protección Usuarios</span>
                  </Link>
                  <Link
                    to={ROUTES.LEGAL.NORMATIVIDAD}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-purple-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Normatividad</span>
                  </Link>
                  <Link
                    to={ROUTES.LEGAL.PROTECCION_DATOS}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-blue-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    <span>Política de Datos Personales</span>
                  </Link>
                  <Link
                    to={ROUTES.LEGAL.INTERNET_SANO}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Internet Sano</span>
                  </Link>
                  <Link
                    to={ROUTES.LEGAL.FILTRADO}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-orange-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                  >
                    <Filter className="w-3.5 h-3.5" />
                    <span>Mecanismos de Filtrado</span>
                  </Link>
                  <Link
                    to={ROUTES.LEGAL.SEGURIDAD}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-green-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                  >
                    <Shield className="w-3.5 h-3.5" />
                    <span>Seguridad en la Red</span>
                  </Link>
                  <Link
                    to={ROUTES.LEGAL.COMPARADOR_TARIFAS}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-purple-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                  >
                    <DollarSign className="w-3.5 h-3.5" />
                    <span>Comparador de Tarifas</span>
                  </Link>
                  <Link
                    to={ROUTES.LEGAL.PROTECCION_INFANTIL}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-400 hover:text-purple-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                  >
                    <Shield className="w-3.5 h-3.5" />
                    <span>Protección Infantil</span>
                  </Link>
                </div>
              </div>
            </div>
            )}

            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className={`group flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-300 ${
                isDark
                  ? "text-gray-300 hover:text-white hover:bg-white/10"
                  : "text-gray-700 hover:text-gray-900 hover:bg-linear-to-r hover:from-yellow-50 hover:to-blue-50"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isDark
                      ? "bg-linear-to-br from-[#4A5CFF]/20 to-[#7A8FFF]/20 group-hover:from-[#4A5CFF]/30 group-hover:to-[#7A8FFF]/30"
                      : "bg-linear-to-br from-yellow-100 to-blue-100 group-hover:from-yellow-200 group-hover:to-blue-200"
                  }`}
                >
                  {theme === "dark" ? (
                    <Moon className="w-4 h-4 text-blue-400" />
                  ) : (
                    <Sun className="w-4 h-4 text-yellow-600" />
                  )}
                </div>
                <span className="font-semibold">
                  {theme === "dark" ? "Tema Oscuro" : "Tema Claro"}
                </span>
              </div>
              {/* <div
                className={`text-xs px-2.5 py-1 rounded-lg ${
                  isDark
                    ? "text-gray-400 bg-white/5"
                    : "text-gray-600 bg-gray-100"
                }`}
              > */}
              {/* {theme === "dark" ? "☀️" : "🌙"} */}
              {/* </div> */}
            </button>

            {/* Separador */}
            <div
              className={`h-px my-4 ${isDark ? "bg-white/10" : "bg-gray-200"}`}
            ></div>

            {/* CTA Button */}
            <Link
              to={ROUTES.CONTACT}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-linear-to-r from-[#5B6FFF] to-[#4A5CFF] text-white px-6 py-4 rounded-xl text-sm font-semibold hover:from-[#7A8FFF] hover:to-[#4A5CFF] transition-all duration-300 shadow-lg shadow-[#5B6FFF]/30"
            >
              <span>Comenzar</span>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default memo(Navbar);
