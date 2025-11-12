import { FileText, Scale, BookOpen, ExternalLink } from "lucide-react";
import { PageLayout } from "@/shared//components";
import { Link } from "react-router-dom";
import { ROUTES } from "@/core/router/routes.config";
import { MAIN_LAWS } from "./data/laws.data";

// Página de Normatividad
// Ubicación: src/ui/pages/legal/normatividad/index.tsx

export default function NormatividadPage() {
  return (
    <PageLayout>
      <div className="container mx-auto mt-16 mb-16 px-6 max-w-5xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-(--accent-primary)/10 rounded-2xl mb-6">
            <FileText className="w-8 h-8 text-(--accent-primary)" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Marco{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-(--accent-primary) to-(--accent-secondary)">
              Normativo
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Legislación y regulaciones que rigen nuestras operaciones en
            Colombia
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Introducción */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Scale className="w-6 h-6 text-(--accent-primary)" />
              Marco Legal Vigente
            </h2>
            <p className="text-gray-300 leading-relaxed">
              VERLA opera bajo estricto cumplimiento de la normativa
              colombiana en materia de telecomunicaciones, protección de datos y
              servicios digitales. Nuestro compromiso es mantener la
              transparencia total con nuestros usuarios respecto a las leyes que
              nos rigen.
            </p>
          </section>

          {/* Leyes Principales */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-(--accent-primary)" />
              Normativas Principales
            </h2>
            <div className="space-y-4">
              {MAIN_LAWS.map((law, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1 text-(--accent-primary)">
                        {law.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-2">
                        {law.subtitle}
                      </p>
                      <p className="text-sm text-gray-300">{law.description}</p>
                    </div>
                    <a
                      href={law.link}
                      className="shrink-0 p-2 bg-(--accent-primary)/10 rounded-lg hover:bg-(--accent-primary)/20 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-(--accent-primary)" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Entidades Reguladoras */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Entidades Reguladoras</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "CRC",
                  fullName: "Comisión de Regulación de Comunicaciones",
                  role: "Regulación del sector de las telecomunicaciones",
                },
                {
                  name: "SIC",
                  fullName: "Superintendencia de Industria y Comercio",
                  role: "Protección de datos personales y derechos del consumidor",
                },
                {
                  name: "MinTIC",
                  fullName: "Ministerio de Tecnologías de la Información",
                  role: "Política pública del sector TIC en Colombia",
                },
                {
                  name: "ANE",
                  fullName: "Agencia Nacional del Espectro",
                  role: "Administración y vigilancia del espectro radioeléctrico",
                },
              ].map((entity, index) => (
                <div
                  key={index}
                  className="bg-(--accent-primary)/5 border border-(--accent-primary)/20 rounded-xl p-5"
                >
                  <h3 className="text-lg font-bold text-(--accent-primary) mb-1">
                    {entity.name}
                  </h3>
                  <p className="text-sm font-semibold text-white mb-2">
                    {entity.fullName}
                  </p>
                  <p className="text-sm text-gray-400">{entity.role}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-linear-to-br from-(--accent-primary)/10 to-(--accent-secondary)/10 border border-(--accent-primary)/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              ¿Necesitas más información legal?
            </h2>
            <p className="text-gray-300 mb-6">
              Nuestro departamento legal está disponible para aclarar cualquier
              duda sobre normativas
            </p>
            <Link 
              to={ROUTES.CONTACT}
              className="inline-block bg-linear-to-r from-(--accent-primary) to-(--accent-secondary) px-8 py-3 rounded-xl font-semibold dark:text-white hover:from-(--accent-secondary) hover:to-(--accent-primary) hover:scale-105 transition-all duration-700 ease-in-out"
            >
              Contactar Área Legal
            </Link>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
