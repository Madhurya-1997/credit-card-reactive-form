import { FormControl } from "@angular/forms";

export class ExpirationDateControl extends FormControl {
    // value is the 'value' we are typing in...in other words, it is the value after we make any 
    // changes to the input field
    // this.value is the current value that you see in the input field
    setValue(value: string | null, options: any) {
        if (!value) {
            super.setValue('', { ...options, emitModelToViewChange: true });
            return;
        }

        if (value.match(/[^0-9|\/]/gi)) {
            // here, this.value takes the current value from FormControl class
            // in this case, it is ''
            super.setValue(this.value, {
                ...options,
                emitModelToViewChange: true
            })
            return;
        }

        if (value.length === 2) {
            super.setValue(value + '/', {
                ...options,
                emitModelToViewChange: true
            })
            return;
        }

        if (value.length > 5) {
            super.setValue(this.value, {
                ...options,
                emitModelToViewChange: true
            })
            return;
        }

        if (value.length === 2 && this.value.length === 3) {
            super.setValue(value, {
                ...options,
                emitModelToViewChange: true
            })
            return;
        }

        super.setValue(value, { ...options, emitModelToViewChange: true })
    }
}
