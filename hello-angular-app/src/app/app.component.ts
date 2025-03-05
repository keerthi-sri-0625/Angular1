import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from "./hello/hello.component";

@Component({
  selector: 'app-root',
  imports: [HelloComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-angular-app';
}
