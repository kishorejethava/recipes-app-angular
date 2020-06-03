import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { DialogData } from "../recipe-detail/recipe-detail.component";

@Component({
  selector: "app-add-ingredient-dialog",
  templateUrl: "./add-ingredient-dialog.component.html",
  styleUrls: ["./add-ingredient-dialog.component.scss"],
})
export class AddIngredientDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddIngredientDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit() {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
