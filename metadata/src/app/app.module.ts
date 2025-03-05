import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';  // Import AppComponent

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppComponent  // Only import AppComponent if needed
  ],
  providers: [],
  // Don't include the bootstrap array here for standalone components
})
export class AppModule { }

