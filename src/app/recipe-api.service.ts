import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
import { ReqLogin } from './login/req.login';
import { ResLogin } from './login/res.login';
import { Feed } from './feed/Feed';
import { Recipe } from './recipe-detail/Recipe';
import { ResAddRecipe } from './add-recipe/res.add-recipe';
import { ReqAddRecipe } from './add-recipe/req.add-recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeApiService {

  private baseUrl = "http://35.160.197.175:3006/api/v1/"; // URL to web api
  httpOption = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http : HttpClient) { }

  login(reqLogin: ReqLogin): Observable<ResLogin> {
    return this.http.post(this.baseUrl + "user/login", reqLogin, this.httpOption).pipe(
      tap((resLogin: ResLogin) => {
        console.log(`res login:${resLogin}`)
        
      }),
      catchError(this.handleError<ResLogin>("addHero"))
    );
  }

  feeds() : Observable<any>{
    
    var httpOptions1 = {
      headers: new HttpHeaders({ "Content-Type": "application/json", 
      "Authorization" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.MGBf-reNrHdQuwQzRDDNPMo5oWv4GlZKlDShFAAe16s"}),
    };
    return this.http.get(this.baseUrl + "recipe/feeds", httpOptions1).pipe(
      tap((feeds: Feed[]) => {
        console.log(`res feeds:${feeds}`)
        
      }),
      catchError(this.handleError<Feed[]>("addHero"))
    );

  }

  addRecipe(reqAddRecipe: ReqAddRecipe): Observable<ResAddRecipe> {
    var httpOptions1 = {
      headers: new HttpHeaders({ "Content-Type": "application/json", 
      "Authorization" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.MGBf-reNrHdQuwQzRDDNPMo5oWv4GlZKlDShFAAe16s"}),
    };
    return this.http.post(this.baseUrl + "recipe/add", reqAddRecipe, httpOptions1).pipe(
      tap((resAddRecipe: ResAddRecipe) => {
        console.log(`res add recipe:${resAddRecipe}`)
        
      }),
      catchError(this.handleError<ResAddRecipe>("addHero"))
    );
  }

  recipeDetail(id : number) : Observable<Recipe>{
    
    var httpOptions1 = {
      headers: new HttpHeaders({ "Content-Type": "application/json", 
      "Authorization" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.MGBf-reNrHdQuwQzRDDNPMo5oWv4GlZKlDShFAAe16s"}),
    };
    return this.http.get(this.baseUrl + `recipe/${id}/details`, httpOptions1).pipe(
      tap((recipe: Recipe) => {
        console.log(`res recipe detail:${recipe}`)
        
      }),
      catchError(this.handleError<Recipe>("recipe detail"))
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

