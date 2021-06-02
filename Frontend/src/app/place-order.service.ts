import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { url } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlaceOrderService {

  constructor(private http:HttpClient) { }

  login(data: any):Observable<any>{
    return this.http.post(`${url}auth/login`,data);
  }
}
