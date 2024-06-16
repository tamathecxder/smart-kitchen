import { Component } from '@angular/core';
import { Recipe } from '../shared/models/recipe.model';
import { RecipeService } from '../shared/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
  providers: [RecipeService],
})
export class RecipesComponent {
  selectedRecipe: Recipe;

  onRecipeWasSelected(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
