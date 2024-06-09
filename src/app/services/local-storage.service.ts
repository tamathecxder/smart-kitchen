import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private key: string = "RECIPES";

  constructor() {
    this.init();
  }

  public init() {
    if (!localStorage.getItem(this.key)) {
      localStorage.setItem(this.key, JSON.stringify([]));
    }
  }

  public getAllRecipes() {
    return JSON.parse(localStorage.getItem(this.key) || "[]");
  }

  public getRecipe(id: number) {
    let recipes = this.getAllRecipes();
    return recipes.find((r: any) => r.id === id);
  }

  public addRecipe(recipe: any) {
    let recipes = this.getAllRecipes();
    recipes.push(recipe);
    localStorage.setItem(this.key, JSON.stringify(recipes));
  }

  public removeRecipe(recipe: any) {
    let recipes = this.getAllRecipes();
    recipes = recipes.filter((r: any) => r.name !== recipe.name);
    localStorage.setItem(this.key, JSON.stringify(recipes));
  }
}
