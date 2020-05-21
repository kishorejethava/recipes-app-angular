import { NgModule } from "@angular/core";
import {
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatSlideToggleModule,
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const MaterialComponents = [
  MatFormFieldModule,
  MatInputModule,
  FormsModule,
  ReactiveFormsModule,
  MatIconModule,
  MatCardModule,
  MatSlideToggleModule,
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}
