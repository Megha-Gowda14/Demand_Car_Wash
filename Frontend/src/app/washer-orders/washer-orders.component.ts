import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import {ModalDismissReasons,NgbModal} from '@ng-bootstrap/ng-bootstrap';

export class Order{
  constructor(
    public _id: String,
    public name: String,
    public email: String,
    public carType: String,
    public serviceplan: String,
    public vehiclenumber: String,
    public address:string,
    public requestedOn:Date,
    public deliveredOn:Date,
    public status:string
  ){

  }
}


@Component({
  selector: 'app-washer-orders',
  templateUrl: './washer-orders.component.html',
  styleUrls: ['./washer-orders.component.css']
})
export class WasherOrdersComponent implements OnInit {

  closeResult!: string;
  orders:Order[]=[];
  order!:Order;
  editForm!: FormGroup;

  constructor(private httpClient: HttpClient,
    private modalService: NgbModal,
    private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getOrders();

    this.editForm = this.fb.group({
      _id: [''],
      name: [''],
      email:[''],
      carType:[''],
      serviceplan:[''],
      vehiclenumber:[''],
      address:[''],
      requestedOn:[''],
      deliveredOn:[''],
      status:[''],
   });
  }

  getOrders(){
    this.httpClient.get<any>('http://localhost:4004/order/findorders').subscribe(
      response=>{
        console.log(response);
        this.orders=response.orders;
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

openEdit(targetModal: any,order:Order){
  this.modalService.open(targetModal,{
    centered: true,
    backdrop: 'static',
    size: 'lg'
  });
  this.editForm.patchValue( {
    _id: order._id,
    name: order.name,
    email: order.email,
    carType: order.carType,
    serviceplan: order.serviceplan,
    vehiclenumber: order.vehiclenumber,
    address: order.address,
    requestedOn: order.requestedOn,
    deliveredOn: order.deliveredOn,
    status: order.status,
  });
}

onSave() {
  const editURL = 'http://localhost:4004/order/updateOrder/' + this.editForm.value._id;
  console.log(this.editForm.value);
  this.httpClient.put(editURL, this.editForm.value)
    .subscribe((result) => {
      this.ngOnInit();
    });
      this.modalService.dismissAll();
}
}

