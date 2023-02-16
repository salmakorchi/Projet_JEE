import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { appendFile } from 'fs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products : any;

  constructor(private api : HttpClient) { }

  ngOnInit(): void {
    this.get()
  }

  get()
  {
    this.api.get("http://localhost:9999/PRODUCT-SERVICE/products?projection=full").subscribe(
      {
        next : (res) => {
          this.products = res
          console.log(res)
        },
       error : (err) => {
        console.log(err)
       }
        
      }
    )
  }
}
