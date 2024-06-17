import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Risotto',
      'Risotto with chicken and vegetables',
      'https://theroanoker.com/downloads/9393/download/The-Roanoker-2023-May-June-Spring-Asparagus-and-Green-Pea-Risotto-2.jpg?cb=e642b268fd5af7da2cb32f85bea5b9ac',
      [
        new Ingredient('Rice', 1),
        new Ingredient('Chicken', 1),
        new Ingredient('Vegetables', 1),
        new Ingredient('Parmesan cheese', 0.5),
        new Ingredient('Chicken broth', 4),
        new Ingredient('Olive oil', 0.2),
        new Ingredient('Onion', 1),
        new Ingredient('Garlic', 2),
        new Ingredient('Butter', 0.5),
      ],
    ),
    new Recipe(
      'Mie Ayam',
      'A traditional Indonesian dish made with Ayam goreng and noodles',
      'https://images.tokopedia.net/img/KRMmCm/2022/8/15/a4b7d013-9438-46b2-906b-4c374ec82236.jpg',
      [
        new Ingredient('Noodles', 1),
        new Ingredient('Chicken', 1),
        new Ingredient('Soy sauce', 0.2),
        new Ingredient('Garlic', 3),
        new Ingredient('Ginger', 1),
        new Ingredient('Spring onion', 1),
        new Ingredient('Bok choy', 2),
        new Ingredient('Chicken broth', 2),
        new Ingredient('Sweet soy sauce', 0.2),
        new Ingredient('Fried shallots', 0.1),
      ],
    ),
    new Recipe(
      'Pasta Carbonara',
      'Creamy Italian pasta with bacon and cheese',
      'https://www.masakapahariini.com/wp-content/uploads/2020/12/spaghetti-carbonara.jpg',
      [
        new Ingredient('Spaghetti', 1),
        new Ingredient('Bacon', 0.5),
        new Ingredient('Eggs', 2),
        new Ingredient('Parmesan cheese', 1),
        new Ingredient('Black pepper', 0.05),
        new Ingredient('Salt', 0.05),
        new Ingredient('Olive oil', 0.1),
        new Ingredient('Garlic', 2),
      ],
    ),
    new Recipe(
      'Sushi',
      'Assorted sushi platter with fresh fish and vegetables',
      'https://cdn.britannica.com/52/128652-050-14AD19CA/Maki-zushi.jpg',
      [
        new Ingredient('Sushi rice', 1),
        new Ingredient('Nori', 5),
        new Ingredient('Raw fish', 0.5),
        new Ingredient('Cucumber', 1),
        new Ingredient('Avocado', 1),
        new Ingredient('Soy sauce', 0.2),
        new Ingredient('Wasabi', 0.05),
        new Ingredient('Pickled ginger', 0.1),
        new Ingredient('Rice vinegar', 0.1),
      ],
    ),
    new Recipe(
      'Tacos',
      'Mexican tacos with beef, cheese, and vegetables',
      'https://www.austinchronicle.com/binary/81b5/xtra_feature6.jpg',
      [
        new Ingredient('Taco shells', 8),
        new Ingredient('Ground beef', 1),
        new Ingredient('Cheddar cheese', 1),
        new Ingredient('Lettuce', 0.5),
        new Ingredient('Tomatoes', 2),
        new Ingredient('Onion', 1),
        new Ingredient('Taco seasoning', 0.1),
        new Ingredient('Sour cream', 0.2),
        new Ingredient('Salsa', 0.2),
        new Ingredient('Cilantro', 0.1),
        new Ingredient('Lime', 1),
      ],
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  passIngredients(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
