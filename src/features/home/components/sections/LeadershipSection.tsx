import { memo } from "react";
import { LEADERSHIP_TEAM } from "@/features/home/data/institucional.data";

function LeadershipSection() {
  const ceo = LEADERSHIP_TEAM.find((member) => member.featured);
  const executives = LEADERSHIP_TEAM.filter((member) => !member.featured);

  return (
    <section
      id="liderazgo"
      className="py-16 sm:py-24 bg-white border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado y bajada */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E1E6E] tracking-tight mb-4">
            Liderazgo Directivo
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            El equipo que lidera la visión estratégica y la continuidad operativa
            de nuestras redes e inversiones en Colombia.
          </p>
        </div>

        {/* Ficha destacada: CEO */}
        {ceo && (
          <div className="max-w-4xl mx-auto mb-10">
            <div className="text-center mb-4">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#1D4ED8] bg-blue-50 px-3 py-1 rounded-full mb-1.5">
                {ceo.role}
              </span>
              <h3 className="text-2xl font-extrabold text-[#1E1E6E]">
                {ceo.role}: {ceo.name}
              </h3>
            </div>

            <div className="rounded-3xl bg-slate-50 border border-slate-200/90 shadow-md p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              <div className="w-36 h-44 sm:w-40 sm:h-48 shrink-0 rounded-2xl bg-gradient-to-b from-slate-100 to-slate-200/80 border border-slate-200 overflow-hidden flex items-end justify-center pt-2">
                <img
                  src={ceo.image}
                  alt={`${ceo.role} ${ceo.name}`}
                  className="w-full h-full object-contain object-bottom"
                  loading="lazy"
                />
              </div>
              <p className="text-sm sm:text-[15px] text-slate-700 leading-relaxed text-center sm:text-left">
                {ceo.bio}
              </p>
            </div>
          </div>
        )}

        {/* Cuadrícula 2x2: CFO, CMCO, CTIO, COO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {executives.map((exec) => (
            <article
              key={exec.id}
              className="rounded-3xl bg-gradient-to-br from-[#2B2B94] to-[#212078] p-5 sm:p-6 shadow-lg shadow-indigo-950/15 flex flex-col sm:flex-row items-center sm:items-stretch gap-5"
            >
              <div className="w-32 h-40 sm:h-auto sm:min-h-[168px] shrink-0 overflow-hidden flex items-end justify-center pt-2">
                <img
                  src={exec.image}
                  alt={`${exec.role} ${exec.name}`}
                  className="w-full h-full object-contain object-bottom"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 rounded-2xl bg-white/60 backdrop-blur-xs p-4 sm:p-5 text-center sm:text-left flex flex-col justify-center">
                <div className="inline-flex items-center justify-center sm:justify-start gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#1E1E6E] mb-1">
                  <span>{exec.role}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-950 mb-2">
                  {exec.role} / {exec.name}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-slate-950 leading-relaxed">
                  {exec.bio}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mt-10">
          C-LEVEL // VERLA S.A.S.
        </p>
      </div>
    </section>
  );
}

export default memo(LeadershipSection);
