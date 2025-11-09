import { Link } from 'react-router-dom';
import { Button } from '../Button';

export type NotFoundProps = {
  title?: string;
  description?: string;
  showBackButton?: boolean;
  className?: string;
};

export const NotFound = ({
  title = 'Página no encontrada',
  description = 'Lo sentimos, no pudimos encontrar la página que estás buscando.',
  showBackButton = true,
  className = '',
}: NotFoundProps) => {
  return (
    <div className={`flex flex-col items-center justify-center min-h-[60vh] py-12 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary-500 dark:text-primary-400">404</h1>
        <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">{title}</h2>
        <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
          {description}
        </p>
        {showBackButton && (
          <div className="mt-8">
            <Link to="/">
              <Button variant="primary" size="lg">
                Volver al inicio
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};