import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Order{
  constructor(
    public _id: String,
    public customerId: String,
    public customerName: String,
    public carName: String,
    public carNumber: String,
    public custAddress: String,
    public serviceName:string,
    public servicePrice:string,
    public washerId:string,
    public requestedOn:Date,
    public deliveredOn:Date,
    public status:string

  ){

  }
}


@Component({
  selector: 'app-washer-orders',
  templateUrl: './washer-orders.component.html',
  styleUrls: ['./washer-orders.component.css']
})
export class WasherOrdersComponent implements OnInit {

  orders:Order[]=[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(){
    this.httpClient.get<any>('http://localhost:4002/washer/orders/findMyOrders/60b1384ef469a343e8ba5f56').subscribe(
      response=>{
        console.log(response);
       this.orders=response.order;
     
      }
    );
}
}
