import { Component, OnInit } from "@angular/core";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { MatChipInputEvent } from "@angular/material";
import { ImageCroppedEvent } from "ngx-image-cropper";
import {
  Validators,
  FormControl,
  FormBuilder,
  FormGroup,
} from "@angular/forms";
import { RecipeApiService } from "../recipe-api.service";
import { Router } from "@angular/router";
import { ReqAddRecipe } from "./req.add-recipe";

interface Complexity {
  value: string;
  viewValue: string;
}
export interface Category {
  name: string;
}

@Component({
  selector: "app-add-recipe",
  templateUrl: "./add-recipe.component.html",
  styleUrls: ["./add-recipe.component.scss"],
})
export class AddRecipeComponent implements OnInit {
  formGroup: FormGroup;
  titleAlert: string = "This field is required";
  post: any = "";

  imageChangedEvent: any = "";
  croppedImage: any = "";
  selectedValue: string;
  complexities: Complexity[] = [
    { value: "Easy", viewValue: "Easy" },
    { value: "Medium", viewValue: "Medium" },
    { value: "Difficult", viewValue: "Difficult" },
  ];

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  categories: Category[] = [{ name: "Punjabi" }, { name: "Paneer" }];

  constructor(
    private formBuilder: FormBuilder,
    private apiService: RecipeApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.createForm();
    // this.setChangeValidate()
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      name: [null, Validators.required],
      serves: [null, Validators.required],
      preparationTime: [null, Validators.required],
      complexity: [null, Validators.required],
      ytUrl: [null],
    });
  }

  setChangeValidate() {
    this.formGroup.get("validate").valueChanges.subscribe((validate) => {
      if (validate == "1") {
        this.formGroup
          .get("name")
          .setValidators([Validators.required, Validators.minLength(3)]);
        this.titleAlert = "You need to specify at least 3 characters";
      } else {
        this.formGroup.get("name").setValidators(Validators.required);
      }
      this.formGroup.get("name").updateValueAndValidity();
    });
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || "").trim()) {
      this.categories.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = "";
    }
  }

  remove(fruit: Category): void {
    const index = this.categories.indexOf(fruit);

    if (index >= 0) {
      this.categories.splice(index, 1);
    }
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }
  onSubmit() {
    const reqAddRecipe: ReqAddRecipe = {
      name: this.formGroup.value.name,
      preparationTime: this.formGroup.value.preparationTime,
      complexity: this.formGroup.value.complexity,
      serves: this.formGroup.value.serves,
      ytUrl: this.formGroup.value.ytUrl,
      metaTags: this.categories.map((category) => category.name),
    };
    console.log("complexity:" + reqAddRecipe.complexity);
    console.log("metaTags:" + reqAddRecipe.metaTags);
    console.log("name:" + reqAddRecipe.name);
    console.log("preparationTime:" + reqAddRecipe.preparationTime);
    console.log("serves:" + reqAddRecipe.serves);
    this.apiService.addRecipe(reqAddRecipe).subscribe((reqAddRecipe) => {
      this.router.navigate(["feed"]);
    });
  }
}
