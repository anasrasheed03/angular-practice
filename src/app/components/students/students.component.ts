import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

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
  }
  
  public viewStudentDetails(studentId,index){
    this.viewStudentInd = index
    this.selectedStudent = studentId;
    this.viewStudent = true;
  }

  public closeRecord(event:any){
    if(event == 'true'){
    this.viewStudent=false;
  }
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
