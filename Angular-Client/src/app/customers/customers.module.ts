import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomerOrdersComponent } from './components/customer-orders/customer-orders.component';
import { CustomerOrderDetailsComponent } from './components/customer-order-details/customer-order-details.component';


@NgModule({
  declarations: [
    CustomersComponent,
    CustomerOrdersComponent,
    CustomerOrderDetailsComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
