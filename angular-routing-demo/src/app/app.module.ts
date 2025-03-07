import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';  // Import AppRoutingModule

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  // Add AppRoutingModule here
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
