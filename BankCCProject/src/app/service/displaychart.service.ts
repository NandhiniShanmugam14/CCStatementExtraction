import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, tap } from "rxjs/operators";
import { Observable } from 'rxjs';
import { Upload } from '../models/upload.model';

@Injectable({
  providedIn: 'root'
})
export class DisplaychartService {
  // req:string = 'http://localhost:8000/';
  constructor() { }

  // getAllCake():Observable<Upload[]>
  // {
  //   return this._http.get<Upload[]>(this.req,{
  //     headers:new HttpHeaders({
  //       'Content-Type':'application/json;charset=UTF-8',
  //       'Access-Control-Allow-Origin':'*',
  //       'Access-Control-Allow-Method':'*'
  //     })
  //   });
  // }

  // userDetails() {
  //   return this._http.get('http://localhost:8000/')
  //   .pipe(map(result => result));
  // }

}
