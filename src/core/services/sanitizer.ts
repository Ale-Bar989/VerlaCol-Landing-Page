// Sanitizer Service - Abstracción de sanitización (Dependency Inversion + Single Responsibility)
// Ubicación: src/core/services/sanitizer.ts
// Previene ataques XSS y otros problemas de seguridad

/**
 * Interface para servicios de sanitización
 * Implementa Dependency Inversion Principle (DIP)
 */
export interface ISanitizer {
  /**
   * Sanitiza un string de entrada
   * @param input - String a sanitizar
   * @returns String sanitizado
   */
  sanitize(input: string): string;

  /**
   * Sanitiza múltiples campos
   * @param data - Objeto con campos a sanitizar
   * @returns Objeto con campos sanitizados
   */
  sanitizeObject<T extends Record<string, string>>(data: T): T;
}

/**
 * Sanitizador XSS
 * Implementa Single Responsibility Principle (SRP)
 * Responsabilidad única: Prevenir ataques XSS
 */
export class XSSSanitizer implements ISanitizer {
  /**
   * Sanitiza un string eliminando código peligroso
   */
  sanitize(input: string): string {
    if (!input) return input;

    return input
      .trim()
      // Eliminar tags de script
      .replace(/<script[^>]*>.*?<\/script>/gi, '')
      // Eliminar todos los tags HTML
      .replace(/<[^>]+>/g, '')
      // Eliminar caracteres peligrosos
      .replace(/[<>"']/g, '')
      // Eliminar event handlers inline
      .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '')
      // Eliminar javascript: protocol
      .replace(/javascript:/gi, '');
  }

  /**
   * Sanitiza un objeto completo
   */
  sanitizeObject<T extends Record<string, string>>(data: T): T {
    const sanitized = {} as T;
    
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        sanitized[key] = this.sanitize(data[key]) as T[Extract<keyof T, string>];
      }
    }
    
    return sanitized;
  }
}

/**
 * Sanitizador básico
 * Solo hace trim y elimina espacios extras
 */
export class BasicSanitizer implements ISanitizer {
  sanitize(input: string): string {
    if (!input) return input;
    
    return input
      .trim()
      .replace(/\s+/g, ' '); // Reemplazar múltiples espacios por uno solo
  }

  sanitizeObject<T extends Record<string, string>>(data: T): T {
    const sanitized = {} as T;
    
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        sanitized[key] = this.sanitize(data[key]) as T[Extract<keyof T, string>];
      }
    }
    
    return sanitized;
  }
}

/**
 * Sanitizador Mock para testing
 */
export class MockSanitizer implements ISanitizer {
  sanitize(input: string): string {
    return input; // No sanitiza nada en testing
  }

  sanitizeObject<T extends Record<string, string>>(data: T): T {
    return data; // No sanitiza nada en testing
  }
}

// Instancia por defecto
export const defaultSanitizer: ISanitizer = new XSSSanitizer();
