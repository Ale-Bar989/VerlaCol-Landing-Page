import {
  AlertCircle,
  Shield,
  FileText,
  MapPin,
  HelpCircle,
} from "lucide-react";
import { PageLayout } from '@/shared//components';

// Página de Protección al Usuario y Normativa
// Ubicación: src/ui/pages/legal/proteccion-usuarios/index.tsx

export default function ProteccionUsuariosPage() {
  return (
    <PageLayout>
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/10 rounded-2xl mb-6">
              <Shield className="w-8 h-8 text-orange-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Protección al Usuario{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-red-400">
                y Normativa
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Marco regulatorio del sector TIC en cumplimiento de la
              normatividad colombiana
            </p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Título Principal de Regulación */}
            <div className="bg-linear-to-r from-orange-500/20 to-red-500/20 border-2 border-orange-500/50 rounded-2xl p-6 text-center">
              <h2 className="text-3xl font-bold text-orange-400">
                REGULACIÓN SECTOR TIC
              </h2>
            </div>

            {/* Grid de Normativas - 3 Columnas */}
            <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Columna 1 */}
                <div className="space-y-4">
                  {[
                    "Ley 679 de 2001",
                    "Acuerdo 011 de 2006",
                    "Ley 1480 de 2011",
                    "Régimen de protección de usuarios. Resolución 5111 de 2017",
                    "Decreto 90 del 18 de Enero de 2018",
                    "Resolución CRC 6890 de 2022",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-orange-500/5 border border-orange-500/20 rounded-lg p-4 hover:bg-orange-500/10 transition-all"
                    >
                      <AlertCircle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Columna 2 */}
                <div className="space-y-4">
                  {[
                    "Resolución CRC 5299 de 2018",
                    "Resolución CRC 5300 de 2018",
                    "Resolución CRC 5321 de 2018",
                    "Resolución CRC 6242 de 2021",
                    "Resolución CRC 5337 de 2018",
                    "Resolución CRC 5344 de 2018",
                    "Resolución CRC 6333 de 2021",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-orange-500/5 border border-orange-500/20 rounded-lg p-4 hover:bg-orange-500/10 transition-all"
                    >
                      <AlertCircle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Columna 3 */}
                <div className="space-y-4">
                  {[
                    "Resolución CRC 5397 de 2018",
                    "Resolución CRC 5322 de 2018",
                    "Resolución 5930 de 2020",
                    "Resolución 19012 2020",
                    "Art. 6 Ley 1266 de 2008",
                    "Art. 16 Ley 1266 de 2008",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 bg-orange-500/5 border border-orange-500/20 rounded-lg p-4 hover:bg-orange-500/10 transition-all"
                    >
                      <AlertCircle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Sección de Enlaces Importantes */}
            <section className="grid md:grid-cols-2 gap-6">
              {/* Mapa de Cobertura */}
              <div className="bg-linear-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl p-8 hover:from-blue-500/20 hover:to-cyan-500/20 transition-all cursor-pointer group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-400">
                    Mapa de Cobertura
                  </h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Consulta nuestra cobertura de servicios a nivel nacional y
                  verifica la disponibilidad en tu zona.
                </p>
              </div>

              {/* Procedimiento PQR's */}
              <div className="bg-linear-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-8 hover:from-purple-500/20 hover:to-pink-500/20 transition-all cursor-pointer group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <HelpCircle className="w-7 h-7 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-400">
                    Procedimiento y trámites de PQR's
                  </h3>
                </div>
                <p className="text-gray-300 text-sm">
                  Conoce el proceso para presentar Peticiones, Quejas y Reclamos
                  de manera efectiva.
                </p>
              </div>
            </section>

            {/* Marco Legal */}
            <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6 text-orange-400" />
                Marco de Protección al Usuario
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-white">HV Televisión S.A.S</strong>{" "}
                  cumple estrictamente con toda la regulación del sector TIC
                  establecida por la{" "}
                  <strong className="text-orange-400">
                    Comisión de Regulación de Comunicaciones (CRC)
                  </strong>{" "}
                  y demás entidades competentes.
                </p>
                <p>
                  Este marco normativo garantiza los derechos de los usuarios de
                  servicios de telecomunicaciones, estableciendo estándares de
                  calidad, procedimientos de atención y mecanismos de protección
                  para todos nuestros clientes.
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-linear-to-br from-orange-600/10 to-red-600/10 border border-orange-500/20 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                ¿Necesitas más información?
              </h2>
              <p className="text-gray-300 mb-6">
                Nuestro equipo está disponible para resolver cualquier duda
                sobre nuestro cumplimiento normativo
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-linear-to-r from-orange-600 to-red-600 px-8 py-3 rounded-xl font-semibold hover:from-orange-500 hover:to-red-500 transition-all">
                  Contactar Soporte
                </button>
                <button className="bg-white/10 border border-white/20 px-8 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all">
                  Ver PQR's
                </button>
              </div>
            </section>
          </div>
        </div>
    </PageLayout>
  );
}
