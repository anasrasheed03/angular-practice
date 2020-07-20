import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerError:boolean
  public registerForm:FormGroup;
  constructor(private fb:FormBuilder, private router:Router, private restService:RestService) { }

  ngOnInit() {
    this.createStudentForm();
  }

  public createStudentForm(){
    this.registerForm = this.fb.group({
      email:['',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
      password:['',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
    })
  }

  public register(){
    this.registerForm.markAllAsTouched();
    if(this.registerForm.valid){
      this.restService.register(this.registerForm.value).subscribe(
        (res)=>{
          if(res.token){
            this.router.navigate(['/login'])
          }else{
            this.registerError = true;
          }
        },
        (err)=>{
          this.registerError = true;
        }
      )
    }
  }


}
