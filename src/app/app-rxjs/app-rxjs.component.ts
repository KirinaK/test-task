import { Component, OnDestroy } from '@angular/core';
import { interval, Observable, Observer, pipe, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ObjectStream } from '../shared/object-stream.interface';

@Component({
  selector: 'app-app-rxjs',
  templateUrl: './app-rxjs.component.html',
  styleUrls: ['./app-rxjs.component.scss']
})
export class AppRxjsComponent implements OnDestroy {
  public obj: ObjectStream = {id: null, streamNumber: null };
  public idSum: number;
  public isStarted = false;
  private destroy$: Subject<any> = new Subject();
  private subscription: Subscription;

  constructor() { }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }

  public startStreams(): void {
    this.isStarted = true;
    this.idSum = 0;
    this.first(1);
    this.second(2);
    this.third(3);
    this.createFourthStream(4);
  }

  private createStream(time: number, stream: number): number {
    const period = interval(time).pipe(takeUntil(this.destroy$));
    this.subscription = period.subscribe((id: number) => {
      this.obj = {id: id++, streamNumber: stream};
      this.createList(stream, id);
      this.getSumId(stream, id);
    });

    return this.obj.id;
  }

  private createList(stream: number, id: number): void {
    const ul = document.getElementsByClassName(`rxjs__list-${stream}`)[0];
    const li = document.createElement('li');
    li.setAttribute('class', 'stream__item');
    (id) ? li.innerHTML = id.toString() : li.style.display = 'none';
    ul.appendChild(li);
  }

  private first(stream: number): void {
    this.createStream(1000, stream);
  }

  private second(stream: number): void {
    this.createStream(1500, stream);
  }

  private third(stream: number): void {
    this.createStream(2000, stream);
  }

  private createFourthStream(stream: number): void {
    const fourthStream = Observable.create((observer: Observer<any>) => {
      observer.next(this.first(stream));
      setTimeout(() => observer.next(this.second(stream)), 10000);
      setTimeout(() => observer.next(this.third(stream)), 20000);
      setTimeout(() => observer.complete(), 30000);
    });

    this.subscription = fourthStream.subscribe((id: number) => {
        this.createList(4, id);
        this.getSumId(4, id);
      },
      (error: string) => console.log(error)
    );

    setTimeout(() => {
      this.destroy$.next();
      this.subscription.unsubscribe();
    }, 30000);
  }

  private getSumId(stream, id): number {
    if (stream === 4 && id) {
      return this.idSum += id;
    }
  }
}
