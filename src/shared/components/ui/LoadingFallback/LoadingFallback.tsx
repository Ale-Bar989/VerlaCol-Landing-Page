// Componente LoadingFallback para mostrar mientras cargan las páginas
// Ubicación: src/ui/components/common/LoadingFallback/LoadingFallback.tsx
export default function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        <p className="mt-4 text-gray-600">Cargando...</p>
      </div>
    </div>
  );
}
