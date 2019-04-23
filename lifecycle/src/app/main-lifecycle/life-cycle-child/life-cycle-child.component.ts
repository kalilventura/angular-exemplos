import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges, AfterContentInit, AfterViewInit } from '@angular/core';

export interface LifeCycleEvent {
  id: number;
  name: string;
  color: string;
}

@Component({
  selector: 'app-life-cycle-child',
  templateUrl: './life-cycle-child.component.html',
  styleUrls: ['./life-cycle-child.component.css']
})
export class LifeCycleChildComponent implements OnInit, OnDestroy, OnChanges, AfterContentInit, AfterViewInit {

  @Input() name: string;
  @Input() age: number;
  @Input() favoriteFood: string;

  public events: LifeCycleEvent[] = [];
  nextEventId: number = 0;
  color: string;
  colors: string[] = ['accent', 'warn', 'primary'];

  constructor() {
    console.log(this.name + ' constructor');
    this.newEvent('constructor');
   }

  // (Inicializador) Chamado depois do onChanges, ele mostra que foi iniciado
  // Amplamente utilizado para fazer inicializações no template
  ngOnInit() {
    console.log(this.name + ' onInit');
    this.newEvent('onInit');
  }

  ngOnDestroy() {
    console.log(this.name + ' onDestroy');
    this.newEvent('onDestroy');
  }

  // (Modificação) A cada mudança em cada componente vai ser chamada a função
  ngOnChanges(changes: SimpleChanges) {
    console.log(this.name + ' onChanges');
    console.log(changes);
    this.newEvent('onChanges');
  //   for (let change in changes) {
  //     console.log(change);
  //     console.log(changes[change]);
  // }
  // if (changes.name) {
  //   console.log('Previous name: ' + changes.name.previousValue);
  //   console.log('New name: ' + changes.name.currentValue);
  // }
  }

  // Esse metodo é chamado depois que a projeção é enviada pra o componente mais interno
  ngAfterContentInit() {
    console.log(this.name + ' afterInit');
    this.newEvent('afterInit');
  }

  // Depois que toda a parte visual foi inicializada esse método será chamado
  ngAfterViewInit() {
    console.log(this.name + ' afterViewInit');
    this.newEvent('afterViewInit');
  }

  newEvent(nameEvent: string) {
    let i = this.nextEventId++;
    this.events.push(
      {
        id: i,
        color: this.colors[i % this.colors.length],
        name: nameEvent
      });
    setTimeout(() => {
        let idx = this.events.findIndex((e) => e.id === i);
        if (idx >= 0) {
          this.events.splice(idx, 1);
        }
    }, 3000 + this.events.length * 2000);
  }
}
