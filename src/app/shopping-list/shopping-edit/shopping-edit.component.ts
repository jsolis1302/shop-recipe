import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,

} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html'
  
})
export class ShoppingListEditComponent implements OnInit {
  //@ViewChild('nameInput') nameInputRef: ElementRef;
  //@ViewChild('amountInput') amountInputRef: ElementRef;
  
  

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    
    const newIngredient = new Ingredient(value.name, value.amount);
    this.shoppingListService.addIngredient(newIngredient);
    console.log(form.value);
    
  }

}
