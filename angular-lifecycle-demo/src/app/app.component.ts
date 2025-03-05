import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LifecycleDemoComponent } from "./lifecycle-demo/lifecycle-demo.component";

@Component({
  selector: 'app-root',
  imports: [LifecycleDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-lifecycle-demo';
}
