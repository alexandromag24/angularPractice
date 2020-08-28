import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {
  properties: Array<IProperty>;
  constructor(private service: ServiceService) { 
      this.getHouses();
  }
  getHouses(){
    this.service.getHouses().subscribe(data =>{
      this.properties = data;
      },error =>{
        console.log(error);
      }      
    )
  }
}
