import { Lock, Server, CheckCircle, Shield, Key, RefreshCw, ShieldAlert, Smartphone, Globe, HardDrive } from "lucide-react";
import { PageLayout, ParallaxBackground } from "@/shared/components";
import { Link } from "react-router-dom";
import { ROUTES } from "@/core/router/routes.config";
import { SECURITY_LAYERS } from "./data/security.data";

// Página de Seguridad en la Red
// Ubicación: src/ui/pages/legal/seguridad/index.tsx

export default function SeguridadPage() {
  return (
    <PageLayout>
      <div className="container mx-auto mt-16 mb-16 px-6 max-w-5xl">
        {/* Header with Parallax Effect */}
                                  <div className="mb-16">
                                    <ParallaxBackground 
                                    imageUrl="/images/backgrounds/7.jpg" 
                                    className="mb-16 rounded-2xl overflow-hidden"
                                    height="400px"
                                  >
                                    <div className="text-center">
                                      <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                        Seguridad en la{" "}
                                          <span className="text-transparent bg-clip-text bg-linear-to-r from-(--accent-primary) to-(--accent-secondary)">
                                            Red
                                          </span>
                                      </h1>
                                      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                        rotocolos y medidas de seguridad de clase mundial para proteger tu
            conexión
                                      </p>
                                    </div>
                                  </ParallaxBackground>
                                  </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Introducción */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <Lock className="w-6 h-6 text-(--accent-primary)" />
              Seguridad Multicapa
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Implementamos un enfoque de seguridad en profundidad, con
              múltiples capas de protección que trabajan en conjunto para
              proteger tu conexión, datos y dispositivos contra las amenazas más
              sofisticadas del mundo digital.
            </p>
          </section>

          {/* Capas de Seguridad */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Server className="w-6 h-6 text-(--accent-secondary)" />
              Capas de Protección
            </h2>
            <div className="space-y-4">
              {SECURITY_LAYERS.map((level, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 bg-${level.color}-500/10 rounded-lg flex items-center justify-center shrink-0`}
                    >
                      <level.icon
                        className={`w-6 h-6 text-${level.color}-400`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-(--accent-primary) mb-1">
                        {level.layer}
                      </h3>
                      <p className="text-sm text-gray-300 mb-3">
                        {level.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {level.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 bg-${level.color}-500/10 border border-${level.color}-500/20 rounded-full text-xs text-${level.color}-300`}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certificaciones */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">
              Certificaciones y Estándares
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "ISO/IEC 27001",
                  desc: "Gestión de seguridad de la información",
                },
                {
                  name: "ISO/IEC 27017",
                  desc: "Seguridad en servicios en la nube",
                },
                {
                  name: "PCI DSS",
                  desc: "Seguridad de datos de tarjetas de pago",
                },
                {
                  name: "SOC 2 Type II",
                  desc: "Controles de seguridad organizacional",
                },
              ].map((cert, index) => (
                <div
                  key={index}
                  className="bg-(--accent-primary)/5 border border-(--accent-primary)/20 rounded-lg p-5"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-(--accent-primary) mt-1 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-gray-400">{cert.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Mejores Prácticas */}
          <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">
              Recomendaciones de Seguridad para Usuarios
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  icon: <Key className="w-5 h-5 text-(--accent-primary) inline-block mr-2" />,
                  title: "Contraseñas Fuertes",
                  tip: "Usa contraseñas únicas y largas, habilita autenticación de dos factores",
                },
                {
                  icon: <RefreshCw className="w-5 h-5 text-(--accent-primary) inline-block mr-2" />,
                  title: "Actualiza Regularmente",
                  tip: "Mantén tu sistema operativo y aplicaciones siempre actualizados",
                },
                {
                  icon: <ShieldAlert className="w-5 h-5 text-(--accent-secondary) inline-block mr-2" />,
                  title: "Cuidado con Phishing",
                  tip: "No hagas clic en enlaces sospechosos ni descargues archivos desconocidos",
                },
                {
                  icon: <Smartphone className="w-5 h-5 text-(--accent-primary) inline-block mr-2" />,
                  title: "Protege tus Dispositivos",
                  tip: "Instala software de seguridad y mantén activo el firewall",
                },
                {
                  icon: <Globe className="w-5 h-5 text-(--accent-secondary) inline-block mr-2" />,
                  title: "Navega Seguro",
                  tip: "Usa HTTPS siempre, evita redes WiFi públicas sin VPN",
                },
                {
                  icon: <HardDrive className="w-5 h-5 text-(--accent-primary) inline-block mr-2" />,
                  title: "Respalda tus Datos",
                  tip: "Haz copias de seguridad periódicas de información importante",
                },
              ].map((practice, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-lg p-5"
                >
                  <h3 className="font-semibold text-white mb-2 flex items-center">
                    {practice.icon}
                    {practice.title}
                  </h3>
                  <p className="text-sm text-gray-400">{practice.tip}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Estadísticas */}
          <section className="grid md:grid-cols-4 gap-4">
            {[
              { value: "99.99%", label: "Uptime garantizado" },
              { value: "< 1ms", label: "Latencia promedio" },
              { value: "10M+", label: "Amenazas bloqueadas/mes" },
              { value: "0", label: "Brechas de seguridad" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-(--accent-primary)/5 border border-(--accent-primary)/20 rounded-xl p-5 text-center"
              >
                <div className="text-3xl font-bold text-(--accent-primary) mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </section>

          {/* CTA */}
          <section className="bg-linear-to-br from-(--accent-primary)/10 to-(--accent-secondary)/10 border border-(--accent-primary)/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              ¿Preocupado por tu seguridad?
            </h2>
            <p className="text-gray-300 mb-6">
              Nuestro equipo de expertos en seguridad está disponible para
              asesorarte
            </p>
            <Link 
              to={ROUTES.CONTACT}
              className="inline-block bg-linear-to-r from-(--accent-primary) to-(--accent-secondary) px-8 py-3 rounded-xl font-semibold dark:text-white hover:from-(--accent-secondary) hover:to-(--accent-primary) hover:scale-105 transition-all duration-700 ease-in-out"
            >
              Contactar Experto en Seguridad
            </Link>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}
