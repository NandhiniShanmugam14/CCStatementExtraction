import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Upload } from '../models/upload.model';
import { UploadService } from '../service/upload.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  successmsg = '';
  errormsg = '';

  user:Upload=
  {
    file:[]
  }

  constructor(private uploadService: UploadService) { }

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
        this.successmsg="Hi!! your file was uploaded successfully"
        this.errormsg=''
      }, (error) => {
        this.errormsg = 'Error in Uploading the data!! Please check your pdf statement';
        this.successmsg=''
      }
    )

  }

}
