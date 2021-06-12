import { Component, OnInit } from '@angular/core';
import { StripeCardComponent, StripeService} from "ngx-stripe";
import { StripeCardElementOptions,StripeElementsOptions } from '@stripe/stripe-js';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  [x: string]: any;
  public pays:any=[];
  public washeraction:any=[];
  elementsOptions: StripeElementsOptions = {
    locale: 'es'
  };

  constructor(private stripeService: StripeService,private http:HttpClient) { }

  ngOnInit(): void {
    this.mybooking.on().subscribe((data: any)=>{
      this.pays=data;
    });

    this.washer.on().subscribe((data: any)=>{
     this.washeraction=data;
     console.log(data);
     
    });
  }
  pay(amount: any) {    
 
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51J1EA4SA4RatPZEoWBBET4IeBOCiSEKOsWaKshK3TNymopjf45T7tOM2IdvjhC2qpacvUhHvjS6CoKqpWBaccTm000RaunOXZm',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        alert('payment successful');
      }
    });
 
    handler.open({
      name: 'Clear Car Wash',
      description: 'car wash',
      amount: amount * 100
    });
 
  }
 
  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51J1EA4SA4RatPZEoWBBET4IeBOCiSEKOsWaKshK3TNymopjf45T7tOM2IdvjhC2qpacvUhHvjS6CoKqpWBaccTm000RaunOXZm',
          locale: 'auto',
          token: function (token: any) {
            console.log("Token is --> token.id"),
          this.http.post("http://localhost:3000/paynow",{
          token : token.id
          }).subscribe(
    (res: any)=>{
  console.log("The response from server is ",res);
  console.log('Payment Done')
            console.log(token)
            alert('Payment Success!!');
          })
        
          }
        });
      }
      window.document.body.appendChild(s);
    }
  }
}

