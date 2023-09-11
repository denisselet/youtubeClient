import { AbstractControl, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean | number } | null => {
    const value = control.value;

    const minLength = 8;
    const containsUppercase = /[A-Z]/.test(value);
    const containsLowercase = /[a-z]/.test(value);
    const containsDigit = /[0-9]/.test(value);
    const containsSpecialChar = /[!@#?]/.test(value);

    if (
      value.length >= minLength &&
      containsUppercase &&
      containsLowercase &&
      containsDigit &&
      containsSpecialChar
    ) {
      return null;
    }

    return {
      passwordRequirements: true,
      minLength: minLength,
      containsUppercase: !containsUppercase,
      containsLowercase: !containsLowercase,
      containsDigit: !containsDigit,
      containsSpecialChar: !containsSpecialChar,
    };
  };
}
