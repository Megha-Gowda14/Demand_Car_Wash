import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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

  cars ! : Car[];
  constructor(
    private httpClient: HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    this.httpClient.get<any>('http://localhost:4003/admin/car-func/findAll').subscribe(
      response=>{
        console.log(response);
       this.cars=response;
        
      }
    );
    }
    gotopackage(pageName:String):void{
      this.router.navigate([`${pageName}`])
    }
  }

