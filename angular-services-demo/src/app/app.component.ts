import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { UtilityService } from './utility.service';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: any[] = [];
  formattedText: string = '';
  posts: any[] = [];

  constructor(
    private dataService: DataService,
    private utilityService: UtilityService,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    // Use DataService to get users
    this.users = this.dataService.getUsers();

    // Use UtilityService to format text
    this.formattedText = this.utilityService.formatText('hello angular');

    // Use HttpService to get posts from an API
    this.httpService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }
}
