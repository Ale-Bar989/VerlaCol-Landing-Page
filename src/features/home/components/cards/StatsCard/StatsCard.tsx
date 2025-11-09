// StatsCard - Estadísticas en vivo de la red (OPTIMIZADO)
// Ubicación: src/features/home/components/cards/StatsCard/StatsCard.tsx
// Optimizaciones: React.memo, useCallback para reducir re-renders

import { useState, memo, useCallback } from "react";
import { useTheme } from "@/core/contexts";
import { TrendingUp } from "lucide-react";
import { useRealStats } from "@/shared/hooks/useRealStats";
import { Modal } from "@/shared/components";
import { PricingSpeedTest } from "@/features/pricing/components/PricingSpeedTest";
import { STATS_CARD_PLANS } from "@/features/pricing/data";
import { ModernCard } from "../ModernCard";

type StatsCardPlan = typeof STATS_CARD_PLANS[number];

export const StatsCard: React.FC = memo(() => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const realStats = useRealStats();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<StatsCardPlan | null>(null);

  // Handlers del modal - memoizados
  const handleOpenModal = useCallback((plan: StatsCardPlan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  }, []);

  // Formatear uptime a formato legible - memoizado
  const formatUptime = (seconds: number): string => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (days > 0) return `${days}d ${hours}h`;
    if (hours > 0) return `${hours}h ${minutes}m`;
    if (minutes > 0) return `${minutes}m ${secs}s`;
    return `${secs}s`;
  };

  return (
    <>
      <ModernCard
        icon={
          <TrendingUp
            className="w-5 h-5 sm:w-6 sm:h-6 text-[#4A5CFF]"
            strokeWidth={2.5}
          />
        }
      >
        <div className="space-y-6 sm:space-y-8">
          <div>
            <h3
              className={`text-xl sm:text-2xl font-bold mb-2 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Estadísticas en Vivo
            </h3>
            <p
              className={`text-xs sm:text-sm ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Datos en tiempo real de nuestra red
            </p>
          </div>

          {/* Título de Planes */}
          <h3
            className={`text-lg sm:text-xl font-bold mb-4 text-center ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Prueba nuestros planes
          </h3>

          {/* Botones de Planes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
            {STATS_CARD_PLANS.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <button
                  key={index}
                  onClick={() => handleOpenModal(plan)}
                  className="group relative p-3 sm:p-4 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: isDark
                      ? "linear-gradient(135deg, rgba(74, 92, 255, 0.1), rgba(122, 143, 255, 0.05))"
                      : "linear-gradient(135deg, rgba(74, 92, 255, 0.08), rgba(122, 143, 255, 0.03))",
                    border: `1px solid rgba(74, 92, 255, ${
                      isDark ? "0.3" : "0.2"
                    })`,
                    boxShadow: "0 4px 12px rgba(74, 92, 255, 0.1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px rgba(74, 92, 255, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 4px 12px rgba(74, 92, 255, 0.1)";
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-xl flex items-center justify-center"
                    style={{
                      background: isDark
                        ? "rgba(74, 92, 255, 0.15)"
                        : "rgba(74, 92, 255, 0.1)",
                    }}
                  >
                    <Icon
                      className="w-5 h-5 sm:w-6 sm:h-6 text-[#4A5CFF]"
                      strokeWidth={2.5}
                    />
                  </div>

                  {/* Plan Name */}
                  <h4
                    className={`text-sm sm:text-base font-bold mb-1 ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.name}
                  </h4>

                  {/* Speed */}
                  <p className="text-xs sm:text-sm font-semibold text-[#4A5CFF] mb-1">
                    {plan.speed}
                  </p>

                  {/* Description */}
                  <p
                    className={`text-xs ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-linear-to-r from-[#4A5CFF] to-[#7A8FFF] group-hover:w-full transition-all duration-300 rounded-t-full" />
                </button>
              );
            })}
          </div>

          {/* Stats grid */}
          <div className="space-y-5 sm:space-y-6">
            {/* Métricas adicionales - REALES */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-[#4A5CFF]/20">
              <div className="relative group/metric">
                <div className="absolute inset-0 bg-linear-to-br from-[#4A5CFF]/10 to-transparent rounded-xl opacity-0 group-hover/metric:opacity-100 transition-opacity" />
                <div className="relative text-center p-3 sm:p-4 rounded-xl border border-[#4A5CFF]/10">
                  <div
                    className={`text-lg sm:text-xl md:text-2xl font-black ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                    style={{
                      letterSpacing: "-0.02em",
                      textShadow: `0 0 20px rgba(74, 92, 255, ${
                        isDark ? "0.3" : "0.2"
                      })`,
                    }}
                  >
                    {formatUptime(realStats.uptime)}
                  </div>
                  <div
                    className={`text-[10px] sm:text-xs font-semibold uppercase tracking-wider mt-1.5 sm:mt-2 ${
                      isDark ? "text-gray-500" : "text-gray-600"
                    }`}
                  >
                    Uptime (Sesión)
                  </div>
                </div>
              </div>
              <div className="relative group/metric">
                <div className="absolute inset-0 bg-linear-to-br from-[#4A5CFF]/10 to-transparent rounded-xl opacity-0 group-hover/metric:opacity-100 transition-opacity" />
                <div className="relative text-center p-3 sm:p-4 rounded-xl border border-[#4A5CFF]/10">
                  <div
                    className={`text-2xl sm:text-2xl md:text-3xl font-black ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                    style={{
                      letterSpacing: "-0.02em",
                      textShadow: `0 0 20px rgba(74, 92, 255, ${
                        isDark ? "0.3" : "0.2"
                      })`,
                    }}
                  >
                    {realStats.latency > 0 ? `${realStats.latency}ms` : "--"}
                  </div>
                  <div
                    className={`text-[10px] sm:text-xs font-semibold uppercase tracking-wider mt-1.5 sm:mt-2 ${
                      isDark ? "text-gray-500" : "text-gray-600"
                    }`}
                  >
                    Tu Latencia
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModernCard>

      {/* Modal con PricingSpeedTest */}
      {selectedPlan && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <PricingSpeedTest
            planName={selectedPlan.name}
            planSpeed={selectedPlan.speed}
          />
        </Modal>
      )}
    </>
  );
});

StatsCard.displayName = "StatsCard";
