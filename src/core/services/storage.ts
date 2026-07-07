// Storage Abstraction - Dependency Inversion Principle
// Ubicación: src/core/services/storage.ts
// Permite cambiar la implementación sin afectar el código que lo usa

/**
 * Interface para servicios de almacenamiento
 * Implementa Dependency Inversion Principle (DIP)
 */
export interface IStorage {
  /**
   * Obtiene un valor del almacenamiento
   * @param key - Clave del valor a obtener
   * @returns El valor almacenado o null si no existe
   */
  getItem(key: string): string | null;

  /**
   * Guarda un valor en el almacenamiento
   * @param key - Clave bajo la cual guardar el valor
   * @param value - Valor a guardar
   */
  setItem(key: string, value: string): void;

  /**
   * Elimina un valor del almacenamiento
   * @param key - Clave del valor a eliminar
   */
  removeItem(key: string): void;

  /**
   * Limpia todo el almacenamiento
   */
  clear(): void;
}

/**
 * Implementación de IStorage usando localStorage
 * Esta es una implementación concreta que puede ser reemplazada
 */
export class LocalStorage implements IStorage {
  getItem(key: string): string | null {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.error('Error al leer de localStorage:', error);
      return null;
    }
  }

  setItem(key: string, value: string): void {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.error('Error al escribir en localStorage:', error);
    }
  }

  removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error al eliminar de localStorage:', error);
    }
  }

  clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error al limpiar localStorage:', error);
    }
  }
}

/**
 * Implementación de IStorage usando sessionStorage
 * Ejemplo de cómo podemos cambiar la implementación fácilmente
 */
export class SessionStorage implements IStorage {
  getItem(key: string): string | null {
    try {
      return sessionStorage.getItem(key);
    } catch (error) {
      console.error('Error al leer de sessionStorage:', error);
      return null;
    }
  }

  setItem(key: string, value: string): void {
    try {
      sessionStorage.setItem(key, value);
    } catch (error) {
      console.error('Error al escribir en sessionStorage:', error);
    }
  }

  removeItem(key: string): void {
    try {
      sessionStorage.removeItem(key);
    } catch (error) {
      console.error('Error al eliminar de sessionStorage:', error);
    }
  }

  clear(): void {
    try {
      sessionStorage.clear();
    } catch (error) {
      console.error('Error al limpiar sessionStorage:', error);
    }
  }
}

/**
 * Implementación de IStorage en memoria (útil para testing)
 */
export class InMemoryStorage implements IStorage {
  private storage: Map<string, string> = new Map();

  getItem(key: string): string | null {
    return this.storage.get(key) || null;
  }

  setItem(key: string, value: string): void {
    this.storage.set(key, value);
  }

  removeItem(key: string): void {
    this.storage.delete(key);
  }

  clear(): void {
    this.storage.clear();
  }
}

// Instancia por defecto (puede ser inyectada)
export const defaultStorage: IStorage = new LocalStorage();
