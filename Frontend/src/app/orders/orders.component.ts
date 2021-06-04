import { Component, OnInit } from '@angular/core';
import { OrderService} from '../order.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonaldetailService } from '../personaldeatil.service';
import { ServiceplanService } from '../serviceplan.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public cartype=''; 
  public serviceplanchosen='';
  public personaldetails:any='';

  constructor(private orderservice: OrderService,private personaldetail:PersonaldetailService,private serviceplan:ServiceplanService ) { }

  ngOnInit(): void {
    this.orderservice.on<any>().subscribe(data=>{
      //console.log(data);
      this.cartype=data;
      //this.serviceplan=data;
    });
    this.serviceplan.on<any>().subscribe(data=>{
     // console.log(data);
      this.serviceplanchosen=data;
    });
    this.personaldetail.on<any>().subscribe(data=>{
     // console.log(data);
      this.personaldetails=data;
    });
}

orderplaced(){

}

}
