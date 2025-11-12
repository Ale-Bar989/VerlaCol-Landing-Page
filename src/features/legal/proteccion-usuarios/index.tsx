import {
  Shield,
  AlertCircle,
  FileText,
  MapPin,
  HelpCircle,
} from "lucide-react";
import { PageLayout } from "@/shared/components";
import { Link } from "react-router-dom";
import { ROUTES } from "@/core/router/routes.config";
import {
  REGULATIONS_COLUMN_1,
  REGULATIONS_COLUMN_2,
  REGULATIONS_COLUMN_3,
} from "./data/regulations.data";

// Página de Protección al Usuario y Normativa
// Ubicación: src/ui/pages/legal/proteccion-usuarios/index.tsx

export default function ProteccionUsuariosPage() {
  return (
    <PageLayout>
      <div className=" mb-16 mt-16 container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-(--accent-primary)/10 rounded-2xl mb-6">
            <Shield className="w-8 h-8 text-(--accent-primary)" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Protección al Usuario{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-(--accent-primary) to-(--accent-secondary)">
              y Normativa
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Marco regulatorio del sector TIC en cumplimiento de la normatividad
            colombiana
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Título Principal de Regulación */}
          <div className="bg-linear-to-r from-(--accent-primary)/20 to-(--accent-secondary)/20 border-2 border-(--accent-primary)/50 rounded-2xl p-6 text-center">
            <h2 className="text-3xl font-bold text-(--accent-primary)">
              REGULACIÓN SECTOR TIC
            </h2>
          </div>

          {/* Grid de Normativas - 3 Columnas */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Columna 1 */}
              <div className="space-y-4">
                {REGULATIONS_COLUMN_1.map((item, index) => (
                  <a
                    key={index}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(item.path, '_blank', 'noopener,noreferrer');
                    }}
                    className="flex items-start gap-3 bg-(--accent-primary)/5 border border-(--accent-primary)/20 rounded-lg p-4 hover:bg-(--accent-primary)/10 transition-all cursor-pointer"
                  >
                    <AlertCircle className="w-5 h-5 text-(--accent-primary) shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{item.name}</span>
                  </a>
                ))}
              </div>

              {/* Columna 2 */}
              <div className="space-y-4">
                {REGULATIONS_COLUMN_2.map((item, index) => (
                  <a
                    key={index}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(item.path, '_blank', 'noopener,noreferrer');
                    }}
                    className="flex items-start gap-3 bg-(--accent-primary)/5 border border-(--accent-primary)/20 rounded-lg p-4 hover:bg-(--accent-primary)/10 transition-all cursor-pointer"
                  >
                    <AlertCircle className="w-5 h-5 text-(--accent-primary) shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{item.name}</span>
                  </a>
                ))}
              </div>

              {/* Columna 3 */}
              <div className="space-y-4">
                {REGULATIONS_COLUMN_3.map((item, index) => (
                  <a
                    key={index}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(item.path, '_blank', 'noopener,noreferrer');
                    }}
                    className="flex items-start gap-3 bg-(--accent-primary)/5 border border-(--accent-primary)/20 rounded-lg p-4 hover:bg-(--accent-primary)/10 transition-all cursor-pointer"
                  >
                    <AlertCircle className="w-5 h-5 text-(--accent-primary) shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{item.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* Sección de Enlaces Importantes */}
          <section className="grid md:grid-cols-2 gap-6">
            {/* Mapa de Cobertura */}
            <div className="bg-linear-to-br from-(--accent-primary)/10 to-(--accent-secondary)/10 border border-(--accent-primary)/30 rounded-2xl p-8 hover:from-(--accent-primary)/20 hover:to-(--accent-secondary)/20 transition-all cursor-pointer group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-(--accent-primary)/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MapPin className="w-7 h-7 text-(--accent-primary)" />
                </div>
                <h3 className="text-2xl font-bold text-(--accent-primary)">
                  Mapa de Cobertura
                </h3>
              </div>
              <p className="text-gray-300 text-sm">
                Consulta nuestra cobertura de servicios a nivel nacional y
                verifica la disponibilidad en tu zona.
              </p>
            </div>

            {/* Procedimiento PQR's */}
            <div className="bg-linear-to-br from-(--accent-secondary)/10 to-(--accent-primary)/10 border border-(--accent-secondary)/30 rounded-2xl p-8 hover:from-(--accent-secondary)/20 hover:to-(--accent-primary)/20 transition-all cursor-pointer group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-(--accent-secondary)/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <HelpCircle className="w-7 h-7 text-(--accent-secondary)" />
                </div>
                <h3 className="text-2xl font-bold text-(--accent-secondary)">
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
              <FileText className="w-6 h-6 text-(--accent-primary)" />
              Marco de Protección al Usuario
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <strong className="text-(--accent-primary)">VERLA</strong>{" "}
                cumple estrictamente con toda la regulación del sector TIC
                establecida por la{" "}
                <strong className="text-(--accent-primary)">
                  Comisión de Regulación de Comunicaciones (CRC)
                </strong>{" "}
                y demás entidades competentes.
              </p>
              <p>
                Este conjunto de normas vela por la protección de los derechos 
                de los usuarios de servicios de telecomunicaciones, fijando 
                parámetros de calidad, canales de atención y sistemas de 
                resguardo para garantizar la satisfacción de nuestros clientes.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-linear-to-br from-(--accent-primary)/10 to-(--accent-secondary)/10 border border-(--accent-primary)/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              ¿Necesitas más información?
            </h2>
            <p className="text-gray-300 mb-6">
              Nuestro equipo está disponible para resolver cualquier duda sobre
              nuestro cumplimiento normativo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={ROUTES.CONTACT}
                className="bg-linear-to-r from-(--accent-primary) to-(--accent-secondary) px-8 py-3 rounded-xl font-semibold dark:text-white hover:from-(--accent-secondary) hover:to-(--accent-primary) hover:scale-105 transition-all duration-700 ease-in-out text-center"
              >
                Contactar Soporte
              </Link>
              <button className="bg-white/10 border border-white/20 px-8 py-3 rounded-xl font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-700 ease-in-out">
                Ver PQR's
              </button>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
