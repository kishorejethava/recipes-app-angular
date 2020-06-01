import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeedComponent } from './feed/feed.component';
import { HttpClientModule } from "@angular/common/http";
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MatGridListResponsiveModule } from './utils/mat-grid-list-responsive/mat-grid-list-responsive.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FeedComponent,
    RecipeDetailComponent,
    AddRecipeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ImageCropperModule,
    MatGridListResponsiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
