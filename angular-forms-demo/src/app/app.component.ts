import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Template-Driven Form
  templateUser = {
    name: '',
    email: ''
  };
  submittedTemplate = false;

  // Reactive Form
  reactiveForm: FormGroup;
  submittedReactive = false;

  constructor() {
    // Initialize the Reactive Form with validation rules
    this.reactiveForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  // Template-Driven Form Submit
  onTemplateSubmit() {
    this.submittedTemplate = true;
    console.log("Template-Driven Form Data:", this.templateUser);
  }

  // Reactive Form Submit
  onReactiveSubmit() {
    if (this.reactiveForm.valid) {
      this.submittedReactive = true;
      console.log("Reactive Form Data:", this.reactiveForm.value);
    }
  }
}
