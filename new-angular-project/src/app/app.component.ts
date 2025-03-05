import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',  // Custom tag that will be used in the HTML
  templateUrl: './app.component.html',  // Path to the HTML template
  styleUrls: ['./app.component.css']   // Path to the CSS file for styles
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
changeMessage() {
throw new Error('Method not implemented.');
}
  message: string = 'Hello, Angular!';  // Property to hold the message displayed in the template
}


