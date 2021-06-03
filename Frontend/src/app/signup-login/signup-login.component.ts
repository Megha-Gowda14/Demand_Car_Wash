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

  login(){
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe(result=>{
        if(result.role=="CUSTOMER"){
          console.log(result);
          alert(result.message);
          this.router.navigate(['customer']);
          }else{
            console.log(result);
            alert(result.message);
          }
      });
    }
  }
 /* gotohomepage(pageName:string):void{
  this.router.navigate([`${pageName}`])
}*/
gotomember(pageName:string):void{
  this.router.navigate([`${pageName}`])
}
}
