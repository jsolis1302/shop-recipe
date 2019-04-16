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
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  
  

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
   this.subscription= this.shoppingListService.startedEditing.subscribe(
     (index: number) => {
       this.editedItemIndex = index;
       this.editMode = true;
       this.editedItem = this.shoppingListService.getIngredient(index);
       this.slForm.setValue(
         {
           name:this.editedItem.name,
           amount: this.editedItem.amount
         })
     }
   );
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode){
      this.shoppingListService.updateIngredients(this.editedItemIndex,newIngredient);

    }
    else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    form.reset();
    this.editMode = false;
    console.log(form.value);
    
  }

  onClear(){
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.shoppingListService.deleteIngredients(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
