import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
  ]
})
export class ConceptsComponent implements OnInit {

  // employeeData = {
  //  name: '',
  //  phone: '',
  //  email: ''
  // };

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  gotoHomeHandler(): void {
    console.log('About to go to home page');
    // redirect the user to home page thru ts (without routerLink)
    this.router.navigate(['/']);
  }

  handleAddEmployeeSubmit(formData: NgForm): void {
    // console.log(this.employeeData);
    console.log(formData);
  }

}
