import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Order{
  constructor(
    public _id: String,
    public name: String,
    public email: String,
    public carType: String,
    public serviceplan: String,
    public vehiclenumber: String,
    public address:string,
    public requestedOn:Date,
    public deliveredOn:Date,
    public status:string
  ){

  }
}

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {

  orders:Order[]=[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(){
    this.httpClient.get<any>('http://localhost:4004/order/findorders').subscribe(
      response=>{
        console.log(response);
       this.orders=response.orders;
      }
    );
}

}
