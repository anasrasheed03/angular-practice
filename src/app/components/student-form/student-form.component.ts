import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from './studentformModel';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  public studentForm:FormGroup;
  public viewAddStudentForm:boolean;
  public students:Student[]=[];
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

  public createStudentForm(){
    this.studentForm = this.fb.group({
      firstName:['',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
      lastName:['',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
      dept:['',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
      email:['',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
      age:[null,[Validators.required,Validators.min(18),Validators.max(50)]],
      active:[false]
    })
  }

  public addStudent(){
    this.viewAddStudentForm = !this.viewAddStudentForm;
    if(this.viewAddStudentForm)
    this.createStudentForm();
  }


  public closeStudent(){
    this.viewAddStudentForm = !this.viewAddStudentForm;
    
  }

  public addNewStudent(){
    this.studentForm.markAllAsTouched();
    if(this.studentForm.valid){
      this.students.push(this.studentForm.value)
      console.log(this.students)
    }
  }

}
