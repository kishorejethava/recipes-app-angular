import { NgModule } from "@angular/core";
import {
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatSlideToggleModule,
  MatGridListModule
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
  MatGridListModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {}
