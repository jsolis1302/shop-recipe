import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is a simple test','https://pixabay.com/p-1459693/?no_redirect'),
    new Recipe('Another Recipe','This is another simple test','https://www.flickr.com/photos/missrogue/8546806986')

  ];
  constructor() { }

  ngOnInit() {
  }

}
