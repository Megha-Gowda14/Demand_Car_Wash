import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
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
  car!:Car;
  editForm!: FormGroup;

  constructor(
    private httpClient: HttpClient,
    private modalService: NgbModal,
    private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getCar();

    this.editForm = this.fb.group({
       _id: [''],
       name: ['']
    });
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
      console.log(f.value);
      const url = 'http://localhost:4003/admin/car-func/addCar';
      this.httpClient.post(url, f.value)
        .subscribe((result) => {
          this.ngOnInit(); //reload the table
        });
      this.modalService.dismissAll(); //dismiss the modal
    }

    openEdit(targetModal: any,car:Car){
      this.modalService.open(targetModal,{
        centered: true,
        backdrop: 'static',
        size: 'lg'
      });
      this.editForm.patchValue( {
        _id: car._id, 
        name: car.name,
      });
    }
    onSave() {
      const editURL = 'http://localhost:4003/admin/car-func/updateCar/'+ this.editForm.value._id;
      console.log(this.editForm.value);
      this.httpClient.put(editURL, this.editForm.value)
        .subscribe((result) => {
          this.ngOnInit();
        });
          this.modalService.dismissAll();
        
    }
  }
