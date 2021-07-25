import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl ="http://localhost:31852/api";
  readonly PhotoUrl ="http://localhost:31852/Photos/";

  constructor(private http:HttpClient) { }


  // Department API
  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Department');
  }

  addDepartment(val:any){
    return this.http.post(this.APIUrl+'/Department',val);  
  }

  updateDepartment(val:any){
    return this.http.put(this.APIUrl+'/Department',val);  
  }

  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl+'/Department/'+val);  
  }

  // Employe API
  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employe');
  }

  addEmploye(val:any){
    return this.http.post(this.APIUrl+'/Employe',val);  
  }

  updateEmploye(val:any){
    return this.http.put(this.APIUrl+'/Employe',val);  
  }

  deleteEmploye(val:any){
    return this.http.delete(this.APIUrl+'/Employe/'+val);  
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Employe/SaveFile',val);
  }

  getallDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Employe/GetAllDepartmentNames')
  }

  

}
