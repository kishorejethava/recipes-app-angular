import { Component, OnInit } from "@angular/core";
import { RecipeApiService } from "../recipe-api.service";
import { Recipe, Ingredient } from "./Recipe";
import { ActivatedRoute } from "@angular/router";
import { MatTreeFlatDataSource, MatTreeFlattener } from "@angular/material";
import { FlatTreeControl } from "@angular/cdk/tree";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.scss"],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(
    private route: ActivatedRoute,
    private apiService: RecipeApiService
  ) {}

  ngOnInit() {
    this.getRecipeDetail();
  }
  getRecipeDetail() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.apiService.recipeDetail(id).subscribe((recipe) => {
      this.recipe = recipe;
    });
  }
}
