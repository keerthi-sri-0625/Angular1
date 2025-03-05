import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Import standalone AppComponent
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './components/hello/hello.component';
const routes: Routes = [
    { path: 'hello', component: HelloComponent },
    // Add other routes here
    { path: '', redirectTo: '/hello', pathMatch: 'full' }
  ];
  
@NgModule({
  declarations: [],
  imports: [BrowserModule],
  providers: [],
  // Remove bootstrap: [AppComponent] as we use bootstrapApplication
})
export class AppModule { }
