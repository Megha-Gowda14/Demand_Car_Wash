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
    this.httpClient.get<any>('http://localhost:4003/admin/car-services/findAll').subscribe(
      response=>{
        console.log(response);
       this.orders=response.order;
     
      }
    );
}

}
