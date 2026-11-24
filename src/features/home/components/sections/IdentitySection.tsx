import { memo } from "react";
import { Handshake, Cog, Flag, Lightbulb } from "lucide-react";
import { CORPORATE_VALUES } from "@/features/home/data/institucional.data";

const VALUE_ICONS = {
  integridad: Handshake,
  excelencia: Cog,
  compromiso: Flag,
  innovacion: Lightbulb,
} as const;

function IdentitySection() {
  return (
    <section
      id="grupo-empresarial"
      className="relative py-16 sm:py-24 bg-gradient-to-br from-[#2B2B94] via-[#3432A8] to-[#23227D] text-white overflow-hidden"
    >
      {/* Decoración sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(96,165,250,0.12),transparent_50%)]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Misión y Visión */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Bloque Misión */}
          <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-8 sm:p-10 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-4">
              Misión
            </h2>
            <p className="text-base sm:text-lg text-blue-50/95 leading-relaxed">
              Conectar familias y empresas en municipios de Colombia donde otros
              no llegan, transformando oportunidades con internet de fibra
              óptica confiable, de alta calidad, y con atención simple y humana.
            </p>
          </div>

          {/* Bloque Visión */}
          <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-8 sm:p-10 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-4">
              Visión
            </h2>
            <p className="text-base sm:text-lg text-blue-50/95 leading-relaxed">
              Consolidarnos como el cuarto proveedor de fibra óptica en Colombia
              al 2030, reconocido por la calidad de su red, la experiencia de su
              servicio y el orgullo de su gente, combinando con agilidad la
              integración de redes, la operación de ISP y el despliegue propio
              para cerrar brechas digitales de nuestro país.
            </p>
          </div>
        </div>

        {/* Bloque Valores (4 pilares visuales) */}
        <div className="mt-14 sm:mt-16">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-center text-white mb-10">
            Valores
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORPORATE_VALUES.map((val) => {
              const Icon = VALUE_ICONS[val.id];
              return (
                <div
                  key={val.id}
                  className="flex flex-col items-center text-center rounded-2xl bg-white/[0.07] hover:bg-white/[0.12] border border-white/15 p-6 transition-colors duration-200"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" strokeWidth={1.75} />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white leading-snug mb-2">
                    {val.title}
                  </h4>
                  <p className="text-sm text-blue-100/85 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(IdentitySection);
