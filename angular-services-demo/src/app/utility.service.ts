import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  constructor() { }

  formatText(text: string): string {
    return text.toUpperCase();
  }
}
