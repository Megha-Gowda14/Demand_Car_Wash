import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { SignupLoginComponent  } from './signup-login/signup-login.component';
import { HomeComponent} from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { WasherComponent } from './washer/washer.component';
import { AdminComponent } from './admin/admin.component';
import { PackageComponent } from './package/package.component';
import { MemberComponent } from './member/member.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'customer',component: CustomerComponent},
  {path:'washer',component:WasherComponent},
  {path:'admin',component:AdminComponent},
  {path:'package' , component:PackageComponent},
  {path:'member',component:MemberComponent},
  {path:'orders',component:OrdersComponent},
  {path:'order-summary',component:OrderSummaryComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
