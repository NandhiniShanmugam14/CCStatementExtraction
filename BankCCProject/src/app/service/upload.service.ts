import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Upload } from '../models/upload.model';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private req ="http://localhost:8000";

  constructor(private httpClient: HttpClient) { }

  postFiles(user:Upload):Observable<any>
  {
    const formData:FormData = new FormData();
    formData.append("file",user.file)
    return this.httpClient.post(this.req+"/pdf",formData)
  }
}
