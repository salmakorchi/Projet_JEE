import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers : any
  constructor(private api : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.get()
  }


  get()
  {
    this.api.get("http://localhost:9999/CUSTOMER-SERVICE/customers?projection=full").subscribe(
      {
        next : (res) => {
          this.customers = res
          //console.log(res)
        },
       error : (err) => {
        console.log(err)
       }
        
      }
    )
  }

  gotoCustomerOrders(id : number)
  {
    this.router.navigateByUrl("/customers/" + id + "/orders")
  }

}
