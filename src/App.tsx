// Componente principal de la aplicación
// Ubicación: src/App.tsx

import { Outlet } from 'react-router-dom';
import { OfflineDetector } from '@/core/components/OfflineDetector';

export default function App() {
  return (
    <>
      <OfflineDetector />
      <Outlet />
    </>
  );
}
