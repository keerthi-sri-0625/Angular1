import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  imageUrl: string = 'https://angular.io/assets/images/logos/angular/angular.svg';

  constructor() { }

  ngOnInit(): void {
  }
}
