import {Component,OnInit,ViewChild, EventEmitter,Output, ElementRef} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';


@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html'
})

export class ShoppingListEditComponent implements OnInit{
    @ViewChild('nameInput') nameInputRef: ElementRef ;
    @ViewChild('amountInput') amountInputRef: ElementRef ;
    @Output() ingredientAdded = new EventEmitter<Ingredient>();
    constructor() {}
    ngOnInit(){

    }
    onAddItem(nameInput: HTMLInputElement){
        const ingName = this.nameInputRef.nativeElement.value;
        const ingAmount = this.amountInputRef.nativeElement.value;
        const newIngredient = new Ingredient(ingName,ingAmount);
        this.ingredientAdded.emit(newIngredient);

    }
}