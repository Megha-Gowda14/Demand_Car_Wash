import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router} from '@angular/router';
import { PersonaldetailService } from '../personaldeatil.service';
import { CustomersignupService } from '../customersignup.service';

@Component({
  selector: 'app-signup-login',
  templateUrl: './signup-login.component.html',
  styleUrls: ['./signup-login.component.css']
})
export class SignupLoginComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private authService:AuthServiceService,private router:Router,private personaldetail:PersonaldetailService,
    private customersignup:CustomersignupService ) { }

  ngOnInit(){
    this.initForm();
    }
  initForm(){
    this.formGroup = new FormGroup({
      name:new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.required]),
      password : new FormControl('',[Validators.required]),
    
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
    this.personaldetail.emit<any>(this.formGroup.value);
  }
 /* gotohomepage(pageName:string):void{
  this.router.navigate([`${pageName}`])
}*/
gotomember(pageName:string):void{
  this.router.navigate([`${pageName}`])
}

/*onSubmit(){
  console.log(this.formGroup.value);
}*/
signup(){
  console.log(this.formGroup.value);
  this.customersignup.custsignup(this.formGroup.value)
  .subscribe(
    response=>console.log('success',response)
  );
  alert('registration successful');
  this.router.navigate([''])
}
}
