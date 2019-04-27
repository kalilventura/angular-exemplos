import { Component, OnInit } from '@angular/core';
import { Observable, Observer, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-cold-observables',
  templateUrl: './cold-observables.component.html',
  styleUrls: ['./cold-observables.component.css']
})
export class ColdObservablesComponent implements OnInit {

  subscription1: Subscription;
  subscription2: Subscription;
  n1: number = 0;
  n2: number = 0;
  s1: string = '';
  s2: string = '';
  constructor() { }

  ngOnInit() {
    this.s1 = 'Initializing...';
    this.s2 = 'Initializing...';
    const myIntervalObservable = new Observable(
      (observer: Observer<any>) => {
        let i: number = 0;
        let id = setInterval(() => {
          i++;
          console.log('From Observable: ', i);
          if (i === 10) { observer.complete(); } else
          if (i % 2 === 0){
            observer.next(i);
          }
        }, 1000);
        // Quando o Observable for completado vai iniciar essa função
        return () => {
          clearInterval(id);
        };
      });
      // Aqui está sendo gerado duas vezes a instanicia do observable
    this.s1 = 'Waiting to interval ...';
    this.subscription1 = myIntervalObservable.subscribe(
        (n) => this.n1 = n,
        (error) => this.s1 = 'Error',
        () => this.s1 = 'Completed'
      );

    this.s2 = 'Waiting to interval ...';
    setInterval(() => {
    this.subscription2 = myIntervalObservable.subscribe(
        (n) => this.n2 = n,
        (error) => this.s2 = 'Error',
        () => this.s2 = 'Completed'
      );
    }, 3000);
    setTimeout(() => {
      // Para desinscrever no Observable
        this.subscription1.unsubscribe();
        this.subscription2.unsubscribe();
      }, 11000);
  }

}
