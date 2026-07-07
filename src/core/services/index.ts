// Barrel export para servicios - Dependency Inversion Principle
// Ubicación: src/core/services/index.ts

// Storage services
export type { IStorage } from './storage';
export { LocalStorage, SessionStorage, InMemoryStorage, defaultStorage } from './storage';

// Speed Test services
export type { ISpeedTest } from './speedTest';
export { CloudflareSpeedTest, MockSpeedTest, defaultSpeedTest } from './speedTest';

// Validation services
export type { IValidator, ValidationResult, ContactFormData, ContactFormErrors } from './validation';
export { ContactFormValidator, MockValidator, defaultContactValidator } from './validation';

// Sanitizer services
export type { ISanitizer } from './sanitizer';
export { XSSSanitizer, BasicSanitizer, MockSanitizer, defaultSanitizer } from './sanitizer';

// Theme Applier services
export type { IThemeApplier } from './themeApplier';
export { DOMThemeApplier, MockThemeApplier, CSSVariablesThemeApplier, defaultThemeApplier } from './themeApplier';
