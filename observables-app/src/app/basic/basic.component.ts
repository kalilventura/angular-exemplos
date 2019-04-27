import { Component, OnInit } from '@angular/core';
import { Observable, Observer, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

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
    // Next busca os dados
    // O subscribe é uma função assincrona
    const myFirstObsevable = new Observable(
      (observer: Observer<number>) => {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.next(4);
        observer.next(5);
        observer.error('Error Here');
        observer.complete();
      }
    );
    // É preciso fazer o subscribe para obter os dados
    myFirstObsevable.subscribe(
      (n: number) =>  console.log(n),
      (error) => console.error(error),
      () => console.log('Completed.')
    );
    // const timerCount = interval(500);
    // timerCount.subscribe(
    //   (n) => console.log(n)
    // );
    // console.log('After Interval');

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
    this.subscription1 = myIntervalObservable.subscribe(
        (n) => this.n1 = n,
        (error) => this.s1 = 'Error',
        () => this.s1 = 'Completed'
      );
    this.subscription2 = myIntervalObservable.subscribe(
        (n) => this.n2 = n,
        (error) => this.s2 = 'Error',
        () => this.s1 = 'Completed'
      );
    setTimeout(() => {
      // Para desinscrever no Observable
        this.subscription1.unsubscribe();
        this.subscription2.unsubscribe();
      }, 11000);
  }

}
