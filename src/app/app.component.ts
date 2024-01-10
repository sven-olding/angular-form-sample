import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') signupForm: ElementRef;
  questionAnswer = '';

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form: ElementRef) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signupForm);
  }
}
