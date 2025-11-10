import { Globe, Shield, AlertTriangle, FileText, Phone, ExternalLink, CheckCircle, BookCheck } from "lucide-react";
import { PageLayout } from '@/shared//components';

// Página de Internet Sano
// Ubicación: src/ui/pages/legal/internet-sano/index.tsx

export default function InternetSanoPage() {
  return (
    <PageLayout>
        <div className="container mx-auto mt-16 mb-16 px-6 max-w-5xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/10 rounded-2xl mb-6">
              <Globe className="w-8 h-8 text-cyan-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Internet{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-400">
                Sano
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Cumplimiento de la Ley 679 de 2001 - Protección contra la explotación, pornografía y turismo sexual con menores
            </p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Marco Legal */}
            <section className="bg-linear-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-red-400" />
                Marco Legal - Ley 679 de 2001
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-white">HV Televisión S.A.S</strong> en virtud de la legislación vigente da cumplimiento 
                  con la <strong className="text-cyan-400">Ley 679 del 3 de agosto de 2001</strong>, expedida por el Congreso de la República, 
                  para prevenir y contrarrestar la explotación, la pornografía y el turismo sexual con menores de edad.
                </p>
                <p>
                  Esta ley, expedida en desarrollo del <strong className="text-white">Artículo 44 de la Constitución</strong>, pretende 
                  dictar medidas preventivas y sanciones para quienes exploten y/o abusen sexualmente de los menores de edad, 
                  para así ayudar que tengan un desarrollo integral y sano.
                </p>
              </div>
            </section>

            {/* Cómo Denunciar */}
            <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-orange-400">
                <AlertTriangle className="w-6 h-6" />
                ¿Cómo denunciar la pornografía infantil?
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Para formular denuncias contra contenidos de pornografía infantil o páginas electrónicas en las que 
                  se ofrezcan servicios sexuales con menores de edad, existe una <strong className="text-white">iniciativa TIC</strong> dedicada 
                  al <strong className="text-cyan-400">Control de la Campaña del Ministerio de Comunicaciones</strong> para que todos los 
                  colombianos comprendamos el significado de la prevención de la pornografía infantil y juvenil en Internet.
                </p>
              </div>
              
              {/* Canal de Denuncias */}
              <div className="mt-6 bg-linear-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-orange-400 mb-4 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Canal de Denuncias Te Protejo
                </h3>
                <p className="text-gray-300 mb-4">
                  Denuncia de forma anónima y segura contenidos ilegales en internet que afecten a niños, niñas y adolescentes.
                </p>
                <a 
                  href="https://www.teprotejo.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-orange-500 dark:text-white hover:bg-orange-600 hover:scale-105 px-6 py-3 rounded-xl font-semibold transition-all duration-700 ease-in-out"
                >
                  Ir a Te Protejo
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </section>

            {/* Proceso del Ministerio */}
            <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6 text-blue-400" />
                ¿Qué hace el Ministerio de Comunicaciones con estas denuncias?
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Las denuncias recibidas por el <strong className="text-white">Ministerio de Comunicaciones</strong> sobre páginas de 
                  pornografía con menores de edad en Internet, son enviadas a la <strong className="text-cyan-400">Policía Nacional</strong>.
                </p>
                <p>
                  Esta entidad adelanta el proceso de:
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                    <span><strong className="text-white">Verificación:</strong> Análisis de las URL reportadas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                    <span><strong className="text-white">Investigación:</strong> Rastreo y seguimiento de contenidos ilegales</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                    <span><strong className="text-white">Clasificación:</strong> Listado de URLs con pornografía infantil</span>
                  </li>
                </ul>
                <p className="pt-4">
                  El Ministerio, con este listado, expide un <strong className="text-cyan-400">acto administrativo</strong> exigiendo 
                  a los <strong className="text-white">ISP (Proveedores de acceso a Internet)</strong> el bloqueo de estas páginas en Colombia.
                </p>
              </div>
            </section>

            {/* Marco Legal y Referencias */}
            <section className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <BookCheck className="w-6 h-6 text-purple-400" />
                Marco Legal y Referencias
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-purple-500/5 border border-purple-500/20 rounded-xl p-5">
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Ley 1336 de 2009</h3>
                  <p className="text-sm text-gray-400">
                    Adiciona y robustece la Ley 679 de 2001, de lucha contra la explotación, la pornografía y el turismo sexual con niños, niñas y adolescentes.
                  </p>
                </div>
                
                <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-xl p-5">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">Ley 679 de 2001</h3>
                  <p className="text-sm text-gray-400">
                    Estatuto para prevenir y contrarrestar la explotación, la pornografía y el turismo sexual con menores.
                  </p>
                </div>
                
                <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-5">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Decreto 1524 de 2002</h3>
                  <p className="text-sm text-gray-400">
                    Reglamenta el artículo 5° de la Ley 679 de 2001 sobre prevención de pornografía infantil en internet.
                  </p>
                </div>
                
                <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-5">
                  <h3 className="text-lg font-semibold text-green-400 mb-2 flex items-center gap-2">
                    www.weprotect.org
                    <ExternalLink className="w-4 h-4" />
                  </h3>
                  <p className="text-sm text-gray-400">
                    Alianza global para acabar con la explotación sexual infantil en línea.
                  </p>
                  <a 
                    href="https://www.weprotect.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-green-400 hover:text-green-300 text-sm mt-2 transition-colors"
                  >
                    Visitar sitio web
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-linear-to-br from-red-600/10 to-orange-600/10 border border-red-500/20 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Comprometidos con la Protección Infantil</h2>
              <p className="text-gray-300 mb-6">
                HV Televisión S.A.S cumple estrictamente con la legislación colombiana para prevenir y combatir 
                la explotación sexual de menores en internet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://www.teprotejo.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-orange-600 to-red-600 px-8 py-3 rounded-xl font-semibold dark:text-white hover:from-orange-500 hover:to-red-500 hover:scale-105 transition-all duration-700 ease-in-out"
                >
                  Reportar Contenido Ilegal
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.weprotect.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 px-8 py-3 rounded-xl font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-700 ease-in-out"
                >
                  Más Información
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </section>
          </div>
        </div>
    </PageLayout>
  );
}
