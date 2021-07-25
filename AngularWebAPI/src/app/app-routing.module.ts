import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {EmployeComponent} from './components/employe/employe.component';
import { DepartmentComponent } from './components/department/department.component';

const routes: Routes = [
  {path:'employe',component:EmployeComponent},
  {path:'department',component:DepartmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
