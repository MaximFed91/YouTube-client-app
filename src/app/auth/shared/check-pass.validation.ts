import { AbstractControl } from '@angular/forms';

export default (control: AbstractControl) => {
  const str: string = control.value;
  if (str.length < 8) {
    return { small: true };
  }
  if (!new RegExp('[a-z]').test(str) || !new RegExp('[A-Z]').test(str)) {
    return { notCase: true };
  }
  if (!new RegExp('[0-9]').test(str)) {
    return { notNumber: true };
  }
  if (!new RegExp('[^A-Za-z0-9]').test(str)) {
    return { notSpecial: true };
  }
  return null;
};
