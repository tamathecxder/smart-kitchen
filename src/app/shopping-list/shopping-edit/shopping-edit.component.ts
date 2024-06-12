import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.scss'
})
export class ShoppingEditComponent {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;

  onAddIngredient() {
    let name = this.nameInputRef.nativeElement.value;
    let amount = this.amountInputRef.nativeElement.value;

    if (!name || !amount) {
      alert('Please enter a valid name and amount');

      return;
    }

    const newIngredient = new Ingredient(name, amount);

    this.ingredientAdded.emit(newIngredient);

    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = '';

    alert('Ingredient added');
  }
}
