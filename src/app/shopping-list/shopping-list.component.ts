import { Component, Input } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';
import { ShoppingListService } from '../shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss',
  providers: [ShoppingListService]
})
export class ShoppingListComponent {
  @Input() ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.shoppingListService.ingredientAdded.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }
}
