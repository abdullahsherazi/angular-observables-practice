import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable, observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  ngOnInit() {
    // this.subscription = interval(1000).subscribe((count: Number) => {
    //   console.log(count);
    // });
    let customObservable = Observable.caller((observer: any) => {
      let count: number = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000);
    });

    this.subscription = customObservable.subscribe((observe: any) => {
      console.log(observe);
    });
  }
  unsubs = () => {
    this.subscription.unsubscribe();
  };
  ngOnDestroy() {}

  title = 'angular-observables';
}
