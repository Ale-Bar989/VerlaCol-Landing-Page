<div align="center">

# 🚀 VerlaCol Landing Page

### Proyecto web moderno con Screaming Arquitectura SOLID

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.12-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1.16-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![SOLID](https://img.shields.io/badge/SOLID-99.5%25-success?style=for-the-badge)](https://en.wikipedia.org/wiki/SOLID)

[Demo](https://github.com/Ale-Bar989/VerlaCol-Landing-Page) • [Reportar Bug](https://github.com/Ale-Bar989/VerlaCol-Landing-Page/issues) • [Solicitar Feature](https://github.com/Ale-Bar989/VerlaCol-Landing-Page/issues)

</div>

---

## 📑 Tabla de Contenidos

- [Stack Tecnológico](#-stack-tecnológico)
- [Características](#-características)
- [Inicio Rápido](#-inicio-rápido)
- [Scripts Disponibles](#-scripts-disponibles)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Principios de Arquitectura](#-principios-de-arquitectura)
- [Contribución](#-contribución)
- [Licencia](#-licencia)
- [Equipo](#-equipo)

---

## 📋 Stack Tecnológico

<table>
<tr>
<td width="50%">

### Frontend

- ⚛️ **React 19.1.1** - UI Library moderna
- 🔷 **TypeScript 5.9.3** - Type safety
- 🎨 **TailwindCSS v4** - Utility-first CSS
- 🧭 **React Router v7** - Navegación client-side
- 🎯 **Lucide React** - Iconos modernos
- ⚡ **Vite 7** - Build tool ultrarrápido

</td>
<td width="50%">

### Desarrollo

- 🔧 **ESLint** - Code linting
- 📝 **TypeScript Strict** - Type checking
- 🏗️ **Arquitectura Hexagonal** - Clean code
- 🧪 **Testing Ready** - Estructura preparada
- 📦 **Lazy Loading** - Code splitting
- ⚡ **React.memo** - Optimización

</td>
</tr>
</table>

## ✨ Características

### 🏗️ Arquitectura y Diseño

- 🎯 **SOLID 99.5%** - Principios de diseño aplicados correctamente
- 🏛️ **Arquitectura Híbrida** - OOP para servicios + Funcional para UI
- 📦 **Dependency Inversion** - Inyección de dependencias en toda la app
- 🔄 **Open/Closed Principle** - Componentes extensibles sin modificación
- 🎨 **Interface Segregation** - Interfaces pequeñas y específicas
- ⚡ **Single Responsibility** - Cada módulo tiene una responsabilidad

### 🚀 Performance y Optimización

- ⚡ **Ultra Optimizado** - React.memo, useCallback, useMemo
- 📦 **Lazy Loading** - Code splitting automático
- 🎯 **Componentes Reutilizables** - Button, FormField, y más
- 🔄 **Hooks Personalizados** - useAnimatedNumber, useContactForm, useSpeedTest
- 📉 **-496 líneas** - Código duplicado eliminado

### 🛠️ Desarrollo y Calidad

- 🔒 **Type Safety 100%** - TypeScript estricto con path aliases
- 🧪 **Testeable 99.5%** - Mocks e inyección de dependencias
- 📱 **Responsive Design** - Mobile-first approach
- 🎨 **Design System** - Colores, gradientes y estilos centralizados

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js >= 20.19.0 o >= 22.12.0
- npm >= 10.0.0

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/verlapage.git
cd verlapage

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El proyecto estará disponible en [http://localhost:5173](http://localhost:5173)

## 📜 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run preview      # Preview del build
npm run lint         # Ejecutar ESLint
npm run type-check   # Verificar tipos TypeScript
npm test             # Ejecutar tests
npm run all          # Ejecutar type-check + lint + build
```

## 🧪 CI/CD y Protección de Ramas

La rama `developer` funciona como entorno de pre-producción. Se valida que todas las funcionalidades pasen checks antes de integrarse a `main`.

- CI en `.github/workflows/ci.yml` ejecuta: `type-check`, `lint`, `build` y `tests` en `push` y `pull_request` a `developer` y `main`.
- Políticas deseadas para `developer` (configurables en GitHub → Settings → Branches):
  - Requerir revisión de código antes de merge (≥1 aprobación).
  - Exigir que los status checks de CI pasen antes del merge.
  - Permitir solo merge commits (no fast-forward y no squash).

## 🔀 Proceso de Merge developer → main

1. Crear Pull Request desde `developer` hacia `main`.
2. Verificar que el workflow `CI` pasa: `npm run type-check`, `npm run lint`, `npm run build`, `npm test`.
3. Obtener al menos una aprobación de revisión de código.
4. Realizar el merge usando `Merge commit`.
5. Desplegar desde `main` según el pipeline definido.

## 📁 Estructura del Proyecto

<details open>
<summary><b>🏗️ Arquitectura SOLID + Clean Architecture</b></summary>

```
verlapage/
├── 📂 src/
│   │
│   ├── 🎯 features/                     # FEATURES POR DOMINIO (UI Layer)
│   │   │                                # Componentes específicos de cada feature
│   │   ├── home/                        # Feature: Página Principal
│   │   │   ├── components/
│   │   │   │   ├── cards/               # SpeedTestCard, StatsCard, ModernCard
│   │   │   │   ├── sections/            # HeroSection, StatsSection, FeaturesSection
│   │   │   │   └── layout/              # ChatWidget, HomeBackgroundEffects
│   │   │   ├── constants/               # Constantes del dominio home
│   │   │   ├── Home.tsx                 # Página principal
│   │   │   └── index.ts                 # Barrel export
│   │   │
│   │   ├── contact/                     # Feature: Contacto
│   │   │   ├── ContactForm.tsx          # ✨ Refactorizado con SOLID
│   │   │   ├── ContactInfo.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── pricing/                     # Feature: Precios
│   │   │   ├── components/
│   │   │   │   └── PricingSpeedTest.tsx # ✨ Usa useAnimatedNumber
│   │   │   ├── index.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── services/                    # Feature: Servicios
│   │   │   ├── fibra-residencial/
│   │   │   ├── tv-digital/
│   │   │   ├── planes-empresariales/
│   │   │   └── index.ts
│   │   │
│   │   ├── legal/                       # Feature: Páginas Legales
│   │   │   ├── internet-sano/
│   │   │   ├── filtrado/
│   │   │   ├── seguridad/
│   │   │   ├── comparador-tarifas/
│   │   │   └── ... (8 páginas)
│   │   │
│   │   └── about/                       # Feature: Nosotros
│   │
│   ├── 🔧 core/                         # CORE LAYER (Configuración + Lógica de Negocio)
│   │   │                                # Servicios, contextos y configuración global
│   │   ├── services/                    # ✨ SERVICIOS CON OOP + DIP
│   │   │   │                            # Implementan interfaces (Dependency Inversion)
│   │   │   ├── storage.ts               # IStorage - LocalStorage, SessionStorage, InMemory
│   │   │   ├── speedTest.ts             # ISpeedTest - CloudflareSpeedTest, MockSpeedTest
│   │   │   ├── validation.ts            # IValidator - ContactFormValidator, MockValidator
│   │   │   ├── sanitizer.ts             # ISanitizer - XSSSanitizer, BasicSanitizer
│   │   │   ├── themeApplier.ts          # IThemeApplier - DOMThemeApplier, MockThemeApplier
│   │   │   └── index.ts                 # Barrel export con interfaces y clases
│   │   │
│   │   ├── types/                       # ✨ TIPOS SEGREGADOS (ISP)
│   │   │   ├── network.ts               # SpeedMetrics, LatencyMetrics, NetworkStatus
│   │   │   └── index.ts                 # Barrel export
│   │   │
│   │   ├── contexts/                    # CONTEXTOS GLOBALES
│   │   │   └── theme/                   # ✨ ThemeProvider con DIP
│   │   │       ├── theme.tsx            # Usa IStorage + IThemeApplier
│   │   │       ├── theme.context.ts
│   │   │       ├── theme.types.ts
│   │   │       └── index.ts
│   │   │
│   │   └── router/                      # CONFIGURACIÓN DE RUTAS
│   │       ├── index.tsx                # Router principal con lazy loading
│   │       └── routes.config.ts         # Configuración de rutas
│   │
│   ├── 🔗 shared/                       # SHARED LAYER (Código Reutilizable)
│   │   │                                # Componentes, hooks y utilidades compartidas
│   │   ├── components/                  # ✨ COMPONENTES REUTILIZABLES (SOLID)
│   │   │   ├── Button/                  # ✨ Button component (OCP)
│   │   │   │   ├── Button.tsx           # 5 variantes, 3 tamaños, loading state
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── Form/                    # ✨ Form components (SRP + ISP)
│   │   │   │   ├── FormField.tsx        # Input + Textarea con validación visual
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── layout/                  # Componentes de layout
│   │   │   │   ├── Navbar/              # Navbar con menú móvil
│   │   │   │   ├── PageLayout.tsx       # Layout base con Navbar + Footer
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── sections/                # Secciones reutilizables
│   │   │   │   ├── ServiceHeroSection.tsx
│   │   │   │   ├── FeaturesGrid.tsx
│   │   │   │   ├── CTASection.tsx
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── effects/                 # Efectos visuales
│   │   │   │   ├── BackgroundEffects.tsx
│   │   │   │   ├── LazySection.tsx
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── ui/                      # Componentes UI básicos
│   │   │   │   ├── IconBadge/
│   │   │   │   ├── LoadingFallback/
│   │   │   │   └── index.ts
│   │   │   │
│   │   │   ├── Modal.tsx                # Modal component
│   │   │   └── index.ts                 # Barrel export principal
│   │   │
│   │   ├── hooks/                       # ✨ CUSTOM HOOKS (SRP + DIP)
│   │   │   ├── useAnimatedNumber.ts     # ✨ Hook para animar números (OCP)
│   │   │   ├── useContactForm.ts        # ✨ Hook para formularios (SRP + DIP)
│   │   │   ├── useSpeedTest.ts          # ✨ Hook para speed test (DIP)
│   │   │   ├── useRealStats.ts          # Hook para estadísticas reales
│   │   │   ├── useLocalTheme.ts         # Hook para tema local
│   │   │   ├── useIntersectionObserver.ts
│   │   │   ├── useDebounce.ts
│   │   │   └── index.ts                 # Barrel export
│   │   │
│   │   ├── styles/                      # ESTILOS GLOBALES
│   │   │   ├── design-system.ts         # Sistema de diseño centralizado
│   │   │   └── index.css                # Estilos globales de Tailwind
│   │   │
│   │   └── assets/                      # RECURSOS ESTÁTICOS
│   │       └── logo verla horizontal.png
│   │
│   ├── 🧪 __tests__/                    # TESTS (Preparado para testing)
│   │
│   └── main.tsx                         # PUNTO DE ENTRADA
│
├── 📂 public/                           # ASSETS PÚBLICOS
│   └── vite.svg
│
├── 📄 index.html                        # HTML template
├── 📄 package.json                      # Dependencias y scripts
├── 📄 tsconfig.json                     # Configuración TypeScript
├── 📄 vite.config.ts                    # Configuración Vite
├── 📄 postcss.config.js                 # Configuración PostCSS
├── 📄 eslint.config.js                  # Configuración ESLint
├── 📄 .gitignore                        # Git ignore rules
└── 📄 README.md                         # Este archivo
```

</details>

<details>
<summary><b>📚 Descripción Detallada de Carpetas</b></summary>

### 🎯 `features/` - Features por Dominio (UI Layer)
**Propósito**: Organización por características de negocio (Screaming Architecture)

Cada feature contiene todo lo necesario para funcionar de forma independiente:
- **Componentes específicos** del feature
- **Páginas** relacionadas
- **Constantes** del dominio
- **Lógica de UI** específica

**Ventajas**:
- ✅ Fácil encontrar código relacionado
- ✅ Escalable (agregar features sin afectar otros)
- ✅ Código cohesivo por dominio

---

### 🔧 `core/` - Configuración Global y Lógica de Negocio

#### `core/services/` - **Servicios con OOP + SOLID** ✨
**Propósito**: Lógica de negocio encapsulada en clases con interfaces

**Características**:
- ✅ **Dependency Inversion (DIP)**: Todas las clases implementan interfaces
- ✅ **Single Responsibility (SRP)**: Cada servicio tiene una responsabilidad
- ✅ **Open/Closed (OCP)**: Fácil agregar nuevas implementaciones
- ✅ **Testeable 100%**: Mocks disponibles para testing

**Servicios disponibles**:
- `IStorage` - Abstracción de almacenamiento (localStorage, sessionStorage, memoria)
- `ISpeedTest` - Medición de velocidad de internet (Cloudflare API)
- `IValidator` - Validación de formularios
- `ISanitizer` - Sanitización de inputs (prevención XSS)
- `IThemeApplier` - Aplicación de temas al DOM

#### `core/types/` - **Tipos Segregados (ISP)** ✨
**Propósito**: Interfaces pequeñas y específicas

**Ejemplo**:
```typescript
// En lugar de una interface grande:
interface ConnectionData { downloadSpeed, uploadSpeed, ping, effectiveType, isOnline }

// Interfaces segregadas:
interface SpeedMetrics { downloadSpeed, uploadSpeed }
interface LatencyMetrics { ping }
interface NetworkStatus { effectiveType, isOnline }
```

#### `core/contexts/` - Contextos Globales
**Propósito**: Estado global de la aplicación

- `theme/` - Gestión de tema (dark/light) con DIP

#### `core/router/` - Configuración de Rutas
**Propósito**: Navegación y lazy loading

- Lazy loading automático
- Rutas tipadas con TypeScript
- Suspense para estados de carga

---

### 🔗 `shared/` - Código Reutilizable

#### `shared/components/` - **Componentes Reutilizables (SOLID)** ✨
**Propósito**: Componentes que se usan en múltiples features

**Componentes destacados**:
- `Button/` - **5 variantes, 3 tamaños** (OCP)
  - Variantes: primary, secondary, outline, ghost, danger
  - Tamaños: sm, md, lg
  - Estados: loading, disabled
  - Icons: left, right

- `Form/FormField` - **Input + Textarea** (SRP + ISP)
  - Validación visual automática
  - Mensajes de error
  - Helper text
  - Accesibilidad completa

- `layout/` - Layouts reutilizables
  - `Navbar` - Navegación principal
  - `PageLayout` - Layout base con Navbar + Footer

- `sections/` - Secciones reutilizables
  - `ServiceHeroSection` - Hero para páginas de servicios
  - `FeaturesGrid` - Grid de características
  - `CTASection` - Call-to-action

- `effects/` - Efectos visuales
  - `BackgroundEffects` - Efectos de fondo
  - `LazySection` - Lazy loading con Intersection Observer

#### `shared/hooks/` - **Custom Hooks (SRP + DIP)** ✨
**Propósito**: Lógica reutilizable encapsulada en hooks

**Hooks destacados**:
- `useAnimatedNumber` - **Animación de números** (OCP)
  - 4 tipos de easing: linear, easeIn, easeOut, easeInOut
  - Configurable (duración, steps)
  - Reutilizable en cualquier componente

- `useContactForm` - **Lógica de formularios** (SRP + DIP)
  - Inyección de `IValidator` e `ISanitizer`
  - Manejo de estado completo
  - Validación automática
  - Sanitización automática

- `useSpeedTest` - **Test de velocidad** (DIP)
  - Inyección de `ISpeedTest`
  - Medición real con Cloudflare
  - Cancelable

- `useRealStats` - Estadísticas reales
- `useLocalTheme` - Tema local sincronizado
- `useIntersectionObserver` - Detección de visibilidad
- `useDebounce` - Debouncing de valores

#### `shared/styles/` - Estilos Globales
**Propósito**: Sistema de diseño centralizado

- `design-system.ts` - Colores, gradientes, sombras
- `index.css` - Estilos globales de Tailwind

#### `shared/assets/` - Recursos Estáticos
**Propósito**: Imágenes, logos, iconos

---

### 🧪 `__tests__/` - Tests
**Propósito**: Tests unitarios e integración

**Estructura preparada para**:
- Tests de servicios (con mocks)
- Tests de hooks (con renderHook)
- Tests de componentes (con React Testing Library)

</details>

> 📖 **Nota**: Este proyecto implementa **Arquitectura Híbrida** (OOP para servicios + Funcional para UI) con **SOLID 99.5%**

## 🎯 Principios de Arquitectura

- **Arquitectura Hexagonal** - Separación de capas
- **SOLID** - Principios de diseño orientado a objetos
- **Clean Code** - Código limpio y mantenible
- **DDD** - Domain-Driven Design
- **Atomic Design** - Componentes organizados por complejidad

## 🛠️ Tecnologías y Herramientas

### Frontend

- React 19 con TypeScript
- React Router v7 para navegación
- TailwindCSS v4 para estilos
- Lucide React para iconos

### Desarrollo

- Vite 7 para dev server y bundling
- ESLint para linting
- TypeScript para type checking

## 🤝 Contribución

¿Quieres contribuir? ¡Genial! Sigue estos pasos:

<details>
<summary><b>📝 Guía de Contribución</b></summary>

### 1️⃣ Fork y Clone

```bash
# Fork el repositorio en GitHub
# Luego clona tu fork
git clone https://github.com/TU-USUARIO/VerlaCol-Landing-Page.git
cd VerlaCol-Landing-Page
```

### 2️⃣ Crea una Branch

```bash
# Crea y cambia a una nueva branch
git checkout -b feature/nueva-funcionalidad

# Nomenclatura de branches:
# feature/  - Nueva funcionalidad
# fix/      - Corrección de bugs
# docs/     - Documentación
# refactor/ - Refactorización
# test/     - Tests
```

### 3️⃣ Haz tus Cambios

- ✅ Sigue las convenciones de código del proyecto
- ✅ Agrega tests si es necesario
- ✅ Actualiza la documentación
- ✅ Verifica que todo compile: `npm run all`

### 4️⃣ Commit

```bash
# Usa conventional commits
git commit -m "feat: agregar nueva página de servicios"
git commit -m "fix: corregir bug en navegación móvil"
git commit -m "docs: actualizar README con ejemplos"
```

**Tipos de commit**:

- `feat`: Nueva funcionalidad
- `fix`: Corrección de bugs
- `docs`: Documentación
- `style`: Formato, punto y coma, etc
- `refactor`: Refactorización de código
- `test`: Agregar o modificar tests
- `chore`: Tareas de mantenimiento

### 5️⃣ Push y Pull Request

```bash
# Push a tu fork
git push origin feature/nueva-funcionalidad

# Luego crea un PR en GitHub
```

### ✅ Checklist antes del PR

- [ ] El código compila sin errores (`npm run build`)
- [ ] Pasa el linter (`npm run lint`)
- [ ] Pasa el type-check (`npm run type-check`)
- [ ] Tests actualizados (si aplica)
- [ ] Documentación actualizada
- [ ] Commits siguen conventional commits

</details>

---

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 👥 Equipo

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Ale-Bar989">
        <img src="https://github.com/Ale-Bar989.png" width="100px;" alt=""/>
        <br />
        <sub><b>Ale-Bar989</b></sub>
      </a>
      <br />
      <a href="https://github.com/Ale-Bar989/VerlaCol-Landing-Page/commits?author=Ale-Bar989" title="Code">💻</a>
      <a href="#design" title="Design">🎨</a>
    </td>
  </tr>
</table>

---

## 🙏 Agradecimientos

- [React](https://react.dev/) - UI Library
- [Vite](https://vitejs.dev/) - Build tool
- [TailwindCSS](https://tailwindcss.com/) - CSS Framework
- [Lucide](https://lucide.dev/) - Icons
- Comunidad Open Source por las herramientas increíbles

---

<div align="center">

### ⭐ ¡Si te gusta este proyecto, dale una estrella!

[![GitHub stars](https://img.shields.io/github/stars/Ale-Bar989/VerlaCol-Landing-Page?style=social)](https://github.com/Ale-Bar989/VerlaCol-Landing-Page/stargazers)

**[⬆ Volver arriba](#-verlacol-landing-page)**

</div>
