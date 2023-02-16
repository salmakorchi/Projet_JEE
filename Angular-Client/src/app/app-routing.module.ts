import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'products', loadChildren:()=>import("./products/products.module").then((m)=>m.ProductsModule) },
  {path: 'categories', loadChildren:()=>import("./categories/categories.module").then((m)=>m.CategoriesModule) },
  {path: 'customers', loadChildren:()=>import("./customers/customers.module").then((m)=>m.CustomersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
