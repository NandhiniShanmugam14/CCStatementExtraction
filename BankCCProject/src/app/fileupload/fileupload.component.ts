import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Upload } from '../models/upload.model';
import { UploadService } from '../service/upload.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {
  custno=''
  progress = 0;
  successmsg = '';
  errormsg = '';

  user:Upload=
  {
    file:[]
  }

  constructor(private uploadService: UploadService, private router: Router) { }

  ngOnInit(): void {
  }

  FileDescription!: Observable<any>;
  chooseFile(event:any ): void {
    this.user.file=event.target.files[0]
    console.log(this.user)
  }  

  upload():void
  {
    this.uploadService.postFiles(this.user).subscribe(
      data=>
      {
        this.successmsg=data
        this.custno=data
        this.errormsg=''
      }, (error) => {
        this.errormsg = 'Error in Uploading the data!! Please check your pdf statement';
        this.successmsg=''
      }
    )

  }

}
