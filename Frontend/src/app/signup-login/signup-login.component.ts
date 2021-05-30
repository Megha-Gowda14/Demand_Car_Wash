import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-signup-login',
  templateUrl: './signup-login.component.html',
  styleUrls: ['./signup-login.component.css']
})
export class SignupLoginComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private authService:AuthServiceService) { }

  ngOnInit(){
    this.initForm();
    }
  initForm(){
    this.formGroup = new FormGroup({
      email : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required])
    })
  }
  loginProcess(){
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe(result=>{
        if(result.success){
          console.log(result);
          alert(result.message);
        }
        else{
          alert(result.message);
        }
      })
    }
  }

}
