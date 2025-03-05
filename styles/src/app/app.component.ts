import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';  // Import FooterComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // AppComponent is also standalone
  imports: [FooterComponent]  // Add FooterComponent to imports array
})
export class AppComponent {
  title = 'styles';
}
