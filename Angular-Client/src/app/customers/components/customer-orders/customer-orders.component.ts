import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css']
})
export class CustomerOrdersComponent implements OnInit {

  orders : any
  customerId! : number

  constructor(private api : HttpClient, private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.customerId = this.route.snapshot.params["customerid"]
    this.getOrders()
  }

  getOrders()
  {
    this.api.get("http://localhost:9999/ORDER-SERVICE/ordersbyCustomerid/" + this.customerId).subscribe(
      {
        next : (res) => {
          this.orders = res
          //console.log(res)
        },
       error : (err) => {
        console.log(err)
       }
        
      }
    )
  }

  gotoOrderDetails(id : string)
  {
    this.router.navigateByUrl("/customers/order-details/" + id)
  }

}
