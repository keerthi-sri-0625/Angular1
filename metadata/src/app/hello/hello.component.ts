import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  standalone: true // Make HelloComponent standalone
})
export class HelloComponent {
  message: string = 'Hello, Angular!';
}
