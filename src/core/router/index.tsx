import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import type { ComponentType } from "react";
import { ROUTES } from "./routes.config";
import { LoadingFallback } from "@/shared/components";
import App from "@/App";

// Portal Institucional Grupo VERLA
const Home = lazy(() => import("@/features/home/Home"));

// Legal Pages (cumplimiento regulatorio Colombia, accesibles desde footer)
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

// Error Pages
const NotFoundPage = lazy(() => import("@/features/not-found"));
const NoConnectionPage = lazy(() => import("@/features/no-connection"));
const ServiceUnavailablePage = lazy(
  () => import("@/features/service-unavailable")
);

const withSuspense = (Component: ComponentType) => (
  <Suspense fallback={<LoadingFallback />}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: ROUTES.HOME,
        element: withSuspense(Home),
      },
      {
        path: ROUTES.NOTFOUND,
        element: withSuspense(NotFoundPage),
      },
      {
        path: ROUTES.NO_CONNECTION,
        element: withSuspense(NoConnectionPage),
      },
      {
        path: ROUTES.SERVICE_UNAVAILABLE,
        element: withSuspense(ServiceUnavailablePage),
      },
      // Redirecciones de rutas anteriores hacia secciones del portal institucional
      {
        path: ROUTES.ABOUT,
        element: <Navigate to="/#grupo-empresarial" replace />,
      },
      {
        path: ROUTES.CONTACT,
        element: <Navigate to="/#contacto" replace />,
      },
      // Rutas comerciales retiradas -> redirigen al portal institucional
      {
        path: ROUTES.PRICING,
        element: <Navigate to={ROUTES.HOME} replace />,
      },
      {
        path: ROUTES.SERVICES.FIBRA_RESIDENCIAL,
        element: <Navigate to={ROUTES.HOME} replace />,
      },
      {
        path: ROUTES.SERVICES.PLANES_EMPRESARIALES,
        element: <Navigate to={ROUTES.HOME} replace />,
      },
      {
        path: ROUTES.SERVICES.TV_DIGITAL,
        element: <Navigate to={ROUTES.HOME} replace />,
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
      // Wildcard al final
      {
        path: "*",
        element: <Navigate to={ROUTES.NOTFOUND} replace />,
      },
    ],
  },
]);
