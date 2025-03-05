import { Component, OnInit } from '@angular/core';
import { NestedComponent } from "../nested/nested.component";

@Component({
  selector: 'app-all-directives',
  templateUrl: './all-directives.component.html',
  styleUrls: ['./all-directives.component.css'],
  imports: [NestedComponent]
})
export class AllDirectivesComponent implements OnInit {
  // Variables for Structural Directives (ngIf and ngFor)
  isVisible: boolean = true;
  items: string[] = ['Apple', 'Banana', 'Orange'];

  // Variables for Attribute Directives (ngClass and ngStyle)
  isHighlighted: boolean = false;
  color: string = 'blue';
  fontSize: number = 20;

  constructor() {}

  ngOnInit(): void {}

  // Method to toggle visibility for *ngIf
  toggleVisibility(): void {
    this.isVisible = !this.isVisible;
  }

  // Method to toggle styles and class for ngClass and ngStyle
  toggleStyles(): void {
    this.isHighlighted = !this.isHighlighted;
    this.color = this.color === 'blue' ? 'red' : 'blue';  // Toggle between blue and red
    this.fontSize = this.fontSize === 20 ? 30 : 20;  // Toggle font size between 20px and 30px
  }
}
