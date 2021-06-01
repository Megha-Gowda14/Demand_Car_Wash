import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-signup-login',
  templateUrl: './signup-login.component.html',
  styleUrls: ['./signup-login.component.css']
})
export class SignupLoginComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private authService:AuthServiceService,private router:Router) { }

  ngOnInit(){
    this.initForm();
    }
  initForm(){
    this.formGroup = new FormGroup({
      email : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required])
    });
  }

}
