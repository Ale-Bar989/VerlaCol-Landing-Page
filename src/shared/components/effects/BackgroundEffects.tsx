import { memo } from "react";
import { DESIGN_SYSTEM } from "@/shared/styles/design-system";

// Efectos de fondo reutilizables con blur optimizado para móviles
// Ubicación: src/shared/components/BackgroundEffects.tsx

interface BackgroundEffectsProps {
  variant?: "default" | "animated";
  opacity?: 15 | 20 | 30;
  showVerlaText?: boolean;
}

function BackgroundEffects({
  variant = "default",
  opacity = 15,
  showVerlaText = false,
}: BackgroundEffectsProps) {
  // Blur reducido en móviles: 80px en lugar de 150px para mejor rendimiento
  const baseClass =
    variant === "animated"
      ? "absolute rounded-full blur-[80px] md:blur-[150px] animate-pulse"
      : "absolute rounded-full blur-[80px] md:blur-[150px]";

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div
        className={`${baseClass} top-0 left-1/4 w-[400px] h-[400px] md:w-[600px] md:h-[600px]`}
        style={{
          backgroundColor: DESIGN_SYSTEM.rgba.accent[opacity],
          ...(variant === "animated" && { animationDelay: "0s" }),
          willChange: variant === "animated" ? "opacity" : "auto",
        }}
      />
      <div
        className={`${baseClass} top-1/3 right-1/4 w-[400px] h-[400px] md:w-[600px] md:h-[600px]`}
        style={{
          backgroundColor: DESIGN_SYSTEM.rgba.secondary[opacity],
          ...(variant === "animated" && { animationDelay: "2s" }),
          willChange: variant === "animated" ? "opacity" : "auto",
        }}
      />
      <div
        className={`${baseClass} bottom-0 left-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px]`}
        style={{
          backgroundColor: DESIGN_SYSTEM.rgba.primary[opacity],
          ...(variant === "animated" && { animationDelay: "4s" }),
          willChange: variant === "animated" ? "opacity" : "auto",
        }}
      />

      {/* Efecto VERLA - Solo texto sin partículas */}
      {showVerlaText && (
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Texto VERLA que emerge */}
          <div className="text-white font-black text-8xl md:text-[12rem] lg:text-[16rem] xl:text-[20rem] tracking-widest animate-verla-emerge select-none opacity-20">
            VERLA
          </div>
        </div>
      )}
    </div>
  );
}

// Memoizar para evitar re-renders innecesarios
export default memo(BackgroundEffects);
