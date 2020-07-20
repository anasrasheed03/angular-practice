import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginError:boolean;
  public loginForm:FormGroup;
  constructor(private fb:FormBuilder, private router:Router, private restService:RestService) { }

  ngOnInit() {
    this.createStudentForm();
  }

  public createStudentForm(){
    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
      password:['',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
    })
  }

  public login(){
    this.loginForm.markAllAsTouched();
    if(this.loginForm.valid){
      this.restService.login(this.loginForm.value).subscribe(
        (res)=>{
          if(res){
            this.router.navigate(['/home'])
          }else{
            this.loginError = true;
          }
        },
        (err)=>{
          this.loginError = true;
        }
      )
    }
  }

}
