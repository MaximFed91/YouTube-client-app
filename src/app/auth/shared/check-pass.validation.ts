import { AbstractControl } from '@angular/forms';

export default (control: AbstractControl) => {
  const str: string = control.value;
  if (
    new RegExp('[a-z]').test(str) &&
    new RegExp('[A-Z]').test(str) &&
    new RegExp('[0-9]').test(str) &&
    new RegExp('[^A-Za-z0-9]').test(str) &&
    str.length > 7
  ) {
    return null;
  }
  return { noStrong: true };
};
