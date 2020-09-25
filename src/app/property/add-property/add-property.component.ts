import { IProperty } from './../IProperty.interface';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import {NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form', {static: false}) addPropertyForm: NgForm;
  @ViewChild('formTabs', {static: false}) tabSet: NgbTabset;
  // Will come from masters
  yes: string;
  no: string;
  East: string;
  West: string;
  South: string;
  North: string;
  sell: string;
  active: string;
  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex']
  furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished']
  model: NgbDateStruct;
  today = this.calendar.getToday();
  propertyView : IProperty = {
    id: null,
    name: '',
    price: null,
    sellRent: null,
    type: null,
  };
  constructor(private router: Router, private calendar: NgbCalendar) { }

  ngOnInit() {
  }

  onBack(){
    this.router.navigate(['/']);
  }
  onNext(id: number) {
    this.tabSet.tabs[1].active = true;
  }
}
