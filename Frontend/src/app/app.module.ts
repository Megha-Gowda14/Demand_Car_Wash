import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { SignupLoginComponent } from './signup-login/signup-login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerComponent } from './customer/customer.component';
import { OwlModule } from 'ngx-owl-carousel';
import { ServicesComponent } from './services/services.component';
import { WasherComponent } from './washer/washer.component';
import { AdminComponent } from './admin/admin.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { PackageComponent } from './package/package.component';
import { MemberComponent } from './member/member.component';
import { OrdersComponent } from './orders/orders.component';
import { AdmincarComponent } from './admincar/admincar.component';
import { AdminservicesComponent } from './adminservices/adminservices.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminWasherComponent } from './admin-washer/admin-washer.component';
import { WasherOrdersComponent } from './washer-orders/washer-orders.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookingsComponent } from './bookings/bookings.component';
import  { NgxStripeModule } from 'ngx-stripe';
import { OrderSummaryComponent } from './order-summary/order-summary.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupLoginComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    HeaderComponent,
    FooterComponent,
    CustomerComponent,
    ServicesComponent,
    WasherComponent,
    AdminComponent,
    PackageComponent,
    MemberComponent,
    OrdersComponent,
    AdmincarComponent,
    AdminservicesComponent,
    AdminOrdersComponent,
    AdminWasherComponent,
    WasherOrdersComponent,
    BookingsComponent,
    OrderSummaryComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatTabsModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    OwlModule,
    MatCarouselModule.forRoot(),
    NgbModule,
    NgxStripeModule.forRoot('pk_test_51J1EA4SA4RatPZEoWBBET4IeBOCiSEKOsWaKshK3TNymopjf45T7tOM2IdvjhC2qpacvUhHvjS6CoKqpWBaccTm000RaunOXZm')
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }