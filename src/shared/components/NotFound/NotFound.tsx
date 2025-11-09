import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
        <div
          className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* 404 Gigante - Sin límites de ancho */}
      <div className="relative z-10 text-center w-full mb-1">
        <div className="relative inline-block">
          <h1
            style={{
              animation: "float 6s ease-in-out infinite",
              fontSize: "34rem",
              fontFamily:
                "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontWeight: 900,
              lineHeight: "1",
              background:
                "linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #6366f1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.05em",
              filter: "drop-shadow(0 10px 30px rgba(59, 130, 246, 0.3))",
            }}
          >
            404
          </h1>
          {/* Sombra del 404 */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 blur-2xl opacity-30"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #6366f1)",
            }}
          />
        </div>
      </div>

      {/* Card de contenido con glassmorphism */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-4">
        <div
          className="relative rounded-3xl p-8 sm:p-10 border border-white/10 max-w-2xl mx-auto"
          style={{
            borderRadius: "2rem",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "5rem",
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.02))",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            boxShadow:
              "0 8px 32px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
          }}
        >
          {/* Título */}
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{
              fontFamily:
                "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontWeight: 700,
              background: "linear-gradient(135deg, #1e293b, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {title}
          </h2>

          {/* Descripción */}
          <p
            className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed"
            style={{
              fontFamily:
                "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontWeight: 400,
            }}
          >
            {description}
          </p>

          {/* Botón moderno */}
          {showBackButton && (
            <Link to="/">
              <button
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-base font-medium transition-all duration-200"
                style={{
                  fontFamily:
                    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  fontWeight: 500,
                  background:
                    "linear-gradient(135deg, #3b82f6 0%, #ffffff 100%)",
                  color: "#1e40af",
                }}
              >
                <ArrowRight className="w-5 h-5 rotate-180" strokeWidth={2} />
                <span>Volver al inicio</span>
              </button>
            </Link>
          )}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
