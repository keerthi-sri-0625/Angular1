import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HelloComponent } from './components/hello/hello.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, HelloComponent, FooterComponent, HeaderComponent]  // Import RouterModule here
})
export class AppComponent {
  title = 'angular-components-example';
}

