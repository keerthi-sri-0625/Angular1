import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Import FormsModule for ngModel (if using)
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AllDirectivesComponent } from './directives-demo/all-directives/all-directives.component';
import { NestedComponent } from './directives-demo/nested/nested.component';  // Import NestedComponent

@NgModule({
  declarations: [
            // Declare NestedComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,  // Import BrowserModule to run the app in the browser
    FormsModule     // Import FormsModule for two-way data binding (ngModel)
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
