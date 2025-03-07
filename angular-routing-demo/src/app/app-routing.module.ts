import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },   // Default route (home)
  { path: 'about', component: AboutComponent }, // About route
  { path: 'contact', component: ContactComponent } // Contact route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Import RouterModule with routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
