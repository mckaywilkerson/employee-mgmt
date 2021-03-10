import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordMustMatch } from './pw-must-match.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [
  ]
})
export class SignupComponent implements OnInit {

  // Reactive form using FormBuilder
  signupForm: any;

  constructor(private fb: FormBuilder) {
    // Step 1:
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      agreeTerms: [false, Validators.requiredTrue]
    }, {
      validator: PasswordMustMatch('password', 'confirmPassword')
    });
  }

  ngOnInit(): void {
  }

  signupHandler(): void {
    console.log(this.signupForm);
  }

}
