import { FormControl } from '@angular/forms';

export class CifValidator {
    static checkCIF (formControl: FormControl) {
        const prChar = formControl.value.charAt(0);
        if(!isNaN(prChar)) {
            return {'checkCIF': true};
        } else {
            return null;
        }
    }
}