import { Component, OnInit } from '@angular/core';
import { OrderService} from '../order.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonaldetailService } from '../personaldeatil.service';
import { ServiceplanService } from '../serviceplan.service';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { CheckoutService } from '../checkout.service';
import { MybookingsService } from '../mybookings.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public cartype=''; 
  public serviceplanchosen='';
  public personaldetails:any='';
  orderform:FormGroup;
  public bookingaction:any='';

  constructor(private orderservice: OrderService,
    private personaldetail:PersonaldetailService,
    private serviceplan:ServiceplanService,
    private formbuilder:FormBuilder,
    private http:HttpClient,
    private checkoutservice:CheckoutService,
    private booking:MybookingsService,
    private router:Router,
    private modalService: NgbModal ) {
      this.orderform=formbuilder.group({
        name:[''],
        email:[''],
        carType:[''],
        serviceplan:[''],
        vehiclenumber:['',Validators.required],
        address:['',Validators.required],
        contactnumber:['',Validators.required]
      });
      }

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

    this.orderform.patchValue({
      name:this.personaldetails.name,
      email:this.personaldetails.email,
      carType:this.cartype,
      serviceplan:this.serviceplanchosen
    })
}

orderdata(){
  console.log(this.orderform.value);
  alert('YOUR ORDER HAS BEEN PLACED');
  this.checkoutservice.placeorder(this.orderform.value)
  .subscribe(
    response=>console.log('success',response)
  );
  this.booking.emit<any>(this.orderform.value);
  this.trackorder();
}
trackorder(){
  this.router.navigate(['order-summary'])
}
}
