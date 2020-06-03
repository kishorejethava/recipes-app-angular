import { Component, OnInit } from "@angular/core";
import { RecipeApiService } from "../recipe-api.service";
import { Recipe, Ingredient, Instruction } from "./Recipe";
import { ActivatedRoute } from "@angular/router";
import { MatDialog, MatTableDataSource } from "@angular/material";
import { AddIngredientDialogComponent } from "../add-ingredient-dialog/add-ingredient-dialog.component";
import { ReqAddIngredient } from "./req.add-ingredient";
import { ReqAddInstruction } from "./req.add-instruction";
import { ReqDeleteIngredient } from "./req.delete-ingredient";
import { ReqDeleteInstruction } from "./req.delete-instruction";

export interface DialogData {
  title: string;
  input: string;
}

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.scss"],
})
export class RecipeDetailComponent implements OnInit {
  dataSourceIngredient = new MatTableDataSource<Ingredient>([]);
  dataSourceInstruction = new MatTableDataSource<Instruction>([]);
  ingredient: string;
  recipe: Recipe;
  displayedColumns: string[] = ["position", "name", "delete"];

  constructor(
    private route: ActivatedRoute,
    private apiService: RecipeApiService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getRecipeDetail();
  }

  /* Get recipe details */
  getRecipeDetail() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.apiService.recipeDetail(id).subscribe((recipe) => {
      this.recipe = recipe;
      this.dataSourceIngredient.data = recipe.ingredients;
      this.dataSourceInstruction.data = recipe.instructions;
    });
  }

  /* Dialog for adding ingredient */
  openDialogIngredient(): void {
    const dialogRef = this.dialog.open(AddIngredientDialogComponent, {
      width: "256px",
      data: { title: "Ingredient", input: this.ingredient },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`The dialog was closed:${result}`);
      this.addIngredient(result);
    });
  }

  /* Dialog for adding instruction */
  openDialogInstruction(): void {
    const dialogRef = this.dialog.open(AddIngredientDialogComponent, {
      width: "256px",
      data: { title: "Instruction", input: this.ingredient },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`The dialog was closed:${result}`);
      this.addInstruction(result);
    });
  }

  /* Add ingredient for recipe */
  addIngredient(rsIngredient: string) {
    const id = +this.route.snapshot.paramMap.get("id");
    const reqAddIngredient: ReqAddIngredient = {
      recipeId: id,
      ingredient: rsIngredient,
    };
    this.apiService
      .addIngredient(reqAddIngredient)
      .subscribe((resOnlyMessage) => {
        this.getIngredients();
      });
  }

  /* Add instruction for recipe */
  addInstruction(rsInstruction: string) {
    const id = +this.route.snapshot.paramMap.get("id");
    const reqAddInstruction: ReqAddInstruction = {
      recipeId: id,
      instruction: rsInstruction,
    };
    this.apiService
      .addInstruction(reqAddInstruction)
      .subscribe((resOnlyMessage) => {
        this.getInstructions();
      });
  }

  /* Get recipe ingredients */
  getIngredients() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.apiService.getIngredients(id).subscribe((ingredients) => {
      this.dataSourceIngredient.data = ingredients;
    });
  }

  /* Get recipe instructions */
  getInstructions() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.apiService.getInstructions(id).subscribe((instructions) => {
      this.dataSourceInstruction.data = instructions;
    });
  }

  /* Delete ingredient and refresh list */
  deleteIngredient(ingredientId: number) {
    const id = +this.route.snapshot.paramMap.get("id");
    var deleteIngredient: ReqDeleteIngredient = {
      recipeId: id,
      ingredientId: ingredientId,
    };
    this.apiService
      .deleteIngredient(deleteIngredient)
      .subscribe((resOnlyMessage) => {
        this.getIngredients();
        console.log(`Delete Ingredient?:${resOnlyMessage.msg}`);
      });
  }
  /* Delete instruction and refresh list */
  deleteInstruction(instructionId: number) {
    const id = +this.route.snapshot.paramMap.get("id");
    var deleteInstruction: ReqDeleteInstruction = {
      recipeId: id,
      instructionId: instructionId,
    };
    this.apiService
      .deleteInstruction(deleteInstruction)
      .subscribe((resOnlyMessage) => {
        this.getInstructions();
        console.log(`Delete Instruction?:${resOnlyMessage.msg}`);
      });
  }
}
