import { AbstractControl } from '@angular/forms';

/**
 * Clase que proporciona validadores personalizados para formularios en Angular.
 */
export class MyValidators {
  /**
   * Valida si la contraseña contiene al menos un número.
   * @param control - Control de formulario que contiene el valor de la contraseña.
   * @returns Un objeto con un error si la contraseña es inválida, o null si es válida.
   */
  static validPassword(control: AbstractControl) {
    const value = control.value;
    if (!containsNumber(value)) {
      return { invalid_password: true };
    }
    return null;
  }

  /**
   * Verifica si la contraseña y la confirmación de la contraseña coinciden.
   * @param control - Control de formulario que contiene los valores de 'password' y 'confirmPassword'.
   * @returns Un objeto con un error si las contraseñas no coinciden, o null si coinciden.
   */
  static matchPassword(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (password === confirmPassword) {
      return null;
    }
    return { match_password: true };
  }
}

/**
 * Verifica si una cadena contiene al menos un número.
 * @param value - La cadena que se va a verificar.
 * @returns true si la cadena contiene un número, false en caso contrario.
 */
const containsNumber = (value: string) => {
  return value.split('').find((val) => Number(val)) !== undefined;
};
