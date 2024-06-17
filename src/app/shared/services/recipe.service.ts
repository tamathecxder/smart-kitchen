import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

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
      [],
    ),
    new Recipe(
      'Mie Ayam',
      'A traditional Indonesian dish made with Ayam goreng and noodles',
      'https://images.tokopedia.net/img/KRMmCm/2022/8/15/a4b7d013-9438-46b2-906b-4c374ec82236.jpg',
      [],
    ),
    new Recipe(
      'Pasta Carbonara',
      'Creamy Italian pasta with bacon and cheese',
      'https://www.masakapahariini.com/wp-content/uploads/2020/12/spaghetti-carbonara.jpg',
      [],
    ),
    new Recipe(
      'Sushi',
      'Assorted sushi platter with fresh fish and vegetables',
      'https://cdn.britannica.com/52/128652-050-14AD19CA/Maki-zushi.jpg',
      [],
    ),
    new Recipe(
      'Tacos',
      'Mexican tacos with beef, cheese, and vegetables',
      'https://www.austinchronicle.com/binary/81b5/xtra_feature6.jpg',
      [],
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor() { }
}
