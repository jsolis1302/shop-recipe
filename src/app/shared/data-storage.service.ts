import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";

@Injectable({providedIn:'root'})
export class DataStorageService{ 
    constructor(private http: HttpClient, private recipeService: RecipeService){}
    storeRecipes() {
        const recipies = this.recipeService.getRecipes();
        this.http.put('https://ng-course-recipe-book-f735a.firebaseio.com/recipes.json',recipies)
        .subscribe(response => {
            console.log(response);
        });
    }

    fetchRecipes(){
        this.http
        .get<Recipe[]>('https://ng-course-recipe-book-f735a.firebaseio.com/recipes.json')
        .subscribe(recipes => {
            //console.log(recipies);
            this.recipeService.setRecipes(recipes);
        });
    }

}