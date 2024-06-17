import { ElementRef, EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientAdded = new EventEmitter<Ingredient>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Potatoes', 15),
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(nameInputRef: ElementRef, amountInputRef: ElementRef) {
    let name = nameInputRef.nativeElement.value;
    let amount = amountInputRef.nativeElement.value;

    if (!name || !amount) {
      alert('Please enter a valid name and amount');

      return;
    }

    const newIngredient = new Ingredient(name, amount);

    this.ingredientAdded.emit(newIngredient);

    alert('Ingredient added');

    nameInputRef.nativeElement.value = '';
    amountInputRef.nativeElement.value = '';
  }
}
