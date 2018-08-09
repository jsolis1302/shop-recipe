import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {

   recipeSelected = new EventEmitter<Recipe>();
   private recipes: Recipe[] = [
        new Recipe('A Test Recipe','This is a simple test','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new Recipe('Another Recipe','This is another simple test','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new Recipe('Third Recipe','This is third simple test','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
    
      ];

    getRecipes(){
        return this.recipes.slice();
    }

}