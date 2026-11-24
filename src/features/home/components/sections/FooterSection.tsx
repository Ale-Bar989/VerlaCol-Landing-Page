import { memo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { ROUTES } from "@/core/router/routes.config";
import { EXTERNAL_LINKS } from "@/features/home/data/institucional.data";
import LogoVerla from "@/shared/assets/logo verla horizontal.png";

const FooterSection = memo(() => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAnchor = (
    e: React.MouseEvent<HTMLAnchorElement>,
    hash: string
  ) => {
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
    <footer className="bg-white border-t border-slate-200 text-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-slate-200">
          {/* Reafirmación de identidad VERLA */}
          <div className="md:col-span-4 space-y-4">
            <img
              src={LogoVerla}
              alt="VERLA Grupo Empresarial"
              className="h-8 w-auto object-contain"
            />
            <p className="text-sm font-semibold text-[#1E1E6E]">
              Impulsando el futuro de las telecomunicaciones en Colombia
            </p>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Grupo empresarial líder en el desarrollo de conectividad nacional
              e infraestructura FTTH propia en Colombia.
            </p>
          </div>

          {/* Accesos rápidos institucionales */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-slate-900">
              Enlaces Institucionales
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/#grupo-empresarial"
                  onClick={(e) => handleAnchor(e, "#grupo-empresarial")}
                  className="text-slate-600 hover:text-[#1D4ED8] transition-colors"
                >
                  Conoce al grupo
                </a>
              </li>
              <li>
                <a
                  href="/#noticias-logros"
                  onClick={(e) => handleAnchor(e, "#noticias-logros")}
                  className="text-slate-600 hover:text-[#1D4ED8] transition-colors"
                >
                  Noticias y Logros
                </a>
              </li>
              <li>
                <a
                  href="/#contacto"
                  onClick={(e) => handleAnchor(e, "#contacto")}
                  className="text-slate-600 hover:text-[#1D4ED8] transition-colors"
                >
                  Contacto
                </a>
              </li>
              <li className="pt-1">
                <a
                  href={EXTERNAL_LINKS.TREENET}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-[#1D4ED8] hover:text-[#1E40AF] transition-colors"
                >
                  <span>Ir a treenet</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>

          {/* Políticas y Legal (cumplimiento regulatorio) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-slate-900">
              Políticas y Legal
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to={ROUTES.LEGAL.PROTECCION_DATOS}
                  className="text-slate-600 hover:text-[#1D4ED8] transition-colors"
                >
                  Política de tratamiento de datos
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.LEGAL.NORMATIVIDAD}
                  className="text-slate-600 hover:text-[#1D4ED8] transition-colors"
                >
                  Normatividad
                </Link>
              </li>
              <li>
                <Link
                  to={ROUTES.LEGAL.PROTECCION_USUARIOS}
                  className="text-slate-600 hover:text-[#1D4ED8] transition-colors"
                >
                  Protección al usuario
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-slate-900">Contacto</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#1D4ED8] mt-0.5 shrink-0" />
                <a
                  href="tel:+573115761963"
                  className="hover:text-[#1D4ED8] transition-colors"
                >
                  311-576-1963
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#1D4ED8] mt-0.5 shrink-0" />
                <a
                  href="mailto:info@verla.com.co"
                  className="hover:text-[#1D4ED8] transition-colors"
                >
                  info@verla.com.co
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1D4ED8] mt-0.5 shrink-0" />
                <span>
                  Carrera 69 # 25B - 44. Edificio World Business Port, Oficina
                  613. Bogotá, Cundinamarca, Salitre
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 Grupo VERLA S.A.S. Todos los derechos reservados.</p>
          <p>
            Marca operativa comercial:{" "}
            <a
              href={EXTERNAL_LINKS.TREENET}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#1D4ED8] hover:underline"
            >
              treenet.com.co
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
});

FooterSection.displayName = "FooterSection";

export default FooterSection;
