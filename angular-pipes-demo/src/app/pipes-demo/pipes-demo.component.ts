import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent implements OnInit {
  
  // Sample data to demonstrate pipes
  currentDate: Date = new Date();
  price: number = 1234.56;
  productName: string = 'angular pipes demo';
  items: string[] = ['apple', 'banana', 'orange'];
  
  constructor() { }

  ngOnInit(): void { }
}
