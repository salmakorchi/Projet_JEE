import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerOrderDetailsComponent } from './components/customer-order-details/customer-order-details.component';
import { CustomerOrdersComponent } from './components/customer-orders/customer-orders.component';
import { CustomersComponent } from './components/customers/customers.component';

const routes: Routes = [
  {
    path: '', component : CustomersComponent
  },
  {
    path: ':customerid/orders', component : CustomerOrdersComponent
  },
  {
    path: 'order-details/:orderid', component : CustomerOrderDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
