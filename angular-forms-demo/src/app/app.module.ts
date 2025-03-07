import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';  // Import FormsModule for template-driven forms
import { ReactiveFormsModule } from '@angular/forms';  // Import ReactiveFormsModule for reactive forms

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    FormsModule,  // Add FormsModule here for template-driven forms
    ReactiveFormsModule  // Add ReactiveFormsModule here for reactive forms
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
