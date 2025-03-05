import { Component } from '@angular/core';
import { HelloComponent } from './hello/hello.component';  // Import HelloComponent

@Component({
  selector: 'app-root',
  standalone: true,       // Marking AppComponent as standalone
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HelloComponent]  // Import HelloComponent directly into AppComponent
})
export class AppComponent {
  title = 'hello-angular-app';
}
