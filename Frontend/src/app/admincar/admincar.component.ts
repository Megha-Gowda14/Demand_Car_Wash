import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';



export class Car{
  constructor(
    public _id : String,
    public name: String
  ){

  }
}


@Component({
  selector: 'app-admincar',
  templateUrl: './admincar.component.html',
  styleUrls: ['./admincar.component.css']
})
export class AdmincarComponent implements OnInit {

  cars:Car[]=[];

  constructor(private httpClient: HttpClient) { }

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
}
