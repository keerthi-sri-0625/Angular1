import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import HttpClient
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // This ensures the service is available app-wide
})
export class HttpService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // URL for fetching data

  constructor(private http: HttpClient) {} // Inject HttpClient

  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl); // Use HttpClient to fetch data
  }
}
