import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PipesModule } from './pipes/pipes.module';  // Import PipesModule

// Import standalone component here
import { BuiltInPipesComponent } from './pipes/built-in-pipes/built-in-pipes.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    PipesModule,
    BuiltInPipesComponent,  // Import Standalone Component directly
    FormsModule,
  ],
  providers: [],
  bootstrap: [],  // Bootstrap the standalone component
})
export class AppModule {}

