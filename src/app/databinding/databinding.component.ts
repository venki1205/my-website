import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  
  name:string="venkatesh";
  age:number=30;
  email:string="venkatesh.errolla1205@gmail.com";

  isIndian:boolean=true;

  phone:string="+91"

  num1:number=0;
  num2:number=0;
  result:number=0;

  sum(){
    this.result=this.num1+this.num2;
    console.log(this.result);
  }

  //user:any={//
   // name:"venkatesh",//
   // age:30,//
   // email:"venkatesh.errolla1205@gmail.com",//
  //}//

  submit(){
    alert("clicked submit button")
  }
  typing(){
    alert("Typing.......")
}

}
