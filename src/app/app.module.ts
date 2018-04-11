import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyappHeaderComponent } from './Header/myapp-header/myapp-header.component';
import { MyappShoppingListComponent } from './Header/myapp-header/ShoppingList/myapp-shopping-list/myapp-shopping-list.component';
import { MyappRecipeComponent } from './Header/myapp-header/Recipe/myapp-recipe/myapp-recipe.component';
import { RecipeListComponent } from './Header/myapp-header/Recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './Header/myapp-header/Recipe/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './Header/myapp-header/Recipe/recipe-list/recipe-item/recipe-item.component';


@NgModule({
  declarations: [
    AppComponent,
    MyappHeaderComponent,
    MyappShoppingListComponent,
    MyappRecipeComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
