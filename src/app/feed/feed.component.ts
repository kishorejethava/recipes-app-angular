import { Component, OnInit } from '@angular/core';
import { Feed } from './Feed';
import { RecipeApiService } from '../recipe-api.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  feeds : Feed[];
  constructor(private apiService : RecipeApiService) { }

  ngOnInit() {
    this.fetchFeeds();
  }
  
  fetchFeeds(){
    this.apiService.feeds().subscribe((feeds) => {
      this.feeds = feeds;
    })
  } 

}
