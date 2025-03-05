import { Component } from '@angular/core';
import { HelloComponent } from './hello/hello.component';  // Import HelloComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Make AppComponent standalone
  imports: [HelloComponent]  // Import HelloComponent here
})
export class AppComponent {
  title = 'metadata';  // Use this title in the template
}
