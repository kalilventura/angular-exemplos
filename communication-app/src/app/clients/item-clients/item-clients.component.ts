import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from 'src/app/input-binding/client.model';

@Component({
  selector: 'app-item-clients',
  templateUrl: './item-clients.component.html',
  styleUrls: ['./item-clients.component.css']
})
export class ItemClientsComponent implements OnInit {

  @Input() client: Client;
  @Output() updateClient = new EventEmitter<Client>();
  @Output() removeClient = new EventEmitter<any>();

  onEdit: boolean = false;
  name: string;
  age: number;

  constructor() { }

  ngOnInit() {
  }

  save() {
    this.onEdit = false;
    this.updateClient.emit({name: this.name, age: this.age});
  }

  remove() {
    this.removeClient.emit();
  }

  edit() {
    this.onEdit = true;
    this.name = this.client.name;
    this.age = this.client.age;
  }
}
