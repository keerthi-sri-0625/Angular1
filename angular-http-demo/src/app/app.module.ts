import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppComponent } from './app.component';
import { HttpService } from './http.service'; // Import HttpService

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Ensure HttpClientModule is added here
  ],
  providers: [
    HttpService // Add HttpService here if necessary
  ],
  bootstrap: []
})
export class AppModule { }
