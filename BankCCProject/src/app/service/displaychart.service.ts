import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, tap } from "rxjs/operators";
import { Observable } from 'rxjs';
import { Upload } from '../models/upload.model';
import * as d3 from "d3";

@Injectable({
  providedIn: 'root'
})
export class DisplaychartService {
  public d3 = d3;
  // req:string = 'http://localhost:8000/';
  constructor() { }

  public generateId(length: number): string {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

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
