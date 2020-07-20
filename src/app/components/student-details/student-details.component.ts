import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  public studentList:Array<any>;
  public selectedStudent:any;
  constructor(private router:Router, private activatedRoute:ActivatedRoute, private restService:RestService) { }

  ngOnInit() {
    // this.studentList=[
    //   {id:1,firstName:'Anas',lastName:'Rasheed',age:26,dept:'CS',email:'anas.rasheed@systemsltd.com'},
    //   {id:2,firstName:'Mohammed',lastName:'Umer',age:25,dept:'CE',email:'mohammad.umer@systemsltd.com'},
    //   {id:3,firstName:'Syed',lastName:'Hasnain',age:24,dept:'CIS',email:'syed.hasnain@systemsltd.com'},
    //   {id:4,firstName:'Fazeel',lastName:'Ahmed',age:26,dept:'CS',email:'fazeel.ahmed@systemsltd.com'},
    //   {id:5,firstName:'Mohammed',lastName:'Ali',age:25,dept:'CS',email:'mohammed.ali@systemsltd.com'},
    // ]
    this.getStudentDetail();
    console.log(this.selectedStudent)
  }

  public getStudentDetail(): void {
    const id = +this.activatedRoute.params.subscribe(
      (res)=>{
        
       this.restService.getUserDetail(res['id']).subscribe(
         (res)=>{
           if(res.data){
             this.selectedStudent = res.data
           }
         }
       )
      }
    )
  }

  public closeStudent(){
    this.router.navigate(['/home'])
  }

}
