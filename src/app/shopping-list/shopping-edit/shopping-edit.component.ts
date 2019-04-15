import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  OnDestroy,

} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html'
  
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  //@ViewChild('nameInput') nameInputRef: ElementRef;
  //@ViewChild('amountInput') amountInputRef: ElementRef;
  subscription: Subscription;
  
  

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
   this.subscription= this.shoppingListService.startedEditing.subscribe();
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    
    const newIngredient = new Ingredient(value.name, value.amount);
    this.shoppingListService.addIngredient(newIngredient);
    console.log(form.value);
    
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
