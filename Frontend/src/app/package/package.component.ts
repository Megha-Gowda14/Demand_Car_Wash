import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServiceplanService } from '../serviceplan.service';


export class Service{
  constructor(
    public _id: String,
    public serviceType: String,
    public name: String,
    public price: Number,
    public description: String,
    public timeRequired: String,
    public where:string
  ){

  }
}


@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})

export class PackageComponent implements OnInit { 
  selectedservice:any ='';
  services:Service[] =[];

  constructor(private httpClient: HttpClient,private router:Router,private serviceplan:ServiceplanService) { }

  ngOnInit(): void {
    this.getServices();
  }

  getServices(){
    this.httpClient.get<any>('http://localhost:4003/admin/car-services/findAll').subscribe(
      response=>{
        console.log(response);
       this.services=response.service;
     
      }
    );
}
selectedService (event:any){
  this.selectedservice=event.target.value;
  console.log(this.selectedservice);
  this.serviceplan.emit<any>(this.selectedservice);
  this.gotoorder('orders');
}
gotoorder(pageName:string){
  this.router.navigate([`${pageName}`])
  }
}

