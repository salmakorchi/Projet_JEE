import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {path: '', component : ProductsComponent  },
  {path: 'list', component : ProductsListComponent  },
  {path: 'create', component : CreateProductComponent  },
  {path: 'list/:id', component : ProductsComponent  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
