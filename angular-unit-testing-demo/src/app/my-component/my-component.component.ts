import { Component, OnInit } from '@angular/core';
import { MyService } from '../my-service.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponent implements OnInit {

  data: string | undefined;

  constructor(private myService: MyService) { }

  ngOnInit(): void {
    this.data = this.myService.getData();
  }

}
