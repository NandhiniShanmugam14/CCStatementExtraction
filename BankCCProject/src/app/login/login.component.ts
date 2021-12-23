import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from '../models/register.model';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Register = {
    name:'',
    email:'',
    password:''
  }

  constructor(private obj : RegisterService, private router: Router) { }

  ngOnInit(): void {
  }

  post_api(login:Register):void
  {
    this.obj. Login(login).subscribe(data=>
      {
        const token=data;
        localStorage.setItem("Name",login.name);
        localStorage.setItem("jwt",token);      
        this.router.navigate(['/home']);
      })
  }

}
