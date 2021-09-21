import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem }  from 'angular-gridster2';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  options!: GridsterConfig;
  dashboard!: Array<GridsterItem>;

  static itemChange(item:any, itemComponent:any) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item:any, itemComponent:any) {
    console.info('itemResized', item, itemComponent);
  }

  constructor() {}

  

  ngOnInit() {
    this.options = {
      itemChangeCallback: DashboardComponent.itemChange,
      itemResizeCallback: DashboardComponent.itemResize,
    };

    this.dashboard = [
      {cols: 2, rows: 1, y: 0, x: 0},
      {cols: 2, rows: 2, y: 0, x: 2}
    ];
  }

 

  removeItem(item:any) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  
       

}
