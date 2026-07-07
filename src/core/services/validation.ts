// Validation Service - Abstracción de validación (Dependency Inversion + Single Responsibility)
// Ubicación: src/core/services/validation.ts
// Permite cambiar la lógica de validación sin afectar componentes

/**
 * Resultado de validación de un campo
 */
export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Datos de formulario de contacto
 */
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

/**
 * Errores de formulario de contacto
 */
export interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}

/**
 * Interface para servicios de validación
 * Implementa Dependency Inversion Principle (DIP)
 */
export interface IValidator<T = ContactFormData> {
  /**
   * Valida todos los campos del formulario
   * @param data - Datos a validar
   * @returns true si es válido, false si no
   */
  validate(data: T): boolean;

  /**
   * Valida un campo específico
   * @param field - Nombre del campo
   * @param value - Valor a validar
   * @returns Resultado de validación con error si aplica
   */
  validateField(field: string, value: string): ValidationResult;

  /**
   * Obtiene todos los errores de validación
   * @param data - Datos a validar
   * @returns Objeto con errores por campo
   */
  getErrors(data: T): Partial<Record<keyof T, string>>;
}

/**
 * Validador para formulario de contacto
 * Implementa Single Responsibility Principle (SRP)
 */
export class ContactFormValidator implements IValidator<ContactFormData> {
  private readonly NAME_MIN_LENGTH = 2;
  private readonly NAME_MAX_LENGTH = 50;
  private readonly MESSAGE_MIN_LENGTH = 10;
  private readonly MESSAGE_MAX_LENGTH = 500;
  private readonly EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  /**
   * Valida el nombre
   */
  private validateName(name: string): ValidationResult {
    if (!name || name.trim().length === 0) {
      return {
        isValid: false,
        error: 'El nombre es requerido'
      };
    }

    if (name.length < this.NAME_MIN_LENGTH) {
      return {
        isValid: false,
        error: `El nombre debe tener al menos ${this.NAME_MIN_LENGTH} caracteres`
      };
    }

    if (name.length > this.NAME_MAX_LENGTH) {
      return {
        isValid: false,
        error: `El nombre no puede exceder ${this.NAME_MAX_LENGTH} caracteres`
      };
    }

    return { isValid: true };
  }

  /**
   * Valida el email
   */
  private validateEmail(email: string): ValidationResult {
    if (!email || email.trim().length === 0) {
      return {
        isValid: false,
        error: 'El email es requerido'
      };
    }

    if (!this.EMAIL_REGEX.test(email)) {
      return {
        isValid: false,
        error: 'Email inválido'
      };
    }

    return { isValid: true };
  }

  /**
   * Valida el mensaje
   */
  private validateMessage(message: string): ValidationResult {
    if (!message || message.trim().length === 0) {
      return {
        isValid: false,
        error: 'El mensaje es requerido'
      };
    }

    if (message.length < this.MESSAGE_MIN_LENGTH) {
      return {
        isValid: false,
        error: `El mensaje debe tener al menos ${this.MESSAGE_MIN_LENGTH} caracteres`
      };
    }

    if (message.length > this.MESSAGE_MAX_LENGTH) {
      return {
        isValid: false,
        error: `El mensaje no puede exceder ${this.MESSAGE_MAX_LENGTH} caracteres`
      };
    }

    return { isValid: true };
  }

  /**
   * Valida un campo específico
   */
  validateField(field: string, value: string): ValidationResult {
    switch (field) {
      case 'name':
        return this.validateName(value);
      case 'email':
        return this.validateEmail(value);
      case 'message':
        return this.validateMessage(value);
      default:
        return { isValid: true };
    }
  }

  /**
   * Valida todos los campos
   */
  validate(data: ContactFormData): boolean {
    const nameResult = this.validateName(data.name);
    const emailResult = this.validateEmail(data.email);
    const messageResult = this.validateMessage(data.message);

    return nameResult.isValid && emailResult.isValid && messageResult.isValid;
  }

  /**
   * Obtiene todos los errores
   */
  getErrors(data: ContactFormData): ContactFormErrors {
    const errors: ContactFormErrors = {};

    const nameResult = this.validateName(data.name);
    if (!nameResult.isValid) {
      errors.name = nameResult.error;
    }

    const emailResult = this.validateEmail(data.email);
    if (!emailResult.isValid) {
      errors.email = emailResult.error;
    }

    const messageResult = this.validateMessage(data.message);
    if (!messageResult.isValid) {
      errors.message = messageResult.error;
    }

    return errors;
  }
}

/**
 * Validador Mock para testing
 */
export class MockValidator implements IValidator<ContactFormData> {
  private shouldPass: boolean;

  constructor(shouldPass: boolean = true) {
    this.shouldPass = shouldPass;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  validate(_data: ContactFormData): boolean {
    return this.shouldPass;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  validateField(_field: string, _value: string): ValidationResult {
    return {
      isValid: this.shouldPass,
      error: this.shouldPass ? undefined : 'Error de validación mock'
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getErrors(_data: ContactFormData): ContactFormErrors {
    if (this.shouldPass) {
      return {};
    }
    return {
      name: 'Error mock',
      email: 'Error mock',
      message: 'Error mock'
    };
  }
}

// Instancia por defecto
export const defaultContactValidator = new ContactFormValidator();
