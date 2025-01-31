import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component {
count:number=0;
constructor(private _commonSerice:CommonService){}
send(){
  this._commonSerice.countSub.next(this.count);
}
}
