import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  standalone: true // Mark the component as standalone
})
export class HelloComponent {
  message: string = 'Hello, Angular!';

  changeMessage() {
    this.message = 'You clicked the button!';
  }
}
