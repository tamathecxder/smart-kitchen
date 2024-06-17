import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { SuccessAlertComponent } from './ui/success-alert/success-alert.component';
import { ErrorAlertComponent } from './ui/error-alert/error-alert.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { NavigationService } from './shared/services/navigation.service';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListService } from './shared/services/shopping-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    SuccessAlertComponent,
    ErrorAlertComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [NavigationService, ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
