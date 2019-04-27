import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, Observer, Observable } from 'rxjs';

@Component({
  selector: 'app-hot-observable',
  templateUrl: './hot-observable.component.html',
  styleUrls: ['./hot-observable.component.css']
})
export class HotObservableComponent implements OnInit {

  @ViewChild('myButton') button: ElementRef;

  n1: number = 0;
  n2: number = 0;
  s1: string = '';
  s2: string = '';
  constructor() { }

  ngOnInit() {
    let myButtonClickObservable: Observable<number> = fromEvent(this.button.nativeElement, 'click');
    myButtonClickObservable.subscribe((event) => console.log('button clicked 1'));
    myButtonClickObservable.subscribe((event) => console.log('button clicked 2'));

    class Producer {
      private myListners = [];
      private n = 0;
      private id;

      addListener(l) {
        this.myListners.push(l);
        console.log(this.myListners.length);
      }

      start() {
        this.id = setInterval(() => {
          this.n++;
          console.log('From Producer: ', this.n);
          for (let l of this.myListners) {
            l(this.n);
          }
        }, 1000);
      }
    }
    let producer: Producer = new Producer();
    producer.start();
    setTimeout(() => {
      producer.addListener((n) => console.log('From Listener 1: ', n));
      producer.addListener((n) => console.log('From Listener 2: ', n));
    }, 4000);

    const myHotObservable = new Observable (
      (observer: Observer<any>) => {
        producer.addListener((n) => observer.next(n));
    });

    myButtonClickObservable.subscribe((event) => console.log('From Subscriber 1', event));
    myButtonClickObservable.subscribe((event) => console.log('From Subscriber 2', event));

  }

}
