import { memo, useMemo } from 'react';
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTheme } from '@/core/contexts';
import { ROUTES } from '@/core/router/routes.config';

// Datos de productos fuera del componente para evitar recreación
const PRODUCTS_DATA = [
  {
    id: 1,
    title: "Internet por Fibra Óptica",
    description:
      "Velocidades ultrarrápidas y conexión estable con nuestra red de fibra óptica de última generación. Ideal para streaming, juegos en línea y teletrabajo.",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: ROUTES.SERVICES.FIBRA_RESIDENCIAL,
    glowColor: {
      start: "rgba(91, 111, 255, 0.9)",
      mid: "rgba(122, 143, 255, 0.7)",
      end: "rgba(91, 111, 255, 0.4)",
    },
  },
  {
    id: 2,
    title: "Televisión IP",
    description:
      "Más de 200 canales en alta definición, contenido bajo demanda y funciones avanzadas como pausar y retroceder en vivo. Disfruta del mejor entretenimiento en un solo lugar.",
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: ROUTES.SERVICES.TV_DIGITAL,
    glowColor: {
      start: "rgba(236, 72, 153, 0.9)",
      mid: "rgba(219, 39, 119, 0.7)",
      end: "rgba(236, 72, 153, 0.4)",
    },
  },
  {
    id: 3,
    title: "Planes Empresariales",
    description:
      "Soluciones de conectividad empresarial con ancho de banda dedicado, IP fija y soporte prioritario. Garantizamos la estabilidad que tu negocio necesita para operar sin interrupciones.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: ROUTES.SERVICES.PLANES_EMPRESARIALES,
    glowColor: {
      start: "rgba(168, 85, 247, 0.9)",
      mid: "rgba(147, 51, 234, 0.7)",
      end: "rgba(168, 85, 247, 0.4)",
    },
  },
  {
    id: 4,
    title: "Soporte Técnico 24/7",
    description:
      "Asistencia técnica especializada disponible las 24 horas del día, los 7 días de la semana. Tu conexión siempre activa con nuestro soporte dedicado.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    link: ROUTES.CONTACT,
    glowColor: {
      start: "rgba(34, 197, 94, 0.9)",
      mid: "rgba(22, 163, 74, 0.7)",
      end: "rgba(34, 197, 94, 0.4)",
    },
  },
];

function ProductsSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Memoizar productos para evitar recreación en cada render
  const products = useMemo(() => PRODUCTS_DATA, []);

  return (
    <>
      <style>{`
        @keyframes shineUp {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(0%);
            opacity: 1;
          }
        }
        @keyframes shineDown {
          0% {
            transform: translateY(0%);
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }
        .shine-border {
          transform: translateY(100%);
          opacity: 0;
        }
        .group:hover .shine-border {
          animation: shineUp 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .group:not(:hover) .shine-border {
          animation: shineDown 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>

      <section
        className={`relative py-20 overflow-hidden ${
          isDark ? "bg-gray-950" : "bg-linear-to-b from-white to-gray-50"
        }`}
      >
        {/* Efectos de fondo */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
            style={{ backgroundColor: isDark ? "#5B6FFF0D" : "#5B6FFF05" }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
            style={{ backgroundColor: isDark ? "#7A8FFF0D" : "#7A8FFF05" }}
          ></div>
        </div>
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
            {/* Badge moderno */}
            <motion.div
              className="inline-flex items-center gap-2 mb-6 px-6 py-3 rounded-full backdrop-blur-md"
              style={{
                background:
                  "linear-gradient(135deg, rgba(91, 111, 255, 0.15), rgba(122, 143, 255, 0.1))",
                border: "1px solid rgba(91, 111, 255, 0.2)",
                boxShadow: "0 0 30px rgba(91, 111, 255, 0.1)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "#5B6FFF" }}
              ></div>
              <span
                className="text-sm font-black uppercase tracking-widest"
                style={{
                  color: "#5B6FFF",
                  fontFamily:
                    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                }}
              >
                Nuestros Productos
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-6xl font-black mb-6 leading-tight"
              style={{
                fontFamily:
                  "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className={isDark ? "text-white" : "text-gray-900"}>
                Descubre{" "}
              </span>
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #5B6FFF, #7A8FFF, #FFFFFF)",
                  backgroundSize: "200% 100%",
                }}
              >
                nuestra gama
              </span>
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl"
              style={{
                color: isDark ? "#B0B0B0" : "#666666",
                fontFamily:
                  "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontWeight: 300,
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Soluciones de alta calidad diseñadas para satisfacer tus
              necesidades
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-3xl overflow-hidden transition-all duration-500"
              >
                {/* Glow effect */}
                <div
                  className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(135deg, #5B6FFF, #7A8FFF)",
                    filter: "blur(20px)",
                    zIndex: -1,
                  }}
                ></div>

                {/* Border shine effect - animación desde abajo hasta la mitad */}
                <div
                  className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none"
                  style={{
                    zIndex: 10,
                    borderRadius: "1.5rem",
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                      padding: "2px",
                      borderRadius: "1.5rem",
                    }}
                  >
                    <div
                      className="shine-border absolute inset-x-0 h-full rounded-3xl"
                      style={{
                        background: `linear-gradient(to top, ${product.glowColor.start} 0%, ${product.glowColor.mid} 25%, ${product.glowColor.end} 50%, transparent 50%)`,
                        borderRadius: "1.5rem",
                      }}
                    ></div>
                  </div>
                </div>

                <div
                  className={`relative rounded-3xl p-6 h-full transition-all duration-500 backdrop-blur-sm ${
                    isDark
                      ? "bg-gray-900/60 border border-gray-800/50 group-hover:border-gray-700"
                      : "bg-white/80 border border-gray-200/50 group-hover:border-blue-200 shadow-lg group-hover:shadow-2xl"
                  }`}
                >
                  {/* Image - con lazy loading nativo */}
                  <div className="relative h-52 mb-5 rounded-2xl overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      style={{ willChange: 'transform' }}
                    />
                    <div
                      className="absolute inset-0 bg-linear-to-t transition-opacity duration-300"
                      style={{
                        backgroundImage: isDark
                          ? "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.3), transparent)"
                          : "linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.2), transparent)",
                      }}
                    ></div>
                  </div>

                  {/* Content */}
                  <h3
                    className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors"
                    style={{
                      color: isDark ? "#FFFFFF" : "#1F1F1F",
                      fontFamily:
                        "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    }}
                  >
                    {product.title}
                  </h3>

                  <p
                    className="mb-5 text-sm leading-relaxed"
                    style={{
                      color: isDark ? "#B0B0B0" : "#666666",
                      fontFamily:
                        "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    }}
                  >
                    {product.description}
                  </p>

                  {/* Link */}
                  <a
                    href={product.link}
                    className="inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 group/link"
                    style={{
                      color: "#5B6FFF",
                      fontFamily:
                        "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    }}
                  >
                    <span className="group-hover/link:translate-x-[-4px] transition-transform duration-300">
                      Ver producto
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-20 text-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="group relative inline-block">
              {/* Glow effect */}
              <div
                className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(135deg, #5B6FFF, #7A8FFF)",
                  filter: "blur(20px)",
                }}
              ></div>

              <a
                // href="#contacto"
                href={ROUTES.CONTACT}
                className="relative inline-flex items-center justify-center gap-3 px-12 py-4 text-base font-bold rounded-full transition-all duration-500 group-hover:scale-[1.03] transform"
                style={{
                  background: "linear-gradient(135deg, #5B6FFF, #7A8FFF)",
                  color: "#FFFFFF",
                  fontFamily:
                    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  boxShadow: "0 10px 40px rgba(91, 111, 255, 0.3)",
                }}
              >
                <span className="group-hover:translate-x-[-4px] transition-transform duration-300">
                  Contáctanos para más información
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

// Memoizar para evitar re-renders innecesarios
export default memo(ProductsSection);
