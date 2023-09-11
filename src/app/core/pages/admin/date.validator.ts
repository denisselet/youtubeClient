import { AbstractControl, ValidatorFn } from '@angular/forms';

function isValidDate(date: string): boolean {
  const datePattern = /^\d{4}-\d{2}-\d{2}$/;
  return datePattern.test(date);
}

function isDateFuture(date: string): boolean {
  const inputDate = new Date(date);
  const currentDate = new Date();
  return inputDate > currentDate;
}

export function dateValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean | number } | null => {
    const value = control.value;
    if (!isValidDate(value) || isDateFuture(value)) {
      return { invalidDate: true };
    }
    return null;
  };
}
