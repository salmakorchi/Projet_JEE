import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ProductsListComponent } from './components/products-list/products-list.component';



@NgModule({
  declarations: [
    ProductsComponent,
    CreateProductComponent,
    EditProductComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
  ]
})
export class ProductsModule { }
