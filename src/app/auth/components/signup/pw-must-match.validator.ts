// Custom validator

// get pw and confirm pw as args
// compare the values
// let other default validators also do the job
// if error -- set the error
// else -- set null

import { FormGroup } from '@angular/forms';

export function PasswordMustMatch( controlName: string, matchingControlName: string ): any {
    return (formGroup: FormGroup ) => {
        const pw = formGroup.controls[controlName];             // to get entered password
        const cpw = formGroup.controls[matchingControlName];    // to get confirmed password

        if (cpw.errors && !cpw.errors.mustMatch ) {
            // if any other validator found anywhere else... let's return
            return;
        }

        // set Errors
        if (pw.value !== cpw.value) {
            cpw.setErrors({mustMatch: true});
        } else {
            cpw.setErrors(null);
        }


    };
}
