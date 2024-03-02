import {AbstractControl, ValidatorFn} from "@angular/forms";

export function NonNegativeNumberValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const isNegative = (control.value < 0);
    return isNegative ? { 'negativeNumber': {value: control.value}} : null;
  };
}
