import { memo } from "react";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { EXTERNAL_LINKS } from "@/features/home/data/institucional.data";

function NewsAndInfraSection() {
  return (
    <section
      id="noticias-logros"
      className="py-16 sm:py-24 bg-[#1E1E72] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Encabezado de sección Noticias, Logros y Blog */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-200 mb-2">
              <BookOpen className="w-4 h-4" />
              Noticias, Logros y Blog · Ecosistema TREENET
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Estrategia, Ingeniería y Despliegue Nacional
            </h2>
          </div>
          <a
            href={EXTERNAL_LINKS.TREENET_BLOG}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-[#1E1E72] bg-white hover:bg-blue-50 shadow-md transition-colors self-start md:self-auto"
          >
            <span>Ver blog</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Subbloque 1: Estrategia e Impacto Social */}
        <article className="rounded-3xl bg-white text-slate-900 shadow-2xl overflow-hidden">
          <div className="px-6 sm:px-10 pt-6 pb-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-lg sm:text-xl font-extrabold text-[#1E1E6E]">
              Conectividad que transforma territorios
            </h3>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              GRUPO VERLA · TREENET
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
            <div className="lg:col-span-6 space-y-5">
              <p className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                Blog Institucional · Impacto Social
              </p>
              <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Fibra óptica donde otros no llegan
              </h4>
              <p className="text-base text-slate-600 leading-relaxed">
                Desde Grupo VERLA conectamos hogares y empresas en municipios
                intermedios de Colombia mediante la red FTTH de TREENET.
              </p>
              <div className="w-12 h-1 rounded-full bg-[#1D4ED8]" />
              <p className="text-base text-slate-600 leading-relaxed">
                Llevamos acceso estable a estudiantes, comercios y familias en
                zonas apartadas, impulsando oportunidades reales con un servicio
                cercano y confiable.
              </p>
              <div className="pt-2">
                <a
                  href={EXTERNAL_LINKS.TREENET_BLOG}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#2B2B94] hover:bg-[#1E1E72] transition-colors"
                >
                  <span>Ver blog</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <img
                  src="/images/institucional/impacto-social.png"
                  alt="Estudiante conectada gracias al despliegue de fibra óptica en municipios intermedios de Colombia"
                  className="w-full h-[280px] sm:h-[340px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </article>

        {/* Subbloque 2: Capacidad Técnica e Ingeniería Propia */}
        <article className="rounded-3xl bg-white text-slate-900 shadow-2xl overflow-hidden">
          <div className="px-6 sm:px-10 pt-6 pb-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-lg sm:text-xl font-extrabold text-[#1E1E6E]">
              Infraestructura que acelera el desarrollo
            </h3>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              INGENIERÍA Y DESPLIEGUE PROPIO
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <img
                  src="/images/institucional/infraestructura-rack.png"
                  alt="Ingeniero de Grupo VERLA operando rack de distribución de fibra óptica FTTH"
                  className="w-full h-[280px] sm:h-[340px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
              <p className="text-xs font-bold uppercase tracking-wider text-[#1D4ED8]">
                Blog Institucional · Despliegue Técnico
              </p>
              <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Ingeniería propia para cerrar brechas
              </h4>
              <p className="text-base text-slate-600 leading-relaxed">
                Diseñamos y operamos redes de última milla que garantizan
                estabilidad, velocidad real y continuidad operativa nacional.
              </p>
              <div className="w-12 h-1 rounded-full bg-[#1D4ED8]" />
              <p className="text-base text-slate-600 leading-relaxed">
                Combinamos despliegue propio e integración ágil de
                infraestructura para cerrar las brechas digitales del país.
              </p>
              <div className="pt-2">
                <a
                  href={EXTERNAL_LINKS.TREENET_BLOG}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#1D4ED8] hover:text-[#1E40AF] transition-colors"
                >
                  <span>Leer novedades en el blog de treenet</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default memo(NewsAndInfraSection);
