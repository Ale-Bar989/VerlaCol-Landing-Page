import {
  Shield,
  Heart,
  Lock,
  Eye,
  Settings,
  AlertCircle,
  BookOpen,
} from "lucide-react";
import { PageLayout, ParallaxBackground } from "@/shared//components";
import { PROTECTION_MEASURES } from "./data/protection.data";

// Página de Protección Infantil
// Ubicación: src/ui/pages/legal/proteccion-infantil/index.tsx

export default function ProteccionInfantilPage() {
  return (
    <PageLayout>
      <div className="container mx-auto mt-16 mb-16 px-6 max-w-5xl">
        {/* Header con ParallaxBackground */}
        <ParallaxBackground
          imageUrl="/images/backgrounds/5.jpg"
          className="mb-16 rounded-2xl overflow-hidden"
          height="400px"
        >
          <div className="relative z-10 text-center h-full flex flex-col items-center justify-center px-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 gradient-icon-box">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-white">
              Protección{" "}
              <div className="relative inline-block">
                <span className="text-transparent bg-clip-text animate-gradient gradient-text-animated">
                  Infantil
                </span>
                {/* Underline */}
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#4A5CFF] to-transparent"></div>
              </div>
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Medidas y protocolos para garantizar un entorno digital{" "}
              <span className="text-white font-semibold">
                seguro para menores de edad
              </span>
            </p>
          </div>
        </ParallaxBackground>

        {/* Content */}
        <div className="space-y-12">
          {/* Introducción */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Heart className="w-6 h-6 text-(--accent-primary)" />
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
              <Lock className="w-6 h-6 text-(--accent-primary)" />
              Medidas de Protección Activa
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {PROTECTION_MEASURES.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-(--accent-primary)/10 rounded-lg mb-4">
                    <item.icon className="w-6 h-6 text-(--accent-primary)" />
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
              <BookOpen className="w-6 h-6 text-(--accent-primary)" />
              Guía para Padres y Tutores
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Eye,
                  title: "Supervisión Activa",
                  description:
                    "Mantén comunicación abierta con tus hijos sobre su actividad en línea y revisa periódicamente su uso.",
                  color: "primary",
                },
                {
                  icon: Settings,
                  title: "Configura Controles",
                  description:
                    "Utiliza las herramientas de control parental disponibles para establecer límites apropiados.",
                  color: "secondary",
                },
                {
                  icon: AlertCircle,
                  title: "Reporta Incidentes",
                  description:
                    "Si detectas contenido inapropiado, repórtalo inmediatamente a través de nuestros canales oficiales.",
                  color: "primary",
                },
                {
                  icon: BookOpen,
                  title: "Educa sobre Seguridad",
                  description:
                    "Enseña a los menores sobre los riesgos en línea y cómo navegar de forma segura.",
                  color: "secondary",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-(--accent-primary)/10 rounded-lg mb-4">
                    <item.icon className="w-6 h-6 text-(--accent-primary)" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="bg-linear-to-br from-(--accent-primary)/10 to-(--accent-secondary)/10 border border-(--accent-primary)/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              ¿Necesitas ayuda o tienes alguna denuncia?
            </h2>
            <p className="text-gray-300 mb-6">
              Contamos con un equipo especializado disponible 24/7 para atender
              casos de protección infantil
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-linear-to-r from-(--accent-primary) to-(--accent-secondary) px-8 py-3 rounded-xl font-semibold dark:text-white hover:from-(--accent-secondary) hover:to-(--accent-primary) hover:scale-105 transition-all duration-700 ease-in-out">
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
