import { Component } from '@angular/core';
import { StudentIDService } from '../student-id.service';

@Component({
  selector: 'app-student-id',
  templateUrl: './student-id.component.html',
  styleUrls: ['./student-id.component.css']
})
export class StudentIDComponent {
  studentid:any=[];
  constructor(private _studentidService:StudentIDService){
    _studentidService.getStudentID(this.studentid).subscribe(
      (data:any)=>{
        this.studentid=data;
        console.log(this.studentid);
      },
      (err:any)=>{
        alert("Internal Server Error")
      }
    )
  }
  term:string="";
  filter(){
    this._studentidService.getFilteredStudentID(this.term).subscribe(
      (data:any)=>{
        this.studentid=data;
        console.log(this.studentid);
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )

  }
  column:string="";
  order:string="";
  sort(){
    this._studentidService.getsortedbyStudentID(this.column,this.order).subscribe(
      (data:any)=>{
        this.studentid=data;
        console.log(this.studentid);
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )

  }
  limit:number=0;
  page:number=0;
  pagination(){
    this._studentidService.getpaginatedStudentID(this.limit,this.page).subscribe(
      (data:any)=>{
        this.studentid=data;
        console.log(this.studentid);
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
  }  
  delete(id:number){
    if(confirm("Are Your Sure to Delete ?")==true){
      this._studentidService.deletestudentid(id).subscribe(
        (data:any)=>{
          alert("Record Deleted Successfully");
          location.reload();
        },(err:any)=>{
          alert("Internal Server Error")
        }
      )
    }else{
      alert("You have Cancelled")
    }
  }
}
