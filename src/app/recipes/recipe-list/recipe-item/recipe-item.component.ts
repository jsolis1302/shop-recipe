import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() item: Recipe;
  //@Output() recipeSelected = new EventEmitter<void>();
  //constructor(private recipeService: RecipeService) { }
  @Input() index: number;

  ngOnInit() {
  }
  // onSelected(recipe: Recipe){
  //   //this.recipeSelected.emit();
  //   this.recipeService.recipeSelected.emit(this.item);

  // }

}
