import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IImages } from 'src/app/interface/image';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-show-images',
  templateUrl: './show-images.component.html',
  styleUrls: ['./show-images.component.css']
})
export class ShowImagesComponent implements OnInit {

  constructor(private service:ImageService) { }
  
  ImageList: IImages[] =[]; 
  Images$!: Observable<IImages[]>;

  searchImage!:any;
  private searcTerms = new Subject<string>();
 
  ngOnInit(): void {
    this.getImage(); 
  }

  getImage():void{
    this.service.getImgList().subscribe(data=>this.ImageList=data);  
  }

  search(){
    if(this.searchImage ==""){
      this.ngOnInit();
    }else{
      this.ImageList = this.ImageList.filter(res=>{
        return res.alt_description.toLowerCase().match(this.searchImage.toLowerCase())
      })
    }
  }
 

}
