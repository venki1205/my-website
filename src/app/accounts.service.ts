import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  baseurl:string="https://6128991386a213001729f9df.mockapi.io/test/v1/principals";

  constructor(private _httpClient:HttpClient) { }
  getAccounts():Observable<any>{
    return this._httpClient.get(this.baseurl);
  }
  deleteAccounts(id:number){
    return this._httpClient.delete(this.baseurl+"/"+id)
  }
  getpaginatedAccounts(limit:number,page:number):Observable<any>{
    return this._httpClient.get(this.baseurl+"?limit="+limit+"&page="+page)
  }
  getFilteredAccounts(term:string):Observable<any>{
    return this._httpClient.get(this.baseurl+"?filter="+term)

  }
  getsortedAccounts(column:string,order:string):Observable<any>{
    return this._httpClient.get(this.baseurl+"?sortBy="+column+"&order="+order);

  }
  getAccount(id:number):Observable<any>{
    return this._httpClient.get(this.baseurl+"/"+id)
  }
}
