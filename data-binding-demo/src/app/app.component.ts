import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InterpolationComponent } from "./data-binding-examples/interpolation/interpolation.component";
import { PropertyBindingComponent } from "./data-binding-examples/property-binding/property-binding.component";
import { EventBindingComponent } from "./data-binding-examples/event-binding/event-binding.component";
import { TwoWayBindingComponent } from "./data-binding-examples/two-way-binding/two-way-binding.component";

@Component({
  selector: 'app-root',
  imports: [InterpolationComponent, PropertyBindingComponent, EventBindingComponent, TwoWayBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-binding-demo';
}
