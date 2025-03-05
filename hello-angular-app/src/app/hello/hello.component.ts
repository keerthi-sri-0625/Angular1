import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',  // The selector you use in the HTML
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  message: string = 'Hello, Angular!';

  changeMessage() {
    this.message = 'You clicked the button!';
  }
}

