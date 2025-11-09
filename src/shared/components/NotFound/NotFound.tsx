import { Link } from "react-router-dom";
import { ArrowRight, WifiOff, AlertTriangle } from "lucide-react";
import { ROUTES } from "@/core/router/routes.config";
import { memo } from "react";

export type NotFoundProps = {
  errorCode?: 400 | 404 | 500;
  title?: string;
  description?: string;
  showBackButton?: boolean;
  showRetryButton?: boolean;
  onRetry?: () => void;
  className?: string;
};

const NotFound: React.FC<NotFoundProps> = memo(({
  errorCode = 404,
  title,
  description,
  showBackButton = true,
  showRetryButton = false,
  onRetry,
  className = "",
}: NotFoundProps) => {
  // Configuración por defecto según el código de error
  const errorConfig = {
    400: {
      icon: WifiOff,
      defaultTitle: "Sin conexión a internet",
      defaultDescription: "Parece que no tienes conexión a internet. Por favor, verifica tu conexión y vuelve a intentarlo.",
      iconColor: "text-orange-500",
      gradientFrom: "from-orange-500",
      gradientTo: "to-red-500",
    },
    404: {
      icon: AlertTriangle,
      defaultTitle: "Oops, página no encontrada",
      defaultDescription: "La página que buscas no existe o ha sido movida. Verifica la URL o regresa al inicio.",
      iconColor: "text-blue-500",
      gradientFrom: "from-blue-500",
      gradientTo: "to-indigo-500",
    },
    500: {
      icon: AlertTriangle,
      defaultTitle: "Error del servidor",
      defaultDescription: "Algo salió mal en nuestros servidores. Estamos trabajando para solucionarlo.",
      iconColor: "text-red-500",
      gradientFrom: "from-red-500",
      gradientTo: "to-pink-500",
    },
  };

  const config = errorConfig[errorCode];
  const Icon = config.icon;
  const finalTitle = title || config.defaultTitle;
  const finalDescription = description || config.defaultDescription;
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

      {/* Código de error gigante */}
      <div className="relative z-10 text-center w-full -mb-[15em]">
        <div className="relative inline-block">
          <h1 className="notfound-404-text animate-float">{errorCode}</h1>
          {/* Sombra del código */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 blur-2xl opacity-30 bg-linear-to-br ${config.gradientFrom} ${config.gradientTo}`} />
        </div>
      </div>

      {/* Card de contenido con glassmorphism */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-4">
        <div className="notfound-card glassmorphism-card border border-white/10 max-w-2xl mx-auto">
          {/* Icono */}
          <div className="flex justify-center mb-6">
            <div className={`p-4 rounded-full bg-white/10 backdrop-blur-sm ${config.iconColor}`}>
              <Icon className="w-12 h-12" strokeWidth={2} />
            </div>
          </div>

          {/* Título */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-inter bg-clip-text text-transparent bg-linear-to-br from-black to-white/20">
            {finalTitle}
          </h2>

          {/* Descripción */}
          <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed font-inter font-normal">
            {finalDescription}
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {showRetryButton && onRetry && (
              <button
                onClick={onRetry}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-base font-medium font-inter transition-all duration-200 bg-linear-to-br from-blue-500 to-purple-500 text-white hover:shadow-lg hover:scale-105"
              >
                <WifiOff className="w-5 h-5" strokeWidth={2} />
                <span>Reintentar</span>
              </button>
            )}

            {showBackButton && (
              <Link to={ROUTES.HOME}>
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-base font-medium font-inter transition-all duration-200 bg-linear-to-br from-blue-500 to-white text-blue-900 hover:shadow-lg">
                  <ArrowRight className="w-5 h-5 rotate-180" strokeWidth={2} />
                  <span>Volver al inicio</span>
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

NotFound.displayName = 'NotFound';

export { NotFound };
