import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocalTheme } from "@/shared/hooks/useLocalTheme";
import { ROUTES } from "@/core/router/routes.config";

// CTA Section reutilizable para páginas
// Ubicación: src/shared/components/CTASection.tsx

interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
  onButtonClick?: () => void;
}

export default function CTASection({
  title,
  description,
  buttonText,
  buttonLink = ROUTES.CONTACT,
  onButtonClick,
}: CTASectionProps) {
  const { isDark } = useLocalTheme();

  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };

  return (
    <section
      className={`relative flex items-center justify-center min-h-[60vh] py-16 px-6 overflow-hidden ${
        isDark ? "bg-gray-950" : "bg-linear-to-br from-gray-50 to-white"
      }`}
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: isDark ? "#5B6FFF0D" : "#5B6FFF05" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: isDark ? "#7A8FFF0D" : "#7A8FFF05" }}
        />
      </div>

      <div className="w-full max-w-5xl relative z-10">
        <div
          className="relative p-8 md:p-12 lg:p-16 rounded-3xl overflow-hidden mx-auto"
          style={{
            background: isDark
              ? "linear-gradient(135deg, rgba(74, 92, 255, 0.1), rgba(122, 143, 255, 0.15))"
              : "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.98))",
            border: `1px solid ${
              isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)"
            }`,
            boxShadow: isDark
              ? "0 20px 40px -10px rgba(0, 0, 0, 0.25)"
              : "0 20px 40px -10px rgba(0, 0, 0, 0.05)",
            backdropFilter: "blur(8px)",
            transform: "translateZ(0)",
            maxWidth: "90vw",
            width: "100%",
          }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 bg-(--accent-primary)/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 -ml-32 -mb-32 bg-(--accent-secondary)/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

          <div className="relative z-10 text-center">
            <h2
              className={`text-3xl md:text-5xl font-bold mb-6 mx-auto ${
                isDark
                  ? "bg-clip-text text-transparent bg-linear-to-r from-white to-blue-100"
                  : "text-gray-900"
              }`}
            >
              {title}
            </h2>

            <p
              className={`text-lg md:text-xl max-w-2xl mx-auto mb-10 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {description}
            </p>

            <div className="flex justify-center">
              {onButtonClick ? (
                <button
                  onClick={handleClick}
                  className={`group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full transition-all duration-500 overflow-hidden text-white ${
                    isDark
                      ? "bg-(--accent-primary) hover:bg-(--accent-primary)/90 border border-(--accent-primary)/30"
                      : "bg-linear-to-r from-(--accent-primary) to-(--accent-secondary) hover:from-(--accent-primary)/90 hover:to-(--accent-secondary)/90 border border-(--accent-primary)/30"
                  }`}
                >
                  <span className={`relative z-10 flex items-center`}>
                    {buttonText}
                    <ArrowRight className="ml-3 w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <span className="absolute inset-0 bg-linear-to-r from-(--accent-primary) to-(--accent-secondary) opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
                </button>
              ) : (
                <Link
                  to={buttonLink}
                  className={`group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full transition-all duration-500 overflow-hidden text-white ${
                    isDark
                      ? "bg-(--accent-primary) hover:bg-(--accent-primary)/90 border border-(--accent-primary)/30"
                      : "bg-linear-to-r from-(--accent-primary) to-(--accent-secondary) hover:from-(--accent-primary)/90 hover:to-(--accent-secondary)/90 shadow-lg hover:shadow-xl hover:-translate-y-1"
                  }`}
                >
                  <span className={`relative z-10 flex items-center`}>
                    {buttonText}
                    <ArrowRight className="ml-3 w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <span className="absolute inset-0 bg-linear-to-r from-(--accent-primary) to-(--accent-secondary) opacity-0 group-hover:opacity-20 transition-opacity duration-500"></span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
