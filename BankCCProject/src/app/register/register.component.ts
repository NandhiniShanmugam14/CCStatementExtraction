import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Register } from '../models/register.model';
import { RegisterService } from '../service/register.service';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user!: Register;
  userregister: Register[]=[];
    users:Register={
    name:"",
    email:"",
    password:""
  };

  adduser:Register={
    name:"",
    email:"",
    password:""
  };
  constructor(private userService: RegisterService, private router: Router, private toastr : ToastrService, private jwtHelper:JwtHelperService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form? : NgForm)
  {
    if(form != null)
      form.resetForm();
    this.user = {
      name: '',
      email: '',
      password: '',
    }
  }

  post_api(reg:Register):void
  {
    this.userService.postUser(reg).subscribe(data=>
      {
        this.router.navigate(['/login']);
      });
      this.toastr.success('Record inserted succussfully', 'User');
  }

  // OnSubmit(form : NgForm)
  // {
  //   this.userService.registerUser(form.value)
  //     .subscribe((data:any) => {
  //       if(data.Succeeded == true)
  //         this.resetForm(form);          
  //   });
  //   this.router.navigate(['/login']);
  //   form.reset();
  //   this.toastr.success('Registered Successfully', 'User Register');
  // }
}
