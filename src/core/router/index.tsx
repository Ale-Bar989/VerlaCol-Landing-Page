import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import type { ComponentType } from "react";
import { ROUTES } from "./routes.config";
import { LoadingFallback } from "@/shared/components";

// Lazy loading de páginas para optimizar tiempos de carga - Screaming Architecture
// Ubicación: src/core/router/index.tsx
const Home = lazy(() => import("@/features/home/Home"));
const About = lazy(() => import("@/features/about/About"));
const Contact = lazy(() => import("@/features/contact/Contact"));
const Pricing = lazy(() => import("@/features/pricing"));

// Legal Pages
const ProteccionUsuarios = lazy(
  () => import("@/features/legal/proteccion-usuarios")
);
const ProteccionInfantil = lazy(
  () => import("@/features/legal/proteccion-infantil")
);
const Normatividad = lazy(() => import("@/features/legal/normatividad"));
const ProteccionDatos = lazy(() => import("@/features/legal/proteccion-datos"));
const InternetSano = lazy(() => import("@/features/legal/internet-sano"));
const Filtrado = lazy(() => import("@/features/legal/filtrado"));
const Seguridad = lazy(() => import("@/features/legal/seguridad"));
const ComparadorTarifas = lazy(
  () => import("@/features/legal/comparador-tarifas")
);

// 404 Page
const NotFoundPage = lazy(() => import("@/features/not-found"));

// Services Pages
const FibraResidencial = lazy(
  () => import("@/features/services/fibra-residencial")
);
const PlanesEmpresariales = lazy(
  () => import("@/features/services/planes-empresariales")
);
const TVDigital = lazy(() => import("@/features/services/tv-digital"));

// Wrapper para aplicar Suspense a las rutas lazy
const withSuspense = (Component: ComponentType) => (
  <Suspense fallback={<LoadingFallback />}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: withSuspense(Home),
  },
  {
    path: ROUTES.NOTFOUND,
    element: withSuspense(NotFoundPage),
  },
  {
    path: "*",
    element: <Navigate to={ROUTES.NOTFOUND} replace />,
  },
  {
    path: ROUTES.ABOUT,
    element: withSuspense(About),
  },
  {
    path: ROUTES.CONTACT,
    element: withSuspense(Contact),
  },
  {
    path: ROUTES.PRICING,
    element: withSuspense(Pricing),
  },
  // Legal Routes
  {
    path: ROUTES.LEGAL.PROTECCION_USUARIOS,
    element: withSuspense(ProteccionUsuarios),
  },
  {
    path: ROUTES.LEGAL.PROTECCION_INFANTIL,
    element: withSuspense(ProteccionInfantil),
  },
  {
    path: ROUTES.LEGAL.NORMATIVIDAD,
    element: withSuspense(Normatividad),
  },
  {
    path: ROUTES.LEGAL.PROTECCION_DATOS,
    element: withSuspense(ProteccionDatos),
  },
  {
    path: ROUTES.LEGAL.INTERNET_SANO,
    element: withSuspense(InternetSano),
  },
  {
    path: ROUTES.LEGAL.FILTRADO,
    element: withSuspense(Filtrado),
  },
  {
    path: ROUTES.LEGAL.SEGURIDAD,
    element: withSuspense(Seguridad),
  },
  {
    path: ROUTES.LEGAL.COMPARADOR_TARIFAS,
    element: withSuspense(ComparadorTarifas),
  },
  // Services Routes
  {
    path: ROUTES.SERVICES.FIBRA_RESIDENCIAL,
    element: withSuspense(FibraResidencial),
  },
  {
    path: ROUTES.SERVICES.PLANES_EMPRESARIALES,
    element: withSuspense(PlanesEmpresariales),
  },
  {
    path: ROUTES.SERVICES.TV_DIGITAL,
    element: withSuspense(TVDigital),
  },
]);
