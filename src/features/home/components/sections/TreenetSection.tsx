import { memo } from "react";
import { ArrowUpRight, Network, TrendingUp } from "lucide-react";
import { EXTERNAL_LINKS } from "@/features/home/data/institucional.data";

function TreenetSection() {
  return (
    <section
      id="operamos-treenet"
      className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado superior de la sección */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-10 border-b border-slate-200">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1.5">
              Unidades de negocio y estrategia
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Operamos <span className="text-[#1D4ED8]">treenet</span>
            </h2>
          </div>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
            GRUPO VERLA
          </span>
        </div>

        {/* Contenido principal en 2 columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Visual laptop treenet */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl bg-gradient-to-br from-slate-100 to-blue-50/70 border border-slate-200/80 p-4 sm:p-6 shadow-lg">
              <img
                src="/images/institucional/treenet-laptop.png"
                alt="Portal comercial treenet operado por Grupo VERLA"
                className="w-full h-auto object-contain drop-shadow-xl"
                loading="lazy"
              />
            </div>
          </div>

          {/* Copy operativo y destacados */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
              Despliegue &amp; Conectividad
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] leading-tight">
              La fuerza tecnológica y operativa detrás de la marca
            </h3>

            <p className="text-base text-slate-600 leading-relaxed">
              Somos el grupo empresarial que diseña, construye y opera toda la
              infraestructura y estrategia digital detrás de{" "}
              <strong className="font-semibold text-slate-900">TREENET</strong>,
              garantizando internet de alta velocidad y máxima estabilidad.
            </p>

            {/* Destacados técnicos */}
            <div className="space-y-4 pt-1">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/90 border-l-4 border-l-[#1D4ED8] shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                  <Network className="w-5 h-5 text-[#1D4ED8]" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900">
                    Infraestructura FTTH Propia
                  </h4>
                  <p className="text-sm text-slate-600 mt-0.5">
                    Redes de fibra óptica de última milla con alta capacidad y
                    baja latencia.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/90 border-l-4 border-l-emerald-500 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900">
                    Estrategia Comercial &amp; Expansión
                  </h4>
                  <p className="text-sm text-slate-600 mt-0.5">
                    Consolidación masiva en hogares con planes transparentes y
                    cobertura garantizada.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer de sección + CTA */}
            <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-200">
              <span className="text-xs font-semibold text-slate-500">
                VERLA · Infraestructura de Telecomunicaciones
              </span>
              <a
                href={EXTERNAL_LINKS.TREENET}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] shadow-sm transition-all duration-200"
              >
                <span>Ir a treenet</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(TreenetSection);
