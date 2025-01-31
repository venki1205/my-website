import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts-details',
  templateUrl: './accounts-details.component.html',
  styleUrls: ['./accounts-details.component.css']
})
export class AccountsDetailsComponent {
accounts: any=[];

constructor(private _activatedRoute:ActivatedRoute,private _accountsService:AccountsService){
  _activatedRoute.params.subscribe(
    (data:any)=>{
      console.log(data.id);
      _accountsService.getAccount(data.id).subscribe(
        (data:any)=>{
          this.accounts=data;
          console.log("data",data);
        }
      )
    }
  )
}

}
