import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {
  users = [
    {login: 'Bob', role: 'Admin', lastLogin: new Date('2/1/2017')},
    {login: 'Lia', role: 'User', lastLogin: new Date('2/1/2019')},
    {login: 'John', role: 'Admin', lastLogin: new Date('2/1/2018')},
    {login: 'Robin', role: 'User', lastLogin: new Date('11/10/2019')},
  ];
  constructor() { }

  ngOnInit() {
  }

}
