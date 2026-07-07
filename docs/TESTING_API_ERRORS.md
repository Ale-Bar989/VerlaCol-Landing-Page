# 🧪 Guía para Probar Errores de API

## 📋 Métodos de Testing

Hay **3 formas** de probar el sistema de detección de errores de API:

---

## ✅ **Método 1: Página de Pruebas (Más Fácil)**

### **Acceder a la página:**
```
http://localhost:5173/test-api-errors
```

### **Qué hace:**
- Botones para simular cada código de error
- Usa `httpstat.us` para generar errores reales
- Logs en consola para debugging
- Instrucciones claras de qué esperar

### **Códigos disponibles:**
- **400** - Bad Request
- **404** - Not Found
- **500** - Internal Server Error
- **502** - Bad Gateway
- **503** - Service Unavailable
- **504** - Gateway Timeout

### **Qué esperar:**
| Código | Redirección | Página |
|--------|-------------|--------|
| 500, 502, 504 | ✅ Sí | `/not-found` |
| 503 | ✅ Sí | `/service-unavailable` |
| 400, 404 | ❌ No | (no son errores de servidor) |

---

## 🔧 **Método 2: Consola del Navegador**

### **Paso 1: Abrir DevTools**
- Chrome/Edge: `F12` o `Cmd+Option+I` (Mac)
- Firefox: `F12` o `Cmd+Option+K` (Mac)

### **Paso 2: Ir a la pestaña Console**

### **Paso 3: Ejecutar comandos**

#### **Probar Error 503:**
```javascript
fetch('https://httpstat.us/503')
  .then(res => console.log('Respuesta:', res.status))
  .catch(err => console.error('Error:', err));

// Debería redirigir a /service-unavailable en ~100ms
```

#### **Probar Error 500:**
```javascript
fetch('https://httpstat.us/500')
  .then(res => console.log('Respuesta:', res.status))
  .catch(err => console.error('Error:', err));

// Debería redirigir a /not-found en ~100ms
```

#### **Probar Error 502:**
```javascript
fetch('https://httpstat.us/502')
  .then(res => console.log('Respuesta:', res.status))
  .catch(err => console.error('Error:', err));

// Debería redirigir a /not-found en ~100ms
```

#### **Probar Error 404:**
```javascript
fetch('https://httpstat.us/404')
  .then(res => console.log('Respuesta:', res.status))
  .catch(err => console.error('Error:', err));

// NO redirige (404 no es error de servidor)
```

---

## 🎯 **Método 3: Crear Componente de Prueba**

### **Crear archivo temporal:**
```typescript
// src/features/home/TestButton.tsx
import { useState } from 'react';

export const TestButton = () => {
  const [loading, setLoading] = useState(false);

  const testError503 = async () => {
    setLoading(true);
    try {
      await fetch('https://httpstat.us/503');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button 
      onClick={testError503}
      disabled={loading}
      className="fixed bottom-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg z-50"
    >
      {loading ? 'Probando...' : 'Test Error 503'}
    </button>
  );
};
```

### **Agregar al Home:**
```typescript
// src/features/home/Home.tsx
import { TestButton } from './TestButton';

export default function Home() {
  return (
    <>
      {/* Tu contenido existente */}
      
      {/* Solo en desarrollo */}
      {import.meta.env.DEV && <TestButton />}
    </>
  );
}
```

---

## 🌐 **Método 4: APIs Externas Reales**

### **Probar con APIs que pueden fallar:**

#### **Ejemplo 1: API inexistente**
```javascript
fetch('https://api.ejemplo-que-no-existe.com/data')
  .catch(err => console.error('Error de red:', err));

// Debería redirigir a /no-connection si no hay internet
```

#### **Ejemplo 2: Endpoint que devuelve 503**
```javascript
// Algunas APIs públicas para testing:
fetch('https://httpbin.org/status/503')
  .then(res => console.log(res.status));

// Debería redirigir a /service-unavailable
```

#### **Ejemplo 3: Timeout simulado**
```javascript
const controller = new AbortController();
setTimeout(() => controller.abort(), 100); // Timeout de 100ms

fetch('https://httpstat.us/200?sleep=5000', {
  signal: controller.signal
})
  .catch(err => console.error('Timeout:', err));
```

---

## 📊 **Ver Logs en Desarrollo**

El sistema loguea automáticamente en desarrollo:

```javascript
// En consola verás:
🚨 API Error: {
  status: 503,
  url: 'https://httpstat.us/503',
  message: 'Service Unavailable',
  timestamp: 2024-01-15T10:30:00.000Z
}
```

---

## 🔍 **Debugging**

### **Ver si el interceptor está activo:**
```javascript
// En consola
console.log('Fetch original:', window.fetch.toString());

// Si está activo, verás código del interceptor
// Si NO está activo, verás [native code]
```

### **Deshabilitar temporalmente:**
```javascript
// En App.tsx
useApiErrorHandler({ 
  autoRedirect: false // Deshabilitar redirección
});
```

### **Ver todas las peticiones:**
```javascript
// En DevTools → Network
// Filtra por "Fetch/XHR"
// Verás todas las llamadas fetch()
```

---

## ✅ **Checklist de Testing**

Antes de dar por probado el sistema, verifica:

- [ ] Error 500 redirige a `/not-found`
- [ ] Error 502 redirige a `/not-found`
- [ ] Error 503 redirige a `/service-unavailable`
- [ ] Error 504 redirige a `/not-found`
- [ ] Error 400 NO redirige
- [ ] Error 404 NO redirige
- [ ] Logs aparecen en consola (desarrollo)
- [ ] Redirección ocurre en ~100ms
- [ ] Funciona con APIs propias
- [ ] Funciona con APIs externas

---

## 🚨 **Problemas Comunes**

### **1. No redirige**
**Causa:** El error no es 5xx
**Solución:** Solo errores de servidor (500-599) redirigen automáticamente

### **2. Redirige muy rápido**
**Causa:** Delay de 100ms es muy corto
**Solución:** Aumentar delay en `apiInterceptor.ts`:
```typescript
setTimeout(() => {
  window.location.href = errorRoute;
}, 500); // Aumentar a 500ms
```

### **3. No aparecen logs**
**Causa:** Estás en producción
**Solución:** Los logs solo aparecen en desarrollo (`import.meta.env.DEV`)

### **4. CORS error**
**Causa:** La API bloquea peticiones desde localhost
**Solución:** Usar `httpstat.us` que permite CORS

---

## 📝 **Servicios de Testing Recomendados**

### **httpstat.us** ✅ Recomendado
```
https://httpstat.us/503
https://httpstat.us/500
https://httpstat.us/502
```
- ✅ Devuelve el código que le pidas
- ✅ Permite CORS
- ✅ Gratuito
- ✅ Rápido

### **httpbin.org**
```
https://httpbin.org/status/503
https://httpbin.org/delay/5
```
- ✅ Muchas opciones de testing
- ✅ Permite CORS
- ✅ Gratuito

### **reqres.in**
```
https://reqres.in/api/users/999
```
- ✅ API REST de prueba
- ✅ Devuelve 404 para usuarios inexistentes
- ✅ Gratuito

---

## 🎯 **Ejemplo Completo**

```typescript
// Componente de prueba completo
import { useState } from 'react';

export const ApiTester = () => {
  const [result, setResult] = useState('');

  const tests = [
    { code: 500, name: 'Server Error', shouldRedirect: true },
    { code: 503, name: 'Service Unavailable', shouldRedirect: true },
    { code: 404, name: 'Not Found', shouldRedirect: false },
  ];

  const runTest = async (code: number) => {
    console.log(`🧪 Testing ${code}...`);
    
    try {
      const response = await fetch(`https://httpstat.us/${code}`);
      setResult(`${code}: ${response.status} ${response.statusText}`);
    } catch (error) {
      setResult(`${code}: Error - ${error}`);
    }
  };

  return (
    <div className="p-4">
      <h2>API Error Tester</h2>
      {tests.map(test => (
        <button
          key={test.code}
          onClick={() => runTest(test.code)}
          className="m-2 p-2 bg-blue-500 text-white rounded"
        >
          Test {test.code} - {test.name}
          {test.shouldRedirect && ' (debería redirigir)'}
        </button>
      ))}
      {result && <div className="mt-4 p-2 bg-gray-100">{result}</div>}
    </div>
  );
};
```

---

## 🚀 **Próximos Pasos**

1. Accede a `/test-api-errors` en tu navegador
2. Prueba cada botón
3. Verifica que las redirecciones funcionen
4. Revisa los logs en consola
5. ¡Listo! Tu sistema está funcionando

---

## 💡 **Tips**

- Usa `httpstat.us` para pruebas rápidas
- Revisa la consola para ver logs detallados
- Deshabilita `autoRedirect` si quieres ver el error sin redirigir
- Agrega más códigos de error según necesites
- Elimina `/test-api-errors` antes de producción
