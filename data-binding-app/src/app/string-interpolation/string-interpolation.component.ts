import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  person = {
    firstname: 'John',
    lastname: 'Wick',
    age: 50,
    address: 'Route 66'
  };

  constructor() { }

  ngOnInit() {
  }

}
