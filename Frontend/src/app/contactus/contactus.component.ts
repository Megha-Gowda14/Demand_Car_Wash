import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  formGroup!: FormGroup;
  
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.initForm();
   }
   initForm(){
    this.formGroup = new FormGroup({
      first_name:new FormControl('',[Validators.required]),
      last_name : new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.required]),
      message : new FormControl('',[Validators.required]),
    });
  }

  OnSubmit()
  {
    alert("Form Submitted Successfully,Will Reach you Shortly");
    this.formGroup.reset({})
  }
}
