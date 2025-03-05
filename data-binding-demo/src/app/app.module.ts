import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Import FormsModule

import { AppComponent } from './app.component';
import { InterpolationComponent } from './data-binding-examples/interpolation/interpolation.component';
import { PropertyBindingComponent } from './data-binding-examples/property-binding/property-binding.component';
import { EventBindingComponent } from './data-binding-examples/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './data-binding-examples/two-way-binding/two-way-binding.component'; // Import the TwoWayBindingComponent

@NgModule({
  declarations: [
     // Add to declarations
  ],
  imports: [
    BrowserModule,
    FormsModule // Ensure FormsModule is imported here
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
