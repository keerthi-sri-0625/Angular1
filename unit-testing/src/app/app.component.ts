import { Component } from '@angular/core';
import { HelloComponent } from './hello/hello.component';  // Import HelloComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true, // Mark AppComponent as standalone
  imports: [HelloComponent]  // Import HelloComponent here
})
export class AppComponent {
  title = 'unit-testing'; // Set the title property
}


