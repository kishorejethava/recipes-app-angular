import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
import { ReqLogin } from "./login/req.login";
import { ResLogin } from "./login/res.login";
import { Feed } from "./feed/Feed";
import { Recipe, Ingredient, Instruction } from "./recipe-detail/Recipe";
import { ResAddRecipe } from "./add-recipe/res.add-recipe";
import { ReqAddRecipe } from "./add-recipe/req.add-recipe";
import { ReqAddIngredient } from "./recipe-detail/req.add-ingredient";
import { ResOnlyMessage } from "./utils/res-only-message";
import { ReqAddInstruction } from "./recipe-detail/req.add-instruction";
import { ReqDeleteIngredient } from "./recipe-detail/req.delete-ingredient";
import { ReqDeleteInstruction } from './recipe-detail/req.delete-instruction';

@Injectable({
  providedIn: "root",
})
export class RecipeApiService {
  private baseUrl = "http://35.160.197.175:3006/api/v1/"; // URL to web api
  httpOption = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http: HttpClient) {}

  /* API request for login auth*/
  login(reqLogin: ReqLogin): Observable<ResLogin> {
    return this.http
      .post(this.baseUrl + "user/login", reqLogin, this.httpOption)
      .pipe(
        tap((resLogin: ResLogin) => {
          console.log(`res login:${resLogin}`);
        }),
        catchError(this.handleError<ResLogin>("addHero"))
      );
  }

  /* API request for fetching feeds */
  feeds(): Observable<any> {
    var httpOptions1 = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.MGBf-reNrHdQuwQzRDDNPMo5oWv4GlZKlDShFAAe16s",
      }),
    };
    return this.http.get(this.baseUrl + "recipe/feeds", httpOptions1).pipe(
      tap((feeds: Feed[]) => {
        console.log(`res feeds:${feeds}`);
      }),
      catchError(this.handleError<Feed[]>("addHero"))
    );
  }

  /* API request for adding new recipe */
  addRecipe(reqAddRecipe: ReqAddRecipe): Observable<ResAddRecipe> {
    var httpOptions1 = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.MGBf-reNrHdQuwQzRDDNPMo5oWv4GlZKlDShFAAe16s",
      }),
    };
    return this.http
      .post(this.baseUrl + "recipe/add", reqAddRecipe, httpOptions1)
      .pipe(
        tap((resAddRecipe: ResAddRecipe) => {
          console.log(`res add recipe:${resAddRecipe}`);
        }),
        catchError(this.handleError<ResAddRecipe>("addHero"))
      );
  }

  /* API request for fetching recipe details */
  recipeDetail(id: number): Observable<Recipe> {
    var httpOptions1 = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.MGBf-reNrHdQuwQzRDDNPMo5oWv4GlZKlDShFAAe16s",
      }),
    };
    return this.http
      .get(this.baseUrl + `recipe/${id}/details`, httpOptions1)
      .pipe(
        tap((recipe: Recipe) => {
          console.log(`res recipe detail:${recipe}`);
        }),
        catchError(this.handleError<Recipe>("recipe detail"))
      );
  }

  /* API request for fetching ingredients */
  getIngredients(id: number): Observable<Ingredient[]> {
    var httpOptions1 = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.MGBf-reNrHdQuwQzRDDNPMo5oWv4GlZKlDShFAAe16s",
      }),
    };
    return this.http
      .get(this.baseUrl + `recipe/${id}/ingredients`, httpOptions1)
      .pipe(
        tap((ingredients: Ingredient[]) => {
          console.log(`res ingredients:${ingredients}`);
        }),
        catchError(this.handleError<Ingredient[]>("ingredients"))
      );
  }

  /* API request for fetching instructions */
  getInstructions(id: number): Observable<Instruction[]> {
    var httpOptions1 = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.MGBf-reNrHdQuwQzRDDNPMo5oWv4GlZKlDShFAAe16s",
      }),
    };
    return this.http
      .get(this.baseUrl + `recipe/${id}/instructions`, httpOptions1)
      .pipe(
        tap((instructions: Instruction[]) => {
          console.log(`res instructions:${instructions}`);
        }),
        catchError(this.handleError<Instruction[]>("instructions"))
      );
  }

  /* API request for adding ingredient */
  addIngredient(
    reqAddIngredient: ReqAddIngredient
  ): Observable<ResOnlyMessage> {
    var httpOptions1 = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.MGBf-reNrHdQuwQzRDDNPMo5oWv4GlZKlDShFAAe16s",
      }),
    };
    return this.http
      .post(
        this.baseUrl + "recipe/add-ingredient",
        reqAddIngredient,
        httpOptions1
      )
      .pipe(
        tap((resOnlyMessage: ResOnlyMessage) => {
          console.log(`res add ingredient:${resOnlyMessage}`);
        }),
        catchError(this.handleError<ResOnlyMessage>("addIngredient"))
      );
  }

  /* API request for adding instructions */
  addInstruction(
    reqAddInstruction: ReqAddInstruction
  ): Observable<ResOnlyMessage> {
    var httpOptions1 = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.MGBf-reNrHdQuwQzRDDNPMo5oWv4GlZKlDShFAAe16s",
      }),
    };
    return this.http
      .post(
        this.baseUrl + "recipe/add-instruction",
        reqAddInstruction,
        httpOptions1
      )
      .pipe(
        tap((resOnlyMessage: ResOnlyMessage) => {
          console.log(`res add Instruction:${resOnlyMessage}`);
        }),
        catchError(this.handleError<ResOnlyMessage>("addInstruction"))
      );
  }

  /* API request for deleting ingredient */
  deleteIngredient(deleteIngredient: ReqDeleteIngredient) {
    var httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.MGBf-reNrHdQuwQzRDDNPMo5oWv4GlZKlDShFAAe16s",
      }),
    };

    return this.http
      .post(
        this.baseUrl + "recipe/rm-ingredient",
        deleteIngredient,
        httpOptions
      )
      .pipe(
        tap((resOnlyMessage: ResOnlyMessage) => {
          console.log(`res delete Ingredient:${resOnlyMessage}`);
        }),
        catchError(this.handleError<ResOnlyMessage>("rmIngredient"))
      );
  }

  /* API request for deleting instruction */
  deleteInstruction(deleteInstruction: ReqDeleteInstruction) {
    var httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.MGBf-reNrHdQuwQzRDDNPMo5oWv4GlZKlDShFAAe16s",
      }),
    };

    return this.http
      .post(
        this.baseUrl + "recipe/rm-instruction",
        deleteInstruction,
        httpOptions
      )
      .pipe(
        tap((resOnlyMessage: ResOnlyMessage) => {
          console.log(`res delete Instruction:${resOnlyMessage}`);
        }),
        catchError(this.handleError<ResOnlyMessage>("rmInstruction"))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
