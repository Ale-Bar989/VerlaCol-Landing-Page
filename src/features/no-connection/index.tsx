// Página de error 400 - Sin conexión a internet
// Ubicación: src/features/no-connection/index.tsx

import { NotFound } from '@/shared/components';
import { useCallback } from 'react';

export const NoConnectionPage = () => {
  // Handler para reintentar conexión
  const handleRetry = useCallback(() => {
    // Recargar la página para verificar conexión
    window.location.reload();
  }, []);

  return (
    <NotFound 
      errorCode={400}
      title="Sin conexión a internet"
      description="Parece que no tienes conexión a internet. Por favor, verifica tu conexión y vuelve a intentarlo."
      showBackButton={true}
      showRetryButton={true}
      onRetry={handleRetry}
    />
  );
};

export default NoConnectionPage;
