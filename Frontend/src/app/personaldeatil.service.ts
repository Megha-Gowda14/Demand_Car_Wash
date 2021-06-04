import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaldetailService {

  public _subject=new BehaviorSubject<any>('');
 
   emit<T>(data:T){
     this._subject.next(data);
   }
 
   on<T>():Observable<T>{
     return this._subject.asObservable();
   }
 }
