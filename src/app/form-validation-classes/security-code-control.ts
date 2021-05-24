import { FormControl } from "@angular/forms"

export class SecurityCodeControl extends FormControl {
    setValue(value: string | null, options: any) {
        if (!value) {
            super.setValue('', {
                ...options,
                emitModelToViewChange: true
            })
            return
        }
        if (this.value.length === 3) {
            super.setValue(this.value, {
                ...options,
                emitModelToViewChange: true
            })
            return
        }
        return super.setValue(value, {
            ...options,
            emitModelToViewChange: true
        })

    }
}
