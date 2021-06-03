import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../order.service';


export class Car{
  constructor(
    public _id : String,
    public name: String
  ){

  }
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  selectedcar:any='';
  cars:Car[]=[];

  constructor(
    private httpClient: HttpClient,private router:Router,private orderservice:OrderService) { }

  ngOnInit(): void {
    this.getCar();
  }

  getCar(){
    this.httpClient.get<any>('http://localhost:4003/admin/car-func/findAll').subscribe(
      response=>{
        console.log(response);
       this.cars=response;
        
      }
    );
    }

    buttonChangeHandler (event:any){
      this.selectedcar=event.target.value;
      console.log(this.selectedcar);
      this.orderservice.emit<any>(this.selectedcar);
      this.gotomodel('package');
      //this.router.navigate(['carmodel']);
      
    }
    gotomodel(pageName:string):void{
      this.router.navigate([`${pageName}`])
  
    }
  

    gotopackage(pageName:String):void{
      this.router.navigate([`${pageName}`])
    }
  }

