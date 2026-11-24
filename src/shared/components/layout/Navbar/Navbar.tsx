import { useState, memo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import LogoVerla from "@/shared/assets/logo verla horizontal.png";
import { EXTERNAL_LINKS } from "@/features/home/data/institucional.data";

const NAV_ITEMS = [
  { label: "Grupo Empresarial", hash: "#grupo-empresarial" },
  { label: "Noticias y Logros", hash: "#noticias-logros" },
  { label: "Contacto", hash: "#contacto" },
] as const;

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string
  ) => {
    setIsMenuOpen(false);
    if (location.pathname === "/") {
      e.preventDefault();
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      e.preventDefault();
      navigate(`/${hash}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Identidad de marca: Logotipo institucional de VERLA */}
          <Link
            to="/"
            onClick={() => {
              setIsMenuOpen(false);
              if (location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center gap-2 shrink-0 focus:outline-none"
            aria-label="VERLA - Inicio"
          >
            <img
              src={LogoVerla}
              alt="VERLA Grupo Empresarial"
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </Link>

          {/* Navegación institucional (Desktop) */}
          <nav
            aria-label="Navegación principal"
            className="hidden md:flex items-center gap-8"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.hash}
                href={`/${item.hash}`}
                onClick={(e) => handleSectionClick(e, item.hash)}
                className="text-sm font-semibold text-slate-700 hover:text-[#2332D6] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Acción derecha (Desktop): Redirección operativa a treenet */}
          <div className="hidden md:flex items-center">
            <a
              href={EXTERNAL_LINKS.TREENET}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] shadow-sm shadow-blue-600/20 transition-all duration-200"
            >
              <span>Ir a treenet</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Botón menú móvil */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-5 space-y-2 shadow-lg">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.hash}
              href={`/${item.hash}`}
              onClick={(e) => handleSectionClick(e, item.hash)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:text-[#2332D6] hover:bg-slate-50 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={EXTERNAL_LINKS.TREENET}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] transition-colors"
            >
              <span>Ir a treenet</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default memo(Navbar);
