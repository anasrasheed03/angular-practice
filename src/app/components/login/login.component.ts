import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm:FormGroup;
  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit() {
    this.createStudentForm();
  }

  public createStudentForm(){
    this.loginForm = this.fb.group({
      userName:['',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
      password:['',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
    })
  }

  public login(){
    this.loginForm.markAllAsTouched();
    if(this.loginForm.valid){
      this.router.navigate(['/home'])
    }
  }

}
