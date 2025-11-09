# Sistema de Manejo de Errores de API

## 📋 Descripción

Sistema automático de detección y manejo de errores HTTP que redirige a páginas de error apropiadas según el código de estado.

---

## 🎯 Características

✅ **Detección automática** - Intercepta todas las llamadas `fetch()`
✅ **Funciona con CUALQUIER API** - Propias, externas, terceros
✅ **Redirección inteligente** - Redirige según el código de error
✅ **Sin configuración** - Funciona automáticamente en toda la app
✅ **Personalizable** - Puedes agregar callbacks personalizados
✅ **TypeScript** - Totalmente tipado

---

## 🔧 Cómo Funciona

### **1. Interceptor Global**

El interceptor se configura automáticamente en `main.tsx`:

```typescript
import { setupApiInterceptor } from '@/core/utils/apiInterceptor';

// Se ejecuta al inicio de la app
setupApiInterceptor();
```

### **2. Detección Automática**

Cada vez que haces `fetch()`, el interceptor:

1. Ejecuta la petición
2. Verifica el código de estado
3. Si hay error (4xx, 5xx), lo detecta
4. Redirige a la página de error correspondiente

---

## 📊 Códigos de Error Manejados

| Código | Tipo | Ruta | Descripción |
|--------|------|------|-------------|
| **400** | Sin Internet | `/no-connection` | Usuario sin conexión |
| **404** | No Encontrado | `/not-found` | Recurso no existe |
| **500** | Error Servidor | `/not-found` | Error interno |
| **502** | Bad Gateway | `/not-found` | Gateway inválido |
| **503** | No Disponible | `/service-unavailable` | Servicio caído |
| **504** | Timeout | `/not-found` | Timeout de gateway |

---

## 💻 Uso Básico

### **Opción 1: Automático (Recomendado)**

No necesitas hacer nada. El sistema detecta errores automáticamente en **CUALQUIER API**:

#### **Ejemplo 1: API Propia**
```typescript
const MyComponent = () => {
  const fetchData = async () => {
    try {
      const response = await fetch('/api/data');
      
      // Si response.status === 503
      // → Redirige automáticamente a /service-unavailable ✅
      
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return <button onClick={fetchData}>Cargar Datos</button>;
};
```

#### **Ejemplo 2: API Externa (Stripe)**
```typescript
const PaymentComponent = () => {
  const createPayment = async () => {
    try {
      const response = await fetch('https://api.stripe.com/v1/payment_intents', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${STRIPE_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ amount: 1000, currency: 'usd' })
      });
      
      // Si Stripe responde con 503
      // → Redirige automáticamente a /service-unavailable ✅
      
      const payment = await response.json();
      setPayment(payment);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return <button onClick={createPayment}>Pagar</button>;
};
```

#### **Ejemplo 3: API Externa (SendGrid)**
```typescript
const EmailComponent = () => {
  const sendEmail = async () => {
    try {
      const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${SENDGRID_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailData)
      });
      
      // Si SendGrid responde con 503
      // → Redirige automáticamente a /service-unavailable ✅
      
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return <button onClick={sendEmail}>Enviar Email</button>;
};
```

### **Opción 2: Con Callback Personalizado**

Si quieres ejecutar lógica adicional cuando ocurre un error:

```typescript
import { useApiErrorHandler } from '@/shared/hooks';

const MyComponent = () => {
  // Agregar callback personalizado
  useApiErrorHandler({
    autoRedirect: true,
    onError: (error) => {
      // Tu lógica personalizada
      console.log('Error detectado:', error.status);
      
      // Mostrar toast
      toast.error(`Error ${error.status}: ${error.message}`);
      
      // Enviar a analytics
      analytics.track('api_error', {
        status: error.status,
        url: error.url,
      });
    }
  });

  // Tu componente...
};
```

### **Opción 3: Sin Redirección Automática**

Si quieres manejar el error manualmente:

```typescript
useApiErrorHandler({
  autoRedirect: false, // Deshabilitar redirección
  onError: (error) => {
    // Manejar error manualmente
    if (error.status === 503) {
      setShowMaintenanceModal(true);
    }
  }
});
```

---

## 🎨 Personalización

### **Agregar Nuevos Códigos de Error**

1. **Crear página de error:**

```typescript
// src/features/error-401/index.tsx
export const UnauthorizedPage = () => {
  return (
    <NotFound 
      errorCode={401}
      title="No autorizado"
      description="No tienes permisos para acceder"
    />
  );
};
```

2. **Agregar a errorConfig.ts:**

```typescript
export type ErrorCode = 400 | 401 | 404 | 500 | 503;

export const ERROR_CONFIGS: Record<ErrorCode, ErrorConfig> = {
  // ... otros errores
  401: {
    icon: Lock,
    defaultTitle: "No autorizado",
    defaultDescription: "No tienes permisos...",
    iconColor: "text-purple-500",
    gradientFrom: "from-purple-500",
    gradientTo: "to-pink-500",
  },
};
```

3. **Agregar ruta:**

```typescript
// routes.config.ts
export const ROUTES = {
  // ... otras rutas
  UNAUTHORIZED: '/unauthorized',
};

// router/index.tsx
const UnauthorizedPage = lazy(() => import("@/features/error-401"));

{
  path: ROUTES.UNAUTHORIZED,
  element: withSuspense(UnauthorizedPage),
}
```

4. **Actualizar interceptor:**

```typescript
// apiInterceptor.ts
switch (response.status) {
  case 401:
    errorRoute = ROUTES.UNAUTHORIZED;
    break;
  // ... otros casos
}
```

---

## 🔍 APIs Críticas

Puedes definir qué APIs son "críticas" y causan redirección automática:

```typescript
// apiInterceptor.ts
const isCriticalApi = (url: string): boolean => {
  const criticalPatterns = [
    '/api/auth',      // Autenticación
    '/api/user',      // Usuario
    '/api/config',    // Configuración
    '/api/payments',  // Pagos
  ];
  
  return criticalPatterns.some(pattern => url.includes(pattern));
};
```

---

## 🧪 Testing

### **Simular Error 503**

```typescript
// En tu componente de prueba
const testError503 = async () => {
  try {
    // Esta URL devolverá 503
    await fetch('https://httpstat.us/503');
    
    // Debería redirigir a /service-unavailable
  } catch (error) {
    console.error(error);
  }
};
```

### **Simular Error 500**

```typescript
const testError500 = async () => {
  await fetch('https://httpstat.us/500');
  // Debería redirigir a /not-found (temporalmente)
};
```

---

## 📈 Mejores Prácticas

### ✅ **DO (Hacer)**

```typescript
// ✅ Usar try/catch para manejar errores de red
try {
  const response = await fetch('/api/data');
  const data = await response.json();
} catch (error) {
  console.error('Network error:', error);
}

// ✅ Verificar response.ok antes de parsear
if (response.ok) {
  const data = await response.json();
}

// ✅ Usar el hook en componentes que hacen fetch
useApiErrorHandler({ autoRedirect: true });
```

### ❌ **DON'T (No hacer)**

```typescript
// ❌ No ignorar errores
fetch('/api/data'); // Sin try/catch ni .catch()

// ❌ No asumir que response.ok es true
const data = await response.json(); // Sin verificar

// ❌ No deshabilitar el interceptor globalmente
restoreOriginalFetch(); // Solo para tests
```

---

## 🐛 Debugging

### **Ver errores en consola (desarrollo)**

Los errores se loguean automáticamente en desarrollo:

```
🚨 API Error: {
  status: 503,
  url: '/api/data',
  message: 'Service Unavailable',
  timestamp: 2024-01-15T10:30:00.000Z
}
```

### **Deshabilitar redirección temporalmente**

```typescript
// En un componente específico
useApiErrorHandler({ autoRedirect: false });
```

---

## 🎯 Roadmap

- [ ] Agregar retry automático para errores 503
- [ ] Implementar exponential backoff
- [ ] Agregar queue de peticiones fallidas
- [ ] Implementar offline queue
- [ ] Agregar métricas de errores
- [ ] Integrar con sistema de logging

---

## 📚 Referencias

- **Interceptor:** `/src/core/utils/apiInterceptor.ts`
- **Hook:** `/src/shared/hooks/useApiErrorHandler.ts`
- **Configuración:** `/src/shared/components/NotFound/errorConfig.ts`
- **Integración:** `/src/App.tsx`
