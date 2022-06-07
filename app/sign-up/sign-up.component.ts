import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
public SignUpForm !:FormGroup
  constructor(private formbuilder:FormBuilder ,private _http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    
    this.SignUpForm=this.formbuilder.group({
      FullName:['',Validators.required],
      PhoneNumber:['',Validators.required],
      Email:['',Validators.required],
      Password:['',Validators.required]

    }
    )
  }
  SignUp()
  {
    console.log("jjj");
    this._http.post<any>("http://localhost:3000/signupusers",this.SignUpForm.value).subscribe(res=>{
      alert("signup successfull!");
      this.SignUpForm.reset();
      this.router.navigate(['login']);
    }, err=>{
      alert("something went wrong!");
    });
  }

}
