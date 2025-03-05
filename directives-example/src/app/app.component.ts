import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AllDirectivesComponent } from "./directives-demo/all-directives/all-directives.component";

@Component({
  selector: 'app-root',
  imports: [AllDirectivesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directives-example';
}
