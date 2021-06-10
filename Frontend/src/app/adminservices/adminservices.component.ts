import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import {ModalDismissReasons,NgbModal} from '@ng-bootstrap/ng-bootstrap';

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

  closeResult!: string;
  services:Service[]=[];
  service!:Service;
  editForm!: FormGroup;
  deleteId! : String;

  constructor(private httpClient: HttpClient,
    private modalService: NgbModal,
    private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getServices();

    this.editForm = this.fb.group({
      _id: [''],
      name: [''],
      serviceType:[''],
      price:[''],
      description:[''],
      timeRequired:[''],
   });
  }

  getServices(){
    this.httpClient.get<any>('http://localhost:4003/admin/car-services/findAll').subscribe(
      response=>{
        console.log(response);
       this.services=response.service;
     
      }
    );
}

open(content:any) {
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
  const url = 'http://localhost:4003/admin/car-services/addService';
  this.httpClient.post(url, f.value)
    .subscribe((result) => {
      this.ngOnInit(); //reload the table
    });
  this.modalService.dismissAll(); //dismiss the modal
}

openEdit(targetModal: any,service:Service){
  this.modalService.open(targetModal,{
    centered: true,
    backdrop: 'static',
    size: 'lg'
  });
  this.editForm.patchValue( {
    _id: service._id, 
    name: service.name,
    serviceType:service.serviceType,
    description:service.description,
    timeRequired:service.timeRequired,
    price:service.price,
  });
}
onSave() {
  const editURL = 'http://localhost:4003/admin/car-services/updateService/'+ this.editForm.value._id;
  console.log(this.editForm.value);
  this.httpClient.put(editURL, this.editForm.value)
    .subscribe((result) => {
      this.ngOnInit();
    });
      this.modalService.dismissAll();
}

openDelete(targetModal:any, service: Service) {
  this.deleteId = service._id;
 this.modalService.open(targetModal, {
   backdrop: 'static',
   size: 'lg'
 });
}

onDelete() {
 const deleteURL = 'http://localhost:4003/admin/car-services/deleteService/' + this.deleteId;
 this.httpClient.delete(deleteURL)
   .subscribe((result) => {
     this.ngOnInit();
     this.modalService.dismissAll();
   });
}

}
