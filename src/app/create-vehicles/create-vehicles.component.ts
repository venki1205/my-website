import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicles',
  templateUrl: './create-vehicles.component.html',
  styleUrls: ['./create-vehicles.component.css']
})
export class CreateVehiclesComponent {
  id:number=0;
  constructor(private _activatedRoute:ActivatedRoute, private _vehicleService:VehicleService, private _router:Router){
      //capturing id with activated route
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
        //integrating API
        _vehicleService.getVehicle(data.id).subscribe(
          (data:any)=>{
            console.log(data);
            //display the date in form
            this.vehicleForm.patchValue(data);
          }
        )
      }
    )
  }

  public vehicleForm:FormGroup=new FormGroup(
    {
      Vehicle:new FormControl(),
      manufacturer:new FormControl(),
      model:new FormControl(),
      cost:new FormControl(),
      type:new FormControl(),
      fuel:new FormControl(),
      color:new FormControl(),
      image:new FormControl(),

    }
  )
  submit(){
    //update vehicle
    if(this.id){
      this._vehicleService.updateVehicle(this.id,this.vehicleForm.value).subscribe(
        (data:any)=>{
          alert("updated successfully!");
          this._router.navigateByUrl("/website/vehicle")
        },(err:any)=>{
          alert("Internal Server Error")
        }
      )
    }
    //create vehicle
    console.log(this.vehicleForm.value);
    this._vehicleService.createVehicle(this.vehicleForm.value).subscribe(
    (data:any)=>{
      console.log(data);
      alert("Vehicle created successfully");
      //this._router.navigate(["/vehicle"]);
      this._router.navigateByUrl("/website/vehicle")
    },(err:any)=>{
      alert("Internal Server Error");
    }
  )
  }

}
