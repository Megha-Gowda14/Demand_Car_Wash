import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  selector: 'app-adminservices',
  templateUrl: './adminservices.component.html',
  styleUrls: ['./adminservices.component.css']
})
export class AdminservicesComponent implements OnInit {

  services:Service[]=[];

  constructor(private httpClient: HttpClient) { }

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
}
