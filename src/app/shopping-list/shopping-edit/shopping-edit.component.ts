import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ShoppingListService } from '../../shared/services/shopping-list.service';
import { Ingredient } from '../../shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.scss'
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  onAddIngredient() {
    let name = this.nameInputRef.nativeElement.value;
    let amount = this.amountInputRef.nativeElement.value;

    if (!name || !amount) {
      alert('Please enter a valid name and amount');

      return;
    }

    this.shoppingListService.addIngredient(new Ingredient(name, amount));

    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = '';

    alert('Ingredient added');
  }
}
