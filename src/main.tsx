import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "@/shared/styles/index.css";
import { router } from "@/core/router";
import { ThemeProvider } from "@/core/contexts";
import { setupApiInterceptor } from "@/core/utils/apiInterceptor";

// Configurar interceptor de API para detectar errores automáticamente
setupApiInterceptor();

// Registrar Service Worker para PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      // Silenciar error si no hay SW en desarrollo
    });
  });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
