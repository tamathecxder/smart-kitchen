import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Risotto', 'Risotto with chicken and vegetables', 'https://theroanoker.com/downloads/9393/download/The-Roanoker-2023-May-June-Spring-Asparagus-and-Green-Pea-Risotto-2.jpg?cb=e642b268fd5af7da2cb32f85bea5b9ac'),
  ];
}
