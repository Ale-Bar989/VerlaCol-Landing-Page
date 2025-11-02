import { memo, useMemo } from 'react';

// Companies logos section - Modern and clean
// Ubicación: src/ui/pages/home/components/sections/CompaniesSection.tsx

interface CompaniesSectionProps {
  companies: string[];
}

function CompaniesSection({ companies }: CompaniesSectionProps) {
  // Memoizar dots para evitar regeneración en cada render
  const dots = useMemo(() => 
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
    })),
    []
  );
  return (
    <section className="py-28 px-6 overflow-hidden bg-black relative">
      {/* Fondo moderno ultra-visible */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid pattern visible */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(139, 92, 246) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(139, 92, 246) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        ></div>

        {/* Mesh gradient intenso */}
        <div className="absolute inset-0">
          {/* Purple gradient top-left - MÁS INTENSO */}
          <div className="absolute -top-40 -left-40 w-[1000px] h-[1000px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>

          {/* Pink gradient top-right - MÁS INTENSO */}
          <div
            className="absolute -top-40 -right-40 w-[900px] h-[900px] bg-purple-600/15 rounded-full blur-[100px] animate-pulse-slow"
            style={{ animationDelay: "1.5s" }}
          ></div>

          {/* Blue gradient bottom - MÁS INTENSO */}
          <div
            className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-blue-600/12 rounded-full blur-[140px] animate-pulse-slow"
            style={{ animationDelay: "3s" }}
          ></div>

          {/* Orange accent */}
          <div
            className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[100px] animate-pulse-slow"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Líneas decorativas brillantes */}
        <div className="absolute top-1/4 left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-[#7A8FFF]/40 to-transparent shadow-lg shadow-[#5B6FFF]/20"></div>
        <div className="absolute bottom-1/3 left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-[#7A8FFF]/40 to-transparent shadow-lg shadow-[#5B6FFF]/20"></div>

        {/* Dots pattern - optimizado con useMemo */}
        <div className="absolute inset-0 opacity-20">
          {dots.map((dot) => (
            <div
              key={dot.id}
              className="absolute w-1 h-1 bg-[#4A5CFF] rounded-full animate-twinkle"
              style={{
                left: dot.left,
                top: dot.top,
                animationDelay: dot.delay,
                willChange: 'opacity',
              }}
            />
          ))}
        </div>

        {/* Radial gradient suave */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,black_80%)] opacity-50"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header moderno */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6 backdrop-blur-sm">
            <div className="w-2 h-2 bg-[#4A5CFF] rounded-full animate-pulse"></div>
            <span className="text-xs font-semibold text-[#4A5CFF] uppercase tracking-wider">
              Contenido Premium
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Canales de TV{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#7A8FFF] to-[#4A5CFF]">
              Disponibles
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Disfruta de los mejores canales colombianos en alta definición
          </p>
        </div>

        {/* Logos con diseño moderno */}
        <div className="relative">
          {/* Fade gradients más amplios */}
          <div className="absolute left-0 top-0 bottom-0 bg-linear-to-r from-black via-black/90 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 bg-linear-to-l from-black via-black/90 to-transparent z-10 pointer-events-none"></div>

          <div className="flex gap-8 animate-scroll whitespace-nowrap py-10">
            {/* Primera copia */}
            {companies.map((company, index) => (
              <div
                key={`${company}-1-${index}`}
                className="group relative min-w-[240px]"
              >
                {/* Outer glow container */}
                <div className="absolute -inset-px bg-linear-to-r from-[#5B6FFF]/20 via-[#7A8FFF]/20 to-[#4A5CFF]/20 rounded-[24px] opacity-0 group-hover:opacity-100 blur-sm transition-all duration-700"></div>

                {/* Main card */}
                <div className="relative h-full bg-linear-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 rounded-[23px] overflow-hidden transition-all duration-700 hover:scale-[1.02] hover:border-white/30 group-hover:shadow-2xl group-hover:shadow-[#7A8FFF]/30">
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-linear-to-br from-[#5B6FFF]/0 via-[#7A8FFF]/5 to-[#4A5CFF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-linear-to-br from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>

                  {/* Top gradient bar */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#4A5CFF]/50 to-transparent"></div>

                  {/* Content */}
                  <div className="relative p-6">
                    {/* Icon container with 3D effect */}
                    <div className="relative mb-4 w-14 h-14 rounded-2xl bg-linear-to-br from-[#5B6FFF]/20 via-[#7A8FFF]/20 to-[#4A5CFF]/20 flex items-center justify-center border border-white/20 shadow-lg shadow-[#5B6FFF]/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      {/* Inner glow */}
                      <div className="absolute inset-[2px] rounded-xl bg-linear-to-br from-[#5B6FFF]/30 to-[#4A5CFF]/30 blur-md"></div>
                      {/* Icon */}
                      <div className="relative w-7 h-7 rounded-lg bg-linear-to-br from-[#7A8FFF] via-[#4A5CFF] to-[#4A5CFF] shadow-inner"></div>
                    </div>

                    {/* Company name */}
                    <h3 className="text-2xl font-black mb-2 bg-clip-text text-transparent bg-linear-to-r from-white via-white to-white/80 group-hover:from-white group-hover:via-[#4A5CFF] group-hover:to-[#4A5CFF] 200 transition-all duration-500 tracking-tight">
                      {company}
                    </h3>

                    {/* Status badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-linear-to-r from-[#7A8FFF]/10 to-[#4A5CFF]/10 border border-[#7A8FFF]/20 rounded-full group-hover:border-[#4A5CFF]/40 transition-all duration-300">
                      <div className="relative">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                        <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-green-400 animate-ping"></div>
                      </div>
                      <span className="text-[11px] font-semibold text-[#4A5CFF] uppercase tracking-wider">
                        HD Disponible
                      </span>
                    </div>
                  </div>

                  {/* Bottom accent with animated gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-linear-to-r from-transparent via-[#7A8FFF]/0 to-transparent group-hover:via-[#7A8FFF]/80 transition-all duration-700"></div>

                  {/* Corner decoration */}
                  <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#4A5CFF]/30 group-hover:bg-[#4A5CFF] transition-colors duration-500"></div>
                  <div className="absolute bottom-3 left-3 w-1.5 h-1.5 rounded-full bg-[#4A5CFF]/30 group-hover:bg-[#4A5CFF] transition-colors duration-500"></div>
                </div>
              </div>
            ))}

            {/* Segunda copia para infinito */}
            {companies.map((company, index) => (
              <div
                key={`${company}-2-${index}`}
                className="group relative min-w-[240px]"
              >
                {/* Outer glow container */}
                <div className="absolute -inset-px bg-linear-to-r from-[#5B6FFF]/20 via-[#7A8FFF]/20 to-[#4A5CFF]/20 rounded-[24px] opacity-0 group-hover:opacity-100 blur-sm transition-all duration-700"></div>

                {/* Main card */}
                <div className="relative h-full bg-linear-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 rounded-[23px] overflow-hidden transition-all duration-700 hover:scale-[1.02] hover:border-white/30 group-hover:shadow-2xl group-hover:shadow-[#7A8FFF]/30">
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-linear-to-br from-[#5B6FFF]/0 via-[#7A8FFF]/5 to-[#4A5CFF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-linear-to-br from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>

                  {/* Top gradient bar */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#4A5CFF]/50 to-transparent"></div>

                  {/* Content */}
                  <div className="relative p-6">
                    {/* Icon container with 3D effect */}
                    <div className="relative mb-4 w-14 h-14 rounded-2xl bg-linear-to-br from-[#5B6FFF]/20 via-[#7A8FFF]/20 to-[#4A5CFF]/20 flex items-center justify-center border border-white/20 shadow-lg shadow-[#5B6FFF]/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      {/* Inner glow */}
                      <div className="absolute inset-[2px] rounded-xl bg-linear-to-br from-[#5B6FFF]/30 to-[#4A5CFF]/30 blur-md"></div>
                      {/* Icon */}
                      <div className="relative w-7 h-7 rounded-lg bg-linear-to-br from-[#7A8FFF] via-[#4A5CFF] to-[#4A5CFF] shadow-inner"></div>
                    </div>

                    {/* Company name */}
                    <h3 className="text-2xl font-black mb-2 bg-clip-text text-transparent bg-linear-to-r from-white via-white to-white/80 group-hover:from-white group-hover:via-[#4A5CFF] group-hover:to-[#4A5CFF] 200 transition-all duration-500 tracking-tight">
                      {company}
                    </h3>

                    {/* Status badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-linear-to-r from-[#7A8FFF]/10 to-[#4A5CFF]/10 border border-[#7A8FFF]/20 rounded-full group-hover:border-[#4A5CFF]/40 transition-all duration-300">
                      <div className="relative">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                        <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-green-400 animate-ping"></div>
                      </div>
                      <span className="text-[11px] font-semibold text-[#4A5CFF] uppercase tracking-wider">
                        HD Disponible
                      </span>
                    </div>
                  </div>

                  {/* Bottom accent with animated gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-linear-to-r from-transparent via-[#7A8FFF]/0 to-transparent group-hover:via-[#7A8FFF]/80 transition-all duration-700"></div>

                  {/* Corner decoration */}
                  <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#4A5CFF]/30 group-hover:bg-[#4A5CFF] transition-colors duration-500"></div>
                  <div className="absolute bottom-3 left-3 w-1.5 h-1.5 rounded-full bg-[#4A5CFF]/30 group-hover:bg-[#4A5CFF] transition-colors duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats modernos mejorados */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Stat 1 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-br from-[#4A5CFF]/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8 rounded-2xl border border-[#5B6FFF]/20 bg-linear-to-br from-[#5B6FFF]/5 to-transparent backdrop-blur-sm hover:border-[#4A5CFF]/40 transition-all duration-300 text-center">
              {/* Número con gradiente azul claro + blanco */}
              <div
                className="text-5xl md:text-6xl font-black mb-3 text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #4A5CFF, #FFFFFF, #7A8FFF)",
                  backgroundSize: "200% 200%",
                  animation: "hologram 6s ease infinite",
                }}
              >
                200+
              </div>
              <div className="text-sm font-bold text-[#4A5CFF] uppercase tracking-wider mb-1">
                Canales HD/4K
              </div>
              <div className="h-1 w-16 mx-auto bg-linear-to-r from-transparent via-[#4A5CFF] to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-br from-[#4A5CFF]/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8 rounded-2xl border border-[#5B6FFF]/20 bg-linear-to-br from-[#5B6FFF]/5 to-transparent backdrop-blur-sm hover:border-[#4A5CFF]/40 transition-all duration-300 text-center">
              {/* Número con gradiente azul claro + blanco */}
              <div
                className="text-5xl md:text-6xl font-black mb-3 text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #7A8FFF, #FFFFFF, #4A5CFF)",
                  backgroundSize: "200% 200%",
                  animation: "hologram 6s ease infinite",
                }}
              >
                100%
              </div>
              <div className="text-sm font-bold text-[#4A5CFF] uppercase tracking-wider mb-1">
                Streaming IP
              </div>
              <div className="h-1 w-16 mx-auto bg-linear-to-r from-transparent via-[#4A5CFF] to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-br from-[#4A5CFF]/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative p-8 rounded-2xl border border-[#5B6FFF]/20 bg-linear-to-br from-[#5B6FFF]/5 to-transparent backdrop-blur-sm hover:border-[#4A5CFF]/40 transition-all duration-300 text-center">
              {/* Número con gradiente azul claro + blanco */}
              <div
                className="text-5xl md:text-6xl font-black mb-3 text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #4A5CFF, #FFFFFF, #5B6FFF)",
                  backgroundSize: "200% 200%",
                  animation: "hologram 6s ease infinite",
                }}
              >
                VOD
              </div>
              <div className="text-sm font-bold text-[#4A5CFF] uppercase tracking-wider mb-1">
                On-Demand
              </div>
              <div className="h-1 w-16 mx-auto bg-linear-to-r from-transparent via-[#4A5CFF] to-transparent rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Memoizar para evitar re-renders innecesarios
export default memo(CompaniesSection);
