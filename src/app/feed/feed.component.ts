import { Component, OnInit } from "@angular/core";
import { Feed } from "./Feed";
import { RecipeApiService } from "../recipe-api.service";
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-feed",
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.scss"],
})
export class FeedComponent implements OnInit {
  responsive = true;
  cols = 1;
  feeds: Feed[];
  constructor(private apiService: RecipeApiService, public dialog: MatDialog) {}

  ngOnInit() {
    this.fetchFeeds();
  }

  fetchFeeds() {
    this.apiService.feeds().subscribe((feeds) => {
      this.feeds = feeds;
    });
  }
}
