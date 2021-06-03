import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {baseUrl, wUrl} from './../environments/environment';
import {url} from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }

  login(data : any): Observable<any> {
    console.log('Customer Login');
    return this.http.post(`${baseUrl}/auth/login`,data);
  }

  memberlogin(data: any):Observable<any>{
    console.log("Admin Login")
    return this.http.post(`${url}/auth/login`,data);
  }

  washerlogin(data: any):Observable<any>{
    console.log("Washer Login")
    return this.http.post(`${wUrl}/auth/login`,data);
  }
  
}
