import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formstask',
  templateUrl: './formstask.component.html',
  styleUrls: ['./formstask.component.css']
})
export class FormstaskComponent {
  public userForm:FormGroup=new FormGroup({
    name: new FormControl(),
    class: new FormControl(),
    fathername: new FormControl(),
    dob: new FormControl(),
    email:new FormControl(),
    address:new FormGroup({
      addressline:new FormControl(),
      city:new FormControl(),
      state:new FormControl(),
      pincode:new FormControl('', [Validators.required,Validators.min(100000),Validators.max(999999)])
    }),
    type: new FormControl(''),
    marks:new FormArray([])
  });
  get markFormArry(){
    return this.userForm.get('marks') as FormArray;
  }
  addmarks(){
    this.markFormArry.push(
      new FormGroup({
        class: new FormControl(),
        year: new FormControl(),
        percentage: new FormControl('',[Validators.required,Validators.max(100),Validators.min(0)])
      })
    )
  }
  
  constructor(){
    this.userForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='dayscholar'){
          this.userForm.addControl('busfee',new FormControl());
          this.userForm.removeControl('hostelfee');
        }else{
          this.userForm.addControl('hostelfee',new FormControl());
          this.userForm.removeControl('busfee');
        }
      }
    )
  }
 create(){
  console.log(this.userForm.value);
 }
}
