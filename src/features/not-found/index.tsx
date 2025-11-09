import { NotFound } from '@/shared/components';

export const NotFoundPage = () => {
  return (
    <NotFound 
      title="¡Ups! Página no encontrada"
      description="La página que estás buscando no existe o ha sido movida."
      showBackButton={true}
    />
  );
};

export default NotFoundPage;
