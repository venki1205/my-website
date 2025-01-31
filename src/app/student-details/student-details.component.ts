import { Component } from '@angular/core';
import { StudentIDService } from '../student-id.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  studentid: any=[];
  constructor(private _activatedRoute:ActivatedRoute,private _studentidService:StudentIDService){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        _studentidService.getstudentid(data.id).subscribe(
          (data:any)=>{
            this.studentid=data;
            console.log("data",data);
          }
        )
      }
    )

  }

}
