// SpeedGauge - Velocímetro animado tipo gauge (SOLID + OCP)
// Ubicación: src/shared/components/SpeedGauge/SpeedGauge.tsx
// Componente reutilizable para mostrar velocidad con animación de aguja

import { memo, useMemo, useState, useEffect } from "react";
import { useTheme } from "@/core/contexts";

interface SpeedGaugeProps {
  /** Velocidad actual en Mbps */
  speed: number;
  /** Velocidad máxima del gauge (default: 1000) */
  maxSpeed?: number;
  /** Tamaño del gauge en píxeles (default: 200) */
  size?: number;
  /** Tipo de medición para el color */
  type?: "download" | "upload" | "ping";
  /** Mostrar marcas de velocidad */
  showMarks?: boolean;
  /** Título del gauge */
  label?: string;
  /** Está midiendo actualmente (para animación más rápida) */
  isMeasuring?: boolean;
}

export const SpeedGauge: React.FC<SpeedGaugeProps> = memo(
  ({
    speed,
    maxSpeed = 1000,
    size = 200,
    type = "download",
    showMarks = true,
    label = "Mbps",
    isMeasuring = false,
  }) => {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    // Estado para animación de entrada de números
    const [visibleMarks, setVisibleMarks] = useState<number>(0);
    // Estado para animación del arco de fondo
    const [arcProgress, setArcProgress] = useState<number>(0);
    const [showNumbers, setShowNumbers] = useState<boolean>(false);

    // Animación del arco de fondo (primero)
    useEffect(() => {
      if (isMeasuring && arcProgress < 100) {
        const timer = setTimeout(() => {
          setArcProgress((prev) => Math.min(prev + 2, 100)); // Incremento de 2% cada frame
        }, 16); // ~60fps
        return () => clearTimeout(timer);
      }
      // Cuando el arco termina, mostrar números
      if (isMeasuring && arcProgress >= 100 && !showNumbers) {
        setShowNumbers(true);
      }
      // Reset cuando no está midiendo
      if (!isMeasuring) {
        setArcProgress(0);
        setShowNumbers(false);
        setVisibleMarks(0);
      }
    }, [isMeasuring, arcProgress, showNumbers]);

    // Animación de entrada de números (después del arco)
    useEffect(() => {
      if (showNumbers && visibleMarks < 11) {
        const timer = setTimeout(() => {
          setVisibleMarks((prev) => prev + 1);
        }, 80); // 80ms entre cada número (880ms total)
        return () => clearTimeout(timer);
      }
    }, [showNumbers, visibleMarks]);

    // Calcular ángulo de la aguja (0 empieza en 210°, va en sentido horario)
    const angle = useMemo(() => {
      const percentage = Math.min(speed / maxSpeed, 1);
      return 125 + percentage * 270; // 240° de recorrido (de 210° a 450°)
    }, [speed, maxSpeed]);

    // Calcular porcentaje de progreso
    const progressPercentage = useMemo(() => {
      return Math.min((speed / maxSpeed) * 100, 100);
    }, [speed, maxSpeed]);

    // Colores según el tipo
    const colors = useMemo(() => {
      switch (type) {
        case "download":
          return {
            primary: "#4A5CFF",
            gradient: "linear-gradient(135deg, #4A5CFF, #7A8FFF)",
            shadow: "rgba(74, 92, 255, 0.4)",
            glow: "rgba(74, 92, 255, 0.6)",
          };
        case "upload":
          return {
            primary: "#7A8FFF",
            gradient: "linear-gradient(135deg, #7A8FFF, #A5B4FF)",
            shadow: "rgba(122, 143, 255, 0.4)",
            glow: "rgba(122, 143, 255, 0.6)",
          };
        case "ping":
          return {
            primary: "#22C55E",
            gradient: "linear-gradient(135deg, #22C55E, #4ADE80)",
            shadow: "rgba(34, 197, 94, 0.4)",
            glow: "rgba(34, 197, 94, 0.6)",
          };
        default:
          return {
            primary: "#4A5CFF",
            gradient: "linear-gradient(135deg, #4A5CFF, #7A8FFF)",
            shadow: "rgba(74, 92, 255, 0.4)",
            glow: "rgba(74, 92, 255, 0.6)",
          };
      }
    }, [type]);

    // Marcas de velocidad modernas (bien distribuidas)
    const speedMarks = useMemo(() => {
      if (!showMarks) return [];

      // Marcas principales bien espaciadas: 0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000
      const marks = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
      return marks.map((mark) => {
        const markPercentage = mark / maxSpeed;
        const markAngle = 125 + markPercentage * 285; // 0 en 125°, recorrido de 270°
        const markRadius = size / 2 - 50; // Números cerca del borde
        const x = Math.cos((markAngle * Math.PI) / 180) * markRadius;
        const y = Math.sin((markAngle * Math.PI) / 180) * markRadius;

        return { value: mark, x, y, angle: markAngle };
      });
    }, [maxSpeed, size, showMarks]);

    const center = size / 2;
    const radius = size / 2 - 30; // Arco más grande
    const needleLength = size / 2 - 60; // Aguja hasta dentro

    // Circunferencia del arco (270° = 3/4 del círculo)
    const circumference = 2 * Math.PI * radius * 0.75;
    // Circunferencia del arco de fondo para animación
    const backgroundArcCircumference = circumference;
    const backgroundArcOffset =
      backgroundArcCircumference * (1 - arcProgress / 100);
    // Offset para que empiece desde 0
    const strokeDashoffset =
      circumference - (progressPercentage / 100) * circumference;

    return (
      <div className="relative flex flex-col items-center justify-center">
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="transform"
        >
          {/* Definir gradientes */}
          <defs>
            <linearGradient
              id="gaugeGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#4A5CFF" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#7A8FFF" stopOpacity="1" />
              <stop offset="100%" stopColor="#4A5CFF" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient
              id="needleGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#7A8FFF" />
              <stop offset="100%" stopColor="#4A5CFF" />
            </linearGradient>
          </defs>

          {/* Arco de fondo (270°) con animación de dibujo - Solo visible durante medición */}
          {isMeasuring && (
            <path
              d={`M ${center + radius * Math.cos((125 * Math.PI) / 180)} ${
                center + radius * Math.sin((125 * Math.PI) / 180)
              } A ${radius} ${radius} 0 1 1 ${
                center + radius * Math.cos((395 * Math.PI) / 180)
              } ${center + radius * Math.sin((395 * Math.PI) / 180)}`}
              fill="none"
              stroke={
                isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.08)"
              }
              strokeWidth="14"
              strokeLinecap="round"
              strokeDasharray={backgroundArcCircumference}
              strokeDashoffset={backgroundArcOffset}
              style={{
                transition: "none",
              }}
            />
          )}

          {/* Arco de progreso (270°) */}
          <path
            d={`M ${center + radius * Math.cos((125 * Math.PI) / 180)} ${
              center + radius * Math.sin((125 * Math.PI) / 180)
            } A ${radius} ${radius} 0 1 1 ${
              center + radius * Math.cos((395 * Math.PI) / 180)
            } ${center + radius * Math.sin((395 * Math.PI) / 180)}`}
            fill="none"
            stroke="url(#gaugeGradient)"
            strokeWidth="14"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{
              filter: `drop-shadow(0 0 12px ${colors.glow}) drop-shadow(0 0 20px ${colors.shadow})`,
              transition: "stroke-dashoffset 0.5s ease-out",
            }}
          />

          {/* Marcas de velocidad con líneas decorativas */}
          {showMarks &&
            speedMarks.map((mark, index) => {
              const tickStartRadius = size / 2 - 36; // Desde los números
              const tickX =
                Math.cos((mark.angle * Math.PI) / 180) * tickStartRadius;
              const tickY =
                Math.sin((mark.angle * Math.PI) / 180) * tickStartRadius;
              const tickEndRadius = radius - 3; // Hasta el arco
              const tickEndX =
                Math.cos((mark.angle * Math.PI) / 180) * tickEndRadius;
              const tickEndY =
                Math.sin((mark.angle * Math.PI) / 180) * tickEndRadius;

              // Determinar si esta marca está activa (velocidad actual la ha pasado)
              const isActive = speed >= mark.value;
              // Solo visible si showNumbers es true y el índice está dentro de visibleMarks
              const isVisible = showNumbers && index < visibleMarks;

              return (
                <g
                  key={index}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transition: `opacity 0.3s ease ${index * 0.05}s`,
                  }}
                >
                  {/* Línea de marca */}
                  <line
                    x1={center + tickX}
                    y1={center + tickY}
                    x2={center + tickEndX}
                    y2={center + tickEndY}
                    stroke={
                      isActive
                        ? colors.primary
                        : isDark
                        ? "rgba(255, 255, 255, 0.15)"
                        : "rgba(0, 0, 0, 0.15)"
                    }
                    strokeWidth={isActive ? "3" : "2"}
                    strokeLinecap="round"
                    style={{
                      transition: "stroke 0.3s ease, stroke-width 0.3s ease",
                    }}
                  />
                  {/* Número */}
                  <text
                    x={center + mark.x}
                    y={center + mark.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-[10px] font-semibold"
                    fill={
                      isActive ? colors.primary : isDark ? "#9CA3AF" : "#6B7280"
                    }
                    style={{
                      userSelect: "none",
                      transition: "fill 0.3s ease",
                    }}
                  >
                    {mark.value}
                  </text>
                </g>
              );
            })}

          {/* Aguja animada */}
          <g
            style={{
              transform: `rotate(${angle}deg)`,
              transformOrigin: `${center}px ${center}px`,
              transition: isMeasuring
                ? "transform 0.3s ease-out"
                : "transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            {/* Sombra de la aguja */}
            <line
              x1={center}
              y1={center}
              x2={center + needleLength}
              y2={center}
              stroke="rgba(0, 0, 0, 0.3)"
              strokeWidth="4"
              strokeLinecap="round"
              transform={`translate(3, 3)`}
            />

            {/* Aguja principal con gradiente */}
            <line
              x1={center}
              y1={center}
              x2={center + needleLength}
              y2={center}
              stroke="url(#needleGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              style={{
                filter: `drop-shadow(0 0 10px ${colors.glow}) drop-shadow(0 0 20px ${colors.shadow})`,
              }}
            />
          </g>

          {/* Centro de la aguja con anillos */}
          <circle
            cx={center}
            cy={center}
            r="12"
            fill="none"
            stroke={colors.primary}
            strokeWidth="2"
            opacity="0.3"
          />
          <circle
            cx={center}
            cy={center}
            r="10"
            fill={colors.primary}
            style={{
              filter: `drop-shadow(0 0 12px ${colors.glow})`,
            }}
          />
          <circle cx={center} cy={center} r="6" fill="url(#needleGradient)" />
          <circle
            cx={center}
            cy={center}
            r="3"
            fill={isDark ? "#1F2937" : "#FFFFFF"}
          />
        </svg>

        {/* Valor de velocidad DENTRO del velocímetro */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
          style={{ top: "52%" }}
        >
          <div
            className={`text-5xl font-black ${
              isDark ? "text-white" : "text-gray-900"
            }`}
            style={{
              letterSpacing: "-0.03em",
              background: isDark
                ? "linear-gradient(135deg, #FFFFFF, #7A8FFF, #4A5CFF)"
                : "linear-gradient(135deg, #1F2937, #4A5CFF, #7A8FFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: `drop-shadow(0 0 30px ${colors.shadow})`,
              transition: "all 0.3s ease-out",
            }}
          >
            {Math.round(speed)}
          </div>
          <div
            className={`text-xs font-bold uppercase tracking-widest mt-1 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
            style={{
              textShadow: `0 0 10px ${colors.shadow}`,
            }}
          >
            {label}
          </div>
        </div>
      </div>
    );
  }
);

SpeedGauge.displayName = "SpeedGauge";
