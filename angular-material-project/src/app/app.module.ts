import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// Import Angular Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Required for animations in Angular Material
    MatButtonModule,          // For Material buttons
    MatToolbarModule,         // For Material toolbar
    MatCardModule,            // For Material cards
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
