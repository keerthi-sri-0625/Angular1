import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  message: string = 'Hello, this is Interpolation Data Binding!';

  constructor() { }

  ngOnInit(): void {
  }
}
