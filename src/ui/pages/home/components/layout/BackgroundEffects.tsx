import { useTheme } from "../../../../../contexts";

// Background effects component (gradient and particles)
// Ubicación: src/ui/pages/home/components/BackgroundEffects.tsx

export default function BackgroundEffects() {
  const { theme } = useTheme();

  return (
    <>
      {/* Gradiente de fondo sutil adaptado al tema */}
      <div
        className="fixed inset-0 pointer-events-none transition-all duration-500"
        style={{
          background:
            theme === "dark"
              ? "linear-gradient(to bottom, #000000, rgba(88, 28, 135, 0.1), #000000)"
              : "linear-gradient(to bottom, #f5f7fa, rgba(74, 92, 255, 0.03), #ffffff, rgba(74, 92, 255, 0.03), #f5f7fa)",
        }}
      />

      {/* Partículas de fondo animadas adaptadas al tema */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-twinkle"
            style={{
              width: theme === "dark" ? "1px" : "2px",
              height: theme === "dark" ? "1px" : "2px",
              backgroundColor: theme === "dark" ? "#ffffff" : "#000000",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity:
                theme === "dark"
                  ? Math.random() * 0.5 + 0.1
                  : Math.random() * 0.3 + 0.2,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              boxShadow:
                theme === "light" ? "0 0 3px rgba(74, 92, 255, 0.6)" : "none",
            }}
          />
        ))}
      </div>
    </>
  );
}
