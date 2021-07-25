import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';


@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  EmployeList:any=[];
  ModalTitle:string | undefined;
  ActivateAddEditEmpComp:boolean=false;
  emp:any;

  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick(){
    this.emp={
      EmployeId:0,
      EmployeName:"",
      Department:"",
      DateOfJoining:"",
      PhotoFileName:"testfile.png"
    }
    this.ModalTitle="Add Employe";
    this.ActivateAddEditEmpComp=true;
  }

  closeClick(){
    this.ActivateAddEditEmpComp = false;
    this.refreshEmpList();
  }

  editClick(item:any){
    
    this.emp=item;
    this.ModalTitle = "Edit Employe";
    this.ActivateAddEditEmpComp=true;

  }

  deleteClick(item:any){
    if(confirm("Are you sure you want to delete?")){
      this.service.deleteEmploye(item.EmployeId).subscribe(data=>{
        alert(data.toString());
        this.refreshEmpList();
      });
    }
  }

  refreshEmpList(){
    this.service.getEmpList().subscribe(data=>{
      this.EmployeList=data;
    });
  }
}

