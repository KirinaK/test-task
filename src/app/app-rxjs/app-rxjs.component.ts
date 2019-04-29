import { Component, OnInit } from '@angular/core';
import { timer, interval, Observable, combineLatest } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ObjectStream } from '../shared/object-stream.interface';

@Component({
  selector: 'app-app-rxjs',
  templateUrl: './app-rxjs.component.html',
  styleUrls: ['./app-rxjs.component.scss']
})
export class AppRxjsComponent implements OnInit {
  public obj: ObjectStream = {id: null, streamNumber: null };

  constructor() { }

  ngOnInit() {
  }

  startStreams() {
    this.first();
    this.stream(1500, 2);
    this.stream(2000, 3);
    this.forthStream();
    // this.first();
    // this.second();
  }

  stream(time, streamNumber) {
    const period = interval(time);
    const creating = period.subscribe(id => {
      this.obj.id = id++;
      this.obj.streamNumber = streamNumber;
      this.createList(streamNumber, id);
    });

    setTimeout(() => creating.unsubscribe(), 10000);
  }

  createList(streamNumber, id) {
    const ul = document.getElementsByClassName(`rxjs__list-${streamNumber}`)[0];
    const li = document.createElement('li');
    li.setAttribute('class','stream__item');
    li.innerHTML = id;
    ul.appendChild(li);
  }

  first() {
    this.stream(1000,1);
  }

  forthStream() {
   interval(1000).pipe(
     map(() => this.first())
   );
  }


  test() {
    // const combinedTimers = combineLatest(this.first(), this.forthStream());
    // combinedTimers.subscribe(value => console.log(value));
  // let stream2 = new Observable
  // .interval(2000)
  // .withLatestFrom(this.first, (stream2Value, stream1Value) => stream1Value)
  // .do((stream1Value) => console.log("value:", stream1Value));

// stream2.subscribe();

  }

}
