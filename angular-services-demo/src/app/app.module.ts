import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { UtilityService } from './utility.service';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule // Add HttpClientModule to imports
  ],
  providers: [
    DataService,
    UtilityService,
    HttpService
  ],
  bootstrap: []
})
export class AppModule { }
