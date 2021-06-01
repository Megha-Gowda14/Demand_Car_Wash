import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupLoginComponent  } from './signup-login/signup-login.component';
import { HomeComponent} from './home/home.component';
import { CustomerComponent } from './customer/customer.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'customer',component: CustomerComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
