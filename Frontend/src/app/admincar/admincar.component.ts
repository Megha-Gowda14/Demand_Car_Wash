import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ModalDismissReasons,NgbModal} from '@ng-bootstrap/ng-bootstrap';


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

  closeResult!: string;
  cars:Car[]=[];
  

  constructor(
    private httpClient: HttpClient,
    private modalService: NgbModal) { }

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

    open(content: any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
    
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }

    onSubmit(f: NgForm) {
      const url = 'http://localhost:4003/admin/car-func/addCar';
      this.httpClient.post(url, f.value)
        .subscribe((result) => {
          this.ngOnInit(); //reload the table
        });
      this.modalService.dismissAll(); //dismiss the modal
    }
}
