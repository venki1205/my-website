import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  accounts:any=[];
  constructor(private _accountsService:AccountsService){
    _accountsService.getAccounts().subscribe(
      (data:any)=>{
        this.accounts=data;
        console.log(this.accounts);
      }, (err:any)=>{
        alert("Internal Server Error")
      }
    )
  }
  delete(id:number){
    if(confirm("Are you Sure to Delete")==true){
      this._accountsService.deleteAccounts(id).subscribe(
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

  limit:number=0;
  page:number=0;
  pagination(){
    this._accountsService.getpaginatedAccounts(this.limit,this.page).subscribe(
      (data:any)=>{
        this.accounts=data;
        console.log(this.accounts);
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
  }
  term:string="";
  filter(){
    this._accountsService.getFilteredAccounts(this.term).subscribe(
      (data:any)=>{
        this.accounts=data;
        console.log(this.accounts);
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
  }
  column:string="";
  order:string="";
  sort(){
    this._accountsService.getsortedAccounts(this.column,this.order).subscribe(
      (data:any)=>{
        this.accounts=data;
        console.log(this.accounts);
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
  }

}
