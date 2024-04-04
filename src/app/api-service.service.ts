import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService implements OnInit {

  constructor(private http:HttpClient) { 
  }
  ngOnInit(): void {
  }
sendCustomerDetails(details:any): Observable<any>{
  return this.http.post("http://localhost:3000/createUser", details);
}
}
