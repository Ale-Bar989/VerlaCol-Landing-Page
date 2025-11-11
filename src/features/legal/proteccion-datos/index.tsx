import { Lock, Database, FileCheck, FileText, Phone, CreditCard, Globe } from "lucide-react";
import { PageLayout } from "@/shared//components";
import { Link } from "react-router-dom";
import { ROUTES } from "@/core/router/routes.config";
import { DATA_PRINCIPLES } from "./data/privacy.data";

// Página de Política de Tratamiento de Datos Personales
// Ubicación: src/ui/pages/legal/proteccion-datos/index.tsx

export default function ProteccionDatosPage() {
  return (
    <PageLayout>
      <div className="container mx-auto mt-16 mb-16 px-6 max-w-5xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-2xl mb-6">
            <Lock className="w-8 h-8 text-green-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Política de Tratamiento de{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-emerald-400">
              Datos Personales
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transparencia total sobre cómo recopilamos, usamos y protegemos tu
            información
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Introducción */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Database className="w-6 h-6 text-green-400" />
              Nuestro Compromiso con tu Privacidad
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              En cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013,
              VERLACOL garantiza la protección integral de tus datos personales.
              Tu privacidad es nuestra prioridad y tratamos tu información con
              la máxima responsabilidad y transparencia.
            </p>
          </section>

          {/* Principios */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <FileCheck className="w-6 h-6 text-emerald-400" />
              Principios de Tratamiento
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {DATA_PRINCIPLES.map((principle, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/10 rounded-lg mb-4">
                    <principle.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Datos Recopilados */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Database className="w-6 h-6 text-emerald-400" />
              Datos que Recopilamos
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: FileText,
                  title: "Datos de Identificación",
                  description: "Nombre completo, documento de identidad, fecha de nacimiento.",
                  color: "emerald"
                },
                {
                  icon: Phone,
                  title: "Datos de Contacto",
                  description: "Dirección, teléfono, correo electrónico.",
                  color: "blue"
                },
                {
                  icon: CreditCard,
                  title: "Datos Financieros",
                  description: "Información de facturación y medios de pago (encriptada).",
                  color: "purple"
                },
                {
                  icon: Globe,
                  title: "Datos de Uso",
                  description: "Información sobre navegación y uso del servicio (anónima).",
                  color: "cyan"
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-${item.color}-500/10 rounded-lg mb-4`}>
                    <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Tus Derechos */}
          <section>
            <h2 className="text-2xl font-bold mb-6">
              Tus Derechos como Titular
            </h2>
            <div className="space-y-3">
              {[
                "Conocer, actualizar y rectificar tus datos personales",
                "Solicitar prueba de la autorización otorgada",
                "Ser informado sobre el uso dado a tus datos",
                "Presentar quejas ante la SIC por infracciones",
                "Revocar la autorización y/o solicitar supresión de datos",
                "Acceder de forma gratuita a tus datos personales",
              ].map((right, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-green-500/5 border border-green-500/20 rounded-lg p-4"
                >
                  <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-green-400">
                      {index + 1}
                    </span>
                  </div>
                  <span className="text-gray-300 text-sm">{right}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Medidas de Seguridad */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Medidas de Seguridad</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-green-400 mt-1 shrink-0" />
                <span>Encriptación SSL/TLS en todas las comunicaciones</span>
              </li>
              <li className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-green-400 mt-1 shrink-0" />
                <span>
                  Servidores seguros con acceso restringido y monitoreado
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-green-400 mt-1 shrink-0" />
                <span>
                  Respaldos periódicos y plan de recuperación de desastres
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-green-400 mt-1 shrink-0" />
                <span>Auditorías de seguridad independientes anuales</span>
              </li>
            </ul>
          </section>

          {/* CTA */}
          <section className="bg-linear-to-br from-green-600/10 to-emerald-600/10 border border-green-500/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              ¿Quieres ejercer tus derechos?
            </h2>
            <p className="text-gray-300 mb-6">
              Contacta a nuestro oficial de protección de datos para consultas o
              solicitudes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to={ROUTES.CONTACT}
                className="inline-block bg-linear-to-r from-green-600 to-emerald-600 px-8 py-3 rounded-xl font-semibold hover:from-green-500 hover:to-emerald-500 hover:scale-105 transition-all duration-700 ease-in-out"
              >
                Solicitar Información
              </Link>
              <button className="bg-white/10 border border-white/20 px-8 py-3 rounded-xl font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-700 ease-in-out">
                Descargar Política Completa
              </button>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
