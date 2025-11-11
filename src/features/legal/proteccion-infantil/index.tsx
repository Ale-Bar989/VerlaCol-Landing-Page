import { Shield, Heart, Lock, Eye, Settings, AlertCircle, BookOpen } from "lucide-react";
import { PageLayout } from "@/shared//components";
import { PROTECTION_MEASURES } from "./data/protection.data";

// Página de Protección Infantil
// Ubicación: src/ui/pages/legal/proteccion-infantil/index.tsx

export default function ProteccionInfantilPage() {
  return (
    <PageLayout>
      <div className="container mx-auto mt-16 mb-16 px-6 max-w-5xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/10 rounded-2xl mb-6">
            <Shield className="w-8 h-8 text-purple-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Protección{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">
              Infantil
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Medidas y protocolos para garantizar un entorno digital seguro para
            menores de edad
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Introducción */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Heart className="w-6 h-6 text-purple-400" />
              Nuestro Compromiso
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              La protección de menores es una prioridad absoluta. Implementamos
              controles rigurosos y tecnologías avanzadas para crear un ambiente
              digital seguro, cumpliendo con la Ley 1098 de Infancia y
              Adolescencia de Colombia y estándares internacionales como COPPA.
            </p>
          </section>

          {/* Medidas de Protección */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Lock className="w-6 h-6 text-purple-400" />
              Medidas de Protección Activa
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {PROTECTION_MEASURES.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/10 rounded-lg mb-4">
                    <item.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Guía para Padres */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-purple-400" />
              Guía para Padres y Tutores
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Eye,
                  title: "Supervisión Activa",
                  description: "Mantén comunicación abierta con tus hijos sobre su actividad en línea y revisa periódicamente su uso.",
                  color: "purple"
                },
                {
                  icon: Settings,
                  title: "Configura Controles",
                  description: "Utiliza las herramientas de control parental disponibles para establecer límites apropiados.",
                  color: "blue"
                },
                {
                  icon: AlertCircle,
                  title: "Reporta Incidentes",
                  description: "Si detectas contenido inapropiado, repórtalo inmediatamente a través de nuestros canales oficiales.",
                  color: "red"
                },
                {
                  icon: BookOpen,
                  title: "Educa sobre Seguridad",
                  description: "Enseña a los menores sobre los riesgos en línea y cómo navegar de forma segura.",
                  color: "green"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-${item.color}-500/10 rounded-lg mb-4`}>
                    <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-linear-to-br from-purple-600/10 to-pink-600/10 border border-purple-500/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              ¿Necesitas ayuda o tienes alguna denuncia?
            </h2>
            <p className="text-gray-300 mb-6">
              Contamos con un equipo especializado disponible 24/7 para atender
              casos de protección infantil
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-linear-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-xl font-semibold hover:from-purple-500 hover:to-pink-500 hover:scale-105 transition-all duration-700 ease-in-out">
                Reportar Incidente
              </button>
              <button className="bg-white/10 border border-white/20 px-8 py-3 rounded-xl font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-700 ease-in-out">
                Guía de Controles Parentales
              </button>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
