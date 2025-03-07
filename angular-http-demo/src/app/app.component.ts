import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service'; // Import the HttpService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts: any[] = []; // Variable to hold the fetched posts

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    // Call the getPosts method of HttpService to fetch data
    this.httpService.getPosts().subscribe((data: any) => {
      this.posts = data; // Assign the fetched data to the posts array
    });
  }
}
