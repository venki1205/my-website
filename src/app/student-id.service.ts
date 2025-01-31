import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentIDService {
  createstudentID() {
    throw new Error('Method not implemented.');
  }
  updateStudentID(studentid: any, value: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private _httpClient:HttpClient) { }
  getStudentID(studentid: any):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student")
  }
  getFilteredStudentID(term:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+term)
  }
  getsortedbyStudentID(column:string,order:string):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy="+column+"&order="+order);
  }
  getpaginatedStudentID(limit:number,page:number):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit="+limit+ "&page="+page);
  }
  deletestudentid(id:number):Observable<any>{
    return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id);
  }
  getstudentid(id:number):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id);
  }
}
