import { FormControl } from "@angular/forms";

export class CardNumberControl extends FormControl {

    setValue(value: string | null, options: any) {
        if (!value) {
            super.setValue('', {
                ...options,
                emitModelToViewChange: true
            })
            return
        }
        if (value.length === 4 || value.length === 9 || value.length === 14) {
            super.setValue(value + '-', {
                ...options,
                emitModelToViewChange: true
            })
            return
        }

        if (value.length === 20) {
            super.setValue(this.value, {
                ...options,
                emitModelToViewChange: true
            })
            return;
        }

        return super.setValue(value, { ...options, emitModelToViewChange: true })
    }

}
