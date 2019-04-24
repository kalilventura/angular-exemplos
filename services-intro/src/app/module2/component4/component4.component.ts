import { Component, OnInit } from '@angular/core';
import { Service1 } from '../service1.service';
import { Service2 } from 'src/app/service2.service';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  // providers: [Service1Service],
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit {

  num: number = 0;
  text: string = '';
  constructor(private myService1: Service1,
              private myService2: Service2) { }

  ngOnInit() {
    this.num = this.myService1.num;
    this.text = this.myService2.text;
  }

}
