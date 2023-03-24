import { Component } from '@angular/core';
import {from, Observable} from "rxjs";
import {DatePipe} from "@angular/common";
import {dateTimestampProvider} from "rxjs/internal/scheduler/dateTimestampProvider";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ''
  title$ = new Observable(observer => {
    setInterval(() => {
      observer.next();
    }, 2000);
  });

  private setTitle = () => {
    const timestamp = new Date().getTime();
    this.title = `Learning Angular {${timestamp}}`;
  }

  private onComplete() {
    return new Promise<void>(resolve => {
      setInterval(() => {
        resolve();
      }, 2000)
    });
  }

  constructor() {
    const complete$ = from(this.onComplete());
    complete$.subscribe(this.setTitle);
  }
}
