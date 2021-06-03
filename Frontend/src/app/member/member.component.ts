import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  formGroup!:FormGroup;

  constructor(private authService:AuthServiceService,private router:Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formGroup=new FormGroup({
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
    });
  }

  memberlogin(){
    if(this.formGroup.valid){
      this.authService.memberlogin(this.formGroup.value).subscribe(result=>{
        if(result.role=="ADMIN"){
          console.log(result);
          alert(result.message);
          this.router.navigate(['admin']);
          }else{
            alert(result.message);
          }
      });
    }
  }
  washerlogin(){
    if(this.formGroup.valid){
      this.authService.washerlogin(this.formGroup.value).subscribe(result=>{
        if(result.role=="WASHER"){
          console.log(result);
          alert(result.message);
          this.router.navigate(['washer']);
          }else{
            alert(result.message);
          }
      });
    }
  }
  /*
  gotoadmin(pageName:string):void{
    this.router.navigate([`${pageName}`])
  }*/

}
