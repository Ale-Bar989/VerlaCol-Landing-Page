import { Briefcase, Check } from "lucide-react";
import {
  PageLayout,
  ServiceHeroSection,
  FeaturesGrid,
  CTASection,
} from "@/shared/components";
import { useLocalTheme } from "@/shared/hooks/useLocalTheme";
import { DESIGN_SYSTEM } from "@/shared/styles/design-system";
import { ROUTES } from "@/core/router/routes.config";
import {
  BUSINESS_FEATURES,
  BUSINESS_BENEFITS,
  ADDITIONAL_BENEFITS,
} from "./data/business.data";

// Página de Planes Empresariales
// Ubicación: src/features/services/planes-empresariales/index.tsx

export default function PlanesEmpresarialesPage() {
  const { isDark } = useLocalTheme();

  return (
    <PageLayout>
      {/* Hero Section */}
      <ServiceHeroSection
        icon={Briefcase}
        title="Planes"
        highlight="Empresariales"
        subtitle="Conectividad de nivel empresarial con disponibilidad garantizada"
      />

      {/* Features Grid */}
      <section className={`${isDark ? "bg-black" : "bg-white"}`}>
        <div className="container mx-auto max-w-7xl px-6 pb-1">
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-1 pt-20 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Características Empresariales
          </h2>
        </div>
        <FeaturesGrid features={BUSINESS_FEATURES} columns={4} />
      </section>

      {/* Business Solutions - Modern Corporate Design */}
      <section className={`relative py-24 overflow-hidden ${isDark ? 'bg-linear-to-br from-gray-950 to-gray-900' : 'bg-linear-to-br from-gray-50 to-gray-100'}`}>
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-[800px] h-[800px] rounded-full opacity-10 radial-gradient-blue"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-[800px] h-[800px] rounded-full opacity-10 radial-gradient-cyan"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2lpdHk9IjAuMDQiPjxwYXRoIGQ9Ik0zNiAzNGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptLTIgMGMwIDEuMTA0LS44OTYgMi0yIDJzLTItLjg5Ni0yLTIgLjg5Ni0yIDItMiAyIC44OTYgMiAyek0zNiA2YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0tMiAwYzAgMS4xMDQtLjg5NiAyLTIgMnMtMi0uODk2LTItMiAuODk2LTIgMi0yIDIgLjg5NiAyIDJ6TTYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bS0yIDBjMCAxLjEwNC0uODk2IDItMiAycy0yLS44OTYtMi0yIC44OTYtMiAyLTIgMiAuODk2IDIgMnpNNTAgN2MwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptLTIgMGMwIDEuMTA0LS44OTYgMi0yIDJzLTItLjg5Ni0yLTIgLjg5Ni0yIDItMiAyIC44OTYgMiAyek0xMCA1M2MwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptLTIgMGMwIDEuMTA0LS44OTYgMi0yIDJzLTItLjg5Ni0yLTIgLjg5Ni0yIDItMiAyIC44OTYgMiAyek01MCA0M2MwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptLTIgMGMwIDEuMTA0LS44OTYgMi0yIDJzLTItLjg5Ni0yLTIgLjg5Ni0yIDItMiAyIC44OTYgMiAyek0xMCAxM2MwLTIuMjA5LTEuNkxzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0tMiAwYzAgMS4xMDQtLjg5NiAyLTIgMnMtMi0uODk2LTItMiAuODk2LTIgMi0yIDIgLjg5NiAyIDJ6TTMwIDEzYzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0tMiAwYzAgMS4xMDQtLjg5NiAyLTIgMnMtMi0uODk2LTItMiAuODk2LTIgMi0yIDIgLjg5NiAyIDJ6TTMwIDUzYzAtMi4yMDktMS42MXMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bS0yIDBjMCAxLjEwNC0uODk2IDItMiAycy0yLS44OTYtMi0yIC44OTYtMiAyLTIgMiAuODk2IDIgMnpNMzAgMTNjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bS0yIDBjMCAxLjEwNC0uODk2IDItMiAycy0yLS44OTYtMi0yIC44OTYtMiAyLTIgMiAuODk2IDIgMnpNMzAgMTNjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bS0yIDBjMCAxLjEwNC0uODk2IDItMiAycy0yLS44OTYtMi0yIC44OTYtMiAyLTIgMiAuODk2IDIgMnpNMzAgMTNjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bS0yIDBjMCAxLjEwNC0uODk2IDItMiAycy0yLS44OTYtMi0yIC44OTYtMiAyLTIgMiAuODk2IDIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-5"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="inline-block text-sm font-semibold tracking-wider uppercase mb-4 text-blue-500">
              Soluciones a Medida
            </span>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r ${
              isDark ? 'from-blue-400 to-cyan-300' : 'from-blue-600 to-cyan-500'
            }`}>
              Nuestras Soluciones Empresariales
            </h2>
            <div className={`w-24 h-1 mx-auto rounded-full mb-8 ${
              isDark ? 'bg-linear-to-r from-blue-500 to-cyan-400' : 'bg-linear-to-r from-blue-600 to-cyan-500'
            }`}></div>
            <p className={`text-lg md:text-xl leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Tecnología de vanguardia diseñada para impulsar el crecimiento y la eficiencia de su empresa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {BUSINESS_BENEFITS.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className={`group relative p-0.5 rounded-2xl transition-all duration-500 overflow-hidden ${
                    isDark 
                      ? 'bg-linear-to-br from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30' 
                      : 'bg-linear-to-br from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100'
                  }`}
                >
                  <div className={`h-full p-8 rounded-2xl transition-all duration-300 ${
                    isDark 
                      ? 'bg-gray-900/80 backdrop-blur-sm group-hover:bg-gray-900/70' 
                      : 'bg-white/95 backdrop-blur-sm group-hover:bg-white group-hover:shadow-lg'
                  }`}>
                    <div className="flex items-start space-x-6">
                      <div className={`p-3 rounded-xl transition-all duration-300 ${
                        isDark 
                          ? 'bg-linear-to-br from-blue-500/10 to-cyan-500/10 group-hover:from-blue-500/20 group-hover:to-cyan-500/20'
                          : 'bg-linear-to-br from-blue-50 to-cyan-50 group-hover:from-blue-100 group-hover:to-cyan-100 group-hover:shadow-md'
                      }`}>
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          isDark 
                            ? 'bg-linear-to-br from-blue-500/20 to-cyan-500/20 text-blue-400 group-hover:text-blue-300' 
                            : 'bg-white text-blue-600 shadow-md group-hover:bg-linear-to-br group-hover:from-blue-50 group-hover:to-cyan-50 group-hover:shadow-lg group-hover:scale-105'
                        }`}>
                          <Icon className="w-6 h-6" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                          isDark 
                            ? 'text-white group-hover:text-blue-400' 
                            : 'text-gray-800 group-hover:text-blue-700 group-hover:drop-shadow-sm'
                        }`}>
                          {benefit.title}
                        </h3>
                        <p className={`text-base leading-relaxed transition-colors duration-300 ${
                          isDark 
                            ? 'text-gray-400 group-hover:text-gray-300' 
                            : 'text-gray-600 group-hover:text-gray-700'
                        }`}>
                          {benefit.description}
                        </p>
                        <div className={`mt-4 inline-flex items-center text-sm font-medium ${
                          isDark 
                            ? 'text-blue-400 group-hover:text-blue-300' 
                            : 'text-blue-600 group-hover:text-blue-700 group-hover:font-semibold'
                        } transition-all duration-300 group-hover:translate-x-1`}>
                          <span>Más información</span>
                          <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated border effect */}
                  <div className={`absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    isDark ? '' : 'mix-blend-multiply'
                  }`}>
                    <div className="animated-border" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits List */}
      <section className={`relative py-20 px-6 overflow-hidden ${isDark ? "bg-gray-950" : "bg-linear-to-br from-gray-50 to-white"}`}>
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl bg-[#5B6FFF0D] dark:bg-[#5B6FFF0D]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl bg-[#7A8FFF0D] dark:bg-[#7A8FFF0D]" />
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Beneficios Incluidos
            </h2>
            <div className={`w-20 h-1 mx-auto rounded-full ${isDark ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
            <p className={`text-lg max-w-2xl mx-auto mt-4 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Todo lo que necesitas para mantener tu negocio conectado y protegido
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {ADDITIONAL_BENEFITS.map((benefit, index) => (
              <div
                key={index}
                className={`group relative p-6 rounded-2xl transition-all duration-300 overflow-hidden ${
                  isDark ? 'bg-gray-900/50 service-feature-card-dark' : 'bg-white/80 backdrop-blur-sm service-feature-card-light'
                }`}
              >
                {/* Hover effect */}
                <div className="absolute inset-0 bg-linear-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex items-center gap-4 relative z-10">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:-translate-y-1 ${
                      isDark ? 'bg-gray-800 service-icon-shadow-dark' : 'bg-blue-50 service-icon-shadow-light'
                    }`}
                  >
                    <Check
                      className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                      style={{ color: DESIGN_SYSTEM.colors.primary }}
                    />
                  </div>
                  <span className={`text-base font-medium transition-colors duration-300 ${
                    isDark ? 'text-gray-300 group-hover:text-white' : 'text-gray-700 group-hover:text-gray-900'
                  }`}>
                    {benefit}
                  </span>
                </div>

                {/* Animated border effect */}
                <div className="animated-border" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="¿Listo para llevar tu negocio al siguiente nivel?"
        description="Contáctanos para una asesoría personalizada y encuentra la solución perfecta para tu empresa."
        buttonText="Solicitar Cotización"
        buttonLink={ROUTES.CONTACT}
      />
    </PageLayout>
  );
}
