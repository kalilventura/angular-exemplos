import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.css']
})
export class NgForFormComponent implements OnInit {

  name: string;
  address: string;
  phone: string;
  city: string;
  age: number;
  cities = [
    {name: 'São Paulo', state: 'SP'},
    {name: 'Rio de Janeiro', state: 'RJ'},
    {name: 'Curitiba', state: 'PR'},
    {name: 'Porto Alegre', state: 'RS'}
  ];

  clients = [];
  constructor() {}

  ngOnInit() {}

  save() {
    this.clients.push(
      {
        name : this.name,
        address: this.address,
        city: this.city,
        age: this.age,
        phone: this.phone
      }
    );
    console.log(this.clients);
  }

  cancel() {
    this.name = '';
    this.address = '';
    this.city = '';
    this.age = 0;
    this.phone = '';
  }

}
