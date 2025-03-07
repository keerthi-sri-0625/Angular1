import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor() { }

  getData(): string {
    return 'Hello, Angular Unit Testing!';
  }
}

