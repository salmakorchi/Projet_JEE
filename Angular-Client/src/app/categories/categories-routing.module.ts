import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CreateCategorieComponent } from './components/create-categorie/create-categorie.component';
import { EditCategorieComponent } from './components/edit-categorie/edit-categorie.component';

const routes: Routes = [
  {path: '', component : CategoriesComponent },
  {path: 'list', component : CategoriesListComponent },
  {path: 'create', component : CreateCategorieComponent },
  {path: 'list/:id', component : EditCategorieComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
