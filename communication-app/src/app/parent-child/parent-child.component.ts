import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {

  // Podemos passar a variavel de template ou o nome do componente
  @ViewChild('stopWatch2')
  private myTimer: TimerComponent;

  @ViewChild('myP')
  private myP: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  start() {
    this.myTimer.start();
  }
  stop() {
    this.myTimer.stop();
  }
  clear() {
    this.myTimer.clear();
  }

  // Depois de tudo carregar vai ser iniciado
  ngAfterViewInit() {
    console.log(this.myP);
    console.log(this.myTimer);
  }
}
