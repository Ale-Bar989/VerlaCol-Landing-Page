import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ROUTES } from "@/core/router/routes.config";

export type NotFoundProps = {
  title?: string;
  description?: string;
  showBackButton?: boolean;
  className?: string;
};

export const NotFound: React.FC<NotFoundProps> = ({
  title = "Oops, page not found",
  description = "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
  showBackButton = true,
  className = "",
}: NotFoundProps) => {
  return (
    <div
      className={`relative flex flex-col items-center justify-center min-h-screen overflow-hidden ${className}`}
    >
      {/* Fondo con gradiente moderno */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100" />

      {/* Efectos de fondo sutiles */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full blur-3xl radial-gradient-blue" />
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full blur-3xl radial-gradient-cyan" />
      </div>

      {/* 404 Gigante - Sin límites de ancho */}
      <div className="relative z-10 text-center w-full -mb-[15em]">
        <div className="relative inline-block">
          <h1 className="notfound-404-text animate-float">404</h1>
          {/* Sombra del 404 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 blur-2xl opacity-30 bg-linear-to-br from-blue-500 to-indigo-500" />
        </div>
      </div>

      {/* Card de contenido con glassmorphism */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-4">
        <div className="notfound-card glassmorphism-card border border-white/10 max-w-2xl mx-auto">
          {/* Título */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-inter bg-clip-text text-transparent bg-linear-to-br from-black to-white/20">
            {title}
          </h2>

          {/* Descripción */}
          <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed font-inter font-normal">
            {description}
          </p>

          {/* Botón moderno */}
          {showBackButton && (
            <Link to={ROUTES.HOME}>
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-3xl text-base font-medium font-inter transition-all duration-200 bg-linear-to-br from-blue-500 to-white text-blue-900 hover:shadow-lg">
                <ArrowRight className="w-5 h-5 rotate-180" strokeWidth={2} />
                <span>Volver al inicio</span>
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
