import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MybookingsService } from '../mybookings.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  bookings:any='';

  constructor(private http: HttpClient,private booking:MybookingsService) { }

  ngOnInit(): void {
    this.booking.on<any>().subscribe((data: any)=>{
      this.bookings=data;
    })
}

  }

