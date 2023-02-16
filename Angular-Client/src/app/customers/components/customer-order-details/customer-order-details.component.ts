import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-order-details',
  templateUrl: './customer-order-details.component.html',
  styleUrls: ['./customer-order-details.component.css']
})
export class CustomerOrderDetailsComponent implements OnInit {

  orderId! : number
  order : any
  constructor(private api : HttpClient, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.orderId = this.route.snapshot.params["orderid"]
    this.getOrder()
  }

  getOrder()
  {
    this.api.get("http://localhost:9999/ORDER-SERVICE/orders/" + this.orderId).subscribe(
      {
        next : (res) => {
          this.order = res
          //console.log(res)
        },
       error : (err) => {
        console.log(err)
       }
        
      }
    )
  }

}
