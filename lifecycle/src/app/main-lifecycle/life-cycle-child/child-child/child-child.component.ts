import { Component, OnInit, Input, OnChanges, AfterViewInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-child',
  templateUrl: './child-child.component.html',
  styleUrls: ['./child-child.component.css']
})
export class ChildChildComponent implements OnInit, OnChanges, AfterViewInit {

  @Input() name: string;

  constructor() { }

  ngOnInit() {
    console.log('Child Child (ngOnInit) - ' + this.name);
  }

  ngAfterViewInit() {
    console.log('Child Child (ngAfterViewInit) - ' + this.name);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Child Child (ngOnChanges) - ' + this.name);
  }

}
