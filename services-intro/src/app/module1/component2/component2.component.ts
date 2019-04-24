import { Component, OnInit } from '@angular/core';
import { Service1 } from '../service1.service';
import { Service2 } from 'src/app/service2.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  // providers: [Service1],
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  num: number = 0;
  text: string = '';
  constructor(private myService1: Service1,
              private myService2: Service2) { }

  ngOnInit() {
    this.num = this.myService1.num;
    this.text = this.myService2.text;
  }

}
