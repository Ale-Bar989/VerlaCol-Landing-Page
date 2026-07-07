// StatsSection modernizado con glassmorphism y animaciones mejoradas
// Ubicación: src/features/home/components/sections/StatsSection.tsx

import { memo } from "react";
import { useTheme } from "@/core/contexts";
import { SpeedTestCard, StatsCard } from "../cards";

const HeroText = () => (
  <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden">
    <svg
      className="w-full h-full"
      viewBox="0 0 1200 400"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(91, 111, 255, 0.15)" />
          <stop offset="20%" stopColor="rgba(91, 111, 255, 0.5)" />
          <stop offset="40%" stopColor="rgba(122, 143, 255, 0.8)" />
          <stop offset="50%" stopColor="rgba(255, 255, 255, 1)" />
          <stop offset="60%" stopColor="rgba(122, 143, 255, 0.8)" />
          <stop offset="80%" stopColor="rgba(91, 111, 255, 0.5)" />
          <stop offset="100%" stopColor="rgba(91, 111, 255, 0.15)" />
          <animate
            attributeName="x1"
            values="-100%;200%"
            dur="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="x2"
            values="0%;300%"
            dur="3s"
            repeatCount="indefinite"
          />
        </linearGradient>
      </defs>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="380"
        fontWeight="900"
        fill="transparent"
        stroke="url(#strokeGradient)"
        strokeWidth="4"
        letterSpacing="30"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        VERLA
      </text>
    </svg>
  </div>
);

const BackgroundEffects: React.FC = () => (
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl bg-[#5B6FFF0D]" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl bg-[#7A8FFF0D]" />
  </div>
);

const ImpactBadge: React.FC = () => (
  <div className="inline-flex items-center gap-2 mb-10 px-6 py-3 rounded-full backdrop-blur-md cta-section-bg border border-[rgba(91,111,255,0.2)]">
    <div className="w-2 h-2 rounded-full animate-pulse bg-[#5B6FFF]" />
    <span className="text-sm font-bold uppercase tracking-widest text-[#7A8FFF] font-inter">
      Impacto Real
    </span>
  </div>
);

const StatsSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      className={`relative py-40 px-6 overflow-hidden ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <HeroText />
      <BackgroundEffects />

      <div className="container mx-auto max-w-6xl text-center relative z-10">
        <ImpactBadge />

        <h2
          className="text-4xl md:text-6xl font-black mb-6 leading-tight"
          style={{
            fontFamily:
              "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          }}
        >
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: isDark
                ? "linear-gradient(135deg, #FFFFFF, #E0E0E0)"
                : "linear-gradient(135deg, #1F1F1F, #4A4A4A)",
              backgroundSize: "100% 100%",
            }}
          >
            Conectando tu mundo con
          </span>
        </h2>

        <div className="mb-8 relative inline-block">
          <span
            className="text-6xl md:text-8xl font-black text-transparent bg-clip-text animate-gradient"
            style={{
              backgroundImage: isDark
                ? "linear-gradient(90deg, #5B6FFF 0%, #7A8FFF 25%, #FFFFFF 50%, #7A8FFF 75%, #5B6FFF 100%)"
                : "linear-gradient(90deg, #5B6FFF 0%, #7A8FFF 25%, #4A5CFF 50%, #7A8FFF 75%, #5B6FFF 100%)",
              backgroundSize: "200% 100%",
              fontFamily:
                "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            }}
          >
            velocidad
          </span>
          <div
            className="absolute inset-0 blur-3xl opacity-40"
            style={{
              background:
                "radial-gradient(ellipse, #5B6FFF 0%, #7A8FFF 40%, transparent 70%)",
              zIndex: -1,
            }}
          />
        </div>

        <p
          className="text-xl md:text-2xl mb-16"
          style={{
            color: isDark ? "#B0B0B0" : "#666666",
            fontFamily:
              "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontWeight: 300,
          }}
        >
          Internet estable, rápido y confiable para tu hogar o negocio
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
          <SpeedTestCard />
          <StatsCard />
        </div>
      </div>
    </section>
  );
};

StatsSection.displayName = "StatsSection";

export default memo(StatsSection);
