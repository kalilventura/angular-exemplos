import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.css']
})
export class ChildItemComponent implements OnInit {

  @Input() title: string;
  @Output() plusOne = new EventEmitter<any>();
  @Output() plusTwo = new EventEmitter<any>();
  @Output() minusOne = new EventEmitter<any>();
  @Output() minusTwo = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  plusOneClick() {
    this.plusOne.emit();
    console.log('+1');
  }
  plusTwoClick() {
    this.plusTwo.emit();
    console.log('+2');
  }
  minusOneClick() {
    this.minusOne.emit();
    console.log('-1');
  }
  minusTwoClick() {
    this.minusTwo.emit();
    console.log('-2');
  }
}
