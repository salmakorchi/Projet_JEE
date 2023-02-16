import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './components/categories/categories.component';
import { CreateCategorieComponent } from './components/create-categorie/create-categorie.component';
import { EditCategorieComponent } from './components/edit-categorie/edit-categorie.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';


@NgModule({
  declarations: [
    CategoriesComponent,
    CreateCategorieComponent,
    EditCategorieComponent,
    CategoriesListComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
