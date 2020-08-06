import { Component, OnInit } from "@angular/core";
import { Feed } from "../feed/Feed";
import { RecipeApiService } from "../recipe-api.service";
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-favorite",
  templateUrl: "./favorite.component.html",
  styleUrls: ["./favorite.component.scss"],
})
export class FavoriteComponent implements OnInit {
  responsive = true;
  cols = 1;
  feeds: Feed[];
  constructor(private apiService: RecipeApiService, public dialog: MatDialog) {}

  ngOnInit() {
    this.cookingList();
  }
  cookingList() {
    this.apiService.cookingList().subscribe((feeds) => {
      this.feeds = feeds;
    });
  }
}
