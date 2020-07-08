import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  public studentList:Array<any>;
  public selectedStudent:any;
  public viewStudentInd:number;
  public viewStudent:boolean
  constructor() { }

  ngOnInit() {
    this.studentList=[
      {firstName:'Anas',lastName:'Rasheed',age:26,dept:'CS',email:'anas.rasheed@systemsltd.com'},
      {firstName:'Mohammed',lastName:'Umer',age:25,dept:'CE',email:'mohammad.umer@systemsltd.com'},
      {firstName:'Syed',lastName:'Hasnain',age:24,dept:'CIS',email:'syed.hasnain@systemsltd.com'},
      {firstName:'Fazeel',lastName:'Ahmed',age:26,dept:'CS',email:'fazeel.ahmed@systemsltd.com'},
      {firstName:'Mohammed',lastName:'Ali',age:25,dept:'CS',email:'mohammed.ali@systemsltd.com'},
    ]
  }
  
  public viewStudentDetails(studentData,index){
    this.viewStudentInd = index
    this.viewStudent = true;
    this.selectedStudent = studentData;
  }

  public closeStudent(){
    this.viewStudent=false;
  }
}
