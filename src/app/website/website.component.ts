import { Component } from '@angular/core';
import { Router, RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent {

  constructor(private _router:Router){}
  logout(){
    sessionStorage.removeItem('token');
    alert("Logout Successfully!");
    this._router.navigateByUrl("/login");
  }
}
