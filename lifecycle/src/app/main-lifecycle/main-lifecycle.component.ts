import { Component, OnInit } from '@angular/core';
import { Client } from '../client.interface';

@Component({
  selector: 'app-main-lifecycle',
  templateUrl: './main-lifecycle.component.html',
  styleUrls: ['./main-lifecycle.component.css']
})
export class MainLifecycleComponent implements OnInit {

  private foods: string[] = ['Rice', 'Beans', 'Pizza', 'Bread'];
  private clients: Array<Client> = [];
  private name: string;
  private age: number;
  private food: string;
  private editClient: number = -1;
  constructor() {}

  ngOnInit() {}

  save() {
    if (this.editClient === -1) {
      this.clients.push({
        name: this.name,
        age: this.age,
        food: this.food
      });
    } else {
      this.clients[this.editClient].age = this.age;
      this.clients[this.editClient].name = this.name;
      this.clients[this.editClient].food = this.food;
      this.editClient = -1;
    }
    this.age = null;
    this.name = '';
    this.food = '';
  }

  refresh() {
    this.age = null;
    this.name = '';
    this.food = '';
  }

  edit(i: number) {
    this.age = this.clients[i].age;
    this.name = this.clients[i].name;
    this.food = this.clients[i].food;
    this.editClient = i;
  }

  delete(i: number) {
    this.clients.splice(i, 1);
  }
}
