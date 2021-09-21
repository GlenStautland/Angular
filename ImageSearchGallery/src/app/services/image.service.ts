import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IImages } from '../interface/image';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  API_URL:string = 'https://api.unsplash.com/photos/?client_id=bVC9z76Cv1MNJbZwWec1Am2vxWv8V_OjMEsbY441x04'; 

  getImgList():Observable<IImages[]>{
    return this.http.get<IImages[]>(this.API_URL);
  }
}


