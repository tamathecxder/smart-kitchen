import { Component } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';
import { ShoppingListService } from '../shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss',
  providers: [ShoppingListService]
})
export class ShoppingListComponent {
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {
    this.ingredients = this.shoppingListService.getIngredients();
  }

  ngOnInit() {
    this.shoppingListService.ingredientAdded.subscribe((ingredient: Ingredient) => {
      this.ingredients.push(ingredient);
    })
  }
}
