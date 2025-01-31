import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  baseurl:string="/assets/data.json"
  
  // baseurl:string="https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction";
  constructor(private _httpClient:HttpClient) { }
  getVehicles():Observable<any>{
    return this._httpClient.get(this.baseurl+"?filter=")
  }
  getFilteredVehicles(term:string):Observable<any>{
    return this._httpClient.get(this.baseurl+"?filter="+term)
  }
  getsortedVehicles(column:string,order:string):Observable<any>{
    return this._httpClient.get(this.baseurl+"?sortBy="+column+"&order="+order);
  }
  getpaginatedVehicles(limit:number,page:number):Observable<any>{
    return this._httpClient.get(this.baseurl+"?limit="+limit+"&page="+page);
  }
  deleteVehicle(id:number){
    return this._httpClient.delete(this.baseurl+"/"+id);
  }
  createVehicle(data:any){
    return this._httpClient.post(this.baseurl,data);
  }
  getVehicle(id:number):Observable<any>{
    return this._httpClient.get(this.baseurl+"/"+id);
  
  }
  updateVehicle(id:number,data:any):Observable<any>{
    return this._httpClient.get(this.baseurl+"/"+id,data);
  
  }
}
