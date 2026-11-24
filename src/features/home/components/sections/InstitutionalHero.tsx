import { memo } from "react";
import { ArrowUpRight, Users } from "lucide-react";
import { EXTERNAL_LINKS } from "@/features/home/data/institucional.data";

function InstitutionalHero() {
  return (
    <section
      id="inicio"
      className="relative bg-white overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28"
    >
      {/* Fondo sutil geométrico */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.07),transparent_55%)]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Columna de texto institucional */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#1D4ED8] text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#1D4ED8]" />
              Grupo Empresarial VERLA
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[3.1rem] font-extrabold text-[#0F172A] tracking-tight leading-[1.12]">
              Impulsando el futuro de las telecomunicaciones en Colombia
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
              El grupo empresarial detrás del desarrollo de conectividad nacional
            </p>

            <p className="text-sm text-slate-500">
              Conoce los productos y servicios de nuestra marca comercial
            </p>

            {/* Botones de acción (CTAs) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href={EXTERNAL_LINKS.TREENET}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] shadow-md shadow-blue-600/25 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Ir a treenet</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#liderazgo"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 transition-all duration-200"
              >
                <Users className="w-4 h-4 text-[#1D4ED8]" />
                <span>Conoce al equipo</span>
              </a>
            </div>
          </div>

          {/* Columna visual */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 border border-slate-200/70 bg-slate-100">
              <img
                src="/images/institucional/hero-fibra.png"
                alt="Equipo de ingeniería de Grupo VERLA desplegando infraestructura de fibra óptica FTTH en Colombia"
                className="w-full h-[300px] sm:h-[400px] lg:h-[440px] object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-200">
                  Infraestructura FTTH Propia
                </p>
                <p className="text-sm sm:text-base font-medium text-white mt-0.5">
                  Conectividad de fibra óptica y operación nacional
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(InstitutionalHero);
