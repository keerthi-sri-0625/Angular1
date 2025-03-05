import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  // Make sure CommonModule is imported here
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule  // Import CommonModule so built-in pipes work
  ],
  exports: []  // Export the component to be used in other modules
})
export class PipesModule { }
