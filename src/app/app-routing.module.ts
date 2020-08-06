import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { FeedComponent } from "./feed/feed.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { AddRecipeComponent } from "./add-recipe/add-recipe.component";
import { FavoriteComponent } from "./favorite/favorite.component";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "feed", component: FeedComponent },
  { path: "detail/:id", component: RecipeDetailComponent },
  { path: "add", component: AddRecipeComponent },
  { path: "cooking-list", component: FavoriteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
