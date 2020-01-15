import { AbstractControl, ValidatorFn } from "@angular/forms";

export class CustomValidator {
  static timeValidator(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control.value !== null) {
        return control.value < min || control.value > max
          ? { minuteLimit: true }
          : null;
      }
      return null;
    };
  }
}
