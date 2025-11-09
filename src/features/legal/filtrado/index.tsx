import { 
  Filter, 
  Settings, 
  Shield, 
  CheckCircle2
} from "lucide-react";
import { PageLayout } from "@/shared//components";
import { FILTERING_TYPES, BLOCKED_CATEGORIES_ICONS, BLOCKED_CATEGORIES_TEXTS } from "./data/filtering.data";


// Página de Mecanismos de Filtrado
// Ubicación: src/ui/pages/legal/filtrado/index.tsx

export default function FiltradoPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/10 rounded-2xl mb-6">
            <Filter className="w-8 h-8 text-orange-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Mecanismos de{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-red-400">
              Filtrado
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Sistemas avanzados de control de contenido para un internet más
            seguro
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Introducción */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Shield className="w-6 h-6 text-orange-400" />
              Tecnología de Filtrado Avanzada
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Implementamos sistemas de filtrado de última generación que
              combinan inteligencia artificial, listas negras actualizadas y
              análisis en tiempo real para bloquear contenido inapropiado,
              cumpliendo con la regulación colombiana y protegiendo
              especialmente a menores de edad.
            </p>
          </section>

          {/* Tipos de Filtrado */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Settings className="w-6 h-6 text-red-400" />
              Tipos de Filtrado Implementados
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {FILTERING_TYPES.map((type, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
                >
                  <h3 className="text-lg font-semibold mb-2 text-orange-400">
                    {type.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">
                    {type.description}
                  </p>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Categorías Bloqueadas */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">
              Categorías de Contenido Bloqueado
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {BLOCKED_CATEGORIES_ICONS.map((Icon, index) => (
                <div
                  key={index}
                  className="bg-orange-500/5 border border-orange-500/20 rounded-lg p-4 text-center"
                >
                  <span className="text-sm text-gray-300 flex items-center justify-center gap-2">
                    <Icon className="inline-block w-5 h-5" />
                    {BLOCKED_CATEGORIES_TEXTS[index]}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Configuración Personalizada */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              Configuración Personalizada
            </h2>
            <div className="space-y-4">
              {[
                {
                  level: "Nivel Básico",
                  description:
                    "Bloqueo de contenido ilegal y extremadamente dañino",
                  recommended: "Para adultos",
                },
                {
                  level: "Nivel Medio",
                  description:
                    "Incluye contenido inapropiado y potencialmente dañino",
                  recommended: "Para adolescentes",
                },
                {
                  level: "Nivel Alto",
                  description:
                    "Filtrado extensivo con lista blanca de sitios permitidos",
                  recommended: "Para niños",
                },
              ].map((config, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-start justify-between gap-4"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-orange-400 mb-1">
                      {config.level}
                    </h3>
                    <p className="text-sm text-gray-300 mb-2">
                      {config.description}
                    </p>
                    <span className="text-xs text-gray-500">
                      Recomendado: {config.recommended}
                    </span>
                  </div>
                  <button className="bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-500/20 transition-all">
                    Configurar
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Estadísticas */}
          <section className="grid md:grid-cols-3 gap-6">
            {[
              { value: "15M+", label: "Sitios bloqueados" },
              { value: "99.7%", label: "Precisión del filtro" },
              { value: "24/7", label: "Monitoreo activo" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-linear-to-br from-orange-600/10 to-red-600/10 border border-orange-500/20 rounded-xl p-6 text-center"
              >
                <div className="text-4xl font-bold text-orange-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </section>

          {/* CTA */}
          <section className="bg-linear-to-br from-orange-600/10 to-red-600/10 border border-orange-500/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              ¿Necesitas ayuda con la configuración?
            </h2>
            <p className="text-gray-300 mb-6">
              Nuestro equipo técnico puede ayudarte a configurar el nivel de
              filtrado adecuado
            </p>
            <button className="bg-linear-to-r from-orange-600 to-red-600 px-8 py-3 rounded-xl font-semibold hover:from-orange-500 hover:to-red-500 transition-all">
              Solicitar Asistencia Técnica
            </button>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
