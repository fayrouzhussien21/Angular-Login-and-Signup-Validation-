import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public loginFormgroup!:FormGroup;
  constructor(private formbuilder:FormBuilder, private _http:HttpClient , private router:Router) { }

  ngOnInit(): void {
    this.loginFormgroup=this.formbuilder.group(
      {
        Email:[''],
        Password:['']
      }
    )

  }
  Login()
  {
    this._http.get<any>("http://localhost:3000/signupusers").subscribe(
    res=>{
      const user=res.find((a:any)=>{
        return a.Email===this.loginFormgroup.value.Email&&a.Password===this.loginFormgroup.value.Password
      })
      if(user)
      {
        alert("login has success");
        this.loginFormgroup.reset();
        this.router.navigate(['home']);
        
      }
      else{
        alert("user not found");
        this.loginFormgroup.reset();
      }

    },
    err=>
    {
      alert("something went wrong");
    })
  }


}
