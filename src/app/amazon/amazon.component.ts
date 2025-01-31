import { Component } from '@angular/core';
import { AmazonService } from '../amazon.service';

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent {
  amazon:any=[];
  constructor(private _amazonService:AmazonService) {
    _amazonService.getAmazon().subscribe(
      (data:any)=>{
        this.amazon=data;
        console.log(this.amazon);
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
    
  }

}
