import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { timeStamp } from 'console';

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
  constructor(private restService:RestService) { }

  ngOnInit() {
    this.getUserList();
    // this.studentList=[
      // {id:1,firstName:'Anas',lastName:'Rasheed',age:26,dept:'CS',email:'anas.rasheed@systemsltd.com'},
      // {id:2,firstName:'Mohammed',lastName:'Umer',age:25,dept:'CE',email:'mohammad.umer@systemsltd.com'},
      // {id:3,firstName:'Syed',lastName:'Hasnain',age:24,dept:'CIS',email:'syed.hasnain@systemsltd.com'},
      // {id:4,firstName:'Fazeel',lastName:'Ahmed',age:26,dept:'CS',email:'fazeel.ahmed@systemsltd.com'},
      // {id:5,firstName:'Mohammed',lastName:'Ali',age:25,dept:'CS',email:'mohammed.ali@systemsltd.com'},
    // ]
  }
  
  public viewStudentDetails(studentData,index){
    this.viewStudentInd = index
    this.viewStudent = true;
    this.selectedStudent = studentData;
  }

  public closeStudent(){
    this.viewStudent=false;
  }

  public getUserList(){
    this.restService.getUserList().subscribe(
      (res)=>{
        if(res.data.length > 0){
          this.studentList = res.data
        }
      }
    )
  }
}
