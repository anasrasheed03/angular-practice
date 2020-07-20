import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  @Input('studentId') studentId:number;
  public selectedStudent:any;
  @Output() closeStudentRecord = new EventEmitter()
  constructor(private router:Router, private activatedRoute:ActivatedRoute, private restService:RestService) { }

  ngOnInit() {
    this.getStudentDetail();
  }

  public getStudentDetail(): void {
       this.restService.getUserDetail(this.studentId).subscribe(
         (res)=>{
           if(res.data){
             this.selectedStudent = res.data
           }
         }
    )
  }

  public closeStudent(){
    this.closeStudentRecord.emit('true')
  }

}
