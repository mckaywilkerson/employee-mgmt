import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styles: [
  ]
})
export class AddEmployeeComponent implements OnInit {

  // Step 1: Have the form tag equivalent in TS
  addEmployeeForm = new FormGroup({
    // Step 2: Have the input element equivalents in TS
    name: new FormControl('', Validators.required ),    // Step 5: work on form validation. Refer HTML for step 6
    phone: new FormControl('', Validators.required ),
    email: new FormControl('', [Validators.required, Validators.email] ),
    address: new FormGroup( {
      address1: new FormControl('', Validators.required ),
      address2: new FormControl(''),
      city: new FormControl(''),
      zip: new FormControl('')
    })
  });
  // Refer add-employee.com.html for step 3

  isSaved = false;

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  handleAddEmployeeSubmit(): void {
    console.log(this.addEmployeeForm);
    console.log(this.addEmployeeForm.value); // this is the form data (which will be used to send to service)

    // send the above data to the employee service
    // get the res from the service
    // upon getting successfull status, display the success msg // or else learn about integrating angular toastr
    this.isSaved = true;
  }

  goBackHandler(): void {
    // redirect the user to go back thru ts (without routerLink)
    this.router.navigate(['/employees']);
  }

}
