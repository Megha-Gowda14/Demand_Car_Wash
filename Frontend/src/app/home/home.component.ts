import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  navLinks!: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Home',
        link: '/home',
        index: 0
      },
      {
        label: 'About Us',
        link: '/aboutus',
        index: 1
      },
      {
        label: 'Contact Us',
        link: '/contactus',
        index: 2
      },
      {
        label: 'LOGIN',
        link: '/login',
        index: 3
      },
    ];
   }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
}
}
