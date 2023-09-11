import { AbstractControl, ValidatorFn } from '@angular/forms';

function isValidUrl(url: string): boolean {
  const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  return urlPattern.test(url);
}

export function urlValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean | number } | null => {
    const value = control.value;
    if (!isValidUrl(value)) {
      return { invalidUrl: true };
    }
    return null;
  };
}

