import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { IProperty } from '../IProperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {
  SellRent = 1;
  properties: Array<IProperty>;
  constructor(private service: ServiceService, private route: ActivatedRoute) {
    if ( this.route.snapshot.url.toString()) {
      this.SellRent = 2;
    }
    this.getHouses();
  }
  getHouses() {
    this.service.getHouses(this.SellRent).subscribe(data => {
      this.properties = data;
      console.log(this.route.snapshot.url.toString());
      }, error => {
        console.log(error);
      }
    );
  }
}
