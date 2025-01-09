import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profile : any=[];
  constructor(private _profileService:ProfileService){
    _profileService.getprofile().subscribe(
      (data:any)=>{
       this.profile=data;
       console.log(this.profile);
      }
    )
  }

}
