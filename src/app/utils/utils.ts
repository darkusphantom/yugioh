import { AbstractControl } from '@angular/forms';

export class MyValidators {
  static validPassword(control: AbstractControl) {
    const value = control.value;
    if (!containsNumber(value)) {
      return { invalid_password: true };
    }
    return null;
  }

  static matchPassword(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    if (password === confirmPassword) {
      return null;
    }
    return { match_password: true };
  }
}

const containsNumber = (value: string) => {
  return value.split('').find((val) => Number(val)) !== undefined;
};
