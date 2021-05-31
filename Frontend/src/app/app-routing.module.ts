import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupLoginComponent  } from './signup-login/signup-login.component';
import { HomeComponent} from './home/home.component';


const routes: Routes = [
  {path:'',component: SignupLoginComponent},
  {path:'home',component:HomeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
