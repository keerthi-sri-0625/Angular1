import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule for built-in pipes

@Component({
  selector: 'app-built-in-pipes',
  standalone: true,  // Make this component standalone
  templateUrl: './built-in-pipes.component.html',
  styleUrls: ['./built-in-pipes.component.css'],
  imports: [CommonModule]  // Add CommonModule here for built-in pipes
})
export class BuiltInPipesComponent {
  currentDate: Date = new Date();
  price: number = 1234.56;
  productName: string = 'angular pipes demo';
  items: string[] = ['apple', 'banana', 'orange'];
}

