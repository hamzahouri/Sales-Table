import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  //create an array of object
  salesPersonList : SalesPerson[]=[
    new SalesPerson("hamza","houri","hamzahouri@wincor.com",5000),
    new SalesPerson("sara","ilham","sarri-yay@wincor.com",1000),
    new SalesPerson("jaafar","dahkaan","jaafar-dahkani@wincor.com",2600),
    new SalesPerson("haron","hmidan","hamidan@wincor.com",500),
    new SalesPerson("khalid","ahmadi","ahmadi-yan@wincor.com",1500),
    new SalesPerson("abraham","alansari","ibrahimov.vitch@wincor.com",3500)

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
