import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested',
  template: `<p>Nested Component: This is a component directive!</p>`,
})
export class NestedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
