import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';


@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() emp:any;
  EmployeId!:string;
  EmployeName!:string;
  Department!:string;
  DateOfJoining!:string;
  PhotoFileName!:string;
  PhotoFilePath!:string;

  DepartmentList:any=[];

  ngOnInit(): void {
    this.loadDepartmenList();
  }

  loadDepartmenList(){
    this.service.getallDepartmentNames().subscribe((data:any)=>{
        this.DepartmentList=data;
        this.EmployeId=this.emp.EmployeId;
        this.EmployeName=this.emp.EmployeName;
        this.Department=this.emp.Department;
        this.DateOfJoining=this.emp.DateOfJoining;
        this.PhotoFileName=this.emp.PhotoFileName;
        this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    });
  }

  addEmploye(){
    var val = {EmployeId:this.EmployeId,
              EmployeName:this.EmployeName,
              Department:this.Department,
              DateOfJoining:this.DateOfJoining,
              PhotoFileName:this.PhotoFileName};
    this.service.addEmploye(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateEmploye(){
    var val = {EmployeId:this.EmployeId,
              EmployeName:this.EmployeName,
              Department:this.Department,
              DateOfJoining:this.DateOfJoining,
              PhotoFileName:this.PhotoFileName};
    this.service.updateEmploye(val).subscribe(res=>{
    alert(res.toString());
    });
  }

  uploadPhoto(event:any){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
    })
  }

}
