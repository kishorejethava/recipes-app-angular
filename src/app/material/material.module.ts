import { NgModule } from "@angular/core";
import {
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatSlideToggleModule,
  MatGridListModule,
  MatChipsModule,
  MatDialogModule,
  MatButtonModule,
  MatSelectModule,
  MatTableModule
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const modules = [
  MatFormFieldModule,
  MatInputModule,
  FormsModule,
  ReactiveFormsModule,
  MatIconModule,
  MatCardModule,
  MatSlideToggleModule,
  MatGridListModule,
  MatChipsModule,
  MatDialogModule,
  MatButtonModule,
  MatSelectModule,
  MatTableModule
];

@NgModule({
  imports: [modules],
  exports: [modules],
})
export class MaterialModule {}
