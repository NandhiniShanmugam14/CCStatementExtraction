import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  reqapi:string="https://localhost:44324/api/Authorization/Registration";
  // readonly rootUrl = 'https://localhost:44365';
  req:string="https://localhost:44365/api/Registration";
  
  constructor(private http : HttpClient) { }

  postUser(user:Register):Observable<any>
  {
    return this.http.post<any>(this.req,user,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
      })
    })
  }

  Login(login:Register):Observable<any>
  {
    return this.http.post(this.reqapi,login,
      {
        headers: new HttpHeaders({
          'Content-Type':'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin':'*',
          'Access-Control-Allow-Method':'*',    
          'Accept': 'text/html, application/xhtml+xml, */*'
    }),responseType:'text'}
    )}
}
